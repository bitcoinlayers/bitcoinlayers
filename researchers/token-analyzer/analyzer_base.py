#!/usr/bin/env python3
"""
Analyzer Base Classes and Shared Utilities

This module provides base classes and shared functionality that can be reused
across different types of blockchain analyzers (EVM, Bitcoin Script, etc.)
"""

import json
import os
import hashlib
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional, Union
from dataclasses import dataclass, asdict
from datetime import datetime
from enum import Enum

class AnalyzerType(Enum):
    """Types of analyzers supported"""
    EVM_TOKEN = "evm_token"
    EVM_GOVERNANCE = "evm_governance"
    BITCOIN_SCRIPT = "bitcoin_script"
    BITCOIN_TRANSACTION = "bitcoin_transaction"

class NetworkType(Enum):
    """Network types"""
    MAINNET = "mainnet"
    TESTNET = "testnet"
    REGTEST = "regtest"

@dataclass
class AnalysisMetadata:
    """Standard metadata for all analysis types"""
    analyzer_type: str
    network: str
    analysis_date: str
    analysis_version: str
    target_identifier: str  # Address, script hash, transaction ID, etc.
    
    @classmethod
    def create(cls, analyzer_type: AnalyzerType, network: str, target: str, version: str = "1.0"):
        return cls(
            analyzer_type=analyzer_type.value,
            network=network,
            analysis_date=datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC'),
            analysis_version=version,
            target_identifier=target
        )

@dataclass
class SecurityIssue:
    """Represents a security issue found during analysis"""
    severity: str  # "low", "medium", "high", "critical"
    category: str  # "validation", "logic", "crypto", etc.
    description: str
    recommendation: Optional[str] = None
    location: Optional[str] = None  # Where in the code/script this occurs

class BaseAnalyzer(ABC):
    """Base class for all analyzers providing common functionality"""
    
    def __init__(self, network: str, analyzer_type: AnalyzerType):
        self.network = network
        self.analyzer_type = analyzer_type
        self.analysis_cache = {}
        
    @abstractmethod
    def analyze(self, target: str) -> Dict[str, Any]:
        """Main analysis method - must be implemented by subclasses"""
        pass
    
    def generate_metadata(self, target: str, version: str = "1.0") -> AnalysisMetadata:
        """Generate standard metadata for analysis"""
        return AnalysisMetadata.create(self.analyzer_type, self.network, target, version)
    
    def save_analysis_report(self, analysis_data: Dict[str, Any], 
                           filename_prefix: str, 
                           layer_slug: str = None,
                           output_dir: str = "analysis-reports") -> Dict[str, str]:
        """Save analysis report in both JSON and Markdown formats"""
        # Create layer-specific directory if layer_slug is provided
        if layer_slug:
            layer_dir = os.path.join(output_dir, layer_slug)
            os.makedirs(layer_dir, exist_ok=True)
            final_output_dir = layer_dir
        else:
            os.makedirs(output_dir, exist_ok=True)
            final_output_dir = output_dir
        
        # Generate JSON report
        json_filename = f"{filename_prefix}.json"
        json_filepath = os.path.join(final_output_dir, json_filename)
        
        with open(json_filepath, 'w', encoding='utf-8') as f:
            json.dump(analysis_data, f, indent=2, default=self._json_serializer)
        
        # Generate Markdown report
        markdown_content = self.generate_markdown_report(analysis_data)
        md_filename = f"{filename_prefix}.md"
        md_filepath = os.path.join(final_output_dir, md_filename)
        
        with open(md_filepath, 'w', encoding='utf-8') as f:
            f.write(markdown_content)
        
        return {
            "json_path": json_filepath,
            "markdown_path": md_filepath
        }
    
    def _json_serializer(self, obj):
        """Custom JSON serializer for complex objects"""
        if isinstance(obj, bytes):
            return obj.hex()
        elif hasattr(obj, '__dict__'):
            return asdict(obj) if hasattr(obj, '__dataclass_fields__') else str(obj)
        elif isinstance(obj, Enum):
            return obj.value
        return str(obj)
    
    @abstractmethod
    def generate_markdown_report(self, analysis_data: Dict[str, Any]) -> str:
        """Generate markdown report - must be implemented by subclasses"""
        pass
    
    def calculate_hash(self, data: Union[str, bytes]) -> str:
        """Calculate SHA256 hash of data"""
        if isinstance(data, str):
            data = data.encode('utf-8')
        return hashlib.sha256(data).hexdigest()
    
    def validate_input(self, input_data: str, input_type: str) -> bool:
        """Validate input data based on type"""
        if input_type == "ethereum_address":
            return len(input_data) == 42 and input_data.startswith('0x')
        elif input_type == "hex_string":
            try:
                bytes.fromhex(input_data.replace('0x', ''))
                return True
            except ValueError:
                return False
        elif input_type == "bitcoin_address":
            # Basic validation - could be enhanced
            return len(input_data) >= 26 and len(input_data) <= 62
        
        return True  # Default to valid if unknown type

