#!/usr/bin/env python3
"""
Advanced Taproot Transaction Analyzer

This specialized tool provides deep analysis of Taproot transactions including:
- Script-path vs key-path spend detection
- Control block parsing (Merkle path reconstruction)
- Script tree reconstruction
- Tapscript opcode analysis
- Spending condition validation
"""

# =====================================================
# 🎯 CONFIGURATION - CHANGE TRANSACTION ID HERE
# =====================================================
TRANSACTION_ID = "5d40ef9c1a7a9b26c043333ed08423d0a3fc72a7e1f77c0011aac3041b2f52d0"
NETWORK = "mainnet"  # "mainnet" or "testnet"
WRAPPER_NAME = "Babylon Staked BTC"  # Wrapper/protocol name for file organization

# Other example transactions you can analyze:
# TRANSACTION_ID = "YOUR_TRANSACTION_HASH_HERE"
# WRAPPER_NAME = "Your Protocol Name"
# TRANSACTION_ID = "abc123def..." # Different transaction

import json
import requests
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from binascii import hexlify, unhexlify

@dataclass
class TaprootControlBlock:
    """Parsed Taproot control block"""
    version: int
    parity: int
    internal_key: str
    merkle_path: List[str]
    script_merkle_root: str
    
@dataclass 
class TapscriptAnalysis:
    """Analysis of a Tapscript"""
    script_hex: str
    opcodes: List[Dict]
    script_type: str
    spending_conditions: List[str]
    required_signatures: int
    timelock_conditions: List[str]

@dataclass
class TaprootSpendAnalysis:
    """Complete Taproot spend analysis"""
    spend_type: str  # "key_path" or "script_path"
    witness_stack: List[Dict]
    control_block: Optional[TaprootControlBlock]
    executed_script: Optional[TapscriptAnalysis]
    signature_analysis: Dict
    script_tree_info: Dict

