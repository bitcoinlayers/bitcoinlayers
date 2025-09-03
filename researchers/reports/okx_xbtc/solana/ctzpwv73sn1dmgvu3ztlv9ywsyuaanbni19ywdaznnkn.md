# SPL Token Analysis Report

## Token Information
- **Mint Address**: `CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn`
- **Network**: mainnet
- **Wrapper Name**: okx_xbtc
- **Analysis Date**: 2025-09-03 11:25:58 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn)

## Basic Properties
- **Supply**: 67,654,151,587
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 67,654,151,587
- **Circulating Supply**: 67654151587
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 2hkCcczkANNHGxi3tMgtwsMHqQysEkBXmzpDXdqUBKWE
- **Freeze Authority**: CjoV5B96reuCfPh2rRK11G1QptG97jZdyZArTn3EN1Mj
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
- **Address**: `2hkCcczkANNHGxi3tMgtwsMHqQysEkBXmzpDXdqUBKWE`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

#### Freeze Authority
- **Address**: `CjoV5B96reuCfPh2rRK11G1QptG97jZdyZArTn3EN1Mj`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Freeze any token account instantly
  - Unfreeze any token account instantly
  - Change freeze authority to any address
  - Full unilateral control (no multi-party approval required)

#### Update Authority
- **Address**: `CjoV5B96reuCfPh2rRK11G1QptG97jZdyZArTn3EN1Mj`
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
