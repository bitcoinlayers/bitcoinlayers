# SPL Token Analysis Report

## Token Information
- **Mint Address**: `21BTCo9hWHjGYYUQQLqjLgDBxjcn8vDt4Zic7TB3UbNE`
- **Network**: mainnet
- **Wrapper Name**: 21shares_21btc
- **Analysis Date**: 2025-09-03 20:10:21 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/21BTCo9hWHjGYYUQQLqjLgDBxjcn8vDt4Zic7TB3UbNE)

## Basic Properties
- **Supply**: 746,269,456
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 746,269,456
- **Circulating Supply**: 746269456
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 21co44cadi5BCQ5bE45vR3Fjf1mkfryYnxq9G61MJhzj
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
- **Address**: `21co44cadi5BCQ5bE45vR3Fjf1mkfryYnxq9G61MJhzj`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

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