class TaprootTransactionAnalyzer:
    """Advanced Taproot transaction analyzer"""
    
    def __init__(self, network: str = NETWORK):
        self.network = network
        self.api_base = "https://blockstream.info/api" if network == "mainnet" else "https://blockstream.info/testnet/api"
    
    def analyze_transaction(self, txid: str) -> Dict:
        """Analyze a Taproot transaction"""
        print(f"🔍 Analyzing Taproot transaction: {txid}")
        
        # Fetch transaction data
        tx_data = self._fetch_transaction(txid)
        if not tx_data:
            return {"error": "Failed to fetch transaction"}
        
        analysis_results = {
            "transaction_metadata": {
                "txid": txid,
                "network": self.network,
                "analysis_date": self._get_current_timestamp(),
                "analyzer_type": "taproot_transaction",
                "api_provider": "blockstream"
            },
            "taproot_inputs": [],
            "taproot_outputs": [],
            "script_tree_analysis": {},
            "signature_analysis": {},
            "layer_association": {
                "wrapper_name": WRAPPER_NAME.lower().replace(" ", "_"),
                "analysis_type": "custody", 
                "integration_target": "btc_custody_section"
            },
            "metadata": {
                "analyzer_type": "taproot_transaction",
                "network": self.network,
                "analysis_date": self._get_current_timestamp(),
                "api_provider": "blockstream"
            }
        }
        
        # Analyze inputs for Taproot spends
        for i, inp in enumerate(tx_data.get("vin", [])):
            if self._is_taproot_input(inp):
                print(f"📥 Analyzing Taproot input {i}")
                taproot_analysis = self._analyze_taproot_input(inp, i)
                analysis_results["taproot_inputs"].append(taproot_analysis)
        
        # Analyze outputs for Taproot scripts
        for i, out in enumerate(tx_data.get("vout", [])):
            if self._is_taproot_output(out):
                print(f"📤 Analyzing Taproot output {i}")
                taproot_analysis = self._analyze_taproot_output(out, i)
                analysis_results["taproot_outputs"].append(taproot_analysis)
        
        return analysis_results
    
    def _analyze_taproot_input(self, inp: Dict, index: int) -> TaprootSpendAnalysis:
        """Analyze a Taproot input spend"""
        witness = inp.get("witness", [])
        
        if len(witness) == 1:
            # Key-path spend (single signature)
            return self._analyze_key_path_spend(witness, index)
        else:
            # Script-path spend (multiple witness items)
            return self._analyze_script_path_spend(witness, index)
    
    def _analyze_script_path_spend(self, witness: List[str], index: int) -> TaprootSpendAnalysis:
        """Analyze a Taproot script-path spend"""
        print(f"   🌳 Script-path spend detected ({len(witness)} witness items)")
        
        witness_analysis = []
        for i, item in enumerate(witness):
            item_analysis = self._classify_taproot_witness_item(item, i, len(witness))
            witness_analysis.append(item_analysis)
            print(f"      Item {i}: {item_analysis['type']} ({item_analysis['size']} bytes)")
        
        # Parse control block (last item)
        control_block = None
        executed_script = None
        
        if witness and self._is_control_block(witness[-1]):
            control_block = self._parse_control_block(witness[-1])
            print(f"   🎛️  Control block parsed: {control_block.merkle_path} merkle nodes")
        
        # Parse executed script (second-to-last item)
        if len(witness) >= 2:
            script_hex = witness[-2]
            executed_script = self._analyze_tapscript(script_hex)
            print(f"   📜 Script analysis: {executed_script.script_type}")
            print(f"      Required signatures: {executed_script.required_signatures}")
        
        return TaprootSpendAnalysis(
            spend_type="script_path",
            witness_stack=witness_analysis,
            control_block=control_block,
            executed_script=executed_script,
            signature_analysis=self._analyze_taproot_signatures(witness),
            script_tree_info=self._reconstruct_script_tree_info(control_block)
        )
    
    def _classify_taproot_witness_item(self, item_hex: str, position: int, total_items: int) -> Dict:
        """Advanced classification of Taproot witness items"""
        size = len(item_hex) // 2
        
        # Empty items
        if not item_hex:
            return {"type": "empty", "size": 0, "data": "", "description": "Empty stack item"}
        
        # Control block (last item in script-path spends)
        if position == total_items - 1 and self._is_control_block(item_hex):
            return {
                "type": "control_block", 
                "size": size, 
                "data": item_hex,
                "description": f"Taproot control block (version: {int(item_hex[0:2], 16) & 0xfe})"
            }
        
        # Script (second-to-last item in script-path spends)  
        if position == total_items - 2 and size > 10:
            return {
                "type": "tapscript",
                "size": size,
                "data": item_hex,
                "description": "Tapscript being executed"
            }
        
        # Schnorr signatures (64 bytes)
        if size == 64:
            return {
                "type": "schnorr_signature",
                "size": size,
                "data": item_hex,
                "description": "Schnorr signature (64 bytes)"
            }
        
        # Schnorr signatures with sighash flag (65 bytes)
        if size == 65:
            sighash = int(item_hex[-2:], 16)
            return {
                "type": "schnorr_signature_with_flag",
                "size": size,
                "data": item_hex,
                "description": f"Schnorr signature with sighash flag 0x{sighash:02x}"
            }
        
        # Public keys (32 bytes - x-only in Taproot)
        if size == 32:
            return {
                "type": "x_only_pubkey",
                "size": size,
                "data": item_hex,
                "description": "X-only public key (32 bytes)"
            }
        
        # Script parameters/data
        return {
            "type": "script_parameter",
            "size": size,
            "data": item_hex,
            "description": f"Script parameter ({size} bytes)"
        }
    
    def _parse_control_block(self, control_block_hex: str) -> TaprootControlBlock:
        """Parse Taproot control block"""
        cb_bytes = unhexlify(control_block_hex)
        
        # First byte contains version and parity
        version_byte = cb_bytes[0]
        version = version_byte & 0xfe
        parity = version_byte & 0x01
        
        # Internal key (32 bytes)
        internal_key = hexlify(cb_bytes[1:33]).decode()
        
        # Merkle path (remaining 32-byte chunks)
        merkle_path = []
        for i in range(33, len(cb_bytes), 32):
            if i + 32 <= len(cb_bytes):
                node = hexlify(cb_bytes[i:i+32]).decode()
                merkle_path.append(node)
        
        return TaprootControlBlock(
            version=version,
            parity=parity,
            internal_key=internal_key,
            merkle_path=merkle_path,
            script_merkle_root=""  # Would compute this
        )
    
    def _analyze_tapscript(self, script_hex: str) -> TapscriptAnalysis:
        """Analyze a Tapscript"""
        opcodes = self._parse_script_opcodes(script_hex)
        
        # Detect script patterns
        script_type = self._classify_tapscript_type(opcodes)
        spending_conditions = self._extract_spending_conditions(opcodes)
        required_sigs = self._count_required_signatures(opcodes)
        timelock_conditions = self._extract_timelock_conditions(opcodes)
        
        return TapscriptAnalysis(
            script_hex=script_hex,
            opcodes=opcodes,
            script_type=script_type,
            spending_conditions=spending_conditions,
            required_signatures=required_sigs,
            timelock_conditions=timelock_conditions
        )
    
    def _is_control_block(self, hex_data: str) -> bool:
        """Check if hex data is a Taproot control block"""
        if not hex_data or len(hex_data) < 66:  # Minimum: 1 byte version + 32 byte key
            return False
        
        # Control blocks start with 0xc0-0xcf
        first_byte = int(hex_data[0:2], 16)
        return 0xc0 <= first_byte <= 0xcf
    
    def _fetch_transaction(self, txid: str) -> Optional[Dict]:
        """Fetch transaction data from API"""
        try:
            response = requests.get(f"{self.api_base}/tx/{txid}")
            response.raise_for_status()
            return response.json()
        except Exception as e:
            print(f"❌ Error fetching transaction: {e}")
            return None
    
    def _is_taproot_input(self, inp: Dict) -> bool:
        """Check if input is spending from Taproot"""
        return inp.get("witness", []) and inp.get("scriptsig", "") == ""
    
    def _is_taproot_output(self, out: Dict) -> bool:
        """Check if output is Taproot"""
        script = out.get("scriptpubkey", "")
        return script.startswith("5120")  # OP_1 + 32 bytes
    
    def _analyze_key_path_spend(self, witness: List[str], index: int) -> TaprootSpendAnalysis:
        """Analyze key-path spend (single signature)"""
        return TaprootSpendAnalysis(
            spend_type="key_path",
            witness_stack=[{
                "type": "schnorr_signature",
                "size": len(witness[0]) // 2,
                "data": witness[0],
                "description": "Key-path Schnorr signature"
            }],
            control_block=None,
            executed_script=None,
            signature_analysis={"type": "single_key", "signatures": 1},
            script_tree_info={}
        )
    
    def _analyze_taproot_output(self, out: Dict, index: int) -> Dict:
        """Analyze Taproot output"""
        return {
            "index": index,
            "value": out.get("value", 0),
            "script": out.get("scriptpubkey", ""),
            "address": out.get("scriptpubkey_address", ""),
            "analysis": "Taproot output - can be spent via key-path or script-path"
        }
    
    def _parse_script_opcodes(self, script_hex: str) -> List[Dict]:
        """Parse script into opcodes"""
        opcodes = []
        script_bytes = unhexlify(script_hex)
        i = 0
        
        while i < len(script_bytes):
            opcode = script_bytes[i]
            
            if opcode <= 75:  # Data push
                data_len = opcode
                if i + 1 + data_len <= len(script_bytes):
                    data = hexlify(script_bytes[i+1:i+1+data_len]).decode()
                    opcodes.append({
                        "opcode": opcode,
                        "name": f"PUSH_{data_len}",
                        "data": data
                    })
                    i += 1 + data_len
                else:
                    break
            else:
                # Standard opcodes  
                opcode_names = {
                    # Numbers
                    81: "OP_1", 82: "OP_2", 83: "OP_3", 84: "OP_4", 85: "OP_5",
                    86: "OP_6", 87: "OP_7", 88: "OP_8", 89: "OP_9", 90: "OP_10",
                    91: "OP_11", 92: "OP_12", 93: "OP_13", 94: "OP_14", 95: "OP_15", 96: "OP_16",
                    # Stack operations
                    118: "OP_DUP", 119: "OP_NIP", 120: "OP_OVER", 121: "OP_PICK", 122: "OP_ROLL",
                    123: "OP_ROT", 124: "OP_SWAP", 125: "OP_TUCK", 135: "OP_EQUAL", 136: "OP_EQUALVERIFY",
                    # Arithmetic
                    147: "OP_ADD", 148: "OP_SUB", 149: "OP_MUL", 154: "OP_NUMEQUAL", 155: "OP_NUMEQUALVERIFY",
                    # Crypto
                    172: "OP_CHECKSIG", 173: "OP_CHECKSIGVERIFY", 174: "OP_CHECKMULTISIG",
                    186: "OP_CHECKSIGADD", 177: "OP_CHECKLOCKTIMEVERIFY", 178: "OP_CHECKSEQUENCEVERIFY",
                    # Flow control
                    99: "OP_IF", 100: "OP_NOTIF", 103: "OP_ELSE", 104: "OP_ENDIF",
                    105: "OP_VERIFY", 106: "OP_RETURN"
                }
                
                opcodes.append({
                    "opcode": opcode,
                    "name": opcode_names.get(opcode, f"OP_{opcode}"),
                    "data": None
                })
                i += 1
        
        return opcodes
    
    def _classify_tapscript_type(self, opcodes: List[Dict]) -> str:
        """Classify the type of Tapscript"""
        opcode_names = [op["name"] for op in opcodes]
        
        if "OP_CHECKSIGADD" in opcode_names:
            return "Threshold Multisig (OP_CHECKSIGADD)"
        elif "OP_CHECKSIG" in opcode_names and opcode_names.count("OP_CHECKSIG") > 1:
            return "Multi-signature Script"
        elif "OP_CHECKLOCKTIMEVERIFY" in opcode_names:
            return "Time-locked Script"
        elif "OP_CHECKSEQUENCEVERIFY" in opcode_names:
            return "Sequence-locked Script"
        else:
            return "Custom Script"
    
    def _extract_spending_conditions(self, opcodes: List[Dict]) -> List[str]:
        """Extract spending conditions from opcodes"""
        conditions = []
        opcode_names = [op["name"] for op in opcodes]
        
        if "OP_CHECKSIGADD" in opcode_names:
            conditions.append("Threshold signature requirement")
        if "OP_CHECKLOCKTIMEVERIFY" in opcode_names:
            conditions.append("Time lock requirement")
        if "OP_CHECKSEQUENCEVERIFY" in opcode_names:
            conditions.append("Sequence lock requirement")
        
        return conditions or ["Standard signature requirement"]
    
    def _count_required_signatures(self, opcodes: List[Dict]) -> int:
        """Count required signatures from script"""
        opcode_names = [op["name"] for op in opcodes]
        
        if "OP_CHECKSIGADD" in opcode_names:
            # Look for threshold number (usually pushed before the checks)
            for i, op in enumerate(opcodes):
                if op["name"].startswith("OP_") and op["name"][3:].isdigit():
                    return int(op["name"][3:])
        
        return opcode_names.count("OP_CHECKSIG") + opcode_names.count("OP_CHECKSIGADD")
    
    def _extract_timelock_conditions(self, opcodes: List[Dict]) -> List[str]:
        """Extract timelock conditions"""
        conditions = []
        for op in opcodes:
            if op["name"] == "OP_CHECKLOCKTIMEVERIFY":
                conditions.append("Absolute timelock (CLTV)")
            elif op["name"] == "OP_CHECKSEQUENCEVERIFY":
                conditions.append("Relative timelock (CSV)")
        return conditions
    
    def _analyze_taproot_signatures(self, witness: List[str]) -> Dict:
        """Analyze signature patterns in Taproot witness"""
        signatures = []
        for item in witness:
            size = len(item) // 2
            if size == 64:
                signatures.append({"type": "schnorr", "size": 64})
            elif size == 65:
                signatures.append({"type": "schnorr_with_flag", "size": 65})
        
        return {
            "total_signatures": len(signatures),
            "signature_types": [sig["type"] for sig in signatures],
            "analysis": f"Found {len(signatures)} Schnorr signatures in witness stack"
        }
    
    def _reconstruct_script_tree_info(self, control_block: Optional[TaprootControlBlock]) -> Dict:
        """Reconstruct script tree information"""
        if not control_block:
            return {}
        
        return {
            "merkle_depth": len(control_block.merkle_path),
            "total_scripts": 2 ** len(control_block.merkle_path),
            "script_path_length": len(control_block.merkle_path),
            "analysis": f"Script tree with {len(control_block.merkle_path)} levels"
        }
    
    def _get_current_timestamp(self) -> str:
        """Get current timestamp for analysis"""
        from datetime import datetime
        return datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC")
    
    def generate_report(self, analysis: Dict, output_file: str = None) -> str:
        """Generate comprehensive Taproot analysis report"""
        transaction_metadata = analysis.get('transaction_metadata', {})
        layer_association = analysis.get('layer_association', {})
        
        report = f"""# Advanced Taproot Transaction Analysis

**Transaction ID:** {transaction_metadata.get('txid', 'Unknown')}
**Network:** {transaction_metadata.get('network', 'Unknown')}
**Wrapper/Protocol:** {layer_association.get('wrapper_name', 'Unknown').replace('_', ' ').title()}
**Analysis Date:** {transaction_metadata.get('analysis_date', 'Unknown')}
**Analysis Type:** Advanced Taproot Deep Dive
**Integration Target:** {layer_association.get('integration_target', 'Unknown')}

## 🌳 Taproot Script Tree Analysis

"""
        
        for i, inp_analysis in enumerate(analysis['taproot_inputs']):
            report += f"### Input {i}: {inp_analysis.spend_type.replace('_', ' ').title()} Spend\n\n"
            
            if inp_analysis.spend_type == "script_path":
                report += f"**Witness Stack Items:** {len(inp_analysis.witness_stack)}\n\n"
                
                for item in inp_analysis.witness_stack:
                    report += f"- **{item['type']}**: {item['description']}\n"
                
                if inp_analysis.control_block:
                    cb = inp_analysis.control_block
                    report += f"\n**Control Block Analysis:**\n"
                    report += f"- Version: {cb.version}\n"
                    report += f"- Parity: {cb.parity}\n"
                    report += f"- Internal Key: `{cb.internal_key}`\n"
                    report += f"- Merkle Path Length: {len(cb.merkle_path)} nodes\n"
                
                if inp_analysis.executed_script:
                    script = inp_analysis.executed_script
                    report += f"\n**Executed Script Analysis:**\n"
                    report += f"- Script Type: {script.script_type}\n"
                    report += f"- Required Signatures: {script.required_signatures}\n"
                    report += f"- Spending Conditions: {', '.join(script.spending_conditions)}\n"
                    
                    report += f"\n**Complete Tapscript:**\n"
                    report += f"```\n{script.script_hex}\n```\n"
                    
                    report += f"\n**Opcode Breakdown:**\n"
                    for i, opcode in enumerate(script.opcodes):
                        if opcode.get("data"):
                            report += f"{i+1:2d}. **{opcode['name']}** `{opcode['data']}`\n"
                        else:
                            report += f"{i+1:2d}. **{opcode['name']}**\n"
                    
                    # Add script execution flow
                    report += f"\n**Script Execution Flow:**\n"
                    report += self._generate_script_flow_description(script.opcodes)
        
        if output_file:
            with open(output_file, 'w') as f:
                f.write(report)
        
        return report
    
    def _generate_script_flow_description(self, opcodes: List[Dict]) -> str:
        """Generate human-readable description of script execution flow"""
        flow = ""
        opcode_names = [op["name"] for op in opcodes]
        
        # Identify key patterns
        if "OP_CHECKSIGADD" in opcode_names:
            checksigadd_count = opcode_names.count("OP_CHECKSIGADD")
            flow += f"1. **Multi-signature verification using OP_CHECKSIGADD**\n"
            flow += f"   - {checksigadd_count} signature checks using the new Taproot OP_CHECKSIGADD opcode\n"
            flow += f"   - Each OP_CHECKSIGADD pops a signature and pubkey, checks signature, and adds result to accumulator\n"
            
        if "OP_NUMEQUAL" in opcode_names:
            flow += f"2. **Threshold verification with OP_NUMEQUAL**\n"
            flow += f"   - Compares the signature count accumulator against the required threshold\n"
            
        # Look for threshold numbers
        threshold_opcodes = [op for op in opcodes if op["name"].startswith("OP_") and op["name"][3:].isdigit()]
        if threshold_opcodes:
            for op in threshold_opcodes:
                threshold = op["name"][3:]
                flow += f"3. **Threshold requirement: {threshold} signatures**\n"
                
        # Look for pushed data (likely pubkeys)
        push_ops = [op for op in opcodes if op["name"].startswith("PUSH_") and op.get("data")]
        if push_ops:
            flow += f"4. **Public keys and parameters:**\n"
            for i, op in enumerate(push_ops[:5]):  # Show first 5 to avoid spam
                data_len = len(op["data"]) // 2
                if data_len == 32:
                    flow += f"   - Pubkey {i+1}: `{op['data'][:16]}...` (32 bytes)\n"
                else:
                    flow += f"   - Data {i+1}: `{op['data'][:16]}...` ({data_len} bytes)\n"
            if len(push_ops) > 5:
                flow += f"   - ... and {len(push_ops) - 5} more data items\n"
        
        return flow

