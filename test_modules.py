#!/usr/bin/env python3

print("Testing EVM Analyzer Modules...")

# Test importing individual modules
try:
    from config import get_network_config, validate_network_config
    print("Config module imported successfully")
except ImportError as e:
    print("Config import failed:", e)

try:
    from contract_inspection import ContractInspector
    print("Contract inspection module imported successfully")
except ImportError as e:
    print("Contract inspection import failed:", e)

try:
    from proxy_detection import ProxyDetector
    print("Proxy detection module imported successfully")
except ImportError as e:
    print("Proxy detection import failed:", e)

# Test configuration
try:
    config = get_network_config("ethereum")
    print("Ethereum config loaded:", config['api_base'])
except Exception as e:
    print("Config test failed:", e)

print("Module testing complete!")