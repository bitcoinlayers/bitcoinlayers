#!/usr/bin/env python3
"""
Bitcoin Layers Report Bot
Runs once, checks for changes, and sends a summary report to Telegram.
"""

import asyncio
import json
import logging
import os
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Tuple

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

class BitcoinLayersReportBot:
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
            return {
                "contracts": {}, 
                "repos": {},
                "last_run": None
            }
        except Exception as e:
            logger.error(f"Error loading state: {e}")
            return {"contracts": {}, "repos": {}, "last_run": None}
    
    def save_state(self):
        """Save the current state to file"""
        try:
            self.state["last_run"] = datetime.now().isoformat()
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
            logger.info(f"Sent report to Telegram")
        except TelegramError as e:
            logger.error(f"Error sending Telegram message: {e}")
    
    async def generate_report(self) -> Dict:
        """Generate a comprehensive report of all changes"""
        report = {
            "contracts": {
                "total": 0,
                "checked": 0,
                "changes": []
            },
            "repos": {
                "total": 0,
                "checked": 0,
                "changes": []
            },
            "run_info": {
                "start_time": datetime.now().isoformat(),
                "last_run": self.state.get("last_run"),
                "first_run": self.state.get("last_run") is None
            }
        }
        
        # Check contracts
        logger.info("Checking contracts for changes...")
        try:
            contracts = await self.contract_monitor.get_all_contracts()
            report["contracts"]["total"] = len(contracts)
            
            for contract in contracts:
                contract_id = f"{contract.network_slug}_{contract.contract_address}"
                
                # Initialize if first time seeing this contract
                if contract_id not in self.state["contracts"]:
                    self.state["contracts"][contract_id] = {
                        "first_seen": datetime.now().isoformat(),
                        "last_check": None,
                        "last_tx_hash": None
                    }
                    # Don't report on first discovery unless this is the first run
                    if not report["run_info"]["first_run"]:
                        continue
                
                # Check for changes
                changes = await self.contract_monitor.check_contract_changes(contract)
                
                for change in changes:
                    change["contract"] = contract
                    report["contracts"]["changes"].append(change)
                
                # Update state
                self.state["contracts"][contract_id]["last_check"] = datetime.now().isoformat()
                report["contracts"]["checked"] += 1
                
        except Exception as e:
            logger.error(f"Error checking contracts: {e}")
        
        # Check GitHub repos
        logger.info("Checking GitHub repos for changes...")
        try:
            repos = await self.github_monitor.get_all_repos()
            report["repos"]["total"] = len(repos)
            
            for repo in repos:
                repo_id = f"{repo.owner}/{repo.name}"
                
                # Initialize if first time seeing this repo
                if repo_id not in self.state["repos"]:
                    self.state["repos"][repo_id] = {
                        "first_seen": datetime.now().isoformat(),
                        "last_check": None,
                        "last_commit_sha": None,
                        "last_release_tag": None
                    }
                    # Don't report on first discovery unless this is the first run
                    if not report["run_info"]["first_run"]:
                        continue
                
                # Check for changes
                changes = await self.github_monitor.check_repo_changes(repo, self.state["repos"][repo_id])
                
                for change in changes:
                    change["repo"] = repo
                    report["repos"]["changes"].append(change)
                
                # Update state
                self.state["repos"][repo_id]["last_check"] = datetime.now().isoformat()
                report["repos"]["checked"] += 1
                
        except Exception as e:
            logger.error(f"Error checking repos: {e}")
        
        report["run_info"]["end_time"] = datetime.now().isoformat()
        return report
    
    def format_report_message(self, report: Dict) -> str:
        """Format the report into a Telegram message"""
        
        # Header
        run_time = datetime.fromisoformat(report["run_info"]["start_time"]).strftime("%Y-%m-%d %H:%M:%S")
        last_run = report["run_info"]["last_run"]
        if last_run:
            last_run_time = datetime.fromisoformat(last_run).strftime("%Y-%m-%d %H:%M:%S")
            time_since = "since last run"
        else:
            last_run_time = "Never"
            time_since = "(first run)"
        
        message = f"""🤖 <b>Bitcoin Layers Report</b>
📅 <b>Run Time:</b> {run_time}
🕐 <b>Last Run:</b> {last_run_time} {time_since}

"""
        
        # Contract summary
        contract_changes = len(report["contracts"]["changes"])
        contracts_checked = report["contracts"]["checked"]
        contracts_total = report["contracts"]["total"]
        
        message += f"""💰 <b>CONTRACTS</b>
📊 Checked: {contracts_checked}/{contracts_total}
🔔 Changes: {contract_changes}

"""
        
        # Contract changes
        if contract_changes > 0:
            message += "📋 <b>Contract Changes:</b>\n"
            for change in report["contracts"]["changes"][:10]:  # Limit to 10
                contract = change["contract"]
                if change['type'] == 'upgrade':
                    message += f"  🔄 <b>{contract.token_name}</b> ({contract.network_slug.upper()}): Contract upgraded\n"
                elif change['type'] == 'large_transaction':
                    message += f"  💰 <b>{contract.token_name}</b> ({contract.network_slug.upper()}): Large transaction ({change.get('amount', 'Unknown')})\n"
            
            if contract_changes > 10:
                message += f"  ... and {contract_changes - 10} more\n"
            message += "\n"
        
        # GitHub summary
        repo_changes = len(report["repos"]["changes"])
        repos_checked = report["repos"]["checked"]
        repos_total = report["repos"]["total"]
        
        message += f"""📂 <b>GITHUB REPOS</b>
📊 Checked: {repos_checked}/{repos_total}
🔔 Changes: {repo_changes} (last 24hrs)

"""
        
        # GitHub changes
        if repo_changes > 0:
            message += "📋 <b>Recent Repository Changes:</b>\n"
            
            # Group changes by type
            commits = [c for c in report["repos"]["changes"] if c['type'] == 'new_commit']
            releases = [c for c in report["repos"]["changes"] if c['type'] == 'new_release']
            issues = [c for c in report["repos"]["changes"] if c['type'] == 'new_issue']
            prs = [c for c in report["repos"]["changes"] if c['type'] == 'new_pr']
            
            if commits:
                message += f"  📝 <b>New Commits - Last 24hrs ({len(commits)}):</b>\n"
                for change in commits:  # Show ALL commits
                    repo = change["repo"]
                    commit_msg = change.get('message', '')[:50] + "..." if len(change.get('message', '')) > 50 else change.get('message', '')
                    message += f"    • <b>{repo.owner}/{repo.name}</b>: {commit_msg}\n"
                message += "\n"
            
            if releases:
                message += f"  🚀 <b>New Releases - Last 7 days ({len(releases)}):</b>\n"
                for change in releases:  # Show ALL releases
                    repo = change["repo"]
                    tag = change.get('tag', 'Unknown')
                    message += f"    • <b>{repo.owner}/{repo.name}</b>: {tag}\n"
                message += "\n"
            
            if issues:
                message += f"  🐛 <b>New Issues ({len(issues)}):</b>\n"
                for change in issues:  # Show ALL issues
                    repo = change["repo"]
                    title = change.get('title', '')[:40] + "..." if len(change.get('title', '')) > 40 else change.get('title', '')
                    message += f"    • <b>{repo.owner}/{repo.name}</b>: {title}\n"
                message += "\n"
            
            if prs:
                message += f"  🔀 <b>New Pull Requests ({len(prs)}):</b>\n"
                for change in prs:  # Show ALL PRs
                    repo = change["repo"]
                    title = change.get('title', '')[:40] + "..." if len(change.get('title', '')) > 40 else change.get('title', '')
                    message += f"    • <b>{repo.owner}/{repo.name}</b>: {title}\n"
                message += "\n"
        
        # Footer
        if contract_changes == 0 and repo_changes == 0:
            message += "✅ <b>No changes detected since last run</b>\n"
        
        message += f"\n📊 <b>Total:</b> {contract_changes + repo_changes} changes found"
        
        # Truncate if too long (Telegram has a 4096 character limit)
        if len(message) > 4000:
            message = message[:3900] + "\n\n... (message truncated due to length limit)"
        
        return message
    
    async def run_report(self):
        """Run the report generation and send to Telegram"""
        logger.info("Starting Bitcoin Layers report generation...")
        
        # Test the bot connection
        try:
            me = await self.bot.get_me()
            logger.info(f"Bot connected successfully: @{me.username}")
        except Exception as e:
            logger.error(f"Failed to connect to Telegram: {e}")
            return
        
        try:
            # Generate the report
            report = await self.generate_report()
            
            # Format and send the report
            message = self.format_report_message(report)
            await self.send_message(message)
            
            # Save state
            self.save_state()
            
            # Print summary to console
            contract_changes = len(report["contracts"]["changes"])
            repo_changes = len(report["repos"]["changes"])
            total_changes = contract_changes + repo_changes
            
            print(f"\n📊 Report Summary:")
            print(f"   📄 Contracts checked: {report['contracts']['checked']}/{report['contracts']['total']}")
            print(f"   📂 Repos checked: {report['repos']['checked']}/{report['repos']['total']}")
            print(f"   🔔 Total changes: {total_changes}")
            print(f"   📱 Report sent to Telegram")
            
            logger.info("Report generated and sent successfully")
            
        except Exception as e:
            logger.error(f"Error generating report: {e}")
            error_message = f"❌ <b>Bitcoin Layers Report Error</b>\n\n{str(e)}"
            await self.send_message(error_message)
        
        finally:
            # Clean up
            await self.contract_monitor.close()
            await self.github_monitor.close()

def main():
    """Main entry point"""
    try:
        config = Config()
        config.validate()
        
        bot = BitcoinLayersReportBot(config)
        asyncio.run(bot.run_report())
        
    except Exception as e:
        logger.error(f"Failed to run report: {e}")

if __name__ == "__main__":
    main()