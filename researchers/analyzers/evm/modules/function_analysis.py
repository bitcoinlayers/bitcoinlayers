"""
Function Analysis Module

Handles comprehensive contract function analysis including:
- Automated function discovery and calling
- Result parsing and address extraction
- Parameterized function testing
- Validator set analysis
"""

from web3 import Web3
from typing import Dict, Any, List


class FunctionAnalyzer:
    """Handles contract function analysis and calling"""
    
    def __init__(self, w3: Web3):
        self.w3 = w3
    
    def get_address_type(self, address: str) -> str:
        """
        Determine if address is a contract or EOA
        """
        try:
            code = self.w3.eth.get_code(address)
            return "Contract" if code != b'' else "EOA"
        except:
            return "Unknown"
    
    def check_gnosis_safe(self, address: str) -> Dict[str, Any]:
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
                addr_type = self.get_address_type(addr)
                print(f"{i:2d}. {addr} ({addr_type})")
                
                if addr_type == "Contract":
                    # Quick check if it's a Gnosis Safe
                    safe_info = self.check_gnosis_safe(addr)
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
                addr_type = self.get_address_type(addr)
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
                    addr_type = self.get_address_type(addr)
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
        
        safe_info = self.check_gnosis_safe(address)
        if not safe_info:
            print("❌ Not a Gnosis Safe or incompatible version")
            return {}
        
        print(f"✅ Confirmed Gnosis Safe: {safe_info['multisig_type']}")
        print(f"👥 Total owners: {safe_info['total_owners']}")
        print(f"🔢 Threshold: {safe_info['threshold']}")
        
        print(f"\n📋 OWNER ANALYSIS:")
        for i, owner in enumerate(safe_info['owners'], 1):
            owner_type = self.get_address_type(owner)
            print(f"{i:2d}. {owner} ({owner_type})")
            
            if owner_type == "Contract":
                # Check if owner is also a Gnosis Safe (nested multisig)
                nested_safe = self.check_gnosis_safe(owner)
                if nested_safe:
                    print(f"    🔐 Nested {nested_safe['multisig_type']}")
        
        return safe_info
