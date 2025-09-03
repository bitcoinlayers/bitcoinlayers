# SPL Token Analysis Report

## Token Information
- **Mint Address**: `6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU`
- **Network**: mainnet
- **Wrapper Name**: threshold_tbtc
- **Analysis Date**: 2025-09-03 19:12:52 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU)

## Basic Properties
- **Supply**: 6,436,556,809
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 6,436,556,809
- **Circulating Supply**: 6436556809
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 2PfR3xUdMS8xHUhE9H47dy2Ro3Ww9agP5GdnNoKj3Vtf
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
- **Address**: `2PfR3xUdMS8xHUhE9H47dy2Ro3Ww9agP5GdnNoKj3Vtf`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

#### Update Authority
- **Address**: `2PfR3xUdMS8xHUhE9H47dy2Ro3Ww9agP5GdnNoKj3Vtf`
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
