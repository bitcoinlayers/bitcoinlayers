#!/usr/bin/env python3
"""
Taproot Key Tweaker - BIP-341 Implementation

This script generates Taproot tweaked public keys from internal public keys and script trees.
Supports single scripts, script trees, hex input, file input, and human-readable scripts.

=== QUICK SETUP: EDIT VALUES BELOW ===
To use this script quickly, just edit the values in the CONFIG section below and run:
    python taproot_tweaker.py

For command-line usage:
    python taproot_tweaker.py <internal_pubkey> [options]

Examples:
    # Single script from hex
    python taproot_tweaker.py 1234...abcd --script-hex "20ac9a78...51ac"
    
    # Script from file
    python taproot_tweaker.py 1234...abcd --script-file script.hex
    
    # Human readable script
    python taproot_tweaker.py 1234...abcd --script-asm "OP_CHECKSIG"
    
    # Script tree from JSON file
    python taproot_tweaker.py 1234...abcd --tree-file tree.json
    
    # Verify against known tweaked pubkey
    python taproot_tweaker.py 1234...abcd --script-hex "20ac...51ac" --verify abcd1234...
"""

# =============================================================================
# CONFIG SECTION - EDIT YOUR VALUES HERE
# =============================================================================

# Your internal public key (32-byte hex string)  
INTERNAL_PUBKEY = "50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0"

# Choose ONE of the following script input methods:

# Option 1: Single script as hex string
SCRIPT_HEX = None

# Option 2: Single script as human-readable ASM (set SCRIPT_HEX to None to use this)
SCRIPT_ASM = None

# Option 3: Multiple scripts for script tree (set both SCRIPT_HEX and SCRIPT_ASM to None to use this)
SCRIPT_TREE = [
    # First script: pk(3b48ffb437c2ee08ceb8b9bb9e5555c002fb304c112e7e1233fe233f2a3dfc1d)
    "OP_PUSHBYTES_32 3b48ffb437c2ee08ceb8b9bb9e5555c002fb304c112e7e1233fe233f2a3dfc1d OP_CHECKSIG",
    # Second script: multi_a(2,...) - The 2-of-3 multisig
    "OP_PUSHBYTES_32 b496bfbae14987817c53d592be0aa66c45c7b94443c1f74551373f9ce34d2346 OP_CHECKSIG OP_PUSHBYTES_32 9c00b80d739933388f136f4519fed20cbaee4153899810703ca216d2320e20c4 OP_CHECKSIGADD OP_PUSHBYTES_32 994283e4c648fbeded4ecf579490622dd4469152e3b4bc8290607ed365fd29be OP_CHECKSIGADD OP_PUSHNUM_2 OP_NUMEQUAL",
]

# Option 4: Key-path only (no scripts) - set all script options to None
# SCRIPT_HEX = None
# SCRIPT_ASM = None  
# SCRIPT_TREE = None

# Expected tweaked pubkey for verification (optional)
EXPECTED_TWEAKED_PUBKEY = None  # Set to hex string to verify

# Enable verbose output
VERBOSE = True

# =============================================================================
# END CONFIG SECTION
# =============================================================================

import sys
import hashlib
import binascii
import json
import argparse
import tempfile
import os
from typing import List, Dict, Union, Optional, Tuple
import re

try:
    import coincurve
except ImportError:
    print("Error: coincurve library required. Install with: pip install coincurve")
    sys.exit(1)

