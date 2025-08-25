# SPL Token Analysis Report

## Token Information
- **Mint Address**: `8yev7nLen2PFN2uYGhzsUbu243wMa9z4ZrCwuXs6DEQw`
- **Network**: mainnet
- **Wrapper Name**: rootstock_rbtc
- **Analysis Date**: 2025-08-25 21:45:25 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/8yev7nLen2PFN2uYGhzsUbu243wMa9z4ZrCwuXs6DEQw)

## Basic Properties
- **Supply**: 1,344,000
- **Decimals**: 9
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 1,344,000
- **Circulating Supply**: 1344000
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 111iLhnSR3VviYvV7xDDFEFQYfJNRCdwGaaqqauhkp
- **Freeze Authority**: 111iLhnSR3VviYvV7xDDFEFQYfJNRCdwGaaqqauhkp
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
- **Address**: `111iLhnSR3VviYvV7xDDFEFQYfJNRCdwGaaqqauhkp`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

#### Freeze Authority
- **Address**: `111iLhnSR3VviYvV7xDDFEFQYfJNRCdwGaaqqauhkp`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

#### Update Authority
- **Address**: `DMbYvx7cxgXg2ZsZ7g2Vxw4Nj7ZLKvyHqogr8YpyFfFq`
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
