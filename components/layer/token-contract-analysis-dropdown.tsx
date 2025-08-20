"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ExternalLinkIcon, Shield, Users, Key, Building, FileText, Settings, Search } from "lucide-react";
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
    summary?: string;
    title?: string;
    network?: string;
}

interface GovernanceDetails {
    threshold?: number;
    total_owners?: number;
    owners?: string[];
    multisig_type?: string;
}

interface GovernanceAnalysis {
    summary?: string;
    address: string;
    type: string;
    is_gnosis_safe: boolean;
    is_proxy: boolean;
    roles: Record<string, Role>;
    governance_details: GovernanceDetails;
    implementation?: string;
    admin?: string;
    function_results?: Record<string, any>;
    discovered_addresses?: string[];
    network?: string;
}

interface CustomSummary {
    title?: string;
    description?: string;
    key_findings?: string[];
    author?: string;
    date?: string;
}

interface ContractAnalysis {
    address: string;
    intro?: string;
    key_findings?: string[];
    summary?: string;
    verified: boolean;
    is_proxy: boolean;
    implementation_address?: string;
    admin_address?: string;
    roles: Record<string, Role>;
    governance_analysis: Record<string, GovernanceAnalysis>;
    layer_name: string;
    wrapper_name: string;
    custom_summary?: CustomSummary;
}

interface TokenContract {
    address: string;
    network: string;
    wrapperName?: string;
    explorer?: string; // Database explorer URL
    token_slug?: string;
    network_slug?: string;
    token_name?: string;
}

