# 🔬 Contribute to Bitcoin Layers

Welcome to the Bitcoin Layers contributor folder. In this folder, you'll find the tools we use to write Bitcoin Layers reviews and how to contribute to the project. If you have questions after reviewing this document, message Janusz or watch this video of him writing a full review of a project.

## What goes into a Bitcoin Layers review

A bitcoin layers review contains a few different analyses. First, the reviews contain a trust assumption review where we analyze four key categories related to a specific network. Each of these sections requires their own analysis. After the analysis is complete on the trust assumption side, you should complete 

Let's break down what you need to cover this:

### Bitcoin custody

In this section, you should reveal a project's documentation on how they manage custody of funds backing a wrapped bitcoin asset. If you can deposit directly into the protocol, it's advised to run a test deposit transaction or find the deposit address for the two-way peg. If the deposit address has ever spent a transaction previously, you can take that TxID and run it through the Bitcoin Transaction Analyzer to get a breakdown on the Scripts used to spend a previous UTXO. This tells you what type of signing mechanism the protocol uses.

If the protocol is bitcoin native (state channels, arks, or statechains), you should review the deposit scripts for the protocol. If the protocol publishes the Scripts in their GitHub repos, take a script and run it through the Bitcoin Script Analyzer.

For projects that use Taproot, 

### Network operators

Most projects' source code do not reveal how many validators/operators/co-signers are paticipating in the network. You can usually find this information in the project's documentation site or their transaction/block explorer. 

### Data availability and Finality

This information is available in the project's source code for their current implementation. For data availability, we look to discover if the project's network operators satisfy the data availability requirement, if there's an open-source full validating node or RPC node implementation, or if the network uses another network for data availability. For finality assurances, we look to determine if the node software is a full validating node, that anyone can run, and if the protocol additionally checkpoints its state to bitcoin.

### Other analysis

In subsequent sections, you can cover how the project inherits security from bitcoin, the technology it uses, and what its usecases are. 

## Writing the review

Reviews are written directly in our GitHub. Before doing anything, you should create a project page based on the "Template" page in the /content/layers section. Add all information related to the introduction part of the review (name, description, type, etc.). After this, you can start analyzing the network's implementation details.

To assign scores, please refer to our Methodology page.

### Bitcoin custody

Each bitcoin wrapper, and custody mechanism for bitcoin native protocols, has a corresponding infrastructure page. The Layers reviews only use short snippets describing the custody model. Most custodial wrappers and federations describe their signing mechanism in their docs. To verify this, use the Bitcoin Transaction Analyzer on past spends from the custody address to validate how many signers participate. If some threshold signature schemes, we cannot verify it onchain. We must review docs and code repositories. For Taproot, try to see if the project published the entire Tapscript in their Github.

### Other sections

For the other sections, follow the instructions listed in the "What goes into a Bitcoin Layers review" section.

### Using snippets

A lot of content is reusable across various reviews. For example, if the network uses vUTXOs, you can use the vUTXO snippet in the review that pulls the content from content/props-layers-reviews.ts. You can do this by simply putting a snippet in a specific part of the review. It's advised that you review all snippets in the various props files before writing a review. We try to write as little text in the reviews as possible and use reusable snippets. If you notice a snippet is not in the props files, please add it!

                {
                    title: "Virtual UTXOs (vUTXOs)",
                    content: TechnologySnippet.vUTXO,
                },

## 🎯 Using analysis tools.

The tools below are used to validate trust assumptions related to networks' bitcoin custody mechanisms and the corresponding token contracts. To use the token analyzer, you need an API key from a service provider that serves a specific network. *Be sure to not expose your API key.*

### ⚡ **Bitcoin Script Analysis** 
- **Transaction Analysis**: Signature requirements, multisig detection, custody models
- **Weighted Voting Systems**: Custom multisig with voting weights and thresholds
- **Script Types**: P2PKH, P2SH, P2WPKH, P2WSH, P2TR, and custom scripts

### 🪙 **Token Contract Analysis**
- **ERC-20 Token Contracts**: Ownership, proxy patterns, roles, and permissions
- **Wrapped Bitcoin Tokens**: Custody mechanisms, minting/burning controls
- **Governance Tokens**: Voting mechanisms, admin roles, multisig configurations

### 🏛️ **Governance Analysis**
- **Bridge Contracts**: Cross-chain governance mechanisms
- **Proxy Contracts**: Upgrade patterns and admin controls
- **Role-Based Access**: Permission structures and key holders

*Governance analysis is used to further analyze specific roles within the token contract analysis.*

## 🚀 Quick Start

Please note project dependencies are tested against Python 3.10.16 and unlikely to be working in Python 3.12.

