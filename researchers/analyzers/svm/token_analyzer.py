#!/usr/bin/env python3
"""
SPL Token Contract Analyzer

This script analyzes a Solana SPL token to determine:
- Basic token properties (supply, decimals, authorities)
- Metadata information (name, symbol, description)
- Security analysis (mint/freeze authorities, governance)
- Holder distribution and supply analysis
"""

import json
import os
from datetime import datetime, timezone
from typing import Dict, Any
from dotenv import load_dotenv

# Load environment variables from .env.local file (two directories up from this script)
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", ".env.local"))

# Import our modular components
from modules.config import get_network_config, validate_network_config, get_explorer_url
from modules.token_analysis import TokenAnalyzer

# Configuration - Select network and token to analyze
NETWORK_NAME = "solana"  # Network name for directory organization
TOKEN_MINT = "8yev7nLen2PFN2uYGhzsUbu243wMa9z4ZrCwuXs6DEQw"  # Target token to analyze
WRAPPER_NAME = "rootstock_rbtc"  # Wrapper name for this token - will be updated from metadata

def analyze_spl_token(mint_address: str, wrapper_name: str, network_name: str) -> Dict[str, Any]:
    """Analyze an SPL token and return comprehensive results"""
    
    print(f"🔍 Analyzing SPL token: {mint_address}")
    print(f"📡 Network: {network_name}")
    print(f"🏷️  Wrapper: {wrapper_name}")
    print("=" * 60)
    
    try:
        # Validate network configuration - use mainnet as default
        validate_network_config("mainnet")
        config = get_network_config("mainnet")
        
        # Initialize analyzer
        analyzer = TokenAnalyzer(config.rpc_url)
        
        # Perform comprehensive analysis
        print("📊 Performing token analysis...")
        analysis_result = analyzer.analyze_token(mint_address)
        
        # Add metadata
        analysis_result.update({
            "analysis_metadata": {
                "analyzer_version": "1.0.0",
                "network": "mainnet",
                "analysis_date": datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC'),
                "wrapper_name": wrapper_name,
                "network_name": network_name,
                "explorer_url": get_explorer_url("mainnet", mint_address)
            }
        })
        
        return analysis_result
        
    except Exception as e:
        print(f"❌ Error during analysis: {e}")
        return {
            "error": str(e),
            "mint_address": mint_address,
            "analysis_metadata": {
                "analyzer_version": "1.0.0", 
                "network": "mainnet",
                "analysis_date": datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC'),
                "error": True
            }
        }

def save_analysis_report(analysis: Dict[str, Any], wrapper_name: str, network_name: str, mint_address: str):
    """Save analysis report to file"""
    
    # Create directory structure: reports/wrapper_name/network_name
    safe_wrapper_name = wrapper_name.lower().replace(" ", "_")
    safe_network_name = network_name.lower().replace(" ", "_")
    
    base_dir = os.path.join(os.path.dirname(__file__), "..", "..", "reports")
    wrapper_dir = os.path.join(base_dir, safe_wrapper_name)
    network_dir = os.path.join(wrapper_dir, safe_network_name)
    
    os.makedirs(network_dir, exist_ok=True)
    
    # Generate filename using contract address (for API compatibility)
    filename = mint_address.lower()
    
    # Save JSON report (using address as filename for API)
    json_file = os.path.join(network_dir, f"{filename}.json")
    with open(json_file, 'w') as f:
        json.dump(analysis, f, indent=2, default=str)
    
    # Save markdown summary (using address as filename for consistency)
    md_file = os.path.join(network_dir, f"{filename}.md")
    markdown_content = generate_markdown_report(analysis)
    with open(md_file, 'w') as f:
        f.write(markdown_content)
    
    print(f"📄 Report saved:")
    print(f"   JSON: {json_file}")
    print(f"   Markdown: {md_file}")

