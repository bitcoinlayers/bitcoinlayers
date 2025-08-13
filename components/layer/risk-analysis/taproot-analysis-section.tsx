"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Zap, Shield, FileText, Code2, ChevronDown, ChevronUp, Hash, Bitcoin, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface TaprootControlBlock {
    version: number;
    parity: number;
    internal_key: string;
    merkle_path: string[];
    script_merkle_root: string;
}

interface TapscriptAnalysis {
    script_hex: string;
    opcodes: Array<{
        opcode: number;
        name: string;
        data?: string;
    }>;
    script_type: string;
    spending_conditions: string[];
    required_signatures: number;
    timelock_conditions: string[];
}

interface TaprootSpendAnalysis {
    spend_type: string;
    witness_stack: Array<{
        type: string;
        size: number;
        data: string;
        description: string;
    }>;
    control_block?: TaprootControlBlock;
    executed_script?: TapscriptAnalysis;
    signature_analysis: {
        total_signatures: number;
        signature_types: string[];
        analysis: string;
    };
    script_tree_info: {
        merkle_depth?: number;
        total_scripts?: number;
        script_path_length?: number;
        analysis?: string;
    };
}

interface TaprootAnalysisData {
    transaction_metadata: {
        txid: string;
        network?: string;
        analysis_date?: string;
        analyzer_type?: string;
        api_provider?: string;
    };
    taproot_inputs: TaprootSpendAnalysis[];
    taproot_outputs: any[];
    script_tree_analysis: any;
    signature_analysis: any;
    layer_association?: {
        wrapper_name?: string;
        analysis_type: string;
        integration_target: string;
    };
    metadata?: any;
    custom_summary?: {
        title?: string;
        description: string;
        author?: string;
        date?: string;
        key_findings?: string[];
    };
}

interface TaprootAnalysisSectionProps {
    infrastructureSlug: string;
}

