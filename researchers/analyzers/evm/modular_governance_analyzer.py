#!/usr/bin/env python3
"""
Modular Governance Analyzer

A clean, modular governance analyzer that uses extracted components to analyze
specific governance contracts related to wrapper tokens. This combines the 
modular architecture with the token-specific analysis from the original.
"""

import json
import os
from datetime import datetime
from typing import Optional, Dict, Any

# Import our modular components
from modules.config import get_network_config, validate_network_config
from modules.contract_inspection import ContractInspector
from modules.proxy_detection import ProxyDetector
from modules.function_analysis import FunctionAnalyzer

# Configuration - Wrapper Token + Network Implementation Analysis
# This analyzes the bridge/governance contracts for a specific wrapper token on a specific network
WRAPPER_TOKEN_NAME = "Coinbase cbBTC"  # Wrapper token name (e.g., "LBTC", "WBTC", "tBTC")
NETWORK = "ethereum"  # Source network where contract is deployed: "ethereum", "polygon", "arbitrum", "bsc", "bob"
TARGET_CONTRACT = "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf"  # Bridge/infrastructure contract to analyze
ASSOCIATED_TOKEN_CONTRACT = "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf"  # Token contract to associate this governance analysis with
LAYER_NAME = "Ethereum"  # Layer name for directory organization
CONTRACT_ROLE = "Token"  # Role of the target contract (e.g., "Bridge", "Multisig", "Timelock", "Governance")
TARGET_ANALYSIS_NETWORK = "ethereum"  # Target network folder for analysis results (for cross-chain analysis)

# Validate required environment variables for current network (fail fast like original analyzer)
try:
    validate_network_config(NETWORK)
    print(f"✅ Network configuration validated for {NETWORK.title()}")
except ValueError as e:
    print(f"❌ Configuration Error: {e}")
    print(f"📝 Please set the required environment variables:")
    print(f"   - {NETWORK.upper()}_RPC_URL (Alchemy/Infura RPC endpoint)")
    print(f"   - {NETWORK.upper()}_API_KEY (Etherscan/block explorer API key)")
    exit(1)

# Additional context for wrapper token analysis
WRAPPER_CONTEXT = {
    "token_name": WRAPPER_TOKEN_NAME,
    "network": NETWORK.title(),
    "contract_role": CONTRACT_ROLE,
    "analysis_purpose": f"Bridge governance analysis for {WRAPPER_TOKEN_NAME} on {NETWORK.title()}"
}


