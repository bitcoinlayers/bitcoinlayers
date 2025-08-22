#!/usr/bin/env python3
"""
Demo script showing modular usage of MoveVM analyzer components
"""

from modules.config import get_network_config, SUPPORTED_NETWORKS
from modules.move_inspection import MoveInspector
from modules.token_analysis import MoveTokenAnalyzer

def demo_config_module():
    """Demonstrate config module usage"""
    print("=== Config Module Demo ===")
    
    print(f"Supported networks: {SUPPORTED_NETWORKS}")
    
    for network in SUPPORTED_NETWORKS:
        config = get_network_config(network)
        print(f"{network}: {config.name} - {config.rpc_url}")
    
    print()

def demo_move_inspector():
    """Demonstrate MoveInspector usage"""
    print("=== Move Inspector Demo ===")
    
    # Test with Aptos
    config = get_network_config("aptos-mainnet")
    inspector = MoveInspector(config.rpc_url, "aptos")
    
    # Get Aptos coin info
    coin_type = "0x1::aptos_coin::AptosCoin"
    coin_info = inspector.get_coin_info(coin_type)
    
    if coin_info:
        print(f"Aptos Coin Info:")
        print(f"  Name: {coin_info.name}")
        print(f"  Symbol: {coin_info.symbol}")
        print(f"  Decimals: {coin_info.decimals}")
        print(f"  Supply: {coin_info.supply}")
    else:
        print("Could not fetch Aptos coin info")
    
    # Get supply info
    supply_info = inspector.get_coin_supply(coin_type)
    if supply_info:
        print(f"Supply Info: {supply_info}")
    
    print()

def demo_token_analyzer():
    """Demonstrate TokenAnalyzer usage"""
    print("=== Token Analyzer Demo ===")
    
    # Test with Aptos
    config = get_network_config("aptos-mainnet")
    analyzer = MoveTokenAnalyzer(config.rpc_url, "aptos")
    
    coin_type = "0x1::aptos_coin::AptosCoin"
    analysis = analyzer.analyze_token(coin_type)
    
    print(f"Analysis for {coin_type}:")
    print(f"  Basic Info: {analysis.get('basic_info', {})}")
    print(f"  Security Score: {analysis.get('security_analysis', {}).get('security_score', 'N/A')}")
    print(f"  Governance Type: {analysis.get('governance_info', {}).get('governance_type', 'N/A')}")
    
    if analysis.get('errors'):
        print(f"  Errors: {analysis['errors']}")
    
    print()

def demo_sui_analysis():
    """Demonstrate Sui token analysis"""
    print("=== Sui Analysis Demo ===")
    
    try:
        config = get_network_config("sui-mainnet")
        analyzer = MoveTokenAnalyzer(config.rpc_url, "sui")
        
        # Sui native token
        coin_type = "0x2::sui::SUI"
        analysis = analyzer.analyze_token(coin_type)
        
        print(f"Sui Analysis for {coin_type}:")
        print(f"  Basic Info: {analysis.get('basic_info', {})}")
        print(f"  Security Score: {analysis.get('security_analysis', {}).get('security_score', 'N/A')}")
        
        if analysis.get('errors'):
            print(f"  Errors: {analysis['errors']}")
    
    except Exception as e:
        print(f"Sui analysis failed: {e}")
    
    print()

def main():
    """Run all demos"""
    print("MoveVM Analyzer Modular Usage Demo\n")
    
    demo_config_module()
    demo_move_inspector()
    demo_token_analyzer()
    demo_sui_analysis()
    
    print("Demo completed!")

if __name__ == "__main__":
    main()

