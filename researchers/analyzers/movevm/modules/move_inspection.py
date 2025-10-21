#!/usr/bin/env python3
"""
Move object and module inspection for MoveVM analyzers
Handles interaction with Move-based blockchain APIs
"""

import json
import requests
from typing import Dict, Any, Optional, List
from dataclasses import dataclass

@dataclass
class MoveObjectInfo:
    """Information about a Move object"""
    object_id: str
    version: str
    digest: str
    object_type: str
    owner: Optional[str] = None
    previous_transaction: Optional[str] = None

@dataclass
class MoveCoinInfo:
    """Information about a Move coin"""
    coin_type: str
    name: str
    symbol: str
    decimals: int
    supply: Optional[int] = None
    is_initialized: bool = True

class MoveInspector:
    """Inspector for Move-based blockchain objects and modules"""
    
    def __init__(self, rpc_url: str, network_type: str = "aptos"):
        """Initialize with RPC connection"""
        self.rpc_url = rpc_url.rstrip('/')
        self.network_type = network_type.lower()
        self.session = requests.Session()
        
    def get_coin_info(self, coin_type: str) -> Optional[MoveCoinInfo]:
        """Get basic coin information"""
        try:
            if "aptos" in self.network_type:
                return self._get_aptos_coin_info(coin_type)
            elif "sui" in self.network_type:
                return self._get_sui_coin_info(coin_type)
            else:
                # Generic Move implementation
                return self._get_generic_coin_info(coin_type)
        except Exception as e:
            print(f"Error getting coin info for {coin_type}: {e}")
            return None
    
    def _get_aptos_coin_info(self, coin_type: str) -> Optional[MoveCoinInfo]:
        """Get Aptos coin information"""
        try:
            # Get coin info from Aptos API
            url = f"{self.rpc_url}/accounts/{coin_type.split('::')[0]}/resource/{coin_type.replace('::', '%3A%3A')}"
            
            response = self.session.get(url)
            if response.status_code != 200:
                return None
                
            data = response.json()
            
            # Extract coin metadata
            name = data.get('data', {}).get('name', coin_type.split('::')[-1])
            symbol = data.get('data', {}).get('symbol', name)
            decimals = data.get('data', {}).get('decimals', 8)
            supply = data.get('data', {}).get('supply', {}).get('vec', [None])[0]
            
            return MoveCoinInfo(
                coin_type=coin_type,
                name=name,
                symbol=symbol,
                decimals=decimals,
                supply=int(supply) if supply else None,
                is_initialized=True
            )
            
        except Exception as e:
            print(f"Error getting Aptos coin info: {e}")
            return None
    
    def _get_sui_coin_info(self, coin_type: str) -> Optional[MoveCoinInfo]:
        """Get Sui coin information"""
        try:
            # Sui RPC call for coin metadata
            payload = {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "suix_getCoinMetadata",
                "params": [coin_type]
            }
            
            response = self.session.post(self.rpc_url, json=payload)
            if response.status_code != 200:
                return None
                
            data = response.json()
            result = data.get('result')
            
            if not result:
                return None
                
            return MoveCoinInfo(
                coin_type=coin_type,
                name=result.get('name', coin_type.split('::')[-1]),
                symbol=result.get('symbol', ''),
                decimals=result.get('decimals', 9),
                supply=None,  # Supply info requires separate call
                is_initialized=True
            )
            
        except Exception as e:
            print(f"Error getting Sui coin info: {e}")
            return None
    
    def _get_generic_coin_info(self, coin_type: str) -> Optional[MoveCoinInfo]:
        """Get generic Move coin information"""
        # Fallback implementation for other Move chains
        return MoveCoinInfo(
            coin_type=coin_type,
            name=coin_type.split('::')[-1],
            symbol=coin_type.split('::')[-1][:3].upper(),
            decimals=8,
            supply=None,
            is_initialized=True
        )
    
    def get_coin_supply(self, coin_type: str) -> Optional[Dict[str, Any]]:
        """Get coin supply information"""
        try:
            if "aptos" in self.network_type:
                return self._get_aptos_coin_supply(coin_type)
            elif "sui" in self.network_type:
                return self._get_sui_coin_supply(coin_type)
            else:
                return None
        except Exception as e:
            print(f"Error getting coin supply: {e}")
            return None
    
    def _get_aptos_coin_supply(self, coin_type: str) -> Optional[Dict[str, Any]]:
        """Get Aptos coin supply"""
        try:
            # Get supply from coin info resource
            url = f"{self.rpc_url}/accounts/{coin_type.split('::')[0]}/resource/0x1::coin::CoinInfo<{coin_type}>"
            
            response = self.session.get(url)
            if response.status_code != 200:
                return None
                
            data = response.json()
            supply_data = data.get('data', {}).get('supply', {})
            
            return {
                "total_supply": int(supply_data.get('vec', [0])[0]) if supply_data.get('vec') else None,
                "circulating_supply": None,  # Would need additional calculation
                "max_supply": None
            }
            
        except Exception as e:
            print(f"Error getting Aptos supply: {e}")
            return None
    
    def _get_sui_coin_supply(self, coin_type: str) -> Optional[Dict[str, Any]]:
        """Get Sui coin supply"""
        try:
            # Sui RPC call for total supply
            payload = {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "suix_getTotalSupply",
                "params": [coin_type]
            }
            
            response = self.session.post(self.rpc_url, json=payload)
            if response.status_code != 200:
                return None
                
            data = response.json()
            total_supply = data.get('result', {}).get('value')
            
            return {
                "total_supply": int(total_supply) if total_supply else None,
                "circulating_supply": None,
                "max_supply": None
            }
            
        except Exception as e:
            print(f"Error getting Sui supply: {e}")
            return None
    
    def get_object_info(self, object_id: str) -> Optional[MoveObjectInfo]:
        """Get Move object information"""
        try:
            if "sui" in self.network_type:
                return self._get_sui_object_info(object_id)
            else:
                return None
        except Exception as e:
            print(f"Error getting object info: {e}")
            return None
    
    def _get_sui_object_info(self, object_id: str) -> Optional[MoveObjectInfo]:
        """Get Sui object information"""
        try:
            payload = {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "sui_getObject",
                "params": [object_id, {"showType": True, "showOwner": True, "showPreviousTransaction": True}]
            }
            
            response = self.session.post(self.rpc_url, json=payload)
            if response.status_code != 200:
                return None
                
            data = response.json()
            result = data.get('result', {}).get('data')
            
            if not result:
                return None
                
            return MoveObjectInfo(
                object_id=result.get('objectId', object_id),
                version=result.get('version', ''),
                digest=result.get('digest', ''),
                object_type=result.get('type', ''),
                owner=result.get('owner', {}).get('AddressOwner') if isinstance(result.get('owner'), dict) else None,
                previous_transaction=result.get('previousTransaction')
            )
            
        except Exception as e:
            print(f"Error getting Sui object info: {e}")
            return None

