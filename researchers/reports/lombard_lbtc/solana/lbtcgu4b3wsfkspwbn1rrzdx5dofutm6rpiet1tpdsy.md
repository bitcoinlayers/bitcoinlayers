# SPL Token Analysis Report

## Token Information
- **Mint Address**: `LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY`
- **Network**: mainnet
- **Wrapper Name**: lombard_lbtc
- **Analysis Date**: 2025-09-03 17:30:53 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/LBTCgU4b3wsFKsPwBn1rRZDx5DoFutM6RPiEt1TPDsY)

## Basic Properties
- **Supply**: 38,971,767,620
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 38,971,767,620
- **Circulating Supply**: 38971767620
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 2YB3LPB4Tdb1ccmEFqhK3ZEKLFzCPayUwzEU5J1DXSzK
- **Freeze Authority**: HzCyQqcAoxAHeqHAWH1RQbfw7GNUzinqSWideGj7ZtEE
- **Is Mutable**: True
- **Security Score**: 50/100

### Risk Factors
- Has mint authority - tokens can be minted
- Has freeze authority - accounts can be frozen

## Governance Analysis
- **Governance Type**: Centralized
- **Overall Risk Score**: 5.0/10

### Authority Analysis

#### Mint Authority
- **Address**: `2YB3LPB4Tdb1ccmEFqhK3ZEKLFzCPayUwzEU5J1DXSzK`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

#### Freeze Authority
- **Address**: `HzCyQqcAoxAHeqHAWH1RQbfw7GNUzinqSWideGj7ZtEE`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Freeze any token account instantly
  - Unfreeze any token account instantly
  - Change freeze authority to any address
  - Full unilateral control (no multi-party approval required)

#### Update Authority
- **Address**: `HzCyQqcAoxAHeqHAWH1RQbfw7GNUzinqSWideGj7ZtEE`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Full unilateral control (no multi-party approval required)

### Recommendations
- Consider decentralizing mint_authority - current setup is high risk
- Consider decentralizing freeze_authority - current setup is high risk
- Consider decentralizing update_authority - current setup is high risk

---
*Analysis performed using SVM Token Analyzer v1.0.0*
