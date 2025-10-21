#!/usr/bin/env python3
"""
Test script to verify the Bitcoin Layers Telegram Bot setup
"""

import asyncio
import os
import sys
import logging
from typing import Dict, Any

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

async def test_telegram_connection():
    """Test Telegram bot connection"""
    print("\n🤖 Testing Telegram Bot Connection...")
    
    try:
        from telegram import Bot
        from config import Config
        
        config = Config()
        
        if not config.telegram_bot_token:
            print("❌ TELEGRAM_BOT_TOKEN not set")
            return False
        
        if not config.telegram_chat_id:
            print("❌ TELEGRAM_CHAT_ID not set")
            return False
        
        bot = Bot(token=config.telegram_bot_token)
        me = await bot.get_me()
        print(f"✅ Bot connected: @{me.username} ({me.first_name})")
        
        # Try to send a test message
        try:
            await bot.send_message(
                chat_id=config.telegram_chat_id,
                text="🧪 <b>Test Message</b>\n\nBitcoin Layers Monitor setup test successful!",
                parse_mode='HTML'
            )
            print(f"✅ Test message sent to {config.telegram_chat_id}")
        except Exception as e:
            print(f"❌ Failed to send message: {e}")
            print("   Check that your chat ID is correct and the bot has permission to send messages")
            return False
        
        return True
        
    except ImportError:
        print("❌ python-telegram-bot not installed. Run: pip install python-telegram-bot")
        return False
    except Exception as e:
        print(f"❌ Telegram test failed: {e}")
        return False

async def test_contract_monitor():
    """Test contract monitoring functionality"""
    print("\n💰 Testing Contract Monitor...")
    
    try:
        from contract_monitor import ContractMonitor
        from config import Config
        
        config = Config()
        monitor = ContractMonitor(config)
        
        contracts = await monitor.get_all_contracts()
        if contracts:
            print(f"✅ Found {len(contracts)} contracts from Bitcoin Layers API")
            print(f"   Sample: {contracts[0].token_name} on {contracts[0].network_slug}")
        else:
            print("⚠️  No contracts found - check Bitcoin Layers API connectivity")
        
        await monitor.close()
        return len(contracts) > 0
        
    except Exception as e:
        print(f"❌ Contract monitor test failed: {e}")
        return False

async def test_github_monitor():
    """Test GitHub monitoring functionality"""
    print("\n📂 Testing GitHub Monitor...")
    
    try:
        from github_monitor import GitHubMonitor
        from config import Config
        
        config = Config()
        monitor = GitHubMonitor(config)
        
        repos = await monitor.get_all_repos()
        if repos:
            print(f"✅ Found {len(repos)} GitHub repositories from content files")
            print(f"   Sample: {repos[0].full_name}")
        else:
            print("⚠️  No GitHub repositories found in content files")
        
        await monitor.close()
        return len(repos) > 0
        
    except Exception as e:
        print(f"❌ GitHub monitor test failed: {e}")
        return False

def test_environment():
    """Test environment setup"""
    print("\n🔧 Testing Environment Setup...")
    
    results = {}
    
    # Check Python version
    python_version = sys.version_info
    if python_version >= (3, 8):
        print(f"✅ Python {python_version.major}.{python_version.minor}.{python_version.micro}")
        results['python'] = True
    else:
        print(f"❌ Python {python_version.major}.{python_version.minor} (need 3.8+)")
        results['python'] = False
    
    # Check required packages
    required_packages = ['telegram', 'aiohttp', 'requests']
    for package in required_packages:
        try:
            __import__(package)
            print(f"✅ {package} installed")
            results[package] = True
        except ImportError:
            print(f"❌ {package} not installed")
            results[package] = False
    
    # Check optional packages
    optional_packages = {'dotenv': 'python-dotenv'}
    for package, install_name in optional_packages.items():
        try:
            __import__(package)
            print(f"✅ {install_name} installed (optional)")
        except ImportError:
            print(f"⚠️  {install_name} not installed (optional)")
    
    # Check environment variables
    env_vars = {
        'TELEGRAM_BOT_TOKEN': os.getenv('TELEGRAM_BOT_TOKEN'),
        'TELEGRAM_CHAT_ID': os.getenv('TELEGRAM_CHAT_ID'),
        'GITHUB_TOKEN': os.getenv('GITHUB_TOKEN'),
        'ETHERSCAN_API_KEY': os.getenv('ETHERSCAN_API_KEY')
    }
    
    print("\n📋 Environment Variables:")
    for var, value in env_vars.items():
        if var in ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID']:
            # Required
            if value:
                print(f"✅ {var}: Set")
                results[var] = True
            else:
                print(f"❌ {var}: Not set (required)")
                results[var] = False
        else:
            # Optional
            if value:
                print(f"✅ {var}: Set")
            else:
                print(f"⚠️  {var}: Not set (optional)")
    
    return results

def print_summary(results: Dict[str, Any]):
    """Print test summary"""
    print("\n" + "="*50)
    print("📊 SETUP TEST SUMMARY")
    print("="*50)
    
    passed = sum(1 for v in results.values() if v is True)
    total = len(results)
    
    if all(results.values()):
        print("🎉 All tests passed! Your bot is ready to run.")
        print("\nNext steps:")
        print("1. Run: python bot.py")
        print("2. Check your Telegram for alerts")
    else:
        print(f"⚠️  {passed}/{total} tests passed. Please fix the issues above.")
        
        if not results.get('TELEGRAM_BOT_TOKEN'):
            print("\n🔑 To get a Telegram bot token:")
            print("1. Message @BotFather on Telegram")
            print("2. Use /newbot and follow instructions")
            print("3. Set TELEGRAM_BOT_TOKEN environment variable")
        
        if not results.get('TELEGRAM_CHAT_ID'):
            print("\n💬 To get your chat ID:")
            print("1. Message your bot with /start")
            print("2. Visit: https://api.telegram.org/bot<TOKEN>/getUpdates")
            print("3. Look for 'chat':{'id':...}")
            print("4. Set TELEGRAM_CHAT_ID environment variable")
        
        missing_packages = [k for k, v in results.items() if v is False and k in ['telegram', 'aiohttp', 'requests']]
        if missing_packages:
            print(f"\n📦 Install missing packages:")
            print("pip install python-telegram-bot aiohttp requests")

async def main():
    """Run all tests"""
    print("🧪 Bitcoin Layers Telegram Bot Setup Test")
    print("="*50)
    
    # Test environment
    env_results = test_environment()
    
    # If basic requirements are met, test functionality
    if env_results.get('telegram') and env_results.get('TELEGRAM_BOT_TOKEN'):
        telegram_ok = await test_telegram_connection()
        env_results['telegram_connection'] = telegram_ok
    
    if env_results.get('aiohttp') and env_results.get('requests'):
        contract_ok = await test_contract_monitor()
        github_ok = await test_github_monitor()
        env_results['contract_monitor'] = contract_ok
        env_results['github_monitor'] = github_ok
    
    print_summary(env_results)

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n\n⏹️  Test interrupted by user")
    except Exception as e:
        print(f"\n\n❌ Test failed with error: {e}")
        sys.exit(1)