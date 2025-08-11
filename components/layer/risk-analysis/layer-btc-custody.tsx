"use client";

import React, { useState, useRef, useEffect } from "react";
import RiskContent from "./layer-section-content";
import {
    getRiskColorBackground,
    getRiskColorText,
    getRiskEmoji,
} from "@/util/riskColors";
import Image from "next/image";
import InfrastructureReviewModal from "@/components/infrastructure-review-modal";
import { allInfrastructures, popupOnlyInfrastructures } from "@/util/infrastructure_index";
import { allMore } from "@/util/more_index";
import { allOpcodes } from "@/util/opcode_index";
import { Code2, ChevronDown, ChevronUp } from "lucide-react";

interface Peg {
    name: string;
    infrastructureSlug: string;
    score: number;
    tier: string;
    title: string;
    content: string;
    alert?: {
        type: "info" | "warning" | "error";
        title: string;
        content: string;
        linkText?: string;
        linkUrl?: string;
    };
}

interface BtcCustodyProps {
    category: string;
    pegs?: Peg[];
    layerSlug?: string;
}

const BtcCustody: React.FC<BtcCustodyProps> = ({ category, pegs = [], layerSlug }) => {
    const [selectedPeg, setSelectedPeg] = useState<string>(
        pegs.length > 0 ? pegs[0].name : "none",
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedPegData = pegs.length > 0
        ? pegs.find((peg) => peg.name === selectedPeg)
        : null;

    const displayedRiskFactor = selectedPegData ? selectedPegData.tier : "Multiple";

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleSelectPeg = (pegName: string) => {
        setSelectedPeg(pegName);
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

    // Chevron down icon component
    const ChevronDownIcon = () => (
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
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
                <div className="flex flex-col gap-2">
                    {/* BTC Custody title */}
                    <div className="body_risksection !text-foreground">
                        {category}
                    </div>

                    {/* Dropdown positioned below the title */}
                    {pegs.length > 0 ? (
                        <div className="relative" ref={dropdownRef}>
                            {/* Dropdown Button - now uses foreground color */}
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center gap-2 cursor-pointer text-foreground"
                                style={{
                                    fontFamily: 'Public Sans',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    lineHeight: '28px',
                                }}
                            >
                                {selectedPeg}
                                <ChevronDownIcon />
                            </button>

                            {/* Enhanced Dropdown - now uses design system colors */}
                            {isDropdownOpen && (
                                <div 
                                    className="absolute z-10 bg-popover border border-border rounded-lg shadow-md"
                                    style={{
                                        display: 'flex',
                                        width: '263px',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        left: '-1.312px',
                                        top: '32px',
                                    }}
                                >
                                    {/* Individual Peg Options */}
                                    {pegs.map((peg) => (
                                        <button
                                            key={peg.name}
                                            onClick={() => handleSelectPeg(peg.name)}
                                            className="w-full text-left transition-colors duration-200 hover:bg-brand hover:text-white text-popover-foreground"
                                            style={{
                                                display: 'flex',
                                                height: '56px',
                                                padding: '0px 8px',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                alignSelf: 'stretch',
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* Actual peg logo from logos directory */}
                                                <Image
                                                    src={`/logos/${peg.infrastructureSlug}.png`}
                                                    alt={peg.name}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6 rounded-full object-cover bg-muted"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/logos/default.png';
                                                    }}
                                                />
                                                <span className="font-medium">{peg.name}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">
                            No pegs available
                        </p>
                    )}
                </div>

                {/* Risk indicator */}
                <div className="h-8 justify-end items-center gap-2 flex lg:flex-row flex-row-reverse">
                    <div
                        className="text-sm font-medium leading-tight"
                        style={{
                            color: getRiskColorText(displayedRiskFactor),
                        }}
                    >
                        {displayedRiskFactor}
                    </div>
                    <div className="w-8 h-8 justify-center items-center flex">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{
                                backgroundColor:
                                    getRiskColorBackground(displayedRiskFactor),
                            }}
                        >
                            <div
                                className="text-center text-base font-bold font-Hack"
                                style={{
                                    color: getRiskColorText(
                                        displayedRiskFactor,
                                    ),
                                }}
                            >
                                {getRiskEmoji(displayedRiskFactor)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="mt-4">
                {pegs.length > 0 && selectedPegData ? (
                    <div>
                        <RiskContent
                            title={selectedPegData.title}
                            content={selectedPegData.content}
                            alert={selectedPegData.alert}
                        />
                        <InfrastructureReviewModal
                            infrastructureSlug={selectedPegData.infrastructureSlug}
                            triggerText={`Learn more about ${selectedPegData.name}'s custody model`}
                            infrastructure={[...allInfrastructures, ...allMore, ...allOpcodes, ...popupOnlyInfrastructures].find(
                                infra => infra.slug === selectedPegData.infrastructureSlug
                            )}
                        />
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground">
                        No peg data available
                    </p>
                )}

                {/* Bitcoin Script Analysis - Integrated */}
                {layerSlug && (
                    <BitcoinScriptAnalysisSection layerSlug={layerSlug} />
                )}
            </div>
        </div>
    );
};

// Bitcoin Script Analysis Section Component
const BitcoinScriptAnalysisSection: React.FC<{ layerSlug: string }> = ({ layerSlug }) => {
    const [analysisData, setAnalysisData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showFullScript, setShowFullScript] = useState(false);
    const [customAnalysis, setCustomAnalysis] = useState<string>('Bitcoin Script Analysis');

    useEffect(() => {
        const fetchAnalysis = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await fetch(`/api/bitcoin-analysis/${layerSlug}`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("No Bitcoin analysis available");
                        return;
                    }
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                setAnalysisData(data);
                
                // Extract custom analysis if available
                if (data?.transaction_metadata?.custom_analysis) {
                    setCustomAnalysis(data.transaction_metadata.custom_analysis);
                }
            } catch (err) {
                console.error("Error fetching Bitcoin analysis:", err);
                setError("Failed to load Bitcoin analysis");
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysis();
    }, [layerSlug]);

    if (loading) return <div className="text-sm text-muted-foreground">Loading Bitcoin script analysis...</div>;
    if (error) return <div className="text-sm text-red-600">Error: {error}</div>; 
    if (!analysisData) return <div className="text-sm text-muted-foreground">No analysis data found</div>;

    // Get the witness script with opcodes from the first input
    const inputScript = analysisData.input_scripts?.[0];
    const witnessItems = inputScript?.script_analysis?.witness_analysis?.witness_items || [];
    const witnessScript = witnessItems.find((item: any) => item.type === "script_or_redeem");
    
    // Always show transaction information, even without witness script opcodes
    const txMetadata = analysisData.transaction_metadata;
    const outputScripts = analysisData.output_scripts || [];
    let signatureRequirement = inputScript?.signature_requirement;
    

    
    // Fix Taproot threshold display if needed
    if (signatureRequirement && signatureRequirement.threshold_description === "0-of-0") {
        const scriptTypes = outputScripts.map((script: any) => script.script_type);
        const hasTaproot = scriptTypes.includes("Pay to Taproot") || 
                          inputScript?.script_analysis?.witness_analysis?.has_witness;
        
        if (hasTaproot) {
            signatureRequirement = {
                ...signatureRequirement,
                threshold_description: "1-of-1",
                required_signatures: 1,
                total_possible_signers: 1,
                present_signatures: signatureRequirement.present_signatures || 1
            };
        }
    }
    
    // Format transaction date
    const txDate = txMetadata?.analysis_date ? new Date(txMetadata.analysis_date).toLocaleDateString() : 'Unknown';
    
    if (!witnessScript?.script_analysis?.opcodes) {
        console.log('🔍 DEBUG - Taking NO OPCODES path');
        console.log('🔍 DEBUG - About to show custom_analysis:', analysisData?.transaction_metadata?.custom_analysis);
        // Use exact same format as the opcodes version, but show "no witness script" message
        return (
            <div className="mt-6">
                {/* Clickable Header - exact same styling as opcodes version */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-gray-600" />
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            Bitcoin Script Analysis
                        </h4>
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
                            {customAnalysis}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                            No opcodes
                        </span>
                        {isExpanded ? (
                            <ChevronUp className="h-4 w-4 text-gray-600" />
                        ) : (
                            <ChevronDown className="h-4 w-4 text-gray-600" />
                        )}
                    </div>
                </button>

                {/* Expandable Content - exact same styling as opcodes version */}
                {isExpanded && (
                    <div className="mt-4 space-y-4">
                        {/* Transaction Metadata - exact same styling */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Transaction Details</div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-muted-foreground">Block Height:</span>
                                    <span className="ml-1 font-mono">{txMetadata?.block_height?.toLocaleString() || 'Unknown'}</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Analysis Date:</span>
                                    <span className="ml-1">{txDate}</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Transaction Size:</span>
                                    <span className="ml-1 font-mono">{txMetadata?.size?.toLocaleString() || 'Unknown'} bytes</span>
                                </div>
                                <div>
                                    <span className="text-muted-foreground">Fee:</span>
                                    <span className="ml-1 font-mono">{txMetadata?.fee?.toLocaleString() || 'Unknown'} sats</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <a 
                                    href={`https://blockstream.info/tx/${txMetadata?.txid}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    🔗 View on Blockstream Explorer
                                </a>
                            </div>
                            

                        </div>

                        {/* Signature Thresholds - exact same styling */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Signature Threshold Analysis</div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Threshold Type:</span>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Standard</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Required Score:</span>
                                    <span className="font-mono font-medium">{signatureRequirement?.threshold_description || 'Unknown'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Signatures Present:</span>
                                    <span className="font-mono text-gray-600 dark:text-gray-400">{signatureRequirement?.present_signatures || 0}</span>
                                </div>
                            </div>
                        </div>

                        {/* Input Witness Data - show actual witness information */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Input Witness Data</div>
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-300 rounded text-xs">
                                    {inputScript?.script_analysis?.witness_analysis?.witness_stack_size || 0} items
                                </span>
                            </div>
                            
                            {inputScript?.script_analysis?.witness_analysis?.witness_items?.length > 0 ? (
                                <div className="space-y-3">
                                    {inputScript.script_analysis.witness_analysis.witness_items.map((item: any, index: number) => (
                                        <div key={index} className="border border-gray-200 dark:border-gray-600 rounded p-3">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Item {index}</span>
                                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs">
                                                    {item.type?.replace('_', ' ') || 'data'}
                                                </span>
                                            </div>
                                            <div className="text-xs text-muted-foreground mb-1">
                                                Size: {item.size} bytes
                                            </div>
                                            <div className="font-mono text-xs break-all bg-gray-100 dark:bg-gray-800 p-2 rounded">
                                                {item.data?.substring(0, 100)}{item.data?.length > 100 ? '...' : ''}
                                            </div>
                                            {item.type?.includes('signature') && (
                                                <div className="mt-2 text-xs text-green-700 dark:text-green-400">
                                                    ✅ Signature verified in witness stack
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-sm text-muted-foreground">
                                    No witness data found.
                                    {!witnessScript ? " (No witness script opcodes)" : " (Witness script found but no opcodes)"}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        ); 
    }

    const opcodes = witnessScript.script_analysis.opcodes;
    
    console.log('🔍 DEBUG - Taking WITH OPCODES path');
    console.log('🔍 DEBUG - About to show custom_analysis:', analysisData?.transaction_metadata?.custom_analysis);
    
    // Fix Taproot threshold display if needed (for opcodes section too)
    if (signatureRequirement && signatureRequirement.threshold_description === "0-of-0") {
        const scriptTypes = outputScripts.map((script: any) => script.script_type);
        const hasTaproot = scriptTypes.includes("Pay to Taproot") || 
                          inputScript?.script_analysis?.witness_analysis?.has_witness;
        
        if (hasTaproot) {
            signatureRequirement = {
                ...signatureRequirement,
                threshold_description: "1-of-1",
                required_signatures: 1,
                total_possible_signers: 1,
                present_signatures: signatureRequirement.present_signatures || 1
            };
        }
    }
    
    const weightedInfo = signatureRequirement?.weighted_info;
    
    return (
        <div className="mt-6">
            {/* Clickable Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-gray-600" />
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        Bitcoin Script Analysis
                    </h4>
                     <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
                         {customAnalysis}
                     </span>
                </div>
                <div className="flex items-center gap-2">
                    {signatureRequirement?.present_signatures && (
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                            {signatureRequirement.present_signatures} signatures
                        </span>
                    )}
                    {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-gray-600" />
                    ) : (
                        <ChevronDown className="h-4 w-4 text-gray-600" />
                    )}
                </div>
            </button>

            {/* Expandable Content */}
            {isExpanded && (
                <div className="mt-4 space-y-4">
                    {/* Transaction Metadata */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Transaction Details</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                        <span className="text-muted-foreground">Block Height:</span>
                        <span className="ml-1 font-mono">{txMetadata?.block_height?.toLocaleString() || 'Unknown'}</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Analysis Date:</span>
                        <span className="ml-1">{txDate}</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Transaction Size:</span>
                        <span className="ml-1 font-mono">{txMetadata?.size?.toLocaleString() || 'Unknown'} bytes</span>
                    </div>
                    <div>
                        <span className="text-muted-foreground">Fee:</span>
                        <span className="ml-1 font-mono">{txMetadata?.fee?.toLocaleString() || 'Unknown'} sats</span>
                    </div>
                </div>
                <div className="mt-2">
                    <a 
                        href={`https://blockstream.info/tx/${txMetadata?.txid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        🔗 View on Blockstream Explorer
                    </a>
                </div>
            </div>

                    {/* Signature Thresholds */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Signature Threshold Analysis</div>
                
                {weightedInfo ? (
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Threshold Type:</span>
                            <span className="font-medium text-gray-700 dark:text-gray-300">Weighted Multisig</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Required Score:</span>
                            <span className="font-mono font-medium">{weightedInfo.threshold_score?.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Possible Weight:</span>
                            <span className="font-mono">{weightedInfo.total_possible_weight?.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Number of Signers:</span>
                            <span className="font-mono">{weightedInfo.individual_weights?.length || 'Unknown'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Signatures Present:</span>
                            <span className="font-mono text-gray-600 dark:text-gray-400">{signatureRequirement?.present_signatures || 0}</span>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Threshold Type:</span>
                            <span className="font-medium">{signatureRequirement?.signature_type || 'Standard Multisig'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Required Signatures:</span>
                            <span className="font-mono">{signatureRequirement?.required_signatures || 'Unknown'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Total Possible Signers:</span>
                            <span className="font-mono">{signatureRequirement?.total_possible_signers || 'Unknown'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Signatures Present:</span>
                            <span className="font-mono text-gray-600 dark:text-gray-400">{signatureRequirement?.present_signatures || 0}</span>
                        </div>
                    </div>
                )}
            </div>

                    {/* Script Operations */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Input Witness Script Operations
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
                            {opcodes.length} opcodes
                        </span>
                        <button
                            onClick={() => setShowFullScript(!showFullScript)}
                            className="text-sm px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                            {showFullScript ? 'Show Less' : 'Show All'}
                        </button>
                    </div>
                </div>
                
                <div className="max-h-64 overflow-y-auto">
                    <code className="text-sm bg-gray-100 dark:bg-gray-800/50 p-3 rounded block font-mono leading-relaxed whitespace-pre-wrap">
                        {(showFullScript ? opcodes : opcodes.slice(0, 20)).map((opcode: any, index: number) => {
                            if (opcode.data) {
                                return `${String(index + 1).padStart(3, ' ')}: ${opcode.name} ${opcode.data}`;
                            } else {
                                return `${String(index + 1).padStart(3, ' ')}: ${opcode.name}`;
                            }
                        }).join('\n')}
                        {!showFullScript && opcodes.length > 20 && `\n... and ${opcodes.length - 20} more opcodes (click "Show All" to see)`}
                    </code>
                </div>
                
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    💡 This script defines the weighted multisig threshold requirements for spending Bitcoin on {layerSlug}
                </div>
            </div>
                </div>
            )}
        </div>
    );
};

export default BtcCustody;
