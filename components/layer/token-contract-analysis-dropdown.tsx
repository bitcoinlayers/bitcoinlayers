"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ExternalLinkIcon, Shield, Users, Key, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Role {
    address: string;
    category: string;
    type: string;
}

interface GovernanceDetails {
    threshold?: number;
    total_owners?: number;
    owners?: string[];
    multisig_type?: string;
}

interface GovernanceAnalysis {
    address: string;
    type: string;
    is_gnosis_safe: boolean;
    is_proxy: boolean;
    roles: Record<string, Role>;
    governance_details: GovernanceDetails;
    implementation?: string;
    admin?: string;
}

interface ContractAnalysis {
    address: string;
    verified: boolean;
    is_proxy: boolean;
    implementation_address?: string;
    admin_address?: string;
    roles: Record<string, Role>;
    governance_analysis: Record<string, GovernanceAnalysis>;
    layer_name: string;
    wrapper_name: string;
}

interface TokenContractAnalysisProps {
    contractAddress: string;
    wrapperName?: string;
    networkName?: string;
}

const RoleIcon = ({ category }: { category: string }) => {
    switch (category.toLowerCase()) {
        case 'owner':
        case 'admin':
            return <Key className="h-4 w-4" />;
        case 'treasury':
            return <Building className="h-4 w-4" />;
        case 'pauser':
            return <Shield className="h-4 w-4" />;
        default:
            return <Users className="h-4 w-4" />;
    }
};

const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Hardcoded mapping of contract addresses + network to their analysis paths
const getAnalysisMapping = (contractAddress: string, networkName?: string): string | null => {
    // Create a key combining address and network
    const addressKey = contractAddress.toLowerCase();
    const networkKey = networkName?.toLowerCase() || '';
    const combinedKey = `${addressKey}:${networkKey}`;
    
    const knownAnalyses: { [key: string]: string } = {
        // Lombard LBTC - using combined address:network keys
        '0x8236a87084f8b84306f72007f36f2618a5634494:ethereum': 'lombard_lbtc',
        '0xecac9c5f704e954931349da37f60e39f515c11c1:base': 'lombard_lbtc',
        '0xa45d4121b3d47719ff57a947a9d961539ba33204:bob': 'lombard_lbtc', // BOB network
        // Add more contract addresses and their wrapper slugs here as needed
        // Format: 'contractAddress:networkName': 'wrapperSlug'
    };
    
    // Try combined key first, fallback to address-only for backward compatibility
    return knownAnalyses[combinedKey] || knownAnalyses[addressKey] || null;
};

