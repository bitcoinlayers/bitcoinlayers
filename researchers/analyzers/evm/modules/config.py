#!/usr/bin/env python3
"""
Configuration module for EVM analyzers
Contains network configurations, constants, and shared settings
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env.local file (four directories up from this script)
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", ".env.local"))

# EIP-1967 storage slots for proxy detection
EIP1967_IMPLEMENTATION_SLOT = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
EIP1967_ADMIN_SLOT = "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103"

# Network configurations
NETWORK_CONFIGS = {
    "ethereum": {
        "rpc_url": os.getenv("ETHEREUM_RPC_URL"),
        "api_key": os.getenv("ETHEREUM_API_KEY"),
        "api_base": "https://api.etherscan.io/api"
    },
    "polygon": {
        "rpc_url": os.getenv("POLYGON_RPC_URL"),
        "api_key": os.getenv("POLYGON_API_KEY"),
        "api_base": "https://api.polygonscan.com/api"
    },
    "arbitrum": {
        "rpc_url": os.getenv("ARBITRUM_RPC_URL"),
        "api_key": os.getenv("ARBITRUM_API_KEY"),
        "api_base": "https://api.arbiscan.io/api"
    },
    "bsc": {
        "rpc_url": os.getenv("BSC_RPC_URL"),
        "api_key": os.getenv("BSC_API_KEY"),
        "api_base": "https://api.bscscan.com/api"
    },
    "bob": {
        "rpc_url": os.getenv("BOB_RPC_URL"),
        "api_key": os.getenv("BOB_API_KEY"),
        "api_base": "https://explorer.gobob.xyz/api"
    },
}

def get_network_config(network: str) -> dict:
    """Get configuration for a specific network"""
    config = NETWORK_CONFIGS.get(network)
    if not config:
        available_networks = list(NETWORK_CONFIGS.keys())
        raise ValueError(f"Network '{network}' not supported. Available networks: {available_networks}")
    return config

def validate_network_config(network: str) -> None:
    """Validate that required environment variables are set for a network"""
    config = get_network_config(network)
    
    if not config["rpc_url"]:
        raise ValueError(f"{network.upper()}_RPC_URL environment variable is required")
    if not config["api_key"]:
        raise ValueError(f"{network.upper()}_API_KEY environment variable is required")

def get_explorer_base_url(network: str) -> str:
    """Get the explorer base URL for a network"""
    if network == "bob":
        return "https://explorer.bob.xyz/address/"
    elif network == "ethereum":
        return "https://etherscan.io/address/"
    else:
        return f"https://{network}scan.io/address/"

# Common proxy patterns for detection
GNOSIS_SAFE_SIGNATURES = [
    "getOwners()",
    "getThreshold()",
    "nonce()",
    "isOwner(address)"
]

# Common AddressManager addresses for ResolvedDelegateProxy detection
COMMON_ADDRESS_MANAGERS = [
    "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F",  # Optimism AddressManager
    "0x95fC37A27a2f68e3A647CDc081F0A89bb47c3012",  # Another common one
    "0x8376ac6C3f73a25Dd994E0b0669ca7ee0C02F089",  # Alternative
    "0x6968f3F16C3e64003F02E121cf0D5CCBf5625a42",  # BOB specific
]

# Common implementation names for ResolvedDelegateProxy
COMMON_IMPLEMENTATION_NAMES = [
    "OVM_L1CrossDomainMessenger",
    "Proxy__OVM_L1CrossDomainMessenger", 
    "L1CrossDomainMessenger",
    "CrossDomainMessenger",
    "Lib_ResolvedDelegateProxy"
]
