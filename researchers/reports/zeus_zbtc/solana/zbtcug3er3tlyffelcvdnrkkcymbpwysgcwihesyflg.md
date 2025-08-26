# SPL Token Analysis Report

## Token Information
- **Mint Address**: `zBTCug3er3tLyffELcvDNrKkCymbPWysGcWihESYfLg`
- **Network**: mainnet
- **Wrapper Name**: zeus_zbtc
- **Analysis Date**: 2025-08-25 23:50:41 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/zBTCug3er3tLyffELcvDNrKkCymbPWysGcWihESYfLg)

## Basic Properties
- **Supply**: 33,352,861,498
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 33,352,861,498
- **Circulating Supply**: 33352861498
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 1118W5hnH5RwZyipjwjHCohqr9ffto5SNE1caFfgSGK
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
- **Address**: `1118W5hnH5RwZyipjwjHCohqr9ffto5SNE1caFfgSGK`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

#### Update Authority
- **Address**: `2k5eDEaFGXvVAfbDFHfQtP9PmGy2TRZ5eRppVGmnWvVc`
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
