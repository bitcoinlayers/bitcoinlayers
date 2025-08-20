#!/usr/bin/env python3
"""
Contract Monitor for Bitcoin Layers Bot
Monitors token contracts for upgrades, large transactions, and other events.
"""

import asyncio
import logging
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
from datetime import datetime

import aiohttp
import requests

logger = logging.getLogger(__name__)

@dataclass
class TokenContract:
    token_slug: str
    network_slug: str
    contract_address: str
    token_name: str
    full_name: str

class ContractMonitor:
    def __init__(self, config):
        self.config = config
        self.session: Optional[aiohttp.ClientSession] = None
    
    async def get_session(self) -> aiohttp.ClientSession:
        """Get or create an aiohttp session"""
        if self.session is None or self.session.closed:
            self.session = aiohttp.ClientSession()
        return self.session
    
    async def close(self):
        """Close the aiohttp session"""
        if self.session and not self.session.closed:
            await self.session.close()
    
    async def get_all_contracts(self) -> List[TokenContract]:
        """Fetch all token contracts from the Bitcoin Layers API"""
        logger.info("Fetching all token contracts from Bitcoin Layers API...")
        
        try:
            # Fetch token implementations (reusing logic from find_missing_reviews.py)
            url = f"{self.config.btc_api_base_url}/current_supplies_by_tokenimpl"
            
            session = await self.get_session()
            async with session.get(url) as response:
                if response.status != 200:
                    logger.error(f"Failed to fetch contracts: HTTP {response.status}")
                    return []
                
                data = await response.json()
                
                contracts = []
                for item in data:
                    try:
                        # Parse the token implementation format: "TokenName-tokenSlug_NetworkSlug"
                        token_impl = item.get('token_implementation', '')
                        if not token_impl or '_' not in token_impl:
                            continue
                        
                        # Split token part and network part
                        token_part, network_slug = token_impl.rsplit('_', 1)
                        if '-' not in token_part:
                            continue
                        
                        # Extract token slug (everything after the last dash)
                        token_name_part, token_slug = token_part.rsplit('-', 1)
                        
                        # For now, we'll skip contracts without explicit addresses
                        # In a real implementation, you'd need to map these to actual contract addresses
                        # This would require additional data sources or manual mapping
                        
                        contract = TokenContract(
                            token_slug=token_slug.lower(),
                            network_slug=network_slug.lower(),
                            contract_address=f"0x{token_slug.lower()[:40].ljust(40, '0')}",  # Placeholder for now
                            token_name=token_name_part,
                            full_name=token_impl
                        )
                        contracts.append(contract)
                        
                    except Exception as e:
                        logger.warning(f"Failed to parse token implementation {item}: {e}")
                        continue
                
                logger.info(f"Successfully fetched {len(contracts)} contracts")
                return contracts[:self.config.max_contracts_per_cycle]  # Limit for rate limiting
                
        except Exception as e:
            logger.error(f"Error fetching contracts: {e}")
            return []
    
    async def check_contract_changes(self, contract: TokenContract) -> List[Dict[str, Any]]:
        """Check a specific contract for changes"""
        changes = []
        
        try:
            # For now, this is a placeholder implementation
            # In a real scenario, you would:
            # 1. Check if this is an Ethereum/EVM contract and use Etherscan API
            # 2. Check if this is a Bitcoin contract and use appropriate block explorer
            # 3. Look for upgrade events, large transactions, etc.
            
            if self.config.monitor_contract_upgrades:
                upgrade_changes = await self._check_contract_upgrades(contract)
                changes.extend(upgrade_changes)
            
            if self.config.monitor_large_transactions:
                transaction_changes = await self._check_large_transactions(contract)
                changes.extend(transaction_changes)
            
        except Exception as e:
            logger.error(f"Error checking contract {contract.contract_address}: {e}")
        
        return changes
    
    async def _check_contract_upgrades(self, contract: TokenContract) -> List[Dict[str, Any]]:
        """Check for contract upgrades (placeholder implementation)"""
        # This is a placeholder - in reality you would:
        # 1. Query the appropriate block explorer API
        # 2. Look for proxy upgrade events
        # 3. Check if the implementation address has changed
        
        # For demonstration, we'll return an empty list
        # In practice, you'd implement network-specific logic here
        return []
    
    async def _check_large_transactions(self, contract: TokenContract) -> List[Dict[str, Any]]:
        """Check for large transactions (placeholder implementation)"""
        # This is a placeholder - in reality you would:
        # 1. Query recent transactions for the contract
        # 2. Parse transaction amounts
        # 3. Compare against the threshold
        
        # For demonstration, we'll return an empty list
        # In practice, you'd implement network-specific logic here
        return []
    
    async def _get_etherscan_api_key(self) -> Optional[str]:
        """Get Etherscan API key from environment"""
        import os
        return os.getenv('ETHERSCAN_API_KEY')
    
    async def _check_ethereum_contract(self, contract: TokenContract) -> List[Dict[str, Any]]:
        """Check Ethereum contract for changes (example implementation)"""
        changes = []
        api_key = await self._get_etherscan_api_key()
        
        if not api_key:
            logger.warning("No Etherscan API key provided, skipping Ethereum contract checks")
            return changes
        
        try:
            # Example: Check for recent transactions
            session = await self.get_session()
            url = f"https://api.etherscan.io/api"
            params = {
                'module': 'account',
                'action': 'txlist',
                'address': contract.contract_address,
                'startblock': 0,
                'endblock': 99999999,
                'page': 1,
                'offset': 10,  # Last 10 transactions
                'sort': 'desc',
                'apikey': api_key
            }
            
            async with session.get(url, params=params) as response:
                if response.status == 200:
                    data = await response.json()
                    if data.get('status') == '1':
                        transactions = data.get('result', [])
                        
                        # Check for large transactions
                        for tx in transactions:
                            try:
                                value_wei = int(tx.get('value', '0'))
                                value_eth = value_wei / 10**18
                                
                                if value_eth > self.config.large_transaction_threshold_btc:  # Using BTC threshold for ETH for simplicity
                                    changes.append({
                                        'type': 'large_transaction',
                                        'description': f'Large transaction of {value_eth:.2f} ETH',
                                        'amount': f'{value_eth:.2f} ETH',
                                        'tx_hash': tx.get('hash'),
                                        'timestamp': datetime.fromtimestamp(int(tx.get('timeStamp', '0')))
                                    })
                            except (ValueError, TypeError):
                                continue
            
        except Exception as e:
            logger.error(f"Error checking Ethereum contract {contract.contract_address}: {e}")
        
        return changes

# Example usage and testing functions
async def test_contract_monitor():
    """Test the contract monitor"""
    from config import Config
    
    config = Config()
    monitor = ContractMonitor(config)
    
    try:
        contracts = await monitor.get_all_contracts()
        print(f"Found {len(contracts)} contracts:")
        
        for contract in contracts[:5]:  # Show first 5
            print(f"  - {contract.token_name} ({contract.token_slug}) on {contract.network_slug}")
            print(f"    Address: {contract.contract_address}")
            
            changes = await monitor.check_contract_changes(contract)
            if changes:
                print(f"    Changes: {len(changes)}")
                for change in changes:
                    print(f"      - {change['type']}: {change['description']}")
            else:
                print(f"    No changes detected")
            print()
    
    finally:
        await monitor.close()

if __name__ == "__main__":
    asyncio.run(test_contract_monitor())