class OpcodeAnalyzer:
    """Shared functionality for analyzing opcodes across different systems"""
    
    def __init__(self):
        self.opcode_registry = {}
        self.execution_stack = []
    
    def register_opcode(self, opcode_value: int, name: str, description: str, 
                       handler: Optional[callable] = None):
        """Register an opcode with its metadata and optional handler"""
        self.opcode_registry[opcode_value] = {
            "name": name,
            "description": description,
            "handler": handler
        }
    
    def get_opcode_info(self, opcode_value: int) -> Dict[str, Any]:
        """Get information about an opcode"""
        return self.opcode_registry.get(opcode_value, {
            "name": f"UNKNOWN_{opcode_value:02x}",
            "description": f"Unknown opcode: 0x{opcode_value:02x}",
            "handler": None
        })
    
    def simulate_execution(self, opcodes: List[Dict[str, Any]]) -> Dict[str, Any]:
        """Basic opcode execution simulation"""
        self.execution_stack = []
        execution_log = []
        warnings = []
        
        for i, opcode_data in enumerate(opcodes):
            step_info = {
                "step": i + 1,
                "opcode": opcode_data.get("name", "UNKNOWN"),
                "stack_before": self.execution_stack.copy()
            }
            
            # Execute opcode if handler exists
            opcode_info = self.get_opcode_info(opcode_data.get("opcode", 0))
            if opcode_info.get("handler"):
                try:
                    result = opcode_info["handler"](opcode_data, self.execution_stack)
                    if result and "warning" in result:
                        warnings.append(f"Step {i+1}: {result['warning']}")
                except Exception as e:
                    warnings.append(f"Step {i+1}: Execution error - {str(e)}")
            
            step_info["stack_after"] = self.execution_stack.copy()
            execution_log.append(step_info)
        
        return {
            "final_stack": self.execution_stack,
            "execution_log": execution_log,
            "warnings": warnings
        }

class ControlFlowAnalyzer:
    """Shared functionality for control flow analysis"""
    
    @dataclass
    class FlowNode:
        node_id: str
        node_type: str  # "linear", "conditional", "loop", etc.
        opcodes: List[Dict[str, Any]]
        children: List['ControlFlowAnalyzer.FlowNode'] = None
        condition: Optional[str] = None
        metadata: Dict[str, Any] = None
        
        def __post_init__(self):
            if self.children is None:
                self.children = []
            if self.metadata is None:
                self.metadata = {}
    
    def __init__(self):
        self.node_counter = 0
    
    def create_node(self, node_type: str, opcodes: List[Dict[str, Any]], 
                   condition: Optional[str] = None) -> FlowNode:
        """Create a new flow node"""
        self.node_counter += 1
        return self.FlowNode(
            node_id=f"node_{self.node_counter}",
            node_type=node_type,
            opcodes=opcodes,
            condition=condition
        )
    
    def analyze_basic_blocks(self, opcodes: List[Dict[str, Any]]) -> List[FlowNode]:
        """Identify basic blocks in the opcode sequence"""
        blocks = []
        current_block = []
        
        for opcode in opcodes:
            current_block.append(opcode)
            
            # Check if this opcode ends a basic block
            if self._is_block_terminator(opcode):
                if current_block:
                    block = self.create_node("linear", current_block)
                    blocks.append(block)
                    current_block = []
        
        # Handle remaining opcodes
        if current_block:
            block = self.create_node("linear", current_block)
            blocks.append(block)
        
        return blocks
    
    def _is_block_terminator(self, opcode: Dict[str, Any]) -> bool:
        """Check if an opcode terminates a basic block"""
        # This would be customized for different opcode systems
        terminating_opcodes = ["JUMP", "JUMPI", "RETURN", "REVERT", "STOP"]
        return opcode.get("name", "").upper() in terminating_opcodes

class SecurityAnalyzer:
    """Shared security analysis functionality"""
    
    def __init__(self):
        self.security_rules = []
        self.risk_categories = {
            "validation": "Input validation issues",
            "logic": "Logic errors and edge cases", 
            "crypto": "Cryptographic vulnerabilities",
            "resource": "Resource exhaustion attacks",
            "access": "Access control issues"
        }
    
    def add_security_rule(self, rule_id: str, category: str, severity: str,
                         description: str, checker: callable):
        """Add a security rule"""
        self.security_rules.append({
            "id": rule_id,
            "category": category,
            "severity": severity,
            "description": description,
            "checker": checker
        })
    
    def analyze_security(self, analysis_data: Dict[str, Any]) -> List[SecurityIssue]:
        """Run all security checks"""
        issues = []
        
        for rule in self.security_rules:
            try:
                result = rule["checker"](analysis_data)
                if result:
                    if isinstance(result, list):
                        for issue_data in result:
                            issues.append(SecurityIssue(
                                severity=rule["severity"],
                                category=rule["category"],
                                description=issue_data.get("description", rule["description"]),
                                recommendation=issue_data.get("recommendation"),
                                location=issue_data.get("location")
                            ))
                    else:
                        issues.append(SecurityIssue(
                            severity=rule["severity"],
                            category=rule["category"],
                            description=result.get("description", rule["description"]),
                            recommendation=result.get("recommendation"),
                            location=result.get("location")
                        ))
            except Exception as e:
                # Log error but continue with other rules
                print(f"Security rule {rule['id']} failed: {e}")
        
        return issues
    
    def categorize_by_severity(self, issues: List[SecurityIssue]) -> Dict[str, List[SecurityIssue]]:
        """Group security issues by severity"""
        categorized = {"critical": [], "high": [], "medium": [], "low": []}
        
        for issue in issues:
            if issue.severity in categorized:
                categorized[issue.severity].append(issue)
        
        return categorized

