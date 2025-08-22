# MoveVM Token Analyzer

A comprehensive toolkit for analyzing tokens on Move-based blockchains (Aptos, Sui). This analyzer follows the same modular architecture as the EVM and SVM analyzers, providing detailed insights into token properties, security, governance, and metadata.

## 🚀 Features

### Core Analysis Capabilities
- **Basic Token Properties**: Supply, decimals, authorities, ownership
- **Metadata Analysis**: Token name, symbol, description, image
- **Security Assessment**: Authority analysis, risk scoring, governance structure
- **Supply Analysis**: Total/circulating supply, holder distribution
- **Governance Analysis**: DAO governance detection, multisig analysis

### Supported Networks
- **Aptos** (`aptos-mainnet`)
- **Sui** (`sui-mainnet`)
- **Movement** (`movement-mainnet`)

### Token Standards
- **Aptos Coin** (Native Aptos token standard)
- **Sui Coin** (Native Sui token standard)
- **Custom Move Objects** (Custom token implementations)

## 📁 Project Structure

```
movevm/
├── modules/                     # Modular components
│   ├── config.py               # Network configurations
│   ├── move_inspection.py      # Move object/module analysis
│   ├── token_analysis.py       # Move token analysis
│   └── __init__.py
├── token_analyzer.py           # Main analyzer script
├── demo_modular_usage.py       # Usage examples
├── requirements.txt            # Dependencies
└── README.md                   # This file
```

## 🛠️ Installation

### 1. Create Virtual Environment
```bash
cd researchers/analyzers/movevm
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Environment Setup
Create a `.env.local` file in the project root with:

```bash
# Move RPC URLs (optional - defaults to public endpoints)
APTOS_MAINNET_RPC_URL=https://fullnode.mainnet.aptoslabs.com/v1
SUI_MAINNET_RPC_URL=https://fullnode.mainnet.sui.io:443
MOVEMENT_MAINNET_RPC_URL=https://mevm.devnet.m1.movementlabs.xyz
```

## 📝 Usage

### Basic Token Analysis

```python
from movevm.token_analyzer import analyze_move_token

# Analyze an Aptos token
analysis = analyze_move_token(
    network="aptos-mainnet",
    coin_type="0x1::aptos_coin::AptosCoin",
    wrapper_name="aptos-coin",
    project_name="Aptos Native"
)

# Analyze a Sui token  
analysis = analyze_move_token(
    network="sui-mainnet",
    coin_type="0x2::sui::SUI",
    wrapper_name="sui-coin",
    project_name="Sui Native"
)
```

### Modular Usage

```python
from movevm.modules.token_analysis import MoveTokenAnalyzer
from movevm.modules.config import get_network_config

# Initialize for specific network
config = get_network_config("aptos-mainnet")
analyzer = MoveTokenAnalyzer(config.rpc_url)

# Analyze token
result = analyzer.analyze_token("0x1::aptos_coin::AptosCoin")
```

## 🔧 API Reference

### Token Analysis Result

```json
{
    "coin_type": "0x1::aptos_coin::AptosCoin",
    "basic_info": {
        "name": "Aptos Coin", 
        "symbol": "APT",
        "decimals": 8,
        "supply": 1000000000,
        "is_initialized": true
    },
    "metadata": {
        "name": "Aptos Coin",
        "symbol": "APT", 
        "description": "Native token of Aptos blockchain",
        "image": null,
        "external_url": "https://aptoslabs.com"
    },
    "supply_info": {
        "total_supply": 1000000000,
        "circulating_supply": 500000000,
        "max_supply": null
    },
    "security_analysis": {
        "has_mint_capability": false,
        "has_burn_capability": false,
        "is_mutable": false,
        "security_score": 95,
        "risk_factors": ["No major risk factors identified"]
    },
    "governance_info": {
        "governance_type": "decentralized",
        "authority_analyses": {},
        "overall_risk_score": 5
    }
}
```

