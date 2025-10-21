#!/usr/bin/env python3
"""
Main MoveVM Token Analyzer Script
Analyzes tokens on Move-based blockchains (Aptos, Sui, Movement)
"""

import json
import os
from datetime import datetime
from typing import Dict, Any

from modules.config import get_network_config, detect_network_from_address
from modules.token_analysis import MoveTokenAnalyzer

def analyze_move_token(network: str, coin_type: str, wrapper_name: str, project_name: str) -> Dict[str, Any]:
    """
    Analyze a Move token
    
    Args:
        network: Network name (e.g., 'aptos-mainnet', 'sui-mainnet')
        coin_type: Token coin type (e.g., '0x1::aptos_coin::AptosCoin')
        wrapper_name: Token wrapper name for file naming
        project_name: Project name for analysis metadata
    
    Returns:
        Dict containing analysis results
    """
    try:
        # Get network configuration
        config = get_network_config(network)
        
        # Initialize analyzer
        analyzer = MoveTokenAnalyzer(config.rpc_url, network.split('-')[0])
        
        # Perform analysis
        print(f"Analyzing {coin_type} on {network}...")
        analysis = analyzer.analyze_token(coin_type)
        
        # Add metadata
        analysis["analysis_metadata"] = {
            "analyzer_version": "1.0.0",
            "network": network,
            "analysis_date": datetime.now().isoformat(),
            "wrapper_name": wrapper_name,
            "project_name": project_name,
            "explorer_url": config.explorer_base
        }
        
        return analysis
        
    except Exception as e:
        return {
            "coin_type": coin_type,
            "errors": [f"Analysis failed: {str(e)}"],
            "analysis_metadata": {
                "analyzer_version": "1.0.0",
                "network": network,
                "analysis_date": datetime.now().isoformat(),
                "wrapper_name": wrapper_name,
                "project_name": project_name
            }
        }

def save_analysis_report(analysis: Dict[str, Any], project_name: str, wrapper_name: str, network: str, coin_type: str):
    """Save analysis report to file"""
    try:
        # Create reports directory - use underscore format to match existing structure
        wrapper_dir_name = wrapper_name.replace('-', '_')
        reports_dir = os.path.join("..", "..", "reports", wrapper_dir_name)
        network_dir = os.path.join(reports_dir, network.split('-')[0])  # aptos, sui, movement
        os.makedirs(network_dir, exist_ok=True)
        
        # Extract package address from coin type for simple filename
        # For coin_type like "0x3e8e...::lbtc::LBTC", extract just the package address
        package_address = coin_type.split('::')[0]  # Get "0x3e8e..."
        if package_address.startswith('0x'):
            package_address = package_address[2:]  # Remove 0x prefix for filename
        
        # Use simple address-based filename (like SVM analyzer)
        filename = package_address.lower()
        
        # Save JSON
        json_path = os.path.join(network_dir, f"{filename}.json")
        with open(json_path, 'w') as f:
            json.dump(analysis, f, indent=2)
        
        # Generate and save markdown report
        md_path = os.path.join(network_dir, f"{filename}.md")
        markdown_content = generate_markdown_report(analysis)
        with open(md_path, 'w') as f:
            f.write(markdown_content)
        
        print(f"Analysis saved to {json_path} and {md_path}")
        
    except Exception as e:
        print(f"Error saving analysis: {e}")

def generate_markdown_report(analysis: Dict[str, Any]) -> str:
    """Generate markdown report from analysis"""
    metadata = analysis.get("analysis_metadata", {})
    basic_info = analysis.get("basic_info", {})
    security = analysis.get("security_analysis", {})
    governance = analysis.get("governance_info", {})
    
    report = f"""# {metadata.get('project_name', 'Unknown')} Token Analysis

## Overview
- **Coin Type**: `{analysis.get('coin_type', 'Unknown')}`
- **Network**: {metadata.get('network', 'Unknown')}
- **Analysis Date**: {metadata.get('analysis_date', 'Unknown')}
- **Explorer**: [{metadata.get('explorer_url', 'N/A')}]({metadata.get('explorer_url', '#')})

## Token Information
- **Name**: {basic_info.get('name', 'Unknown')}
- **Symbol**: {basic_info.get('symbol', 'Unknown')}
- **Decimals**: {basic_info.get('decimals', 'Unknown')}
- **Supply**: {basic_info.get('supply', 'Unknown')}

## Security Analysis
- **Security Score**: {security.get('security_score', 'Unknown')}/100
- **Mint Capability**: {'Yes' if security.get('has_mint_capability') else 'No'}
- **Burn Capability**: {'Yes' if security.get('has_burn_capability') else 'No'}
- **Freeze Capability**: {'Yes' if security.get('has_freeze_capability') else 'No'}

### Risk Factors
"""
    
    risk_factors = security.get('risk_factors', [])
    if risk_factors:
        for factor in risk_factors:
            report += f"- {factor}\n"
    else:
        report += "- No risk factors identified\n"
    
    report += f"""
## Governance Analysis
- **Governance Type**: {governance.get('governance_type', 'Unknown')}
- **Overall Risk Score**: {governance.get('overall_risk_score', 'Unknown')}/100

### Key Findings
"""
    
    key_findings = governance.get('governance_summary', {}).get('key_findings', [])
    if key_findings:
        for finding in key_findings:
            report += f"- {finding}\n"
    else:
        report += "- No governance findings\n"
    
    # Add errors if any
    errors = analysis.get('errors', [])
    if errors:
        report += "\n## Errors\n"
        for error in errors:
            report += f"- {error}\n"
    
    report += f"""
---
*Analysis generated by MoveVM Token Analyzer v{metadata.get('analyzer_version', '1.0.0')}*
"""
    
    return report

def main():
    """Main function for command line usage"""
    import sys
    
    if len(sys.argv) < 5:
        print("Usage: python token_analyzer.py <network> <coin_type> <wrapper_name> <project_name>")
        print("Example: python token_analyzer.py aptos-mainnet '0x1::aptos_coin::AptosCoin' aptos-coin 'Aptos Native'")
        sys.exit(1)
    
    network = sys.argv[1]
    coin_type = sys.argv[2]
    wrapper_name = sys.argv[3]
    project_name = sys.argv[4]
    
    # Perform analysis
    analysis = analyze_move_token(network, coin_type, wrapper_name, project_name)
    
    # Save results
    save_analysis_report(analysis, project_name, wrapper_name, network, coin_type)
    
    # Print summary
    print("\n=== Analysis Summary ===")
    print(f"Token: {analysis.get('coin_type', 'Unknown')}")
    print(f"Network: {network}")
    
    if analysis.get('errors'):
        print("Errors:")
        for error in analysis['errors']:
            print(f"  - {error}")
    else:
        basic_info = analysis.get('basic_info', {})
        security = analysis.get('security_analysis', {})
        print(f"Name: {basic_info.get('name', 'Unknown')}")
        print(f"Symbol: {basic_info.get('symbol', 'Unknown')}")
        print(f"Security Score: {security.get('security_score', 'Unknown')}/100")

if __name__ == "__main__":
    main()