class ReportGenerator:
    """Shared report generation functionality"""
    
    @staticmethod
    def generate_summary_table(data: Dict[str, Any], title: str = "Summary") -> str:
        """Generate a markdown summary table"""
        lines = [f"## {title}", "", "| Property | Value |", "|----------|-------|"]
        
        for key, value in data.items():
            # Format key for display
            display_key = key.replace('_', ' ').title()
            
            # Format value for display
            if isinstance(value, bool):
                display_value = "✅ Yes" if value else "❌ No"
            elif isinstance(value, list):
                display_value = f"{len(value)} items"
            elif isinstance(value, dict):
                display_value = f"{len(value)} entries"
            else:
                display_value = str(value)
            
            lines.append(f"| {display_key} | {display_value} |")
        
        lines.extend(["", ""])
        return "\n".join(lines)
    
    @staticmethod
    def generate_security_section(issues: List[SecurityIssue]) -> str:
        """Generate security analysis section"""
        if not issues:
            return "## 🔒 Security Analysis\n\n✅ No security issues detected\n\n"
        
        lines = ["## 🔒 Security Analysis", ""]
        
        # Group by severity
        by_severity = {}
        for issue in issues:
            if issue.severity not in by_severity:
                by_severity[issue.severity] = []
            by_severity[issue.severity].append(issue)
        
        severity_order = ["critical", "high", "medium", "low"]
        severity_icons = {
            "critical": "🚨",
            "high": "⚠️",
            "medium": "⚡",
            "low": "ℹ️"
        }
        
        for severity in severity_order:
            if severity in by_severity:
                lines.append(f"### {severity_icons.get(severity, '•')} {severity.title()} Severity")
                lines.append("")
                
                for issue in by_severity[severity]:
                    lines.append(f"**{issue.category.title()}:** {issue.description}")
                    if issue.recommendation:
                        lines.append(f"*Recommendation:* {issue.recommendation}")
                    if issue.location:
                        lines.append(f"*Location:* {issue.location}")
                    lines.append("")
        
        return "\n".join(lines)
    
    @staticmethod
    def generate_opcode_table(opcodes: List[Dict[str, Any]]) -> str:
        """Generate opcode breakdown table"""
        if not opcodes:
            return ""
        
        lines = [
            "## 🔧 Opcode Breakdown",
            "",
            "| Step | Opcode | Data | Description |",
            "|------|--------|------|-------------|"
        ]
        
        for i, opcode in enumerate(opcodes, 1):
            name = opcode.get("name", "UNKNOWN")
            data = opcode.get("data", "")
            if isinstance(data, bytes):
                data = data.hex()
            if len(str(data)) > 20:
                data = str(data)[:20] + "..."
            
            description = opcode.get("description", "")
            lines.append(f"| {i} | `{name}` | `{data}` | {description} |")
        
        lines.extend(["", ""])
        return "\n".join(lines)

# Example security rules for different analyzer types
def create_common_security_rules() -> List[Dict[str, Any]]:
    """Create common security rules that can be used across analyzers"""
    
    def check_large_data_push(analysis_data):
        """Check for suspiciously large data pushes"""
        issues = []
        opcodes = analysis_data.get("opcodes", [])
        
        for i, opcode in enumerate(opcodes):
            data_length = opcode.get("data_length")
            if data_length is not None and data_length > 520:  # Bitcoin's MAX_SCRIPT_ELEMENT_SIZE
                issues.append({
                    "description": f"Large data push detected: {data_length} bytes",
                    "location": f"Opcode {i+1}",
                    "recommendation": "Verify this large data push is intentional"
                })
        
        return issues if issues else None
    
    def check_unbalanced_conditionals(analysis_data):
        """Check for unbalanced conditional statements"""
        opcodes = analysis_data.get("opcodes", [])
        if_count = sum(1 for op in opcodes if "IF" in op.get("name", ""))
        endif_count = sum(1 for op in opcodes if "ENDIF" in op.get("name", ""))
        
        if if_count != endif_count:
            return {
                "description": f"Unbalanced conditionals: {if_count} IF, {endif_count} ENDIF",
                "recommendation": "Ensure all conditional blocks are properly closed"
            }
        return None
    
    return [
        {
            "id": "large_data_push",
            "category": "validation",
            "severity": "medium",
            "description": "Check for large data pushes",
            "checker": check_large_data_push
        },
        {
            "id": "unbalanced_conditionals",
            "category": "logic", 
            "severity": "high",
            "description": "Check for unbalanced conditional statements",
            "checker": check_unbalanced_conditionals
        }
    ]