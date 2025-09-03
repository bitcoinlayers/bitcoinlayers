# SPL Token Analysis Report

## Token Information
- **Mint Address**: `FRAGB4KZGLMy3wH1nBajP3Q17MHnecEvTPT6wb4pX5MB`
- **Network**: mainnet
- **Wrapper Name**: fragmetric_fragbtc
- **Analysis Date**: 2025-09-03 18:26:48 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/FRAGB4KZGLMy3wH1nBajP3Q17MHnecEvTPT6wb4pX5MB)

> **⚠️ Token 2022 Detected - Manual Authority Verification Required**  
> This token uses SPL Token 2022 with advanced features and extensions. Authority detection for Token 2022 is disabled in this analyzer.  
> **Please manually verify all authorities (Mint, Freeze, Update) on [Solscan](https://solscan.io/token/FRAGB4KZGLMy3wH1nBajP3Q17MHnecEvTPT6wb4pX5MB) or other block explorers.**


## Basic Properties
- **Supply**: 8,202,703,718
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
- **Is Token 2022**: True

## Metadata
- **Name**: Token 2022
- **Symbol**: T22
- **Description**: Token with Token 2022 metadata extension

## Supply Analysis
- **Total Supply**: 8,202,703,718
- **Circulating Supply**: 8202703718
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: DGWv49JvpJcy23UNUqGRuex9FVK8v5dnBdDowszY4RFG
- **Freeze Authority**: None
- **Is Mutable**: True
- **Security Score**: 70/100

### Risk Factors
- Has mint authority - tokens can be minted

## Governance Analysis
- **Governance Type**: Centralized
- **Overall Risk Score**: 5.0/10

### Authority Analysis

#### Mint Authority
- **Address**: `DGWv49JvpJcy23UNUqGRuex9FVK8v5dnBdDowszY4RFG`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

### Recommendations
- Consider decentralizing mint_authority - current setup is high risk

---
*Analysis performed using SVM Token Analyzer v1.0.0*
