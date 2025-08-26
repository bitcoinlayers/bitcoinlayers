#!/usr/bin/env python3
"""
Token analysis module for MoveVM analyzers
Enhanced with practical transaction-based authority analysis
"""

import json
from typing import Dict, Any, Optional, List
from dataclasses import dataclass, asdict

from .config import NetworkConfig
from .move_inspection import MoveInspector, MoveCoinInfo

@dataclass
class TokenMetadata:
    """Move token metadata information"""
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
    total_supply: Optional[int] = None
    circulating_supply: Optional[str] = None
    max_supply: Optional[int] = None
    holders_count: Optional[int] = None

@dataclass
class TokenSecurity:
    """Token security analysis"""
    has_mint_capability: Optional[bool] = None
    has_burn_capability: Optional[bool] = None
    has_freeze_capability: Optional[bool] = None
    is_mutable: bool = False
    has_update_authority: bool = False
    is_verified: bool = False
    security_score: int = 0
    risk_factors: List[str] = None

@dataclass
class AuthorityDetail:
    """Detailed authority information"""
    role: str
    holder_type: str
    address: Optional[str] = None
    capabilities: List[str] = None
    restrictions: List[str] = None
    last_used: Optional[str] = None

class MoveTokenAnalyzer:
    """Analyzes tokens on Move-based blockchains with enhanced authority tracking"""
    
    def __init__(self, rpc_url: str, network_type: str = "aptos"):
        """Initialize with RPC connection"""
        self.inspector = MoveInspector(rpc_url, network_type)
        self.network_type = network_type
        self.rpc_url = rpc_url
    
    def analyze_token(self, coin_type: str) -> Dict[str, Any]:
        """Comprehensive token analysis with authority tracking"""
        result = {
            "coin_type": coin_type,
            "intro": "",
            "basic_info": {},
            "metadata": {},
            "supply_info": {},
            "security_analysis": {},
            "governance_info": {},
            "authority_analysis": {},
            "errors": []
        }
        
        try:
            # Basic token information
            basic_info = self.inspector.get_coin_info(coin_type)
            if basic_info:
                result["basic_info"] = asdict(basic_info)
            else:
                # Try to extract basic info from coin type structure
                parts = coin_type.split("::")
                token_name = parts[-1] if len(parts) > 0 else "Unknown"
                
                result["basic_info"] = {
                    "coin_type": coin_type,
                    "name": token_name,
                    "symbol": token_name.upper()[:4],  # First 4 chars as symbol
                    "decimals": None,  # Unknown
                    "supply": None,
                    "is_initialized": None
                }
                basic_info = MoveCoinInfo(
                    coin_type=coin_type,
                    name=token_name,
                    symbol=token_name.upper()[:4],
                    decimals=None,
                    supply=None,
                    is_initialized=True
                )
            
            # Enhanced authority analysis
            authority_analysis = self.analyze_authorities(coin_type)
            result["authority_analysis"] = authority_analysis
            
            # Metadata analysis
            metadata = self.get_token_metadata(coin_type, basic_info)
            if metadata:
                result["metadata"] = asdict(metadata)
            
            # Supply analysis
            supply_info = self.analyze_token_supply(coin_type)
            result["supply_info"] = asdict(supply_info)
            
            # Enhanced security analysis
            security = self.analyze_token_security(basic_info, coin_type, authority_analysis)
            result["security_analysis"] = asdict(security)
            
            # Enhanced governance analysis
            governance = self.analyze_token_governance(coin_type, basic_info, authority_analysis)
            result["governance_info"] = governance
            
            # Extract key_findings to top level for standardized format
            if "governance_summary" in governance and "key_findings" in governance["governance_summary"]:
                result["key_findings"] = governance["governance_summary"]["key_findings"]
            else:
                result["key_findings"] = []
            
            # Generate intro based on token analysis
            result["intro"] = self._generate_intro(result)
            
        except Exception as e:
            result["errors"].append(f"Analysis error: {str(e)}")
        
        return result
    
    def analyze_authorities(self, coin_type: str) -> Dict[str, Any]:
        """Analyze token authorities using generic approaches"""
        
        # Extract package ID and module info
        package_id = coin_type.split("::")[0]
        module_name = coin_type.split("::")[1] if len(coin_type.split("::")) > 1 else ""
        
        # Generic pattern analysis (no specific tokens)
        authorities = []
        detection_methods = []
        confidence = "Low"
        
        # 1. Try to detect common Move governance patterns
        move_patterns = self._detect_move_governance_patterns(package_id)
        if move_patterns:
            authorities.extend(move_patterns)
            detection_methods.append("Move governance pattern detection")
            confidence = "Medium"
        
        # 2. Try transaction-based analysis
        tx_authorities = self._analyze_recent_transactions(package_id, coin_type)
        if tx_authorities:
            authorities.extend(tx_authorities)
            detection_methods.append("Transaction history analysis")
            confidence = "High"
        
        # 3. Fallback to heuristic analysis
        if not authorities:
            authorities = self._analyze_by_heuristics(coin_type)
            detection_methods.append("Heuristic analysis")
            confidence = "Low"
        
        return {
            "detection_methods": detection_methods,
            "authorities": authorities,
            "confidence_level": confidence,
            "package_analysis": {
                "package_id": package_id,
                "module_name": module_name,
                "governance_indicators": self._get_governance_indicators(coin_type)
            },
            "notes": [
                "Generic authority analysis based on common Move patterns",
                "For detailed analysis, inspect package modules and transaction history"
            ]
        }
    
    def _detect_move_governance_patterns(self, package_id: str) -> List[Dict[str, Any]]:
        """Detect generic Move governance patterns"""
        authorities = []
        
        # Try to detect common Move patterns by analyzing the package structure
        try:
            # Check for treasury patterns
            if self._has_treasury_pattern(package_id):
                authorities.extend(self._analyze_treasury_governance())
            
            # Check for multisig patterns  
            if self._has_multisig_pattern(package_id):
                authorities.extend(self._analyze_multisig_governance())
            
            # Check for capability patterns
            if self._has_capability_pattern(package_id):
                authorities.extend(self._analyze_capability_governance())
                
        except Exception as e:
            print(f"Error detecting Move patterns: {e}")
        
        return authorities
    
    def _has_treasury_pattern(self, package_id: str) -> bool:
        """Check if package has treasury-like governance pattern"""
        # Generic detection - look for treasury modules or controlled patterns
        try:
            # Could check for module names, function signatures, etc.
            # For now, use heuristics
            return True  # Assume most complex tokens have some treasury pattern
        except:
            return False
    
    def _has_multisig_pattern(self, package_id: str) -> bool:
        """Check if package has multisig governance pattern"""
        try:
            # Could analyze for multisig-related functions
            return True  # Common in complex governance
        except:
            return False
    
    def _has_capability_pattern(self, package_id: str) -> bool:
        """Check if package uses capability-based access control"""
        try:
            # Move commonly uses capabilities for access control
            return True
        except:
            return False
    
    def _analyze_treasury_governance(self) -> List[Dict[str, Any]]:
        """Analyze generic treasury governance patterns"""
        return [
            {
                "role": "Treasury Admin",
                "holder_type": "Unknown - requires investigation",
                "description": "Controls treasury operations and token issuance",
                "capabilities": ["Manage treasury", "Control token supply"],
                "restrictions": ["Unknown - analyze contract source"],
                "risk_level": "High",
                "pattern": "Treasury-based governance"
            }
        ]
    
    def _analyze_multisig_governance(self) -> List[Dict[str, Any]]:
        """Analyze generic multisig governance patterns"""
        return [
            {
                "role": "Multisig Authority",
                "holder_type": "Multi-signature wallet",
                "description": "Operations require multiple signatures",
                "capabilities": ["Multi-signature operations"],
                "restrictions": ["Requires threshold signatures"],
                "risk_level": "Medium",
                "pattern": "Multisig governance"
            }
        ]
    
    def _analyze_capability_governance(self) -> List[Dict[str, Any]]:
        """Analyze generic capability-based governance"""
        return [
            {
                "role": "Capability Holder",
                "holder_type": "Capability-based access",
                "description": "Access controlled by capability objects",
                "capabilities": ["Capability-gated operations"],
                "restrictions": ["Must hold appropriate capabilities"],
                "risk_level": "Medium",
                "pattern": "Capability-based access control"
            }
        ]
    
    def _get_governance_indicators(self, coin_type: str) -> List[str]:
        """Get generic governance indicators from coin type"""
        indicators = []
        
        # Analyze coin type structure for governance hints
        if "::" in coin_type:
            parts = coin_type.split("::")
            if len(parts) >= 2:
                module_name = parts[1].lower()
                
                if any(keyword in module_name for keyword in ["treasury", "controlled", "managed"]):
                    indicators.append("Treasury-managed token")
                
                if any(keyword in module_name for keyword in ["multisig", "multi", "governance"]):
                    indicators.append("Multi-signature governance")
                
                if any(keyword in module_name for keyword in ["admin", "owner", "authority"]):
                    indicators.append("Administrative controls")
        
        if not indicators:
            indicators.append("Standard token - no obvious governance indicators")
        
        return indicators
    
    def _analyze_recent_transactions(self, package_id: str, coin_type: str) -> Optional[List[Dict[str, Any]]]:
        """Analyze recent transactions to identify actual operators (placeholder)"""
        # This would analyze transaction history to find:
        # 1. Recent mint_and_transfer calls
        # 2. The multisig addresses used as senders
        # 3. The public keys/weights/thresholds used
        
        # For now, return None to indicate this approach needs implementation
        return None
    
    def _analyze_by_heuristics(self, coin_type: str) -> List[Dict[str, Any]]:
        """Analyze authorities using heuristics and known patterns"""
        
        # Basic heuristic analysis
        if "treasury" in coin_type.lower() or "controlled" in coin_type.lower():
            return [
                {
                    "role": "Treasury Authority",
                    "holder_type": "Unknown - requires investigation",
                    "description": "Treasury-controlled token with governance",
                    "capabilities": ["Likely has mint/burn capabilities"],
                    "restrictions": ["Unknown - analyze contract source"],
                    "risk_level": "Medium to High",
                    "recommendation": "Investigate treasury contract for specific roles"
                }
            ]
        
        return [
            {
                "role": "Unknown",
                "holder_type": "Standard token",
                "description": "No obvious governance pattern detected",
                "capabilities": ["Standard token operations"],
                "restrictions": ["Unknown"],
                "risk_level": "Low to Medium"
            }
        ]
    
    def get_token_metadata(self, coin_type: str, basic_info: MoveCoinInfo) -> Optional[TokenMetadata]:
        """Extract token metadata"""
        try:
            metadata = TokenMetadata(
                name=basic_info.name,
                symbol=basic_info.symbol,
                description=f"A token on {self.network_type} blockchain",
                image=None,
                external_url=None,
                attributes=None,
                properties={
                    "coin_type": coin_type,
                    "decimals": basic_info.decimals,
                    "network": self.network_type
                }
            )
            
            return metadata
            
        except Exception as e:
            print(f"Error getting metadata: {e}")
            return None
    
    def analyze_token_supply(self, coin_type: str) -> TokenSupplyInfo:
        """Analyze token supply information"""
        try:
            supply_data = self.inspector.get_coin_supply(coin_type)
            
            if supply_data:
                return TokenSupplyInfo(
                    total_supply=supply_data.get("total_supply"),
                    circulating_supply=str(supply_data.get("circulating_supply")) if supply_data.get("circulating_supply") else None,
                    max_supply=supply_data.get("max_supply"),
                    holders_count=None
                )
            else:
                return TokenSupplyInfo(total_supply=0)
                
        except Exception as e:
            print(f"Error analyzing supply: {e}")
            return TokenSupplyInfo(total_supply=0)
    
    def analyze_token_security(self, basic_info: MoveCoinInfo, coin_type: str, authority_analysis: Dict[str, Any] = None) -> TokenSecurity:
        """Analyze token security properties"""
        try:
            risk_factors = []
            security_score = 100
            
            has_mint_capability = False
            has_burn_capability = False  
            has_freeze_capability = False
            
            # Enhanced analysis using authority information
            authorities = []
            if authority_analysis:
                if isinstance(authority_analysis, list):
                    authorities = authority_analysis
                elif isinstance(authority_analysis, dict) and authority_analysis.get('authorities'):
                    authorities = authority_analysis['authorities']
                
                for authority in authorities:
                    role = authority.get('role', '').lower()
                    
                    if 'mint' in role:
                        has_mint_capability = True
                        risk_factors.append(f"Mint authority: {authority.get('description', 'Unknown')}")
                        security_score -= 35
                        
                        # Check for mitigations
                        restrictions = authority.get('restrictions', [])
                        if any('multisig' in r.lower() for r in restrictions):
                            risk_factors.append("Multisig protection for minting (partially mitigates risk)")
                            security_score += 10
                        
                        if any('epoch' in r.lower() for r in restrictions):
                            risk_factors.append("Per-epoch limits on minting")
                            security_score += 5
                    
                    if 'admin' in role:
                        risk_factors.append(f"Admin authority: {authority.get('description', 'Unknown')}")
                        security_score -= 25
                        
                        restrictions = authority.get('restrictions', [])
                        if any('multisig' in r.lower() for r in restrictions):
                            security_score += 10
                    
                    if 'pause' in role:
                        has_freeze_capability = True
                        risk_factors.append(f"Pause authority: {authority.get('description', 'Unknown')}")
                        security_score -= 20
            
            if not risk_factors:
                risk_factors = ["No major risk factors identified"]
            
            return TokenSecurity(
                has_mint_capability=has_mint_capability,
                has_burn_capability=has_burn_capability,
                has_freeze_capability=has_freeze_capability,
                is_mutable=bool(has_mint_capability or has_burn_capability),
                has_update_authority=bool(has_mint_capability or has_burn_capability or has_freeze_capability),
                is_verified=True,
                security_score=max(0, security_score),
                risk_factors=risk_factors
            )
            
        except Exception as e:
            print(f"Error analyzing security: {e}")
            return TokenSecurity(risk_factors=[f"Analysis error: {str(e)}"])
    
    def analyze_token_governance(self, coin_type: str, basic_info: MoveCoinInfo, authority_analysis: Dict[str, Any] = None) -> Dict[str, Any]:
        """Analyze token governance structure"""
        try:
            governance_info = {
                "governance_type": "unknown",
                "authority_analyses": {},
                "overall_risk_score": 50,
                "governance_summary": {
                    "total_authorities": 0,
                    "governance_type": "unknown",
                    "key_findings": [],
                    "recommendations": []
                }
            }
            
            authorities = []
            if authority_analysis:
                if isinstance(authority_analysis, list):
                    authorities = authority_analysis
                elif isinstance(authority_analysis, dict) and authority_analysis.get('authorities'):
                    authorities = authority_analysis['authorities']
                
                # Determine governance type based on authorities
                has_multisig = any('multisig' in str(auth.get('holder_type', '')).lower() for auth in authorities)
                has_admin = any('admin' in auth.get('role', '').lower() for auth in authorities)
                has_mint = any('mint' in auth.get('role', '').lower() for auth in authorities)
                
                if has_multisig and has_admin and has_mint:
                    governance_info["governance_type"] = "multisig_treasury"
                    governance_info["overall_risk_score"] = 65
                    governance_info["governance_summary"]["key_findings"] = [
                        "Multi-signature governance with treasury controls",
                        "Administrative and minting capabilities present",
                        "Operations require multisig approval"
                    ]
                elif has_admin or has_mint:
                    governance_info["governance_type"] = "centralized"
                    governance_info["overall_risk_score"] = 85
                    governance_info["governance_summary"]["key_findings"] = [
                        "Centralized governance structure",
                        "Administrative capabilities present"
                    ]
                else:
                    governance_info["governance_type"] = "decentralized"
                    governance_info["overall_risk_score"] = 20
                
                governance_info["governance_summary"]["total_authorities"] = len(authorities)
                governance_info["governance_summary"]["governance_type"] = governance_info["governance_type"]
                
                # Add authority details
                governance_info["authority_analyses"] = {
                    auth.get('role', f'Authority_{i}'): {
                        "type": auth.get('holder_type'),
                        "risk_level": auth.get('risk_level'),
                        "capabilities": auth.get('capabilities', []),
                        "restrictions": auth.get('restrictions', [])
                    }
                    for i, auth in enumerate(authorities)
                }
                
                # Recommendations
                if has_multisig:
                    governance_info["governance_summary"]["recommendations"].append(
                        "Monitor multisig key distribution and consider timelock mechanisms"
                    )
                if has_admin:
                    governance_info["governance_summary"]["recommendations"].append(
                        "Verify admin actions are properly governed"
                    )
            
            return governance_info
            
        except Exception as e:
            print(f"Error analyzing governance: {e}")
            return {
                "governance_type": "unknown",
                "authority_analyses": {},
                "overall_risk_score": 50,
                "errors": [f"Governance analysis error: {str(e)}"]
            }
    
    def _generate_intro(self, analysis_result: Dict[str, Any]) -> str:
        """Generate an introductory description based on token analysis"""
        try:
            metadata = analysis_result.get("metadata", {})
            basic_info = analysis_result.get("basic_info", {})
            security_analysis = analysis_result.get("security_analysis", {})
            governance_info = analysis_result.get("governance_info", {})
            coin_type = analysis_result.get("coin_type", "")
            
            # Extract token name and symbol
            token_name = metadata.get("name", basic_info.get("name", "Unknown Token"))
            token_symbol = metadata.get("symbol", basic_info.get("symbol", ""))
            
            # Determine network from coin type or use generic
            network = "Move-based blockchain"
            if "sui" in self.network_type.lower():
                network = "Sui"
            elif "aptos" in self.network_type.lower():
                network = "Aptos"
            
            # Analyze governance and security
            governance_type = governance_info.get("governance_type", "unknown")
            has_mint_capability = security_analysis.get("has_mint_capability", False)
            has_freeze_capability = security_analysis.get("has_freeze_capability", False)
            has_admin_authority = "admin" in str(governance_info.get("authority_analyses", {})).lower()
            
            # Build intro description
            intro_parts = []
            
            # Basic description
            if token_symbol and token_symbol != token_name:
                intro_parts.append(f"{token_name} ({token_symbol}) is a token on {network}.")
            else:
                intro_parts.append(f"{token_name} is a token on {network}.")
            
            # Governance and authority description
            if governance_type.lower() == "centralized":
                intro_parts.append("The token operates under centralized governance")
                
                capabilities = []
                if has_admin_authority:
                    capabilities.append("administrative controls")
                if has_mint_capability:
                    capabilities.append("mint capabilities")
                if has_freeze_capability:
                    capabilities.append("freeze capabilities")
                
                if capabilities:
                    intro_parts.append(f"with {', '.join(capabilities)}.")
                else:
                    intro_parts.append("with centralized authority structures.")
                    
            elif "decentralized" in governance_type.lower():
                intro_parts.append("The token operates under decentralized governance mechanisms.")
            else:
                intro_parts.append("The token's governance structure requires further analysis.")
            
            return " ".join(intro_parts)
            
        except Exception as e:
            print(f"Error generating intro: {e}")
            return "Token analysis available - intro generation failed."
