#!/usr/bin/env python3
"""
Governance analysis module for SVM analyzers
Handles deep analysis of Solana governance structures, multisigs, and authority patterns
"""

import json
import base58
import struct
from typing import Dict, Any, Optional, List, Tuple
from solana.rpc.api import Client
from solders.pubkey import Pubkey as PublicKey
from dataclasses import dataclass, asdict

from .config import NetworkConfig, SOLANA_PROGRAMS, GOVERNANCE_PATTERNS
from .program_inspection import ProgramInspector

@dataclass
class MultisigInfo:
    """Information about a multisig configuration"""
    threshold: int
    signers: List[str]
    total_signers: int
    multisig_type: str
    pending_transactions: Optional[int] = None

@dataclass
class GovernanceInfo:
    """Information about a governance structure"""
    governance_type: str
    voting_threshold: Optional[float] = None
    council_members: Optional[List[str]] = None
    voting_power_distribution: Optional[Dict[str, float]] = None
    proposal_count: Optional[int] = None
    treasury_balance: Optional[int] = None

@dataclass
class AuthorityAnalysis:
    """Comprehensive authority analysis"""
    address: str
    authority_type: str
    capabilities: List[str]
    multisig_info: Optional[MultisigInfo] = None
    governance_info: Optional[GovernanceInfo] = None
    risk_assessment: Dict[str, Any] = None

