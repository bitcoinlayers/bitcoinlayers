#!/usr/bin/env python3
"""
Bitcoin Script Analyzer

This script analyzes Bitcoin Scripts to determine:
- Script type (P2PKH, P2SH, P2WPKH, P2WSH, P2TR, etc.)
- Opcode breakdown and interpretation
- Control flow analysis (OP_IF/OP_ELSE branches)
- Script validity and security analysis
- Stack simulation and execution path analysis
"""

import json
import os
import hashlib
import binascii
from typing import Optional, Dict, Any, List, Tuple, Union
from dataclasses import dataclass
from enum import Enum
from dotenv import load_dotenv

# Import shared base classes and utilities
from analyzer_base import (
    BaseAnalyzer, AnalyzerType, OpcodeAnalyzer, ControlFlowAnalyzer,
    SecurityAnalyzer, ReportGenerator, SecurityIssue, create_common_security_rules
)

# Load environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

# Configuration - Select network and script to analyze
NETWORK = "mainnet"  # Change this: "mainnet", "testnet", "regtest"
SCRIPT_HEX = ""  # Raw script in hex format
TRANSACTION_ID = ""  # Optional: analyze script from specific transaction
OUTPUT_INDEX = 0  # For analyzing specific output script

# Network configurations (for future blockchain API integration)
NETWORK_CONFIGS = {
    "mainnet": {
        "rpc_url": os.getenv("BITCOIN_RPC_URL", ""),
        "api_base": "https://blockstream.info/api",
        "network_id": 0x00
    },
    "testnet": {
        "rpc_url": os.getenv("BITCOIN_TESTNET_RPC_URL", ""),
        "api_base": "https://blockstream.info/testnet/api", 
        "network_id": 0x6f
    },
}

class ScriptType(Enum):
    """Standard Bitcoin script types"""
    P2PKH = "Pay to Public Key Hash"
    P2SH = "Pay to Script Hash"
    P2PK = "Pay to Public Key"
    P2WPKH = "Pay to Witness Public Key Hash"
    P2WSH = "Pay to Witness Script Hash"
    P2TR = "Pay to Taproot"
    MULTISIG = "Multisig"
    OP_RETURN = "Data (OP_RETURN)"
    UNKNOWN = "Unknown/Non-standard"

class OpCode(Enum):
    """Bitcoin opcodes - including most commonly used ones"""
    # Constants
    OP_0 = 0x00
    OP_PUSHDATA1 = 0x4c
    OP_PUSHDATA2 = 0x4d
    OP_PUSHDATA4 = 0x4e
    OP_1NEGATE = 0x4f
    OP_1 = 0x51
    OP_2 = 0x52
    OP_3 = 0x53
    OP_16 = 0x60
    
    # Flow control
    OP_NOP = 0x61
    OP_IF = 0x63
    OP_NOTIF = 0x64
    OP_ELSE = 0x67
    OP_ENDIF = 0x68
    OP_VERIFY = 0x69
    OP_RETURN = 0x6a
    
    # Stack operations
    OP_DUP = 0x76
    OP_DROP = 0x75
    OP_SWAP = 0x7c
    OP_ROT = 0x7b
    
    # Arithmetic
    OP_1ADD = 0x8b
    OP_1SUB = 0x8c
    OP_NEGATE = 0x8f
    OP_ADD = 0x93
    OP_SUB = 0x94
    OP_EQUAL = 0x87
    OP_EQUALVERIFY = 0x88
    
    # Crypto
    OP_RIPEMD160 = 0xa6
    OP_SHA1 = 0xa7
    OP_SHA256 = 0xa8
    OP_HASH160 = 0xa9
    OP_HASH256 = 0xaa
    OP_CHECKSIG = 0xac
    OP_CHECKSIGVERIFY = 0xad
    OP_CHECKMULTISIG = 0xae
    OP_CHECKMULTISIGVERIFY = 0xaf
    
    # Locktime
    OP_CHECKLOCKTIMEVERIFY = 0xb1
    OP_CHECKSEQUENCEVERIFY = 0xb2

