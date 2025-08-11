#!/usr/bin/env python3
"""
Configuration for Bitcoin Layers Monitoring Bot
"""

import os
from typing import Optional

# Try to load .env.local from project root
try:
    from dotenv import load_dotenv
    # Load from project root (two levels up from this file)
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    env_path = os.path.join(project_root, '.env.local')
    load_dotenv(env_path)
except ImportError:
    pass  # dotenv not installed, will use system env vars

class Config:
    def __init__(self):
        # Telegram settings
        self.telegram_bot_token: str = os.getenv('TELEGRAM_BOT_TOKEN', '')
        self.telegram_chat_id: str = os.getenv('TELEGRAM_CHAT_ID', '')
        
        # Bitcoin Layers API settings
        self.btc_api_base_url: str = "https://api.btc-locked.com"
        
        # GitHub API settings
        self.github_token: Optional[str] = os.getenv('GITHUB_TOKEN')  # Optional but recommended for rate limits
        
        # Monitoring settings
        self.check_interval_minutes: int = int(os.getenv('CHECK_INTERVAL_MINUTES', '30'))  # How often to check
        self.max_contracts_per_cycle: int = int(os.getenv('MAX_CONTRACTS_PER_CYCLE', '100'))  # Rate limiting
        self.max_repos_per_cycle: int = int(os.getenv('MAX_REPOS_PER_CYCLE', '50'))  # Rate limiting
        
        # Contract monitoring settings
        self.monitor_contract_upgrades: bool = os.getenv('MONITOR_CONTRACT_UPGRADES', 'true').lower() == 'true'
        self.monitor_large_transactions: bool = os.getenv('MONITOR_LARGE_TRANSACTIONS', 'true').lower() == 'true'
        self.large_transaction_threshold_btc: float = float(os.getenv('LARGE_TRANSACTION_THRESHOLD_BTC', '10.0'))
        
        # GitHub monitoring settings
        self.monitor_commits: bool = os.getenv('MONITOR_COMMITS', 'true').lower() == 'true'
        self.monitor_releases: bool = os.getenv('MONITOR_RELEASES', 'true').lower() == 'true'
        self.monitor_issues: bool = os.getenv('MONITOR_ISSUES', 'false').lower() == 'true'  # Disabled by default (noisy)
        self.monitor_prs: bool = os.getenv('MONITOR_PRS', 'false').lower() == 'true'  # Disabled by default (noisy)
        
        # Content paths (relative to project root)
        self.layers_content_path: str = "content/layers"
        self.infrastructures_content_path: str = "content/infrastructures"
    
    def validate(self):
        """Validate that required configuration is present"""
        errors = []
        
        if not self.telegram_bot_token:
            errors.append("TELEGRAM_BOT_TOKEN environment variable is required")
        
        if not self.telegram_chat_id:
            errors.append("TELEGRAM_CHAT_ID environment variable is required")
        
        if self.check_interval_minutes < 1:
            errors.append("CHECK_INTERVAL_MINUTES must be at least 1 minute")
        
        if errors:
            raise ValueError(f"Configuration errors:\n" + "\n".join(f"- {error}" for error in errors))
    
    def __str__(self):
        """String representation (without sensitive data)"""
        return f"""Bitcoin Layers Bot Configuration:
- Check interval: {self.check_interval_minutes} minutes
- Monitor upgrades: {self.monitor_contract_upgrades}
- Monitor large transactions: {self.monitor_large_transactions} (>{self.large_transaction_threshold_btc} BTC)
- Monitor commits: {self.monitor_commits}
- Monitor releases: {self.monitor_releases}
- Monitor issues: {self.monitor_issues}
- Monitor PRs: {self.monitor_prs}
- Bot token: {'✓ Set' if self.telegram_bot_token else '✗ Missing'}
- Chat ID: {'✓ Set' if self.telegram_chat_id else '✗ Missing'}
- GitHub token: {'✓ Set' if self.github_token else '✗ Not set (rate limited)'}"""