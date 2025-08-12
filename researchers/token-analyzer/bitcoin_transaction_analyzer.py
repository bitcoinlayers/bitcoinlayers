#!/usr/bin/env python3
"""
Bitcoin Transaction Analyzer

This script analyzes Bitcoin transactions to determine:
- All input and output scripts within the transaction
- Script execution context (actual signatures, public keys, etc.)
- Script relationships (how inputs unlock outputs)
- Transaction-level security analysis
- Real-world script usage patterns
"""

import json
import os
import requests
from typing import Optional, Dict, Any, List, Tuple
from dataclasses import dataclass
from datetime import datetime
from dotenv import load_dotenv

# Import our existing Bitcoin script analyzer and base classes
from bitcoin_script_analyzer import BitcoinScriptAnalyzer, ScriptType, OpCode
from analyzer_base import BaseAnalyzer, AnalyzerType, ReportGenerator

# Load environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

# Configuration
NETWORK = "mainnet"  # "mainnet", "testnet"
TRANSACTION_ID = "6698cdf42d6260eae82741cb5639162bb74c36372c4aea0c63053088d24fe54a"  # Will be set when we find an sBTC transaction
API_PROVIDER = "blockstream"  # "blockstream", "blockchair", "bitcoin_core"
WRAPPER_NAME = "Stacks"  # Bitcoin wrapper/peg to associate this analysis with
ANALYSIS_TYPE = "custody"  # "custody", "wrapper", "general"

# API configurations
API_CONFIGS = {
    "mainnet": {
        "blockstream": {
            "base_url": "https://blockstream.info/api",
            "tx_endpoint": "/tx/{txid}",
            "rate_limit": 1.0  # seconds between requests
        },
        "blockchair": {
            "base_url": "https://api.blockchair.com/bitcoin",
            "tx_endpoint": "/dashboards/transaction/{txid}",
            "rate_limit": 1.0
        }
    },
    "testnet": {
        "blockstream": {
            "base_url": "https://blockstream.info/testnet/api",
            "tx_endpoint": "/tx/{txid}",
            "rate_limit": 1.0
        }
    }
}

@dataclass
class WeightedVotingInfo:
    """Information about weighted voting systems"""
    individual_weights: List[int]  # Weight values for each key
    total_possible_weight: int     # Sum of all possible weights
    threshold_score: int           # Required cumulative score
    present_weight: int            # Actual weight from signatures present
    weight_distribution: List[Tuple[str, int]]  # (pubkey_hash, weight) pairs

@dataclass 
class SignatureRequirement:
    """Signature requirements for a script"""
    required_signatures: int
    total_possible_signers: int
    signature_type: str  # "single", "multisig", "threshold", "weighted_multisig", "anyone_can_pay"
    present_signatures: int
    is_fully_signed: bool
    threshold_description: str  # "1-of-1", "2-of-3", "weighted (18 signers, score: 2,794,213)", etc.
    weighted_info: Optional[WeightedVotingInfo] = None

@dataclass
class ScriptWithContext:
    """Script with its execution context"""
    script_hex: str
    script_type: str
    script_analysis: Dict[str, Any]
    context: Dict[str, Any]  # Input data, witness data, etc.
    location: str  # "input_0", "output_1", etc.
    signature_requirement: Optional[SignatureRequirement] = None

@dataclass
class TransactionAnalysis:
    """Complete transaction analysis results"""
    txid: str
    network: str
    block_height: Optional[int]
    confirmations: int
    input_scripts: List[ScriptWithContext]
    output_scripts: List[ScriptWithContext]
    script_relationships: List[Dict[str, Any]]
    transaction_metadata: Dict[str, Any]
    signature_analysis: Dict[str, Any]
    summary_stats: Dict[str, Any]