# BIP-141 opcodes for human-readable script parsing
OPCODES = {
    'OP_0': 0x00, 'OP_FALSE': 0x00,
    'OP_1NEGATE': 0x4f,
    'OP_1': 0x51, 'OP_TRUE': 0x51,
    'OP_2': 0x52, 'OP_3': 0x53, 'OP_4': 0x54, 'OP_5': 0x55,
    'OP_6': 0x56, 'OP_7': 0x57, 'OP_8': 0x58, 'OP_9': 0x59,
    'OP_10': 0x5a, 'OP_11': 0x5b, 'OP_12': 0x5c, 'OP_13': 0x5d,
    'OP_14': 0x5e, 'OP_15': 0x5f, 'OP_16': 0x60,
    'OP_NOP': 0x61,
    'OP_IF': 0x63, 'OP_NOTIF': 0x64, 'OP_ELSE': 0x67, 'OP_ENDIF': 0x68,
    'OP_VERIFY': 0x69, 'OP_RETURN': 0x6a,
    'OP_TOALTSTACK': 0x6b, 'OP_FROMALTSTACK': 0x6c,
    'OP_2DROP': 0x6d, 'OP_2DUP': 0x6e, 'OP_3DUP': 0x6f,
    'OP_2OVER': 0x70, 'OP_2ROT': 0x71, 'OP_2SWAP': 0x72,
    'OP_IFDUP': 0x73, 'OP_DEPTH': 0x74, 'OP_DROP': 0x75,
    'OP_DUP': 0x76, 'OP_NIP': 0x77, 'OP_OVER': 0x78,
    'OP_PICK': 0x79, 'OP_ROLL': 0x7a, 'OP_ROT': 0x7b,
    'OP_SWAP': 0x7c, 'OP_TUCK': 0x7d,
    'OP_SIZE': 0x82,
    'OP_EQUAL': 0x87, 'OP_EQUALVERIFY': 0x88,
    'OP_1ADD': 0x8b, 'OP_1SUB': 0x8c, 'OP_NEGATE': 0x8f,
    'OP_ABS': 0x90, 'OP_NOT': 0x91, 'OP_0NOTEQUAL': 0x92,
    'OP_ADD': 0x93, 'OP_SUB': 0x94, 'OP_BOOLAND': 0x9a,
    'OP_BOOLOR': 0x9b, 'OP_NUMEQUAL': 0x9c, 'OP_NUMEQUALVERIFY': 0x9d,
    'OP_NUMNOTEQUAL': 0x9e, 'OP_LESSTHAN': 0x9f,
    'OP_GREATERTHAN': 0xa0, 'OP_LESSTHANOREQUAL': 0xa1,
    'OP_GREATERTHANOREQUAL': 0xa2, 'OP_MIN': 0xa3, 'OP_MAX': 0xa4,
    'OP_WITHIN': 0xa5,
    'OP_RIPEMD160': 0xa6, 'OP_SHA1': 0xa7, 'OP_SHA256': 0xa8,
    'OP_HASH160': 0xa9, 'OP_HASH256': 0xaa, 'OP_CODESEPARATOR': 0xab,
    'OP_CHECKSIG': 0xac, 'OP_CHECKSIGVERIFY': 0xad,
    'OP_CHECKMULTISIG': 0xae, 'OP_CHECKMULTISIGVERIFY': 0xaf,
    'OP_CHECKLOCKTIMEVERIFY': 0xb1, 'OP_CHECKSEQUENCEVERIFY': 0xb2,
    # Taproot specific
    'OP_CHECKSIGADD': 0xba,
    # Push opcodes
    'OP_PUSHBYTES_1': 0x01, 'OP_PUSHBYTES_2': 0x02, 'OP_PUSHBYTES_3': 0x03,
    'OP_PUSHBYTES_4': 0x04, 'OP_PUSHBYTES_5': 0x05, 'OP_PUSHBYTES_6': 0x06,
    'OP_PUSHBYTES_7': 0x07, 'OP_PUSHBYTES_8': 0x08, 'OP_PUSHBYTES_9': 0x09,
    'OP_PUSHBYTES_10': 0x0a, 'OP_PUSHBYTES_11': 0x0b, 'OP_PUSHBYTES_12': 0x0c,
    'OP_PUSHBYTES_13': 0x0d, 'OP_PUSHBYTES_14': 0x0e, 'OP_PUSHBYTES_15': 0x0f,
    'OP_PUSHBYTES_16': 0x10, 'OP_PUSHBYTES_17': 0x11, 'OP_PUSHBYTES_18': 0x12,
    'OP_PUSHBYTES_19': 0x13, 'OP_PUSHBYTES_20': 0x14, 'OP_PUSHBYTES_21': 0x15,
    'OP_PUSHBYTES_22': 0x16, 'OP_PUSHBYTES_23': 0x17, 'OP_PUSHBYTES_24': 0x18,
    'OP_PUSHBYTES_25': 0x19, 'OP_PUSHBYTES_26': 0x1a, 'OP_PUSHBYTES_27': 0x1b,
    'OP_PUSHBYTES_28': 0x1c, 'OP_PUSHBYTES_29': 0x1d, 'OP_PUSHBYTES_30': 0x1e,
    'OP_PUSHBYTES_31': 0x1f, 'OP_PUSHBYTES_32': 0x20, 'OP_PUSHBYTES_33': 0x21,
    'OP_PUSHBYTES_34': 0x22, 'OP_PUSHBYTES_35': 0x23, 'OP_PUSHBYTES_36': 0x24,
    'OP_PUSHBYTES_37': 0x25, 'OP_PUSHBYTES_38': 0x26, 'OP_PUSHBYTES_39': 0x27,
    'OP_PUSHBYTES_40': 0x28, 'OP_PUSHBYTES_41': 0x29, 'OP_PUSHBYTES_42': 0x2a,
    'OP_PUSHBYTES_43': 0x2b, 'OP_PUSHBYTES_44': 0x2c, 'OP_PUSHBYTES_45': 0x2d,
    'OP_PUSHBYTES_46': 0x2e, 'OP_PUSHBYTES_47': 0x2f, 'OP_PUSHBYTES_48': 0x30,
    'OP_PUSHBYTES_49': 0x31, 'OP_PUSHBYTES_50': 0x32, 'OP_PUSHBYTES_51': 0x33,
    'OP_PUSHBYTES_52': 0x34, 'OP_PUSHBYTES_53': 0x35, 'OP_PUSHBYTES_54': 0x36,
    'OP_PUSHBYTES_55': 0x37, 'OP_PUSHBYTES_56': 0x38, 'OP_PUSHBYTES_57': 0x39,
    'OP_PUSHBYTES_58': 0x3a, 'OP_PUSHBYTES_59': 0x3b, 'OP_PUSHBYTES_60': 0x3c,
    'OP_PUSHBYTES_61': 0x3d, 'OP_PUSHBYTES_62': 0x3e, 'OP_PUSHBYTES_63': 0x3f,
    'OP_PUSHBYTES_64': 0x40, 'OP_PUSHBYTES_65': 0x41, 'OP_PUSHBYTES_66': 0x42,
    'OP_PUSHBYTES_67': 0x43, 'OP_PUSHBYTES_68': 0x44, 'OP_PUSHBYTES_69': 0x45,
    'OP_PUSHBYTES_70': 0x46, 'OP_PUSHBYTES_71': 0x47, 'OP_PUSHBYTES_72': 0x48,
    'OP_PUSHBYTES_73': 0x49, 'OP_PUSHBYTES_74': 0x4a, 'OP_PUSHBYTES_75': 0x4b,
    # Number opcodes
    'OP_PUSHNUM_1': 0x51, 'OP_PUSHNUM_2': 0x52, 'OP_PUSHNUM_3': 0x53,
    'OP_PUSHNUM_4': 0x54, 'OP_PUSHNUM_5': 0x55, 'OP_PUSHNUM_6': 0x56,
    'OP_PUSHNUM_7': 0x57, 'OP_PUSHNUM_8': 0x58, 'OP_PUSHNUM_9': 0x59,
    'OP_PUSHNUM_10': 0x5a, 'OP_PUSHNUM_11': 0x5b, 'OP_PUSHNUM_12': 0x5c,
    'OP_PUSHNUM_13': 0x5d, 'OP_PUSHNUM_14': 0x5e, 'OP_PUSHNUM_15': 0x5f,
    'OP_PUSHNUM_16': 0x60,
}

