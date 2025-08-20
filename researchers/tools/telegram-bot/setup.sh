#!/bin/bash

# Bitcoin Layers Telegram Bot Setup Script

set -e  # Exit on any error

echo "🤖 Bitcoin Layers Telegram Bot Setup"
echo "===================================="

# Check if we're in the right directory
if [ ! -f "bot.py" ]; then
    echo "❌ Please run this script from the researchers/telegram-bot/ directory"
    exit 1
fi

# Check Python version
echo "🐍 Checking Python version..."
python_version=$(python3 --version 2>&1 | grep -o '[0-9]\+\.[0-9]\+' | head -1)
major=$(echo $python_version | cut -d. -f1)
minor=$(echo $python_version | cut -d. -f2)

if [ "$major" -lt 3 ] || [ "$major" -eq 3 -a "$minor" -lt 8 ]; then
    echo "❌ Python 3.8+ required. Found: $python_version"
    exit 1
else
    echo "✅ Python $python_version"
fi

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
else
    echo "✅ Virtual environment exists"
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "⬆️  Upgrading pip..."
pip install --upgrade pip

# Install requirements
echo "📋 Installing requirements..."
pip install -r requirements.txt

# Install optional packages
echo "🔧 Installing optional packages..."
pip install python-dotenv

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env template..."
    cat > .env << EOF
# Bitcoin Layers Telegram Bot Configuration
# Fill in your values below

# Required - Get from @BotFather on Telegram
TELEGRAM_BOT_TOKEN=your_bot_token_here

# Required - Your chat ID or channel username
TELEGRAM_CHAT_ID=@your_channel_or_user_id

# Optional - Get from GitHub Settings > Developer settings > Personal access tokens
GITHUB_TOKEN=your_github_token_here

# Optional - Get from https://etherscan.io/apis
ETHERSCAN_API_KEY=your_etherscan_api_key_here

# Optional - Monitoring settings
CHECK_INTERVAL_MINUTES=30
MONITOR_CONTRACT_UPGRADES=true
MONITOR_LARGE_TRANSACTIONS=true
LARGE_TRANSACTION_THRESHOLD_BTC=10.0
MONITOR_COMMITS=true
MONITOR_RELEASES=true
MONITOR_ISSUES=false
MONITOR_PRS=false
EOF
    echo "✅ Created .env file template"
    echo "📝 Please edit .env file with your bot token and chat ID"
else
    echo "✅ .env file exists"
fi

# Run setup test
echo ""
echo "🧪 Running setup test..."
python test_setup.py

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your Telegram bot token and chat ID"
echo "2. Test the setup: python test_setup.py"
echo "3. Run the bot: python bot.py"
echo ""
echo "To get a Telegram bot token:"
echo "1. Message @BotFather on Telegram"
echo "2. Use /newbot command and follow instructions"
echo "3. Copy the token to your .env file"
echo ""
echo "To get your chat ID:"
echo "1. Message your bot with /start"
echo "2. Visit: https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates"
echo "3. Look for 'chat':{'id':...} in the response"