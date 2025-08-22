#!/usr/bin/env python3
"""
Configuration module for SVM analyzers
Contains network configurations, constants, and shared settings for Solana
"""

import os
from dotenv import load_dotenv
from dataclasses import dataclass
from typing import Dict, Optional

# Load environment variables from .env.local file (four directories up from this script)
load_dotenv(os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", ".env.local"))

@dataclass
class NetworkConfig:
    """Network configuration for Solana clusters"""
    rpc_url: str
    cluster_name: str
    explorer_base: str
    api_key: Optional[str] = None

# Solana network configurations
NETWORK_CONFIGS = {
    "mainnet": NetworkConfig(
        rpc_url=os.getenv("SOLANA_MAINNET_RPC_URL", "https://api.mainnet-beta.solana.com"),
        cluster_name="mainnet-beta",
        explorer_base="https://explorer.solana.com",
        api_key=os.getenv("SOLANA_API_KEY")
    ),
    "devnet": NetworkConfig(
        rpc_url=os.getenv("SOLANA_DEVNET_RPC_URL", "https://api.devnet.solana.com"),
        cluster_name="devnet", 
        explorer_base="https://explorer.solana.com",
        api_key=os.getenv("SOLANA_API_KEY")
    ),
    "testnet": NetworkConfig(
        rpc_url=os.getenv("SOLANA_TESTNET_RPC_URL", "https://api.testnet.solana.com"),
        cluster_name="testnet",
        explorer_base="https://explorer.solana.com",
        api_key=os.getenv("SOLANA_API_KEY")
    )
}

# Supported networks list
SUPPORTED_NETWORKS = list(NETWORK_CONFIGS.keys())

def get_network_config(network: str) -> NetworkConfig:
    """Get configuration for a specific Solana network"""
    config = NETWORK_CONFIGS.get(network)
    if not config:
        available_networks = list(NETWORK_CONFIGS.keys())
        raise ValueError(f"Network '{network}' not supported. Available networks: {available_networks}")
    return config

def validate_network_config(network: str) -> None:
    """Validate that required configuration is available for a network"""
    config = get_network_config(network)
    
    if not config.rpc_url:
        raise ValueError(f"RPC URL for {network} is required")

def get_explorer_url(network: str, address: str, address_type: str = "address") -> str:
    """Get the explorer URL for an address on a specific network"""
    config = get_network_config(network)
    cluster_param = f"?cluster={config.cluster_name}" if network != "mainnet" else ""
    
    if address_type == "tx":
        return f"{config.explorer_base}/tx/{address}{cluster_param}"
    elif address_type == "block":
        return f"{config.explorer_base}/block/{address}{cluster_param}"
    else:  # address, account, program
        return f"{config.explorer_base}/address/{address}{cluster_param}"

# Common Solana program addresses
SOLANA_PROGRAMS = {
    "SYSTEM_PROGRAM": "11111111111111111111111111111112",
    "SPL_TOKEN_PROGRAM": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
    "SPL_TOKEN_2022_PROGRAM": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
    "SPL_ASSOCIATED_TOKEN_PROGRAM": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
    "METAPLEX_TOKEN_METADATA": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
    "SERUM_DEX_V3": "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
    "RAYDIUM_AMM_V4": "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",
    "SPL_GOVERNANCE": "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw"
}

# Common SPL Token extensions and features
SPL_TOKEN_EXTENSIONS = {
    "TRANSFER_FEE": "transfer_fee",
    "CONFIDENTIAL_TRANSFER": "confidential_transfer", 
    "DEFAULT_ACCOUNT_STATE": "default_account_state",
    "IMMUTABLE_OWNER": "immutable_owner",
    "MEMO_TRANSFER": "memo_transfer",
    "NON_TRANSFERABLE": "non_transferable",
    "INTEREST_BEARING": "interest_bearing",
    "CPIGU": "cpi_guard",
    "PERMANENT_DELEGATE": "permanent_delegate",
    "CONFIDENTIAL_MINT_BURN": "confidential_mint_burn",
    "TRANSFER_HOOK": "transfer_hook",
    "METADATA_POINTER": "metadata_pointer",
    "GROUP_POINTER": "group_pointer",
    "GROUP_MEMBER_POINTER": "group_member_pointer"
}

# Common governance patterns
GOVERNANCE_PATTERNS = {
    "REALMS": "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw",
    "SQUADS": "SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf",
    "SOLANA_MULTISIG": "SMPLVC8MxZ5Bf5EfF7PaMiTCxoBAcmkbM2vkrvMK8ho"
}

# Common account discriminators for program identification
ACCOUNT_DISCRIMINATORS = {
    "SPL_TOKEN_MINT": b'\x00' * 8,  # Mint account
    "SPL_TOKEN_ACCOUNT": b'\x01' * 8,  # Token account  
    "SPL_TOKEN_MULTISIG": b'\x02' * 8,  # Multisig account
}

# Data layout sizes (in bytes)
ACCOUNT_LAYOUTS = {
    "SPL_TOKEN_MINT": 82,
    "SPL_TOKEN_ACCOUNT": 165,
    "SPL_TOKEN_MULTISIG": 355,
    "SPL_TOKEN_2022_MINT": 82,  # Base size, extensions add more
    "SPL_TOKEN_2022_ACCOUNT": 165  # Base size, extensions add more
}


