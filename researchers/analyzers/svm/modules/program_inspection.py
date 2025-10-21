#!/usr/bin/env python3
"""
Program inspection module for SVM analyzers
Handles Solana program account analysis, similar to EVM contract inspection
"""

import json
import base64
import base58
from typing import Dict, Any, Optional, List, Tuple
from solana.rpc.api import Client
from solders.pubkey import Pubkey as PublicKey
from dataclasses import dataclass, asdict

from .config import NetworkConfig, SOLANA_PROGRAMS, SPL_TOKEN_EXTENSIONS, ACCOUNT_LAYOUTS

@dataclass
class ProgramInfo:
    """Information about a Solana program"""
    address: str
    is_executable: bool
    owner: str
    data_length: int
    lamports: int
    rent_epoch: Optional[int] = None

@dataclass 
class AccountInfo:
    """Information about a Solana account"""
    address: str
    owner: str
    executable: bool
    lamports: int
    data: bytes
    rent_epoch: Optional[int] = None

class ProgramInspector:
    """Inspects Solana programs and accounts"""
    
    def __init__(self, rpc_url: str):
        """Initialize with RPC connection"""
        self.client = Client(rpc_url)
        self.rpc_url = rpc_url
    
    def get_account_info(self, address: str) -> Optional[AccountInfo]:
        """Get account information for a given address"""
        try:
            pubkey = PublicKey.from_string(address)
            response = self.client.get_account_info(pubkey)
            
            if not response.value:
                return None
                
            account = response.value
            return AccountInfo(
                address=address,
                owner=str(account.owner),
                executable=account.executable,
                lamports=account.lamports,
                data=account.data,
                rent_epoch=getattr(account, 'rent_epoch', None)
            )
            
        except Exception as e:
            print(f"Error getting account info for {address}: {e}")
            return None
    
    def get_program_info(self, address: str) -> Optional[ProgramInfo]:
        """Get program information"""
        account_info = self.get_account_info(address)
        if not account_info:
            return None
            
        return ProgramInfo(
            address=address,
            is_executable=account_info.executable,
            owner=account_info.owner,
            data_length=len(account_info.data),
            lamports=account_info.lamports,
            rent_epoch=account_info.rent_epoch
        )
    
    def is_spl_token(self, address: str) -> bool:
        """Check if address is an SPL token mint"""
        account_info = self.get_account_info(address)
        if not account_info:
            return False
            
        # Check if owned by SPL Token program
        return account_info.owner in [
            SOLANA_PROGRAMS["SPL_TOKEN_PROGRAM"],
            SOLANA_PROGRAMS["SPL_TOKEN_2022_PROGRAM"]
        ]
    
    def get_spl_token_info(self, mint_address: str) -> Optional[Dict[str, Any]]:
        """Get SPL token mint information using manual RPC call for accuracy"""
        try:
            # Use direct RPC call with jsonParsed format for most accurate data
            import requests
            
            payload = {
                'jsonrpc': '2.0',
                'id': 1,
                'method': 'getAccountInfo',
                'params': [mint_address, {'encoding': 'jsonParsed'}]
            }
            
            response = requests.post(self.rpc_url, json=payload, timeout=30)
            data = response.json()
            
            if 'result' in data and data['result']['value'] and data['result']['value']['data']:
                parsed_info = data['result']['value']['data']['parsed']['info']
                owner_program = data['result']['value']['owner']
                
                return {
                    "mint_address": mint_address,
                    "supply": int(parsed_info.get('supply', 0)),
                    "decimals": int(parsed_info.get('decimals', 0)),
                    "mint_authority": parsed_info.get('mintAuthority'),
                    "freeze_authority": parsed_info.get('freezeAuthority'),
                    "is_initialized": parsed_info.get('isInitialized', True),
                    "owner_program": owner_program,
                    "is_token_2022": owner_program == SOLANA_PROGRAMS["SPL_TOKEN_2022_PROGRAM"]
                }
            else:
                # Fallback to standard client method
                pubkey = PublicKey.from_string(mint_address)
                response = self.client.get_account_info(pubkey)
                
                if not response.value:
                    return None
                    
                return self._parse_raw_mint_data(mint_address, response.value)
            
        except Exception as e:
            print(f"Error parsing SPL token info for {mint_address}: {e}")
            # Final fallback to raw parsing
            try:
                pubkey = PublicKey.from_string(mint_address)
                response = self.client.get_account_info(pubkey)
                
                if response.value:
                    return self._parse_raw_mint_data(mint_address, response.value)
            except:
                pass
            return None
    
    def _parse_raw_mint_data(self, mint_address: str, account) -> Optional[Dict[str, Any]]:
        """Fallback method to parse raw mint data manually"""
        try:
            # Parse mint data (basic SPL token structure)
            if len(account.data) < 82:
                return None
                
            data = account.data
            
            # Parse mint account data structure
            mint_authority_option = data[0]
            mint_authority = None
            if mint_authority_option == 1:
                mint_authority = base58.b58encode(data[1:33]).decode()
            
            supply = int.from_bytes(data[36:44], 'little')
            decimals = data[44]
            
            is_initialized = data[45] == 1
            
            freeze_authority_option = data[46]
            freeze_authority = None
            if freeze_authority_option == 1:
                freeze_authority = base58.b58encode(data[47:79]).decode()
            
            return {
                "mint_address": mint_address,
                "supply": supply,
                "decimals": decimals,
                "mint_authority": mint_authority,
                "freeze_authority": freeze_authority,
                "is_initialized": is_initialized,
                "owner_program": str(account.owner),
                "is_token_2022": str(account.owner) == SOLANA_PROGRAMS["SPL_TOKEN_2022_PROGRAM"]
            }
            
        except Exception as e:
            print(f"Error parsing raw mint data for {mint_address}: {e}")
            return None
    
    def get_token_accounts_by_owner(self, owner_address: str, mint_address: Optional[str] = None) -> List[Dict[str, Any]]:
        """Get token accounts owned by a specific address"""
        try:
            owner_pubkey = PublicKey.from_string(owner_address)
            
            if mint_address:
                mint_pubkey = PublicKey.from_string(mint_address)
                response = self.client.get_token_accounts_by_owner(
                    owner_pubkey,
                    {"mint": mint_pubkey}
                )
            else:
                response = self.client.get_token_accounts_by_owner(
                    owner_pubkey,
                    {"programId": PublicKey.from_string(SOLANA_PROGRAMS["SPL_TOKEN_PROGRAM"])}
                )
            
            accounts = []
            for account in response.value:
                account_data = account.account
                pubkey = account.pubkey
                
                # Parse token account data
                if len(account_data.data) >= 165:
                    data = account_data.data
                    mint = base58.b58encode(data[0:32]).decode()
                    owner = base58.b58encode(data[32:64]).decode()
                    amount = int.from_bytes(data[64:72], 'little')
                    
                    accounts.append({
                        "address": str(pubkey),
                        "mint": mint,
                        "owner": owner,
                        "amount": amount,
                        "owner_program": str(account_data.owner)
                    })
            
            return accounts
            
        except Exception as e:
            print(f"Error getting token accounts for {owner_address}: {e}")
            return []
    
    def detect_token_extensions(self, mint_address: str) -> List[str]:
        """Detect SPL Token 2022 extensions on a mint"""
        account_info = self.get_account_info(mint_address)
        if not account_info:
            return []
        
        # Only Token 2022 supports extensions
        if account_info.owner != SOLANA_PROGRAMS["SPL_TOKEN_2022_PROGRAM"]:
            return []
        
        extensions = []
        data = account_info.data
        
        # If account is larger than base mint size, it has extensions
        if len(data) > ACCOUNT_LAYOUTS["SPL_TOKEN_2022_MINT"]:
            # Extension detection would require parsing the TLV structure
            # This is a simplified version - full implementation would parse each extension
            extensions.append("has_extensions")
        
        return extensions
    
    def find_governance_accounts(self, governance_program: str) -> List[Dict[str, Any]]:
        """Find governance-related accounts for a program"""
        try:
            program_pubkey = PublicKey.from_string(governance_program)
            
            # Search for accounts owned by governance program
            response = self.client.get_program_accounts(program_pubkey)
            
            accounts = []
            for account in response.value:
                accounts.append({
                    "address": str(account.pubkey),
                    "owner": str(account.account.owner),
                    "executable": account.account.executable,
                    "lamports": account.account.lamports,
                    "data_length": len(account.account.data)
                })
            
            return accounts
            
        except Exception as e:
            print(f"Error finding governance accounts: {e}")
            return []
    
    def analyze_program_usage(self, program_address: str) -> Dict[str, Any]:
        """Analyze how a program is being used"""
        try:
            # Get accounts owned by this program
            program_pubkey = PublicKey.from_string(program_address)
            response = self.client.get_program_accounts(program_pubkey)
            
            analysis = {
                "program_address": program_address,
                "total_accounts": len(response.value),
                "account_types": {},
                "total_lamports": 0
            }
            
            for account in response.value:
                # Categorize accounts by data size (rough heuristic)
                data_size = len(account.account.data)
                size_category = f"{data_size}_bytes"
                
                if size_category not in analysis["account_types"]:
                    analysis["account_types"][size_category] = 0
                analysis["account_types"][size_category] += 1
                
                analysis["total_lamports"] += account.account.lamports
            
            return analysis
            
        except Exception as e:
            print(f"Error analyzing program usage: {e}")
            return {"error": str(e)}