@dataclass
class ParsedOpcode:
    """Represents a parsed opcode with its data"""
    opcode: int
    name: str
    data: Optional[bytes] = None
    data_length: Optional[int] = None
    description: str = ""

@dataclass
class ControlFlowNode:
    """Represents a node in the control flow graph"""
    opcodes: List[ParsedOpcode]
    node_type: str  # "linear", "if", "else", "endif"
    children: List['ControlFlowNode'] = None
    condition: Optional[str] = None

@dataclass
class ScriptAnalysis:
    """Complete analysis results for a Bitcoin script"""
    raw_script: str
    script_type: ScriptType
    opcodes: List[ParsedOpcode]
    control_flow: ControlFlowNode
    stack_analysis: Dict[str, Any]
    security_issues: List[str]
    template_match: Dict[str, Any]
    metadata: Dict[str, Any]

class BitcoinScriptAnalyzer(BaseAnalyzer):
    """Main analyzer class for Bitcoin Scripts"""
    
    def __init__(self, network: str = "mainnet"):
        super().__init__(network, AnalyzerType.BITCOIN_SCRIPT)
        self.network_config = NETWORK_CONFIGS.get(network, NETWORK_CONFIGS["mainnet"])
        
        # Initialize shared analyzers
        self.opcode_analyzer = OpcodeAnalyzer()
        self.control_flow_analyzer = ControlFlowAnalyzer()
        self.security_analyzer = SecurityAnalyzer()
        
        # Initialize Bitcoin-specific opcode analysis
        self._init_bitcoin_opcodes()
        self._init_security_rules()
        
        # Initialize opcode lookup table
        self.opcode_names = {op.value: op.name for op in OpCode}
        self._init_opcode_descriptions()
    
    def _init_bitcoin_opcodes(self):
        """Initialize Bitcoin-specific opcodes in the shared opcode analyzer"""
        bitcoin_opcodes = [
            (OpCode.OP_0.value, "OP_0", "Push empty byte array onto stack"),
            (OpCode.OP_1.value, "OP_1", "Push number 1 onto stack"),
            (OpCode.OP_DUP.value, "OP_DUP", "Duplicate top stack item"),
            (OpCode.OP_HASH160.value, "OP_HASH160", "Hash top stack item with SHA256 then RIPEMD160"),
            (OpCode.OP_EQUALVERIFY.value, "OP_EQUALVERIFY", "Check equality and verify (fail if false)"),
            (OpCode.OP_CHECKSIG.value, "OP_CHECKSIG", "Check signature against public key"),
            (OpCode.OP_IF.value, "OP_IF", "Execute next statements if top of stack is true"),
            (OpCode.OP_ELSE.value, "OP_ELSE", "Execute if previous OP_IF was false"),
            (OpCode.OP_ENDIF.value, "OP_ENDIF", "End of conditional block"),
            (OpCode.OP_RETURN.value, "OP_RETURN", "Mark output as unspendable (data storage)"),
            (OpCode.OP_CHECKMULTISIG.value, "OP_CHECKMULTISIG", "Check multiple signatures"),
        ]
        
        for opcode_value, name, description in bitcoin_opcodes:
            self.opcode_analyzer.register_opcode(opcode_value, name, description)
    
    def _init_security_rules(self):
        """Initialize Bitcoin-specific security rules"""
        # Add common security rules
        for rule in create_common_security_rules():
            self.security_analyzer.add_security_rule(
                rule["id"],
                rule["category"],
                rule["severity"],
                rule["description"],
                rule["checker"]
            )
        
        # Add Bitcoin-specific security rules
        self.security_analyzer.add_security_rule(
            "disabled_opcodes",
            "validation",
            "high",
            "Check for disabled Bitcoin opcodes",
            self._check_disabled_opcodes
        )
        
        self.security_analyzer.add_security_rule(
            "script_size",
            "resource",
            "medium", 
            "Check script size limits",
            self._check_script_size
        )
    
    def _check_disabled_opcodes(self, analysis_data):
        """Check for disabled Bitcoin opcodes"""
        disabled_opcodes = [0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74]
        opcodes = analysis_data.get("opcodes", [])
        
        issues = []
        for i, opcode in enumerate(opcodes):
            if opcode.get("opcode", 0) in disabled_opcodes:
                issues.append({
                    "description": f"Uses disabled opcode: {opcode.get('name', 'UNKNOWN')}",
                    "location": f"Opcode {i+1}",
                    "recommendation": "Remove disabled opcode usage"
                })
        
        return issues if issues else None
    
    def _check_script_size(self, analysis_data):
        """Check script size limits"""
        script_length = analysis_data.get("metadata", {}).get("script_length", 0)
        if script_length > 10000:  # 10KB limit
            return {
                "description": f"Script too large: {script_length} bytes (limit: 10,000)",
                "recommendation": "Consider optimizing script size"
            }
        return None

    def _init_opcode_descriptions(self):
        """Initialize human-readable descriptions for opcodes"""
        self.opcode_descriptions = {
            OpCode.OP_0.value: "Push empty byte array onto stack",
            OpCode.OP_1.value: "Push number 1 onto stack",
            OpCode.OP_DUP.value: "Duplicate top stack item",
            OpCode.OP_HASH160.value: "Hash top stack item with SHA256 then RIPEMD160",
            OpCode.OP_EQUALVERIFY.value: "Check equality and verify (fail if false)",
            OpCode.OP_CHECKSIG.value: "Check signature against public key",
            OpCode.OP_IF.value: "Execute next statements if top of stack is true",
            OpCode.OP_ELSE.value: "Execute if previous OP_IF was false",
            OpCode.OP_ENDIF.value: "End of conditional block",
            OpCode.OP_RETURN.value: "Mark output as unspendable (data storage)",
            OpCode.OP_CHECKMULTISIG.value: "Check multiple signatures",
            # Add more descriptions as needed
        }
    
    def parse_script(self, script_hex: str) -> List[ParsedOpcode]:
        """
        Parse raw script hex into individual opcodes and data
        """
        if not script_hex:
            return []
        
        try:
            script_bytes = bytes.fromhex(script_hex)
        except ValueError:
            raise ValueError("Invalid hex string provided")
        
        opcodes = []
        i = 0
        
        while i < len(script_bytes):
            opcode_byte = script_bytes[i]
            
            # Handle data push opcodes (1-75 bytes)
            if 1 <= opcode_byte <= 75:
                data_length = opcode_byte
                if i + 1 + data_length > len(script_bytes):
                    # Malformed script
                    opcodes.append(ParsedOpcode(
                        opcode=opcode_byte,
                        name=f"PUSH_{data_length}",
                        description=f"⚠️ Malformed: Not enough bytes for PUSH_{data_length}"
                    ))
                    break
                
                data = script_bytes[i + 1:i + 1 + data_length]
                opcodes.append(ParsedOpcode(
                    opcode=opcode_byte,
                    name=f"PUSH_{data_length}",
                    data=data,
                    data_length=data_length,
                    description=f"Push {data_length} bytes onto stack: {data.hex()}"
                ))
                i += 1 + data_length
            
            # Handle OP_PUSHDATA1 (76)
            elif opcode_byte == OpCode.OP_PUSHDATA1.value:
                if i + 1 >= len(script_bytes):
                    opcodes.append(ParsedOpcode(
                        opcode=opcode_byte,
                        name="OP_PUSHDATA1",
                        description="⚠️ Malformed: Missing length byte"
                    ))
                    break
                
                data_length = script_bytes[i + 1]
                if i + 2 + data_length > len(script_bytes):
                    opcodes.append(ParsedOpcode(
                        opcode=opcode_byte,
                        name="OP_PUSHDATA1",
                        data_length=data_length,
                        description=f"⚠️ Malformed: Not enough bytes for PUSHDATA1({data_length})"
                    ))
                    break
                
                data = script_bytes[i + 2:i + 2 + data_length]
                opcodes.append(ParsedOpcode(
                    opcode=opcode_byte,
                    name="OP_PUSHDATA1",
                    data=data,
                    data_length=data_length,
                    description=f"Push {data_length} bytes: {data.hex()}"
                ))
                i += 2 + data_length
            
            # Handle regular opcodes
            else:
                opcode_name = self.opcode_names.get(opcode_byte, f"OP_UNKNOWN_{opcode_byte:02x}")
                description = self.opcode_descriptions.get(opcode_byte, f"Unknown opcode: 0x{opcode_byte:02x}")
                
                opcodes.append(ParsedOpcode(
                    opcode=opcode_byte,
                    name=opcode_name,
                    description=description
                ))
                i += 1
        
        return opcodes
    
    def identify_script_type(self, opcodes: List[ParsedOpcode]) -> ScriptType:
        """
        Identify the type of script based on its structure
        """
        if not opcodes:
            return ScriptType.UNKNOWN
        
        # Convert to simple list for pattern matching
        op_pattern = [op.opcode for op in opcodes]
        
        # P2PKH: OP_DUP OP_HASH160 <20-byte-hash> OP_EQUALVERIFY OP_CHECKSIG
        if (len(op_pattern) == 5 and
            op_pattern[0] == OpCode.OP_DUP.value and
            op_pattern[1] == OpCode.OP_HASH160.value and
            op_pattern[2] == 20 and  # 20-byte push
            op_pattern[3] == OpCode.OP_EQUALVERIFY.value and
            op_pattern[4] == OpCode.OP_CHECKSIG.value):
            return ScriptType.P2PKH
        
        # P2SH: OP_HASH160 <20-byte-hash> OP_EQUAL
        if (len(op_pattern) == 3 and
            op_pattern[0] == OpCode.OP_HASH160.value and
            op_pattern[1] == 20 and  # 20-byte push
            op_pattern[2] == OpCode.OP_EQUAL.value):
            return ScriptType.P2SH
        
        # P2PK: <33 or 65 byte pubkey> OP_CHECKSIG
        if (len(op_pattern) == 2 and
            op_pattern[0] in [33, 65] and  # compressed or uncompressed pubkey
            op_pattern[1] == OpCode.OP_CHECKSIG.value):
            return ScriptType.P2PK
        
        # P2WPKH: OP_0 <20-byte-hash>
        if (len(op_pattern) == 2 and
            op_pattern[0] == OpCode.OP_0.value and
            op_pattern[1] == 20):
            return ScriptType.P2WPKH
        
        # P2WSH: OP_0 <32-byte-hash>
        if (len(op_pattern) == 2 and
            op_pattern[0] == OpCode.OP_0.value and
            op_pattern[1] == 32):
            return ScriptType.P2WSH
        
        # P2TR: OP_1 <32-byte-x-only-pubkey>
        if (len(op_pattern) == 2 and
            op_pattern[0] == OpCode.OP_1.value and
            op_pattern[1] == 32):
            return ScriptType.P2TR
        
        # OP_RETURN scripts
        if len(op_pattern) >= 1 and op_pattern[0] == OpCode.OP_RETURN.value:
            return ScriptType.OP_RETURN
        
        # Basic multisig: OP_M <pubkey1> <pubkey2> ... <pubkeyN> OP_N OP_CHECKMULTISIG
        if (len(op_pattern) >= 4 and
            OpCode.OP_1.value <= op_pattern[0] <= OpCode.OP_16.value and  # OP_M
            op_pattern[-1] == OpCode.OP_CHECKMULTISIG.value and
            OpCode.OP_1.value <= op_pattern[-2] <= OpCode.OP_16.value):  # OP_N
            return ScriptType.MULTISIG
        
        return ScriptType.UNKNOWN
    
    def analyze_control_flow(self, opcodes: List[ParsedOpcode]) -> ControlFlowNode:
        """
        Analyze control flow structure of the script
        """
        root = ControlFlowNode(opcodes=[], node_type="linear", children=[])
        
        # Simple implementation - can be enhanced for complex nested structures
        current_node = root
        i = 0
        
        while i < len(opcodes):
            opcode = opcodes[i]
            
            if opcode.opcode == OpCode.OP_IF.value:
                # Start of conditional block
                if_node = ControlFlowNode(
                    opcodes=[opcode],
                    node_type="if",
                    children=[],
                    condition="IF"
                )
                current_node.children.append(if_node)
                current_node = if_node
            
            elif opcode.opcode == OpCode.OP_ELSE.value:
                # Else branch
                else_node = ControlFlowNode(
                    opcodes=[opcode],
                    node_type="else",
                    children=[],
                    condition="ELSE"
                )
                # Go back to parent and add else branch
                if current_node.node_type == "if":
                    parent = self._find_parent_node(root, current_node)
                    if parent:
                        parent.children.append(else_node)
                        current_node = else_node
            
            elif opcode.opcode == OpCode.OP_ENDIF.value:
                # End of conditional block
                endif_node = ControlFlowNode(
                    opcodes=[opcode],
                    node_type="endif",
                    children=[]
                )
                current_node.children.append(endif_node)
                # Go back to root level
                current_node = root
            
            else:
                # Regular opcode
                current_node.opcodes.append(opcode)
            
            i += 1
        
        return root
    
    def _find_parent_node(self, root: ControlFlowNode, target: ControlFlowNode) -> Optional[ControlFlowNode]:
        """Helper to find parent node in control flow tree"""
        # Simple implementation - would need enhancement for complex nested structures
        if target in root.children:
            return root
        
        for child in root.children or []:
            parent = self._find_parent_node(child, target)
            if parent:
                return parent
        
        return None
    
    def simulate_stack_execution(self, opcodes: List[ParsedOpcode]) -> Dict[str, Any]:
        """
        Simulate script execution and stack operations
        """
        stack = []
        execution_path = []
        warnings = []
        
        for i, opcode in enumerate(opcodes):
            step = {
                "step": i + 1,
                "opcode": opcode.name,
                "description": opcode.description,
                "stack_before": stack.copy()
            }
            
            try:
                # Simulate basic stack operations
                if 1 <= opcode.opcode <= 75 or opcode.opcode == OpCode.OP_PUSHDATA1.value:
                    # Push data onto stack
                    if opcode.data:
                        stack.append(opcode.data)
                
                elif opcode.opcode == OpCode.OP_0.value:
                    stack.append(b'')
                
                elif OpCode.OP_1.value <= opcode.opcode <= OpCode.OP_16.value:
                    # Push numbers 1-16
                    num = opcode.opcode - OpCode.OP_1.value + 1
                    stack.append(num.to_bytes(1, 'big'))
                
                elif opcode.opcode == OpCode.OP_DUP.value:
                    if stack:
                        stack.append(stack[-1])
                    else:
                        warnings.append(f"Step {i+1}: OP_DUP on empty stack")
                
                elif opcode.opcode == OpCode.OP_DROP.value:
                    if stack:
                        stack.pop()
                    else:
                        warnings.append(f"Step {i+1}: OP_DROP on empty stack")
                
                elif opcode.opcode == OpCode.OP_HASH160.value:
                    if stack:
                        data = stack.pop()
                        if isinstance(data, bytes):
                            # SHA256 then RIPEMD160
                            sha256_hash = hashlib.sha256(data).digest()
                            ripemd160_hash = hashlib.new('ripemd160', sha256_hash).digest()
                            stack.append(ripemd160_hash)
                        else:
                            warnings.append(f"Step {i+1}: OP_HASH160 on non-bytes data")
                    else:
                        warnings.append(f"Step {i+1}: OP_HASH160 on empty stack")
                
                # Add more opcode simulations as needed...
                
            except Exception as e:
                warnings.append(f"Step {i+1}: Execution error - {str(e)}")
            
            step["stack_after"] = stack.copy()
            execution_path.append(step)
        
        return {
            "final_stack": stack,
            "execution_path": execution_path,
            "warnings": warnings,
            "stack_depth": len(stack)
        }
    
    def check_security_issues(self, opcodes: List[ParsedOpcode], stack_analysis: Dict[str, Any]) -> List[str]:
        """
        Check for potential security issues in the script
        """
        issues = []
        
        # Check for disabled opcodes
        disabled_opcodes = [
            # Disabled opcodes that could be security risks
            0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74,  # OP_RESERVED variants
            0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86,  # String operations (disabled)
        ]
        
        for opcode in opcodes:
            if opcode.opcode in disabled_opcodes:
                issues.append(f"Uses disabled opcode: {opcode.name}")
        
        # Check script length
        total_size = sum(1 + (op.data_length or 0) for op in opcodes)
        if total_size > 10000:  # 10KB limit
            issues.append(f"Script too large: {total_size} bytes (limit: 10,000)")
        
        # Check for potential stack overflow
        max_stack_items = 1000
        for step in stack_analysis.get("execution_path", []):
            if len(step.get("stack_after", [])) > max_stack_items:
                issues.append("Potential stack overflow detected")
                break
        
        # Check for unbalanced conditionals
        if_count = sum(1 for op in opcodes if op.opcode == OpCode.OP_IF.value)
        endif_count = sum(1 for op in opcodes if op.opcode == OpCode.OP_ENDIF.value)
        if if_count != endif_count:
            issues.append(f"Unbalanced conditionals: {if_count} OP_IF, {endif_count} OP_ENDIF")
        
        return issues
    
    def analyze(self, target: str) -> Dict[str, Any]:
        """
        Main analysis method required by BaseAnalyzer
        """
        return self.analyze_script(target)
    
    def analyze_script(self, script_hex: str) -> Dict[str, Any]:
        """
        Perform complete analysis of a Bitcoin script
        """
        print(f"🔍 Bitcoin Script Analyzer")
        print("=" * 50)
        print(f"📜 Analyzing script: {script_hex[:50]}{'...' if len(script_hex) > 50 else ''}")
        
        # Parse opcodes
        print("1. Parsing opcodes...")
        opcodes = self.parse_script(script_hex)
        print(f"   ✅ Found {len(opcodes)} opcodes")
        
        # Identify script type
        print("2. Identifying script type...")
        script_type = self.identify_script_type(opcodes)
        print(f"   🏷️ Script type: {script_type.value}")
        
        # Analyze control flow using shared analyzer
        print("3. Analyzing control flow...")
        opcode_dicts = [{"opcode": op.opcode, "name": op.name, "data": op.data} for op in opcodes]
        control_flow_blocks = self.control_flow_analyzer.analyze_basic_blocks(opcode_dicts)
        print(f"   🌊 Found {len(control_flow_blocks)} control flow blocks")
        
        # Simulate stack execution using shared analyzer
        print("4. Simulating stack execution...")
        stack_analysis = self.opcode_analyzer.simulate_execution(opcode_dicts)
        print(f"   📚 Final stack depth: {len(stack_analysis['final_stack'])}")
        if stack_analysis['warnings']:
            print(f"   ⚠️ {len(stack_analysis['warnings'])} warnings found")
        
        # Generate metadata
        metadata = self.generate_metadata(script_hex)
        metadata_dict = {
            "network": metadata.network,
            "script_length": len(script_hex) // 2,  # bytes
            "opcode_count": len(opcodes),
            "analysis_version": metadata.analysis_version,
            "analysis_date": metadata.analysis_date
        }
        
        # Prepare analysis data for security analysis
        analysis_data = {
            "opcodes": [{"opcode": op.opcode, "name": op.name, "data_length": op.data_length} for op in opcodes],
            "metadata": metadata_dict,
            "stack_analysis": stack_analysis
        }
        
        # Security analysis using shared analyzer
        print("5. Checking security issues...")
        security_issues = self.security_analyzer.analyze_security(analysis_data)
        if security_issues:
            print(f"   🚨 {len(security_issues)} security issues found")
        else:
            print("   ✅ No obvious security issues detected")
        
        # Template matching
        template_match = self._analyze_template_match(script_type, opcodes)
        
        return {
            "raw_script": script_hex,
            "script_type": script_type.value,
            "opcodes": [
                {
                    "opcode": op.opcode,
                    "name": op.name,
                    "data": op.data.hex() if op.data else None,
                    "data_length": op.data_length,
                    "description": op.description
                }
                for op in opcodes
            ],
            "control_flow": {
                "blocks": len(control_flow_blocks),
                "complexity": "linear" if len(control_flow_blocks) <= 1 else "complex"
            },
            "stack_analysis": stack_analysis,
            "security_issues": [
                {
                    "severity": issue.severity,
                    "category": issue.category,
                    "description": issue.description,
                    "recommendation": issue.recommendation,
                    "location": issue.location
                }
                for issue in security_issues
            ],
            "template_match": template_match,
            "metadata": metadata_dict
        }
    
    def _analyze_template_match(self, script_type: ScriptType, opcodes: List[ParsedOpcode]) -> Dict[str, Any]:
        """Analyze how well the script matches standard templates"""
        template_info = {
            "type": script_type.value,
            "is_standard": script_type != ScriptType.UNKNOWN,
            "confidence": 1.0 if script_type != ScriptType.UNKNOWN else 0.0
        }
        
        # Add specific template analysis based on type
        if script_type == ScriptType.P2PKH:
            template_info.update({
                "address_type": "Legacy (1...)",
                "security_level": "Standard",
                "description": "Standard Pay-to-Public-Key-Hash script"
            })
        elif script_type == ScriptType.P2SH:
            template_info.update({
                "address_type": "Script (3...)",
                "security_level": "Enhanced",
                "description": "Pay-to-Script-Hash allowing complex redemption conditions"
            })
        elif script_type == ScriptType.P2WPKH:
            template_info.update({
                "address_type": "Bech32 (bc1q...)",
                "security_level": "Modern",
                "description": "Segregated Witness Pay-to-Public-Key-Hash"
            })
        elif script_type == ScriptType.P2WSH:
            template_info.update({
                "address_type": "Bech32 (bc1q...)",
                "security_level": "Modern",
                "description": "Segregated Witness Pay-to-Script-Hash"
            })
        elif script_type == ScriptType.P2TR:
            template_info.update({
                "address_type": "Bech32m (bc1p...)",
                "security_level": "Latest",
                "description": "Taproot script enabling advanced smart contracts"
            })
        
        return template_info
    
    def generate_markdown_report(self, analysis_data: Dict[str, Any]) -> str:
        """Generate markdown report using shared ReportGenerator"""
        
        # Generate title and summary
        lines = [
            "# Bitcoin Script Analysis Report",
            "",
            f"**Analysis Date:** {analysis_data['metadata']['analysis_date']}",
            f"**Network:** {analysis_data['metadata']['network'].title()}",
            "",
        ]
        
        # Add summary table
        summary_data = {
            "script_type": analysis_data["script_type"],
            "script_length_bytes": analysis_data["metadata"]["script_length"],
            "opcode_count": analysis_data["metadata"]["opcode_count"],
            "is_standard": analysis_data["template_match"]["is_standard"],
            "security_issues": len(analysis_data["security_issues"])
        }
        
        lines.append(ReportGenerator.generate_summary_table(summary_data, "📋 Script Summary"))
        
        # Add template analysis
        template_match = analysis_data["template_match"]
        lines.extend([
            "## 📋 Script Template Analysis",
            "",
            f"- **Type:** {template_match['type']}",
            f"- **Standard:** {'✅ Yes' if template_match['is_standard'] else '❌ No'}",
            f"- **Confidence:** {template_match['confidence']:.1%}",
            ""
        ])
        
        if 'address_type' in template_match:
            lines.extend([
                f"- **Address Type:** {template_match['address_type']}",
                f"- **Security Level:** {template_match['security_level']}",
                f"- **Description:** {template_match['description']}",
                ""
            ])
        
        # Add opcodes section using shared generator
        lines.append(ReportGenerator.generate_opcode_table(analysis_data["opcodes"]))
        
        # Add security section using shared generator
        security_issues = [
            SecurityIssue(
                severity=issue["severity"],
                category=issue["category"],
                description=issue["description"],
                recommendation=issue.get("recommendation"),
                location=issue.get("location")
            )
            for issue in analysis_data["security_issues"]
        ]
        
        lines.append(ReportGenerator.generate_security_section(security_issues))
        
        # Add stack analysis
        stack_analysis = analysis_data["stack_analysis"]
        lines.extend([
            "## 📚 Stack Execution Analysis",
            "",
            f"- **Final Stack Depth:** {len(stack_analysis['final_stack'])}",
            f"- **Execution Steps:** {len(stack_analysis['execution_log'])}",
            f"- **Warnings:** {len(stack_analysis['warnings'])}",
            ""
        ])
        
        if stack_analysis['warnings']:
            lines.extend([
                "**Execution Warnings:**",
                ""
            ])
            for warning in stack_analysis['warnings']:
                lines.append(f"- ⚠️ {warning}")
            lines.append("")
        
        # Add footer
        lines.extend([
            "---",
            "",
            "*Analysis generated by Bitcoin Layers Script Analyzer*",
            "*For questions or issues, please refer to the tool documentation*"
        ])
        
        return "\n".join(lines)
    
    def generate_report(self, analysis_data: Dict[str, Any], output_format: str = "both") -> Dict[str, str]:
        """Generate analysis report using base class functionality"""
        results = {}
        
        if output_format in ["json", "both"]:
            results["json"] = json.dumps(analysis_data, indent=2, default=self._json_serializer)
        
        if output_format in ["markdown", "both"]:
            results["markdown"] = self.generate_markdown_report(analysis_data)
        
        return results