class ModularGovernanceAnalyzer:
    """
    Modular governance analyzer using extracted components
    """
    
    def __init__(self, network: str = NETWORK, target_contract: str = TARGET_CONTRACT):
        """
        Initialize the modular analyzer with token context
        
        Args:
            network: Network to analyze on (defaults to configured NETWORK)
            target_contract: Contract address to analyze (defaults to configured TARGET_CONTRACT)
        """
        self.network = network
        self.target_contract = target_contract
        self.wrapper_token_name = WRAPPER_TOKEN_NAME
        self.associated_token_contract = ASSOCIATED_TOKEN_CONTRACT
        self.contract_role = CONTRACT_ROLE
        self.layer_name = LAYER_NAME
        self.target_analysis_network = TARGET_ANALYSIS_NETWORK
        
        # Get network configuration
        self.config = get_network_config(network)
        
        # Initialize modular components
        self.contract_inspector = ContractInspector(network)
        self.proxy_detector = ProxyDetector(self.contract_inspector)
        self.function_analyzer = FunctionAnalyzer(self.contract_inspector.w3)
        
        print(f"🔧 Initialized Modular Governance Analyzer")
        print(f"   Wrapper Token: {self.wrapper_token_name}")
        print(f"   Contract Role: {self.contract_role}")
        print(f"   Network: {network.title()}")
        print(f"   Target Contract: {target_contract}")
        print(f"   Associated Token: {self.associated_token_contract}")
        print(f"   RPC: {self.config['rpc_url'][:50] if self.config['rpc_url'] else 'Not configured'}...")
        print(f"   Explorer: {self.config['api_base']}")
    
    def detect_contract_type(self, address: str, abi: list) -> str:
        """
        Detect what type of governance/role contract this is
        """
        function_names = [item.get('name', '').lower() for item in abi if item.get('type') == 'function']
        
        # Portal detection (OptimismPortal)
        portal_functions = ['disputegamefactory', 'guardian', 'proofmaturitydelayseconds', 'respectedgametype']
        if any(name in function_names for name in portal_functions):
            return "portal"
        
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
    
    def _is_important_function(self, func_name: str) -> bool:
        """
        Determine if a function is important enough to include in the JSON export.
        Uses generic patterns that work across different contract types.
        """
        func_lower = func_name.lower()
        
        # Always include these fundamental functions
        fundamental = ['version', 'paused', 'owner', 'admin', 'implementation']
        if any(keyword in func_lower for keyword in fundamental):
            return True
        
        # Include configuration and settings functions
        config_keywords = ['config', 'setting', 'param', 'constant']
        if any(keyword in func_lower for keyword in config_keywords):
            return True
        
        # Include security and governance functions
        security_keywords = ['guardian', 'multisig', 'safe', 'threshold', 'delay', 'role', 'permission']
        if any(keyword in func_lower for keyword in security_keywords):
            return True
        
        # Include bridge and cross-chain functions
        bridge_keywords = ['bridge', 'messenger', 'portal', 'relay', 'cross', 'other']
        if any(keyword in func_lower for keyword in bridge_keywords):
            return True
        
        # Include timing and period functions
        timing_keywords = ['delay', 'time', 'period', 'duration', 'maturity', 'final']
        if any(keyword in func_lower for keyword in timing_keywords):
            return True
        
        # Include state and status functions
        state_keywords = ['nonce', 'count', 'total', 'balance', 'supply']
        if any(keyword in func_lower for keyword in state_keywords):
            return True
        
        # Exclude very generic getters that are less meaningful
        generic_excludes = ['get', 'is', 'has']
        if func_lower in generic_excludes:
            return False
        
        return False
    
    def _clean_analysis_for_export(self, analysis_results: Dict[str, Any]) -> Dict[str, Any]:
        """
        Transform complex analysis results into simple format matching existing bridge analyses.
        This ensures compatibility with the review page display.
        """
        from datetime import datetime
        
        # Extract key data from the complex analysis
        contract_info = analysis_results.get('contract_info', {})
        proxy_info = analysis_results.get('proxy_info', {})
        function_analysis = analysis_results.get('function_analysis', {})
        
        # Get function results - include ALL successful function calls
        function_results = function_analysis.get('function_results', {})
        interesting_results = function_results  # Include everything that was successfully called
        
        # Get discovered addresses
        discovered_addresses = function_analysis.get('addresses', [])
        
        # Create simplified structure matching existing bridge analyses
        simplified = {
            "address": analysis_results.get('contract_address'),
            "type": f"{analysis_results.get('contract_type', 'generic').title()} Contract",
            "is_gnosis_safe": False,  # We would detect this in proxy_info if it was a Gnosis Safe
            "is_proxy": proxy_info.get('is_proxy', False),
            "implementation": proxy_info.get('implementation_address'),
            "admin": proxy_info.get('admin_address'),
            "verified": contract_info.get('verified', False),
            "network": analysis_results.get('network', '').title(),
            "analysis_date": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
            "governance_details": {},
            "roles": {},
            "function_results": interesting_results,
            "discovered_addresses": discovered_addresses,
            "wrapper_context": analysis_results.get('wrapper_context', {})
        }
        
        return simplified
    
    def analyze_contract(self, address: str) -> Dict[str, Any]:
        """
        Main contract analysis using modular components
        
        Args:
            address: Contract address to analyze
            
        Returns:
            Complete analysis results
        """
        print(f"\n🔬 MODULAR GOVERNANCE ANALYSIS")
        print("=" * 70)
        print(f"🎯 Target: {address}")
        print(f"🌐 Network: {self.network.title()}")
        print("=" * 70)
        
        analysis_results = {
            "contract_address": address,
            "network": self.network,
            "analysis_timestamp": datetime.utcnow().isoformat(),
            "contract_info": {},
            "proxy_info": {},
            "function_analysis": {},
            "contract_type": None,
            "summary": {}
        }
        
        # Step 1: Contract inspection
        print("\n1️⃣ CONTRACT INSPECTION")
        print("-" * 50)
        
        contract_info = self.contract_inspector.get_contract_abi(address)
        analysis_results["contract_info"] = contract_info
        
        if not contract_info.get("verified"):
            print("❌ Contract is not verified - analysis limited")
            return analysis_results
        
        print("✅ Contract is verified")
        abi = contract_info["abi"]
        
        # Step 2: Proxy detection
        print("\n2️⃣ PROXY PATTERN DETECTION")
        print("-" * 50)
        
        proxy_info = self.proxy_detector.check_proxy_pattern(address)
        analysis_results["proxy_info"] = proxy_info
        
        if proxy_info["is_proxy"]:
            print(f"🔗 Proxy detected: {proxy_info['proxy_type']}")
            if proxy_info.get("implementation_address"):
                print(f"📍 Implementation: {proxy_info['implementation_address']}")
                
                # Get implementation ABI if available
                impl_info = self.contract_inspector.get_contract_abi(proxy_info["implementation_address"])
                if impl_info.get("verified"):
                    print("✅ Using implementation ABI for analysis")
                    abi = impl_info["abi"]
                    analysis_results["contract_info"]["implementation_abi"] = impl_info
        else:
            print("📄 Not a proxy contract")
        
        # Step 3: Contract type detection
        print("\n3️⃣ CONTRACT TYPE DETECTION")
        print("-" * 50)
        
        contract_type = self.detect_contract_type(address, abi)
        analysis_results["contract_type"] = contract_type
        print(f"🔍 Detected type: {contract_type.upper()}")
        
        # Step 4: Function analysis
        print("\n4️⃣ COMPREHENSIVE FUNCTION ANALYSIS")
        print("-" * 50)
        
        function_analysis = self.function_analyzer.analyze_all_functions(address, abi)
        analysis_results["function_analysis"] = {
            "function_results": dict(function_analysis["function_results"]),  # Convert for JSON serialization
            "addresses": list(function_analysis["addresses"]),
            "interesting_data": function_analysis["interesting_data"],
            "validator_sets": function_analysis["validator_sets"],
            "current_epoch": function_analysis["current_epoch"]
        }
        
        # Secondary proxy detection based on function results
        if not proxy_info["is_proxy"]:
            func_results = function_analysis["function_results"]
            if "admin" in func_results and "implementation" in func_results:
                impl_addr = func_results["implementation"]
                admin_addr = func_results["admin"]
                
                if isinstance(impl_addr, str) and impl_addr.startswith("0x") and len(impl_addr) == 42:
                    print(f"\n🔄 SECONDARY PROXY DETECTION")
                    print(f"🔗 Function-based proxy detected!")
                    print(f"📍 Implementation: {impl_addr}")
                    print(f"👤 Admin: {admin_addr}")
                    
                    # Update proxy info
                    proxy_info.update({
                        "is_proxy": True,
                        "proxy_type": "Function-based Proxy",
                        "implementation_address": impl_addr,
                        "admin_address": admin_addr
                    })
                    
                    # Get implementation ABI and re-analyze with it
                    impl_info = self.contract_inspector.get_contract_abi(impl_addr)
                    if impl_info.get("verified"):
                        print("✅ Re-analyzing with implementation ABI...")
                        impl_abi = impl_info["abi"]
                        
                        # Re-run function analysis with implementation ABI
                        impl_function_analysis = self.function_analyzer.analyze_all_functions(address, impl_abi)
                        
                        # Update analysis results with implementation data
                        analysis_results["function_analysis"] = {
                            "function_results": dict(impl_function_analysis["function_results"]),
                            "addresses": list(impl_function_analysis["addresses"]),
                            "interesting_data": impl_function_analysis["interesting_data"],
                            "validator_sets": impl_function_analysis["validator_sets"],
                            "current_epoch": impl_function_analysis["current_epoch"]
                        }
                        analysis_results["contract_info"]["implementation_abi"] = impl_info
                        print(f"📊 Found {len(impl_function_analysis['function_results'])} functions in implementation")
                    else:
                        print("❌ Implementation contract not verified")
        
        # Step 5: Specialized analysis based on contract type
        print("\n5️⃣ SPECIALIZED ANALYSIS")
        print("-" * 50)
        
        if contract_type == "gnosis_safe":
            safe_analysis = self.function_analyzer.analyze_gnosis_safe(address)
            analysis_results["specialized_analysis"] = safe_analysis
        elif contract_type == "timelock":
            timelock_analysis = self.function_analyzer.analyze_timelock(address, abi)
            analysis_results["specialized_analysis"] = timelock_analysis
        elif contract_type == "access_control":
            access_analysis = self.function_analyzer.analyze_access_control(address, abi)
            analysis_results["specialized_analysis"] = access_analysis
        
        # Step 6: Generate summary
        print("\n6️⃣ ANALYSIS SUMMARY")
        print("-" * 50)
        
        summary = self._generate_summary(analysis_results)
        analysis_results["summary"] = summary
        
        # Display summary using function analyzer
        self.function_analyzer.display_analysis_summary(function_analysis, address)
        
        return analysis_results
    
    def _generate_summary(self, analysis: Dict[str, Any]) -> Dict[str, Any]:
        """Generate analysis summary"""
        function_analysis = analysis.get("function_analysis", {})
        
        summary = {
            "verified": analysis["contract_info"].get("verified", False),
            "is_proxy": analysis["proxy_info"].get("is_proxy", False),
            "contract_type": analysis.get("contract_type", "unknown"),
            "addresses_found": len(function_analysis.get("addresses", [])),
            "functions_called": len(function_analysis.get("function_results", {})),
            "validator_sets_found": len(function_analysis.get("validator_sets", {})),
            "has_specialized_analysis": "specialized_analysis" in analysis
        }
        
        return summary
    
    def save_analysis(self, analysis_results: Dict[str, Any], output_dir: str = None) -> str:
        """
        Save analysis results to JSON file with wrapper token context
        
        Args:
            analysis_results: Analysis results to save
            output_dir: Output directory (defaults to wrapper/network structure)
            
        Returns:
            Path to saved file
        """
        # Create wrapper/network-specific directory if not specified
        if output_dir is None:
            if self.wrapper_token_name and self.layer_name:
                wrapper_slug = self.wrapper_token_name.lower().replace(" ", "_").replace("-", "_")
                network_slug = self.target_analysis_network.lower().replace(" ", "_").replace("-", "_")
                output_dir = os.path.join("../../reports", wrapper_slug, network_slug)
            else:
                output_dir = "../../reports"
        
        os.makedirs(output_dir, exist_ok=True)
        
        # Add wrapper token context to results
        analysis_results["wrapper_context"] = WRAPPER_CONTEXT
        analysis_results["associated_token_contract"] = self.associated_token_contract
        
        # Use associated token contract address for filename (API compatibility)
        token_address = self.associated_token_contract.lower()
        filename = f"{token_address}.json"
        filepath = os.path.join(output_dir, filename)
        
        # Check if file exists and merge with existing data
        existing_data = {}
        if os.path.exists(filepath):
            try:
                with open(filepath, 'r') as f:
                    existing_data = json.load(f)
                print(f"📄 Found existing analysis file, merging data...")
            except (json.JSONDecodeError, IOError) as e:
                print(f"⚠️  Could not read existing file: {e}")
        
        # Clean analysis results to remove verbose data (ABI, source code, etc.)
        clean_analysis = self._clean_analysis_for_export(analysis_results)
        
        # Merge bridge/governance analysis into existing token data
        if existing_data:
            # Add bridge analysis to the governance_analysis section with descriptive name
            descriptive_name = f"{self.wrapper_token_name} {self.contract_role} ({clean_analysis.get('network', 'Unknown')})"
            
            # Ensure governance_analysis section exists
            if "governance_analysis" not in existing_data:
                existing_data["governance_analysis"] = {}
            
            # Add to governance_analysis section
            existing_data["governance_analysis"][descriptive_name] = clean_analysis
            final_data = existing_data
        else:
            final_data = clean_analysis
        
        # Save merged data to JSON
        with open(filepath, 'w') as f:
            json.dump(final_data, f, indent=2, default=str)
        
        print(f"\n💾 Analysis saved to: {filepath}")
        return filepath
    
    def generate_markdown_report(self, analysis_results: Dict[str, Any], output_dir: str = None) -> str:
        """
        Generate markdown report from analysis results with wrapper token context
        
        Args:
            analysis_results: Analysis results
            output_dir: Output directory (defaults to wrapper/network structure)
            
        Returns:
            Path to saved markdown file
        """
        # Create wrapper/network-specific directory if not specified
        if output_dir is None:
            if self.wrapper_token_name and self.layer_name:
                wrapper_slug = self.wrapper_token_name.lower().replace(" ", "_").replace("-", "_")
                network_slug = self.target_analysis_network.lower().replace(" ", "_").replace("-", "_")
                output_dir = os.path.join("../../reports", wrapper_slug, network_slug)
            else:
                output_dir = "../../reports"
        
        os.makedirs(output_dir, exist_ok=True)
        
        address = analysis_results["contract_address"]
        network = analysis_results["network"]
        timestamp = analysis_results["analysis_timestamp"]
        
        # Generate markdown content with wrapper token context
        markdown_content = f"""# {self.wrapper_token_name} {self.contract_role} Analysis Report

**Wrapper Token:** {self.wrapper_token_name}  
**Network:** {network.title()}  
**Contract Address:** `{address}`  
**Contract Role:** {self.contract_role}  
**Associated Token Contract:** `{self.associated_token_contract}`  
**Analysis Date:** {timestamp}  
**Generated By:** Modular Governance Analyzer

## 🎯 Analysis Context

This analysis examines the {self.contract_role.lower()} contract for {self.wrapper_token_name} on {network.title()} network. The analysis focuses on governance structures, access controls, and key operational addresses relevant to the {self.wrapper_token_name} wrapper token implementation.

## 🎯 Quick Summary

| Property | Value |
|----------|-------|
| Verified | {'✅ Yes' if analysis_results['summary']['verified'] else '❌ No'} |
| Contract Type | {analysis_results['summary']['contract_type'].upper()} |
| Is Proxy | {'✅ Yes' if analysis_results['summary']['is_proxy'] else '❌ No'} |
| Addresses Found | {analysis_results['summary']['addresses_found']} |
| Functions Called | {analysis_results['summary']['functions_called']} |
| Validator Sets | {analysis_results['summary']['validator_sets_found']} |

## 📋 Contract Information

**Verification Status:** {'✅ Verified' if analysis_results['contract_info'].get('verified') else '❌ Not Verified'}

"""
        
        # Add proxy information
        proxy_info = analysis_results.get("proxy_info", {})
        if proxy_info.get("is_proxy"):
            markdown_content += f"""
## 🔗 Proxy Information

- **Proxy Type:** {proxy_info.get('proxy_type', 'Unknown')}
- **Implementation:** `{proxy_info.get('implementation_address', 'Not Available')}`
"""
            if proxy_info.get("admin_address"):
                markdown_content += f"- **Admin:** `{proxy_info['admin_address']}`\n"
        
        # Add discovered addresses
        function_analysis = analysis_results.get("function_analysis", {})
        addresses = function_analysis.get("addresses", [])
        
        if addresses:
            markdown_content += f"""
## 📍 Discovered Addresses ({len(addresses)} total)

| Address | Type |
|---------|------|
"""
            for addr in sorted(addresses):
                addr_type = self.function_analyzer.get_address_type(addr)
                markdown_content += f"| `{addr}` | {addr_type} |\n"
        
        # Add function results
        function_results = function_analysis.get("function_results", {})
        if function_results:
            markdown_content += f"""
## 🔧 Function Call Results

"""
            for func_name, result in function_results.items():
                markdown_content += f"**{func_name}():** `{result}`\n\n"
        
        markdown_content += """
---

*This analysis was generated by the Modular Governance Analyzer*  
*Using extracted modular components for maintainable analysis*
"""
        
        # Save markdown file with wrapper token context
        # Use contract being analyzed for markdown filename (not token address)
        address = analysis_results["contract_address"].lower()
        wrapper_slug = self.wrapper_token_name.lower().replace(" ", "_")
        contract_role = self.contract_role.lower().replace(" ", "_")
        filename = f"{wrapper_slug}_{contract_role}_{address}.md"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, 'w') as f:
            f.write(markdown_content)
        
        print(f"📝 Markdown report saved to: {filepath}")
        return filepath


