# SVM Token Analyzer

A comprehensive toolkit for analyzing SPL tokens on the Solana blockchain. This analyzer follows the same modular architecture as the EVM analyzer, providing detailed insights into token properties, security, governance, and metadata.

## 🚀 Features

### Core Analysis Capabilities
- **Basic Token Properties**: Supply, decimals, authorities, program type
- **Metadata Analysis**: Token name, symbol, description, image (Metaplex & Token 2022)
- **Security Assessment**: Authority analysis, risk scoring, governance structure
- **Supply Analysis**: Total/circulating supply, holder distribution
- **Governance Analysis**: DAO governance detection, multisig analysis

### Supported Networks
- **Mainnet** (`mainnet-beta`)
- **Devnet** (`devnet`) 
- **Testnet** (`testnet`)

### Token Standards
- **SPL Token** (Traditional SPL tokens)
- **SPL Token 2022** (Enhanced tokens with extensions)
- **Metaplex NFTs** (Basic metadata parsing)

## 📁 Project Structure

```
svm/
├── modules/                     # Modular components
│   ├── config.py               # Network configurations
│   ├── program_inspection.py   # Program/account analysis
│   ├── token_analysis.py       # SPL token analysis
│   └── __init__.py
├── token_analyzer.py           # Main analyzer script
├── demo_modular_usage.py       # Usage examples
├── requirements.txt            # Dependencies
└── README.md                   # This file
```

## 🛠️ Installation

### 1. Create Virtual Environment
```bash
cd researchers/analyzers/svm
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
# Solana RPC URLs (optional - defaults to public endpoints)
SOLANA_MAINNET_RPC_URL=https://api.mainnet-beta.solana.com
SOLANA_DEVNET_RPC_URL=https://api.devnet.solana.com
SOLANA_TESTNET_RPC_URL=https://api.testnet.solana.com

# Optional: Solana API key for enhanced rate limits
SOLANA_API_KEY=your_api_key_here
```

## 🎯 Quick Start

### Basic Token Analysis
```python
from modules.config import get_network_config
from modules.token_analysis import TokenAnalyzer

# Initialize analyzer
config = get_network_config("mainnet")
analyzer = TokenAnalyzer(config.rpc_url)

# Analyze a token
usdc_mint = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
analysis = analyzer.analyze_token(usdc_mint)

print(f"Token: {analysis['basic_info']['supply']:,}")
print(f"Security Score: {analysis['security_analysis']['security_score']}/100")
```

### Run Complete Analysis
```bash
# Edit token_analyzer.py configuration
python token_analyzer.py
```

## 📋 Configuration

### Supported Networks
```python
SUPPORTED_NETWORKS = ["mainnet", "devnet", "testnet"]
```

### Analysis Targets
Edit `token_analyzer.py`:
```python
NETWORK = "mainnet"  # Target network
TOKEN_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"  # USDC
WRAPPER_NAME = "USD Coin"
PROJECT_NAME = "Centre"
```

## 🔍 Analysis Components

### 1. Basic Token Information
- Supply and decimals
- Mint and freeze authorities
- Token program (SPL vs Token 2022)
- Initialization status

### 2. Metadata Analysis
- **Metaplex**: Standard NFT/token metadata
- **Token 2022**: Native metadata extension
- Name, symbol, description, image
- External URLs and attributes

### 3. Security Assessment
- Authority analysis (wallet vs program)
- Governance program detection
- Risk factor identification
- Security scoring (0-100)

### 4. Supply & Distribution
- Total and circulating supply
- Holder count estimation
- Largest holder analysis
- Supply concentration metrics

### 5. Governance Analysis
- Governance type classification
- DAO governance detection
- Multisig analysis
- Authority decentralization

## 🧩 Modular Usage

### Individual Components
```python
# Network configuration
from modules.config import get_network_config, get_explorer_url

# Program inspection
from modules.program_inspection import ProgramInspector
inspector = ProgramInspector(rpc_url)
is_spl = inspector.is_spl_token(mint_address)

# Token analysis
from modules.token_analysis import TokenAnalyzer
analyzer = TokenAnalyzer(rpc_url)
metadata = analyzer.get_token_metadata(mint_address)
```

### Demo Script
```bash
python demo_modular_usage.py
```

## 📊 Output Format

### JSON Report Structure
```json
{
  "mint_address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  "basic_info": {
    "supply": 24045776459130463,
    "decimals": 6,
    "mint_authority": "2wmVCSfPxGPjrnMMn7rchp4uaeoTqN39mXFC2zhPdri9",
    "freeze_authority": "3sNBr7kMccME5D55xNgsmYpZnzPgP2g12CixAajXypn6"
  },
  "metadata": {
    "name": "USD Coin",
    "symbol": "USDC"
  },
  "security_analysis": {
    "security_score": 50,
    "risk_factors": ["Has mint authority", "Has freeze authority"]
  },
  "governance_info": {
    "governance_type": "Centralized"
  }
}
```

### Markdown Report
- Comprehensive human-readable summary
- Risk assessment with recommendations
- Explorer links and metadata
- Security score breakdown

## 🔧 Advanced Configuration

### Custom RPC Endpoints
```python
# Use custom RPC for better performance
config = NetworkConfig(
    rpc_url="https://your-custom-rpc.com",
    cluster_name="mainnet-beta",
    explorer_base="https://explorer.solana.com"
)
```

### Analysis Customization
```python
# Customize analysis depth
analyzer = TokenAnalyzer(rpc_url)
analysis = analyzer.analyze_token(
    mint_address, 
    include_holders=True,
    max_holders=50
)
```

## 🐛 Troubleshooting

### Common Issues

**1. RPC Rate Limits**
```bash
# Use premium RPC endpoint
SOLANA_MAINNET_RPC_URL=https://your-premium-rpc.com
```

**2. Network Timeouts**
```python
# Increase timeout in analyzer
import solana.rpc.api
client = Client(rpc_url, timeout=30)
```

**3. Missing Dependencies**
```bash
pip install --upgrade solana borsh-python
```

## 🔄 Comparison with EVM Analyzer

| Feature | EVM Analyzer | SVM Analyzer |
|---------|--------------|--------------|
| Networks | Ethereum, Polygon, etc. | Solana clusters |
| Standards | ERC-20, EIP-1967 | SPL Token, Token 2022 |
| Governance | Gnosis Safe, Timelock | Realms, Squads |
| Metadata | Contract calls | Metaplex, extensions |
| Proxies | EIP-1967 detection | Program upgrades |

## 🚧 Future Enhancements

- **NFT Analysis**: Comprehensive NFT metadata parsing
- **DeFi Integration**: AMM pool analysis, liquidity metrics  
- **Historical Data**: Price history, transaction analysis
- **Cross-chain**: Wormhole bridge analysis
- **Performance**: Async processing, caching
- **Advanced Governance**: Realms DAO analysis

## 📞 Support

For issues or questions:
1. Check existing issues in the repository
2. Review the troubleshooting section
3. Create a new issue with:
   - Error message
   - Network and token being analyzed
   - Steps to reproduce

## 📄 License

This project follows the same license as the main bitcoinlayers repository.


