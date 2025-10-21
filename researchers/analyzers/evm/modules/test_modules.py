#!/usr/bin/env python3

print("Testing EVM Analyzer Modules...")

# Test importing individual modules
try:
    from config import get_network_config, validate_network_config
    print("Config module imported successfully")
except ImportError as e:
    print(f"Config import failed: {e}")

try:
    from contract_inspection import ContractInspector
    print("Contract inspection module imported successfully")
except ImportError as e:
    print(f"Contract inspection import failed: {e}")

try:
    from proxy_detection import ProxyDetector
    print("Proxy detection module imported successfully")
except ImportError as e:
    print(f"Proxy detection import failed: {e}")

print("Module testing complete!")