interface TokenContractAnalysisProps {
    contracts?: TokenContract[]; // Array of all contracts
    wrapperName?: string;
    autoExpand?: boolean;
    isLayer?: boolean; // Determines dropdown behavior: true = show wrappers, false = show networks
    // Legacy props for backward compatibility
    contractAddress?: string;
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

// Function to get correct explorer URL using database data and custom mappings
const getCorrectExplorerUrl = (contract: TokenContract): string => {
    // Custom URLs mapping from original AddressItem component
    const customUrls: { [key: string]: string } = {
        "Rootstock-RBTC_Rootstock": "https://explorer.rootstock.io/",
        "xLink-aBTC_Stacks":
            "https://explorer.hiro.so/token/SP2XD7417HGPRTREMKF748VNEQPDRR0RMANB7X1NK.token-abtc?chain=mainnet",
        "Alex-xBTC_Stacks":
            "https://explorer.hiro.so/token/SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin?chain=mainnet",
        "Stacks-sBTC_Stacks":
            "https://explorer.hiro.so/token/SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token?chain=mainnet",
    };

    // Use custom URL if available, otherwise use database explorer + address
    const customKey = `${contract.token_slug}_${contract.network_slug}`;
    return customUrls[customKey] ?? `${contract.explorer}${contract.address}`;
};



// Hardcoded mapping of contract addresses + network to their analysis paths
const formatContractAddress = (address: string): string => {
    if (address.length < 6) return address;
    return `${address.slice(0, 2)}...${address.slice(-3)}`;
};

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
    contracts = [],
    wrapperName,
    autoExpand = false,
    isLayer = false,
    // Legacy props
    contractAddress,
    networkName
}: TokenContractAnalysisProps) {
    // Handle backward compatibility: if old props are used, convert to new format
    const actualContracts = contracts.length > 0 
        ? contracts 
        : (contractAddress && networkName) 
            ? [{ address: contractAddress, network: networkName, wrapperName }]
            : [];
    // Set first contract as default selection
    const [selectedContract, setSelectedContract] = useState<TokenContract | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [analysisData, setAnalysisData] = useState<ContractAnalysis | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Available contracts are just the passed contracts
    const availableContracts = actualContracts;

    // Set default selected contract when contracts change
    useEffect(() => {
        if (actualContracts.length > 0 && !selectedContract) {
            setSelectedContract(actualContracts[0]);
        }
    }, [actualContracts, selectedContract]);

    // Handle dropdown interactions
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleSelectContract = (contract: TokenContract) => {
        setSelectedContract(contract);
        setIsDropdownOpen(false);
    };

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    // Component should render if we have any contracts
    const shouldRender = actualContracts.length > 0;

    useEffect(() => {
        const fetchAnalysis = async () => {
            if (!selectedContract) return;
            
            setLoading(true);
            setError(null);
            
            try {
                const wrapperSlug = getAnalysisMapping(selectedContract.address, selectedContract.network);
                
                if (!wrapperSlug) {
                    setError("No analysis available for this contract");
                    return;
                }
                
                const normalizedAddress = selectedContract.address.toLowerCase();
                const networkParam = selectedContract.network ? `?network=${encodeURIComponent(selectedContract.network)}` : '';
                const analysisPath = `/api/token-analysis/${wrapperSlug}/${normalizedAddress}${networkParam}`;
                
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
    }, [selectedContract]);

    // Chevron down icon component
    const ChevronDownIcon = (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="17" 
            height="17" 
            viewBox="0 0 17 17" 
            fill="none"
            className="w-4 h-4 opacity-50"
        >
            <g opacity="0.5">
                <path 
                    d="M4.31226 6.6875L8.31226 10.6875L12.3123 6.6875" 
                    stroke="currentColor" 
                    strokeWidth="1.33" 
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );

    const renderRoles = (roles: Record<string, Role>) => {
        const rolesByCategory = Object.entries(roles).reduce((acc, [functionName, role]) => {
            const category = role.category || 'Other';
            if (!acc[category]) acc[category] = [];
            acc[category].push({ functionName, ...role });
            return acc;
        }, {} as Record<string, Array<{functionName: string} & Role>>);

        return Object.entries(rolesByCategory).map(([category, categoryRoles]) => {
            // Check if any role in this category has a summary
            const categorySummary = categoryRoles.find(role => role.summary)?.summary;
            
            return (
                <div key={category} className="mb-6">
                    {/* Summary Section for Role Category */}
                    {categorySummary && (
                        <div className="mb-4 p-3 bg-muted/30 rounded-lg border border-border">
                            <div className="flex items-center gap-2 mb-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                <h5 className="font-medium text-sm text-foreground">Summary</h5>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {categorySummary}
                            </p>
                        </div>
                    )}
                    
                    {/* Direct Role Display */}
                    <div className="space-y-4">
                        {categoryRoles.map(({ functionName, address, type, title, summary, network }) => (
                            <div key={functionName} className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <RoleIcon category={category} />
                                    <h4 className="font-medium text-sm capitalize">{title || functionName}</h4>
                                    {type === 'Contract' && (
                                        <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">
                                            {type}
                                        </span>
                                    )}
                                    {type === 'EOA' && (
                                        <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                                            {type}
                                        </span>
                                    )}
                                </div>
                                
                                {/* Contract Address */}
                                <div className="mb-3">
                                    <a
                                        href={`${network?.toLowerCase() === 'ethereum' ? 'https://etherscan.io' : 'https://explorer.bob.xyz'}/address/${address}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-blue-600 hover:underline font-mono text-xs"
                                    >
                                        {address}
                                        <ExternalLinkIcon className="h-3 w-3" />
                                    </a>
                                </div>
                                
                                {/* Summary Section */}
                                {summary && (
                                    <div className="mb-4 p-3 bg-muted/30 rounded-lg border border-border">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FileText className="h-4 w-4 text-muted-foreground" />
                                            <h5 className="font-medium text-sm text-foreground">Summary</h5>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {summary}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            );
        });
    };

    const renderGovernanceAnalysis = (governance: Record<string, GovernanceAnalysis>) => {
        return Object.entries(governance).map(([roleName, analysis]) => {
            // Show governance analysis if we have governance_details or function_results
            const hasGovernanceDetails = analysis.governance_details && Object.keys(analysis.governance_details).length > 0;
            const hasFunctionResults = analysis.function_results && Object.keys(analysis.function_results).length > 0;
            
            if (!hasGovernanceDetails && !hasFunctionResults) {
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
                    
                    {/* Contract Address */}
                    <div className="mb-3">
                        <a
                            href={`${analysis.network?.toLowerCase() === 'ethereum' ? 'https://etherscan.io' : 'https://explorer.bob.xyz'}/address/${analysis.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-600 hover:underline font-mono text-xs"
                        >
                            {analysis.address}
                            <ExternalLinkIcon className="h-3 w-3" />
                        </a>
                    </div>
                    
                    {/* Summary Section */}
                    {analysis.summary && (
                        <div className="mb-4 p-3 bg-muted/30 rounded-lg border border-border">
                            <div className="flex items-center gap-2 mb-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                <h5 className="font-medium text-sm text-foreground">Summary</h5>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {analysis.summary}
                            </p>
                        </div>
                    )}
                    
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
                    
                    {/* Function Results */}
                    {analysis.function_results && Object.keys(analysis.function_results).length > 0 && (
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
                                            <span className="font-medium text-sm">Read As Proxy ({Object.keys(analysis.function_results).length})</span>
                                        </div>
                                        <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                    </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pt-2">
                                    <div className="space-y-2">
                                        {Object.entries(analysis.function_results).map(([functionName, result]) => (
                                            <div key={functionName} className="flex items-center justify-between text-xs bg-muted/30 rounded p-2">
                                                <div>
                                                    <span className="font-mono text-muted-foreground">{functionName}</span>
                                                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-1 rounded">
                                                        Function
                                                    </span>
                                                </div>
                                                {typeof result === 'string' && result.startsWith('0x') ? (
                                                    <a
                                                        href={`${analysis.network?.toLowerCase() === 'ethereum' ? 'https://etherscan.io' : 'https://explorer.bob.xyz'}/address/${result}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 text-blue-600 hover:underline"
                                                    >
                                                        {truncateAddress(result)}
                                                        <ExternalLinkIcon className="h-3 w-3" />
                                                    </a>
                                                ) : (
                                                    <span className="font-mono text-muted-foreground">
                                                        {String(result)}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    )}
                    

                </div>
            );
        }).filter(Boolean);
    };

    // Only render if we have contracts
    if (!shouldRender) {
        return null;
    }

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            {/* Implementation - sub header */}
            <div className="body_subsection !text-muted-foreground">
                Implementation
            </div>

            {/* Network dropdown - third header */}
            {availableContracts.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-background hover:bg-muted/50 transition-colors"
                    >
                        {selectedContract && (
                            <>
                                {/* Logo */}
                                <div className="w-5 h-5 flex-shrink-0">
                                    <img 
                                        src={`/logos/${isLayer ? (selectedContract.token_slug || selectedContract.wrapperName?.toLowerCase()) : (selectedContract.network_slug || selectedContract.network.toLowerCase())}.png`}
                                        alt={isLayer ? (selectedContract.token_name || selectedContract.wrapperName) : selectedContract.network} 
                                        className="w-full h-full"
                                    />
                                </div>
                                
                                {/* Name */}
                                <span className="font-medium">
                                    {isLayer ? (selectedContract.token_name || selectedContract.wrapperName) : selectedContract.network}
                                </span>
                                
                                {/* Contract Address */}
                                <span className="font-mono text-sm text-muted-foreground">
                                    {formatContractAddress(selectedContract.address)}
                                </span>
                            </>
                        )}
                        
                        {!selectedContract && (
                            <span>{isLayer ? "Select Wrapper" : "Select Network"}</span>
                        )}
                        
                        {ChevronDownIcon}
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                            <div className="py-1">
                                {availableContracts.map((contract, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSelectContract(contract)}
                                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors capitalize"
                                    >
                                        {isLayer ? (contract.token_name || contract.wrapperName) : contract.network}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Content section */}
            <div className="mt-4 w-full">
                {selectedContract && (
                    <div>

                        {/* Analysis Content */}
                        <div>
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
                        <div className="space-y-6">
                            {/* Analysis Content - matching Taproot Script Analysis layout */}
                            <div>
                                <div className="space-y-3 text-foreground">
                                    {analysisData.intro && (
                                        <div className="leading-relaxed text-base">
                                            {analysisData.intro}
                                        </div>
                                    )}
                                    
                                    {analysisData.key_findings && analysisData.key_findings.length > 0 && (
                                        <div className="bg-muted/50 rounded-xl border border-border p-4">
                                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <Search className="h-4 w-4 text-muted-foreground" />
                                                Key Findings
                                            </h4>
                                            <ul className="space-y-2.5 text-foreground">
                                                {analysisData.key_findings.map((finding, index) => (
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

                            {/* Supporting Contracts */}
                            {(Object.keys(analysisData.roles).length > 0 || Object.keys(analysisData.governance_analysis).length > 0) && (
                                <Collapsible>
                                    <CollapsibleTrigger asChild>
                                        <button className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-4">
                                            <Shield className="h-4 w-4 text-muted-foreground" />
                                            <h5 className="font-medium text-muted-foreground">Supporting Contracts</h5>
                                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                                        </button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="pt-2">
                                        <div className="space-y-4 ml-6">
                                            {Object.keys(analysisData.roles).length > 0 && renderRoles(analysisData.roles)}
                                            {Object.keys(analysisData.governance_analysis).length > 0 && renderGovernanceAnalysis(analysisData.governance_analysis)}
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            )}
                        </div>
                    )}
                         </div>
                    </div>
                )}
            </div>
        </div>
    );
}

