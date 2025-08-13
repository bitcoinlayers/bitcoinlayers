"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Bitcoin, Zap, Shield, FileText, Code2, Eye, EyeOff, Hash, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface ScriptData {
    script_hex: string;
    script_type: string;
    script_analysis: {
        raw_script: string;
        script_type: string;
        opcodes: any[];
        witness_analysis?: {
            has_witness: boolean;
            witness_stack_size: number;
            witness_items?: Array<{
                index: number;
                size: number;
                data: string;
                type: string;
            }>;
        };
    };
    context?: any;
}

interface BitcoinAnalysisData {
    transaction_metadata: {
        txid: string;
        network?: string;
        block_height?: number;
        block_hash?: string;
        confirmation_time?: string;
        fee?: number;
        size?: number;
        weight?: number;
        analysis_date?: string;
    };
    input_scripts?: ScriptData[];
    output_scripts?: ScriptData[];
    summary_stats: {
        total_inputs: number;
        total_outputs: number;
        script_types: string[];
        has_segwit: boolean;
        has_multisig: boolean;
        total_value: number;
    };
    signature_analysis: {
        summary: {
            total_signatures_present: number;
            total_signatures_required_to_spend_outputs?: number;
            signature_patterns: string[];
            has_multisig: boolean;
            multisig_input_count?: number;
            multisig_output_count?: number;
        };
        input_analysis?: any;
        output_analysis?: any;
    };
    weighted_voting?: {
        participants: Array<{
            address: string;
            weight: number;
            role?: string;
        }>;
        threshold_score: number;
        total_weight: number;
    };
    layer_association?: {
        layer_name?: string;
        wrapper_name?: string;
        analysis_type: string;
    };
    custom_summary?: {
        title?: string;
        description: string;
        author?: string;
        date?: string;
        key_findings?: string[];
    };
}

interface BitcoinScriptAnalysisSectionProps {
    infrastructureSlug: string;
}

