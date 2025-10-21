#!/usr/bin/env python3
"""
Test Report Generator
Generates a sample report without needing Telegram credentials.
"""

import asyncio
import json
from datetime import datetime
from config import Config
from contract_monitor import ContractMonitor
from github_monitor import GitHubMonitor

async def test_report():
    """Generate a test report to see what would be sent"""
    
    print("🧪 Testing Bitcoin Layers Report Generation")
    print("=" * 50)
    
    config = Config()
    
    # Test contract monitoring
    print("\n💰 Testing Contract Monitor...")
    contract_monitor = ContractMonitor(config)
    
    try:
        contracts = await contract_monitor.get_all_contracts()
        print(f"✅ Found {len(contracts)} contracts")
        
        # Show sample contracts
        for i, contract in enumerate(contracts[:3]):
            print(f"   {i+1}. {contract.token_name} ({contract.token_slug}) on {contract.network_slug}")
            print(f"      Address: {contract.contract_address}")
        
        if len(contracts) > 3:
            print(f"   ... and {len(contracts) - 3} more contracts")
    
    except Exception as e:
        print(f"❌ Contract monitor error: {e}")
    
    finally:
        await contract_monitor.close()
    
    # Test GitHub monitoring
    print("\n📂 Testing GitHub Monitor...")
    github_monitor = GitHubMonitor(config)
    
    try:
        repos = await github_monitor.get_all_repos()
        print(f"✅ Found {len(repos)} GitHub repositories")
        
        # Show sample repos
        for i, repo in enumerate(repos[:3]):
            print(f"   {i+1}. {repo.full_name}")
            print(f"      From: {repo.layer_name}")
            print(f"      URL: {repo.url}")
        
        if len(repos) > 3:
            print(f"   ... and {len(repos) - 3} more repositories")
        
        # Test checking for changes on one repo
        if repos:
            print(f"\n🔍 Testing change detection on {repos[0].full_name}...")
            fake_state = {}
            changes = await github_monitor.check_repo_changes(repos[0], fake_state)
            print(f"   Found {len(changes)} changes")
            
            for change in changes[:2]:  # Show first 2 changes
                if change['type'] == 'new_commit':
                    message = change.get('message', '')[:60] + "..." if len(change.get('message', '')) > 60 else change.get('message', '')
                    print(f"   - Commit: {message}")
                elif change['type'] == 'new_release':
                    print(f"   - Release: {change.get('tag', 'Unknown')}")
    
    except Exception as e:
        print(f"❌ GitHub monitor error: {e}")
    
    finally:
        await github_monitor.close()
    
    # Generate sample report format
    print("\n📊 Sample Report Format:")
    print("=" * 50)
    
    sample_report = f"""🤖 Bitcoin Layers Report
📅 Run Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
🕐 Last Run: Never (first run)

💰 CONTRACTS
📊 Checked: {len(contracts) if 'contracts' in locals() else 0}/100
🔔 Changes: 0

📂 GITHUB REPOS  
📊 Checked: {len(repos) if 'repos' in locals() else 0}/{len(repos) if 'repos' in locals() else 0}
🔔 Changes: {len(changes) if 'changes' in locals() else 0}

📋 Repository Changes:
📝 New Commits ({len([c for c in changes if c['type'] == 'new_commit']) if 'changes' in locals() else 0}):"""

    if 'changes' in locals():
        commits = [c for c in changes if c['type'] == 'new_commit'][:3]
        for change in commits:
            repo_name = repos[0].full_name if repos else "unknown/repo"
            message = change.get('message', '')[:50] + "..." if len(change.get('message', '')) > 50 else change.get('message', '')
            sample_report += f"\n    • {repo_name}: {message}"
    
    sample_report += f"\n\n📊 Total: {len(changes) if 'changes' in locals() else 0} changes found"
    
    print(sample_report)
    
    print("\n" + "=" * 50)
    print("✅ Test completed successfully!")
    print("\nTo send actual reports to Telegram:")
    print("1. Get a bot token from @BotFather")
    print("2. Create a .env file with TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID")
    print("3. Run: python3 report_bot.py")

if __name__ == "__main__":
    asyncio.run(test_report())