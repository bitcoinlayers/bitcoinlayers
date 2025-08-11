# Bitcoin Script Analysis Integration

This document explains how to use the Bitcoin Script Analysis feature that integrates with Bitcoin Layers layer reviews.

## Overview

The Bitcoin Script Analysis system analyzes Bitcoin transactions to understand custody patterns, multisig configurations, and signing requirements for Bitcoin layers. This analysis is displayed in the "Trust Assumption Review" section of layer reviews.

## Components

### 1. Bitcoin Transaction Analyzer (`bitcoin_transaction_analyzer.py`)

- **Purpose**: Analyzes complete Bitcoin transactions with signature requirements
- **Input**: Bitcoin transaction ID + layer association
- **Output**: JSON and Markdown reports with detailed multisig analysis

**Key Features**:
- ✅ Enhanced multisig detection for complex SegWit transactions
- ✅ Witness data analysis for modern Bitcoin scripts
- ✅ Signature threshold analysis (e.g., "18-of-20 multisig")
- ✅ Layer association for custody section integration
- ✅ Real-time API integration with Blockstream

### 2. Bitcoin Script Analysis UI Component (`bitcoin-script-analysis-dropdown.tsx`)

- **Purpose**: Displays Bitcoin transaction analysis in layer reviews
- **Location**: Added to BTC Custody sections automatically
- **Design**: Collapsible dropdown similar to governance analysis

**Displays**:
- Transaction overview (ID, block, fee, size)
- Custody patterns (signatures present, multisig detection)
- Script types used (P2WSH, P2WPKH, etc.)
- Input/output signature breakdown
- Multisig threshold configurations

### 3. API Integration (`/api/bitcoin-analysis/[layer]/route.ts`)

- **Purpose**: Serves Bitcoin transaction analysis data to the frontend
- **Endpoint**: `/api/bitcoin-analysis/nomic` (example for Nomic)
- **Response**: Structured JSON with signature analysis data

## Usage

### Analyzing a Transaction

1. **Configure the analyzer**:
   ```python
   # In bitcoin_transaction_analyzer.py
   TRANSACTION_ID = "cc51e201dd336b4b026864e1686c890aa686d7c64c1c31e3e3d70fdb56bdd719"
   LAYER_NAME = "Nomic"
   ANALYSIS_TYPE = "custody"
   ```

2. **Run the analysis**:
   ```bash
   cd tools/token-analyzer
   source venv/bin/activate
   python bitcoin_transaction_analyzer.py
   ```

3. **Generated files**:
   - `analysis-reports/bitcoin_transaction_nomic_9d67826eb17200f9.json`
   - `analysis-reports/bitcoin_transaction_nomic_9d67826eb17200f9.md`

### Integration in Layer Reviews

The Bitcoin Script Analysis automatically appears in layer reviews when:

1. **Layer has a BTC Custody section** (most Bitcoin layers)
2. **Analysis file exists** for that layer in `tools/token-analyzer/analysis-reports/`
3. **Layer name matches** the analysis file naming convention

**File naming**: `bitcoin_transaction_{layer_slug}_{tx_hash}.json`

### Example: Nomic Integration

The Nomic layer review now shows:

```
Trust Assumption Review
├── BTC Custody (existing)
│   ├── Peg selection dropdown
│   ├── Risk assessment
│   └── 🆕 Bitcoin Script Analysis
│       ├── Transaction Overview
│       ├── Custody Pattern (18-of-20 multisig)
│       ├── Script Types (P2WSH, SegWit)
│       └── Signature Breakdown
```

## Real-World Results

### Nomic Transaction Analysis

- **Transaction**: `cc51e201dd336b4b026864e1686c890aa686d7c64c1c31e3e3d70fdb56bdd719`
- **Discovered**: 18-of-20 multisig configuration
- **Insights**: High security threshold with distributed custody
- **Technical**: Modern SegWit P2WSH with complex witness data

**Before**: "No detailed custody analysis available"
**After**: "18 signatures present, 18-of-20 multisig threshold"

## Adding Analysis for Other Layers

1. **Find a representative transaction** for the layer
2. **Configure the analyzer** with layer name and transaction ID
3. **Run the analysis** to generate reports
4. **The UI automatically detects** and displays the analysis

## File Structure

```
tools/token-analyzer/
├── bitcoin_transaction_analyzer.py     # Main analyzer
├── bitcoin_script_analyzer.py          # Script parsing
├── analyzer_base.py                    # Shared utilities
└── analysis-reports/
    └── bitcoin_transaction_nomic_*.json # Generated reports

components/
├── bitcoin-script-analysis-dropdown.tsx # UI component
└── layer/risk-analysis/
    └── layer-btc-custody.tsx           # Integration point

app/api/bitcoin-analysis/[layer]/
└── route.ts                            # API endpoint

util/
└── load-analysis-report.ts             # Type definitions
```

## Next Steps

- **Test with more layers**: Analyze transactions from other Bitcoin layers
- **Batch analysis**: Support for analyzing multiple transactions per layer
- **Enhanced detection**: Improve multisig detection for edge cases
- **Real-time analysis**: Direct transaction ID input in the UI

This integration provides Bitcoin Layers users with unprecedented visibility into the actual custody patterns and signing requirements of different Bitcoin layers.