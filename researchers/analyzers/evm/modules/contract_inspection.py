#!/usr/bin/env python3
"""
Contract inspection module for EVM analyzers
Handles ABI fetching, contract verification status, and basic contract information
"""

import json
import requests
from typing import Optional, Dict, Any
from web3 import Web3

from .config import get_network_config


class ContractInspector:
    """Handles contract inspection and ABI retrieval"""
    
    def __init__(self, network: str):
        self.network = network
        self.config = get_network_config(network)
        
        # Check if RPC URL is configured
        if not self.config["rpc_url"]:
            raise ValueError(f"Missing RPC URL for {network} network. Please set {network.upper()}_RPC_URL environment variable.")
        
        # Check if API key is configured
        if not self.config["api_key"]:
            raise ValueError(f"Missing API key for {network} network. Please set {network.upper()}_API_KEY environment variable.")
        
        try:
            self.w3 = Web3(Web3.HTTPProvider(self.config["rpc_url"]))
            
            if not self.w3.is_connected():
                raise ConnectionError(f"Failed to connect to {network} network at {self.config['rpc_url'][:50]}...")
        except Exception as e:
            raise ConnectionError(f"Failed to initialize Web3 connection for {network}: {str(e)}")
    
    def get_contract_abi(self, address: str) -> Optional[Dict[str, Any]]:
        """Fetch contract ABI from block explorer API"""
        try:
            url = self.config["api_base"]
            params = {
                'module': 'contract',
                'action': 'getsourcecode',
                'address': address,
                'apikey': self.config["api_key"]
            }
            
            response = requests.get(url, params=params, timeout=30)
            response.raise_for_status()
            
            data = response.json()
            
            if data.get('status') != '1' or not data.get('result'):
                print(f"No contract source found for {address}")
                return None
                
            result = data['result'][0]
            
            if not result.get('ABI') or result.get('ABI') == '':
                print(f"No ABI found for contract {address}")
                return None
                
            abi = json.loads(result['ABI'])
            
            # Check if contract is verified
            source_code = result.get('SourceCode', '')
            is_verified = bool(source_code and source_code.strip() != '')
            
            return {
                'verified': is_verified,
                'abi': abi,  # Keep ABI for internal analysis use
                'contract_name': result.get('ContractName', 'Unknown'),
                'compiler_version': result.get('CompilerVersion', 'Unknown')
                # Note: source_code excluded to keep analysis files lean
            }
            
        except requests.exceptions.RequestException as e:
            print(f"Network error fetching ABI for {address}: {e}")
            return None
        except json.JSONDecodeError as e:
            print(f"Error parsing ABI JSON for {address}: {e}")
            return None
        except Exception as e:
            print(f"Unexpected error fetching ABI for {address}: {e}")
            return None
    
    def get_address_type(self, address: str) -> str:
        """Determine if address is a contract or EOA"""
        try:
            code = self.w3.eth.get_code(Web3.to_checksum_address(address))
            return "contract" if code else "eoa"
        except Exception as e:
            print(f"Error checking address type for {address}: {e}")
            return "unknown"
    
    def get_contract_bytecode(self, address: str) -> Optional[str]:
        """Get contract bytecode"""
        try:
            code = self.w3.eth.get_code(Web3.to_checksum_address(address))
            return code.hex() if code else None
        except Exception as e:
            print(f"Error fetching bytecode for {address}: {e}")
            return None
    
    def get_storage_at(self, address: str, slot: str) -> str:
        """Get storage value at specific slot"""
        try:
            checksum_address = Web3.to_checksum_address(address)
            storage_value = self.w3.eth.get_storage_at(checksum_address, slot)
            return storage_value.hex()
        except Exception as e:
            print(f"Error reading storage slot {slot} for {address}: {e}")
            return "0x" + "0" * 64
    
    def call_contract_function(self, address: str, abi: list, function_name: str, args: list = None):
        """Call a read-only contract function"""
        try:
            checksum_address = Web3.to_checksum_address(address)
            contract = self.w3.eth.contract(address=checksum_address, abi=abi)
            
            if args is None:
                args = []
            
            func = getattr(contract.functions, function_name)
            if func:
                return func(*args).call()
            else:
                print(f"Function {function_name} not found in contract")
                return None
                
        except Exception as e:
            print(f"Error calling {function_name} on {address}: {e}")
            return None
    
    def has_function(self, abi: list, function_name: str) -> bool:
        """Check if contract has a specific function"""
        for item in abi:
            if item.get('type') == 'function' and item.get('name') == function_name:
                return True
        return False
    
    def get_function_signatures(self, abi: list) -> list:
        """Get all function signatures from ABI"""
        signatures = []
        for item in abi:
            if item.get('type') == 'function':
                name = item.get('name', '')
                inputs = item.get('inputs', [])
                input_types = [inp.get('type', '') for inp in inputs]
                signature = f"{name}({','.join(input_types)})"
                signatures.append(signature)
        return signatures
    
    def count_functions(self, abi: list) -> int:
        """Count number of functions in ABI"""
        return len([item for item in abi if item.get('type') == 'function'])
    
    def has_fallback_function(self, abi: list) -> bool:
        """Check if contract has fallback function"""
        for item in abi:
            if item.get('type') == 'fallback':
                return True
        return False
    
    def get_constructor_inputs(self, abi: list) -> list:
        """Get constructor input parameters"""
        for item in abi:
            if item.get('type') == 'constructor':
                return item.get('inputs', [])
        return []
