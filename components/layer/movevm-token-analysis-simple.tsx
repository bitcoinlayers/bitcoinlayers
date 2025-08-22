"use client";

import { useState, useEffect } from "react";
import { ExternalLinkIcon, Shield, Key, Search, Code, ChevronDown, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface MoveVMTokenContract {
    address: string;
    network: string;
    wrapperName?: string;
    token_slug?: string;
    network_slug?: string;
    token_name?: string;
}

interface MoveVMAnalysisData {
    coin_type: string;
    basic_info: {
        coin_type: string;
        name: string;
        symbol: string;
        decimals: number;
        supply: number | null;
        is_initialized: boolean;
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
        total_supply: number | null;
        circulating_supply: string | null;
        max_supply: number | null;
        holders_count: number | null;
    };
    security_analysis: {
        has_mint_capability: boolean | null;
        has_burn_capability: boolean | null;
        has_freeze_capability: boolean | null;
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

interface MoveVMTokenAnalysisProps {
    contract: MoveVMTokenContract;
}

// Network detection for MoveVM chains
const getMoveVMNetwork = (network: string): string => {
    const normalizedNetwork = network.toLowerCase();
    if (normalizedNetwork.includes('aptos')) return 'aptos';
    if (normalizedNetwork.includes('sui')) return 'sui';
    if (normalizedNetwork.includes('movement')) return 'movement';
    return 'movevm';
};

// Explorer URL generator for different Move chains
const getMoveVMExplorerUrl = (network: string, coinType: string): string => {
    const moveNetwork = getMoveVMNetwork(network);
    
    switch (moveNetwork) {
        case 'aptos':
            return `https://explorer.aptoslabs.com/account/${coinType.split('::')[0]}`;
        case 'sui':
            return `https://suiexplorer.com/object/${coinType}`;
        case 'movement':
            return `https://explorer.movementlabs.xyz/account/${coinType.split('::')[0]}`;
        default:
            return '#';
    }
};

const truncateAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export default function MoveVMTokenAnalysis({ contract }: MoveVMTokenAnalysisProps) {
    const [analysisData, setAnalysisData] = useState<MoveVMAnalysisData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMoveVMAnalysis = async () => {
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
                
                // Extract package address from coin type for API call
                // For coin_type like "0x3e8e...::lbtc::LBTC", extract just the package address
                let packageAddress = contract.address.split('::')[0];  // Get "0x3e8e..."
                if (packageAddress.startsWith('0x')) {
                    packageAddress = packageAddress.slice(2);  // Remove 0x prefix
                }
                const normalizedAddress = packageAddress.toLowerCase();
                
                const networkParam = contract.network ? `?network=${encodeURIComponent(contract.network)}` : '';
                const analysisPath = `/api/token-analysis/${wrapperSlug}/${normalizedAddress}${networkParam}`;
                
                const response = await fetch(analysisPath);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("No MoveVM analysis available for this token");
                        return;
                    }
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                
                // Validate that this is MoveVM data
                if (!data.coin_type) {
                    setError("Invalid MoveVM analysis data format");
                    return;
                }
                
                setAnalysisData(data);
            } catch (err) {
                console.error("Error fetching MoveVM analysis:", err);
                setError("MoveVM analysis not available");
            } finally {
                setLoading(false);
            }
        };

        fetchMoveVMAnalysis();
    }, [contract]);

    if (loading) {
        return (
            <div className="text-center text-sm text-muted-foreground py-4">
                Loading MoveVM analysis...
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
    const intro = `This is a ${getMoveVMNetwork(contract.network)} token analysis for ${metadata.name || 'Unknown Token'}${metadata.symbol ? ` (${metadata.symbol})` : ''}. ${metadata.description || ''} This token has ${basic_info.decimals || 0} decimal places${security_analysis.has_mint_capability ? ' and has mint capability that can create new tokens' : ''}${security_analysis.has_burn_capability ? ' and burn capability that can destroy tokens' : ''}${security_analysis.has_freeze_capability ? ' and freeze capability that can freeze accounts' : ''}.`;

    // Generate key findings
    const keyFindings: string[] = [];
    
    if (security_analysis.has_mint_capability) {
        keyFindings.push(`Mint capability present - new tokens can be minted`);
    } else {
        keyFindings.push("No mint capability - token supply is controlled");
    }
    
    if (security_analysis.has_burn_capability) {
        keyFindings.push(`Burn capability present - tokens can be destroyed`);
    } else {
        keyFindings.push("No burn capability - tokens cannot be destroyed");
    }
    
    if (security_analysis.has_freeze_capability) {
        keyFindings.push(`Freeze capability present - accounts can be frozen`);
    } else {
        keyFindings.push("No freeze capability - accounts cannot be frozen");
    }
    
    if (supply_info.total_supply) {
        keyFindings.push(`Total supply: ${supply_info.total_supply.toLocaleString()} ${metadata.symbol || 'tokens'}`);
    }
    
    if (security_analysis.security_score !== undefined) {
        keyFindings.push(`Security score: ${security_analysis.security_score}/100`);
    }

    return (
        <div className="space-y-6">
            {/* Analysis Content */}
            <div>
                <div className="space-y-3 text-foreground">
                    {intro && (
                        <div className="leading-relaxed text-base">
                            {intro}
                        </div>
                    )}
                    
                    {keyFindings && keyFindings.length > 0 && (
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
                    )}
                </div>
            </div>

            {/* Token Implementation Details */}
            <div className="bg-muted/50 rounded-xl border border-border p-4 mb-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    Token Implementation
                </h4>
                
                {/* Basic Token Info */}
                <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Token Details:</div>
                    <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                        <div className="grid gap-2">
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Coin Type:</span>
                                <a 
                                    href={getMoveVMExplorerUrl(contract.network, analysisData.coin_type)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs text-blue-600 dark:text-blue-400 hover:underline break-all"
                                >
                                    {analysisData.coin_type}
                                </a>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Name:</span>
                                <span className="text-sm font-medium">{basic_info.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Symbol:</span>
                                <span className="text-sm font-medium">{basic_info.symbol}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-muted-foreground">Decimals:</span>
                                <span className="text-sm font-medium">{basic_info.decimals}</span>
                            </div>
                            {supply_info.total_supply && (
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Total Supply:</span>
                                    <span className="text-sm font-medium">{supply_info.total_supply.toLocaleString()}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Function List - EVM Style */}
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
                                <span className="font-medium text-sm">Function List ({[
                                    security_analysis.has_mint_capability ? 'mint' : null,
                                    security_analysis.has_burn_capability ? 'burn' : null,
                                    security_analysis.has_freeze_capability ? 'freeze' : null,
                                    'standard',
                                    governance_info.governance_type === 'multisig_treasury' ? 'treasury' : null
                                ].filter(Boolean).length})</span>
                            </div>
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2">
                        <div className="space-y-2">
                            {/* Mint Functions */}
                            {security_analysis.has_mint_capability && (
                                <>
                                    <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                        <div>
                                            <span className="font-mono text-muted-foreground">mint</span>
                                            <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                                Function
                                            </span>
                                        </div>
                                        <span className="font-mono text-muted-foreground">
                                            Authority
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                        <div>
                                            <span className="font-mono text-muted-foreground">mint_and_transfer</span>
                                            <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                                Function
                                            </span>
                                        </div>
                                        <span className="font-mono text-muted-foreground">
                                            Authority
                                        </span>
                                    </div>
                                </>
                            )}
                            
                            {/* Burn Functions */}
                            {security_analysis.has_burn_capability && (
                                <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                    <div>
                                        <span className="font-mono text-muted-foreground">burn</span>
                                        <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                            Function
                                        </span>
                                    </div>
                                    <span className="font-mono text-muted-foreground">
                                        Authority
                                    </span>
                                </div>
                            )}
                            
                            {/* Freeze Functions */}
                            {security_analysis.has_freeze_capability && (
                                <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                    <div>
                                        <span className="font-mono text-muted-foreground">freeze</span>
                                        <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                            Function
                                        </span>
                                    </div>
                                    <span className="font-mono text-muted-foreground">
                                        Authority
                                    </span>
                                </div>
                            )}
                            
                            {/* Standard Token Functions - Always Available */}
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">transfer</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                <span className="font-mono text-muted-foreground">
                                    Public
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">balance</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                <span className="font-mono text-muted-foreground">
                                    Public
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">name</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                <span className="font-mono text-muted-foreground">
                                    {metadata.name || basic_info.name}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">symbol</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                <span className="font-mono text-muted-foreground">
                                    {metadata.symbol || basic_info.symbol}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                <div>
                                    <span className="font-mono text-muted-foreground">decimals</span>
                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                        Function
                                    </span>
                                </div>
                                <span className="font-mono text-muted-foreground">
                                    {basic_info.decimals}
                                </span>
                            </div>
                            
                            {/* Treasury Functions - if treasury governance */}
                            {governance_info.governance_type === 'multisig_treasury' && (
                                <div className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                    <div>
                                        <span className="font-mono text-muted-foreground">treasury_operations</span>
                                        <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                            Function
                                        </span>
                                    </div>
                                    <span className="font-mono text-muted-foreground">
                                        Multisig
                                    </span>
                                </div>
                            )}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>

            {/* Security Analysis */}
            <div className="bg-muted/50 rounded-xl border border-border p-4 mb-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    Security Analysis
                </h4>
                
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Security Score:</span>
                        <span className={`text-sm font-medium px-2 py-1 rounded ${
                            security_analysis.security_score >= 80 
                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                : security_analysis.security_score >= 60
                                ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                                : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                        }`}>
                            {security_analysis.security_score}/100
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                            <div className="text-xs text-muted-foreground mb-1">Mint Capability</div>
                            <div className={`text-sm font-medium ${
                                security_analysis.has_mint_capability 
                                    ? 'text-yellow-600 dark:text-yellow-400' 
                                    : 'text-green-600 dark:text-green-400'
                            }`}>
                                {security_analysis.has_mint_capability ? 'Present' : 'None'}
                            </div>
                        </div>
                        
                        <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                            <div className="text-xs text-muted-foreground mb-1">Burn Capability</div>
                            <div className={`text-sm font-medium ${
                                security_analysis.has_burn_capability 
                                    ? 'text-yellow-600 dark:text-yellow-400' 
                                    : 'text-green-600 dark:text-green-400'
                            }`}>
                                {security_analysis.has_burn_capability ? 'Present' : 'None'}
                            </div>
                        </div>
                        
                        <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                            <div className="text-xs text-muted-foreground mb-1">Freeze Capability</div>
                            <div className={`text-sm font-medium ${
                                security_analysis.has_freeze_capability 
                                    ? 'text-red-600 dark:text-red-400' 
                                    : 'text-green-600 dark:text-green-400'
                            }`}>
                                {security_analysis.has_freeze_capability ? 'Present' : 'None'}
                            </div>
                        </div>
                    </div>
                    
                    {/* Risk Factors */}
                    {security_analysis.risk_factors && security_analysis.risk_factors.length > 0 && (
                        <div className="mt-4">
                            <div className="text-sm font-medium text-muted-foreground mb-2">Risk Factors:</div>
                            <ul className="space-y-1">
                                {security_analysis.risk_factors.map((factor, index) => (
                                    <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                                        <span className="text-foreground -mt-0.5">•</span>
                                        <span>{factor}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Governance Analysis */}
            {governance_info && (
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <button className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-4">
                            <Key className="h-4 w-4 text-muted-foreground" />
                            <h5 className="font-medium text-muted-foreground">Governance Analysis</h5>
                            <ExternalLinkIcon className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                        </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pt-2">
                        <div className="space-y-4 ml-6">
                            <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Governance Type:</span>
                                        <span className="text-sm font-medium capitalize">{governance_info.governance_type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Risk Score:</span>
                                        <span className={`text-sm font-medium px-2 py-1 rounded ${
                                            governance_info.overall_risk_score <= 20
                                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                                : governance_info.overall_risk_score <= 50
                                                ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                                                : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                                        }`}>
                                            {governance_info.overall_risk_score}/100
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">Total Authorities:</span>
                                        <span className="text-sm font-medium">{governance_info.governance_summary?.total_authorities || 0}</span>
                                    </div>
                                </div>
                                
                                {/* Key Findings */}
                                {governance_info.governance_summary?.key_findings && governance_info.governance_summary.key_findings.length > 0 && (
                                    <div className="mt-3">
                                        <div className="text-sm font-medium text-muted-foreground mb-2">Key Findings:</div>
                                        <ul className="space-y-1">
                                            {governance_info.governance_summary.key_findings.map((finding, index) => (
                                                <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                                                    <span className="text-foreground -mt-0.5">•</span>
                                                    <span>{finding}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            )}
            
            {/* Analysis Metadata */}
            <div className="text-xs text-muted-foreground pt-4 border-t border-border">
                Analysis performed on {analysis_metadata.network} • 
                Generated by MoveVM Analyzer v{analysis_metadata.analyzer_version} • 
                {new Date(analysis_metadata.analysis_date).toLocaleDateString()}
            </div>
        </div>
    );
}