class TaprootTweaker:
    """Taproot key tweaking implementation following BIP-341"""
    
    @staticmethod
    def tagged_hash(tag: str, data: bytes) -> bytes:
        """Compute tagged hash as per BIP-340"""
        tag_hash = hashlib.sha256(tag.encode()).digest()
        return hashlib.sha256(tag_hash + tag_hash + data).digest()
    
    @staticmethod
    def compact_size(n: int) -> bytes:
        """Encode compact size (varint)"""
        if n < 0xfd:
            return bytes([n])
        elif n <= 0xffff:
            return b'\xfd' + n.to_bytes(2, 'little')
        elif n <= 0xffffffff:
            return b'\xfe' + n.to_bytes(4, 'little')
        else:
            return b'\xff' + n.to_bytes(8, 'little')
    
    def tapleaf_hash(self, script: bytes, leaf_version: int = 0xc0) -> bytes:
        """Compute TapLeaf hash for a script"""
        # TapLeaf = leaf_version || compact_size(len(script)) || script
        leaf_data = bytes([leaf_version]) + self.compact_size(len(script)) + script
        return self.tagged_hash("TapLeaf", leaf_data)
    
    def tapbranch_hash(self, left: bytes, right: bytes) -> bytes:
        """Compute TapBranch hash for two child hashes"""
        # Sort lexicographically
        if left <= right:
            return self.tagged_hash("TapBranch", left + right)
        else:
            return self.tagged_hash("TapBranch", right + left)
    
    def build_tree_hash(self, scripts: List[bytes]) -> bytes:
        """Build merkle tree hash from list of scripts"""
        if len(scripts) == 0:
            raise ValueError("No scripts provided")
        
        if len(scripts) == 1:
            return self.tapleaf_hash(scripts[0])
        
        # Build balanced binary tree
        leaves = [self.tapleaf_hash(script) for script in scripts]
        
        while len(leaves) > 1:
            next_level = []
            for i in range(0, len(leaves), 2):
                if i + 1 < len(leaves):
                    # Pair exists
                    branch_hash = self.tapbranch_hash(leaves[i], leaves[i + 1])
                    next_level.append(branch_hash)
                else:
                    # Odd number, carry up
                    next_level.append(leaves[i])
            leaves = next_level
        
        return leaves[0]
    
    def tweak_pubkey(self, internal_pubkey: bytes, script_tree_hash: Optional[bytes] = None) -> bytes:
        """Compute tweaked public key from internal key and script tree"""
        if len(internal_pubkey) != 32:
            raise ValueError("Internal pubkey must be 32 bytes (x-only)")
        
        # Compute tweak
        if script_tree_hash:
            tweak_data = internal_pubkey + script_tree_hash
        else:
            tweak_data = internal_pubkey
        
        tweak = self.tagged_hash("TapTweak", tweak_data)
        
        # Add tweak to internal pubkey using elliptic curve math
        try:
            # Reconstruct full pubkey (assume even y-coordinate)
            full_internal = b'\x02' + internal_pubkey
            internal_point = coincurve.PublicKey(full_internal)
            
            # Add tweak
            tweaked_point = internal_point.add(tweak)
            
            # Return x-only coordinate
            return tweaked_point.format(compressed=False)[1:33]  # Skip 0x04 prefix, take x-coordinate
            
        except Exception as e:
            raise ValueError(f"Failed to compute tweaked pubkey: {e}")

