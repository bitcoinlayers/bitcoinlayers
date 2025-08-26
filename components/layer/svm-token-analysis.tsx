"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon, Shield, Key, Search, Code, ChevronDown, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SVMTokenContract {
    address: string;
    network: string;
    wrapperName?: string;
    token_slug?: string;
    network_slug?: string;
    token_name?: string;
}

interface SVMAnalysisData {
    mint_address: string;
    basic_info: {
        mint_address: string;
        supply: number;
        decimals: number;
        mint_authority: string | null;
        freeze_authority: string | null;
        is_initialized: boolean;
        owner_program: string;
        is_token_2022: boolean;
    };
    metadata: {
        name: string;
        symbol: string;
        description: string;
        image: string | null;
        external_url: string | null;
        attributes: any;
        properties: any;
    };
    supply_info: {
        total_supply: number;
        circulating_supply: string;
        max_supply: number | null;
        holders_count: number | null;
    };
    security_analysis: {
        mint_authority: string | null;
        freeze_authority: string | null;
        is_mutable: boolean;
        has_update_authority: boolean;
        is_verified: boolean;
        security_score: number;
        risk_factors: string[];
    };
    governance_info: {
        governance_type: string;
        authority_analyses: Record<string, any>;
        overall_risk_score: number;
        governance_summary: {
            total_authorities: number;
            governance_type: string;
            key_findings: string[];
            recommendations: string[];
        };
    };
    errors: string[];
    analysis_metadata: {
        analyzer_version: string;
        network: string;
        analysis_date: string;
        wrapper_name: string;
        project_name: string;
        explorer_url: string;
    };
}

interface SVMTokenAnalysisProps {
    contract: SVMTokenContract;
}

const AuthorityIcon = ({ authorityType }: { authorityType: string }) => {
    switch (authorityType.toLowerCase()) {
        case 'mint':
            return <Key className="h-4 w-4" />;
        case 'freeze':
            return <Shield className="h-4 w-4" />;
        default:
            return <Code className="h-4 w-4" />;
    }
};

