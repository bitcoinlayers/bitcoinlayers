# SPL Token Analysis Report

## Token Information
- **Mint Address**: `3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh`
- **Network**: mainnet
- **Wrapper Name**: bitgo_wbtc
- **Analysis Date**: 2025-08-26 18:38:39 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh)

## Basic Properties
- **Supply**: 326,261,573,005
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 326,261,573,005
- **Circulating Supply**: 326261573005
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: BCD75RNBHrJJpW4dXVagL5mPjzRLnVZq4YirJdjEYMV7
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
- **Address**: `BCD75RNBHrJJpW4dXVagL5mPjzRLnVZq4YirJdjEYMV7`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

#### Update Authority
- **Address**: `BCD75RNBHrJJpW4dXVagL5mPjzRLnVZq4YirJdjEYMV7`
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
