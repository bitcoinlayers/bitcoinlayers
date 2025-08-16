# Ethereum Token Contract Analyzer

A comprehensive Python script that analyzes Ethereum token contracts to discover all roles, addresses, proxy patterns, and bridge contracts automatically.

## ✨ Features

- **🔍 Contract Verification**: Checks if contracts are verified on Etherscan
- **🔗 Proxy Detection**: Detects EIP-1967 upgradeable proxy contracts with implementation addresses
- **👥 Comprehensive Role Discovery**: Automatically finds ALL roles and addresses (owner, admin, bridge, minter, pauser, etc.)
- **🌉 Bridge Analysis**: Automatically analyzes bridge contracts when detected
- **📊 Address Classification**: Identifies whether addresses are contracts or EOAs
- **🎯 Smart ABI Selection**: Uses implementation ABI for proxy contracts to discover all functions
- **📋 Organized Output**: Groups roles by category with direct Etherscan links

## 📋 Requirements

- Python 3.7+
- Valid Alchemy RPC endpoint
- Etherscan API key

## 🚀 Installation

1. **Create a virtual environment:**
```bash
python3 -m venv venv
```

2. **Activate virtual environment and install dependencies:**
```bash
source venv/bin/activate && pip install -r requirements.txt
```

## ⚙️ Configuration

Before running the script, you need to set up your API credentials in the environment file:

1. **Create/Update `.env`** in the project root (two directories up from this tool):

```bash
# Add these lines to your .env file
CHAIN_ID = 1  # https://docs.etherscan.io/etherscan-v2/supported-chains
TOKEN_ADDRESS = "0x18084fbA666a33d37592fA2633fD49a74DD93a88"
LAYER_NAME = "Ethereum"
WRAPPER_NAME = "Threshold Network tBTC"
GETH_RPC_URL=https://sepolia.infura.io/v3/<INFURA_API_TOKEN>
ETHERSCAN_V2_KEY=
```

2. **Update the token address** in `token_analyzer.py`:
```python
# Update this line in the script
TOKEN_ADDRESS = "0xYOUR_TOKEN_CONTRACT_ADDRESS"
```

**Note:** The API credentials are now securely stored in `.env` and automatically loaded by the script. This keeps sensitive information out of the codebase.

### 🔑 Getting API Keys

1. **Alchemy**: Sign up at [alchemy.com](https://alchemy.com) and create an Ethereum Mainnet app
2. **Etherscan**: Sign up at [etherscan.io](https://etherscan.io) and generate an API key

## 🎯 Usage

**Run the analyzer:**
```bash
source venv/bin/activate && python token_analyzer.py
```

**To analyze different contracts:** Just change the `TOKEN_ADDRESS` in the script and run again!

## 📊 Sample Output

```
🔍 Ethereum Token Contract Analyzer
==================================================
Analyzing contract: 0xd9E3719F53b61047D5Bbbe9E3FB18eA1E07B1B02
==================================================
1. Fetching contract ABI from Etherscan...
   ✅ Contract is verified on Etherscan

2. Checking for proxy pattern (EIP-1967)...
   ✅ Contract is an upgradeable proxy
   📍 Implementation: 0xA1af002c45D253662dD37557c70126dA98687731

3. Discovering contract roles and addresses...
   🔄 Proxy detected - fetching implementation ABI for complete analysis...
   ✅ Implementation contract is verified - using implementation ABI
   🔍 Found 17 total view functions
   🔍 Found 4 address-returning functions with no inputs
   ✅ Found 2 role/address functions
   👤 owner: 0x2728df4D22253004C017675bd609962cD641D797 (Contract)
   👤 bridge: 0x4b012E8980ed331a626bA2d2E510B20cB54886de (Contract)

======================================================================
CONTRACT ANALYSIS SUMMARY
======================================================================
Contract Address:      0xd9E3719F53b61047D5Bbbe9E3FB18eA1E07B1B02
Verified on Etherscan: ✅ Yes
Upgradeable Proxy:     ✅ Yes
Implementation:        0xA1af002c45D253662dD37557c70126dA98687731

📋 DISCOVERED ROLES & ADDRESSES (2 total)
----------------------------------------------------------------------

🏷️  OWNER ROLES:
   • owner                → 0x2728df4D22253004C017675bd609962cD641D797 (Contract)

🏷️  BRIDGE ROLES:
   • bridge               → 0x4b012E8980ed331a626bA2d2E510B20cB54886de (Contract)

🌉 BRIDGE CONTRACT ANALYSIS:
----------------------------------------------------------------------

📍 Bridge: bridge (0x4b012E8980ed331a626bA2d2E510B20cB54886de)
   ✅ Bridge contract is verified on Etherscan
   🔗 Bridge is upgradeable proxy
   📍 Implementation: 0x4E7ac856707495A6343c40fCD2519E4737c6B95E
   🔍 View on Etherscan: https://etherscan.io/address/0x4b012E8980ed331a626bA2d2E510B20cB54886de

======================================================================
```

## 🔍 What it Analyzes

1. **Contract Verification**: Uses Etherscan API to check if contracts are verified
2. **EIP-1967 Proxy Detection**: Checks storage slots to detect upgradeable proxy contracts
3. **Complete Role Discovery**: Scans all view functions returning addresses to find:
   - Owner/Admin roles
   - Bridge contracts (with automatic analysis)
   - Minter/Pauser/Upgrader roles
   - Treasury/Vault addresses
   - Governor/DAO addresses
   - Any other address-returning functions
4. **Address Analysis**: Determines if each address is a contract or EOA
5. **Bridge Contract Analysis**: Automatically analyzes discovered bridge contracts
6. **Smart ABI Handling**: For proxies, fetches implementation ABI for complete function discovery

## 🛠️ Error Handling

The script handles various scenarios:
- Network connection issues
- Unverified contracts (proxy or implementation)
- Missing functions or deprecated interfaces
- API rate limits and timeouts
- Invalid contract addresses

## 🚀 Future Enhancements

- Command-line arguments for different addresses
- Multi-chain support (Polygon, BSC, Arbitrum)
- Batch analysis of multiple contracts
- Export results to JSON/CSV
- Token holder analysis
- Gas optimization suggestions

## 📄 License

MIT License - see LICENSE file for details