const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function SVMTokenAnalysis({ contract }: SVMTokenAnalysisProps) {
    const [analysisData, setAnalysisData] = useState<SVMAnalysisData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSVMAnalysis = async () => {
            if (!contract) return;
            
            setLoading(true);
            setError(null);
            
            try {
                // Get the wrapper slug from the contract data
                let wrapperSlug = contract.token_slug || contract.wrapperName || contract.token_name;
                
                if (wrapperSlug) {
                    wrapperSlug = wrapperSlug.toLowerCase().replace(/\s/g, '-');
                }
                
                if (!wrapperSlug) {
                    setError("No wrapper slug available for analysis");
                    return;
                }
                
                const normalizedAddress = contract.address.toLowerCase();
                const networkParam = contract.network ? `?network=${encodeURIComponent(contract.network)}` : '';
                const analysisPath = `/api/token-analysis/${wrapperSlug}/${normalizedAddress}${networkParam}`;
                
                const response = await fetch(analysisPath);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("No SVM analysis available for this token");
                        return;
                    }
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                
                // Validate that this is SVM data
                if (!data.mint_address) {
                    setError("Invalid SVM analysis data format");
                    return;
                }
                
                setAnalysisData(data);
            } catch (err) {
                console.error("Error fetching SVM analysis:", err);
                setError("SVM analysis not available");
            } finally {
                setLoading(false);
            }
        };

        fetchSVMAnalysis();
    }, [contract]);

    if (loading) {
        return (
            <div className="text-center text-sm text-muted-foreground py-4">
                Loading SVM analysis...
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="text-center text-sm text-muted-foreground py-4">
                {error}
            </div>
        );
    }
    
    if (!analysisData) {
        return null;
    }

    const { basic_info, metadata, supply_info, security_analysis, governance_info, analysis_metadata, intro, key_findings } = analysisData;

    // Use intro from JSON data, fallback to generated text if not available
    const introText = intro || `This is a Solana SPL token analysis for ${metadata.name || 'Unknown Token'}${metadata.symbol ? ` (${metadata.symbol})` : ''}. ${metadata.description || ''} This token has ${basic_info.decimals || 0} decimal places${basic_info.mint_authority ? ' and has a mint authority that can create new tokens' : ''}${basic_info.freeze_authority ? ' and a freeze authority that can freeze accounts' : ''}.`;

    // Program name for UI display
    const programName = basic_info.is_token_2022 ? 'Token-2022' : 'SPL Token';

    // Use key findings from JSON data, fallback to generated findings if not available
    const keyFindings = key_findings || (() => {
        const findings: string[] = [];
        
        // Mint Authority
        if (basic_info.mint_authority) {
            findings.push(`mint_authority: ${basic_info.mint_authority === "11111111111111111111111111111111" ? "Non-existent" : basic_info.mint_authority} with 1 capabilities`);
        } else {
            findings.push("mint_authority: Non-existent with 1 capabilities");
        }
        
        // Freeze Authority
        if (basic_info.freeze_authority) {
            findings.push(`freeze_authority: ${basic_info.freeze_authority === "11111111111111111111111111111111" ? "Non-existent" : basic_info.freeze_authority} with 1 capabilities`);
        } else {
            findings.push("freeze_authority: Non-existent with 1 capabilities");
        }
        
        // Update Authority (check if we have update authority info in security analysis)
        if (security_analysis.has_update_authority) {
            findings.push("update_authority: Wallet with 1 capabilities");
        } else {
            findings.push("update_authority: Non-existent with 1 capabilities");
        }
        
        return findings;
    })();

    return (
        <div className="space-y-6">
            {/* Analysis Content */}
            <div>
                <div className="space-y-3 text-foreground">
                    <div className="leading-relaxed text-base">
                        {introText}
                    </div>
                    
                    <div className="bg-muted/50 rounded-xl border border-border p-4">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Search className="h-4 w-4 text-muted-foreground" />
                            Key Findings
                        </h4>
                        <ul className="space-y-2.5 text-foreground">
                            {keyFindings.map((finding, index) => (
                                <li key={index} className="flex items-start gap-2 leading-relaxed">
                                    <span className="text-foreground -mt-0.5">•</span>
                                    <span className="text-sm">{finding}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Token Details */}
            <div className="bg-muted/50 rounded-xl border border-border p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    Token Details
                </h4>
                
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="font-medium text-muted-foreground">Mint Address:</span>
                            <div className="font-mono text-xs break-all">
                                <a 
                                    href={`https://explorer.solana.com/address/${basic_info.mint_address}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-blue-600 dark:text-blue-400"
                                >
                                    {basic_info.mint_address}
                                </a>
                            </div>
                        </div>
                        <div>
                            <span className="font-medium text-muted-foreground">Token Program:</span>
                            <div className="font-mono text-xs">
                                <a 
                                    href={`https://explorer.solana.com/address/${basic_info.owner_program}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-blue-600 dark:text-blue-400"
                                >
                                    {programName}
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="font-medium text-muted-foreground">Decimals:</span>
                            <div>{basic_info.decimals}</div>
                        </div>
                        <div>
                            <span className="font-medium text-muted-foreground">Initialized:</span>
                            <div>{basic_info.is_initialized ? 'Yes' : 'No'}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Function List */}
            <div className="mb-4">
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full justify-between p-2 h-auto hover:bg-muted/50"
                        >
                            <div className="flex items-center gap-2">
                                <Settings className="h-4 w-4" />
                                <span className="font-medium text-sm">Function List (3)</span>
                            </div>
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2">
                        <div className="space-y-2">
                            {/* Mint Authority */}
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">Mint Authority</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                {basic_info.mint_authority && basic_info.mint_authority !== "11111111111111111111111111111111" ? (
                                    <a
                                        href={`https://explorer.solana.com/address/${basic_info.mint_authority}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 hover:underline"
                                    >
                                        {basic_info.mint_authority}
                                        <ExternalLinkIcon className="h-3 w-3" />
                                    </a>
                                ) : (
                                    <span className="font-mono text-muted-foreground">
                                        None
                                    </span>
                                )}
                            </div>
                            
                            {/* Freeze Authority */}
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">Freeze Authority</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                {basic_info.freeze_authority && basic_info.freeze_authority !== "11111111111111111111111111111111" ? (
                                    <a
                                        href={`https://explorer.solana.com/address/${basic_info.freeze_authority}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 hover:underline"
                                    >
                                        {basic_info.freeze_authority}
                                        <ExternalLinkIcon className="h-3 w-3" />
                                    </a>
                                ) : (
                                    <span className="font-mono text-muted-foreground">
                                        None
                                    </span>
                                )}
                            </div>
                            
                            {/* Update Authority */}
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">Update Authority</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                {(() => {
                                    // Extract update authority from governance analysis
                                    const updateAuthAnalysis = governance_info?.authority_analyses?.update_authority;
                                    if (updateAuthAnalysis && typeof updateAuthAnalysis === 'string') {
                                        // Parse the AuthorityAnalysis string to extract the address
                                        const addressMatch = updateAuthAnalysis.match(/address='([^']+)'/);
                                        if (addressMatch) {
                                            const updateAuthority = addressMatch[1];
                                            return (
                                                <a
                                                    href={`https://explorer.solana.com/address/${updateAuthority}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 text-blue-600 hover:underline"
                                                >
                                                    {updateAuthority}
                                                    <ExternalLinkIcon className="h-3 w-3" />
                                                </a>
                                            );
                                        }
                                    }
                                    return (
                                        <span className="font-mono text-muted-foreground">
                                            None
                                        </span>
                                    );
                                })()}
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>


        </div>
    );
}