export default function BitcoinScriptAnalysisSection({ infrastructureSlug }: BitcoinScriptAnalysisSectionProps) {
    const [analysisData, setAnalysisData] = useState<BitcoinAnalysisData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showBitcoinAnalysis, setShowBitcoinAnalysis] = useState(false);
    const [showFullScript, setShowFullScript] = useState(false);
    const [expandedWitnessStacks, setExpandedWitnessStacks] = useState<Set<string>>(new Set());
    const [expandedWitnessScripts, setExpandedWitnessScripts] = useState<Set<string>>(new Set());
    const [showWitnessScript, setShowWitnessScript] = useState(false);

    useEffect(() => {
        const fetchAnalysis = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await fetch(`/api/bitcoin-analysis/${infrastructureSlug}`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("No Bitcoin analysis available for this wrapper");
                        return;
                    }
                    throw new Error(`HTTP ${response.status}`);
                }
                
                const data = await response.json();
                setAnalysisData(data);
            } catch (err) {
                console.error("Error fetching Bitcoin analysis:", err);
                setError("Failed to load Bitcoin analysis");
            } finally {
                setLoading(false);
            }
        };

        fetchAnalysis();
    }, [infrastructureSlug]);

    const toggleWitnessStack = (scriptId: string) => {
        const newExpanded = new Set(expandedWitnessStacks);
        if (newExpanded.has(scriptId)) {
            newExpanded.delete(scriptId);
        } else {
            newExpanded.add(scriptId);
        }
        setExpandedWitnessStacks(newExpanded);
    };

    const toggleWitnessScript = (scriptId: string) => {
        const newExpanded = new Set(expandedWitnessScripts);
        if (newExpanded.has(scriptId)) {
            newExpanded.delete(scriptId);
        } else {
            newExpanded.add(scriptId);
        }
        setExpandedWitnessScripts(newExpanded);
    };

    const formatTxId = (txid: string) => {
        return `${txid.slice(0, 8)}...${txid.slice(-8)}`;
    };

    const formatScriptTypes = (types: string[] | undefined) => {
        if (!types || !Array.isArray(types) || types.length === 0) {
            return 'N/A';
        }
        return types.map(type => type.replace(/_/g, ' ')).join(', ');
    };

    const getWitnessScript = (witnessItems: any[]) => {
        return witnessItems.find(item => 
            item.type === "script_or_redeem" || 
            item.type === "script" ||
            item.type === "witness_script"
        );
    };

    const parseWitnessScript = (scriptData: string) => {
        // Enhanced script parsing with comprehensive Bitcoin opcodes
        const opcodeMap: { [key: string]: string } = {
            '00': 'OP_0', '4f': 'OP_1NEGATE',
            '51': 'OP_1', '52': 'OP_2', '53': 'OP_3', '54': 'OP_4', '55': 'OP_5',
            '56': 'OP_6', '57': 'OP_7', '58': 'OP_8', '59': 'OP_9', '5a': 'OP_10',
            '5b': 'OP_11', '5c': 'OP_12', '5d': 'OP_13', '5e': 'OP_14', '5f': 'OP_15',
            '60': 'OP_16',
            
            // Flow control
            '63': 'OP_IF', '64': 'OP_NOTIF', '67': 'OP_ELSE', '68': 'OP_ENDIF', '69': 'OP_VERIFY',
            '6a': 'OP_RETURN',
            
            // Stack operations
            '6b': 'OP_TOALTSTACK', '6c': 'OP_FROMALTSTACK', '6d': 'OP_2DROP', '6e': 'OP_2DUP',
            '6f': 'OP_3DUP', '70': 'OP_2OVER', '71': 'OP_2ROT', '72': 'OP_2SWAP',
            '73': 'OP_IFDUP', '74': 'OP_DEPTH', '75': 'OP_DROP', '76': 'OP_DUP',
            '77': 'OP_NIP', '78': 'OP_OVER', '79': 'OP_PICK', '7a': 'OP_ROLL',
            '7b': 'OP_ROT', '7c': 'OP_SWAP', '7d': 'OP_TUCK',
            
            // Crypto
            'a6': 'OP_RIPEMD160', 'a7': 'OP_SHA1', 'a8': 'OP_SHA256', 'a9': 'OP_HASH160',
            'aa': 'OP_HASH256', 'ab': 'OP_CODESEPARATOR', 'ac': 'OP_CHECKSIG',
            'ad': 'OP_CHECKSIGVERIFY', 'ae': 'OP_CHECKMULTISIG', 'af': 'OP_CHECKMULTISIGVERIFY'
        };

        const operations = [];
        let i = 0;
        
        while (i < scriptData.length) {
            if (i > scriptData.length - 2) {
                if (i === scriptData.length - 2) {
                    const byte = scriptData.slice(i, i + 2).toLowerCase();
                    if (opcodeMap[byte]) {
                        operations.push({
                            type: 'opcode',
                            value: opcodeMap[byte],
                            hex: byte,
                        });
                    }
                }
                break;
            }
            
            const byte = scriptData.slice(i, i + 2).toLowerCase();
            const byteValue = parseInt(byte, 16);
            
            if (isNaN(byteValue)) {
                i += 2;
                continue;
            }
            
            if (opcodeMap[byte]) {
                operations.push({
                    type: 'opcode',
                    value: opcodeMap[byte],
                    hex: byte,
                });
                i += 2;
            } else if (byteValue >= 1 && byteValue <= 75) {
                const dataLength = byteValue * 2;
                
                if (i + 2 + dataLength > scriptData.length) {
                    break;
                }
                
                const data = scriptData.slice(i + 2, i + 2 + dataLength);
                operations.push({
                    type: 'data',
                    value: `OP_PUSHBYTES_${byteValue}`,
                    data: data,
                    hex: byte,
                    length: byteValue,
                });
                i += 2 + dataLength;
            } else {
                operations.push({
                    type: 'unknown',
                    value: `UNKNOWN_${byte.toUpperCase()}`,
                    hex: byte,
                });
                i += 2;
            }
        }
        
        return operations;
    };

    return (
        <div className="mt-6 overflow-hidden">
            <button
                onClick={() => setShowBitcoinAnalysis(!showBitcoinAnalysis)}
                className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-4 text-left"
            >
                <Bitcoin className="h-5 w-5 text-foreground" />
                <h4 className="text-lg font-semibold text-foreground">
                    Bitcoin Script Analysis
                </h4>
                {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-muted-foreground border-t-transparent"></div>
                ) : showBitcoinAnalysis ? (
                    <ChevronUp className="h-4 w-4" />
                ) : (
                    <ChevronDown className="h-4 w-4" />
                )}
            </button>

            {loading && showBitcoinAnalysis && (
                <div className="text-muted-foreground text-sm mb-4">
                    Loading Bitcoin Script Analysis...
                </div>
            )}

            {error && showBitcoinAnalysis && (
                <div className="text-muted-foreground text-sm mb-4">
                    {error}
                </div>
            )}

            {showBitcoinAnalysis && analysisData && (
            
            <div className="space-y-6 overflow-hidden">
                {/* Custom Analysis Summary */}
                {analysisData.custom_summary && (
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                        <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-600" />
                            {analysisData.custom_summary.title || 'Analysis Summary'}
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
                                                <span className="text-blue-600 mt-1">•</span>
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
                        
                        {analysisData.transaction_metadata?.block_height && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Block Height:</span>
                                <span className="text-sm font-mono">
                                    {analysisData.transaction_metadata.block_height.toLocaleString()}
                                </span>
                            </div>
                        )}
                        
                        {analysisData.transaction_metadata?.fee && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Fee:</span>
                                <span className="text-sm font-mono">
                                    {(analysisData.transaction_metadata.fee / 100000000).toFixed(8)} BTC
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Custody Pattern */}
                <div>
                    <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Custody Pattern
                    </h5>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground min-w-[120px]">Signatures Present:</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                {analysisData.signature_analysis?.summary?.total_signatures_present || 0}
                            </span>
                        </div>
                        
                        {analysisData.signature_analysis?.summary?.has_multisig && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Multisig:</span>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-border text-emerald-600">
                                    {analysisData.signature_analysis.summary.signature_patterns?.includes('weighted_multisig') 
                                        ? `${analysisData.signature_analysis.summary.total_signatures_present} signatures (weighted)` 
                                        : "Detected"}
                                </span>
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground min-w-[120px]">Script Types:</span>
                            <span className="text-sm">
                                {formatScriptTypes(analysisData.summary_stats?.script_types)}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground min-w-[120px]">Inputs/Outputs:</span>
                            <span className="text-sm">
                                {analysisData.summary_stats?.total_inputs || 0} inputs, {analysisData.summary_stats?.total_outputs || 0} outputs
                            </span>
                        </div>

                        {analysisData.summary_stats?.has_segwit && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">SegWit:</span>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                    Enabled
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Weighted Voting (if present) */}
                {analysisData.weighted_voting && (
                    <div>
                        <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Weighted Voting System
                        </h5>
                        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Participants:</span>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                    {analysisData.weighted_voting.participants.length}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground min-w-[120px]">Threshold Score:</span>
                                <span className="text-sm font-mono">
                                    {analysisData.weighted_voting.threshold_score.toLocaleString()} / {analysisData.weighted_voting.total_weight.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Witness Script Analysis */}
                {analysisData.input_scripts && analysisData.input_scripts.length > 0 && (
                    <div>
                        <button
                            onClick={() => setShowWitnessScript(!showWitnessScript)}
                            className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors mb-3"
                        >
                            <Code2 className="h-4 w-4" />
                            <h5 className="font-medium">Witness Script Analysis</h5>
                            {showWitnessScript ? (
                                <ChevronUp className="h-4 w-4" />
                            ) : (
                                <ChevronDown className="h-4 w-4" />
                            )}
                        </button>
                        
                        {showWitnessScript && (
                            <div className="space-y-4 overflow-hidden">
                            {analysisData.input_scripts.map((script, index) => {
                                if (!script.script_analysis?.witness_analysis?.has_witness) return null;
                                
                                const witnessScript = getWitnessScript(script.script_analysis.witness_analysis.witness_items || []);
                                if (!witnessScript) return null;

                                return (
                                    <div key={index} className="bg-muted/50 rounded-lg p-4 overflow-hidden">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Hash className="h-4 w-4" />
                                            <h6 className="text-sm font-medium text-foreground">
                                                Input {index} Witness Script
                                            </h6>
                                            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                                                {witnessScript.size.toLocaleString()} bytes
                                            </span>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            {/* Raw Script */}
                                            <div>
                                                <div className="text-xs text-muted-foreground mb-2">
                                                    Raw Script ({witnessScript.data.length} hex chars):
                                                </div>
                                                <code className="text-xs bg-background p-3 rounded block overflow-x-auto font-mono leading-relaxed max-h-32 overflow-y-auto border border-border break-all">
                                                    {witnessScript.data}
                                                </code>
                                            </div>
                                            
                                            {/* Parsed Operations */}
                                            <div>
                                                <div className="text-xs text-muted-foreground mb-2">
                                                    Parsed Script Operations:
                                                </div>
                                                <div className="bg-background p-3 rounded border border-border max-h-64 overflow-y-auto overflow-x-hidden">
                                                    <code className="text-xs font-mono leading-relaxed whitespace-pre-wrap break-words">
                                                        {(() => {
                                                            try {
                                                                // Use server-side parsed opcodes if available
                                                                if (witnessScript.script_analysis?.opcodes) {
                                                                    const opcodes = witnessScript.script_analysis.opcodes;
                                                                    return opcodes.map((opcode: any, opIndex: number) => {
                                                                        if (opcode.data) {
                                                                            return `${opcode.name} ${opcode.data}`;
                                                                        } else {
                                                                            return opcode.name;
                                                                        }
                                                                    }).join('\n');
                                                                }
                                                                
                                                                // Fallback to client-side parsing
                                                                const operations = parseWitnessScript(witnessScript.data);
                                                                
                                                                if (operations.length === 0) {
                                                                    return `Script parsing incomplete\nRaw script length: ${witnessScript.data.length} chars\nThis may be a complex multisig script requiring additional analysis`;
                                                                }
                                                                
                                                                return operations.map((op: any, opIndex: number) => {
                                                                    if (op.type === 'opcode') {
                                                                        return op.value;
                                                                    } else if (op.type === 'data') {
                                                                        // Truncate long data to prevent overflow
                                                                        const truncatedData = op.data.length > 32 ? `${op.data.slice(0, 32)}...` : op.data;
                                                                        return `${op.value} ${truncatedData}`;
                                                                    } else {
                                                                        return op.value;
                                                                    }
                                                                }).join('\n');
                                                            } catch (error) {
                                                                console.error('Script parsing error:', error);
                                                                return `Error parsing script: ${error.message}`;
                                                            }
                                                        })()}
                                                    </code>
                                                </div>
                                            </div>

                                            {/* Witness Stack Items */}
                                            <div>
                                                <div className="text-xs text-muted-foreground mb-2">
                                                    Witness Stack ({script.script_analysis.witness_analysis.witness_stack_size} items):
                                                </div>
                                                <div className="space-y-2 max-h-48 overflow-y-auto overflow-x-hidden border border-border rounded p-2 bg-background">
                                                    {script.script_analysis.witness_analysis.witness_items
                                                        ?.slice(0, 5) // Show first 5 items
                                                        .map((item, itemIndex) => {
                                                            const isWitnessScript = item.type === "script_or_redeem" || item.type === "script" || item.type === "witness_script";
                                                            return (
                                                                <div key={itemIndex} className={`text-xs ${isWitnessScript ? 'bg-muted/50 border border-border rounded p-2' : ''}`}>
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <span className="text-foreground font-medium">#{item.index}:</span>
                                                                        <span className={`text-xs px-1 py-0.5 rounded ${
                                                                            isWitnessScript 
                                                                                ? 'bg-secondary text-secondary-foreground' 
                                                                                : 'bg-muted text-muted-foreground'
                                                                        }`}>
                                                                            {item.type}
                                                                            {isWitnessScript && ' (Script)'}
                                                                        </span>
                                                                        <span className="text-muted-foreground">
                                                                            {item.size.toLocaleString()} bytes
                                                                        </span>
                                                                    </div>
                                                                    <code className="text-xs bg-muted/30 p-1 rounded block overflow-x-auto font-mono leading-relaxed border border-border break-all">
                                                                        {item.data.slice(0, 80)}...
                                                                    </code>
                                                                </div>
                                                            );
                                                        })}
                                                    {script.script_analysis.witness_analysis.witness_items && 
                                                     script.script_analysis.witness_analysis.witness_items.length > 5 && (
                                                        <div className="text-xs text-muted-foreground pt-1 border-t border-border">
                                                            ... and {script.script_analysis.witness_analysis.witness_items.length - 5} more items
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
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
                            {analysisData.layer_association.wrapper_name ? 'Wrapper' : 'Layer'}: {analysisData.layer_association.wrapper_name || analysisData.layer_association.layer_name}
                        </div>
                    </div>
                )}
            </div>
            )}
        </div>
    );
}