class ScriptParser:
    """Parse scripts from various formats"""
    
    @staticmethod
    def parse_hex(hex_string: str) -> bytes:
        """Parse hex string to bytes"""
        hex_string = hex_string.strip().replace(' ', '').replace('\n', '')
        if len(hex_string) % 2 != 0:
            raise ValueError("Invalid hex string length")
        return binascii.unhexlify(hex_string)
    
    @staticmethod
    def parse_asm(asm_string: str) -> bytes:
        """Parse human-readable script (ASM) to bytes"""
        tokens = asm_string.split()
        script_bytes = b''
        i = 0
        
        while i < len(tokens):
            token = tokens[i].strip().upper()
            
            if token.startswith('OP_PUSHBYTES_'):
                # Handle OP_PUSHBYTES_X followed by data
                push_size = int(token.split('_')[2])
                script_bytes += bytes([push_size])  # Add the push opcode
                
                # Next token should be the data to push
                if i + 1 < len(tokens):
                    i += 1
                    data_token = tokens[i].strip()
                    if re.match(r'^[0-9a-fA-F]+$', data_token):
                        data = binascii.unhexlify(data_token)
                        if len(data) != push_size:
                            raise ValueError(f"Data size {len(data)} doesn't match OP_PUSHBYTES_{push_size}")
                        script_bytes += data
                    else:
                        raise ValueError(f"Expected hex data after {token}, got: {data_token}")
                else:
                    raise ValueError(f"Missing data after {token}")
                    
            elif token in OPCODES:
                # Known opcode
                script_bytes += bytes([OPCODES[token]])
            elif token.startswith('OP_PUSHDATA'):
                # Handle push data opcodes specially if needed
                raise ValueError(f"PUSHDATA opcodes not implemented: {token}")
            elif re.match(r'^[0-9a-fA-F]+$', token):
                # Hex data to push (legacy format)
                data = binascii.unhexlify(token)
                data_len = len(data)
                
                if data_len <= 75:
                    # Direct push
                    script_bytes += bytes([data_len]) + data
                elif data_len <= 255:
                    # OP_PUSHDATA1
                    script_bytes += b'\x4c' + bytes([data_len]) + data
                elif data_len <= 65535:
                    # OP_PUSHDATA2
                    script_bytes += b'\x4d' + data_len.to_bytes(2, 'little') + data
                else:
                    # OP_PUSHDATA4
                    script_bytes += b'\x4e' + data_len.to_bytes(4, 'little') + data
            else:
                raise ValueError(f"Unknown token: {token}")
            
            i += 1
        
        return script_bytes
    
    @staticmethod
    def parse_file(filename: str) -> Union[bytes, List[bytes]]:
        """Parse script from file (auto-detect format)"""
        with open(filename, 'r') as f:
            content = f.read().strip()
        
        try:
            # Try JSON first (for script trees)
            data = json.loads(content)
            if isinstance(data, list):
                # List of scripts
                scripts = []
                for script_data in data:
                    if isinstance(script_data, str):
                        if script_data.startswith('OP_') or ' ' in script_data:
                            scripts.append(ScriptParser.parse_asm(script_data))
                        else:
                            scripts.append(ScriptParser.parse_hex(script_data))
                    else:
                        raise ValueError("Invalid script format in JSON")
                return scripts
            else:
                raise ValueError("JSON must contain array of scripts")
        except json.JSONDecodeError:
            # Not JSON, try as single script
            if content.startswith('OP_') or ' ' in content:
                return ScriptParser.parse_asm(content)
            else:
                return ScriptParser.parse_hex(content)

