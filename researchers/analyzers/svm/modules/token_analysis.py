#!/usr/bin/env python3
"""
Token analysis module for SVM analyzers
Handles SPL token analysis and metadata retrieval
"""

import json
import base64
import base58
from typing import Dict, Any, Optional, List
from solana.rpc.api import Client
from solders.pubkey import Pubkey as PublicKey
from dataclasses import dataclass, asdict

from .config import NetworkConfig, SOLANA_PROGRAMS
from .program_inspection import ProgramInspector
from .governance_analysis import GovernanceAnalyzer

@dataclass
class TokenMetadata:
    """SPL token metadata information"""
    name: Optional[str] = None
    symbol: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    external_url: Optional[str] = None
    attributes: Optional[List[Dict[str, Any]]] = None
    properties: Optional[Dict[str, Any]] = None

@dataclass
class TokenSupplyInfo:
    """Token supply and circulation information"""
    total_supply: int
    circulating_supply: Optional[int] = None
    max_supply: Optional[int] = None
    holders_count: Optional[int] = None

@dataclass
class TokenSecurity:
    """Token security analysis"""
    mint_authority: Optional[str] = None
    freeze_authority: Optional[str] = None
    is_mutable: bool = True
    has_update_authority: bool = True
    is_verified: bool = False
    security_score: Optional[int] = None
    risk_factors: List[str] = None