class GovernanceAnalyzer:
    """Deep governance and authority analysis for Solana"""
    
    def __init__(self, rpc_url: str):
        """Initialize with RPC connection"""
        self.client = Client(rpc_url)
        self.inspector = ProgramInspector(rpc_url)
        self.rpc_url = rpc_url
    
    def analyze_authority_deeply(self, authority_address: str, context: str = "unknown") -> AuthorityAnalysis:
        """Perform deep analysis of an authority address"""
        print(f"🔍 Deep analyzing authority: {authority_address} (context: {context})")
        
        # Basic account info
        account_info = self.inspector.get_account_info(authority_address)
        if not account_info:
            return AuthorityAnalysis(
                address=authority_address,
                authority_type="Non-existent",
                capabilities=["Address does not exist"],
                risk_assessment={"risk_level": "high", "reason": "Invalid authority address"}
            )
        
        # Determine authority type and analyze accordingly
        if account_info.executable:
            return self._analyze_program_authority(authority_address, account_info, context)
        else:
            return self._analyze_wallet_authority(authority_address, account_info, context)
    
    def _analyze_program_authority(self, address: str, account_info, context: str) -> AuthorityAnalysis:
        """Analyze a program-based authority"""
        authority_type = "Program"
        capabilities = []
        multisig_info = None
        governance_info = None
        
        # Check if it's a known governance program
        if self._is_realms_governance(address):
            authority_type = "Realms DAO"
            governance_info = self._analyze_realms_governance(address)
            capabilities = self._get_realms_capabilities(context)
            
        elif self._is_squads_multisig(address):
            authority_type = "Squads Multisig"
            multisig_info = self._analyze_squads_multisig(address)
            capabilities = self._get_multisig_capabilities(context)
            
        elif self._is_solana_multisig(address):
            authority_type = "Solana Multisig"
            multisig_info = self._analyze_solana_multisig(address)
            capabilities = self._get_multisig_capabilities(context)
            
        else:
            # Generic program analysis
            capabilities = self._analyze_program_capabilities(address, context)
        
        # Risk assessment
        risk_assessment = self._assess_authority_risk(authority_type, capabilities, multisig_info, governance_info)
        
        return AuthorityAnalysis(
            address=address,
            authority_type=authority_type,
            capabilities=capabilities,
            multisig_info=multisig_info,
            governance_info=governance_info,
            risk_assessment=risk_assessment
        )
    
    def _analyze_wallet_authority(self, address: str, account_info, context: str) -> AuthorityAnalysis:
        """Analyze a wallet-based authority"""
        capabilities = self._get_wallet_capabilities(context)
        
        # Check if wallet has any special properties
        special_checks = self._check_wallet_properties(address)
        
        risk_assessment = {
            "risk_level": "high",
            "reason": "Single wallet control - centralized authority",
            "mitigations": special_checks.get("mitigations", [])
        }
        
        return AuthorityAnalysis(
            address=address,
            authority_type="Wallet",
            capabilities=capabilities,
            risk_assessment=risk_assessment
        )
    
    def _is_realms_governance(self, address: str) -> bool:
        """Check if address is a Realms governance program"""
        return address == GOVERNANCE_PATTERNS["REALMS"]
    
    def _is_squads_multisig(self, address: str) -> bool:
        """Check if address is a Squads multisig"""
        return address == GOVERNANCE_PATTERNS["SQUADS"]
    
    def _is_solana_multisig(self, address: str) -> bool:
        """Check if address is a Solana multisig"""
        return address == GOVERNANCE_PATTERNS["SOLANA_MULTISIG"]
    
    def _analyze_realms_governance(self, address: str) -> GovernanceInfo:
        """Analyze Realms DAO governance structure"""
        try:
            # Get governance accounts owned by Realms program
            governance_accounts = self.inspector.find_governance_accounts(GOVERNANCE_PATTERNS["REALMS"])
            
            # Parse governance configuration (simplified - would need full Realms parsing)
            governance_info = GovernanceInfo(
                governance_type="Realms DAO",
                voting_threshold=60.0,  # Default, would parse actual config
                council_members=[],  # Would parse actual council
                proposal_count=len(governance_accounts) if governance_accounts else 0
            )
            
            return governance_info
            
        except Exception as e:
            print(f"Error analyzing Realms governance: {e}")
            return GovernanceInfo(governance_type="Realms DAO (analysis failed)")
    
    def _analyze_squads_multisig(self, address: str) -> MultisigInfo:
        """Analyze Squads multisig configuration"""
        try:
            # Get multisig accounts (simplified implementation)
            # Real implementation would parse Squads account structure
            return MultisigInfo(
                threshold=2,  # Would parse actual threshold
                signers=["signer1", "signer2", "signer3"],  # Would parse actual signers
                total_signers=3,
                multisig_type="Squads v3"
            )
            
        except Exception as e:
            print(f"Error analyzing Squads multisig: {e}")
            return MultisigInfo(
                threshold=0,
                signers=[],
                total_signers=0,
                multisig_type="Squads (analysis failed)"
            )
    
    def _analyze_solana_multisig(self, address: str) -> MultisigInfo:
        """Analyze native Solana multisig"""
        try:
            account_info = self.inspector.get_account_info(address)
            if not account_info or len(account_info.data) < 355:
                raise ValueError("Invalid multisig account data")
            
            data = account_info.data
            
            # Parse Solana multisig account structure
            threshold = data[0]
            num_signers = data[1]
            is_initialized = data[2] == 1
            
            signers = []
            for i in range(num_signers):
                start_idx = 3 + (i * 32)
                end_idx = start_idx + 32
                if end_idx <= len(data):
                    signer_pubkey = base58.b58encode(data[start_idx:end_idx]).decode()
                    signers.append(signer_pubkey)
            
            return MultisigInfo(
                threshold=threshold,
                signers=signers,
                total_signers=num_signers,
                multisig_type="Native Solana Multisig"
            )
            
        except Exception as e:
            print(f"Error analyzing Solana multisig: {e}")
            return MultisigInfo(
                threshold=0,
                signers=[],
                total_signers=0,
                multisig_type="Native Solana (analysis failed)"
            )
    
    def _analyze_program_capabilities(self, address: str, context: str) -> List[str]:
        """Analyze what a generic program can do"""
        capabilities = []
        
        # Analyze based on context
        if context == "mint_authority":
            capabilities.extend([
                "Mint new tokens",
                "Change mint authority",
                "Set freeze authority"
            ])
        elif context == "freeze_authority":
            capabilities.extend([
                "Freeze token accounts",
                "Unfreeze token accounts",
                "Change freeze authority"
            ])
        
        # Add program-specific capabilities
        try:
            program_info = self.inspector.get_program_info(address)
            if program_info:
                capabilities.append(f"Execute program instructions (program size: {program_info.data_length} bytes)")
                
                # Check if program is upgradeable
                if program_info.owner == "BPFLoaderUpgradeab1e11111111111111111111111":
                    capabilities.append("Program is upgradeable")
                    
        except Exception as e:
            capabilities.append(f"Program analysis failed: {str(e)}")
        
        return capabilities
    
    def _get_realms_capabilities(self, context: str) -> List[str]:
        """Get capabilities for Realms governance"""
        base_capabilities = [
            "Execute governance proposals",
            "Manage treasury funds",
            "Change governance parameters",
            "Add/remove council members"
        ]
        
        if context == "mint_authority":
            base_capabilities.extend([
                "Mint tokens via governance vote",
                "Change mint authority via proposal"
            ])
        elif context == "freeze_authority":
            base_capabilities.extend([
                "Freeze accounts via governance vote",
                "Change freeze authority via proposal"
            ])
        
        return base_capabilities
    
    def _get_multisig_capabilities(self, context: str) -> List[str]:
        """Get capabilities for multisig"""
        base_capabilities = [
            "Execute transactions with required signatures",
            "Add/remove signers (if threshold met)",
            "Change signature threshold"
        ]
        
        if context == "mint_authority":
            base_capabilities.extend([
                "Mint tokens (requires threshold signatures)",
                "Change mint authority (requires threshold signatures)"
            ])
        elif context == "freeze_authority":
            base_capabilities.extend([
                "Freeze accounts (requires threshold signatures)",
                "Change freeze authority (requires threshold signatures)"
            ])
        
        return base_capabilities
    
    def _get_wallet_capabilities(self, context: str) -> List[str]:
        """Get capabilities for wallet authority"""
        capabilities = []
        
        if context == "mint_authority":
            capabilities.extend([
                "Mint unlimited tokens",
                "Change mint authority to any address",
                "Burn tokens from any account"
            ])
        elif context == "freeze_authority":
            capabilities.extend([
                "Freeze any token account instantly",
                "Unfreeze any token account instantly",
                "Change freeze authority to any address"
            ])
        
        capabilities.append("Full unilateral control (no multi-party approval required)")
        return capabilities
    
    def _check_wallet_properties(self, address: str) -> Dict[str, Any]:
        """Check special properties of a wallet"""
        properties = {"mitigations": []}
        
        try:
            account_info = self.inspector.get_account_info(address)
            if account_info:
                # Check if it's a zero-balance wallet (might be burned)
                if account_info.lamports == 0:
                    properties["mitigations"].append("Zero balance - may be effectively burned")
                
                # Check if it has a large balance (indicates active use)
                if account_info.lamports > 1000000000:  # > 1 SOL
                    properties["mitigations"].append("Has significant SOL balance - actively maintained")
                    
        except Exception as e:
            properties["error"] = str(e)
        
        return properties
    
    def _assess_authority_risk(self, authority_type: str, capabilities: List[str], 
                             multisig_info: Optional[MultisigInfo], 
                             governance_info: Optional[GovernanceInfo]) -> Dict[str, Any]:
        """Assess risk level of authority configuration"""
        
        if authority_type == "Wallet":
            return {
                "risk_level": "high",
                "risk_score": 10,
                "reason": "Single wallet has full control",
                "mitigations": []
            }
        
        elif authority_type in ["Squads Multisig", "Native Solana Multisig"] and multisig_info:
            if multisig_info.threshold == 1:
                risk_level = "high"
                risk_score = 8
                reason = "1-of-N multisig provides limited protection"
            elif multisig_info.threshold < multisig_info.total_signers / 2:
                risk_level = "medium-high"
                risk_score = 6
                reason = f"Low threshold ({multisig_info.threshold}/{multisig_info.total_signers})"
            else:
                risk_level = "medium"
                risk_score = 4
                reason = f"Reasonable multisig threshold ({multisig_info.threshold}/{multisig_info.total_signers})"
            
            return {
                "risk_level": risk_level,
                "risk_score": risk_score,
                "reason": reason,
                "threshold": f"{multisig_info.threshold}/{multisig_info.total_signers}",
                "mitigations": ["Multi-party approval required"]
            }
        
        elif authority_type == "Realms DAO":
            return {
                "risk_level": "low-medium",
                "risk_score": 3,
                "reason": "Governance-controlled authority",
                "mitigations": ["Community voting required", "Transparent proposals"]
            }
        
        else:
            return {
                "risk_level": "medium",
                "risk_score": 5,
                "reason": "Program-controlled authority (unknown governance)",
                "mitigations": ["Not directly controlled by wallet"]
            }
    
    def generate_authority_report(self, analysis: AuthorityAnalysis) -> Dict[str, Any]:
        """Generate comprehensive authority report"""
        report = {
            "authority_address": analysis.address,
            "authority_type": analysis.authority_type,
            "capabilities": analysis.capabilities,
            "risk_assessment": analysis.risk_assessment
        }
        
        if analysis.multisig_info:
            report["multisig_configuration"] = asdict(analysis.multisig_info)
        
        if analysis.governance_info:
            report["governance_configuration"] = asdict(analysis.governance_info)
        
        return report