def main():
    parser = argparse.ArgumentParser(
        description="Generate Taproot tweaked public keys from internal keys and script trees",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    
    parser.add_argument('internal_pubkey', nargs='?', help='Internal public key (32-byte hex)')
    
    # Script input methods (mutually exclusive)
    script_group = parser.add_mutually_exclusive_group()
    script_group.add_argument('--script-hex', help='Script as hex string')
    script_group.add_argument('--script-asm', help='Script as human-readable ASM')
    script_group.add_argument('--script-file', help='Script from file (auto-detect format)')
    script_group.add_argument('--tree-file', help='Script tree from JSON file')
    
    parser.add_argument('--verify', help='Known tweaked pubkey to verify against (32-byte hex)')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose output')
    
    args = parser.parse_args()
    
    # If no command-line arguments provided, use config values
    if not args.internal_pubkey and len(sys.argv) == 1:
        print("🔧 Using config values from file...")
        args.internal_pubkey = INTERNAL_PUBKEY
        args.verify = EXPECTED_TWEAKED_PUBKEY
        args.verbose = VERBOSE
        
        # Determine which script method to use based on config
        if SCRIPT_HEX is not None:
            args.script_hex = SCRIPT_HEX
        elif SCRIPT_ASM is not None:
            args.script_asm = SCRIPT_ASM
        elif SCRIPT_TREE is not None:
            # Create a temporary JSON file for the tree
            temp_fd, temp_path = tempfile.mkstemp(suffix='.json', text=True)
            try:
                with os.fdopen(temp_fd, 'w') as f:
                    json.dump(SCRIPT_TREE, f)
                args.tree_file = temp_path
            except:
                os.close(temp_fd)
                raise
        # If all are None, it's key-path only (no scripts)
    elif not args.internal_pubkey:
        parser.error("Internal pubkey required (either as argument or in config)")
        
    print(f"📋 Configuration:")
    print(f"   Internal pubkey: {args.internal_pubkey}")
    if hasattr(args, 'script_hex') and args.script_hex:
        print(f"   Script (hex): {args.script_hex}")
    if hasattr(args, 'script_asm') and args.script_asm:
        print(f"   Script (ASM): {args.script_asm}")
    if hasattr(args, 'tree_file') and args.tree_file:
        print(f"   Script tree file: {args.tree_file}")
    if args.verify:
        print(f"   Verify against: {args.verify}")
    print()
    
    try:
        # Parse internal pubkey
        internal_pubkey = ScriptParser.parse_hex(args.internal_pubkey)
        if len(internal_pubkey) != 32:
            raise ValueError("Internal pubkey must be 32 bytes")
        
        tweaker = TaprootTweaker()
        
        # Parse scripts
        script_tree_hash = None
        if args.script_hex:
            script = ScriptParser.parse_hex(args.script_hex)
            script_tree_hash = tweaker.build_tree_hash([script])
        elif args.script_asm:
            script = ScriptParser.parse_asm(args.script_asm)
            script_tree_hash = tweaker.build_tree_hash([script])
        elif args.script_file:
            result = ScriptParser.parse_file(args.script_file)
            if isinstance(result, list):
                script_tree_hash = tweaker.build_tree_hash(result)
            else:
                script_tree_hash = tweaker.build_tree_hash([result])
        elif args.tree_file:
            scripts = ScriptParser.parse_file(args.tree_file)
            if not isinstance(scripts, list):
                raise ValueError("Tree file must contain array of scripts")
            script_tree_hash = tweaker.build_tree_hash(scripts)
        
        # Compute tweaked pubkey
        tweaked_pubkey = tweaker.tweak_pubkey(internal_pubkey, script_tree_hash)
        tweaked_hex = binascii.hexlify(tweaked_pubkey).decode()
        
        # Output results
        print(f"Internal pubkey:  {args.internal_pubkey}")
        if script_tree_hash:
            print(f"Script tree hash: {binascii.hexlify(script_tree_hash).decode()}")
        else:
            print("Script tree hash: (none - key-path only)")
        print(f"Tweaked pubkey:   {tweaked_hex}")
        
        # Verification
        if args.verify:
            expected = args.verify.lower()
            actual = tweaked_hex.lower()
            if expected == actual:
                print("✓ VERIFICATION PASSED")
            else:
                print("✗ VERIFICATION FAILED")
                print(f"Expected: {expected}")
                print(f"Got:      {actual}")
                sys.exit(1)
        
        if args.verbose:
            print("\nDetailed Information:")
            print(f"Internal pubkey (bytes): {len(internal_pubkey)}")
            if script_tree_hash:
                print(f"Script tree hash (bytes): {len(script_tree_hash)}")
            print(f"Tweaked pubkey (bytes): {len(tweaked_pubkey)}")
    
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
    
    finally:
        # Clean up temporary file if created
        if hasattr(args, 'tree_file') and args.tree_file and SCRIPT_TREE is not None:
            try:
                os.unlink(args.tree_file)
            except:
                pass  # Ignore cleanup errors

if __name__ == "__main__":
    main()