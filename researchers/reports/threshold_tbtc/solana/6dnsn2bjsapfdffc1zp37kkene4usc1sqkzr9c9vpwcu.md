# SPL Token Analysis Report

## Token Information
- **Mint Address**: `6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU`
- **Network**: mainnet
- **Wrapper Name**: threshold_tbtc
- **Analysis Date**: 2025-08-25 21:35:49 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU)

## Basic Properties
- **Supply**: 6,477,403,009
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 6,477,403,009
- **Circulating Supply**: 6477403009
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 111wQfXaC7e7paLGoKqp2KnfZPEd3nZV8Yrw2KQ1oZ
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
- **Address**: `111wQfXaC7e7paLGoKqp2KnfZPEd3nZV8Yrw2KQ1oZ`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

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
