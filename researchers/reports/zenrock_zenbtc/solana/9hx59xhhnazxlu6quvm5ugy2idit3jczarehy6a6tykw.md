# SPL Token Analysis Report

## Token Information
- **Mint Address**: `9hX59xHHnaZXLU6quvm5uGY2iDiT3jczaReHy6A6TYKw`
- **Network**: mainnet
- **Wrapper Name**: zenrock_zenbtc
- **Analysis Date**: 2025-08-25 23:53:41 UTC
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
- **Mint Authority**: 1119qkNL2yrzq7tExQBCej8nLZNM4P82E85q2o8SHhL
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
- **Address**: `1119qkNL2yrzq7tExQBCej8nLZNM4P82E85q2o8SHhL`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

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