export default function TaprootAnalysisSection({ infrastructureSlug }: TaprootAnalysisSectionProps) {
    const [analysisData, setAnalysisData] = useState<TaprootAnalysisData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showTaprootAnalysis, setShowTaprootAnalysis] = useState(false);
    const [showScriptDetails, setShowScriptDetails] = useState(false);
    const [expandedInputs, setExpandedInputs] = useState<Set<number>>(new Set());

    useEffect(() => {
        const fetchAnalysis = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await fetch(`/api/taproot-analysis/${infrastructureSlug}`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("No Taproot analysis available for this wrapper");
                        return;
                    }
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                setAnalysisData(data);
            } catch (err) {
                console.error("Error fetching Taproot analysis:", err);
                setError("Failed to load Taproot analysis");
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysis();
    }, [infrastructureSlug]);

    const toggleInput = (inputIndex: number) => {
        const newExpanded = new Set(expandedInputs);
        if (newExpanded.has(inputIndex)) {
            newExpanded.delete(inputIndex);
        } else {
            newExpanded.add(inputIndex);
        }
        setExpandedInputs(newExpanded);
    };

    const formatTxId = (txid: string) => {
        return `${txid.slice(0, 8)}...${txid.slice(-8)}`;
    };

    const formatControlBlockVersion = (version: number) => {
        return `0x${version.toString(16).padStart(2, '0').toUpperCase()}`;
    };

    return (
        <div className="mt-6 overflow-hidden">
            <button
                onClick={() => setShowTaprootAnalysis(!showTaprootAnalysis)}
                className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-4 text-left"
            >
                <Bitcoin className="h-5 w-5 text-foreground" />
                <h4 className="text-lg font-semibold text-foreground">
                    Taproot Script Analysis
                </h4>
                {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-muted-foreground border-t-transparent"></div>
                ) : showTaprootAnalysis ? (
                    <ChevronUp className="h-4 w-4" />
                ) : (
                    <ChevronDown className="h-4 w-4" />
                )}
            </button>

            {loading && showTaprootAnalysis && (
                <div className="text-muted-foreground text-sm mb-4">
                    Loading Taproot Analysis...
                </div>
            )}

            {error && showTaprootAnalysis && (
                <div className="text-muted-foreground text-sm mb-4">
                    {error}
                </div>
            )}

            {showTaprootAnalysis && analysisData && (
            
            <div className="space-y-6 overflow-hidden">
                {/* Custom Analysis Summary */}
                {analysisData.custom_summary && (
                    <div className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-950/20 dark:to-orange-950/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                        <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Bitcoin className="h-4 w-4 text-purple-600" />
                            {analysisData.custom_summary.title || 'Taproot Analysis Summary'}
                        </h5>
                        <div className="space-y-3 text-sm">
                            <div className="text-muted-foreground leading-relaxed">
                                {parseTextWithLinks(analysisData.custom_summary.description)}
                            </div>
                            
                            {analysisData.custom_summary.key_findings && analysisData.custom_summary.key_findings.length > 0 && (
                                <div>
                                    <span className="font-medium text-foreground">Key Findings:</span>
                                    <ul className="mt-2 space-y-1 text-muted-foreground">
                                        {analysisData.custom_summary.key_findings.map((finding, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-purple-600 mt-1">•</span>
                                                <span>{parseTextWithLinks(finding)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {(analysisData.custom_summary.author || analysisData.custom_summary.date) && (
                                <div className="text-xs text-muted-foreground pt-2 border-t border-border">
                                    {analysisData.custom_summary.author && (
                                        <span>Analysis by {analysisData.custom_summary.author}</span>
                                    )}
                                    {analysisData.custom_summary.author && analysisData.custom_summary.date && (
                                        <span> • </span>
                                    )}
                                    {analysisData.custom_summary.date && (
                                        <span>{analysisData.custom_summary.date}</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {/* Transaction Overview */}
                <div>
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Transaction Overview
                    </h5>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                        {analysisData.transaction_metadata?.txid && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Transaction ID:</span>
                                <code className="text-xs bg-background px-2 py-1 rounded border">
                                    {formatTxId(analysisData.transaction_metadata.txid)}
                                </code>
                                <a
                                    href={`https://blockstream.info/tx/${analysisData.transaction_metadata.txid}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        )}
                        
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground min-w-[120px]">Network:</span>
                            <span className="text-sm font-mono capitalize">
                                {analysisData.transaction_metadata?.network || 'Unknown'}
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground min-w-[120px]">Analysis Type:</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                                Advanced Taproot
                            </span>
                        </div>
                    </div>
                </div>

                {/* Taproot Pattern */}
                <div>
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Taproot Spending Pattern
                    </h5>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground min-w-[120px]">Taproot Inputs:</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                {analysisData.taproot_inputs?.length || 0}
                            </span>
                        </div>
                        
                        {analysisData.taproot_inputs?.length > 0 && (
                            <>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground min-w-[120px]">Spend Type:</span>
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-border text-emerald-600">
                                        {analysisData.taproot_inputs[0].spend_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                    </span>
                                </div>

                                {analysisData.taproot_inputs[0].signature_analysis && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground min-w-[120px]">Signatures:</span>
                                        <span className="text-sm">
                                            {analysisData.taproot_inputs[0].signature_analysis.total_signatures} Schnorr signatures
                                        </span>
                                    </div>
                                )}

                                {analysisData.taproot_inputs[0].executed_script && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground min-w-[120px]">Script Type:</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                            {analysisData.taproot_inputs[0].executed_script.script_type}
                                        </span>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                {/* Script Tree Analysis */}
                {analysisData.taproot_inputs?.length > 0 && analysisData.taproot_inputs[0].control_block && (
                    <div>
                        <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Bitcoin className="h-4 w-4" />
                            Script Tree Structure
                        </h5>
                        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Merkle Depth:</span>
                                <span className="text-sm font-mono">
                                    {analysisData.taproot_inputs[0].script_tree_info?.merkle_depth || 0} levels
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Total Scripts:</span>
                                <span className="text-sm font-mono">
                                    {analysisData.taproot_inputs[0].script_tree_info?.total_scripts || 0} possible
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Control Block:</span>
                                <span className="text-sm font-mono">
                                    {formatControlBlockVersion(analysisData.taproot_inputs[0].control_block.version)} 
                                    (parity: {analysisData.taproot_inputs[0].control_block.parity})
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Detailed Script Analysis */}
                {analysisData.taproot_inputs?.length > 0 && (
                    <div>
                        <button
                            onClick={() => setShowScriptDetails(!showScriptDetails)}
                            className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-3"
                        >
                            <Code2 className="h-4 w-4" />
                            <h5 className="font-medium">Tapscript Details</h5>
                            {showScriptDetails ? (
                                <ChevronUp className="h-4 w-4" />
                            ) : (
                                <ChevronDown className="h-4 w-4" />
                            )}
                        </button>
                        
                        {showScriptDetails && (
                            <div className="space-y-4 overflow-hidden">
                                {analysisData.taproot_inputs.map((input, index) => (
                                    <div key={index} className="bg-muted/50 rounded-lg p-4 overflow-hidden">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Hash className="h-4 w-4" />
                                            <h6 className="text-sm font-medium text-foreground">
                                                Input {index} - {input.spend_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())} Spend
                                            </h6>
                                            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                                                {input.witness_stack.length} witness items
                                            </span>
                                        </div>
                                        
                                        {/* Witness Stack */}
                                        <div className="space-y-3">
                                            <div>
                                                <div className="text-xs text-muted-foreground mb-2">
                                                    Witness Stack Items:
                                                </div>
                                                <div className="space-y-2 max-h-48 overflow-y-auto border border-border rounded p-2 bg-background">
                                                    {input.witness_stack.map((item, itemIndex) => (
                                                        <div key={itemIndex} className="text-xs">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-foreground font-medium">#{itemIndex}:</span>
                                                                <span className="text-xs px-1 py-0.5 rounded bg-muted text-muted-foreground">
                                                                    {item.type}
                                                                </span>
                                                                <span className="text-muted-foreground">
                                                                    {item.size} bytes
                                                                </span>
                                                            </div>
                                                            <div className="text-xs text-muted-foreground mb-1">
                                                                {item.description}
                                                            </div>
                                                            {item.type !== 'empty' && (
                                                                <code className="text-xs bg-muted/30 p-1 rounded block overflow-x-auto font-mono leading-relaxed border border-border break-all">
                                                                    {item.data.slice(0, 100)}...
                                                                </code>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            {/* Executed Script */}
                                            {input.executed_script && (
                                                <div>
                                                    <div className="text-xs text-muted-foreground mb-2">
                                                        Executed Tapscript ({input.executed_script.script_hex.length/2} bytes):
                                                    </div>
                                                    <code className="text-xs bg-background p-3 rounded block overflow-x-auto font-mono leading-relaxed max-h-32 overflow-y-auto border border-border break-all">
                                                        {input.executed_script.script_hex}
                                                    </code>
                                                    
                                                    <div className="mt-2">
                                                        <div className="text-xs text-muted-foreground mb-2">
                                                            Opcode Breakdown:
                                                        </div>
                                                        <div className="bg-background p-3 rounded border border-border max-h-48 overflow-y-auto">
                                                            <code className="text-xs font-mono leading-relaxed whitespace-pre-wrap">
                                                                {input.executed_script.opcodes.map((opcode, opIndex) => (
                                                                    `${opIndex + 1}. ${opcode.name}${opcode.data ? ` ${opcode.data.slice(0, 32)}${opcode.data.length > 32 ? '...' : ''}` : ''}`
                                                                )).join('\n')}
                                                            </code>
                                                        </div>
                                                    </div>

                                                    {input.executed_script.spending_conditions.length > 0 && (
                                                        <div className="mt-2">
                                                            <div className="text-xs text-muted-foreground mb-2">
                                                                Spending Conditions:
                                                            </div>
                                                            <div className="space-y-1">
                                                                {input.executed_script.spending_conditions.map((condition, condIndex) => (
                                                                    <div key={condIndex} className="flex items-center gap-2">
                                                                        <Lock className="h-3 w-3 text-muted-foreground" />
                                                                        <span className="text-xs">{condition}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Analysis Meta */}
                {analysisData.layer_association && (
                    <div className="border-t border-border pt-4">
                        <div className="text-xs text-muted-foreground">
                            Analysis Type: {analysisData.layer_association.analysis_type.charAt(0).toUpperCase() + 
                                analysisData.layer_association.analysis_type.slice(1)} • 
                            Wrapper: {analysisData.layer_association.wrapper_name?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())} •
                            Target: {analysisData.layer_association.integration_target.replace('_', ' ')}
                        </div>
                    </div>
                )}
            </div>
            )}
        </div>
    );
}
