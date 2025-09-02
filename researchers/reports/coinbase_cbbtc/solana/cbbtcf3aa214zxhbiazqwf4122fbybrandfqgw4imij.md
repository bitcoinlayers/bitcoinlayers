# SPL Token Analysis Report

## Token Information
- **Mint Address**: `cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij`
- **Network**: mainnet
- **Wrapper Name**: coinbase_cbbtc
- **Analysis Date**: 2025-08-26 14:33:04 UTC
- **Explorer**: [View on Solana Explorer](https://explorer.solana.com/address/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij)

## Basic Properties
- **Supply**: 328,089,577,669
- **Decimals**: 8
- **Is Initialized**: True
- **Token Program**: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA
- **Is Token 2022**: False

## Metadata
- **Name**: Metaplex Token
- **Symbol**: META
- **Description**: Token with Metaplex metadata

## Supply Analysis
- **Total Supply**: 328,089,577,669
- **Circulating Supply**: 328089577669
- **Estimated Holders**: None

## Security Analysis
- **Mint Authority**: CTQE6PMesbH4szKR9Nk5moj9WWUr9MVGP734wYX9wy3p
- **Freeze Authority**: DSFAkPhfrSR95J9oq9Sh8rUetbj5vgFmwiSuHw6rAVnz
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
- **Address**: `CTQE6PMesbH4szKR9Nk5moj9WWUr9MVGP734wYX9wy3p`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Mint unlimited tokens
  - Change mint authority to any address
  - Burn tokens from any account
  - Full unilateral control (no multi-party approval required)

#### Freeze Authority
- **Address**: `DSFAkPhfrSR95J9oq9Sh8rUetbj5vgFmwiSuHw6rAVnz`
- **Type**: Wallet
- **Risk Level**: high
- **Risk Score**: N/A/10
- **Capabilities**:
  - Freeze any token account instantly
  - Unfreeze any token account instantly
  - Change freeze authority to any address
  - Full unilateral control (no multi-party approval required)

#### Update Authority
- **Address**: `Aanfr1oYnkNNLTMcL9KHUPv6ZhSV8XwNxc9DJZhBj8u2`
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
