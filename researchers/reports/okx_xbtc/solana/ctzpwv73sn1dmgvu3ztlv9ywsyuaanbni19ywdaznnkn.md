# SPL Token Analysis Report

## Token Information
- **Mint Address**: `CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn`
- **Network**: mainnet
- **Wrapper Name**: okx_xbtc
- **Analysis Date**: 2025-08-25 23:52:52 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/CtzPWv73Sn1dMGVU3ZtLv9yWSyUAanBni19YWDaznnkn)

## Basic Properties
- **Supply**: 67,554,036,853
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 67,554,036,853
- **Circulating Supply**: 67554036853
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: 11129c62PckstoYBevxm5MdMSLFvhZnFVm89niDYWUd
- **Freeze Authority**: 1118vDFkdpd4fqqurQuCvsLVR7vcTmjg3iwxJCRrKGm
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
- **Address**: `11129c62PckstoYBevxm5MdMSLFvhZnFVm89niDYWUd`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

#### Freeze Authority
- **Address**: `1118vDFkdpd4fqqurQuCvsLVR7vcTmjg3iwxJCRrKGm`
- **Type**: Non-existent
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Address does not exist

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
