#!/usr/bin/env python3
"""
Demo: Modular SVM Component Usage

This script demonstrates how to use individual SVM analyzer components
independently, showcasing the clean separation of concerns.
"""

import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env.local"))

def demo_config_module():
    """Demo the config module"""
    print("🔧 SVM CONFIG MODULE DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config, SUPPORTED_NETWORKS, get_explorer_url
    
    print(f"Supported networks: {SUPPORTED_NETWORKS}")
    
    # Test different networks
    for network in ["mainnet", "devnet", "testnet"]:
        try:
            config = get_network_config(network)
            print(f"\n{network.title()} config:")
            print(f"  RPC URL: {config.rpc_url}")
            print(f"  Cluster: {config.cluster_name}")
            print(f"  Explorer: {config.explorer_base}")
            print(f"  Has API Key: {'Yes' if config.api_key else 'No'}")
            
            # Test explorer URL generation
            test_address = "So11111111111111111111111111111111111111112"
            explorer_url = get_explorer_url(network, test_address)
            print(f"  Explorer URL: {explorer_url}")
            
        except Exception as e:
            print(f"  ❌ Error: {e}")

def demo_program_inspection():
    """Demo the program inspection module"""
    print("\n\n🔍 PROGRAM INSPECTION DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config
    from modules.program_inspection import ProgramInspector
    
    # Use mainnet for demo
    try:
        config = get_network_config("mainnet")
        inspector = ProgramInspector(config.rpc_url)
        
        # Analyze WSOL token
        wsol_mint = "So11111111111111111111111111111111111111112"
        print(f"🔍 Analyzing WSOL mint: {wsol_mint}")
        
        # Check if it's an SPL token
        is_spl = inspector.is_spl_token(wsol_mint)
        print(f"Is SPL Token: {is_spl}")
        
        # Get token info
        token_info = inspector.get_spl_token_info(wsol_mint)
        if token_info:
            print(f"Supply: {token_info['supply']:,}")
            print(f"Decimals: {token_info['decimals']}")
            print(f"Mint Authority: {token_info['mint_authority']}")
            print(f"Is Token 2022: {token_info['is_token_2022']}")
        
        # Detect extensions (for Token 2022)
        extensions = inspector.detect_token_extensions(wsol_mint)
        print(f"Extensions: {extensions}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

def demo_token_analysis():
    """Demo the token analysis module"""
    print("\n\n💰 TOKEN ANALYSIS DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config
    from modules.token_analysis import TokenAnalyzer
    
    try:
        config = get_network_config("mainnet")
        analyzer = TokenAnalyzer(config.rpc_url)
        
        # Analyze USDC token
        usdc_mint = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
        print(f"💰 Analyzing USDC: {usdc_mint}")
        
        # Get metadata
        metadata = analyzer.get_token_metadata(usdc_mint)
        if metadata:
            print(f"Name: {metadata.name}")
            print(f"Symbol: {metadata.symbol}")
            print(f"Description: {metadata.description}")
        else:
            print("No metadata found")
        
        # Analyze supply
        supply_info = analyzer.analyze_token_supply(usdc_mint)
        print(f"Total Supply: {supply_info.total_supply:,}")
        print(f"Holders Count: {supply_info.holders_count}")
        
        # Security analysis
        basic_info = analyzer.inspector.get_spl_token_info(usdc_mint)
        if basic_info:
            security = analyzer.analyze_token_security(basic_info)
            print(f"Security Score: {security.security_score}/100")
            print(f"Risk Factors: {security.risk_factors}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

def demo_governance_analysis():
    """Demo governance analysis capabilities"""
    print("\n\n🏛️  GOVERNANCE ANALYSIS DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config
    from modules.token_analysis import TokenAnalyzer
    
    try:
        config = get_network_config("mainnet")
        analyzer = TokenAnalyzer(config.rpc_url)
        
        # Analyze a token with governance
        token_mint = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"  # USDC
        print(f"🏛️  Analyzing governance for: {token_mint}")
        
        basic_info = analyzer.inspector.get_spl_token_info(token_mint)
        if basic_info:
            governance = analyzer.analyze_token_governance(token_mint, basic_info)
            print(f"Governance Type: {governance.get('governance_type', 'N/A')}")
            
            gov_details = governance.get('governance_details', {})
            for authority, details in gov_details.items():
                print(f"{authority}: {details}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

def demo_comprehensive_analysis():
    """Demo comprehensive token analysis"""
    print("\n\n📊 COMPREHENSIVE ANALYSIS DEMO")
    print("=" * 50)
    
    from modules.config import get_network_config
    from modules.token_analysis import TokenAnalyzer
    
    try:
        config = get_network_config("mainnet")
        analyzer = TokenAnalyzer(config.rpc_url)
        
        # Run full analysis on WSOL
        wsol_mint = "So11111111111111111111111111111111111111112"
        print(f"📊 Running comprehensive analysis on WSOL: {wsol_mint}")
        
        analysis = analyzer.analyze_token(wsol_mint)
        
        print("Results:")
        print(f"  Basic Info: ✅" if analysis.get('basic_info') else "  Basic Info: ❌")
        print(f"  Metadata: ✅" if analysis.get('metadata') else "  Metadata: ❌")
        print(f"  Supply Info: ✅" if analysis.get('supply_info') else "  Supply Info: ❌")
        print(f"  Security: ✅" if analysis.get('security_analysis') else "  Security: ❌")
        print(f"  Governance: ✅" if analysis.get('governance_info') else "  Governance: ❌")
        
        errors = analysis.get('errors', [])
        if errors:
            print(f"  Errors: {len(errors)}")
            for error in errors[:3]:
                print(f"    - {error}")
        
    except Exception as e:
        print(f"❌ Error: {e}")

def main():
    """Run all demos"""
    print("🚀 SVM ANALYZER MODULAR COMPONENTS DEMO")
    print("=" * 60)
    
    try:
        demo_config_module()
        demo_program_inspection() 
        demo_token_analysis()
        demo_governance_analysis()
        demo_comprehensive_analysis()
        
        print("\n✅ All demos completed!")
        print("\n💡 These modules can be used independently in your own scripts")
        print("   Import only what you need for better performance and clarity")
        
    except KeyboardInterrupt:
        print("\n⏹️  Demo interrupted by user")
    except Exception as e:
        print(f"\n💥 Unexpected error: {e}")

if __name__ == "__main__":
    main()