export default function TokenContractAnalysisDropdown({ 
    contractAddress, 
    wrapperName,
    networkName
}: TokenContractAnalysisProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [analysisData, setAnalysisData] = useState<ContractAnalysis | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [analysisExists, setAnalysisExists] = useState<boolean | null>(null);

    // Check if analysis exists when component mounts
    useEffect(() => {
        const checkAnalysisExists = () => {
            if (!contractAddress) {
                setAnalysisExists(false);
                return;
            }
            
            // Debug logging
            console.log('TokenContractAnalysisDropdown - checking analysis for:', {
                contractAddress,
                wrapperName,
                networkName
            });
            
            const wrapperSlug = getAnalysisMapping(contractAddress, networkName);
            
            console.log('Analysis lookup result:', {
                contractAddress: contractAddress.toLowerCase(),
                networkName: networkName?.toLowerCase(),
                combinedKey: `${contractAddress.toLowerCase()}:${networkName?.toLowerCase() || ''}`,
                wrapperSlug,
                hasMapping: !!wrapperSlug
            });
            
            if (!wrapperSlug) {
                console.log('No analysis mapping found for address:', contractAddress.toLowerCase());
                setAnalysisExists(false);
                return;
            }
            
            // If we have a mapping, the analysis should exist
            console.log('Analysis mapping found - setting exists to true');
            setAnalysisExists(true);
        };

        checkAnalysisExists();
    }, [contractAddress, networkName || '']);

    useEffect(() => {
        const fetchAnalysis = async () => {
            if (!isOpen || !contractAddress) return;
            
            setLoading(true);
            setError(null);
            
            try {
                const wrapperSlug = getAnalysisMapping(contractAddress, networkName);
                
                if (!wrapperSlug) {
                    setError("No analysis available for this contract");
                    return;
                }
                
                const normalizedAddress = contractAddress.toLowerCase();
                const analysisPath = `/api/token-analysis/${wrapperSlug}/${normalizedAddress}`;
                console.log('Fetching analysis from:', analysisPath);
                
                const response = await fetch(analysisPath);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("No analysis available for this contract");
                        return;
                    }
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                setAnalysisData(data);
            } catch (err) {
                console.error("Error fetching contract analysis:", err);
                setError("Analysis not available");
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysis();
    }, [isOpen, contractAddress, networkName || '']);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const renderRoles = (roles: Record<string, Role>) => {
        const rolesByCategory = Object.entries(roles).reduce((acc, [functionName, role]) => {
            const category = role.category || 'Other';
            if (!acc[category]) acc[category] = [];
            acc[category].push({ functionName, ...role });
            return acc;
        }, {} as Record<string, Array<{functionName: string} & Role>>);

        return Object.entries(rolesByCategory).map(([category, categoryRoles]) => (
            <div key={category} className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <RoleIcon category={category} />
                    <h4 className="font-medium text-sm">{category} Roles</h4>
                </div>
                <div className="space-y-2">
                    {categoryRoles.map(({ functionName, address, type }) => (
                        <div key={functionName} className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                            <div>
                                <span className="font-mono text-muted-foreground">{functionName}</span>
                                <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-1 rounded">
                                    {type}
                                </span>
                            </div>
                            <a
                                href={`https://etherscan.io/address/${address}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-blue-600 hover:underline"
                            >
                                {truncateAddress(address)}
                                <ExternalLinkIcon className="h-3 w-3" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    const renderGovernanceAnalysis = (governance: Record<string, GovernanceAnalysis>) => {
        return Object.entries(governance).map(([roleName, analysis]) => {
            if (!analysis.governance_details || Object.keys(analysis.governance_details).length === 0) {
                return null;
            }

            return (
                <div key={roleName} className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4" />
                        <h4 className="font-medium text-sm capitalize">{roleName}</h4>
                        {analysis.is_gnosis_safe && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                Gnosis Safe
                            </span>
                        )}
                        {analysis.is_proxy && (
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                Proxy
                            </span>
                        )}
                    </div>
                    
                    {analysis.governance_details.multisig_type && (
                        <div className="text-sm mb-2">
                            <strong>Type:</strong> {analysis.governance_details.multisig_type}
                        </div>
                    )}
                    
                    {analysis.governance_details.owners && (
                        <div className="space-y-1">
                            <div className="text-sm font-medium">
                                Signers ({analysis.governance_details.owners.length})
                            </div>
                            <div className="max-h-32 overflow-y-auto space-y-1">
                                {analysis.governance_details.owners.map((owner, index) => (
                                    <div key={owner} className="flex items-center justify-between text-xs bg-muted/20 rounded p-1">
                                        <span>#{index + 1}</span>
                                        <a
                                            href={`https://etherscan.io/address/${owner}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:underline"
                                        >
                                            {truncateAddress(owner)}
                                            <ExternalLinkIcon className="h-3 w-3" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            );
        }).filter(Boolean);
    };

    // Only render if analysis exists for this specific contract
    if (analysisExists === false) {
        return null;
    }

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger asChild>
                <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-between mt-2 h-8 text-xs text-muted-foreground hover:text-foreground"
                    onClick={toggleDropdown}
                >
                    <span>Contract Analysis</span>
                    <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-2">
                <div className="border rounded-lg p-3 bg-muted/10">
                    {loading && (
                        <div className="text-center text-sm text-muted-foreground py-4">
                            Loading analysis...
                        </div>
                    )}
                    
                    {error && (
                        <div className="text-center text-sm text-muted-foreground py-4">
                            {error}
                        </div>
                    )}
                    
                    {analysisData && !loading && !error && (
                        <div className="space-y-4">
                            {/* Contract Overview */}
                            <div className="border-b pb-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield className="h-4 w-4" />
                                    <h3 className="font-medium text-sm">Contract Overview</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <span className="text-muted-foreground">Verified:</span>{' '}
                                        <span className={analysisData.verified ? 'text-green-600' : 'text-red-600'}>
                                            {analysisData.verified ? 'Yes' : 'No'}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Proxy:</span>{' '}
                                        <span className={analysisData.is_proxy ? 'text-orange-600' : 'text-gray-600'}>
                                            {analysisData.is_proxy ? 'Yes' : 'No'}
                                        </span>
                                    </div>
                                    {analysisData.implementation_address && (
                                        <div className="col-span-2">
                                            <span className="text-muted-foreground">Implementation:</span>{' '}
                                            <a
                                                href={`https://etherscan.io/address/${analysisData.implementation_address}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline font-mono"
                                            >
                                                {truncateAddress(analysisData.implementation_address)}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Roles */}
                            {Object.keys(analysisData.roles).length > 0 && (
                                <div>
                                    <h3 className="font-medium text-sm mb-3">Roles & Addresses</h3>
                                    {renderRoles(analysisData.roles)}
                                </div>
                            )}
                            
                            {/* Governance Analysis */}
                            {Object.keys(analysisData.governance_analysis).length > 0 && (
                                <div>
                                    <h3 className="font-medium text-sm mb-3">Governance Details</h3>
                                    {renderGovernanceAnalysis(analysisData.governance_analysis)}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
