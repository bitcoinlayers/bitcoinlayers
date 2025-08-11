#!/bin/bash

# Bitcoin Layers Report Runner
# Runs a one-time report and sends results to Telegram

set -e  # Exit on any error

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🤖 Running Bitcoin Layers Report..."
echo "Time: $(date)"
echo "Directory: $SCRIPT_DIR"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "❌ Virtual environment not found. Please run setup.sh first."
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ .env file not found. Please create it with your bot configuration."
    echo "See .env.example for template."
    exit 1
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Load environment variables
echo "⚙️  Loading environment variables..."
if command -v python3 &> /dev/null; then
    python3 -c "
from dotenv import load_dotenv
import os
load_dotenv()
print('✅ Environment variables loaded')
" 2>/dev/null || echo "⚠️  python-dotenv not installed, using system env vars"
fi

# Run the report
echo "📊 Generating report..."
python3 report_bot.py

echo "✅ Report completed at $(date)"