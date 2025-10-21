"""
EVM Analyzer Modules

This package contains modular components for EVM contract analysis:
- config: Network configurations and constants
- contract_inspection: ABI fetching and basic contract info
- proxy_detection: Proxy pattern detection
"""

from .config import get_network_config, validate_network_config
from .contract_inspection import ContractInspector
from .proxy_detection import ProxyDetector

__all__ = [
    'get_network_config',
    'validate_network_config', 
    'ContractInspector',
    'ProxyDetector'
]
