# Advanced Taproot Transaction Analysis

**Transaction ID:** 813d045729cbf9d40d80d45c6d7ad7318e3a684526cba32257cea95347975686
**Network:** mainnet
**Wrapper/Protocol:** Lombard Lbtc
**Analysis Date:** 2025-08-12 20:18:02 UTC
**Analysis Type:** Advanced Taproot Deep Dive
**Integration Target:** btc_custody_section

## 🌳 Taproot Script Tree Analysis

### Input 0: Script Path Spend

**Witness Stack Items:** 3

- **schnorr_signature**: Schnorr signature (64 bytes)
- **tapscript**: Tapscript being executed
- **control_block**: Taproot control block (version: 192)

**Control Block Analysis:**
- Version: 192
- Parity: 0
- Internal Key: `50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0`
- Merkle Path Length: 1 nodes

**Executed Script Analysis:**
- Script Type: Sequence-locked Script
- Required Signatures: 0
- Spending Conditions: Sequence lock requirement

**Complete Tapscript:**
```
2005ff2bedd40edb6f1997b30e5561ab8f9d710f7216303a7b9e8426f1cef25411ad02f003b2
```

**Opcode Breakdown:**
 1. **PUSH_32** `05ff2bedd40edb6f1997b30e5561ab8f9d710f7216303a7b9e8426f1cef25411`
 2. **OP_CHECKSIGVERIFY**
 3. **PUSH_2** `f003`
 4. **OP_CHECKSEQUENCEVERIFY**

**Script Execution Flow:**
4. **Public keys and parameters:**
   - Pubkey 1: `05ff2bedd40edb6f...` (32 bytes)
   - Data 2: `f003...` (2 bytes)
