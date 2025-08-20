#!/usr/bin/env python3
"""
Ethereum Token Contract Analyzer

This script analyzes an Ethereum token contract to determine:
- If it's verified on Etherscan
- If it's an upgradeable proxy contract (EIP-1967)
- If it's ownable and who the current owner is
"""

import json
import os
import requests
from web3 import Web3
from typing import Optional, Dict, Any
from dotenv import load_dotenv

# Load environment variables from .env.local file (two directories up from this script)
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env.local"))

# Configuration - Select network and contract to analyze
NETWORK = "bob"  # Change this: "ethereum", "polygon", "arbitrum", "bsc", "bob", "base"
TOKEN_ADDRESS = "0xA45d4121b3D47719FF57a947A9d961539Ba33204"  # Update this address to analyze different contracts
LAYER_NAME = "BOB"  # Layer name for directory organization
WRAPPER_NAME = "Lombard LBTC"  # Wrapper name for this token
# Network configurations
NETWORK_CONFIGS = {
    "ethereum": {
        "rpc_url": os.getenv("ETHEREUM_RPC_URL"),
        "api_key": os.getenv("ETHEREUM_API_KEY"),
        "api_base": "https://api.etherscan.io/api",
    },
    "base": {
        "rpc_url": os.getenv("BASE_RPC_URL"),
        "api_key": os.getenv("ETHEREUM_API_KEY"),
        "api_base": "https://api.etherscan.io/v2/api?chainid=8453",
    },
    "bob": {
        "rpc_url": os.getenv("BOB_RPC_URL"),
        "api_key": os.getenv("BOB_API_KEY"),
        "api_base": "https://explorer.gobob.xyz/api"
    },
}

# Get current network config
current_config = NETWORK_CONFIGS.get(NETWORK)
if not current_config:
    raise ValueError(f"Network '{NETWORK}' not supported. Available networks: {list(NETWORK_CONFIGS.keys())}")

# Extract current network configuration
ALCHEMY_RPC_URL = current_config["rpc_url"]
ETHERSCAN_API_KEY = current_config["api_key"] 
API_BASE_URL = current_config["api_base"]

# Validate required environment variables for current network
if not ALCHEMY_RPC_URL:
    raise ValueError(f"{NETWORK.upper()}_RPC_URL environment variable is required")
if not ETHERSCAN_API_KEY:
    raise ValueError(f"{NETWORK.upper()}_API_KEY environment variable is required")

# EIP-1967 storage slots
EIP1967_IMPLEMENTATION_SLOT = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
EIP1967_ADMIN_SLOT = "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103"

