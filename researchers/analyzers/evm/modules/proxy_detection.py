#!/usr/bin/env python3
"""
Proxy detection module for EVM analyzers
Handles detection of various proxy patterns including EIP-1967 and ResolvedDelegateProxy
"""

from typing import Dict, Any, Optional
from web3 import Web3

from .config import (
    EIP1967_IMPLEMENTATION_SLOT, 
    EIP1967_ADMIN_SLOT,
    GNOSIS_SAFE_SIGNATURES,
    COMMON_ADDRESS_MANAGERS,
    COMMON_IMPLEMENTATION_NAMES
)
from .contract_inspection import ContractInspector


class ProxyDetector:
    """Detects various proxy patterns in smart contracts"""
    
    def __init__(self, inspector: ContractInspector):
        self.inspector = inspector
    
    def check_proxy_pattern(self, address: str) -> Dict[str, Any]:
        """Main proxy detection method - checks all known patterns"""
        proxy_info = {
            "is_proxy": False,
            "proxy_type": None,
            "implementation_address": None,
            "admin_address": None,
            "additional_info": {}
        }
        
        # Check EIP-1967 proxy pattern first
        eip1967_result = self.check_eip1967_proxy(address)
        if eip1967_result["is_proxy"]:
            return eip1967_result
        
        # Check ResolvedDelegateProxy pattern
        resolved_delegate_result = self.check_resolved_delegate_proxy(address)
        if resolved_delegate_result["is_proxy"]:
            return resolved_delegate_result
        
        # Check Gnosis Safe pattern
        gnosis_result = self.check_gnosis_safe(address)
        if gnosis_result:
            proxy_info.update({
                "is_proxy": True,
                "proxy_type": "Gnosis Safe",
                "additional_info": gnosis_result
            })
            return proxy_info
        
        return proxy_info
    
    def check_eip1967_proxy(self, address: str) -> Dict[str, Any]:
        """Check for EIP-1967 proxy pattern using storage slots"""
        proxy_info = {
            "is_proxy": False,
            "proxy_type": None,
            "implementation_address": None,
            "admin_address": None,
            "additional_info": {}
        }
        
        try:
            # Check implementation slot
            impl_storage = self.inspector.get_storage_at(address, EIP1967_IMPLEMENTATION_SLOT)
            admin_storage = self.inspector.get_storage_at(address, EIP1967_ADMIN_SLOT)
            
            # Extract address from storage (last 20 bytes)
            if impl_storage and impl_storage != "0x" + "0" * 64:
                impl_address = "0x" + impl_storage[-40:]
                if impl_address != "0x" + "0" * 40:
                    proxy_info.update({
                        "is_proxy": True,
                        "proxy_type": "EIP-1967",
                        "implementation_address": impl_address
                    })
            
            # Extract admin address
            if admin_storage and admin_storage != "0x" + "0" * 64:
                admin_address = "0x" + admin_storage[-40:]
                if admin_address != "0x" + "0" * 40:
                    proxy_info["admin_address"] = admin_address
            
        except Exception as e:
            print(f"Error checking EIP-1967 proxy pattern for {address}: {e}")
        
        return proxy_info
    
    def check_resolved_delegate_proxy(self, address: str) -> Dict[str, Any]:
        """Check for ResolvedDelegateProxy pattern"""
        proxy_info = {
            "is_proxy": False,
            "proxy_type": None,
            "implementation_address": None,
            "admin_address": None,
            "additional_info": {}
        }
        
        try:
            # Get contract ABI
            contract_info = self.inspector.get_contract_abi(address)
            if not contract_info or not contract_info.get('verified'):
                return proxy_info
            
            abi = contract_info['abi']
            
            # Check for ResolvedDelegateProxy characteristics
            constructor_inputs = self.inspector.get_constructor_inputs(abi)
            has_fallback = self.inspector.has_fallback_function(abi)
            function_count = self.inspector.count_functions(abi)
            
            # ResolvedDelegateProxy typically has:
            # 1. Constructor with AddressManager and implementationName parameters
            # 2. Fallback function
            # 3. Very few functions (usually <= 2)
            has_address_manager_param = False
            has_implementation_name_param = False
            
            for input_param in constructor_inputs:
                param_name = input_param.get('name', '').lower()
                if 'addressmanager' in param_name or 'manager' in param_name:
                    has_address_manager_param = True
                if 'implementation' in param_name and 'name' in param_name:
                    has_implementation_name_param = True
            
            # If it looks like a ResolvedDelegateProxy, try to resolve implementation
            if (constructor_inputs and has_fallback and function_count <= 2):
                proxy_info.update({
                    "is_proxy": True,
                    "proxy_type": "ResolvedDelegateProxy",
                    "additional_info": {
                        "has_address_manager_param": has_address_manager_param,
                        "has_implementation_name_param": has_implementation_name_param,
                        "constructor_inputs": len(constructor_inputs),
                        "function_count": function_count
                    }
                })
                
                # Try to resolve the implementation
                impl_result = self.resolve_delegate_proxy_implementation(address)
                if impl_result.get("implementation_address"):
                    proxy_info["implementation_address"] = impl_result["implementation_address"]
                    proxy_info["additional_info"].update(impl_result)
                
                return proxy_info
            
            # Fallback: if contract has addressManager() or name() functions, try calling them
            if self.inspector.has_function(abi, 'addressManager') or self.inspector.has_function(abi, 'name'):
                try:
                    address_manager = None
                    name = None
                    
                    if self.inspector.has_function(abi, 'addressManager'):
                        address_manager = self.inspector.call_contract_function(address, abi, 'addressManager')
                    
                    if self.inspector.has_function(abi, 'name'):
                        name = self.inspector.call_contract_function(address, abi, 'name')
                    
                    if address_manager and name:
                        proxy_info.update({
                            "is_proxy": True,
                            "proxy_type": "ResolvedDelegateProxy",
                            "additional_info": {
                                "address_manager": address_manager,
                                "name": name
                            }
                        })
                        
                        # Try to resolve implementation using these values
                        impl_address = self.resolve_implementation_from_manager(address_manager, name)
                        if impl_address:
                            proxy_info["implementation_address"] = impl_address
                        
                        return proxy_info
                        
                except Exception as e:
                    print(f"Error calling addressManager/name functions: {e}")
            
        except Exception as e:
            print(f"Error checking ResolvedDelegateProxy pattern: {e}")
        
        return proxy_info
    
    def resolve_delegate_proxy_implementation(self, address: str) -> Dict[str, Any]:
        """Try to resolve ResolvedDelegateProxy implementation using common patterns"""
        result = {
            "implementation_address": None,
            "address_manager": None,
            "name": None,
            "resolution_method": None
        }
        
        # Try common AddressManager addresses and implementation names
        for manager_addr in COMMON_ADDRESS_MANAGERS:
            for impl_name in COMMON_IMPLEMENTATION_NAMES:
                try:
                    impl_address = self.resolve_implementation_from_manager(manager_addr, impl_name)
                    if impl_address and impl_address != "0x" + "0" * 40:
                        result.update({
                            "implementation_address": impl_address,
                            "address_manager": manager_addr,
                            "name": impl_name,
                            "resolution_method": "common_patterns"
                        })
                        return result
                except Exception:
                    continue
        
        return result
    
    def resolve_implementation_from_manager(self, manager_address: str, name: str) -> Optional[str]:
        """Resolve implementation address from AddressManager"""
        try:
            # Try getAddress(string) function
            manager_abi = [
                {
                    "name": "getAddress",
                    "type": "function",
                    "inputs": [{"name": "_name", "type": "string"}],
                    "outputs": [{"name": "", "type": "address"}]
                }
            ]
            
            impl_address = self.inspector.call_contract_function(
                manager_address, manager_abi, 'getAddress', [name]
            )
            
            if impl_address and impl_address != "0x" + "0" * 40:
                return impl_address
            
            # Try addresses(string) function as alternative
            manager_abi_alt = [
                {
                    "name": "addresses",
                    "type": "function",
                    "inputs": [{"name": "", "type": "string"}],
                    "outputs": [{"name": "", "type": "address"}]
                }
            ]
            
            impl_address = self.inspector.call_contract_function(
                manager_address, manager_abi_alt, 'addresses', [name]
            )
            
            if impl_address and impl_address != "0x" + "0" * 40:
                return impl_address
                
        except Exception as e:
            print(f"Error resolving implementation from manager {manager_address}: {e}")
        
        return None
    
    def check_gnosis_safe(self, address: str) -> Optional[Dict[str, Any]]:
        """Check if address is a Gnosis Safe multisig"""
        try:
            contract_info = self.inspector.get_contract_abi(address)
            if not contract_info:
                return None
            
            abi = contract_info['abi']
            gnosis_functions_found = 0
            
            # Check for characteristic Gnosis Safe functions
            for signature in GNOSIS_SAFE_SIGNATURES:
                function_name = signature.split('(')[0]
                if self.inspector.has_function(abi, function_name):
                    gnosis_functions_found += 1
            
            # If we find most Gnosis Safe functions, it's likely a Gnosis Safe
            if gnosis_functions_found >= 3:
                safe_info = {
                    "functions_found": gnosis_functions_found,
                    "total_expected": len(GNOSIS_SAFE_SIGNATURES)
                }
                
                # Try to get owners and threshold
                try:
                    owners = self.inspector.call_contract_function(address, abi, 'getOwners')
                    threshold = self.inspector.call_contract_function(address, abi, 'getThreshold')
                    
                    if owners:
                        safe_info['owners'] = owners
                        safe_info['owner_count'] = len(owners)
                    if threshold:
                        safe_info['threshold'] = threshold
                        
                except Exception as e:
                    print(f"Error getting Gnosis Safe details: {e}")
                
                return safe_info
        
        except Exception as e:
            print(f"Error checking Gnosis Safe pattern: {e}")
        
        return None