### Prerequisites
```bash
# 1. Install Python dependencies
cd token-analyzer
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# 2. Set up environment variables
cp .env.example .env
# Edit .env with your API keys
```

### 🔍 **Analyze a Token Contract**

```bash
# Run analysis
python3 token_analyzer.py
```

### ⚡ **Analyze Bitcoin Transactions**
```bash
# Edit configuration in bitcoin_transaction_analyzer.py
TXID = "cc51e201dd336b4b026864e1686c890aa686d7c64c1c31e3e3d70fdb56bdd719"
LAYER_NAME = "Nomic"

# Run analysis
python3 bitcoin_transaction_analyzer.py
```

### 🏛️ **Analyze Governance Contracts**
```bash
# Edit configuration in governance_analyzer.py
NETWORK = "bob"
TARGET_CONTRACT = "0x4200000000000000000000000000000000000010"
ASSOCIATED_TOKEN_CONTRACT = "0xA45d4121b3D47719FF57a947A9d961539Ba33204"
LAYER_NAME = "BOB"

# Run analysis
python3 governance_analyzer.py
```

## 📊 Output Structure

All analysis reports are organized by layer:
```
token-analyzer/
└── analysis-reports/
    ├── ethereum/
    │   ├── 0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.json
    │   └── 0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.md
    ├── bob/
    │   ├── governance_0x4200...10.md
    │   └── 0xa45d4121...204.json
    └── nomic/
        ├── bitcoin_transaction_cc51e201...719.json
        └── bitcoin_transaction_cc51e201...719.md
```

## 📝 **Report Types**

### JSON Reports
- **Machine-readable** data for integration with the Bitcoin Layers website
- Contains detailed analysis results, roles, governance details
- Used by frontend components to display analysis data

### Markdown Reports  
- **Human-readable** summaries for researchers
- Quick reference with key findings and links
- Perfect for sharing analysis results

## 🎯 **Research Workflow**

### 1. **Investigating a New Layer**
1. **Token Analysis**: Analyze the layer's wrapped Bitcoin token
2. **Governance Analysis**: Examine bridge contracts and governance mechanisms  
3. **Bitcoin Analysis**: Study the layer's Bitcoin custody transactions
4. **Integration**: Reports automatically appear in the layer's review page

### 2. **Updating Existing Reviews**
1. **Run analyzers** with updated configurations
2. **Files automatically saved** to correct layer directories
3. **Frontend updates** with new analysis data
4. **Review changes** in the layer's BTC custody section

### 3. **Comparative Analysis**
1. **Analyze multiple layers** using the same tools
2. **Compare custody models**, governance structures, and technical approaches
3. **Use JSON data** for automated comparisons and metrics

## 🛠️ **Advanced Features**

### **Weighted Multisig Detection**
The Bitcoin transaction analyzer can detect and parse complex weighted voting systems:
- **Individual voting weights** for each participant
- **Threshold score requirements** for transaction approval
- **Custom script patterns** like Nomic's weighted governance

### **Proxy Pattern Detection**
The token analyzer identifies various upgrade patterns:
- **EIP-1967 proxies** with implementation and admin detection
- **Gnosis Safe multisigs** with signer analysis
- **Custom upgrade mechanisms** in DeFi protocols

### **Cross-Layer Integration**
Analysis results automatically integrate with the Bitcoin Layers website:
- **Layer review pages** display custody analysis
- **Token contract sections** show governance details
- **API endpoints** serve analysis data to frontend components

## 🔗 **Integration with Bitcoin Layers**

The analysis tools are tightly integrated with the main Bitcoin Layers platform:

- **`/api/analysis/[address]`**: Serves token and governance analysis
- **`/api/bitcoin-analysis/[layer]`**: Serves Bitcoin transaction analysis
- **Frontend components**: Display analysis results in layer reviews
- **Layer-specific organization**: Files automatically organized by layer

## 📚 **Documentation**

- **`README_BITCOIN_ANALYSIS.md`**: Detailed Bitcoin Script analysis guide
- **Tool-specific READMEs**: In each analyzer directory
- **Code documentation**: Inline comments explaining analysis logic

## 🆘 **Getting Help**

1. **Check existing analysis reports** for examples
2. **Review tool documentation** for specific features
3. **Examine the codebase** for integration patterns
4. **Test with known transactions** to verify setup

## 🎯 **Research Goals**

Use these tools to:
- **Understand custody models** across Bitcoin Layer 2 protocols
- **Analyze governance mechanisms** and decentralization levels  
- **Compare technical approaches** to Bitcoin scaling
- **Identify security patterns** and potential risks
- **Document findings** for the Bitcoin Layers community

---

**Happy researching!** 🔍⚡

*These tools are continuously evolving. Contribute improvements and new analysis capabilities to help the Bitcoin Layer 2 ecosystem grow.*