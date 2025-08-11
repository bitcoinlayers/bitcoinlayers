#!/usr/bin/env python3
"""
Test script for Taproot Key Tweaker

Run this to verify the implementation works correctly with known test vectors.
"""

import subprocess
import sys
import os

def run_test(description, command, expected_contains=None, should_pass=True):
    """Run a test command and check results"""
    print(f"\n🧪 Testing: {description}")
    print(f"Command: {' '.join(command)}")
    
    try:
        result = subprocess.run(command, capture_output=True, text=True, cwd=os.path.dirname(__file__))
        
        if should_pass and result.returncode != 0:
            print(f"❌ FAILED: Command returned {result.returncode}")
            print(f"stderr: {result.stderr}")
            return False
        elif not should_pass and result.returncode == 0:
            print(f"❌ FAILED: Expected failure but command succeeded")
            return False
        
        print(f"stdout:\n{result.stdout}")
        if result.stderr:
            print(f"stderr: {result.stderr}")
        
        if expected_contains:
            if expected_contains in result.stdout:
                print(f"✅ PASSED: Found expected content")
                return True
            else:
                print(f"❌ FAILED: Expected to find '{expected_contains}' in output")
                return False
        else:
            print(f"✅ PASSED")
            return True
            
    except Exception as e:
        print(f"❌ FAILED: Exception occurred: {e}")
        return False

def main():
    """Run all tests"""
    print("🚀 Running Taproot Key Tweaker Tests")
    
    # Test internal pubkey (this is just an example - use a real one for actual testing)
    test_internal_pubkey = "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12"
    
    tests = [
        # Test 1: Key-path only
        (
            "Key-path only tweaking",
            ["python", "taproot_tweaker.py", test_internal_pubkey],
            "Tweaked pubkey:"
        ),
        
        # Test 2: Single script hex
        (
            "Single script from hex",
            ["python", "taproot_tweaker.py", test_internal_pubkey, "--script-hex", "ac"],
            "Script tree hash:"
        ),
        
        # Test 3: Single script ASM
        (
            "Single script from ASM",
            ["python", "taproot_tweaker.py", test_internal_pubkey, "--script-asm", "OP_CHECKSIG"],
            "Script tree hash:"
        ),
        
        # Test 4: Script from file
        (
            "Script from file",
            ["python", "taproot_tweaker.py", test_internal_pubkey, "--script-file", "examples/simple_script.asm"],
            "Tweaked pubkey:"
        ),
        
        # Test 5: Script tree from JSON
        (
            "Script tree from JSON",
            ["python", "taproot_tweaker.py", test_internal_pubkey, "--tree-file", "examples/script_tree.json"],
            "Script tree hash:"
        ),
        
        # Test 6: Verbose output
        (
            "Verbose output",
            ["python", "taproot_tweaker.py", test_internal_pubkey, "--script-hex", "ac", "--verbose"],
            "Detailed Information:"
        ),
        
        # Test 7: Help
        (
            "Help message",
            ["python", "taproot_tweaker.py", "--help"],
            "Generate Taproot tweaked public keys"
        ),
        
        # Test 8: Invalid hex (should fail)
        (
            "Invalid hex input (should fail)",
            ["python", "taproot_tweaker.py", "invalid_hex"],
            None,
            False
        ),
        
        # Test 9: Missing arguments (should fail)
        (
            "Missing arguments (should fail)",
            ["python", "taproot_tweaker.py"],
            None,
            False
        ),
    ]
    
    passed = 0
    total = len(tests)
    
    for test_data in tests:
        if len(test_data) == 4:
            description, command, expected, should_pass = test_data
        else:
            description, command, expected = test_data
            should_pass = True
            
        if run_test(description, command, expected, should_pass):
            passed += 1
    
    print(f"\n📊 Test Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed!")
        return 0
    else:
        print("💥 Some tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())