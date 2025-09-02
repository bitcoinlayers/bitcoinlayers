# Bitcoin Layers Telegram Monitoring Bot

A Telegram bot that monitors Bitcoin Layers token contracts and GitHub repositories for changes and sends real-time alerts.

## Features

- **Contract Monitoring**: Watches token contracts for upgrades, large transactions, and other events
- **GitHub Monitoring**: Tracks repositories for new commits, releases, issues, and pull requests
- **Real-time Alerts**: Sends formatted messages to Telegram channels/groups
- **Configurable**: Customizable monitoring intervals and alert types
- **Rate Limited**: Respects API rate limits to avoid getting blocked

## Setup

### 1. Create a Telegram Bot

1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Use `/newbot` command and follow the instructions
3. Save the bot token (looks like `123456789:ABCdef1234567890abcdef1234567890`)
4. Add your bot to a channel/group or get your personal chat ID

### 2. Get Your Chat ID

To send messages to yourself:
1. Message your bot with `/start`
2. Visit `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Look for the `"chat":{"id":...}` field

To send to a channel:
1. Add your bot to the channel as an admin
2. Use the channel username (e.g., `@your_channel`) or numeric ID

### 3. Set Environment Variables

Create a `.env` file in this directory:

```bash
# Required
TELEGRAM_BOT_TOKEN=123456789:ABCdef1234567890abcdef1234567890
TELEGRAM_CHAT_ID=@your_channel_or_user_id

# Optional - GitHub API (for higher rate limits)
GITHUB_TOKEN=ghp_your_github_personal_access_token

# Optional - Etherscan API (for contract monitoring)
ETHERSCAN_API_KEY=your_etherscan_api_key

# Optional - Monitoring settings
CHECK_INTERVAL_MINUTES=30
MONITOR_CONTRACT_UPGRADES=true
MONITOR_LARGE_TRANSACTIONS=true
LARGE_TRANSACTION_THRESHOLD_BTC=10.0
MONITOR_COMMITS=true
MONITOR_RELEASES=true
MONITOR_ISSUES=false
MONITOR_PRS=false
```

### 4. Install Dependencies

```bash
# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install requirements
pip install -r requirements.txt

# If you need dotenv support
pip install python-dotenv
```

### 5. Test the Setup

```bash
# Test contract monitoring
python contract_monitor.py

# Test GitHub monitoring  
python github_monitor.py

# Test the full bot (will run one cycle and exit)
python bot.py
```

## Usage

### Run the Bot

```bash
# Make sure you're in the virtual environment
source venv/bin/activate

# Run the bot
python bot.py
```

The bot will:
1. Send a startup message
2. Fetch all token contracts from the Bitcoin Layers API
3. Extract all GitHub repositories from your content files
4. Check for changes every `CHECK_INTERVAL_MINUTES` (default: 30 minutes)
5. Send alerts to your configured Telegram chat

### Stop the Bot

Press `Ctrl+C` to stop the bot gracefully.

## Configuration

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `TELEGRAM_BOT_TOKEN` | ✅ | - | Your Telegram bot token |
| `TELEGRAM_CHAT_ID` | ✅ | - | Chat ID or channel to send alerts to |
| `GITHUB_TOKEN` | ❌ | - | GitHub personal access token (recommended) |
| `ETHERSCAN_API_KEY` | ❌ | - | Etherscan API key for Ethereum contract monitoring |
| `CHECK_INTERVAL_MINUTES` | ❌ | 30 | How often to check for changes |
| `MAX_CONTRACTS_PER_CYCLE` | ❌ | 100 | Max contracts to check per cycle |
| `MAX_REPOS_PER_CYCLE` | ❌ | 50 | Max repos to check per cycle |
| `MONITOR_CONTRACT_UPGRADES` | ❌ | true | Monitor contract upgrades |
| `MONITOR_LARGE_TRANSACTIONS` | ❌ | true | Monitor large transactions |
| `LARGE_TRANSACTION_THRESHOLD_BTC` | ❌ | 10.0 | Threshold for "large" transactions |
| `MONITOR_COMMITS` | ❌ | true | Monitor new commits |
| `MONITOR_RELEASES` | ❌ | true | Monitor new releases |
| `MONITOR_ISSUES` | ❌ | false | Monitor new issues (can be noisy) |
| `MONITOR_PRS` | ❌ | false | Monitor new pull requests (can be noisy) |

### What Gets Monitored

**Token Contracts:**
- All tokens from the Bitcoin Layers API (`https://api.btc-locked.com/current_supplies_by_tokenimpl`)
- Contract upgrades (when available)
- Large transactions above threshold

**GitHub Repositories:**
- All GitHub URLs found in your `content/layers/` and `content/infrastructures/` files
- New commits to default branch
- New releases and tags
- New issues (optional)
- New pull requests (optional)

## Alert Examples

### Contract Alert
```
🔄 Contract Upgrade Detected

Token: BitGo-wBTC
Network: ETHEREUM  
Contract: 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
Change: Implementation upgraded
Transaction: 0xabc123...

View on Explorer
```

### GitHub Alert
```
📝 New Commit

Repo: bitcoin/bitcoin
Author: Satoshi Nakamoto
Message: Fix critical bug in transaction validation...
SHA: abc12345

View Commit
```

## Troubleshooting

### Bot Not Sending Messages
- Check your bot token and chat ID
- Make sure the bot is added to your channel as an admin
- Check bot logs for error messages

### Rate Limiting
- Add a GitHub token to increase API rate limits
- Reduce `MAX_CONTRACTS_PER_CYCLE` and `MAX_REPOS_PER_CYCLE`
- Increase `CHECK_INTERVAL_MINUTES`

### Missing Contracts/Repos
- Check that your content files contain GitHub URLs
- Verify the Bitcoin Layers API is accessible
- Check bot logs for parsing errors

## File Structure

```
researchers/telegram-bot/
├── bot.py                 # Main bot logic
├── config.py             # Configuration management
├── contract_monitor.py   # Token contract monitoring
├── github_monitor.py     # GitHub repository monitoring
├── requirements.txt      # Python dependencies
├── README.md            # This file
├── .env                 # Environment variables (create this)
└── state.json           # Bot state (auto-created)
```

## Contributing

1. Test your changes with `python contract_monitor.py` and `python github_monitor.py`
2. Ensure proper error handling and logging
3. Update this README if adding new features
4. Consider rate limiting and API costs

## Future Enhancements

- Support for more blockchain explorers
- Discord webhook support
- Slack integration
- Web dashboard for alert history
- Custom alert filtering
- Webhook endpoints for real-time data