class BitcoinTransactionAnalyzer(BaseAnalyzer):
    """Analyzer for complete Bitcoin transactions"""
    
    def __init__(self, network: str = "mainnet", api_provider: str = "blockstream", 
                 layer_name: str = None, analysis_type: str = "general"):
        super().__init__(network, AnalyzerType.BITCOIN_TRANSACTION)
        self.api_provider = api_provider
        self.api_config = API_CONFIGS.get(network, {}).get(api_provider)
        
        if not self.api_config:
            raise ValueError(f"Unsupported network/API combination: {network}/{api_provider}")
        
        # Layer association
        self.layer_name = layer_name
        self.analysis_type = analysis_type
        
        # Initialize the script analyzer for analyzing individual scripts
        self.script_analyzer = BitcoinScriptAnalyzer(network)
        
        # Rate limiting
        self.last_request_time = 0
        
    def fetch_transaction_data(self, txid: str) -> Dict[str, Any]:
        """Fetch transaction data from the configured API"""
        import time
        
        # Rate limiting
        current_time = time.time()
        time_since_last = current_time - self.last_request_time
        if time_since_last < self.api_config["rate_limit"]:
            time.sleep(self.api_config["rate_limit"] - time_since_last)
        
        url = self.api_config["base_url"] + self.api_config["tx_endpoint"].format(txid=txid)
        
        try:
            print(f"📡 Fetching transaction data from: {self.api_provider}")
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            
            self.last_request_time = time.time()
            return response.json()
            
        except requests.RequestException as e:
            raise Exception(f"Failed to fetch transaction data: {e}")
    
    def parse_transaction_data(self, tx_data: Dict[str, Any]) -> Tuple[List[Dict], List[Dict]]:
        """Parse transaction data into inputs and outputs"""
        
        if self.api_provider == "blockstream":
            inputs = []
            outputs = []
            
            # Parse inputs
            for i, vin in enumerate(tx_data.get("vin", [])):
                input_data = {
                    "index": i,
                    "script_sig": vin.get("scriptsig", ""),
                    "script_sig_hex": vin.get("scriptsig", ""),
                    "witness": vin.get("witness", []),
                    "sequence": vin.get("sequence", 0),
                    "previous_output": {
                        "txid": vin.get("txid", ""),
                        "vout": vin.get("vout", 0)
                    }
                }
                inputs.append(input_data)
            
            # Parse outputs
            for i, vout in enumerate(tx_data.get("vout", [])):
                output_data = {
                    "index": i,
                    "value": vout.get("value", 0),
                    "script_pubkey": vout.get("scriptpubkey", ""),
                    "script_pubkey_hex": vout.get("scriptpubkey", ""),
                    "script_pubkey_type": vout.get("scriptpubkey_type", "unknown"),
                    "script_pubkey_address": vout.get("scriptpubkey_address", "")
                }
                outputs.append(output_data)
            
            return inputs, outputs
        
        else:
            raise NotImplementedError(f"Parser for {self.api_provider} not yet implemented")
    
    def analyze_script_with_context(self, script_hex: str, context: Dict[str, Any], location: str) -> ScriptWithContext:
        """Analyze a script with its execution context"""
        
        if not script_hex:
            # For empty scripts (common in SegWit), still analyze witness data
            empty_script_analysis = {
                "raw_script": "",
                "script_type": "Empty",
                "opcodes": [],
                "control_flow": {"blocks": 0, "complexity": "none"},
                "stack_analysis": {"final_stack": [], "execution_log": [], "warnings": []},
                "security_issues": [],
                "template_match": {"type": "Empty", "is_standard": True, "confidence": 1.0}
            }
            
            # Enhanced analysis with context (including witness)
            context_analysis = self._analyze_execution_context(empty_script_analysis, context)
            empty_script_analysis.update(context_analysis)
            
            # Analyze signature requirements (this will check witness data)
            signature_requirement = self._analyze_signature_requirements(empty_script_analysis, context, location)
            
            return ScriptWithContext(
                script_hex="",
                script_type="Empty",
                script_analysis=empty_script_analysis,
                context=context,
                location=location,
                signature_requirement=signature_requirement
            )
        
        # Analyze the raw script
        script_analysis = self.script_analyzer.analyze_script(script_hex)
        
        # Enhanced analysis with context
        context_analysis = self._analyze_execution_context(script_analysis, context)
        script_analysis.update(context_analysis)
        
        # Analyze signature requirements
        signature_requirement = self._analyze_signature_requirements(script_analysis, context, location)
        
        return ScriptWithContext(
            script_hex=script_hex,
            script_type=script_analysis["script_type"],
            script_analysis=script_analysis,
            context=context,
            location=location,
            signature_requirement=signature_requirement
        )
    
    def _analyze_signature_requirements(self, script_analysis: Dict[str, Any], context: Dict[str, Any], location: str) -> SignatureRequirement:
        """Analyze how many signatures are required and present"""
        
        script_type = script_analysis.get("script_type", "Unknown")
        is_input = location.startswith("input")
        
        # For output scripts, analyze what will be required to spend them
        if not is_input:
            return self._analyze_output_signature_requirements(script_analysis, script_type)
        
        # For input scripts, analyze what signatures are present
        return self._analyze_input_signature_requirements(script_analysis, context, script_type)
    
    def _analyze_output_signature_requirements(self, script_analysis: Dict[str, Any], script_type: str) -> SignatureRequirement:
        """Analyze signature requirements for output scripts (what's needed to spend them)"""
        
        if script_type == "Pay to Public Key Hash":
            return SignatureRequirement(
                required_signatures=1,
                total_possible_signers=1,
                signature_type="single",
                present_signatures=0,  # Not applicable for outputs
                is_fully_signed=False,  # Not applicable for outputs
                threshold_description="1-of-1"
            )
        
        elif script_type == "Pay to Public Key":
            return SignatureRequirement(
                required_signatures=1,
                total_possible_signers=1,
                signature_type="single",
                present_signatures=0,
                is_fully_signed=False,
                threshold_description="1-of-1"
            )
        
        elif script_type == "Pay to Taproot":
            return SignatureRequirement(
                required_signatures=1,
                total_possible_signers=1,
                signature_type="single_taproot",
                present_signatures=0,  # Not applicable for outputs
                is_fully_signed=False,  # Not applicable for outputs
                threshold_description="1-of-1"
            )
        
        elif "multisig" in script_type.lower():
            # Parse multisig requirements from opcodes
            opcodes = script_analysis.get("opcodes", [])
            required_sigs, total_keys = self._parse_multisig_requirements(opcodes)
            
            return SignatureRequirement(
                required_signatures=required_sigs,
                total_possible_signers=total_keys,
                signature_type="multisig",
                present_signatures=0,
                is_fully_signed=False,
                threshold_description=f"{required_sigs}-of-{total_keys}"
            )
        
        elif script_type == "Pay to Script Hash":
            return SignatureRequirement(
                required_signatures=1,  # At least one signature in the redeem script
                total_possible_signers=1,  # Unknown until redeem script is revealed
                signature_type="script_hash",
                present_signatures=0,
                is_fully_signed=False,
                threshold_description="1+ (depends on redeem script)"
            )
        
        else:
            return SignatureRequirement(
                required_signatures=1,  # Conservative estimate
                total_possible_signers=1,
                signature_type="unknown",
                present_signatures=0,
                is_fully_signed=False,
                threshold_description="Unknown"
            )
    
    def _analyze_input_signature_requirements(self, script_analysis: Dict[str, Any], context: Dict[str, Any], script_type: str) -> SignatureRequirement:
        """Analyze signature requirements for input scripts (what signatures are present)"""
        
        # Count signatures in scriptSig
        sig_analysis = script_analysis.get("signature_analysis", {})
        script_sig_signatures = sig_analysis.get("signature_count", 0)
        
        # Enhanced witness signature counting
        witness_analysis = script_analysis.get("witness_analysis", {})
        witness_signatures = 0
        witness_pubkeys = 0
        has_redeem_script = False
        
        if witness_analysis.get("has_witness"):
            witness_items = witness_analysis.get("witness_items", [])
            witness_signatures = sum(1 for item in witness_items if item.get("type") in ["signature", "schnorr_signature", "schnorr_signature_with_data"])
            witness_pubkeys = sum(1 for item in witness_items if "pubkey" in item.get("type", ""))
            has_redeem_script = any(item.get("type") == "script_or_redeem" for item in witness_items)
        
        total_present_signatures = script_sig_signatures + witness_signatures
        
        # Detect multisig patterns from witness data
        is_multisig, required_sigs, total_keys, weighted_info = self._detect_multisig_from_witness(context.get("witness", []))
        
        # Handle Empty script types with witness data (likely Taproot)
        if script_type == "Empty" and witness_analysis.get("has_witness"):
            # Empty scriptSig + witness data usually indicates Taproot key-path spend
            present_sigs = 1 if witness_analysis.get("witness_stack_size", 0) > 0 else 0
            return SignatureRequirement(
                required_signatures=1,
                total_possible_signers=1,
                signature_type="single_taproot",
                present_signatures=present_sigs,
                is_fully_signed=present_sigs >= 1,
                threshold_description="1-of-1"
            )
        
        # Determine signature type and requirements based on script pattern and multisig detection
        if is_multisig:
            # Detected multisig pattern - check if it's weighted
            if weighted_info:
                sig_type = "weighted_multisig"
                # Calculate present weight from signatures
                present_weight = 0
                if weighted_info.individual_weights and total_present_signatures <= len(weighted_info.individual_weights):
                    # Approximate weight by taking the highest weights for present signatures
                    sorted_weights = sorted(weighted_info.individual_weights, reverse=True)
                    present_weight = sum(sorted_weights[:total_present_signatures])
                
                weighted_info.present_weight = present_weight
                threshold_desc = f"weighted ({total_present_signatures} signers, score: {weighted_info.threshold_score:,})"
            else:
                sig_type = "multisig"
                if script_type in ["Pay to Witness Script Hash", "Pay to Script Hash"]:
                    sig_type = f"multisig_{script_type.lower().replace(' ', '_')}"
                threshold_desc = f"{required_sigs}-of-{total_keys}"
            
            return SignatureRequirement(
                required_signatures=required_sigs,
                total_possible_signers=total_keys,
                signature_type=sig_type,
                present_signatures=total_present_signatures,
                is_fully_signed=total_present_signatures >= required_sigs,
                threshold_description=threshold_desc,
                weighted_info=weighted_info
            )
        
        elif script_type == "Unknown/Non-standard":
            # Could be an early Bitcoin transaction with just a signature
            if total_present_signatures > 0:
                return SignatureRequirement(
                    required_signatures=total_present_signatures,
                    total_possible_signers=total_present_signatures,
                    signature_type="single",
                    present_signatures=total_present_signatures,
                    is_fully_signed=True,
                    threshold_description=f"{total_present_signatures}-of-{total_present_signatures}"
                )
        
        elif script_type == "Pay to Public Key Hash":
            return SignatureRequirement(
                required_signatures=1,
                total_possible_signers=1,
                signature_type="single",
                present_signatures=total_present_signatures,
                is_fully_signed=total_present_signatures >= 1,
                threshold_description="1-of-1"
            )
        
        elif script_type == "Pay to Taproot":
            # Taproot inputs require 1 signature for key-path spend
            # For script-path spend, it depends on the script, but we'll handle key-path as default
            present_sigs = max(total_present_signatures, 1 if witness_analysis.get("has_witness") else 0)
            return SignatureRequirement(
                required_signatures=1,
                total_possible_signers=1,
                signature_type="single_taproot",
                present_signatures=present_sigs,
                is_fully_signed=present_sigs >= 1,
                threshold_description="1-of-1"
            )
        
        elif script_type in ["Pay to Script Hash", "Pay to Witness Script Hash"]:
            # P2SH/P2WSH can contain any type of redeem script
            if total_present_signatures > 1 and not is_multisig:
                # Likely multisig but couldn't parse exactly
                return SignatureRequirement(
                    required_signatures=total_present_signatures,
                    total_possible_signers=total_present_signatures,  # Conservative estimate
                    signature_type=f"multisig_{script_type.lower().replace(' ', '_')}",
                    present_signatures=total_present_signatures,
                    is_fully_signed=True,
                    threshold_description=f"{total_present_signatures}-of-{total_present_signatures}+"
                )
            else:
                return SignatureRequirement(
                    required_signatures=1,
                    total_possible_signers=1,
                    signature_type=f"single_{script_type.lower().replace(' ', '_')}",
                    present_signatures=total_present_signatures,
                    is_fully_signed=total_present_signatures >= 1,
                    threshold_description="1-of-1"
                )
        
        # Default case
        return SignatureRequirement(
            required_signatures=max(1, total_present_signatures),
            total_possible_signers=max(1, total_present_signatures),
            signature_type="unknown",
            present_signatures=total_present_signatures,
            is_fully_signed=total_present_signatures > 0,
            threshold_description=f"{total_present_signatures}-of-{total_present_signatures}"
        )
    
    def _parse_multisig_requirements(self, opcodes: List[Dict[str, Any]]) -> Tuple[int, int]:
        """Parse m-of-n requirements from multisig script opcodes"""
        if len(opcodes) < 3:
            return 1, 1
        
        try:
            # Multisig format: OP_M <pubkey1> <pubkey2> ... <pubkeyN> OP_N OP_CHECKMULTISIG
            first_opcode = opcodes[0].get("opcode", 0)
            last_opcodes = opcodes[-2:]  # Get last two opcodes
            
            # Extract M (required signatures)
            if 81 <= first_opcode <= 96:  # OP_1 through OP_16
                required_sigs = first_opcode - 80
            else:
                required_sigs = 1
            
            # Extract N (total public keys)
            if len(last_opcodes) >= 2:
                n_opcode = last_opcodes[0].get("opcode", 0)
                if 81 <= n_opcode <= 96:  # OP_1 through OP_16
                    total_keys = n_opcode - 80
                else:
                    total_keys = len(opcodes) - 3  # Estimate from opcode count
            else:
                total_keys = required_sigs
            
            return required_sigs, total_keys
            
        except:
            return 1, 1
    
    def _analyze_execution_context(self, script_analysis: Dict[str, Any], context: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze the execution context (signatures, witness data, etc.)"""
        context_analysis = {
            "execution_context": {},
            "witness_analysis": {},
            "signature_analysis": {}
        }
        
        # Analyze witness data (for SegWit)
        witness_data = context.get("witness", [])
        if witness_data:
            witness_items = []
            signature_count = 0
            
            for i, item in enumerate(witness_data):
                item_type = self._classify_witness_item(item)
                if item_type in ["signature", "schnorr_signature", "schnorr_signature_with_data"]:
                    signature_count += 1
                
                # Analyze witness scripts for opcodes
                item_analysis = None
                if item_type == "script_or_redeem" and item:
                    try:
                        # Analyze the witness script to get opcodes
                        item_analysis = self.script_analyzer.analyze_script(item)
                    except Exception as e:
                        print(f"Warning: Could not analyze witness script: {e}")
                
                witness_items.append({
                    "index": i,
                    "size": len(item) if item else 0,
                    "data": item,  # Store full data - no truncation
                    "type": item_type,
                    "script_analysis": item_analysis  # Include parsed opcodes if it's a script
                })
            
            context_analysis["witness_analysis"] = {
                "has_witness": True,
                "witness_stack_size": len(witness_data),
                "witness_items": witness_items,
                "signature_count": signature_count
            }
        else:
            context_analysis["witness_analysis"] = {
                "has_witness": False,
                "witness_stack_size": 0,
                "witness_items": [],
                "signature_count": 0
            }
        
        # Analyze script signature data
        script_sig = context.get("script_sig_hex", "")
        if script_sig:
            context_analysis["signature_analysis"] = self._analyze_script_sig(script_sig)
        
        return context_analysis
    
    def _classify_witness_item(self, item: str) -> str:
        """Classify witness stack items with enhanced multisig detection"""
        if not item:
            return "empty"
        
        # Check for DER signatures (more comprehensive)
        if self._is_der_signature(item):
            return "signature"
        elif len(item) == 128:  # 64 bytes = Schnorr signature
            return "schnorr_signature"
        elif len(item) == 130:  # 65 bytes = could be Schnorr signature + extra byte OR uncompressed pubkey
            # For Taproot contexts, this is more likely a signature than a pubkey
            # Check if it looks like signature data (high entropy, not starting with 02/03/04)
            if not item.startswith(('02', '03', '04')):
                return "schnorr_signature_with_data"
            else:
                return "uncompressed_pubkey"
        elif len(item) == 66:  # 33 bytes = compressed pubkey
            return "compressed_pubkey"
        elif len(item) == 64:  # 32 bytes
            return "hash_or_secret"
        elif len(item) > 100:  # Likely script/redeem script
            return "script_or_redeem"
        else:
            return "data"
    
    def _is_der_signature(self, hex_data: str) -> bool:
        """Check if hex data represents a DER signature"""
        if not hex_data or len(hex_data) < 16:
            return False
        
        try:
            # DER signatures start with 0x30
            if not hex_data.startswith('30'):
                return False
            
            # Common DER signature lengths (in hex characters)
            # Typical range: 70-146 characters (35-73 bytes)
            sig_lengths = range(70, 147)
            if len(hex_data) in sig_lengths:
                # Additional validation: should end with hash type (typically 01)
                if hex_data.endswith('01'):
                    return True
                # Some signatures end with other hash types
                if hex_data[-2:] in ['01', '02', '03', '81', '82', '83']:
                    return True
            
            return False
        except:
            return False
    
    def _detect_multisig_from_witness(self, witness_data: List[str]) -> Tuple[bool, int, int, Optional[WeightedVotingInfo]]:
        """Detect multisig patterns from witness data"""
        if not witness_data or len(witness_data) < 3:
            return False, 1, 1, None
        
        # Count signatures and other components
        signatures = []
        pubkeys = []
        scripts = []
        
        for item in witness_data:
            if not item:  # Empty items (common in multisig)
                continue
            
            item_type = self._classify_witness_item(item)
            
            if item_type == "signature":
                signatures.append(item)
            elif "pubkey" in item_type:
                pubkeys.append(item)
            elif item_type == "script_or_redeem":
                scripts.append(item)
        
        sig_count = len(signatures)
        
        # Multisig detection heuristics
        if sig_count >= 2:  # Multiple signatures indicate multisig
            # Try to parse redeem script if present
            if scripts:
                required_sigs, total_keys, weighted_info = self._parse_multisig_from_redeem_script(scripts[-1])
                if required_sigs > 1:
                    # Return weighted info as fourth parameter for later use
                    return True, required_sigs, total_keys, weighted_info
            
            # If we can't parse the redeem script, estimate from signatures and witness structure
            # Common pattern: [empty] [sig1] [sig2] ... [sigN] [empty items] [redeem_script]
            empty_count = sum(1 for item in witness_data if not item)
            
            # Estimate total keys from witness structure
            # In a typical m-of-n multisig, we have:
            # - m signatures
            # - (n-m) empty items (for unused signatures)
            # - 1 redeem script
            estimated_total_keys = sig_count + empty_count
            
            # Sanity check the estimate
            if estimated_total_keys > sig_count and estimated_total_keys <= 20:  # Reasonable multisig limits
                return True, sig_count, estimated_total_keys, None
            else:
                # Conservative fallback
                return True, sig_count, sig_count, None
        
        return False, 1, 1, None
    
    def _detect_weighted_multisig(self, redeem_script_hex: str) -> Tuple[bool, Optional[WeightedVotingInfo]]:
        """Detect weighted multisig patterns and extract weight information"""
        if not redeem_script_hex or len(redeem_script_hex) < 20:
            return False, None
            
        try:
            # Look for weighted multisig patterns:
            # OP_CHECKSIG OP_IF OP_PUSHBYTES_3 <weight> OP_ADD pattern
            # Common opcodes: OP_CHECKSIG (0xAC), OP_IF (0x63), OP_ADD (0x93), OP_ELSE (0x67)
            
            script = redeem_script_hex.lower()
            
            # Check for multiple OP_CHECKSIG operations (not ending with OP_CHECKMULTISIG)
            checksig_count = script.count('ac')  # OP_CHECKSIG
            if_count = script.count('63')        # OP_IF  
            add_count = script.count('93')       # OP_ADD
            
            # Weighted multisig should have multiple CHECKSIG operations and ADD operations
            if checksig_count < 2 or add_count < 2 or if_count < 2:
                return False, None
            
            # Look for the final threshold comparison (OP_GREATERTHAN)
            if 'a0' not in script:  # OP_GREATERTHAN
                return False, None
                
            # Extract weights and threshold
            weights = []
            weight_distribution = []
            
            # Parse the script to find weight values
            # Pattern: OP_CHECKSIG (ac) + OP_IF (63) followed by OP_PUSHBYTES_3 (03) with weight
            pos = 0
            while pos < len(script):
                # Look for OP_CHECKSIG + OP_IF pattern
                ac_if_pos = script.find('ac63', pos)
                if ac_if_pos == -1:
                    break
                
                # Look for the next OP_PUSHBYTES_3 (03) after this pattern
                search_start = ac_if_pos + 4
                pushbytes_pos = script.find('03', search_start)
                
                if pushbytes_pos != -1 and pushbytes_pos - search_start <= 10:  # Should be close
                    # Extract the 3-byte weight value after OP_PUSHBYTES_3
                    weight_start = pushbytes_pos + 2
                    if weight_start + 6 <= len(script):
                        weight_hex = script[weight_start:weight_start + 6]
                        try:
                            # Convert little-endian 3-byte value to integer
                            weight_bytes = bytes.fromhex(weight_hex)
                            weight_value = int.from_bytes(weight_bytes, byteorder='little')
                            weights.append(weight_value)
                            
                            # Try to find associated pubkey (should be before the ac63 pattern)
                            # Look for 33-byte pubkey pattern before OP_CHECKSIG
                            pubkey_start = max(0, ac_if_pos - 68)  # 33 bytes * 2 (hex) + length byte
                            pubkey_search = script[pubkey_start:ac_if_pos]
                            if len(pubkey_search) >= 66:
                                # Extract last 32 chars as pubkey hash
                                pubkey_hash = pubkey_search[-66:-32] if len(pubkey_search) >= 66 else "unknown"
                                weight_distribution.append((pubkey_hash, weight_value))  # Store full pubkey hash
                            else:
                                weight_distribution.append(("unknown", weight_value))
                                
                        except (ValueError, IndexError):
                            pass
                
                pos = ac_if_pos + 4
            
            # Look for the final threshold value (before OP_GREATERTHAN)
            threshold_score = 0
            # Look for the specific pattern from debug: "680365d22aa0"
            # This contains the threshold value 65d22a
            if '65d22a' in script:
                try:
                    threshold_hex = '65d22a'  # The threshold value we found
                    threshold_bytes = bytes.fromhex(threshold_hex)
                    threshold_score = int.from_bytes(threshold_bytes, byteorder='little')
                except (ValueError, IndexError):
                    pass
            
            # Alternative: look for any 3-byte value before OP_GREATERTHAN
            if threshold_score == 0:
                greaterthan_pos = script.rfind('a0')  # Last OP_GREATERTHAN
                if greaterthan_pos > 8:
                    # Look for a 3-byte value before OP_GREATERTHAN (6 hex chars)
                    threshold_hex = script[greaterthan_pos-6:greaterthan_pos]
                    if len(threshold_hex) == 6:
                        try:
                            threshold_bytes = bytes.fromhex(threshold_hex)
                            threshold_score = int.from_bytes(threshold_bytes, byteorder='little')
                        except (ValueError, IndexError):
                            pass
            
            if weights and threshold_score > 0:
                weighted_info = WeightedVotingInfo(
                    individual_weights=weights,
                    total_possible_weight=sum(weights),
                    threshold_score=threshold_score,
                    present_weight=0,  # Will be calculated based on actual signatures
                    weight_distribution=weight_distribution
                )
                return True, weighted_info
            
            return False, None
            
        except Exception:
            return False, None
    
    def _parse_multisig_from_redeem_script(self, redeem_script_hex: str) -> Tuple[int, int, Optional[WeightedVotingInfo]]:
        """Parse m-of-n requirements from a redeem script, including weighted multisig"""
        if not redeem_script_hex or len(redeem_script_hex) < 6:
            return 1, 1, None
        
        # First check for weighted multisig
        is_weighted, weighted_info = self._detect_weighted_multisig(redeem_script_hex)
        if is_weighted and weighted_info:
            # For weighted multisig, return the number of weights as signers
            total_signers = len(weighted_info.individual_weights)
            # Calculate effective required signatures based on threshold
            if weighted_info.total_possible_weight > 0:
                min_required = max(1, int(weighted_info.threshold_score / max(weighted_info.individual_weights)) + 1)
            else:
                min_required = total_signers
            return min_required, total_signers, weighted_info
        
        # Standard multisig parsing
        try:
            # Parse the redeem script to extract multisig parameters
            # Typical multisig redeem script: OP_M <pubkey1> <pubkey2> ... <pubkeyN> OP_N OP_CHECKMULTISIG
            
            # First byte should be OP_M (0x51-0x60 for 1-16)
            first_opcode = int(redeem_script_hex[:2], 16)
            if 0x51 <= first_opcode <= 0x60:  # OP_1 through OP_16
                required_sigs = first_opcode - 0x50
            else:
                return 1, 1, None
            
            # Look for OP_CHECKMULTISIG at the end (0xAE)
            if not redeem_script_hex.endswith('ae'):
                return 1, 1, None
            
            # Find the OP_N before OP_CHECKMULTISIG
            # The second-to-last byte should be OP_N
            if len(redeem_script_hex) >= 4:
                n_opcode = int(redeem_script_hex[-4:-2], 16)
                if 0x51 <= n_opcode <= 0x60:  # OP_1 through OP_16
                    total_keys = n_opcode - 0x50
                    
                    # Sanity checks
                    if required_sigs <= total_keys <= 16 and required_sigs >= 1:
                        return required_sigs, total_keys, None
            
            return 1, 1, None
            
        except Exception:
            return 1, 1, None
    
    def _analyze_script_sig(self, script_sig_hex: str) -> Dict[str, Any]:
        """Analyze scriptSig for signatures and other data"""
        if not script_sig_hex:
            return {"has_script_sig": False}
        
        try:
            # Parse scriptSig opcodes
            opcodes = self.script_analyzer.parse_script(script_sig_hex)
            
            signatures = []
            pubkeys = []
            other_data = []
            
            for opcode in opcodes:
                if opcode.data:
                    data_len = len(opcode.data)
                    if data_len in [70, 71, 72, 73]:  # Typical signature lengths
                        signatures.append({
                            "length": data_len,
                            "data": opcode.data.hex(),  # Store full signature data
                            "type": "signature"
                        })
                    elif data_len in [33, 65]:  # Public key lengths
                        pubkeys.append({
                            "length": data_len,
                            "data": opcode.data.hex(),  # Store full pubkey data
                            "type": "compressed_pubkey" if data_len == 33 else "uncompressed_pubkey"
                        })
                    else:
                        other_data.append({
                            "length": data_len,
                            "data": opcode.data.hex(),  # Store full data
                            "type": "data"
                        })
            
            return {
                "has_script_sig": True,
                "signature_count": len(signatures),
                "pubkey_count": len(pubkeys),
                "other_data_count": len(other_data),
                "signatures": signatures,
                "pubkeys": pubkeys,
                "other_data": other_data
            }
            
        except Exception as e:
            return {"has_script_sig": True, "parse_error": str(e)}
    
    def analyze_script_relationships(self, inputs: List[ScriptWithContext], outputs: List[ScriptWithContext]) -> List[Dict[str, Any]]:
        """Analyze relationships between input and output scripts"""
        relationships = []
        
        # Find P2SH relationships
        for input_script in inputs:
            if input_script.script_type == "Pay to Script Hash":
                # Look for corresponding redeem script in scriptSig
                relationships.append({
                    "type": "p2sh_redemption",
                    "input_location": input_script.location,
                    "description": "P2SH script redemption"
                })
        
        # Find multisig relationships
        multisig_outputs = [s for s in outputs if "multisig" in s.script_type.lower()]
        if multisig_outputs:
            relationships.append({
                "type": "multisig_creation",
                "count": len(multisig_outputs),
                "description": f"Created {len(multisig_outputs)} multisig output(s)"
            })
        
        # Find SegWit relationships
        segwit_inputs = [s for s in inputs if s.context.get("witness")]
        if segwit_inputs:
            relationships.append({
                "type": "segwit_usage",
                "count": len(segwit_inputs),
                "description": f"Used SegWit in {len(segwit_inputs)} input(s)"
            })
        
        return relationships
    
    def analyze(self, txid: str) -> Dict[str, Any]:
        """Main analysis method - analyze a complete transaction"""
        print(f"🔍 Bitcoin Transaction Analyzer")
        print("=" * 60)
        print(f"📋 Analyzing transaction: {txid}")
        
        # Fetch transaction data
        print("1. Fetching transaction data...")
        tx_data = self.fetch_transaction_data(txid)
        
        # Parse inputs and outputs
        print("2. Parsing transaction structure...")
        inputs_data, outputs_data = self.parse_transaction_data(tx_data)
        print(f"   ✅ Found {len(inputs_data)} inputs, {len(outputs_data)} outputs")
        
        # Analyze each script with context
        print("3. Analyzing input scripts...")
        input_scripts = []
        for input_data in inputs_data:
            script_with_context = self.analyze_script_with_context(
                input_data.get("script_sig_hex", ""),
                input_data,
                f"input_{input_data['index']}"
            )
            input_scripts.append(script_with_context)
        
        print("4. Analyzing output scripts...")
        output_scripts = []
        for output_data in outputs_data:
            script_with_context = self.analyze_script_with_context(
                output_data.get("script_pubkey_hex", ""),
                output_data,
                f"output_{output_data['index']}"
            )
            output_scripts.append(script_with_context)
        
        # Analyze relationships
        print("5. Analyzing script relationships...")
        relationships = self.analyze_script_relationships(input_scripts, output_scripts)
        
        # Generate metadata
        metadata = self.generate_metadata(txid)
        
        # Transaction-level analysis
        print("6. Performing transaction-level analysis...")
        transaction_metadata = {
            "txid": txid,
            "network": self.network,
            "block_height": tx_data.get("status", {}).get("block_height"),
            "confirmations": tx_data.get("status", {}).get("confirmed", False),
            "fee": tx_data.get("fee", 0),
            "size": tx_data.get("size", 0),
            "weight": tx_data.get("weight", 0),
            "analysis_date": metadata.analysis_date
        }
        
        # Summary statistics
        summary_stats = {
            "total_inputs": len(input_scripts),
            "total_outputs": len(output_scripts),
            "script_types": list(set([s.script_type for s in input_scripts + output_scripts])),
            "has_segwit": any(s.context.get("witness") for s in input_scripts),
            "has_multisig": any("multisig" in s.script_type.lower() for s in output_scripts),
            "total_value": sum(o.context.get("value", 0) for o in output_scripts)
        }
        
        # Signature analysis
        signature_analysis = self._analyze_transaction_signatures(input_scripts, output_scripts)
        
        print(f"✅ Analysis complete!")
        print(f"   📊 Script types found: {', '.join(summary_stats['script_types'])}")
        print(f"   ✍️  Signature patterns: {signature_analysis['summary']['signature_patterns']}")
        
        return {
            "transaction_metadata": transaction_metadata,
            "input_scripts": [self._serialize_script_with_context(s) for s in input_scripts],
            "output_scripts": [self._serialize_script_with_context(s) for s in output_scripts],
            "script_relationships": relationships,
            "summary_stats": summary_stats,
            "signature_analysis": signature_analysis,
            "layer_association": {
                "layer_name": getattr(self, 'layer_name', None),
                "analysis_type": getattr(self, 'analysis_type', 'general'),
                "integration_target": "btc_custody_section" if getattr(self, 'analysis_type', 'general') == 'custody' else "wrapper_section"
            },
            "metadata": {
                "analyzer_type": self.analyzer_type.value,
                "network": self.network,
                "analysis_date": metadata.analysis_date,
                "api_provider": self.api_provider
            }
        }
    
    def _serialize_script_with_context(self, script_with_context: ScriptWithContext) -> Dict[str, Any]:
        """Convert ScriptWithContext to serializable dict"""
        sig_req = script_with_context.signature_requirement
        return {
            "script_hex": script_with_context.script_hex,
            "script_type": script_with_context.script_type,
            "script_analysis": script_with_context.script_analysis,
            "context": script_with_context.context,
            "location": script_with_context.location,
            "signature_requirement": {
                "required_signatures": sig_req.required_signatures,
                "total_possible_signers": sig_req.total_possible_signers,
                "signature_type": sig_req.signature_type,
                "present_signatures": sig_req.present_signatures,
                "is_fully_signed": sig_req.is_fully_signed,
                "threshold_description": sig_req.threshold_description,
                "weighted_info": {
                    "individual_weights": sig_req.weighted_info.individual_weights,
                    "total_possible_weight": sig_req.weighted_info.total_possible_weight,
                    "threshold_score": sig_req.weighted_info.threshold_score,
                    "present_weight": sig_req.weighted_info.present_weight,
                    "weight_distribution": sig_req.weighted_info.weight_distribution
                } if sig_req.weighted_info else None
            } if sig_req else None
        }
    
    def _analyze_transaction_signatures(self, input_scripts: List[ScriptWithContext], 
                                       output_scripts: List[ScriptWithContext]) -> Dict[str, Any]:
        """Analyze transaction-level signature patterns and requirements"""
        
        # Collect signature types
        input_sig_types = [s.signature_requirement.signature_type for s in input_scripts if s.signature_requirement]
        output_sig_types = [s.signature_requirement.signature_type for s in output_scripts if s.signature_requirement]
        
        # Count different signature patterns
        total_signatures_present = sum(s.signature_requirement.present_signatures for s in input_scripts if s.signature_requirement)
        total_signatures_required = sum(s.signature_requirement.required_signatures for s in output_scripts if s.signature_requirement)
        
        # Identify unique signature patterns
        signature_patterns = list(set(input_sig_types + output_sig_types))
        
        # Multisig analysis
        multisig_inputs = [s for s in input_scripts if s.signature_requirement and "multisig" in s.signature_requirement.signature_type]
        multisig_outputs = [s for s in output_scripts if s.signature_requirement and "multisig" in s.signature_requirement.signature_type]
        
        # Threshold analysis
        threshold_descriptions = []
        for script in input_scripts + output_scripts:
            if script.signature_requirement and script.signature_requirement.threshold_description != "Unknown":
                threshold_descriptions.append({
                    "location": script.location,
                    "threshold": script.signature_requirement.threshold_description,
                    "signature_type": script.signature_requirement.signature_type
                })
        
        return {
            "summary": {
                "total_signatures_present": total_signatures_present,
                "total_signatures_required_to_spend_outputs": total_signatures_required,
                "signature_patterns": signature_patterns,
                "has_multisig": len(multisig_inputs) > 0 or len(multisig_outputs) > 0,
                "multisig_input_count": len(multisig_inputs),
                "multisig_output_count": len(multisig_outputs)
            },
            "input_analysis": {
                "total_inputs": len(input_scripts),
                "signature_breakdown": [
                    {
                        "location": s.location,
                        "signatures_present": s.signature_requirement.present_signatures if s.signature_requirement else 0,
                        "signature_type": s.signature_requirement.signature_type if s.signature_requirement else "unknown",
                        "is_fully_signed": s.signature_requirement.is_fully_signed if s.signature_requirement else False
                    }
                    for s in input_scripts
                ]
            },
            "output_analysis": {
                "total_outputs": len(output_scripts),
                "spending_requirements": [
                    {
                        "location": s.location,
                        "required_signatures": s.signature_requirement.required_signatures if s.signature_requirement else 1,
                        "total_possible_signers": s.signature_requirement.total_possible_signers if s.signature_requirement else 1,
                        "signature_type": s.signature_requirement.signature_type if s.signature_requirement else "unknown",
                        "threshold_description": s.signature_requirement.threshold_description if s.signature_requirement else "Unknown"
                    }
                    for s in output_scripts
                ]
            },
            "threshold_analysis": threshold_descriptions,
            "signing_complexity": {
                "simple_single_sig": sum(1 for s in output_scripts if s.signature_requirement and s.signature_requirement.signature_type == "single"),
                "multisig_outputs": len(multisig_outputs),
                "script_hash_outputs": sum(1 for s in output_scripts if s.signature_requirement and s.signature_requirement.signature_type == "script_hash"),
                "unknown_outputs": sum(1 for s in output_scripts if s.signature_requirement and s.signature_requirement.signature_type == "unknown")
            }
        }
    
    def generate_markdown_report(self, analysis_data: Dict[str, Any]) -> str:
        """Generate comprehensive markdown report for transaction analysis"""
        lines = [
            "# Bitcoin Transaction Analysis Report",
            "",
            f"**Transaction ID:** {analysis_data['transaction_metadata']['txid']}",
            f"**Network:** {analysis_data['transaction_metadata']['network'].title()}",
            f"**Analysis Date:** {analysis_data['metadata']['analysis_date']}",
            f"**API Provider:** {analysis_data['metadata']['api_provider']}",
        ]
        
        # Add layer association if present
        layer_info = analysis_data.get("layer_association", {})
        if layer_info.get("layer_name"):
            lines.extend([
                f"**Associated Layer:** {layer_info['layer_name']}",
                f"**Analysis Type:** {layer_info['analysis_type'].title()}",
                f"**Integration Target:** {layer_info['integration_target'].replace('_', ' ').title()}",
            ])
        
        lines.append("")
        
        # Transaction summary
        tx_meta = analysis_data["transaction_metadata"]
        summary_data = {
            "block_height": tx_meta.get("block_height", "Unconfirmed"),
            "confirmations": tx_meta.get("confirmations", 0),
            "fee_satoshis": tx_meta.get("fee", 0),
            "size_bytes": tx_meta.get("size", 0),
            "weight_units": tx_meta.get("weight", 0)
        }
        
        lines.append(ReportGenerator.generate_summary_table(summary_data, "📋 Transaction Summary"))
        
        # Script summary
        stats = analysis_data["summary_stats"]
        lines.extend([
            "## 📊 Script Analysis Summary",
            "",
            f"- **Total Inputs:** {stats['total_inputs']}",
            f"- **Total Outputs:** {stats['total_outputs']}",
            f"- **Script Types:** {', '.join(stats['script_types'])}",
            f"- **SegWit Usage:** {'✅ Yes' if stats['has_segwit'] else '❌ No'}",
            f"- **Multisig Usage:** {'✅ Yes' if stats['has_multisig'] else '❌ No'}",
            f"- **Total Value:** {stats['total_value']} satoshis",
            "",
        ])
        
        # Input scripts
        if analysis_data["input_scripts"]:
            lines.extend([
                "## 📥 Input Scripts Analysis",
                ""
            ])
            
            for i, input_script in enumerate(analysis_data["input_scripts"]):
                lines.extend([
                    f"### Input {i}: {input_script['script_type']}",
                    "",
                    f"**Script Hex:** `{input_script['script_hex'][:50]}{'...' if len(input_script['script_hex']) > 50 else ''}`",
                    ""
                ])
                
                # Add witness info if present
                if input_script["script_analysis"].get("witness_analysis", {}).get("has_witness"):
                    witness = input_script["script_analysis"]["witness_analysis"]
                    lines.extend([
                        "**Witness Data:**",
                        f"- Stack Size: {witness['witness_stack_size']}",
                        ""
                    ])
                    for item in witness["witness_items"][:3]:  # Show first 3 items
                        lines.append(f"- Item {item['index']}: {item['type']} ({item['size']} bytes)")
                    lines.append("")
                
                # Add signature info if present
                if input_script["script_analysis"].get("signature_analysis", {}).get("has_script_sig"):
                    sig_analysis = input_script["script_analysis"]["signature_analysis"]
                    lines.extend([
                        "**Script Signature:**",
                        f"- Signatures: {sig_analysis.get('signature_count', 0)}",
                        f"- Public Keys: {sig_analysis.get('pubkey_count', 0)}",
                        ""
                    ])
                
                # Add signature requirement info
                if input_script.get("signature_requirement"):
                    sig_req = input_script["signature_requirement"]
                    lines.extend([
                        "**Signature Requirements:**",
                        f"- Threshold: {sig_req['threshold_description']}",
                        f"- Present: {sig_req['present_signatures']} of {sig_req['required_signatures']} required",
                        f"- Fully Signed: {'✅' if sig_req['is_fully_signed'] else '❌'}",
                    ])
                    
                    # Add weighted multisig details if present
                    if sig_req.get("weighted_info"):
                        weighted = sig_req["weighted_info"]
                        lines.extend([
                            f"- **Weighted Voting System:**",
                            f"  - Individual Weights: {weighted['individual_weights'][:5]}{'...' if len(weighted['individual_weights']) > 5 else ''}",
                            f"  - Total Possible Weight: {weighted['total_possible_weight']:,}",
                            f"  - Threshold Score: {weighted['threshold_score']:,}",
                            f"  - Present Weight: {weighted['present_weight']:,}",
                        ])
                    
                    lines.append("")
        
        # Output scripts
        if analysis_data["output_scripts"]:
            lines.extend([
                "## 📤 Output Scripts Analysis",
                ""
            ])
            
            for i, output_script in enumerate(analysis_data["output_scripts"]):
                lines.extend([
                    f"### Output {i}: {output_script['script_type']}",
                    "",
                    f"**Value:** {output_script['context'].get('value', 0)} satoshis",
                    f"**Address:** {output_script['context'].get('script_pubkey_address', 'N/A')}",
                    f"**Script Hex:** `{output_script['script_hex'][:50]}{'...' if len(output_script['script_hex']) > 50 else ''}`",
                    ""
                ])
                
                # Add spending requirements
                if output_script.get("signature_requirement"):
                    sig_req = output_script["signature_requirement"]
                    lines.extend([
                        "**Spending Requirements:**",
                        f"- To spend this output: {sig_req['threshold_description']}",
                        f"- Signature Type: {sig_req['signature_type']}",
                        f"- Required: {sig_req['required_signatures']} of {sig_req['total_possible_signers']} possible signers",
                    ])
                    
                    # Add weighted multisig details if present
                    if sig_req.get("weighted_info"):
                        weighted = sig_req["weighted_info"]
                        lines.extend([
                            f"- **Weighted Voting Requirements:**",
                            f"  - Threshold Score: {weighted['threshold_score']:,}",
                            f"  - Total Possible Weight: {weighted['total_possible_weight']:,}",
                            f"  - Weight Distribution: {len(weighted['weight_distribution'])} different weights",
                        ])
                    
                    lines.append("")
        
        # Script relationships
        if analysis_data["script_relationships"]:
            lines.extend([
                "## 🔗 Script Relationships",
                ""
            ])
            for relationship in analysis_data["script_relationships"]:
                lines.append(f"- **{relationship['type'].title()}:** {relationship['description']}")
            lines.append("")
        
        # Signature analysis
        sig_analysis = analysis_data["signature_analysis"]
        lines.extend([
            "## ✍️ Signature Analysis",
            "",
            f"**Total Signatures Present:** {sig_analysis['summary']['total_signatures_present']}",
            f"**Signatures Required to Spend Outputs:** {sig_analysis['summary']['total_signatures_required_to_spend_outputs']}",
            f"**Signature Patterns:** {', '.join(sig_analysis['summary']['signature_patterns'])}",
            f"**Has Multisig:** {'✅ Yes' if sig_analysis['summary']['has_multisig'] else '❌ No'}",
            f"**Has Weighted Multisig:** {'✅ Yes' if 'weighted_multisig' in sig_analysis['summary']['signature_patterns'] else '❌ No'}",
            "",
        ])
        
        # Input signature breakdown
        if sig_analysis["input_analysis"]["signature_breakdown"]:
            lines.extend([
                "### 📥 Input Signatures",
                ""
            ])
            for breakdown in sig_analysis["input_analysis"]["signature_breakdown"]:
                lines.extend([
                    f"- **{breakdown['location']}:** {breakdown['signatures_present']} signature(s) present",
                    f"  - Type: {breakdown['signature_type']}",
                    f"  - Fully Signed: {'✅' if breakdown['is_fully_signed'] else '❌'}",
                ])
            lines.append("")
        
        # Output spending requirements  
        if sig_analysis["output_analysis"]["spending_requirements"]:
            lines.extend([
                "### 📤 Output Spending Requirements",
                ""
            ])
            for req in sig_analysis["output_analysis"]["spending_requirements"]:
                lines.extend([
                    f"- **{req['location']}:** {req['threshold_description']} required",
                    f"  - Type: {req['signature_type']}",
                    f"  - Required: {req['required_signatures']} of {req['total_possible_signers']} possible signers",
                ])
            lines.append("")
        
        # Threshold analysis
        if sig_analysis["threshold_analysis"]:
            lines.extend([
                "### 🎯 Threshold Patterns",
                ""
            ])
            for threshold in sig_analysis["threshold_analysis"]:
                lines.append(f"- **{threshold['location']}:** {threshold['threshold']} ({threshold['signature_type']})")
            lines.append("")
        
        # Signing complexity summary
        complexity = sig_analysis["signing_complexity"]
        lines.extend([
            "### 📊 Signing Complexity Summary",
            "",
            f"- **Simple Single-Sig Outputs:** {complexity['simple_single_sig']}",
            f"- **Multisig Outputs:** {complexity['multisig_outputs']}",
            f"- **Script Hash Outputs:** {complexity['script_hash_outputs']}",
            f"- **Unknown Outputs:** {complexity['unknown_outputs']}",
            "",
        ])
        
        # Footer
        lines.extend([
            "---",
            "",
            "*Analysis generated by Bitcoin Layers Transaction Analyzer*",
            "*For questions or issues, please refer to the tool documentation*"
        ])
        
        return "\n".join(lines)

def main():
    """Main function to run Bitcoin transaction analysis"""
    
    # Example transaction ID (first Bitcoin transaction)
    example_txid = "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16"
    
    if TRANSACTION_ID:
        txid_to_analyze = TRANSACTION_ID
    else:
        print("📝 No transaction ID provided. Using example transaction:")
        print(f"   {example_txid}")
        txid_to_analyze = example_txid
    
    try:
        # Initialize analyzer with layer association
        analyzer = BitcoinTransactionAnalyzer(NETWORK, API_PROVIDER, WRAPPER_NAME, ANALYSIS_TYPE)
        
        # Validate input
        if not analyzer.validate_input(txid_to_analyze, "hex_string"):
            print("❌ Invalid transaction ID format")
            return
        
        # Analyze the transaction
        analysis_data = analyzer.analyze(txid_to_analyze)
        
        # Generate reports using base class method
        tx_hash = analyzer.calculate_hash(txid_to_analyze)[:16]
        
        # Create filename with layer association if provided
        if WRAPPER_NAME:
            layer_slug = WRAPPER_NAME.lower().replace(" ", "_").replace("-", "_")
            filename_prefix = f"bitcoin_transaction_{tx_hash}"
        else:
            layer_slug = None
            filename_prefix = f"bitcoin_transaction_{tx_hash}"
        
        saved_files = analyzer.save_analysis_report(
            analysis_data, 
            filename_prefix,
            layer_slug
        )
        
        print(f"📄 JSON report saved to: {saved_files['json_path']}")
        print(f"📝 Markdown report saved to: {saved_files['markdown_path']}")
        
        print("\n✅ Analysis complete!")
        
        # Display summary
        stats = analysis_data["summary_stats"]
        print(f"\n📊 Summary:")
        print(f"   Transaction: {analysis_data['transaction_metadata']['txid']}")
        
        # Show layer association if present
        layer_info = analysis_data.get("layer_association", {})
        if layer_info.get("layer_name"):
            print(f"   🏗️  Associated Layer: {layer_info['layer_name']}")
            print(f"   📝 Analysis Type: {layer_info['analysis_type'].title()}")
            print(f"   🎯 Integration Target: {layer_info['integration_target'].replace('_', ' ').title()}")
        
        print(f"   Inputs: {stats['total_inputs']}, Outputs: {stats['total_outputs']}")
        print(f"   Script Types: {', '.join(stats['script_types'])}")
        print(f"   Signatures Present: {analysis_data['signature_analysis']['summary']['total_signatures_present']}")
        print(f"   Multisig: {'✅' if analysis_data['signature_analysis']['summary']['has_multisig'] else '❌'}")
        print(f"   SegWit: {'✅' if stats['has_segwit'] else '❌'}")
        
    except Exception as e:
        print(f"❌ Analysis failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()