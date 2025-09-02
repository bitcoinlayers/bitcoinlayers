# SPL Token Analysis Report

## Token Information
- **Mint Address**: `21BTCo9hWHjGYYUQQLqjLgDBxjcn8vDt4Zic7TB3UbNE`
- **Network**: mainnet
- **Wrapper Name**: 21shares_21btc
- **Analysis Date**: 2025-08-25 23:54:16 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/21BTCo9hWHjGYYUQQLqjLgDBxjcn8vDt4Zic7TB3UbNE)

## Basic Properties
- **Supply**: 546,269,456
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 546,269,456
- **Circulating Supply**: 546269456
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 111gYDSeg2Pv2YVUtVjJdBWnT5vSBd4xbP3VHRCcf3
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
- **Address**: `111gYDSeg2Pv2YVUtVjJdBWnT5vSBd4xbP3VHRCcf3`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

#### Update Authority
- **Address**: `21co44cadi5BCQ5bE45vR3Fjf1mkfryYnxq9G61MJhzj`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Full unilateral control (no multi-party approval required)

### Recommendations
- Consider decentralizing mint_authority - current setup is high risk
- Consider decentralizing update_authority - current setup is high risk

---
*Analysis performed using SVM Token Analyzer v1.0.0*