def main():
    """
    Main function - analyze the configured governance contract for the wrapper token
    """
    print(f"🚀 MODULAR GOVERNANCE ANALYZER")
    print("=" * 70)
    print(f"🎯 Analyzing {CONTRACT_ROLE} for {WRAPPER_TOKEN_NAME}")
    print(f"📍 Network: {NETWORK.title()}")
    print(f"📋 Target Contract: {TARGET_CONTRACT}")
    print(f"🪙 Associated Token: {ASSOCIATED_TOKEN_CONTRACT}")
    print("=" * 70)
    
    try:
        # Initialize analyzer with configured values
        analyzer = ModularGovernanceAnalyzer()
        
        # Run analysis on the configured target contract
        print(f"\n🔍 Analyzing contract: {TARGET_CONTRACT}")
        results = analyzer.analyze_contract(TARGET_CONTRACT)
        
        # Save results with wrapper token context
        json_path = analyzer.save_analysis(results)
        md_path = analyzer.generate_markdown_report(results)
        
        print(f"\n✅ ANALYSIS COMPLETE")
        print(f"🎯 Contract: {TARGET_CONTRACT}")
        print(f"🪙 Token Context: {WRAPPER_TOKEN_NAME} ({CONTRACT_ROLE})")
        print(f"📊 Summary: {results['summary']}")
        print(f"💾 JSON: {json_path}")
        print(f"📝 Markdown: {md_path}")
        
    except Exception as e:
        print(f"❌ Analysis failed: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()
