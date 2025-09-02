#!/usr/bin/env python3
"""
Bitcoin Layers Monitoring Bot
Monitors token contracts and GitHub repos for changes and sends alerts to Telegram.
"""

import asyncio
import json
import logging
import os
from datetime import datetime, timedelta
from typing import Dict, List, Optional

import requests
from telegram import Bot
from telegram.error import TelegramError

from contract_monitor import ContractMonitor
from github_monitor import GitHubMonitor
from config import Config

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class BitcoinLayersBot:
    def __init__(self, config: Config):
        self.config = config
        self.bot = Bot(token=config.telegram_bot_token)
        self.contract_monitor = ContractMonitor(config)
        self.github_monitor = GitHubMonitor(config)
        
        # State file to track what we've already seen
        self.state_file = "state.json"
        self.state = self.load_state()
    
    def load_state(self) -> Dict:
        """Load the last seen state from file"""
        try:
            if os.path.exists(self.state_file):
                with open(self.state_file, 'r') as f:
                    return json.load(f)
            return {"contracts": {}, "repos": {}}
        except Exception as e:
            logger.error(f"Error loading state: {e}")
            return {"contracts": {}, "repos": {}}
    
    def save_state(self):
        """Save the current state to file"""
        try:
            with open(self.state_file, 'w') as f:
                json.dump(self.state, f, indent=2, default=str)
        except Exception as e:
            logger.error(f"Error saving state: {e}")
    
    async def send_message(self, message: str, parse_mode: str = 'HTML'):
        """Send a message to the configured Telegram chat"""
        try:
            await self.bot.send_message(
                chat_id=self.config.telegram_chat_id,
                text=message,
                parse_mode=parse_mode,
                disable_web_page_preview=True
            )
            logger.info(f"Sent message to Telegram: {message[:100]}...")
        except TelegramError as e:
            logger.error(f"Error sending Telegram message: {e}")
    
    async def check_contracts(self):
        """Check all contracts for changes"""
        logger.info("Checking contracts for changes...")
        
        try:
            contracts = await self.contract_monitor.get_all_contracts()
            logger.info(f"Found {len(contracts)} contracts to monitor")
            
            for contract in contracts:
                contract_id = f"{contract['network_slug']}_{contract['contract_address']}"
                
                # Check if we've seen this contract before
                if contract_id not in self.state["contracts"]:
                    self.state["contracts"][contract_id] = {
                        "last_check": datetime.now().isoformat(),
                        "last_tx_hash": None
                    }
                    # Don't alert on first discovery, just track it
                    continue
                
                # Check for changes
                changes = await self.contract_monitor.check_contract_changes(contract)
                
                for change in changes:
                    message = self.format_contract_alert(contract, change)
                    await self.send_message(message)
                
                # Update state
                self.state["contracts"][contract_id]["last_check"] = datetime.now().isoformat()
                
        except Exception as e:
            logger.error(f"Error checking contracts: {e}")
    
    async def check_repos(self):
        """Check all GitHub repos for changes"""
        logger.info("Checking GitHub repos for changes...")
        
        try:
            repos = await self.github_monitor.get_all_repos()
            logger.info(f"Found {len(repos)} repos to monitor")
            
            for repo in repos:
                repo_id = f"{repo['owner']}/{repo['name']}"
                
                # Check if we've seen this repo before
                if repo_id not in self.state["repos"]:
                    self.state["repos"][repo_id] = {
                        "last_check": datetime.now().isoformat(),
                        "last_commit_sha": None,
                        "last_release_tag": None
                    }
                    # Don't alert on first discovery, just track it
                    continue
                
                # Check for changes
                changes = await self.github_monitor.check_repo_changes(repo, self.state["repos"][repo_id])
                
                for change in changes:
                    message = self.format_github_alert(repo, change)
                    await self.send_message(message)
                
                # Update state
                self.state["repos"][repo_id]["last_check"] = datetime.now().isoformat()
                
        except Exception as e:
            logger.error(f"Error checking repos: {e}")
    
    def format_contract_alert(self, contract: Dict, change: Dict) -> str:
        """Format a contract change into a Telegram message"""
        network = contract['network_slug'].upper()
        token_name = contract.get('token_name', 'Unknown')
        contract_addr = contract['contract_address']
        
        if change['type'] == 'upgrade':
            return f"""🔄 <b>Contract Upgrade Detected</b>
    
<b>Token:</b> {token_name}
<b>Network:</b> {network}
<b>Contract:</b> <code>{contract_addr}</code>
<b>Change:</b> {change['description']}
<b>Transaction:</b> <code>{change.get('tx_hash', 'Unknown')}</code>

<a href="https://etherscan.io/tx/{change.get('tx_hash', '')}">View on Explorer</a>"""
        
        elif change['type'] == 'large_transaction':
            return f"""💰 <b>Large Transaction Detected</b>
    
<b>Token:</b> {token_name}
<b>Network:</b> {network}
<b>Contract:</b> <code>{contract_addr}</code>
<b>Amount:</b> {change.get('amount', 'Unknown')}
<b>Transaction:</b> <code>{change.get('tx_hash', 'Unknown')}</code>

<a href="https://etherscan.io/tx/{change.get('tx_hash', '')}">View on Explorer</a>"""
        
        return f"⚠️ Contract change detected: {change.get('description', 'Unknown change')}"
    
    def format_github_alert(self, repo: Dict, change: Dict) -> str:
        """Format a GitHub change into a Telegram message"""
        repo_name = f"{repo['owner']}/{repo['name']}"
        
        if change['type'] == 'new_commit':
            return f"""📝 <b>New Commit</b>
    
<b>Repo:</b> {repo_name}
<b>Author:</b> {change.get('author', 'Unknown')}
<b>Message:</b> {change.get('message', 'No message')[:100]}...
<b>SHA:</b> <code>{change.get('sha', 'Unknown')[:8]}</code>

<a href="{change.get('url', '')}">View Commit</a>"""
        
        elif change['type'] == 'new_release':
            return f"""🚀 <b>New Release</b>
    
<b>Repo:</b> {repo_name}
<b>Version:</b> {change.get('tag', 'Unknown')}
<b>Title:</b> {change.get('title', 'No title')}
<b>Author:</b> {change.get('author', 'Unknown')}

<a href="{change.get('url', '')}">View Release</a>"""
        
        elif change['type'] == 'new_issue':
            return f"""🐛 <b>New Issue</b>
    
<b>Repo:</b> {repo_name}
<b>Title:</b> {change.get('title', 'No title')[:100]}
<b>Author:</b> {change.get('author', 'Unknown')}
<b>Number:</b> #{change.get('number', 'Unknown')}

<a href="{change.get('url', '')}">View Issue</a>"""
        
        return f"⚠️ GitHub change detected: {change.get('description', 'Unknown change')}"
    
    async def run_monitoring_cycle(self):
        """Run one complete monitoring cycle"""
        logger.info("Starting monitoring cycle...")
        
        # Send startup message
        await self.send_message("🤖 <b>Bitcoin Layers Monitor</b>\nStarting monitoring cycle...")
        
        try:
            # Check contracts and repos
            await self.check_contracts()
            await self.check_repos()
            
            # Save state
            self.save_state()
            
            logger.info("Monitoring cycle completed successfully")
            
        except Exception as e:
            logger.error(f"Error in monitoring cycle: {e}")
            await self.send_message(f"⚠️ <b>Monitor Error</b>\n\n{str(e)}")
    
    async def start(self):
        """Start the monitoring bot"""
        logger.info("Starting Bitcoin Layers monitoring bot...")
        
        # Test the bot connection
        try:
            me = await self.bot.get_me()
            logger.info(f"Bot connected successfully: @{me.username}")
        except Exception as e:
            logger.error(f"Failed to connect to Telegram: {e}")
            return
        
        # Run monitoring cycles
        while True:
            try:
                await self.run_monitoring_cycle()
                
                # Wait for the next cycle
                logger.info(f"Waiting {self.config.check_interval_minutes} minutes until next check...")
                await asyncio.sleep(self.config.check_interval_minutes * 60)
                
            except KeyboardInterrupt:
                logger.info("Bot stopped by user")
                await self.send_message("🛑 <b>Bitcoin Layers Monitor</b>\nStopping monitoring...")
                break
            except Exception as e:
                logger.error(f"Unexpected error: {e}")
                await asyncio.sleep(60)  # Wait 1 minute before retrying

def main():
    """Main entry point"""
    try:
        config = Config()
        config.validate()
        
        bot = BitcoinLayersBot(config)
        asyncio.run(bot.start())
        
    except Exception as e:
        logger.error(f"Failed to start bot: {e}")

if __name__ == "__main__":
    main()