class TokenAnalyzer:
    """Analyzes SPL tokens on Solana"""
    
    def __init__(self, rpc_url: str):
        """Initialize with RPC connection"""
        self.client = Client(rpc_url)
        self.inspector = ProgramInspector(rpc_url)
        self.governance_analyzer = GovernanceAnalyzer(rpc_url)
        self.rpc_url = rpc_url
    
    def analyze_token(self, mint_address: str) -> Dict[str, Any]:
        """Comprehensive token analysis"""
        result = {
            "mint_address": mint_address,
            "basic_info": {},
            "metadata": {},
            "supply_info": {},
            "security_analysis": {},
            "governance_info": {},
            "errors": []
        }
        
        try:
            # Basic token information
            basic_info = self.inspector.get_spl_token_info(mint_address)
            if basic_info:
                result["basic_info"] = basic_info
            else:
                result["errors"].append("Could not retrieve basic token info")
                return result
            
            # Metadata analysis
            metadata = self.get_token_metadata(mint_address)
            if metadata:
                result["metadata"] = asdict(metadata)
            
            # Supply analysis
            supply_info = self.analyze_token_supply(mint_address)
            result["supply_info"] = asdict(supply_info)
            
            # Security analysis
            security = self.analyze_token_security(basic_info)
            result["security_analysis"] = asdict(security)
            
            # Governance analysis
            governance = self.analyze_token_governance(mint_address, basic_info)
            result["governance_info"] = governance
            
        except Exception as e:
            result["errors"].append(f"Analysis error: {str(e)}")
        
        return result
    
    def get_token_metadata(self, mint_address: str) -> Optional[TokenMetadata]:
        """Get token metadata from Metaplex or Token 2022 metadata"""
        try:
            # Try Metaplex metadata first
            metadata = self._get_metaplex_metadata(mint_address)
            if metadata:
                return metadata
            
            # Try Token 2022 metadata extension
            metadata = self._get_token_2022_metadata(mint_address)
            if metadata:
                return metadata
            
            return None
            
        except Exception as e:
            print(f"Error getting metadata for {mint_address}: {e}")
            return None
    
    def _get_metaplex_metadata(self, mint_address: str) -> Optional[TokenMetadata]:
        """Get metadata from Metaplex Token Metadata program"""
        try:
            # Derive metadata PDA
            mint_pubkey = PublicKey.from_string(mint_address)
            metadata_program = PublicKey.from_string(SOLANA_PROGRAMS["METAPLEX_TOKEN_METADATA"])
            
            seeds = [
                b"metadata",
                bytes(metadata_program),
                bytes(mint_pubkey)
            ]
            
            metadata_pda, _ = PublicKey.find_program_address(seeds, metadata_program)
            
            # Get metadata account
            response = self.client.get_account_info(metadata_pda)
            if not response.value:
                return None
            
            # Parse metadata (simplified - full implementation would parse the entire structure)
            data = response.value.data
            if len(data) < 100:  # Minimum size check
                return None
            
            # This is a simplified parser - real implementation would fully decode Metaplex format
            return TokenMetadata(
                name="Metaplex Token",  # Would parse actual name
                symbol="META",          # Would parse actual symbol
                description="Token with Metaplex metadata"
            )
            
        except Exception as e:
            print(f"Error getting Metaplex metadata: {e}")
            return None
    
    def _get_token_2022_metadata(self, mint_address: str) -> Optional[TokenMetadata]:
        """Get metadata from Token 2022 metadata extension"""
        try:
            account_info = self.inspector.get_account_info(mint_address)
            if not account_info or account_info.owner != SOLANA_PROGRAMS["SPL_TOKEN_2022_PROGRAM"]:
                return None
            
            # Parse Token 2022 metadata extension (simplified)
            # Real implementation would parse the TLV structure
            return TokenMetadata(
                name="Token 2022",
                symbol="T22",
                description="Token with Token 2022 metadata extension"
            )
            
        except Exception as e:
            print(f"Error getting Token 2022 metadata: {e}")
            return None
    
    def analyze_token_supply(self, mint_address: str) -> TokenSupplyInfo:
        """Analyze token supply information"""
        try:
            basic_info = self.inspector.get_spl_token_info(mint_address)
            if not basic_info:
                return TokenSupplyInfo(total_supply=0)
            
            # Get supply from RPC
            mint_pubkey = PublicKey.from_string(mint_address)
            supply_response = self.client.get_token_supply(mint_pubkey)
            
            total_supply = basic_info["supply"]
            circulating_supply = supply_response.value.amount if supply_response.value else None
            
            # Estimate holders (would require more complex analysis)
            holders_count = self._estimate_holders_count(mint_address)
            
            return TokenSupplyInfo(
                total_supply=total_supply,
                circulating_supply=circulating_supply,
                holders_count=holders_count
            )
            
        except Exception as e:
            print(f"Error analyzing supply for {mint_address}: {e}")
            return TokenSupplyInfo(total_supply=0)
    
    def analyze_token_security(self, basic_info: Dict[str, Any]) -> TokenSecurity:
        """Analyze token security properties"""
        try:
            mint_authority = basic_info.get("mint_authority")
            freeze_authority = basic_info.get("freeze_authority")
            
            # Calculate risk factors
            risk_factors = []
            
            if mint_authority:
                risk_factors.append("Has mint authority - tokens can be minted")
            
            if freeze_authority:
                risk_factors.append("Has freeze authority - accounts can be frozen")
            
            # Calculate security score (0-100)
            security_score = 100
            if mint_authority:
                security_score -= 30
            if freeze_authority:
                security_score -= 20
            
            return TokenSecurity(
                mint_authority=mint_authority,
                freeze_authority=freeze_authority,
                is_mutable=bool(mint_authority),
                has_update_authority=bool(mint_authority or freeze_authority),
                security_score=max(0, security_score),
                risk_factors=risk_factors or ["No major risk factors identified"]
            )
            
        except Exception as e:
            print(f"Error analyzing security: {e}")
            return TokenSecurity(risk_factors=[f"Analysis error: {str(e)}"])
    
    def analyze_token_governance(self, mint_address: str, basic_info: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze token governance structure with deep authority analysis"""
        try:
            governance_info = {
                "governance_type": "None",
                "authority_analyses": {},
                "overall_risk_score": 0,
                "governance_summary": {}
            }
            
            mint_authority = basic_info.get("mint_authority")
            freeze_authority = basic_info.get("freeze_authority")
            
            total_risk_score = 0
            authority_count = 0
            
            # Deep analysis of mint authority
            if mint_authority:
                print(f"🔍 Analyzing mint authority: {mint_authority}")
                mint_analysis = self.governance_analyzer.analyze_authority_deeply(
                    mint_authority, "mint_authority"
                )
                governance_info["authority_analyses"]["mint_authority"] = mint_analysis
                total_risk_score += mint_analysis.risk_assessment.get("risk_score", 5)
                authority_count += 1
            
            # Deep analysis of freeze authority
            if freeze_authority:
                print(f"🔍 Analyzing freeze authority: {freeze_authority}")
                freeze_analysis = self.governance_analyzer.analyze_authority_deeply(
                    freeze_authority, "freeze_authority"
                )
                governance_info["authority_analyses"]["freeze_authority"] = freeze_analysis
                total_risk_score += freeze_analysis.risk_assessment.get("risk_score", 5)
                authority_count += 1
            
            # Calculate overall risk score
            if authority_count > 0:
                governance_info["overall_risk_score"] = total_risk_score / authority_count
            
            # Determine governance type based on deep analysis
            governance_info["governance_type"] = self._determine_governance_type(
                governance_info["authority_analyses"]
            )
            
            # Generate governance summary
            governance_info["governance_summary"] = self._generate_governance_summary(
                governance_info["authority_analyses"], governance_info["governance_type"]
            )
            
            return governance_info
            
        except Exception as e:
            print(f"Error analyzing governance: {e}")
            return {"error": str(e)}
    
    def _analyze_authority(self, authority_address: str) -> Dict[str, Any]:
        """Analyze an authority address"""
        try:
            account_info = self.inspector.get_account_info(authority_address)
            if not account_info:
                return {"type": "Unknown", "address": authority_address}
            
            if account_info.executable:
                return {
                    "type": "Program",
                    "address": authority_address,
                    "owner": account_info.owner,
                    "is_governance": self._is_governance_program(authority_address)
                }
            else:
                return {
                    "type": "Wallet",
                    "address": authority_address,
                    "owner": account_info.owner
                }
                
        except Exception as e:
            return {"type": "Error", "address": authority_address, "error": str(e)}
    
    def _is_governance_program(self, address: str) -> bool:
        """Check if address is a known governance program"""
        if not address:
            return False
            
        known_governance = [
            SOLANA_PROGRAMS["SPL_GOVERNANCE"],
            "SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf",  # Squads
            "SMPLVC8MxZ5Bf5EfF7PaMiTCxoBAcmkbM2vkrvMK8ho"   # Solana Multisig
        ]
        
        return address in known_governance
    
    def _determine_governance_type(self, authority_analyses: Dict[str, Any]) -> str:
        """Determine overall governance type based on authority analyses"""
        if not authority_analyses:
            return "Decentralized"
        
        authority_types = []
        for auth_name, analysis in authority_analyses.items():
            if hasattr(analysis, 'authority_type'):
                authority_types.append(analysis.authority_type)
        
        # Determine based on authority types
        if any("DAO" in auth_type for auth_type in authority_types):
            return "DAO Governance"
        elif any("Multisig" in auth_type for auth_type in authority_types):
            return "Multisig Governance"
        elif any(auth_type == "Wallet" for auth_type in authority_types):
            return "Centralized"
        elif any(auth_type == "Program" for auth_type in authority_types):
            return "Program Governance"
        else:
            return "Unknown Governance"
    
    def _generate_governance_summary(self, authority_analyses: Dict[str, Any], governance_type: str) -> Dict[str, Any]:
        """Generate a summary of governance analysis"""
        summary = {
            "total_authorities": len(authority_analyses),
            "governance_type": governance_type,
            "key_findings": [],
            "recommendations": []
        }
        
        for auth_name, analysis in authority_analyses.items():
            if hasattr(analysis, 'authority_type') and hasattr(analysis, 'capabilities'):
                summary["key_findings"].append(
                    f"{auth_name}: {analysis.authority_type} with {len(analysis.capabilities)} capabilities"
                )
                
                # Add risk-based recommendations
                if hasattr(analysis, 'risk_assessment'):
                    risk_level = analysis.risk_assessment.get("risk_level", "unknown")
                    if risk_level == "high":
                        summary["recommendations"].append(
                            f"Consider decentralizing {auth_name} - current setup is high risk"
                        )
                    elif risk_level == "medium":
                        summary["recommendations"].append(
                            f"Monitor {auth_name} governance - moderate risk level"
                        )
        
        return summary
    
    def _estimate_holders_count(self, mint_address: str) -> Optional[int]:
        """Estimate number of token holders (simplified implementation)"""
        try:
            # This would require scanning all token accounts for this mint
            # For now, return None - full implementation would use getProgramAccounts
            # with proper filters to count token accounts with non-zero balances
            return None
            
        except Exception as e:
            print(f"Error estimating holders: {e}")
            return None
    
    def get_largest_holders(self, mint_address: str, limit: int = 10) -> List[Dict[str, Any]]:
        """Get largest token holders"""
        try:
            # This would require scanning token accounts and sorting by balance
            # Simplified implementation - would use getProgramAccounts with filters
            mint_pubkey = PublicKey.from_string(mint_address)
            token_program = PublicKey.from_string(SOLANA_PROGRAMS["SPL_TOKEN_PROGRAM"])
            
            # Get token accounts for this mint (simplified)
            response = self.client.get_program_accounts(
                token_program,
                filters=[
                    {"memcmp": {"offset": 0, "bytes": str(mint_pubkey)}}
                ]
            )
            
            holders = []
            for account in response.value:
                if len(account.account.data) >= 72:
                    data = account.account.data
                    amount = int.from_bytes(data[64:72], 'little')
                    if amount > 0:
                        holders.append({
                            "address": str(account.pubkey),
                            "amount": amount
                        })
            
            # Sort by amount and return top holders
            holders.sort(key=lambda x: x["amount"], reverse=True)
            return holders[:limit]
            
        except Exception as e:
            print(f"Error getting largest holders: {e}")
            return []
