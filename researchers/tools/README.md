# Bitcoin Layers Research Tools

This directory contains tools for researchers to explore and analyze the Bitcoin Layers database and ecosystem.

## Database Contract Explorer (`db_contract_explorer.py`)

A command-line tool to connect to the Bitcoin Layers database and explore token contracts by network.

### Features

- 🌐 List all available networks with token counts and total balances
- 🔍 Filter contracts by specific network (e.g., Solana, Ethereum)
- 🪙 Search for contracts by token slug across all networks
- 📊 Output in table format (default) or JSON for programmatic use
- 🔎 General search functionality for tokens and networks

### Installation

```bash
cd researchers/tools
pip install -r requirements.txt
```

### Usage Examples

#### List all networks
```bash
python db_contract_explorer.py --list-networks
```

#### Get all contracts on Solana
```bash
python db_contract_explorer.py --network solana
```

#### Get all contracts for WBTC across networks
```bash
python db_contract_explorer.py --token bitgo_wbtc
```

#### Get network-focused summary for a token
```bash
python db_contract_explorer.py --token-networks bitgo_wbtc
```

#### Search for contracts containing "bitcoin"
```bash
python db_contract_explorer.py --search bitcoin
```

#### Output as JSON for programmatic use
```bash
python db_contract_explorer.py --network ethereum --output json
```

#### Use custom API URL
```bash
python db_contract_explorer.py --network solana --api-url https://your-api-url.com
```

### Command Line Options

- `--network, -n`: Filter contracts by network slug
- `--token, -t`: Filter contracts by token slug  
- `--token-networks, -tn`: Show network-focused summary for a token
- `--list-networks, -l`: List all available networks
- `--search, -s`: Search contracts by token or network name
- `--output, -o`: Output format (table or json)
- `--api-url`: Override the default API base URL

### Environment Variables

The tool reads configuration from `.env.local` in the project root:

- `NEXT_PUBLIC_API_URL`: Base URL for the Bitcoin Layers API (defaults to https://api.btc-locked.com)

### Example Output

```
🔍 Fetching contracts for network: solana

📄 Found 3 contracts on solana:

Token Name          | Token Slug | Network | Balance (BTC) | Rank
-----------------------------------------------------------------
Coinbase Wrapped BTC | cbbtc     | Solana  |      125.4500 | 1
Jupiter Wrapped BTC  | jupbtc    | Solana  |       45.2100 | 3
Portal BTC          | portbtc   | Solana  |       89.7800 | 2
```

### API Endpoints Used

- `/current_supplies_by_tokenimpl`: Token contract implementations with balances
- `/current_supplies_by_network`: Network summaries with total balances

## Other Tools

### Telegram Bot (`telegram-bot/`)

Monitors Bitcoin Layers ecosystem for changes and sends notifications.

### Missing Reviews Finder (`find_missing_reviews.py`)

Identifies layers and infrastructure that need review coverage.
