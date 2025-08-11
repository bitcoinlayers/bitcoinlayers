# 🚀 Quick Usage Guide

## Method 1: Edit Config in File (Recommended)

**This is the easiest method!** Just edit the values directly in the script.

### Step 1: Open `taproot_tweaker.py`
Look for the CONFIG section around line 36:

```python
# =============================================================================  
# CONFIG SECTION - EDIT YOUR VALUES HERE
# =============================================================================

# Your internal public key (32-byte hex string)  
INTERNAL_PUBKEY = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"

# Choose ONE of the following script input methods:

# Option 1: Single script as hex string
SCRIPT_HEX = "ac"  # Example: OP_CHECKSIG

# Option 2: Single script as human-readable ASM (set SCRIPT_HEX to None to use this)
SCRIPT_ASM = "OP_CHECKSIG"

# Option 3: Multiple scripts for script tree (set both SCRIPT_HEX and SCRIPT_ASM to None to use this)
SCRIPT_TREE = [
    "OP_CHECKSIG",
    "20ac9a78651ac51ba3b2d6e7f1234567890abcdef1234567890abcdef OP_CHECKSIGVERIFY OP_1",
    "ac51"
]

# Expected tweaked pubkey for verification (optional)
EXPECTED_TWEAKED_PUBKEY = None  # Set to hex string to verify

# Enable verbose output
VERBOSE = True
```

### Step 2: Edit Your Values

**Replace with your actual values:**

```python
# Your internal pubkey (replace this!)
INTERNAL_PUBKEY = "your_32_byte_internal_pubkey_here"

# For a single script in hex:
SCRIPT_HEX = "your_script_hex_here"
SCRIPT_ASM = None  # Set to None when using SCRIPT_HEX
SCRIPT_TREE = None

# OR for human-readable script:
SCRIPT_HEX = None
SCRIPT_ASM = "OP_DUP OP_HASH160 20yourpubkeyhash OP_EQUALVERIFY OP_CHECKSIG"
SCRIPT_TREE = None

# OR for key-path only (no scripts):
SCRIPT_HEX = None
SCRIPT_ASM = None
SCRIPT_TREE = None

# Optional verification:
EXPECTED_TWEAKED_PUBKEY = "expected_result_from_tweet_or_online"
```

### Step 3: Run the Script

```bash
cd researchers/taproot-key-tweaker
source venv/bin/activate
python taproot_tweaker.py
```

**That's it!** The script will use your config values and output the tweaked pubkey.

## Example Configurations

### Example 1: Simple OP_CHECKSIG
```python
INTERNAL_PUBKEY = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
SCRIPT_HEX = "ac"
SCRIPT_ASM = None
SCRIPT_TREE = None
EXPECTED_TWEAKED_PUBKEY = None
VERBOSE = True
```

### Example 2: P2PKH-style Script
```python
INTERNAL_PUBKEY = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
SCRIPT_HEX = None
SCRIPT_ASM = "OP_DUP OP_HASH160 20abcd1234567890abcdef1234567890abcdef12 OP_EQUALVERIFY OP_CHECKSIG"
SCRIPT_TREE = None
EXPECTED_TWEAKED_PUBKEY = None
VERBOSE = True
```

### Example 3: Key-Path Only (No Scripts)
```python
INTERNAL_PUBKEY = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
SCRIPT_HEX = None
SCRIPT_ASM = None
SCRIPT_TREE = None
EXPECTED_TWEAKED_PUBKEY = None
VERBOSE = True
```

### Example 4: With Verification
```python
INTERNAL_PUBKEY = "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
SCRIPT_HEX = "ac"
SCRIPT_ASM = None
SCRIPT_TREE = None
EXPECTED_TWEAKED_PUBKEY = "254c73a45365487c8ea38e1ab5fab262ceedecb92cd6cfda39390d954962bc86"
VERBOSE = True
```

## What You'll See

When you run the script successfully:

```
🔧 Using config values from file...
📋 Configuration:
   Internal pubkey: 79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798
   Script (hex): ac

Internal pubkey:  79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798
Script tree hash: 5e3292d70d7978a22de4a89f965ca85059359b319731c759ed19873db781a211
Tweaked pubkey:   254c73a45365487c8ea38e1ab5fab262ceedecb92cd6cfda39390d954962bc86

Detailed Information:
Internal pubkey (bytes): 32
Script tree hash (bytes): 32
Tweaked pubkey (bytes): 32
```

The **Tweaked pubkey** is what you'll find on the blockchain - this is what you can verify against tweets or online sources!

## Troubleshooting

- **"Internal pubkey must be 32 bytes"**: Your hex string should be exactly 64 characters (32 bytes)
- **"Failed to compute tweaked pubkey"**: Your internal pubkey isn't a valid secp256k1 point
- **"coincurve library required"**: Run `pip install coincurve` in your virtual environment
- **Syntax errors**: Make sure you're using `python3`, not `python` (Python 2)