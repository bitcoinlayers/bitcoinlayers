# SPL Token Analysis Report

## Token Information
- **Mint Address**: `9hX59xHHnaZXLU6quvm5uGY2iDiT3jczaReHy6A6TYKw`
- **Network**: mainnet
- **Wrapper Name**: zenrock_zenbtc
- **Analysis Date**: 2025-09-03 20:05:46 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/9hX59xHHnaZXLU6quvm5uGY2iDiT3jczaReHy6A6TYKw)

## Basic Properties
- **Supply**: 5,988,818,395
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 5,988,818,395
- **Circulating Supply**: 5988818395
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: E7AxNdStGFka5JQvpbYZEitr83idsy135ccHHiH5E7Bk
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
- **Address**: `E7AxNdStGFka5JQvpbYZEitr83idsy135ccHHiH5E7Bk`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

#### Update Authority
- **Address**: `4m3vcaUQc5jx9xUBHERYCRvvbk5oUzmuKLej42639PSH`
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
