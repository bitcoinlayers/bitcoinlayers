#!/usr/bin/env python3
"""
Governance Deep Analyzer

A specialized script for deep analysis of governance contracts discovered 
from the main token analyzer. Focuses on:
- Bridge validator sets and signers
- Gnosis Safe multisigs 
- Timelock contracts
- Access control systems
"""

import json
import os
import requests
from web3 import Web3
from typing import Optional, Dict, Any
from dotenv import load_dotenv

# Load environment variables from .env.local file (two directories up from this script)
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env.local"))

# Configuration - Wrapper Token + Network Implementation Analysis
# This analyzes the bridge/governance contracts for a specific wrapper token on a specific network
WRAPPER_TOKEN_NAME = "LBTC"  # Wrapper token name (e.g., "LBTC", "WBTC", "tBTC")
NETWORK = "bob"  # Target network: "ethereum", "polygon", "arbitrum", "bsc", "bob"
TARGET_CONTRACT = "0x4200000000000000000000000000000000000010"  # Bridge/infrastructure contract to analyze
ASSOCIATED_TOKEN_CONTRACT = "0xA45d4121b3D47719FF57a947A9d961539Ba33204"  # Token contract to associate this governance analysis with
LAYER_NAME = "BOB"  # Layer name for directory organization
CONTRACT_ROLE = "Bridge"  # Role of the target contract (e.g., "Bridge", "Multisig", "Timelock", "Governance")

# Additional context for wrapper token analysis
WRAPPER_CONTEXT = {
    "token_name": WRAPPER_TOKEN_NAME,
    "network": NETWORK.title(),
    "contract_role": CONTRACT_ROLE,
    "analysis_purpose": f"Bridge governance analysis for {WRAPPER_TOKEN_NAME} on {NETWORK.title()}"
}

