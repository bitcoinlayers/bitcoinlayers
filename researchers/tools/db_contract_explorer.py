#!/usr/bin/env python3
"""
Database Contract Explorer for Bitcoin Layers
Connects to the Bitcoin Layers database and displays token contracts by network

Usage:
    python db_contract_explorer.py --network solana
    python db_contract_explorer.py --network ethereum
    python db_contract_explorer.py --list-networks
    python db_contract_explorer.py --token bitgo_wbtc
    python db_contract_explorer.py --token-networks bitgo_wbtc
"""

import argparse
import asyncio
import json
import os
import sys
from dataclasses import dataclass
from typing import List, Optional, Dict, Any
from urllib.parse import urlencode

import aiohttp
from dotenv import load_dotenv

# Load environment variables from project root
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
env_path = os.path.join(project_root, '.env.local')
load_dotenv(env_path)

@dataclass
class TokenContract:
    """Represents a token contract from the database"""
    token_slug: str
    token_name: str
    network_slug: str
    network_name: str
    token_address: Optional[str] = None
    explorer: Optional[str] = None
    total_balance: Optional[float] = None
    rank: Optional[int] = None
    
    def __str__(self) -> str:
        """String representation for display"""
        return f"{self.token_name} ({self.token_slug}) on {self.network_name}"
    
    @property
    def full_explorer_url(self) -> Optional[str]:
        """Get the complete explorer URL for the contract"""
        if self.explorer and self.token_address:
            return f"{self.explorer}{self.token_address}"
        return None

@dataclass
class NetworkSummary:
    """Represents a network summary from the database"""
    network_slug: str
    network_name: str
    total_balance: float
    rank: Optional[int]
    token_count: int
    tokens: List[str]
    
    def __str__(self) -> str:
        return f"{self.network_name}: {self.token_count} tokens, {self.total_balance:.2f} BTC total"

