#!/usr/bin/env python3
"""
Demo: Modular Component Usage

This script demonstrates how to use individual modular components
independently, showcasing the clean separation of concerns.
"""

import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env.local"))

def demo_config_module():
    """Demo the config module"""
    print("🔧 CONFIG MODULE DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config, SUPPORTED_NETWORKS
    
    print(f"Supported networks: {SUPPORTED_NETWORKS}")
    
    # Test different networks
    for network in ["ethereum", "polygon", "arbitrum"]:
        try:
            config = get_network_config(network)
            print(f"\n{network.title()} config:")
            print(f"  RPC URL: {config.rpc_url[:50] if config.rpc_url else 'Not set'}...")
            print(f"  API Base: {config.api_base}")
            print(f"  Has API Key: {'Yes' if config.api_key else 'No'}")
        except Exception as e:
            print(f"  ❌ Error: {e}")

def demo_contract_inspection():
    """Demo the contract inspection module"""
    print("\n\n🔍 CONTRACT INSPECTION DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config
    from modules.contract_inspection import ContractInspector
    
    # Use ethereum for demo
    config = get_network_config("ethereum")
    if not config.rpc_url or not config.api_key:
        print("❌ Missing ethereum RPC URL or API key")
        return
    
    inspector = ContractInspector(config.rpc_url, config.api_key, config.api_base)
    
    # Test with a known contract (USDC)
    usdc_address = "0xA0b86a33E6417B9C05b76F3A9d5F8f8C5D6F1234"  # Example
    
    print(f"Inspecting contract: {usdc_address}")
    info = inspector.get_contract_info(usdc_address)
    print(f"  Verified: {info.get('verified', False)}")
    print(f"  Has ABI: {bool(info.get('abi'))}")

def demo_proxy_detection():
    """Demo the proxy detection module"""
    print("\n\n🔗 PROXY DETECTION DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config
    from modules.contract_inspection import ContractInspector
    from modules.proxy_detection import ProxyDetector
    
    config = get_network_config("ethereum")
    if not config.rpc_url:
        print("❌ Missing ethereum RPC URL")
        return
    
    inspector = ContractInspector(config.rpc_url, config.api_key or "", config.api_base)
    detector = ProxyDetector(inspector.w3)
    
    # Test with known proxy contracts
    test_contracts = [
        "0xA0b86a33E6417B9C05b76F3A9d5F8f8C5D6F1234",  # Example proxy
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",  # USDT (not a proxy)
    ]
    
    for contract in test_contracts:
        print(f"\nChecking {contract}:")
        proxy_info = detector.check_proxy_pattern(contract)
        print(f"  Is Proxy: {proxy_info['is_proxy']}")
        if proxy_info['is_proxy']:
            print(f"  Type: {proxy_info['proxy_type']}")
            print(f"  Implementation: {proxy_info.get('implementation_address', 'Not found')}")

def demo_function_analysis():
    """Demo the function analysis module"""
    print("\n\n⚙️ FUNCTION ANALYSIS DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config
    from modules.contract_inspection import ContractInspector
    from modules.function_analysis import FunctionAnalyzer
    
    config = get_network_config("ethereum")
    if not config.rpc_url:
        print("❌ Missing ethereum RPC URL")
        return
    
    inspector = ContractInspector(config.rpc_url, config.api_key or "", config.api_base)
    analyzer = FunctionAnalyzer(inspector.w3)
    
    # Test address type detection
    test_addresses = [
        "0xdAC17F958D2ee523a2206206994597C13D831ec7",  # USDT contract
        "0x000000000000000000000000000000000000dead",  # Burn address (EOA)
    ]
    
    print("Address type detection:")
    for addr in test_addresses:
        addr_type = analyzer.get_address_type(addr)
        print(f"  {addr}: {addr_type}")

def demo_modular_analyzer():
    """Demo the complete modular analyzer"""
    print("\n\n🚀 COMPLETE MODULAR ANALYZER DEMO")
    print("=" * 50)
    
    # Import after we know modules work
    try:
        from modular_governance_analyzer import ModularGovernanceAnalyzer
        
        # Create analyzer instance (this tests module imports)
        analyzer = ModularGovernanceAnalyzer(network="ethereum")
        print("✅ Modular analyzer created successfully")
        print(f"   Network: {analyzer.network}")
        print(f"   Config loaded: {bool(analyzer.config)}")
        print(f"   Components initialized: {bool(analyzer.contract_inspector and analyzer.proxy_detector and analyzer.function_analyzer)}")
        
    except Exception as e:
        print(f"❌ Failed to create modular analyzer: {e}")
        import traceback
        traceback.print_exc()

def main():
    """Run all demos"""
    print("🎯 MODULAR COMPONENTS DEMO")
    print("=" * 70)
    print("Testing all extracted modules independently")
    print("=" * 70)
    
    # Test each module
    demo_config_module()
    demo_contract_inspection()
    demo_proxy_detection()
    demo_function_analysis()
    demo_modular_analyzer()
    
    print("\n" + "=" * 70)
    print("✅ DEMO COMPLETE")
    print("All modules can be used independently or together!")
    print("=" * 70)

if __name__ == "__main__":
    main()