def generate_markdown_report(analysis: Dict[str, Any]) -> str:
    """Generate markdown report from analysis"""
    
    metadata = analysis.get("analysis_metadata", {})
    basic_info = analysis.get("basic_info", {})
    token_metadata = analysis.get("metadata", {})
    supply_info = analysis.get("supply_info", {})
    security = analysis.get("security_analysis", {})
    governance = analysis.get("governance_info", {})
    errors = analysis.get("errors", [])
    
    # Check if this is a Token 2022 token
    is_token_2022 = basic_info.get('is_token_2022', False)
    mint_address = analysis.get('mint_address', 'N/A')
    
    md = f"""# SPL Token Analysis Report

## Token Information
- **Mint Address**: `{mint_address}`
- **Network**: {metadata.get('network', 'N/A')}
- **Wrapper Name**: {metadata.get('wrapper_name', 'N/A')}
- **Analysis Date**: {metadata.get('analysis_date', 'N/A')}
- **Explorer**: [View on Solana Explorer]({metadata.get('explorer_url', '#')})"""
    
    # Add Token 2022 notice if detected
    if is_token_2022:
        solscan_url = f"https://solscan.io/token/{mint_address}"
        md += f"""

> **⚠️ Token 2022 Detected - Manual Authority Verification Required**  
> This token uses SPL Token 2022 with advanced features and extensions. Authority detection for Token 2022 is disabled in this analyzer.  
> **Please manually verify all authorities (Mint, Freeze, Update) on [Solscan]({solscan_url}) or other block explorers.**
"""
    
    md += f"""

## Basic Properties
- **Supply**: {basic_info.get('supply', 'N/A'):,}
- **Decimals**: {basic_info.get('decimals', 'N/A')}
- **Is Initialized**: {basic_info.get('is_initialized', 'N/A')}
- **Token Program**: {basic_info.get('owner_program', 'N/A')}
- **Is Token 2022**: {basic_info.get('is_token_2022', False)}

## Metadata
- **Name**: {token_metadata.get('name', 'Not available')}
- **Symbol**: {token_metadata.get('symbol', 'Not available')}
- **Description**: {token_metadata.get('description', 'Not available')}

## Supply Analysis
- **Total Supply**: {supply_info.get('total_supply', 'N/A'):,}
- **Circulating Supply**: {supply_info.get('circulating_supply', 'N/A')}
- **Estimated Holders**: {supply_info.get('holders_count', 'N/A')}

## Security Analysis
- **Mint Authority**: {security.get('mint_authority', 'None')}
- **Freeze Authority**: {security.get('freeze_authority', 'None')}
- **Is Mutable**: {security.get('is_mutable', 'N/A')}
- **Security Score**: {security.get('security_score', 'N/A')}/100

### Risk Factors
"""
    
    # Add risk factors
    risk_factors = security.get('risk_factors', [])
    for factor in risk_factors:
        md += f"- {factor}\n"
    
    md += f"""
## Governance Analysis
- **Governance Type**: {governance.get('governance_type', 'N/A')}
- **Overall Risk Score**: {governance.get('overall_risk_score', 'N/A'):.1f}/10

### Authority Analysis
"""
    
    # Add detailed authority analyses
    auth_analyses = governance.get('authority_analyses', {})
    for auth_name, analysis in auth_analyses.items():
        if hasattr(analysis, 'authority_type'):
            md += f"\n#### {auth_name.replace('_', ' ').title()}\n"
            md += f"- **Address**: `{analysis.address}`\n"
            md += f"- **Type**: {analysis.authority_type}\n"
            md += f"- **Risk Level**: {analysis.risk_assessment.get('risk_level', 'N/A')}\n"
            md += f"- **Risk Score**: {analysis.risk_assessment.get('risk_score', 'N/A')}/10\n"
            
            # Add capabilities
            if hasattr(analysis, 'capabilities') and analysis.capabilities:
                md += "- **Capabilities**:\n"
                for capability in analysis.capabilities[:5]:  # Show first 5
                    md += f"  - {capability}\n"
                if len(analysis.capabilities) > 5:
                    md += f"  - ... and {len(analysis.capabilities) - 5} more\n"
            
            # Add multisig info if available
            if hasattr(analysis, 'multisig_info') and analysis.multisig_info:
                multisig = analysis.multisig_info
                if hasattr(multisig, 'threshold'):
                    md += f"- **Multisig Threshold**: {multisig.threshold}/{multisig.total_signers}\n"
                    md += f"- **Multisig Type**: {multisig.multisig_type}\n"
            
            # Add governance info if available
            if hasattr(analysis, 'governance_info') and analysis.governance_info:
                gov_info = analysis.governance_info
                if hasattr(gov_info, 'governance_type'):
                    md += f"- **Governance Type**: {gov_info.governance_type}\n"
                    if hasattr(gov_info, 'voting_threshold') and gov_info.voting_threshold:
                        md += f"- **Voting Threshold**: {gov_info.voting_threshold}%\n"
    
    # Add governance summary
    gov_summary = governance.get('governance_summary', {})
    if gov_summary.get('recommendations'):
        md += "\n### Recommendations\n"
        for rec in gov_summary['recommendations']:
            md += f"- {rec}\n"
    
    # Add errors if any
    if errors:
        md += "\n## Analysis Errors\n"
        for error in errors:
            md += f"- {error}\n"
    
    md += f"""
---
*Analysis performed using SVM Token Analyzer v{metadata.get('analyzer_version', '1.0.0')}*
"""
    
    return md

def print_summary(analysis: Dict[str, Any]):
    """Print a summary of the analysis"""
    
    basic_info = analysis.get("basic_info", {})
    security = analysis.get("security_analysis", {})
    governance = analysis.get("governance_info", {})
    errors = analysis.get("errors", [])
    
    print("\n" + "="*60)
    print("📋 ANALYSIS SUMMARY")
    print("="*60)
    
    print(f"🏷️  Token: {analysis.get('mint_address', 'N/A')}")
    
    supply = basic_info.get('supply', 'N/A')
    if isinstance(supply, int):
        print(f"💰 Supply: {supply:,}")
    else:
        print(f"💰 Supply: {supply}")
        
    print(f"📊 Decimals: {basic_info.get('decimals', 'N/A')}")
    print(f"🔒 Security Score: {security.get('security_score', 'N/A')}/100")
    print(f"🏛️  Governance: {governance.get('governance_type', 'N/A')}")
    
    if basic_info.get('mint_authority'):
        print(f"⚠️  Mint Authority: {basic_info['mint_authority']}")
    
    if basic_info.get('freeze_authority'):
        print(f"🧊 Freeze Authority: {basic_info['freeze_authority']}")
    
    if errors:
        print(f"\n❌ Errors: {len(errors)}")
        for error in errors[:3]:  # Show first 3 errors
            print(f"   - {error}")

def main():
    """Main execution function"""
    try:
        print("🚀 SPL Token Analyzer Starting...")
        print(f"🎯 Target: {TOKEN_MINT}")
        print(f"🌐 Network: {NETWORK_NAME}")
        
        # Perform analysis
        analysis = analyze_spl_token(TOKEN_MINT, WRAPPER_NAME, NETWORK_NAME)
        
        # Print summary
        print_summary(analysis)
        
        # Save report
        save_analysis_report(analysis, WRAPPER_NAME, NETWORK_NAME, TOKEN_MINT)
        
        print("\n✅ Analysis completed successfully!")
        
    except KeyboardInterrupt:
        print("\n⏹️  Analysis interrupted by user")
    except Exception as e:
        print(f"\n💥 Unexpected error: {e}")
        raise

if __name__ == "__main__":
    main()