class TokenAnalyzer:
    def __init__(self, rpc_url: str, etherscan_api_key: str):
        self.w3 = Web3(Web3.HTTPProvider(rpc_url))
        self.etherscan_api_key = etherscan_api_key
        
        if not self.w3.is_connected():
            raise ConnectionError("Failed to connect to Ethereum network")
    
    def get_contract_abi(self, address: str) -> Optional[Dict[str, Any]]:
        """
        Fetch contract ABI from Etherscan API
        """
        url = API_BASE_URL
        params = {
            "module": "contract",
            "action": "getsourcecode",
            "address": address,
            "apikey": self.etherscan_api_key
        }
        
        try:
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            data = response.json()
            
            if data["status"] != "1":
                print(f"Etherscan API error: {data.get('message', 'Unknown error')}")
                return None
            
            result = data["result"][0]
            abi_string = result.get("ABI")
            
            if abi_string == "Contract source code not verified":
                return {"verified": False, "abi": None}
            
            try:
                abi = json.loads(abi_string)
                return {"verified": True, "abi": abi}
            except json.JSONDecodeError:
                print("Failed to parse ABI JSON")
                return {"verified": False, "abi": None}
                
        except requests.RequestException as e:
            print(f"Failed to fetch ABI from Etherscan: {e}")
            return None
    
    def check_proxy_pattern(self, address: str) -> Dict[str, Any]:
        """
        Check if the contract follows EIP-1967 proxy pattern
        """
        proxy_info = {
            "is_proxy": False,
            "implementation_address": None,
            "admin_address": None
        }
        
        try:
            # Check implementation slot (EIP-1967)
            impl_slot_data = self.w3.eth.get_storage_at(address, EIP1967_IMPLEMENTATION_SLOT)
            
            if impl_slot_data != b'\x00' * 32:
                # Extract address from storage (last 20 bytes)
                impl_bytes = impl_slot_data[-20:]
                impl_hex = impl_bytes.hex()
                
                # Handle case where hex() might include 0x prefix
                if impl_hex.startswith('0x'):
                    impl_address = impl_hex
                else:
                    impl_address = '0x' + impl_hex
                
                if impl_address != '0x' + '00' * 20:  # Check if not zero address
                    proxy_info["is_proxy"] = True
                    # Ensure proper hex format before checksum conversion
                    if len(impl_address) == 42:  # 0x + 40 hex chars
                        proxy_info["implementation_address"] = Web3.to_checksum_address(impl_address)
            
            # Check admin slot (EIP-1967)
            admin_slot_data = self.w3.eth.get_storage_at(address, EIP1967_ADMIN_SLOT)
            
            if admin_slot_data != b'\x00' * 32:
                admin_bytes = admin_slot_data[-20:]
                admin_address = '0x' + admin_bytes.hex()
                if admin_address != '0x' + '00' * 20:
                    # Ensure proper hex format before checksum conversion
                    if len(admin_address) == 42:  # 0x + 40 hex chars
                        proxy_info["admin_address"] = Web3.to_checksum_address(admin_address)
        
        except Exception as e:
            print(f"Error checking proxy pattern: {e}")
        
        return proxy_info
    
    def discover_contract_roles(self, address: str, abi: list) -> Dict[str, Any]:
        """
        Discover all roles and addresses from the contract by analyzing the ABI
        """
        roles_info = {}
        contract = self.w3.eth.contract(address=Web3.to_checksum_address(address), abi=abi)
        
        # Common role function patterns to look for
        role_patterns = [
            'owner', 'admin', 'bridge', 'minter', 'pauser', 'upgrader', 'governor',
            'treasury', 'vault', 'controller', 'manager', 'operator', 'guardian',
            'timelock', 'multisig', 'dao', 'factory', 'implementation', 'proxy'
        ]
        
        # Find all view functions that return addresses
        address_functions = []
        all_view_functions = []
        
        for item in abi:
            if item.get('type') == 'function':
                func_name = item.get('name', '')
                inputs = item.get('inputs', [])
                outputs = item.get('outputs', [])
                state_mut = item.get('stateMutability', '')
                
                # Track all view functions for debugging
                if state_mut in ['view', 'pure']:
                    all_view_functions.append(f"{func_name}({len(inputs)} inputs)")
                
                # Look for view functions with no inputs that return addresses
                if (state_mut in ['view', 'pure'] and 
                    len(inputs) == 0 and 
                    len(outputs) == 1 and 
                    outputs[0].get('type') == 'address'):
                    address_functions.append(func_name)
        
        print(f"   🔍 Found {len(all_view_functions)} total view functions")
        print(f"   🔍 Found {len(address_functions)} address-returning functions with no inputs")
        
        # Debug: show some view function names
        if len(all_view_functions) > 0:
            print(f"   📋 Sample view functions: {', '.join(all_view_functions[:5])}{'...' if len(all_view_functions) > 5 else ''}")
        
        # Call each function and organize results
        for func_name in address_functions:
            try:
                if hasattr(contract.functions, func_name):
                    result = getattr(contract.functions, func_name)().call()
                    if result and result != '0x0000000000000000000000000000000000000000':
                        checksum_addr = Web3.to_checksum_address(result)
                        
                        # Categorize the function based on name patterns
                        category = self._categorize_function(func_name, role_patterns)
                        
                        # Check if the address is a contract or EOA
                        addr_type = self._get_address_type(checksum_addr)
                        
                        roles_info[func_name] = {
                            'address': checksum_addr,
                            'category': category,
                            'type': addr_type
                        }
                        
            except Exception as e:
                # Silently skip functions that fail (might be deprecated or require parameters)
                continue
        
        return roles_info
    
    def _categorize_function(self, func_name: str, patterns: list) -> str:
        """
        Categorize function based on name patterns
        """
        func_lower = func_name.lower()
        
        for pattern in patterns:
            if pattern in func_lower:
                return pattern.title()
        
        # Additional specific categorizations
        if any(word in func_lower for word in ['has_role', 'role', 'access']):
            return 'Access Control'
        elif any(word in func_lower for word in ['token', 'underlying', 'asset']):
            return 'Token'
        elif any(word in func_lower for word in ['fee', 'rate', 'price']):
            return 'Fee/Rate'
        else:
            return 'Other'
    
    def _get_address_type(self, address: str) -> str:
        """
        Determine if address is a contract or EOA
        """
        try:
            code = self.w3.eth.get_code(address)
            return "Contract" if code != b'' else "EOA"
        except:
            return "Unknown"
    
    def analyze_governance_structure(self, address: str, max_depth: int = 2, current_depth: int = 0) -> Dict[str, Any]:
        """
        Recursively analyze governance structure of a contract
        """
        if current_depth >= max_depth:
            return {"analysis_depth_exceeded": True}
        
        governance_info = {
            "address": address,
            "type": self._get_address_type(address),
            "is_gnosis_safe": False,
            "is_proxy": False,
            "roles": {},
            "governance_details": {}
        }
        
        if governance_info["type"] != "Contract":
            return governance_info
        
        try:
            # Check if it's a Gnosis Safe
            safe_info = self._check_gnosis_safe(address)
            if safe_info:
                governance_info["is_gnosis_safe"] = True
                governance_info["governance_details"] = safe_info
            
            # Check if it's a proxy
            proxy_info = self.check_proxy_pattern(address)
            if proxy_info["is_proxy"]:
                governance_info["is_proxy"] = True
                governance_info["implementation"] = proxy_info["implementation_address"]
                governance_info["admin"] = proxy_info["admin_address"]
                
                # Recursively analyze proxy admin if it exists
                if proxy_info["admin_address"] and current_depth < max_depth - 1:
                    governance_info["admin_analysis"] = self.analyze_governance_structure(
                        proxy_info["admin_address"], max_depth, current_depth + 1
                    )
            
            # Try to get ABI and analyze roles (only for important contracts)
            if not governance_info["is_gnosis_safe"]:  # Skip role analysis for Gnosis Safes
                abi_data = self.get_contract_abi(address)
                if abi_data and abi_data["verified"] and abi_data["abi"]:
                    roles = self.discover_contract_roles(address, abi_data["abi"])
                    governance_info["roles"] = roles
                    
                    # Recursively analyze key roles (owner, admin) if depth allows
                    if current_depth < max_depth - 1:
                        for role_name, role_info in roles.items():
                            if any(key_role in role_name.lower() for key_role in ['owner', 'admin']) and role_info['type'] == 'Contract':
                                role_analysis = self.analyze_governance_structure(
                                    role_info['address'], max_depth, current_depth + 1
                                )
                                governance_info[f"{role_name}_analysis"] = role_analysis
                                
        except Exception as e:
            governance_info["error"] = str(e)[:100]
        
        return governance_info
    
    def _check_gnosis_safe(self, address: str) -> Optional[Dict[str, Any]]:
        """
        Check if an address is a Gnosis Safe and get threshold/owners
        """
        try:
            # Standard Gnosis Safe ABI for the functions we need
            gnosis_safe_abi = [
                {
                    "constant": True,
                    "inputs": [],
                    "name": "getThreshold",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "type": "function"
                },
                {
                    "constant": True,
                    "inputs": [],
                    "name": "getOwners",
                    "outputs": [{"name": "", "type": "address[]"}],
                    "type": "function"
                }
            ]
            
            contract = self.w3.eth.contract(address=Web3.to_checksum_address(address), abi=gnosis_safe_abi)
            
            # Try to call Gnosis Safe functions
            threshold = contract.functions.getThreshold().call()
            owners = contract.functions.getOwners().call()
            
            return {
                "threshold": threshold,
                "total_owners": len(owners),
                "owners": [Web3.to_checksum_address(owner) for owner in owners],
                "multisig_type": f"{threshold}/{len(owners)} Gnosis Safe"
            }
            
        except Exception:
            # Not a Gnosis Safe or different version
            return None
    
    def analyze_contract(self, address: str) -> Dict[str, Any]:
        """
        Perform complete analysis of the contract
        """
        print(f"Analyzing contract: {address}")
        print("=" * 50)
        
        # Normalize address
        address = Web3.to_checksum_address(address)
        
        analysis = {
            "address": address,
            "verified": False,
            "is_proxy": False,
            "implementation_address": None,
            "admin_address": None,
            "roles": {}
        }
        
        # Step 1: Get ABI from Etherscan
        print("1. Fetching contract ABI from Etherscan...")
        abi_data = self.get_contract_abi(address)
        
        if abi_data is None:
            print("   ❌ Failed to fetch contract data")
            return analysis
        
        analysis["verified"] = abi_data["verified"]
        
        if not abi_data["verified"]:
            print("   ❌ Contract is not verified on Etherscan")
        else:
            print("   ✅ Contract is verified on Etherscan")
        
        # Step 2: Check for proxy pattern
        print("\n2. Checking for proxy pattern (EIP-1967)...")
        proxy_info = self.check_proxy_pattern(address)
        
        analysis.update(proxy_info)
        
        if proxy_info["is_proxy"]:
            print(f"   ✅ Contract is an upgradeable proxy")
            print(f"   📍 Implementation: {proxy_info['implementation_address']}")
            if proxy_info["admin_address"]:
                print(f"   👤 Admin: {proxy_info['admin_address']}")
        else:
            print("   ❌ Contract is not a proxy (or doesn't follow EIP-1967)")
        
        # Step 3: Discover all roles and addresses (only if verified)
        print("\n3. Discovering contract roles and addresses...")
        if abi_data["verified"] and abi_data["abi"]:
            # If this is a proxy, we need the implementation's ABI to see all functions
            abi_to_use = abi_data["abi"]
            address_to_call = address
            
            if analysis["is_proxy"] and analysis["implementation_address"]:
                print("   🔄 Proxy detected - fetching implementation ABI for complete analysis...")
                impl_abi_data = self.get_contract_abi(analysis["implementation_address"])
                
                if impl_abi_data and impl_abi_data["verified"] and impl_abi_data["abi"]:
                    print("   ✅ Implementation contract is verified - using implementation ABI")
                    abi_to_use = impl_abi_data["abi"]
                    # Still call functions on proxy address (which delegates to implementation)
                else:
                    print("   ⚠️  Implementation contract not verified - using proxy ABI")
            
            roles = self.discover_contract_roles(address_to_call, abi_to_use)
            analysis["roles"] = roles
            
            if roles:
                print(f"   ✅ Found {len(roles)} role/address functions")
                
                # Perform deep governance analysis on contract addresses
                print("   🔍 Analyzing governance structure of discovered contracts...")
                governance_analysis = {}
                
                for func_name, info in roles.items():
                    if info['type'] == 'Contract':
                        print(f"      🔍 Analyzing {func_name}: {info['address'][:10]}...")
                        governance_analysis[func_name] = self.analyze_governance_structure(info['address'])
                
                analysis["governance_analysis"] = governance_analysis
                
                # Group by category for better display
                categories = {}
                for func_name, info in roles.items():
                    category = info['category']
                    if category not in categories:
                        categories[category] = []
                    categories[category].append((func_name, info))
                
                # Display a preview of key roles
                key_roles = ['owner', 'admin', 'bridge', 'minter', 'pauser']
                for role in key_roles:
                    role_found = False
                    for func_name, info in roles.items():
                        if role.lower() in func_name.lower():
                            print(f"   👤 {func_name}: {info['address']} ({info['type']})")
                            role_found = True
                            break
                    if role_found:
                        continue
            else:
                print("   ❌ No role/address functions found")
        else:
            print("   ⚠️  Cannot discover roles - contract not verified")
        
        return analysis
    
    def print_summary(self, analysis: Dict[str, Any]):
        """
        Print a formatted summary of the analysis
        """
        print("\n" + "=" * 70)
        print("CONTRACT ANALYSIS SUMMARY")
        print("=" * 70)
        
        print(f"Contract Address:      {analysis['address']}")
        print(f"Verified on Etherscan: {'✅ Yes' if analysis['verified'] else '❌ No'}")
        
        if analysis['is_proxy']:
            print(f"Upgradeable Proxy:     ✅ Yes")
            print(f"Implementation:        {analysis['implementation_address']}")
            if analysis['admin_address']:
                print(f"Proxy Admin:           {analysis['admin_address']}")
        else:
            print(f"Upgradeable Proxy:     ❌ No")
        
        # Display all discovered roles
        roles = analysis.get('roles', {})
        if roles:
            print(f"\n📋 DISCOVERED ROLES & ADDRESSES ({len(roles)} total)")
            print("-" * 70)
            
            # Group by category
            categories = {}
            for func_name, info in roles.items():
                category = info['category']
                if category not in categories:
                    categories[category] = []
                categories[category].append((func_name, info))
            
            # Sort categories by importance
            category_order = ['Owner', 'Admin', 'Bridge', 'Minter', 'Pauser', 'Upgrader', 
                            'Governor', 'Treasury', 'Controller', 'Manager', 'Guardian',
                            'Access Control', 'Token', 'Fee/Rate', 'Other']
            
            for category in category_order:
                if category in categories:
                    print(f"\n🏷️  {category.upper()} ROLES:")
                    for func_name, info in sorted(categories[category]):
                        addr_type = f"({info['type']})" if info['type'] != 'Unknown' else ""
                        print(f"   • {func_name:<20} → {info['address']} {addr_type}")
            
            # Show any remaining categories not in the predefined order
            for category, items in categories.items():
                if category not in category_order:
                    print(f"\n🏷️  {category.upper()}:")
                    for func_name, info in sorted(items):
                        addr_type = f"({info['type']})" if info['type'] != 'Unknown' else ""
                        print(f"   • {func_name:<20} → {info['address']} {addr_type}")
            
            # Special analysis for bridge contracts
            self._analyze_special_contracts(roles)
            
            # Display deep governance analysis
            governance_analysis = analysis.get('governance_analysis', {})
            if governance_analysis:
                self._display_governance_analysis(governance_analysis)
                        
        else:
            print(f"\n📋 ROLES & ADDRESSES: ❌ None discovered")
        
        print("\n" + "=" * 70)
    
    def _analyze_special_contracts(self, roles: Dict[str, Any]):
        """
        Provide additional analysis for special contract types like bridges
        """
        bridge_contracts = []
        
        # Find bridge contracts
        for func_name, info in roles.items():
            if ('bridge' in func_name.lower() and info['type'] == 'Contract'):
                bridge_contracts.append((func_name, info['address']))
        
        if bridge_contracts:
            print(f"\n🌉 BRIDGE CONTRACT ANALYSIS:")
            print("-" * 70)
            
            for func_name, bridge_addr in bridge_contracts:
                print(f"\n📍 Bridge: {func_name} ({bridge_addr})")
                
                # Quick analysis of the bridge contract
                try:
                    # Check if bridge is verified
                    bridge_abi_data = self.get_contract_abi(bridge_addr)
                    if bridge_abi_data and bridge_abi_data['verified']:
                        print(f"   ✅ Bridge contract is verified on Etherscan")
                        
                        # Check if bridge is also a proxy
                        bridge_proxy_info = self.check_proxy_pattern(bridge_addr)
                        if bridge_proxy_info['is_proxy']:
                            print(f"   🔗 Bridge is upgradeable proxy")
                            if bridge_proxy_info['implementation_address']:
                                print(f"   📍 Implementation: {bridge_proxy_info['implementation_address']}")
                        else:
                            print(f"   📄 Bridge is a regular contract (not proxy)")
                            
                        # Try to find key bridge functions
                        if bridge_abi_data['abi']:
                            bridge_roles = self.discover_contract_roles(bridge_addr, bridge_abi_data['abi'])
                            if bridge_roles:
                                print(f"   🔑 Bridge has {len(bridge_roles)} role/address functions")
                                
                                # Show key bridge roles
                                key_bridge_roles = ['owner', 'admin', 'relayer', 'validator', 'operator']
                                for role in key_bridge_roles:
                                    for br_func_name, br_info in bridge_roles.items():
                                        if role in br_func_name.lower():
                                            print(f"      • {br_func_name}: {br_info['address']} ({br_info['type']})")
                                            break
                    else:
                        print(f"   ❌ Bridge contract is not verified on Etherscan")
                        
                except Exception as e:
                    print(f"   ⚠️  Error analyzing bridge: {str(e)[:50]}...")
                    
                print(f"   🔍 View on Etherscan: https://etherscan.io/address/{bridge_addr}")
    
    def _display_governance_analysis(self, governance_analysis: Dict[str, Any]):
        """
        Display detailed governance structure analysis
        """
        print(f"\n🏛️ DEEP GOVERNANCE ANALYSIS:")
        print("-" * 70)
        
        for role_name, gov_info in governance_analysis.items():
            if gov_info.get("analysis_depth_exceeded"):
                continue
                
            print(f"\n📋 {role_name.upper()}: {gov_info['address']}")
            
            # Gnosis Safe analysis
            if gov_info.get("is_gnosis_safe"):
                details = gov_info["governance_details"]
                print(f"   🔐 {details['multisig_type']}")
                print(f"   👥 Owners ({details['total_owners']}):")
                for i, owner in enumerate(details['owners'], 1):
                    owner_type = self._get_address_type(owner)
                    print(f"      {i}. {owner} ({owner_type})")
            
            # Proxy analysis
            elif gov_info.get("is_proxy"):
                print(f"   🔗 Upgradeable Proxy Contract")
                if gov_info.get("implementation"):
                    print(f"   📍 Implementation: {gov_info['implementation']}")
                if gov_info.get("admin"):
                    print(f"   👤 Proxy Admin: {gov_info['admin']}")
                    
                    # Show recursive admin analysis
                    admin_analysis = gov_info.get("admin_analysis")
                    if admin_analysis and not admin_analysis.get("analysis_depth_exceeded"):
                        self._display_nested_governance(admin_analysis, "      ")
            
            # Regular contract with roles
            elif gov_info.get("roles"):
                roles = gov_info["roles"]
                print(f"   🎭 Contract with {len(roles)} role(s)")
                for sub_role, sub_info in roles.items():
                    if any(key in sub_role.lower() for key in ['owner', 'admin']):
                        print(f"      • {sub_role}: {sub_info['address']} ({sub_info['type']})")
                        
                        # Show recursive analysis for key roles
                        role_analysis_key = f"{sub_role}_analysis"
                        if role_analysis_key in gov_info:
                            nested_analysis = gov_info[role_analysis_key]
                            if not nested_analysis.get("analysis_depth_exceeded"):
                                self._display_nested_governance(nested_analysis, "         ")
            
            # Simple contract
            else:
                print(f"   📄 Regular Contract ({gov_info['type']})")
                if gov_info.get("error"):
                    print(f"   ⚠️  Analysis error: {gov_info['error']}")
            
            print(f"   🔍 View: https://etherscan.io/address/{gov_info['address']}")
    
    def _display_nested_governance(self, nested_info: Dict[str, Any], indent: str):
        """
        Display nested governance information with indentation
        """
        if nested_info.get("analysis_depth_exceeded"):
            print(f"{indent}📊 (Analysis depth limit reached)")
            return
            
        print(f"{indent}↳ {nested_info['address']}")
        
        if nested_info.get("is_gnosis_safe"):
            details = nested_info["governance_details"]
            print(f"{indent}  🔐 {details['multisig_type']}")
            print(f"{indent}  👥 {details['total_owners']} owner(s), {details['threshold']} threshold")
            
        elif nested_info.get("is_proxy"):
            print(f"{indent}  🔗 Proxy Contract")
            if nested_info.get("admin"):
                print(f"{indent}  👤 Admin: {nested_info['admin']}")
                
        elif nested_info.get("roles"):
            key_roles = {k: v for k, v in nested_info["roles"].items() 
                        if any(key in k.lower() for key in ['owner', 'admin'])}
            if key_roles:
                print(f"{indent}  🎭 Key roles: {len(key_roles)}")
                for role, info in key_roles.items():
                    print(f"{indent}    • {role}: {info['address'][:10]}... ({info['type']})")
        else:
            print(f"{indent}  📄 {nested_info['type']}")

    def generate_markdown_report(self, analysis: Dict[str, Any], output_dir: str = "analysis-reports") -> str:
        """
        Generate a comprehensive markdown report for the analyzed contract
        """
        import os
        from datetime import datetime
        
        # Create wrapper/network-specific directory structure
        if WRAPPER_NAME:
            wrapper_slug = WRAPPER_NAME.lower().replace(" ", "_").replace("-", "_")
            wrapper_dir = os.path.join(output_dir, wrapper_slug)
            # Create network subdirectory within wrapper directory
            network_slug = NETWORK.lower().replace(" ", "_").replace("-", "_")
            network_dir = os.path.join(wrapper_dir, network_slug)
            os.makedirs(network_dir, exist_ok=True)
            final_output_dir = network_dir
        else:
            os.makedirs(output_dir, exist_ok=True)
            final_output_dir = output_dir
        
        # Generate filename based on contract address
        contract_addr = analysis['address']
        filename = f"{contract_addr.lower()}.md"
        filepath = os.path.join(final_output_dir, filename)
        
        # Get current timestamp
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC")
        
        # Start building the markdown content
        md_content = []
        
        # Header
        md_content.append(f"# Contract Analysis Report")
        md_content.append(f"")
        md_content.append(f"**Contract Address:** [{contract_addr}](https://etherscan.io/address/{contract_addr})")
        md_content.append(f"**Layer Name:** {LAYER_NAME}")
        md_content.append(f"**Wrapper Name:** {WRAPPER_NAME}")
        md_content.append(f"**Analysis Date:** {timestamp}")
        md_content.append(f"**Generated by:** Bitcoin Layers Token Analyzer")
        md_content.append(f"")
        
        # Quick Summary
        md_content.append(f"## 📊 Quick Summary")
        md_content.append(f"")
        md_content.append(f"| Property | Value |")
        md_content.append(f"|----------|-------|")
        md_content.append(f"| Verified on Etherscan | {'✅ Yes' if analysis['verified'] else '❌ No'} |")
        md_content.append(f"| Upgradeable Proxy | {'✅ Yes' if analysis['is_proxy'] else '❌ No'} |")
        
        if analysis['is_proxy'] and analysis['implementation_address']:
            impl_addr = analysis['implementation_address']
            md_content.append(f"| Implementation | [{impl_addr}](https://etherscan.io/address/{impl_addr}) |")
            
        if analysis.get('admin_address'):
            admin_addr = analysis['admin_address']
            md_content.append(f"| Proxy Admin | [{admin_addr}](https://etherscan.io/address/{admin_addr}) |")
            
        roles = analysis.get('roles', {})
        md_content.append(f"| Total Roles Found | {len(roles)} |")
        md_content.append(f"")
        
        # Roles and Addresses Section
        if roles:
            md_content.append(f"## 🏷️ Discovered Roles & Addresses")
            md_content.append(f"")
            
            # Categorize roles
            categories = {}
            for func_name, info in roles.items():
                category = info['category']
                if category not in categories:
                    categories[category] = []
                categories[category].append((func_name, info))
            
            for category, role_list in categories.items():
                md_content.append(f"### {category} Roles")
                md_content.append(f"")
                md_content.append(f"| Function | Address | Type | Etherscan |")
                md_content.append(f"|----------|---------|------|-----------|")
                
                for func_name, info in role_list:
                    addr = info['address']
                    addr_type = info['type']
                    etherscan_link = f"[View](https://etherscan.io/address/{addr})"
                    md_content.append(f"| `{func_name}` | `{addr}` | {addr_type} | {etherscan_link} |")
                
                md_content.append(f"")
        
        # Governance Analysis Section
        governance_analysis = analysis.get('governance_analysis', {})
        if governance_analysis:
            md_content.append(f"## 🏛️ Deep Governance Analysis")
            md_content.append(f"")
            
            for func_name, gov_info in governance_analysis.items():
                # Skip if there's an error or if gov_info is not a dict
                if not isinstance(gov_info, dict) or gov_info.get("error"):
                    continue
                    
                addr = gov_info.get('address', 'Unknown')
                md_content.append(f"### {func_name.title()}: `{addr}`")
                md_content.append(f"")
                md_content.append(f"**Address:** [{addr}](https://etherscan.io/address/{addr})")
                md_content.append(f"")
                
                # Contract type info
                if gov_info.get("is_gnosis_safe"):
                    details = gov_info.get("governance_details", {})
                    if details:
                        multisig_type = details.get('multisig_type', 'Gnosis Safe')
                        threshold = details.get('threshold', 'Unknown')
                        total_owners = details.get('total_owners', 'Unknown')
                        
                        md_content.append(f"**Type:** 🔐 {multisig_type}")
                        md_content.append(f"**Threshold:** {threshold}/{total_owners} signatures required")
                        md_content.append(f"")
                        
                        owners = details.get("owners", [])
                        if owners:
                            md_content.append(f"#### Signers ({len(owners)} total)")
                            md_content.append(f"")
                            md_content.append(f"| # | Address | Type | Etherscan |")
                            md_content.append(f"|---|---------|------|-----------|")
                            
                            for i, owner_addr in enumerate(owners, 1):
                                # Handle both string addresses and dict objects
                                if isinstance(owner_addr, dict):
                                    addr = owner_addr.get("address", owner_addr)
                                    addr_type = owner_addr.get("type", "EOA")
                                else:
                                    addr = owner_addr
                                    addr_type = "EOA"
                                
                                etherscan_link = f"[View](https://etherscan.io/address/{addr})"
                                md_content.append(f"| {i} | `{addr}` | {addr_type} | {etherscan_link} |")
                            
                            md_content.append(f"")
                        
                elif gov_info.get("is_proxy"):
                    md_content.append(f"**Type:** 🔗 Upgradeable Proxy Contract")
                    if gov_info.get("implementation"):
                        impl_addr = gov_info["implementation"]
                        md_content.append(f"**Implementation:** [{impl_addr}](https://etherscan.io/address/{impl_addr})")
                    md_content.append(f"")
                    
                elif gov_info.get("roles"):
                    roles = gov_info.get("roles", {})
                    if roles:
                        md_content.append(f"**Type:** 🎭 Contract with {len(roles)} role(s)")
                        md_content.append(f"")
                        
                        md_content.append(f"#### Roles")
                        md_content.append(f"")
                        md_content.append(f"| Role | Address | Type | Etherscan |")
                        md_content.append(f"|------|---------|------|-----------|")
                        
                        for role_name, role_info in roles.items():
                            if isinstance(role_info, dict):
                                role_addr = role_info.get("address", "Unknown")
                                role_type = role_info.get("type", "Unknown")
                                etherscan_link = f"[View](https://etherscan.io/address/{role_addr})"
                                md_content.append(f"| `{role_name}` | `{role_addr}` | {role_type} | {etherscan_link} |")
                        
                        md_content.append(f"")
                else:
                    md_content.append(f"**Type:** 📄 {gov_info.get('type', 'Contract')}")
                    md_content.append(f"")
        
        # Bridge Analysis (if any bridges were found)
        bridge_contracts = []
        for func_name, info in roles.items():
            if ('bridge' in func_name.lower() and info['type'] == 'Contract'):
                bridge_contracts.append((func_name, info['address']))
        
        if bridge_contracts:
            md_content.append(f"## 🌉 Bridge Contract Analysis")
            md_content.append(f"")
            
            for func_name, bridge_addr in bridge_contracts:
                md_content.append(f"### Bridge: {func_name}")
                md_content.append(f"")
                md_content.append(f"**Address:** [{bridge_addr}](https://etherscan.io/address/{bridge_addr})")
                md_content.append(f"")
                md_content.append(f"*Note: Detailed bridge analysis requires separate examination*")
                md_content.append(f"")
        
        # Footer
        md_content.append(f"---")
        md_content.append(f"")
        md_content.append(f"*This report was automatically generated by the Bitcoin Layers Token Analyzer*")
        md_content.append(f"*For questions or issues, please refer to the tool documentation*")
        
        # Write to file
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(md_content))
        
        # Also export as JSON for easier programmatic access
        json_filename = f"{contract_addr.lower()}.json"
        json_filepath = os.path.join(final_output_dir, json_filename)
        
        # Load existing JSON data to preserve governance analysis
        import json
        existing_data = {}
        
        try:
            with open(json_filepath, 'r', encoding='utf-8') as f:
                existing_data = json.load(f)
            print(f"📄 Found existing JSON file with {len(existing_data.get('governance_analysis', {}))} governance entries")
        except FileNotFoundError:
            print(f"📄 Creating new JSON file")
        
        # Preserve existing governance_analysis while updating other fields
        if 'governance_analysis' in existing_data:
            print(f"🔒 Preserving existing governance analysis data")
            analysis['governance_analysis'] = existing_data['governance_analysis']
        
        # Add layer and wrapper name to JSON
        analysis['layer_name'] = LAYER_NAME
        analysis['wrapper_name'] = WRAPPER_NAME
        
        # Save merged data
        with open(json_filepath, 'w', encoding='utf-8') as f:
            json.dump(analysis, f, indent=2, default=str)
        
        print(f"✅ JSON analysis saved to: {json_filepath}")
        if 'governance_analysis' in analysis:
            print(f"   → Including {len(analysis['governance_analysis'])} governance entries")
        
        return filepath


def main():
    """
    Main function to run the token contract analysis
    """
    print("🔍 Ethereum Token Contract Analyzer")
    print("=" * 50)
    
    try:
        # Initialize analyzer
        analyzer = TokenAnalyzer(ALCHEMY_RPC_URL, ETHERSCAN_API_KEY)
        
        # Analyze the contract
        analysis = analyzer.analyze_contract(TOKEN_ADDRESS)
        
        # Print summary
        analyzer.print_summary(analysis)
        
        # Generate markdown report
        print(f"\n📝 Generating markdown report...")
        markdown_path = analyzer.generate_markdown_report(analysis)
        print(f"✅ Markdown report saved to: {markdown_path}")
        
    except ConnectionError as e:
        print(f"❌ Connection Error: {e}")
        print("Please check your Alchemy RPC URL and internet connection.")
    except Exception as e:
        print(f"❌ Unexpected Error: {e}")


if __name__ == "__main__":
    main() 