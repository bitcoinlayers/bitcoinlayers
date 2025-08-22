"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon, Shield, Key, Search, Code } from "lucide-react";
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

    const { basic_info, metadata, supply_info, security_analysis, governance_info, analysis_metadata } = analysisData;

    // Generate intro text
    const intro = `This is a Solana SPL token analysis for ${metadata.name || 'Unknown Token'}${metadata.symbol ? ` (${metadata.symbol})` : ''}. ${metadata.description || ''} This token has ${basic_info.decimals || 0} decimal places${basic_info.mint_authority ? ' and has a mint authority that can create new tokens' : ''}${basic_info.freeze_authority ? ' and a freeze authority that can freeze accounts' : ''}.`;

    // Generate key findings
    const keyFindings: string[] = [];
    
    if (basic_info.mint_authority) {
        keyFindings.push(`Mint authority: ${basic_info.mint_authority} - can mint new tokens`);
    } else {
        keyFindings.push("No mint authority - token supply is fixed");
    }
    
    if (basic_info.freeze_authority) {
        keyFindings.push(`Freeze authority: ${basic_info.freeze_authority} - can freeze accounts`);
    } else {
        keyFindings.push("No freeze authority - accounts cannot be frozen");
    }
    
    if (supply_info.total_supply) {
        const decimals = basic_info.decimals || 0;
        const formattedSupply = (supply_info.total_supply / Math.pow(10, decimals)).toLocaleString();
        keyFindings.push(`Total supply: ${formattedSupply} tokens`);
    }
    
    if (security_analysis.security_score !== undefined) {
        keyFindings.push(`Security score: ${security_analysis.security_score}/100`);
    }
    
    if (security_analysis.risk_factors && security_analysis.risk_factors.length > 0) {
        keyFindings.push(...security_analysis.risk_factors);
    }
    
    if (governance_info.governance_type) {
        keyFindings.push(`Governance type: ${governance_info.governance_type}`);
    }
    
    if (governance_info.overall_risk_score !== undefined) {
        keyFindings.push(`Overall governance risk score: ${governance_info.overall_risk_score}/10`);
    }
    
    const programName = basic_info.is_token_2022 ? 'Token-2022' : 'SPL Token';
    keyFindings.push(`Token program: ${programName}`);

    return (
        <div className="space-y-6">
            {/* Analysis Content */}
            <div>
                <div className="space-y-3 text-foreground">
                    <div className="leading-relaxed text-base">
                        {intro}
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

            {/* Authorities */}
            {(basic_info.mint_authority || basic_info.freeze_authority) && (
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <button className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-4">
                            <Shield className="h-4 w-4 text-muted-foreground" />
                            <h5 className="font-medium text-muted-foreground">Token Authorities</h5>
                        </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2">
                        <div className="space-y-4 ml-6">
                            {basic_info.mint_authority && (
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <AuthorityIcon authorityType="mint" />
                                        <h4 className="font-medium text-sm">Mint Authority</h4>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <a
                                            href={`https://explorer.solana.com/address/${basic_info.mint_authority}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:underline font-mono text-xs"
                                        >
                                            {basic_info.mint_authority}
                                            <ExternalLinkIcon className="h-3 w-3" />
                                        </a>
                                    </div>
                                    
                                    <div className="text-sm text-muted-foreground">
                                        This authority can mint new tokens. If set to null, no new tokens can be created.
                                    </div>
                                </div>
                            )}
                            
                            {basic_info.freeze_authority && (
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <AuthorityIcon authorityType="freeze" />
                                        <h4 className="font-medium text-sm">Freeze Authority</h4>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <a
                                            href={`https://explorer.solana.com/address/${basic_info.freeze_authority}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:underline font-mono text-xs"
                                        >
                                            {basic_info.freeze_authority}
                                            <ExternalLinkIcon className="h-3 w-3" />
                                        </a>
                                    </div>
                                    
                                    <div className="text-sm text-muted-foreground">
                                        This authority can freeze token accounts, preventing transfers.
                                    </div>
                                </div>
                            )}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            )}

            {/* Governance Summary */}
            {governance_info.governance_summary && (
                <div className="bg-muted/50 rounded-xl border border-border p-4">
                    <h4 className="font-semibold text-foreground mb-3">Governance Summary</h4>
                    
                    <div className="space-y-3 text-sm">
                        <div>
                            <span className="font-medium text-muted-foreground">Type:</span>
                            <span className="ml-2">{governance_info.governance_type}</span>
                        </div>
                        <div>
                            <span className="font-medium text-muted-foreground">Risk Score:</span>
                            <span className="ml-2">{governance_info.overall_risk_score}/10</span>
                        </div>
                        
                        {governance_info.governance_summary.recommendations.length > 0 && (
                            <div>
                                <span className="font-medium text-muted-foreground block mb-2">Recommendations:</span>
                                <ul className="space-y-1 ml-4">
                                    {governance_info.governance_summary.recommendations.map((rec, index) => (
                                        <li key={index} className="text-xs text-muted-foreground">• {rec}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
