#!/usr/bin/env python3
"""
Configuration management for MoveVM analyzers
Handles network configurations for Aptos, Sui, Movement and other Move-based chains
"""

import os
from typing import Dict, Any, Optional
from dataclasses import dataclass
from decouple import config

@dataclass
class NetworkConfig:
    """Network configuration for Move-based blockchains"""
    name: str
    rpc_url: str
    explorer_base: str
    chain_id: Optional[str] = None
    coin_type_prefix: str = "0x1"
    
# Network configurations
MOVE_NETWORKS = {
    "aptos-mainnet": NetworkConfig(
        name="Aptos Mainnet",
        rpc_url=config("APTOS_MAINNET_RPC_URL", default="https://fullnode.mainnet.aptoslabs.com/v1"),
        explorer_base="https://explorer.aptoslabs.com",
        chain_id="1",
        coin_type_prefix="0x1"
    ),
    "aptos-testnet": NetworkConfig(
        name="Aptos Testnet", 
        rpc_url=config("APTOS_TESTNET_RPC_URL", default="https://fullnode.testnet.aptoslabs.com/v1"),
        explorer_base="https://explorer.aptoslabs.com",
        chain_id="2", 
        coin_type_prefix="0x1"
    ),
    "sui-mainnet": NetworkConfig(
        name="Sui Mainnet",
        rpc_url=config("SUI_MAINNET_RPC_URL", default="https://fullnode.mainnet.sui.io:443"),
        explorer_base="https://suiexplorer.com",
        chain_id="sui:mainnet",
        coin_type_prefix="0x2"
    ),
    "sui-testnet": NetworkConfig(
        name="Sui Testnet",
        rpc_url=config("SUI_TESTNET_RPC_URL", default="https://fullnode.testnet.sui.io:443"),
        explorer_base="https://suiexplorer.com",
        chain_id="sui:testnet", 
        coin_type_prefix="0x2"
    ),
    "movement-mainnet": NetworkConfig(
        name="Movement Mainnet",
        rpc_url=config("MOVEMENT_MAINNET_RPC_URL", default="https://mevm.devnet.m1.movementlabs.xyz"),
        explorer_base="https://explorer.movementlabs.xyz",
        chain_id="movement:mainnet",
        coin_type_prefix="0x1"
    )
}

SUPPORTED_NETWORKS = list(MOVE_NETWORKS.keys())

def get_network_config(network: str) -> NetworkConfig:
    """Get network configuration by name"""
    if network not in MOVE_NETWORKS:
        raise ValueError(f"Unsupported network: {network}. Supported: {SUPPORTED_NETWORKS}")
    return MOVE_NETWORKS[network]

def validate_network_config(network: str) -> bool:
    """Validate that network configuration is complete"""
    try:
        config = get_network_config(network)
        return all([
            config.name,
            config.rpc_url,
            config.explorer_base
        ])
    except ValueError:
        return False

def get_all_networks() -> Dict[str, NetworkConfig]:
    """Get all available network configurations"""
    return MOVE_NETWORKS.copy()

# Utility functions for network detection
def detect_network_from_address(address: str) -> Optional[str]:
    """Detect network from address format"""
    if address.startswith("0x1::"):
        return "aptos-mainnet"  # Default to mainnet for Aptos
    elif address.startswith("0x2::"):
        return "sui-mainnet"    # Default to mainnet for Sui
    elif len(address) == 66 and address.startswith("0x"):
        return "sui-mainnet"    # Sui object addresses
    elif len(address) == 42 and address.startswith("0x"):
        return "aptos-mainnet"  # Aptos addresses
    return None

def get_explorer_url(network: str, coin_type: str) -> str:
    """Get explorer URL for a coin type"""
    config = get_network_config(network)
    
    if "aptos" in network:
        return f"{config.explorer_base}/account/{coin_type.split('::')[0]}"
    elif "sui" in network:
        return f"{config.explorer_base}/object/{coin_type}"
    else:
        return f"{config.explorer_base}/token/{coin_type}"