def main(txid: str = None):
    """Run advanced Taproot analysis"""
    
    # Use global config or override with parameter
    transaction_to_analyze = txid if txid else TRANSACTION_ID
    
    print(f"🔍 Starting Taproot Analysis for: {transaction_to_analyze}")
    print("="*60)
    
    analyzer = TaprootTransactionAnalyzer(NETWORK)
    analysis = analyzer.analyze_transaction(transaction_to_analyze)
    
    # Use the same directory structure as the bitcoin transaction analyzer
    import os
    wrapper_slug = WRAPPER_NAME.lower().replace(" ", "_").replace("-", "_")
    # Go up to researchers directory and into token-analyzer/analysis-reports
    analysis_reports_dir = os.path.join("..", "token-analyzer", "analysis-reports", wrapper_slug)
    os.makedirs(analysis_reports_dir, exist_ok=True)
    
    # Generate filenames matching bitcoin transaction analyzer format
    short_txid = transaction_to_analyze[:16]
    filename_prefix = f"taproot_transaction_{short_txid}"
    output_filename = os.path.join(analysis_reports_dir, f"{filename_prefix}.md")
    json_filename = os.path.join(analysis_reports_dir, f"{filename_prefix}.json")
    
    # Generate both markdown and JSON reports
    report = analyzer.generate_report(analysis, output_filename)
    
    # Save JSON data for programmatic access (serialize dataclasses properly)
    import json
    def serialize_dataclass(obj):
        """Custom serializer for dataclasses and other objects"""
        if hasattr(obj, '__dataclass_fields__'):  # It's a dataclass
            return {k: serialize_dataclass(v) for k, v in obj.__dict__.items()}
        elif hasattr(obj, '__dict__') and not isinstance(obj, type):  # Regular object with __dict__
            return {k: serialize_dataclass(v) for k, v in obj.__dict__.items()}
        elif isinstance(obj, (list, tuple)):
            return [serialize_dataclass(item) for item in obj]
        elif isinstance(obj, dict):
            return {k: serialize_dataclass(v) for k, v in obj.items()}
        elif isinstance(obj, (str, int, float, bool)) or obj is None:
            return obj
        else:
            return str(obj)
    
    # Convert dataclass objects to dictionaries
    serializable_analysis = serialize_dataclass(analysis)
    
    with open(json_filename, 'w') as f:
        json.dump(serializable_analysis, f, indent=2)
    
    print("\n" + "="*60)
    print("📊 ADVANCED TAPROOT ANALYSIS COMPLETE")
    print("="*60)
    print(f"📁 Wrapper: {WRAPPER_NAME}")
    print(f"📄 Markdown report: {output_filename}")
    print(f"📄 JSON data: {json_filename}")
    print("\n" + report[:500] + "..." if len(report) > 500 else report)

if __name__ == "__main__":
    main()
