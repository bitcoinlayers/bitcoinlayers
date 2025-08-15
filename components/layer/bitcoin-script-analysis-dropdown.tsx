"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Bitcoin, Zap, Shield, FileText, Code2, Eye, EyeOff, Hash } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
}

interface BitcoinScriptAnalysisProps {
    layerSlug: string;
}

export default function BitcoinScriptAnalysisDropdown({ layerSlug }: BitcoinScriptAnalysisProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [analysisData, setAnalysisData] = useState<BitcoinAnalysisData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showFullScript, setShowFullScript] = useState(false);
    const [expandedWitnessStacks, setExpandedWitnessStacks] = useState<Set<string>>(new Set());
    const [expandedWitnessScripts, setExpandedWitnessScripts] = useState<Set<string>>(new Set());

    useEffect(() => {
        const fetchAnalysis = async () => {
            if (!isOpen) return;
            
            setLoading(true);
            setError(null);
            
            try {
                const response = await fetch(`/api/bitcoin-analysis/${layerSlug}`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        setError("No Bitcoin analysis available for this layer");
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
    }, [isOpen, layerSlug]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
        // In P2WSH, the witness script is typically the last item in the witness stack
        // and has type "script_or_redeem" or "script"
        return witnessItems.find(item => 
            item.type === "script_or_redeem" || 
            item.type === "script" ||
            item.type === "witness_script"
        );
    };

    const parseWitnessScript = (scriptData: string) => {
        console.log('Parsing script data:', scriptData.slice(0, 100) + '...');
        console.log('Script length:', scriptData.length, 'hex chars');
        
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
            
            // Splice operations
            '7e': 'OP_CAT', '7f': 'OP_SUBSTR', '80': 'OP_LEFT', '81': 'OP_RIGHT',
            '82': 'OP_SIZE',
            
            // Bitwise logic
            '83': 'OP_INVERT', '84': 'OP_AND', '85': 'OP_OR', '86': 'OP_XOR',
            '87': 'OP_EQUAL', '88': 'OP_EQUALVERIFY', '89': 'OP_RESERVED1', '8a': 'OP_RESERVED2',
            
            // Arithmetic
            '8b': 'OP_1ADD', '8c': 'OP_1SUB', '8d': 'OP_2MUL', '8e': 'OP_2DIV',
            '8f': 'OP_NEGATE', '90': 'OP_ABS', '91': 'OP_NOT', '92': 'OP_0NOTEQUAL',
            '93': 'OP_ADD', '94': 'OP_SUB', '95': 'OP_MUL', '96': 'OP_DIV',
            '97': 'OP_MOD', '98': 'OP_LSHIFT', '99': 'OP_RSHIFT',
            '9a': 'OP_BOOLAND', '9b': 'OP_BOOLOR', '9c': 'OP_NUMEQUAL', '9d': 'OP_NUMEQUALVERIFY',
            '9e': 'OP_NUMNOTEQUAL', '9f': 'OP_LESSTHAN', 'a0': 'OP_GREATERTHAN',
            'a1': 'OP_LESSTHANOREQUAL', 'a2': 'OP_GREATERTHANOREQUAL', 'a3': 'OP_MIN', 'a4': 'OP_MAX',
            'a5': 'OP_WITHIN',
            
            // Crypto
            'a6': 'OP_RIPEMD160', 'a7': 'OP_SHA1', 'a8': 'OP_SHA256', 'a9': 'OP_HASH160',
            'aa': 'OP_HASH256', 'ab': 'OP_CODESEPARATOR', 'ac': 'OP_CHECKSIG',
            'ad': 'OP_CHECKSIGVERIFY', 'ae': 'OP_CHECKMULTISIG', 'af': 'OP_CHECKMULTISIGVERIFY'
        };

        const operations = [];
        let i = 0;
        
        while (i < scriptData.length) {
            // Safety check to prevent infinite loops - but allow for single byte opcodes
            if (i > scriptData.length - 2) {
                // Check if we have at least one byte left for an opcode
                if (i === scriptData.length - 2) {
                    const byte = scriptData.slice(i, i + 2).toLowerCase();
                    const byteValue = parseInt(byte, 16);
                    if (opcodeMap[byte]) {
                        operations.push({
                            type: 'opcode',
                            value: opcodeMap[byte],
                            hex: byte,
                            description: getOpcodeDescription(opcodeMap[byte])
                        });
                    }
                }
                break;
            }
            
            const byte = scriptData.slice(i, i + 2).toLowerCase();
            const byteValue = parseInt(byte, 16);
            
            // Skip if we get invalid hex
            if (isNaN(byteValue)) {
                console.warn(`Invalid hex byte at position ${i}: ${byte}`);
                i += 2;
                continue;
            }
            
            if (opcodeMap[byte]) {
                operations.push({
                    type: 'opcode',
                    value: opcodeMap[byte],
                    hex: byte,
                    description: getOpcodeDescription(opcodeMap[byte])
                });
                i += 2;
            } else if (byteValue >= 1 && byteValue <= 75) {
                // Data push - format like OP_PUSHBYTES_X
                const dataLength = byteValue * 2; // Convert to hex chars
                
                // Safety check for data bounds
                if (i + 2 + dataLength > scriptData.length) {
                    console.warn(`Data push extends beyond script length at position ${i}`);
                    break;
                }
                
                const data = scriptData.slice(i + 2, i + 2 + dataLength);
                operations.push({
                    type: 'data',
                    value: `OP_PUSHBYTES_${byteValue}`,
                    data: data,
                    hex: byte,
                    length: byteValue,
                    description: `Push ${byteValue} bytes onto stack`,
                    dataType: guessDataType(data, byteValue)
                });
                i += 2 + dataLength;
            } else if (byteValue === 76) {
                // OP_PUSHDATA1
                const lengthByte = scriptData.slice(i + 2, i + 4);
                const dataLength = parseInt(lengthByte, 16) * 2;
                
                // Safety check for data bounds
                if (i + 4 + dataLength > scriptData.length) {
                    console.warn(`OP_PUSHDATA1 extends beyond script length at position ${i}`);
                    break;
                }
                
                const data = scriptData.slice(i + 4, i + 4 + dataLength);
                operations.push({
                    type: 'data',
                    value: 'OP_PUSHDATA1',
                    data: data,
                    hex: byte,
                    length: parseInt(lengthByte, 16),
                    description: `Push data using OP_PUSHDATA1`,
                    dataType: guessDataType(data, parseInt(lengthByte, 16))
                });
                i += 4 + dataLength;
            } else {
                // Unknown opcode
                operations.push({
                    type: 'unknown',
                    value: `UNKNOWN_${byte.toUpperCase()}`,
                    hex: byte,
                    description: 'Unknown opcode'
                });
                i += 2;
            }
        }
        
        return operations;
    };

    const getOpcodeDescription = (opcode: string) => {
        const descriptions: { [key: string]: string } = {
            'OP_CHECKSIG': 'Verify signature against public key',
            'OP_CHECKMULTISIG': 'Verify M-of-N multisig',
            'OP_IF': 'Execute code block if top stack item is true',
            'OP_ELSE': 'Execute alternative code block',
            'OP_ENDIF': 'End if statement',
            'OP_SWAP': 'Swap top two stack items',
            'OP_ADD': 'Add top two stack items',
            'OP_GREATERTHAN': 'Check if second item > top item',
            'OP_DROP': 'Remove top stack item',
            'OP_0': 'Push empty array (false) onto stack',
            'OP_DUP': 'Duplicate top stack item',
            'OP_HASH160': 'Hash with RIPEMD160(SHA256(x))',
            'OP_EQUAL': 'Check if top two items are equal',
            'OP_EQUALVERIFY': 'Check equality and verify',
            'OP_1': 'Push number 1 onto stack',
            'OP_2': 'Push number 2 onto stack',
            'OP_3': 'Push number 3 onto stack',
        };
        return descriptions[opcode] || 'Bitcoin script operation';
    };

    const guessDataType = (data: string, length: number) => {
        if (length === 33 || length === 65) {
            return 'Public Key';
        } else if (length === 20) {
            return 'Hash160';
        } else if (length === 32) {
            return 'Hash256';
        } else if (data.length > 120 && data.length < 150) {
            return 'Signature';
        }
        return 'Data';
    };

    return (
        <div className="mt-6">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
                style={{
                    fontFamily: 'Public Sans',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '24px',
                }}
            >
                <Bitcoin className="h-4 w-4" />
                custom_analysis
                {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                ) : (
                    <ChevronDown className="h-4 w-4" />
                )}
            </button>

            {isOpen && (
                <Card className="mt-3 border border-border">
                    <CardContent className="p-4">
                        {loading && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-muted-foreground border-t-transparent"></div>
                                Loading Bitcoin analysis...
                            </div>
                        )}

                        {error && (
                            <div className="text-muted-foreground text-sm">
                                {error}
                            </div>
                        )}

                        {analysisData && (
                            <div className="space-y-4">
                                {/* Transaction Overview */}
                                <div>
                                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        Transaction Overview
                                    </h4>
                                    <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                                        {analysisData.transaction_metadata?.txid && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">Transaction ID:</span>
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
                                                <span className="text-sm text-muted-foreground">Block Height:</span>
                                                <span className="text-sm font-mono">
                                                    {analysisData.transaction_metadata.block_height.toLocaleString()}
                                                </span>
                                            </div>
                                        )}
                                        
                                        {analysisData.transaction_metadata?.fee && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">Fee:</span>
                                                <span className="text-sm font-mono">
                                                    {(analysisData.transaction_metadata.fee / 100000000).toFixed(8)} BTC
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Custody Pattern */}
                                <div>
                                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                        <Shield className="h-4 w-4" />
                                        Custody Pattern
                                    </h4>
                                    <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">Signatures Present:</span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                                {analysisData.signature_analysis?.summary?.total_signatures_present || 0}
                                            </span>
                                        </div>
                                        
                                        {analysisData.signature_analysis?.summary?.has_multisig && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">Multisig:</span>
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border border-border text-emerald-600">
                                                    {analysisData.signature_analysis.summary.signature_patterns?.includes('weighted_multisig') 
                                                        ? `${analysisData.signature_analysis.summary.total_signatures_present} signatures (weighted)` 
                                                        : "Detected"}
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">Script Types:</span>
                                            <span className="text-sm">
                                                {formatScriptTypes(analysisData.summary_stats?.script_types)}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">Inputs/Outputs:</span>
                                            <span className="text-sm">
                                                {analysisData.summary_stats?.total_inputs || 0} inputs, {analysisData.summary_stats?.total_outputs || 0} outputs
                                            </span>
                                        </div>

                                        {analysisData.summary_stats?.has_segwit && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">SegWit:</span>
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
                                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                            <Zap className="h-4 w-4" />
                                            Weighted Voting System
                                        </h4>
                                        <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">Participants:</span>
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                                                    {analysisData.weighted_voting.participants.length}
                                                </span>
                                            </div>
                                            
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">Threshold Score:</span>
                                                <span className="text-sm font-mono">
                                                    {analysisData.weighted_voting.threshold_score} / {analysisData.weighted_voting.total_weight}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Full Script Analysis */}
                                {(analysisData.input_scripts || analysisData.output_scripts) && (
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                                <Code2 className="h-4 w-4" />
                                                Raw Scripts
                                            </h4>
                                            <button
                                                onClick={() => setShowFullScript(!showFullScript)}
                                                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {showFullScript ? (
                                                    <>
                                                        <EyeOff className="h-3 w-3" />
                                                        Hide
                                                    </>
                                                ) : (
                                                    <>
                                                        <Eye className="h-3 w-3" />
                                                        Show
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        
                                        {showFullScript && (
                                            <div className="bg-muted/50 rounded-lg p-3 space-y-4">
                                                {/* Input Scripts */}
                                                {analysisData.input_scripts && analysisData.input_scripts.length > 0 && (
                                                    <div>
                                                        <h5 className="text-sm font-medium text-foreground mb-2">Input Scripts ({analysisData.input_scripts.length})</h5>
                                                        <div className="space-y-3">
                                                            {analysisData.input_scripts.map((script, index) => (
                                                                <div key={index} className="bg-background rounded border p-3">
                                                                    <div className="flex items-center gap-2 mb-2">
                                                                        <span className="text-xs text-muted-foreground">Input {index}:</span>
                                                                        <span className="text-xs px-2 py-1 bg-muted rounded">
                                                                            {script.script_type}
                                                                        </span>
                                                                    </div>
                                                                    
                                                                    {script.script_hex && (
                                                                        <div className="mb-2">
                                                                            <div className="text-xs text-muted-foreground mb-1">Script Hex:</div>
                                                                            <code className="text-xs bg-muted p-2 rounded block overflow-x-auto font-mono">
                                                                                {script.script_hex || "(empty)"}
                                                                            </code>
                                                                        </div>
                                                                    )}
                                                                    
                                                                                                                        {script.script_analysis?.witness_analysis?.has_witness && (
                                                        <div>
                                                            {/* P2WSH Witness Script Section */}
                                                            {(() => {
                                                                const witnessScript = getWitnessScript(script.script_analysis.witness_analysis.witness_items || []);
                                                                const scriptId = `witness-script-${index}`;
                                                                const isExpanded = expandedWitnessScripts.has(scriptId);
                                                                
                                                                return witnessScript ? (
                                                                    <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                                                                        <div className="flex items-center justify-between mb-2">
                                                                            <div className="flex items-center gap-2">
                                                                                <Hash className="h-4 w-4 text-blue-600" />
                                                                                <h6 className="text-sm font-medium text-blue-900 dark:text-blue-100">
                                                                                    P2WSH Witness Script
                                                                                </h6>
                                                                                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                                                                                    {witnessScript.size.toLocaleString()} bytes
                                                                                </span>
                                                                            </div>
                                                                            <button
                                                                                onClick={() => toggleWitnessScript(scriptId)}
                                                                                className="flex items-center gap-1 text-xs text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors"
                                                                            >
                                                                                {isExpanded ? (
                                                                                    <>
                                                                                        <ChevronUp className="h-3 w-3" />
                                                                                        Hide Details
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <ChevronDown className="h-3 w-3" />
                                                                                        Show Details
                                                                                    </>
                                                                                )}
                                                                            </button>
                                                                        </div>
                                                                        
                                                                        {isExpanded && (
                                                                            <>
                                                                                <div className="mb-3">
                                                                                    <div className="text-xs text-blue-700 dark:text-blue-300 mb-1">
                                                                                        Raw Script ({witnessScript.data.length} hex chars, {Math.floor(witnessScript.data.length / 2)} bytes):
                                                                                    </div>
                                                                                    <code className="text-xs bg-blue-100 dark:bg-blue-900/50 p-2 rounded block overflow-x-auto font-mono leading-relaxed max-h-32 overflow-y-auto">
                                                                                        {witnessScript.data}
                                                                                    </code>
                                                                                    {witnessScript.data.length < 1000 && witnessScript.data.endsWith('...') && (
                                                                                        <div className="text-xs text-orange-600 mt-1">
                                                                                            ⚠️ Script appears truncated - check JSON file or API response
                                                                                        </div>
                                                                                    )}
                                                                                </div>
                                                                                
                                                                                <div>
                                                                                    <div className="flex items-center justify-between mb-2">
                                                                                        <div className="text-xs text-blue-700 dark:text-blue-300">Parsed Script Operations:</div>
                                                                                        <div className="flex gap-2">
                                                                                            <button
                                                                                                onClick={() => {/* Toggle format */}}
                                                                                                className="text-xs px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded hover:bg-blue-300 dark:hover:bg-blue-700"
                                                                                            >
                                                                                                Detailed View
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                    
                                                                                    {/* Compact format like your example */}
                                                                                    <div className="max-h-64 overflow-y-auto">
                                                                                        <code className="text-xs bg-blue-100 dark:bg-blue-900/50 p-3 rounded block font-mono leading-relaxed whitespace-pre-wrap">
                                                                                            {(() => {
                                                                                                try {
                                                                                                    // Use server-side parsed opcodes if available
                                                                                                    if (witnessScript.script_analysis?.opcodes) {
                                                                                                        const opcodes = witnessScript.script_analysis.opcodes;
                                                                                                        console.log('Using server-side parsed opcodes:', opcodes.length);
                                                                                                        
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
                                                                                                    console.log('Total operations parsed:', operations.length);
                                                                                                    console.log('First few operations:', operations.slice(0, 5));
                                                                                                    
                                                                                                    if (operations.length === 0) {
                                                                                                        if (witnessScript.data.endsWith('...')) {
                                                                                                            return `Script data truncated in JSON file\n\nTo see full script:\n1. Re-run bitcoin_transaction_analyzer.py\n2. Modify it to save full witness scripts\n3. Or check transaction directly on blockstream.info\n\nCurrent: ${witnessScript.data.length} chars`;
                                                                                                        }
                                                                                                        return `No operations parsed - Script length: ${witnessScript.data.length} chars\nNote: This appears to be the complete script data`;
                                                                                                    }
                                                                                                    
                                                                                                    return operations.map((op: any, opIndex: number) => {
                                                                                                        if (op.type === 'opcode') {
                                                                                                            return op.value;
                                                                                                        } else if (op.type === 'data') {
                                                                                                            return `${op.value} ${op.data}`;
                                                                                                        } else {
                                                                                                            return op.value;
                                                                                                        }
                                                                                                    }).join('\n');
                                                                                                } catch (error) {
                                                                                                    console.error('Script parsing error:', error);
                                                                                                    return `Error parsing script: ${error instanceof Error ? error.message : 'Unknown error'}`;
                                                                                                }
                                                                                            })()}
                                                                                        </code>
                                                                                    </div>
                                                                                    
                                                                                    {/* Detailed breakdown */}
                                                                                    <details className="mt-3">
                                                                                        <summary className="text-xs text-blue-700 dark:text-blue-300 cursor-pointer hover:text-blue-900 dark:hover:text-blue-100">
                                                                                            Show detailed breakdown
                                                                                        </summary>
                                                                                        <div className="mt-2 max-h-64 overflow-y-auto space-y-1">
                                                                                            {parseWitnessScript(witnessScript.data).map((op: any, opIndex: number) => (
                                                                                                <div 
                                                                                                    key={opIndex} 
                                                                                                    className={`flex items-start gap-3 p-2 rounded text-xs ${
                                                                                                        op.type === 'opcode' 
                                                                                                            ? 'bg-green-50 dark:bg-green-900/20 border-l-2 border-green-400' 
                                                                                                            : op.type === 'data'
                                                                                                            ? 'bg-yellow-50 dark:bg-yellow-900/20 border-l-2 border-yellow-400'
                                                                                                            : 'bg-gray-50 dark:bg-gray-900/20 border-l-2 border-gray-400'
                                                                                                    }`}
                                                                                                >
                                                                                                    <span className="text-muted-foreground font-mono min-w-[30px]">
                                                                                                        {opIndex + 1}:
                                                                                                    </span>
                                                                                                    <div className="flex-1 min-w-0">
                                                                                                        <div className="flex items-center gap-2 mb-1">
                                                                                                            <code className="font-bold">
                                                                                                                {op.type === 'opcode' ? op.value : op.value}
                                                                                                            </code>
                                                                                                            {op.dataType && (
                                                                                                                <span className="text-xs px-1 py-0.5 bg-white dark:bg-gray-800 rounded">
                                                                                                                    {op.dataType}
                                                                                                                </span>
                                                                                                            )}
                                                                                                            <span className="text-xs text-muted-foreground">
                                                                                                                0x{op.hex}
                                                                                                            </span>
                                                                                                        </div>
                                                                                                        <div className="text-xs text-muted-foreground mb-1">
                                                                                                            {op.description}
                                                                                                        </div>
                                                                                                        {op.type === 'data' && (
                                                                                                            <code className="text-xs bg-white dark:bg-gray-800 p-1 rounded block overflow-x-auto font-mono">
                                                                                                                {op.data}
                                                                                                            </code>
                                                                                                        )}
                                                                                                    </div>
                                                                                                </div>
                                                                                            ))}
                                                                                        </div>
                                                                                    </details>
                                                                                </div>
                                                                            </>
                                                                        )}
                                                                    </div>
                                                                ) : null;
                                                            })()}

                                                            {/* Witness Stack */}
                                                            <div className="flex items-center justify-between mb-1">
                                                                <div className="text-xs text-muted-foreground">
                                                                    Witness Stack ({script.script_analysis.witness_analysis.witness_stack_size} items):
                                                                </div>
                                                                {script.script_analysis.witness_analysis.witness_items && 
                                                                 script.script_analysis.witness_analysis.witness_items.length > 3 && (
                                                                    <button
                                                                        onClick={() => toggleWitnessStack(`input-${index}`)}
                                                                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                                                                    >
                                                                        {expandedWitnessStacks.has(`input-${index}`) ? (
                                                                            <>
                                                                                <ChevronUp className="h-3 w-3" />
                                                                                Collapse
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <ChevronDown className="h-3 w-3" />
                                                                                Show All
                                                                            </>
                                                                        )}
                                                                    </button>
                                                                )}
                                                            </div>
                                                            <div className="space-y-1 max-h-64 overflow-y-auto border border-border rounded p-2 bg-background">
                                                                {script.script_analysis.witness_analysis.witness_items
                                                                    ?.slice(0, expandedWitnessStacks.has(`input-${index}`) ? undefined : 3)
                                                                    .map((item, itemIndex) => {
                                                                        const isWitnessScript = item.type === "script_or_redeem" || item.type === "script" || item.type === "witness_script";
                                                                        return (
                                                                            <div key={itemIndex} className={`text-xs ${isWitnessScript ? 'bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded p-2' : ''}`}>
                                                                                <div className="flex items-center gap-2 mb-1">
                                                                                    <span className="text-muted-foreground font-medium">{item.index}:</span>
                                                                                    <span className={`text-xs px-1 py-0.5 rounded ${
                                                                                        isWitnessScript 
                                                                                            ? 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200' 
                                                                                            : 'bg-muted'
                                                                                    }`}>
                                                                                        {item.type}
                                                                                        {isWitnessScript && ' (Script)'}
                                                                                    </span>
                                                                                    <span className="text-muted-foreground">
                                                                                        {item.size.toLocaleString()} bytes
                                                                                    </span>
                                                                                </div>
                                                                                <code className="text-xs bg-muted/50 p-1 rounded block overflow-x-auto font-mono leading-relaxed">
                                                                                    {expandedWitnessStacks.has(`input-${index}`) 
                                                                                        ? item.data 
                                                                                        : `${item.data.slice(0, 60)}...`}
                                                                                </code>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                {!expandedWitnessStacks.has(`input-${index}`) &&
                                                                 script.script_analysis.witness_analysis.witness_items && 
                                                                 script.script_analysis.witness_analysis.witness_items.length > 3 && (
                                                                    <div className="text-xs text-muted-foreground pt-1 border-t border-border">
                                                                        ... and {script.script_analysis.witness_analysis.witness_items.length - 3} more items
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Output Scripts */}
                                                {analysisData.output_scripts && analysisData.output_scripts.length > 0 && (
                                                    <div>
                                                        <h5 className="text-sm font-medium text-foreground mb-2">Output Scripts ({analysisData.output_scripts.length})</h5>
                                                        <div className="space-y-3">
                                                            {analysisData.output_scripts.map((script, index) => (
                                                                <div key={index} className="bg-background rounded border p-3">
                                                                    <div className="flex items-center gap-2 mb-2">
                                                                        <span className="text-xs text-muted-foreground">Output {index}:</span>
                                                                        <span className="text-xs px-2 py-1 bg-muted rounded">
                                                                            {script.script_type}
                                                                        </span>
                                                                    </div>
                                                                    
                                                                    <div>
                                                                        <div className="text-xs text-muted-foreground mb-1">Script Hex:</div>
                                                                        <code className="text-xs bg-muted p-2 rounded block overflow-x-auto font-mono">
                                                                            {script.script_hex}
                                                                        </code>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Analysis Meta */}
                                {analysisData.layer_association && (
                                    <div className="border-t border-border pt-3 mt-3">
                                        <div className="text-xs text-muted-foreground">
                                            Analysis Type: {analysisData.layer_association.analysis_type.charAt(0).toUpperCase() + 
                                                analysisData.layer_association.analysis_type.slice(1)} • 
                                            {analysisData.layer_association.wrapper_name ? 'Wrapper' : 'Layer'}: {analysisData.layer_association.wrapper_name || analysisData.layer_association.layer_name}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