def main():
    """Main function to run Bitcoin script analysis"""
    # Example usage
    analyzer = BitcoinScriptAnalyzer(NETWORK)
    
    # Example P2PKH script
    example_script = "76a914" + "89abcdefabbaabbaabbaabbaabbaabbaabbaabba" + "88ac"
    
    if SCRIPT_HEX:
        script_to_analyze = SCRIPT_HEX
    else:
        print("📝 No script provided. Using example P2PKH script:")
        print(f"   {example_script}")
        script_to_analyze = example_script
    
    try:
        # Validate input
        if not analyzer.validate_input(script_to_analyze, "hex_string"):
            print("❌ Invalid script hex format")
            return
        
        # Analyze the script using base class method
        analysis_data = analyzer.analyze(script_to_analyze)
        
        # Generate reports using base class method
        script_hash = analyzer.calculate_hash(script_to_analyze)[:16]
        filename_prefix = f"bitcoin_script_{script_hash}"
        
        saved_files = analyzer.save_analysis_report(
            analysis_data, 
            filename_prefix
        )
        
        print(f"📄 JSON report saved to: {saved_files['json_path']}")
        print(f"📝 Markdown report saved to: {saved_files['markdown_path']}")
        
        print("\n✅ Analysis complete!")
        
        # Display summary
        print(f"\n📊 Summary:")
        print(f"   Script Type: {analysis_data['script_type']}")
        print(f"   Opcodes: {analysis_data['metadata']['opcode_count']}")
        print(f"   Security Issues: {len(analysis_data['security_issues'])}")
        print(f"   Standard Template: {'✅' if analysis_data['template_match']['is_standard'] else '❌'}")
        
    except Exception as e:
        print(f"❌ Analysis failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()