# Network configurations
NETWORK_CONFIGS = {
    "ethereum": {
        "rpc_url": os.getenv("ETHEREUM_RPC_URL"),
        "api_key": os.getenv("ETHEREUM_API_KEY"),
        "api_base": "https://api.etherscan.io/api"
    },
    "polygon": {
        "rpc_url": os.getenv("POLYGON_RPC_URL"),
        "api_key": os.getenv("POLYGON_API_KEY"),
        "api_base": "https://api.polygonscan.com/api"
    },
    "arbitrum": {
        "rpc_url": os.getenv("ARBITRUM_RPC_URL"),
        "api_key": os.getenv("ARBITRUM_API_KEY"),
        "api_base": "https://api.arbiscan.io/api"
    },
    "bsc": {
        "rpc_url": os.getenv("BSC_RPC_URL"),
        "api_key": os.getenv("BSC_API_KEY"),
        "api_base": "https://api.bscscan.com/api"
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
    available_networks = list(NETWORK_CONFIGS.keys())
    raise ValueError(f"Network '{NETWORK}' not supported. Available networks: {available_networks}")

# Extract current network configuration
ALCHEMY_RPC_URL = current_config["rpc_url"]
ETHERSCAN_API_KEY = current_config["api_key"]
API_BASE_URL = current_config["api_base"]
EXPLORER_BASE_URL = f"https://explorer.{NETWORK}.xyz/address/" if NETWORK == "bob" else f"https://{NETWORK}scan.io/address/" if NETWORK != "ethereum" else "https://etherscan.io/address/"

# Validate required environment variables for current network
if not ALCHEMY_RPC_URL:
    raise ValueError(f"{NETWORK.upper()}_RPC_URL environment variable is required")
if not ETHERSCAN_API_KEY:
    raise ValueError(f"{NETWORK.upper()}_API_KEY environment variable is required")

# EIP-1967 storage slots
EIP1967_IMPLEMENTATION_SLOT = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
EIP1967_ADMIN_SLOT = "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103"

class GovernanceAnalyzer:
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
    
    def _get_address_type(self, address: str) -> str:
        """
        Determine if address is a contract or EOA
        """
        try:
            code = self.w3.eth.get_code(address)
            return "Contract" if code != b'' else "EOA"
        except:
            return "Unknown"
    
    def _check_gnosis_safe(self, address: str) -> Optional[Dict[str, Any]]:
        """
        Check if an address is a Gnosis Safe and get threshold/owners
        """
        try:
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
            
            threshold = contract.functions.getThreshold().call()
            owners = contract.functions.getOwners().call()
            
            return {
                "threshold": threshold,
                "total_owners": len(owners),
                "owners": [Web3.to_checksum_address(owner) for owner in owners],
                "multisig_type": f"{threshold}/{len(owners)} Gnosis Safe"
            }
            
        except Exception:
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
    
    def detect_contract_type(self, address: str, abi: list) -> str:
        """
        Detect what type of governance/role contract this is
        """
        function_names = [item.get('name', '').lower() for item in abi if item.get('type') == 'function']
        
        # L2 Bridge detection (Optimism-style bridges)
        bridge_functions = ['otherbridg', 'l1tokenbridge', 'l2tokenbridge', 'messenger', 'finalizebridgeerc20']
        if any(name in ''.join(function_names) for name in bridge_functions):
            return "l2_bridge"
        
        # Bridge validator set detection
        if any(name in function_names for name in ['getvalidatorset', 'validators', 'signers']):
            return "bridge_validator_set"
        
        # Token Bridge detection (general bridge patterns)
        token_bridge_functions = ['deposit', 'withdraw', 'bridgeto', 'bridgefrom', 'burn', 'mint']
        if any(func in function_names for func in token_bridge_functions):
            bridge_keywords = ['bridge', 'cross', 'relay']
            if any(keyword in ''.join(function_names) for keyword in bridge_keywords):
                return "token_bridge"
        
        # Timelock detection
        if any(name in function_names for name in ['executetransaction', 'queuetransaction', 'getmindelay']):
            return "timelock"
        
        # Gnosis Safe detection
        if any(name in function_names for name in ['getthreshold', 'getowners']):
            return "gnosis_safe"
        
        # Access control detection
        if any(name in function_names for name in ['hasrole', 'grantrole', 'revokerole']):
            return "access_control"
        
        return "generic"
    
    def analyze_all_functions(self, address: str, abi: list) -> Dict[str, Any]:
        """
        Call all view functions and analyze their results
        """
        print("\n🔍 COMPREHENSIVE FUNCTION ANALYSIS")
        print("=" * 70)
        
        analysis = {
            "function_results": {}, 
            "addresses": set(), 
            "interesting_data": {},
            "validator_sets": {},
            "current_epoch": None
        }
        contract = self.w3.eth.contract(address=Web3.to_checksum_address(address), abi=abi)
        
        # Find all view functions with no parameters
        view_functions = []
        for item in abi:
            if (item.get('type') == 'function' and 
                item.get('stateMutability') in ['view', 'pure'] and
                len(item.get('inputs', [])) == 0):
                view_functions.append(item.get('name'))
        
        print(f"📋 Found {len(view_functions)} view functions with no parameters:")
        for func in view_functions:
            print(f"   • {func}")
        
        print(f"\n🎯 CALLING ALL FUNCTIONS:")
        print("-" * 50)
        
        # Call each function and analyze results
        for func_name in view_functions:
            try:
                print(f"\n🔍 Calling {func_name}()...")
                result = getattr(contract.functions, func_name)().call()
                
                # Store raw result
                analysis["function_results"][func_name] = result
                
                # Analyze and display result
                self._analyze_function_result(func_name, result, analysis)
                
            except Exception as e:
                print(f"   ❌ Error: {str(e)[:80]}...")
                continue
        
        # Try calling functions with parameters using discovered data
        self._try_parameterized_functions(contract, abi, analysis)
        
        # Summary of extracted addresses
        if analysis["addresses"]:
            print(f"\n📊 EXTRACTED ADDRESSES SUMMARY:")
            print("-" * 50)
            unique_addresses = list(analysis["addresses"])
            
            for i, addr in enumerate(unique_addresses, 1):
                addr_type = self._get_address_type(addr)
                print(f"{i:2d}. {addr} ({addr_type})")
                
                if addr_type == "Contract":
                    # Quick check if it's a Gnosis Safe
                    safe_info = self._check_gnosis_safe(addr)
                    if safe_info:
                        print(f"    🔐 {safe_info['multisig_type']}")
        
        return analysis
    
    def _analyze_function_result(self, func_name: str, result, analysis: Dict[str, Any]):
        """
        Analyze the result of a function call and extract useful information
        """
        print(f"   📄 Result type: {type(result).__name__}")
        
        if isinstance(result, str):
            print(f"   📝 String: {result}")
            
            # Check if it's an address
            if len(result) == 42 and result.startswith('0x'):
                print(f"   🎯 Contains address: {result}")
                analysis["addresses"].add(result)
        
        elif isinstance(result, int):
            print(f"   🔢 Number: {result}")
            analysis["interesting_data"][func_name] = result
            
            # If this looks like an epoch, save it
            if 'epoch' in func_name.lower():
                analysis["current_epoch"] = result
                print(f"   ⭐ Current epoch detected: {result}")
                
        elif isinstance(result, (list, tuple)):
            print(f"   📋 Array/Tuple with {len(result)} items:")
            
            # Try to extract addresses from any array/tuple result
            extracted_addresses = self._parse_complex_validator_result(result)
            if extracted_addresses:
                print(f"   🎯 EXTRACTED {len(extracted_addresses)} ADDRESSES!")
                analysis["validator_sets"][func_name] = extracted_addresses
                
                # Show first few addresses as preview
                for i, addr in enumerate(extracted_addresses[:5]):
                    print(f"      {i+1}. {addr}")
                if len(extracted_addresses) > 5:
                    print(f"      ... and {len(extracted_addresses) - 5} more addresses")
            else:
                # Show general structure for debugging
                for i, item in enumerate(result[:3]):
                    if isinstance(item, (list, tuple)):
                        print(f"      {i+1}. Array with {len(item)} items")
                    else:
                        print(f"      {i+1}. {str(item)[:50]}{'...' if len(str(item)) > 50 else ''}")
                if len(result) > 3:
                    print(f"      ... and {len(result) - 3} more items")
        
        elif isinstance(result, bool):
            print(f"   ✅ Boolean: {result}")
        
        else:
            print(f"   📦 Complex: {str(result)[:100]}{'...' if len(str(result)) > 100 else ''}")
         
        print()

    def _try_parameterized_functions(self, contract, abi: list, analysis: Dict[str, Any]):
        """
        Try calling functions with parameters using discovered data
        """
        print(f"\n🎯 TRYING PARAMETERIZED FUNCTIONS:")
        print("-" * 50)
        
        # Find functions that take parameters
        param_functions = []
        for item in abi:
            if (item.get('type') == 'function' and 
                item.get('stateMutability') in ['view', 'pure'] and
                len(item.get('inputs', [])) > 0):
                param_functions.append({
                    'name': item.get('name'),
                    'inputs': item.get('inputs', [])
                })
        
        print(f"📋 Found {len(param_functions)} functions with parameters:")
        for func in param_functions:
            inputs_desc = ', '.join([f"{inp.get('type')} {inp.get('name', '')}" for inp in func['inputs']])
            print(f"   • {func['name']}({inputs_desc})")
        
        # Get discovered numeric values
        numeric_values = []
        for key, value in analysis["interesting_data"].items():
            if isinstance(value, int):
                numeric_values.append(value)
        
        # Add some common values to try (generic, not contract-specific)
        common_values = [0, 1, 2]
        if analysis.get("current_epoch") is not None:
            common_values.append(analysis["current_epoch"])
        numeric_values.extend(common_values)
        numeric_values = list(set(numeric_values))  # Remove duplicates
        
        print(f"\n🔢 Will try these numeric values: {numeric_values}")
        
        # Try calling functions with single uint256 parameter
        for func_info in param_functions:
            func_name = func_info['name']
            inputs = func_info['inputs']
            
            # Only try functions with single uint256 parameter for now
            if (len(inputs) == 1 and 
                inputs[0].get('type') in ['uint256', 'uint', 'int256', 'int']):
                
                print(f"\n🔍 Trying {func_name} with different values...")
                
                for value in numeric_values:
                    try:
                        result = getattr(contract.functions, func_name)(value).call()
                        print(f"   ✅ {func_name}({value}):")
                        
                        # Analyze this result too
                        self._analyze_function_result(f"{func_name}({value})", result, analysis)
                        
                        # If we get a good result (non-empty), continue testing other values
                        if isinstance(result, (list, tuple)) and len(result) > 0:
                            # This looks promising - check if it has addresses
                            extracted_addresses = self._parse_complex_validator_result(result)
                            if extracted_addresses:
                                print(f"   🎯 Found {len(extracted_addresses)} addresses in result!")
                                break  # Stop trying more values for this function
                        
                    except Exception as e:
                        if "execution reverted" not in str(e).lower():
                            print(f"   ⚠️  {func_name}({value}): {str(e)[:50]}...")
                        continue
    
    def _parse_complex_validator_result(self, result) -> list:
        """
        Enhanced parser for complex validator set results
        """
        validators = []
        
        def extract_addresses_recursive(data):
            """Recursively extract addresses from nested structures"""
            if isinstance(data, str):
                if len(data) == 42 and data.startswith('0x'):
                    # Valid address format
                    if data != '0x0000000000000000000000000000000000000000':
                        try:
                            validators.append(Web3.to_checksum_address(data))
                        except:
                            pass
            elif isinstance(data, (list, tuple)):
                for item in data:
                    extract_addresses_recursive(item)
        
        extract_addresses_recursive(result)
        
        # Remove duplicates while preserving order
        seen = set()
        unique_validators = []
        for validator in validators:
            if validator not in seen:
                seen.add(validator)
                unique_validators.append(validator)
        
        return unique_validators

    def display_analysis_summary(self, analysis: Dict[str, Any], address: str):
        """
        Display a summary of all discovered data from the analysis
        """
        print("\n" + "=" * 70)
        print("📊 ANALYSIS SUMMARY")
        print("=" * 70)
        
        # Show discovered addresses
        if analysis["addresses"]:
            print(f"\n🎯 DISCOVERED ADDRESSES ({len(analysis['addresses'])} total):")
            print("-" * 50)
            for i, addr in enumerate(sorted(analysis["addresses"]), 1):
                addr_type = self._get_address_type(addr)
                print(f" {i:2d}. {addr} ({addr_type})")
        
        # Show interesting numeric data
        if analysis["interesting_data"]:
            print(f"\n🔢 INTERESTING DATA:")
            print("-" * 50)
            for func_name, value in analysis["interesting_data"].items():
                print(f"   • {func_name}: {value}")
        
        # Show validator sets / address arrays
        if analysis["validator_sets"]:
            print(f"\n📋 ADDRESS ARRAYS FOUND ({len(analysis['validator_sets'])} functions):")
            print("-" * 50)
            for func_name, addresses in analysis["validator_sets"].items():
                print(f"\n   📍 {func_name}() returned {len(addresses)} addresses:")
                for i, addr in enumerate(addresses[:10], 1):  # Show first 10
                    addr_type = self._get_address_type(addr)
                    print(f"      {i:2d}. {addr} ({addr_type})")
                if len(addresses) > 10:
                    print(f"      ... and {len(addresses) - 10} more addresses")
        
        print(f"\n🔍 Full contract details: https://etherscan.io/address/{address}")
        print("=" * 70)
    
    def analyze_timelock(self, address: str, abi: list) -> Dict[str, Any]:
        """
        Analyze timelock contracts
        """
        print("\n⏰ TIMELOCK ANALYSIS")
        print("=" * 70)
        
        analysis = {"delay": None, "admin": None, "pending_count": 0}
        contract = self.w3.eth.contract(address=Web3.to_checksum_address(address), abi=abi)
        
        # Get timelock delay
        try:
            if hasattr(contract.functions, 'getMinDelay'):
                delay = contract.functions.getMinDelay().call()
                analysis["delay"] = delay
                print(f"⏱️  Minimum delay: {delay} seconds ({delay//3600:.1f} hours)")
            elif hasattr(contract.functions, 'delay'):
                delay = contract.functions.delay().call()
                analysis["delay"] = delay
                print(f"⏱️  Delay: {delay} seconds ({delay//3600:.1f} hours)")
        except Exception as e:
            print(f"⚠️  Could not get delay: {str(e)[:50]}")
        
        # Get admin/roles
        try:
            if hasattr(contract.functions, 'admin'):
                admin = contract.functions.admin().call()
                analysis["admin"] = admin
                print(f"👤 Admin: {admin}")
        except Exception:
            pass
        
        return analysis
    
    def analyze_access_control(self, address: str, abi: list) -> Dict[str, Any]:
        """
        Analyze access control contracts
        """
        print("\n🔐 ACCESS CONTROL ANALYSIS")
        print("=" * 70)
        
        analysis = {"roles": {}, "role_functions": []}
        
        # Find role-related functions
        role_functions = []
        for item in abi:
            if (item.get('type') == 'function' and 
                any(keyword in item.get('name', '').lower() for keyword in ['role', 'admin'])):
                role_functions.append(item.get('name'))
        
        analysis["role_functions"] = role_functions
        print(f"📋 Found {len(role_functions)} role-related functions:")
        for func in role_functions:
            print(f"   • {func}")
        
        return analysis
    
    def analyze_gnosis_safe(self, address: str) -> Dict[str, Any]:
        """
        Deep analysis of Gnosis Safe
        """
        print("\n🔐 GNOSIS SAFE DEEP ANALYSIS")
        print("=" * 70)
        
        safe_info = self._check_gnosis_safe(address)
        if not safe_info:
            print("❌ Not a Gnosis Safe or incompatible version")
            return {}
        
        print(f"✅ Confirmed Gnosis Safe: {safe_info['multisig_type']}")
        print(f"👥 Total owners: {safe_info['total_owners']}")
        print(f"🔢 Threshold: {safe_info['threshold']}")
        
        print(f"\n📋 OWNER ANALYSIS:")
        for i, owner in enumerate(safe_info['owners'], 1):
            owner_type = self._get_address_type(owner)
            print(f"{i:2d}. {owner} ({owner_type})")
            
            if owner_type == "Contract":
                # Check if owner is also a Gnosis Safe (nested multisig)
                nested_safe = self._check_gnosis_safe(owner)
                if nested_safe:
                    print(f"    🔐 Nested {nested_safe['multisig_type']}")
        
        return safe_info
    
    def run_analysis(self, address: str):
        """
        Main analysis function
        """
        print(f"🔬 GOVERNANCE DEEP ANALYZER")
        print("=" * 70)
        print(f"🎯 Target: {address}")
        print("=" * 70)
        
        # Get contract ABI
        print("1. Fetching contract ABI...")
        abi_data = self.get_contract_abi(address)
        
        if not abi_data:
            print("❌ Failed to fetch contract data")
            return
        
        if not abi_data["verified"]:
            print("❌ Contract is not verified on Etherscan")
            return
        
        print("✅ Contract is verified")
        
        # Check if it's a proxy and get the right ABI
        print("\n2. Checking for proxy pattern...")
        proxy_info = self.check_proxy_pattern(address)
        abi_to_use = abi_data["abi"]
        
        if proxy_info["is_proxy"]:
            print(f"🔗 Contract is an upgradeable proxy")
            print(f"📍 Implementation: {proxy_info['implementation_address']}")
            
            # Get implementation ABI
            impl_abi_data = self.get_contract_abi(proxy_info["implementation_address"])
            if impl_abi_data and impl_abi_data["verified"]:
                print("✅ Implementation contract is verified - using implementation ABI")
                abi_to_use = impl_abi_data["abi"]
            else:
                print("⚠️  Implementation contract not verified - using proxy ABI")
        else:
            print("📄 Contract is not a proxy")
        
        # Detect contract type
        print(f"\n3. Detecting contract type...")
        contract_type = self.detect_contract_type(address, abi_to_use)
        print(f"🔍 Detected type: {contract_type.upper()}")
        
        # Perform specialized analysis
        print(f"\n4. Performing specialized analysis...")
        
        # For all contract types, run comprehensive function analysis
        analysis_results = self.analyze_all_functions(address, abi_to_use)
        
        # Display summary of discovered data
        self.display_analysis_summary(analysis_results, address)
        
        # If it's a Gnosis Safe, also run specialized safe analysis
        if contract_type == "gnosis_safe":
            print("\n" + "="*70)
            self.analyze_gnosis_safe(address)
        
        # Generate markdown report
        print(f"\n📝 Generating governance analysis report...")
        self.generate_markdown_report(address, {
            'analysis_results': analysis_results,
            'contract_type': contract_type,
            'proxy_info': proxy_info,
            'abi_data': abi_data
        })
        
        # Generate JSON report for token contract
        if ASSOCIATED_TOKEN_CONTRACT:
            print(f"\n📄 Generating JSON governance analysis for token contract...")
            self.generate_json_report(address, ASSOCIATED_TOKEN_CONTRACT, {
                'analysis_results': analysis_results,
                'contract_type': contract_type,
                'proxy_info': proxy_info,
                'abi_data': abi_data
            })
        
        print(f"\n🔍 View on {NETWORK.title()}: {EXPLORER_BASE_URL if 'EXPLORER_BASE_URL' in globals() else 'https://etherscan.io/address/'}{address}")
        print("=" * 70)
        
        return analysis_results

    def generate_markdown_report(self, address: str, analysis_data: dict):
        """Generate a detailed markdown report of the governance analysis"""
        results = analysis_data['analysis_results']
        contract_type = analysis_data['contract_type']
        proxy_info = analysis_data['proxy_info']
        abi_data = analysis_data['abi_data']
        
        # Create layer-specific directory
        if LAYER_NAME:
            layer_slug = LAYER_NAME.lower().replace(" ", "_").replace("-", "_")
            output_dir = os.path.join("analysis-reports", layer_slug)
        else:
            output_dir = "analysis-reports"
        os.makedirs(output_dir, exist_ok=True)
        
        # Generate markdown content
        markdown_content = f"""# {WRAPPER_TOKEN_NAME} {CONTRACT_ROLE} Analysis Report

**Wrapper Token:** {WRAPPER_TOKEN_NAME}
**Network:** {NETWORK.title()}
**Contract Address:** [{address}]({EXPLORER_BASE_URL if 'EXPLORER_BASE_URL' in globals() else 'https://etherscan.io/address/'}{address})
**Contract Role:** {CONTRACT_ROLE}
**Analysis Date:** {self.get_current_timestamp()}
**Generated by:** Bitcoin Layers Governance Analyzer

## 🎯 Analysis Context

This analysis examines the {CONTRACT_ROLE.lower()} contract for {WRAPPER_TOKEN_NAME} on {NETWORK.title()} network. The analysis focuses on governance structures, access controls, and key operational addresses relevant to the {WRAPPER_TOKEN_NAME} wrapper token implementation.

**Associated Token Contract:** [{ASSOCIATED_TOKEN_CONTRACT}]({EXPLORER_BASE_URL if 'EXPLORER_BASE_URL' in globals() else 'https://etherscan.io/address/'}{ASSOCIATED_TOKEN_CONTRACT})

## 📊 Quick Summary

| Property | Value |
|----------|-------|
| Verified on Explorer | {'✅ Yes' if abi_data['verified'] else '❌ No'} |
| Contract Type | {contract_type.upper()} |
| Upgradeable Proxy | {'✅ Yes' if proxy_info['is_proxy'] else '❌ No'} |
| Implementation | {'[' + proxy_info['implementation_address'] + '](' + (EXPLORER_BASE_URL if 'EXPLORER_BASE_URL' in globals() else 'https://etherscan.io/address/') + proxy_info['implementation_address'] + ')' if proxy_info['is_proxy'] else 'N/A'} |
| Total Addresses Found | {len(results.get('addresses', set()))} |

## 🎯 Discovered Addresses & Functions

"""
        
        # Add discovered addresses
        if results.get('addresses'):
            markdown_content += "### 📍 Key Addresses\n\n"
            markdown_content += "| Address | Type | Explorer |\n"
            markdown_content += "|---------|------|----------|\n"
            
            for addr in sorted(results['addresses']):
                # Check if address is a contract or EOA
                addr_type = "Contract" if self.w3.eth.get_code(Web3.to_checksum_address(addr)) != b'' else "EOA"
                explorer_url = EXPLORER_BASE_URL if 'EXPLORER_BASE_URL' in globals() else 'https://etherscan.io/address/'
                markdown_content += f"| `{addr}` | {addr_type} | [View]({explorer_url}{addr}) |\n"
        
        # Add function results
        if results.get('function_results'):
            markdown_content += "\n### 🔧 Function Call Results\n\n"
            for func_name, result in results['function_results'].items():
                markdown_content += f"**{func_name}():** `{result}`\n\n"
        
        # Add contract analysis
        markdown_content += f"""
## 🔍 Contract Analysis

**Contract Type:** {contract_type.upper()}
**Verification Status:** {'✅ Verified' if abi_data['verified'] else '❌ Not Verified'}

"""
        
        if proxy_info['is_proxy']:
            markdown_content += f"""### 🔗 Proxy Information
- **Implementation:** [{proxy_info['implementation_address']}]({EXPLORER_BASE_URL if 'EXPLORER_BASE_URL' in globals() else 'https://etherscan.io/address/'}{proxy_info['implementation_address']})
- **Proxy Pattern:** EIP-1967 Standard

"""
        
        markdown_content += f"""
---

*This governance analysis was automatically generated by the Bitcoin Layers Governance Analyzer*
*For questions or issues, please refer to the tool documentation*
"""
        
        # Save to file with wrapper token context in filename
        filename = os.path.join(output_dir, f"{WRAPPER_TOKEN_NAME.lower()}_{CONTRACT_ROLE.lower()}_{address.lower()}.md")
        with open(filename, 'w') as f:
            f.write(markdown_content)
        
        print(f"✅ {WRAPPER_TOKEN_NAME} {CONTRACT_ROLE} analysis report saved to: {filename}")

    def generate_json_report(self, bridge_address: str, token_address: str, analysis_data: dict):
        """Generate JSON report and merge with existing token analysis"""
        import json
        
        results = analysis_data['analysis_results']
        contract_type = analysis_data['contract_type']
        proxy_info = analysis_data['proxy_info']
        abi_data = analysis_data['abi_data']
        
        # Prepare bridge governance analysis
        bridge_governance = {
            "address": bridge_address,
            "type": contract_type.title() + " Contract",
            "is_gnosis_safe": False,  # Update if Gnosis Safe detection is added
            "is_proxy": proxy_info.get('is_proxy', False),
            "implementation": proxy_info.get('implementation_address'),
            "admin": proxy_info.get('admin_address'),
            "verified": abi_data.get('verified', False),
            "network": NETWORK.title(),
            "analysis_date": self.get_current_timestamp(),
            "governance_details": {},
            "roles": {},
            "function_results": results.get('function_results', {}),
            "discovered_addresses": list(results.get('addresses', set())) if results.get('addresses') else []
        }
        
        # Create layer-specific directory for token file
        if LAYER_NAME:
            layer_slug = LAYER_NAME.lower().replace(" ", "_").replace("-", "_")
            output_dir = os.path.join("analysis-reports", layer_slug)
        else:
            output_dir = "analysis-reports"
        os.makedirs(output_dir, exist_ok=True)
        
        # Try to load existing token JSON file
        token_filename = os.path.join(output_dir, f"{token_address.lower()}.json")
        existing_data = {}
        
        try:
            with open(token_filename, 'r') as f:
                existing_data = json.load(f)
        except FileNotFoundError:
            # Create new structure if file doesn't exist
            existing_data = {
                "address": token_address,
                "verified": False,
                "is_proxy": False,
                "implementation_address": None,
                "admin_address": None,
                "roles": {},
                "governance_analysis": {}
            }
        
        # Add bridge governance analysis to the token's governance_analysis section
        # Use more descriptive naming that includes the wrapper token context
        bridge_name = f"{WRAPPER_TOKEN_NAME} {CONTRACT_ROLE} ({NETWORK.title()})"
        existing_data["governance_analysis"][bridge_name] = bridge_governance
        
        # Add wrapper token context to the governance analysis
        bridge_governance["wrapper_context"] = WRAPPER_CONTEXT
        
        # Save updated JSON
        with open(token_filename, 'w') as f:
            json.dump(existing_data, f, indent=2)
        
        print(f"✅ Token governance analysis updated: {token_filename}")
        print(f"   → Added {WRAPPER_TOKEN_NAME} {CONTRACT_ROLE} analysis for {bridge_address}")
        print(f"   → Network: {NETWORK.title()}")
        print(f"   → Function results: {len(bridge_governance['function_results'])} functions")
        print(f"   → Discovered addresses: {len(bridge_governance['discovered_addresses'])} addresses")

    def get_current_timestamp(self):
        """Get current timestamp in UTC"""
        from datetime import datetime
        return datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')


def main():
    """
    Main function
    """
    print(f"🔬 {NETWORK.title()} Governance Deep Analyzer")
    print("=" * 70)
    
    try:
        # Initialize analyzer
        analyzer = GovernanceAnalyzer(ALCHEMY_RPC_URL, ETHERSCAN_API_KEY)
        
        # Run analysis
        analyzer.run_analysis(TARGET_CONTRACT)
        
    except ConnectionError as e:
        print(f"❌ Connection Error: {e}")
        print("Please check your Alchemy RPC URL and internet connection.")
    except Exception as e:
        print(f"❌ Unexpected Error: {e}")


if __name__ == "__main__":
    main() 