class DatabaseContractExplorer:
    """Main class for exploring Bitcoin Layers database contracts"""
    
    def __init__(self):
        # Get API URL from environment, fallback to default
        self.api_base_url = os.getenv('NEXT_PUBLIC_API_URL', 'https://api.btc-locked.com')
        self.session: Optional[aiohttp.ClientSession] = None
    
    async def __aenter__(self):
        """Async context manager entry"""
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        """Async context manager exit"""
        if self.session:
            await self.session.close()
    
    async def _make_request(self, endpoint: str, params: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        """Make an HTTP request to the API"""
        if not self.session:
            raise RuntimeError("Session not initialized. Use async context manager.")
        
        url = f"{self.api_base_url}/{endpoint}"
        if params:
            url += f"?{urlencode(params)}"
        
        try:
            async with self.session.get(url) as response:
                if response.status != 200:
                    raise Exception(f"API request failed with status {response.status}: {await response.text()}")
                
                data = await response.json()
                return data if isinstance(data, list) else [data]
                
        except aiohttp.ClientError as e:
            raise Exception(f"Network error: {e}")
        except json.JSONDecodeError as e:
            raise Exception(f"Invalid JSON response: {e}")
    
    async def get_contracts_by_network(self, network_slug: str) -> List[TokenContract]:
        """Get all token contracts for a specific network"""
        params = {'network_slug': f'ilike.{network_slug}'}
        data = await self._make_request('current_supplies_by_tokenimpl', params)
        
        contracts = []
        for item in data:
            # Parse the token_implementation format: "TokenName-tokenSlug_NetworkSlug"
            token_impl = item.get('token_implementation', '')
            if not token_impl or '_' not in token_impl:
                continue
            
            # Split token part and network part
            token_part, parsed_network_slug = token_impl.rsplit('_', 1)
            if '-' not in token_part:
                continue
            
            # Extract token name and slug
            token_name_part, token_slug = token_part.rsplit('-', 1)
            
            contract = TokenContract(
                token_slug=token_slug.lower(),
                token_name=token_name_part,
                network_slug=parsed_network_slug.lower(),
                network_name=item.get('network_name', parsed_network_slug),
                token_address=item.get('token_address'),
                explorer=item.get('explorer'),
                total_balance=item.get('balance'),  # Changed from 'total_balance' to 'balance'
                rank=item.get('rank')
            )
            contracts.append(contract)
        
        return contracts
    
    async def get_contracts_by_token(self, token_slug: str) -> List[TokenContract]:
        """Get all contracts for a specific token across networks"""
        params = {'token_slug': f'ilike.{token_slug}'}
        data = await self._make_request('current_supplies_by_tokenimpl', params)
        
        contracts = []
        for item in data:
            token_impl = item.get('token_implementation', '')
            if not token_impl or '_' not in token_impl:
                continue
            
            token_part, network_slug = token_impl.rsplit('_', 1)
            if '-' not in token_part:
                continue
            
            token_name_part, parsed_token_slug = token_part.rsplit('-', 1)
            
            contract = TokenContract(
                token_slug=parsed_token_slug.lower(),
                token_name=token_name_part,
                network_slug=network_slug.lower(),
                network_name=item.get('network_name', network_slug),
                token_address=item.get('token_address'),
                explorer=item.get('explorer'),
                total_balance=item.get('balance'),
                rank=item.get('rank')
            )
            contracts.append(contract)
        
        return contracts
    
    async def get_all_networks(self) -> List[NetworkSummary]:
        """Get summary of all networks with token contracts"""
        data = await self._make_request('current_supplies_by_network')
        
        networks = []
        for item in data:
            network = NetworkSummary(
                network_slug=item.get('network_slug', ''),
                network_name=item.get('network_name', ''),
                total_balance=item.get('total_balance', 0.0),
                rank=item.get('rank'),
                token_count=len(item.get('tokens', [])),
                tokens=item.get('tokens', [])
            )
            networks.append(network)
        
        return networks
    
    async def search_contracts(self, query: str) -> List[TokenContract]:
        """Search for contracts by token name or network name"""
        # Try both token and network searches
        token_results = []
        network_results = []
        
        try:
            token_results = await self.get_contracts_by_token(query)
        except:
            pass
        
        try:
            network_results = await self.get_contracts_by_network(query)
        except:
            pass
        
        # Combine and deduplicate results
        all_results = token_results + network_results
        seen = set()
        unique_results = []
        
        for contract in all_results:
            key = (contract.token_slug, contract.network_slug)
            if key not in seen:
                seen.add(key)
                unique_results.append(contract)
        
        return unique_results

def format_contracts_table(contracts: List[TokenContract]) -> str:
    """Format contracts as a nice table"""
    if not contracts:
        return "No contracts found."
    
    # Calculate column widths
    max_token_name = max(len(c.token_name) for c in contracts)
    max_token_slug = max(len(c.token_slug) for c in contracts)
    max_network_name = max(len(c.network_name) for c in contracts)
    max_balance = max(len(f"{c.total_balance:.4f}" if c.total_balance else "N/A") for c in contracts)
    max_address = max(len(c.token_address[:16] + "..." if c.token_address and len(c.token_address) > 19 else c.token_address or "N/A") for c in contracts)
    
    # Ensure minimum widths
    max_token_name = max(max_token_name, len("Token Name"))
    max_token_slug = max(max_token_slug, len("Token Slug"))
    max_network_name = max(max_network_name, len("Network"))
    max_balance = max(max_balance, len("Balance (BTC)"))
    max_address = max(max_address, len("Contract Address"))
    
    # Create header
    header = f"{'Token Name':<{max_token_name}} | {'Token Slug':<{max_token_slug}} | {'Network':<{max_network_name}} | {'Contract Address':<{max_address}} | {'Balance (BTC)':>{max_balance}} | Rank"
    separator = "-" * len(header)
    
    lines = [header, separator]
    
    # Add contract rows
    for contract in contracts:
        balance_str = f"{contract.total_balance:.4f}" if contract.total_balance else "N/A"
        rank_str = str(contract.rank) if contract.rank else "N/A"
        
        # Truncate long addresses for table display
        address_display = "N/A"
        if contract.token_address:
            if len(contract.token_address) > 19:
                address_display = contract.token_address[:16] + "..."
            else:
                address_display = contract.token_address
        
        line = f"{contract.token_name:<{max_token_name}} | {contract.token_slug:<{max_token_slug}} | {contract.network_name:<{max_network_name}} | {address_display:<{max_address}} | {balance_str:>{max_balance}} | {rank_str}"
        lines.append(line)
    
    # Add explorer URLs section if any contracts have them
    has_explorer_urls = any(c.full_explorer_url for c in contracts)
    if has_explorer_urls:
        lines.append("")
        lines.append("🔗 Explorer URLs:")
        for contract in contracts:
            if contract.full_explorer_url:
                lines.append(f"  {contract.token_name} ({contract.network_name}): {contract.full_explorer_url}")
    
    return "\n".join(lines)

def format_networks_table(networks: List[NetworkSummary]) -> str:
    """Format networks as a nice table"""
    if not networks:
        return "No networks found."
    
    # Sort by total balance descending
    networks.sort(key=lambda n: n.total_balance, reverse=True)
    
    # Calculate column widths
    max_network_name = max(len(n.network_name) for n in networks)
    max_network_slug = max(len(n.network_slug) for n in networks)
    max_balance = max(len(f"{n.total_balance:.2f}") for n in networks)
    max_tokens = max(len(str(n.token_count)) for n in networks)
    
    # Ensure minimum widths
    max_network_name = max(max_network_name, len("Network Name"))
    max_network_slug = max(max_network_slug, len("Network Slug"))
    max_balance = max(max_balance, len("Total BTC"))
    max_tokens = max(max_tokens, len("Tokens"))
    
    # Create header
    header = f"{'Network Name':<{max_network_name}} | {'Network Slug':<{max_network_slug}} | {'Total BTC':>{max_balance}} | {'Tokens':>{max_tokens}} | Rank"
    separator = "-" * len(header)
    
    lines = [header, separator]
    
    # Add network rows
    for network in networks:
        rank_str = str(network.rank) if network.rank else "N/A"
        line = f"{network.network_name:<{max_network_name}} | {network.network_slug:<{max_network_slug}} | {network.total_balance:>{max_balance}.2f} | {network.token_count:>{max_tokens}} | {rank_str}"
        lines.append(line)
    
    return "\n".join(lines)

def format_token_networks_summary(contracts: List[TokenContract], token_slug: str) -> str:
    """Format a network-focused summary for a specific token"""
    if not contracts:
        return f"No networks found for token: {token_slug}"
    
    # Sort by balance descending
    contracts.sort(key=lambda c: c.total_balance or 0, reverse=True)
    
    token_name = contracts[0].token_name if contracts else token_slug
    total_networks = len(contracts)
    total_balance = sum(c.total_balance or 0 for c in contracts)
    
    # Calculate column widths for the table
    max_network_name = max(len(c.network_name) for c in contracts)
    max_balance = max(len(f"{c.total_balance:.4f}" if c.total_balance else "N/A") for c in contracts)
    max_rank = max(len(str(c.rank) if c.rank else "N/A") for c in contracts)
    
    # Ensure minimum widths
    max_network_name = max(max_network_name, len("Network"))
    max_balance = max(max_balance, len("Balance (BTC)"))
    max_rank = max(max_rank, len("Rank"))
    
    lines = [
        f"🪙 {token_name} ({token_slug})",
        f"📊 Deployed on {total_networks} networks with {total_balance:.4f} BTC total",
        "",
        f"{'Network':<{max_network_name}} | {'Balance (BTC)':>{max_balance}} | {'Rank':>{max_rank}} | Contract Address"
    ]
    
    separator = "-" * (max_network_name + max_balance + max_rank + 20)
    lines.append(separator)
    
    # Add network rows
    for contract in contracts:
        balance_str = f"{contract.total_balance:.4f}" if contract.total_balance else "N/A"
        rank_str = str(contract.rank) if contract.rank else "N/A"
        address_display = contract.token_address[:20] + "..." if contract.token_address and len(contract.token_address) > 23 else (contract.token_address or "N/A")
        
        line = f"{contract.network_name:<{max_network_name}} | {balance_str:>{max_balance}} | {rank_str:>{max_rank}} | {address_display}"
        lines.append(line)
    
    # Add top networks summary
    if len(contracts) >= 3:
        lines.extend([
            "",
            "🏆 Top 3 Networks by Balance:",
            f"  1. {contracts[0].network_name}: {contracts[0].total_balance:.4f} BTC",
            f"  2. {contracts[1].network_name}: {contracts[1].total_balance:.4f} BTC",
            f"  3. {contracts[2].network_name}: {contracts[2].total_balance:.4f} BTC"
        ])
    
    return "\n".join(lines)

async def main():
    parser = argparse.ArgumentParser(description="Explore Bitcoin Layers database token contracts")
    parser.add_argument("--network", "-n", help="Filter contracts by network slug (e.g., solana, ethereum)")
    parser.add_argument("--token", "-t", help="Filter contracts by token slug (e.g., wbtc, usdt)")
    parser.add_argument("--token-networks", "-tn", help="Show network-focused summary for a token (e.g., bitgo_wbtc)")
    parser.add_argument("--list-networks", "-l", action="store_true", help="List all available networks")
    parser.add_argument("--search", "-s", help="Search contracts by token or network name")
    parser.add_argument("--output", "-o", choices=["table", "json"], default="table", help="Output format")
    parser.add_argument("--api-url", help="Override API base URL")
    
    args = parser.parse_args()
    
    # Validate arguments
    if not any([args.network, args.token, args.token_networks, args.list_networks, args.search]):
        parser.error("Must specify one of: --network, --token, --token-networks, --list-networks, or --search")
    
    try:
        async with DatabaseContractExplorer() as explorer:
            # Override API URL if provided
            if args.api_url:
                explorer.api_base_url = args.api_url
            
            if args.list_networks:
                print("🌐 Fetching all networks...")
                networks = await explorer.get_all_networks()
                print(f"\n📊 Found {len(networks)} networks:\n")
                
                if args.output == "json":
                    network_data = [
                        {
                            "network_slug": n.network_slug,
                            "network_name": n.network_name,
                            "total_balance": n.total_balance,
                            "rank": n.rank,
                            "token_count": n.token_count,
                            "tokens": n.tokens
                        }
                        for n in networks
                    ]
                    print(json.dumps(network_data, indent=2))
                else:
                    print(format_networks_table(networks))
                    
            elif args.network:
                print(f"🔍 Fetching contracts for network: {args.network}")
                contracts = await explorer.get_contracts_by_network(args.network)
                print(f"\n📄 Found {len(contracts)} contracts on {args.network}:\n")
                
                if args.output == "json":
                    contract_data = [
                        {
                            "token_slug": c.token_slug,
                            "token_name": c.token_name,
                            "network_slug": c.network_slug,
                            "network_name": c.network_name,
                            "token_address": c.token_address,
                            "explorer": c.explorer,
                            "explorer_url": c.full_explorer_url,
                            "total_balance": c.total_balance,
                            "rank": c.rank
                        }
                        for c in contracts
                    ]
                    print(json.dumps(contract_data, indent=2))
                else:
                    print(format_contracts_table(contracts))
                    
            elif args.token:
                print(f"🔍 Fetching contracts for token: {args.token}")
                contracts = await explorer.get_contracts_by_token(args.token)
                print(f"\n📄 Found {len(contracts)} contracts for {args.token}:\n")
                
                if args.output == "json":
                    contract_data = [
                        {
                            "token_slug": c.token_slug,
                            "token_name": c.token_name,
                            "network_slug": c.network_slug,
                            "network_name": c.network_name,
                            "token_address": c.token_address,
                            "explorer": c.explorer,
                            "explorer_url": c.full_explorer_url,
                            "total_balance": c.total_balance,
                            "rank": c.rank
                        }
                        for c in contracts
                    ]
                    print(json.dumps(contract_data, indent=2))
                else:
                    print(format_contracts_table(contracts))
                    
            elif args.token_networks:
                print(f"🌐 Fetching network summary for token: {args.token_networks}")
                contracts = await explorer.get_contracts_by_token(args.token_networks)
                print()
                print(format_token_networks_summary(contracts, args.token_networks))
                    
            elif args.search:
                print(f"🔍 Searching for: {args.search}")
                contracts = await explorer.search_contracts(args.search)
                print(f"\n📄 Found {len(contracts)} contracts matching '{args.search}':\n")
                
                if args.output == "json":
                    contract_data = [
                        {
                            "token_slug": c.token_slug,
                            "token_name": c.token_name,
                            "network_slug": c.network_slug,
                            "network_name": c.network_name,
                            "token_address": c.token_address,
                            "explorer": c.explorer,
                            "explorer_url": c.full_explorer_url,
                            "total_balance": c.total_balance,
                            "rank": c.rank
                        }
                        for c in contracts
                    ]
                    print(json.dumps(contract_data, indent=2))
                else:
                    print(format_contracts_table(contracts))
                    
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(main())
