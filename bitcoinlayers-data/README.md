# @bitcoinlayers/data

Official research data and risk analysis for Bitcoin scaling protocols and infrastructure.

## Installation

```bash
npm install @bitcoinlayers/data
```

## Usage

### Import All Data

```typescript
import { allLayers, allInfrastructures, LayerProject, InfrastructureProject } from '@bitcoinlayers/data';

// Get all layer projects
console.log(allLayers.length); // 70+ projects

// Get all infrastructure projects  
console.log(allInfrastructures.length); // 90+ projects

// Access specific project
const lightning = allLayers.find(layer => layer.slug === 'lightning');
console.log(lightning?.title); // "Lightning Network"
```

### Import Specific Categories

```typescript
// Import only layers
import { allLayers, lightning, ethereum } from '@bitcoinlayers/data/layers';

// Import only infrastructure  
import { allInfrastructures, wbtc } from '@bitcoinlayers/data/infrastructure';

// Import only types
import { LayerProject, RiskFactor, EntityType } from '@bitcoinlayers/data/types';
```

### Browse Available Data

Each layer and infrastructure project includes:

- **Basic Info**: Title, description, entity type, live status
- **Risk Analysis**: Detailed risk assessment across multiple categories
- **Links**: Website, documentation, GitHub, social media
- **Technical Details**: BTC locked, native tokens, staking info
- **Research Sections**: In-depth analysis of technology and trade-offs

### Example: Filter by Risk Level

```typescript
import { allLayers, RiskFactor } from '@bitcoinlayers/data';

// Find low-risk layers
const lowRiskLayers = allLayers.filter(layer => 
  layer.riskFactors.every(risk => risk === RiskFactor.Low)
);

console.log(lowRiskLayers.map(layer => layer.title));
```

### Example: Group by Entity Type

```typescript
import { allLayers, EntityType } from '@bitcoinlayers/data';

// Group layers by type
const rollups = allLayers.filter(layer => layer.entityType === EntityType.Rollup);
const sidechains = allLayers.filter(layer => layer.entityType === EntityType.Sidechain);
const stateChannels = allLayers.filter(layer => layer.entityType === EntityType.StateChannel);
```

## Data Structure

### LayerProject

```typescript
interface LayerProject {
  type: Type.Layer;
  slug: string;
  title: string;
  entityType: EntityType;
  entityCategory: EntityCategory;
  live: LiveStatus;
  staking: boolean;
  liquidStaking: boolean;
  bridge: boolean;
  underReview: boolean;
  riskFactors: RiskFactor[];
  btcLocked?: number;
  nativeToken?: string;
  feeToken?: string;
  links: { text: string; url: string }[];
  description: string;
  riskSummary: { title: string; content: string }[];
  riskAnalysis: RiskSection[];
  sections: ContentSection[];
}
```

### InfrastructureProject

```typescript
interface InfrastructureProject {
  type: Type.Infrastructure;
  slug: string;
  title: string;
  entityType: EntityType;
  live: LiveStatus;
  staking: boolean;
  liquidStaking: boolean;
  bridge: boolean;
  underReview: boolean;
  riskFactors: string[];
  nativeToken: string;
  purpose: Purpose;
  associatedLayers: string;
  links: { text: string; url: string }[];
  description: string;
  riskSummary: { title: string; content: string }[];
  sections: ContentSection[];
  assessment: AssessmentSection[];
}
```

## Project Slugs

Access projects by their slug identifiers:

```typescript
import { allLayerSlugs, allInfrastructureSlugs } from '@bitcoinlayers/data';

console.log(allLayerSlugs); 
// ['lightning', 'liquid', 'ethereum', 'arbitrum', ...]

console.log(allInfrastructureSlugs);
// ['bitgo-wbtc', 'threshold-tbtc', 'coinbase-cbbtc', ...]
```

## Building Applications with Bitcoin Layers Data

### Creating a Layer Explorer App

```typescript
import { allLayers, allInfrastructures, RiskFactor, EntityType } from '@bitcoinlayers/data';

// Build a risk analyzer
function analyzeLayerRisks() {
  const riskAnalysis = allLayers.map(layer => ({
    name: layer.title,
    slug: layer.slug,
    riskScore: calculateRiskScore(layer.riskFactors),
    category: layer.entityCategory,
    btcLocked: layer.btcLocked || 0,
  }));

  return riskAnalysis.sort((a, b) => a.riskScore - b.riskScore);
}

function calculateRiskScore(factors: RiskFactor[]): number {
  const weights = {
    [RiskFactor.Low]: 1,
    [RiskFactor.Medium]: 2,
    [RiskFactor.High]: 3,
    [RiskFactor.VeryHigh]: 4,
    [RiskFactor.Critical]: 5,
  };
  
  return factors.reduce((score, factor) => 
    score + (weights[factor] || 0), 0
  );
}
```

### Infrastructure Comparison Tool

```typescript
import { allInfrastructures, Purpose, EntityType } from '@bitcoinlayers/data';

// Compare BTC wrapper solutions
function compareBTCWrappers() {
  return allInfrastructures
    .filter(infra => infra.entityType === EntityType.BTCWrapper)
    .map(wrapper => ({
      name: wrapper.title,
      purpose: wrapper.purpose,
      associatedChains: wrapper.associatedLayers,
      riskSummary: wrapper.riskSummary,
      assessment: wrapper.assessment,
    }));
}

// Find liquid staking solutions
function findLiquidStakingOptions() {
  return allInfrastructures
    .filter(infra => infra.purpose === Purpose.LiquidStaking)
    .map(solution => ({
      name: solution.title,
      description: solution.description,
      links: solution.links,
    }));
}
```

### Dashboard Component (React)

```typescript
import React from 'react';
import { allLayers, allInfrastructures, LayerProject } from '@bitcoinlayers/data';

export function BitcoinLayersDashboard() {
  const totalBTCLocked = allLayers
    .filter(layer => layer.btcLocked)
    .reduce((total, layer) => total + (layer.btcLocked || 0), 0);

  const layersByType = allLayers.reduce((acc, layer) => {
    acc[layer.entityType] = (acc[layer.entityType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="dashboard">
      <h1>Bitcoin Scaling Landscape</h1>
      
      <div className="stats">
        <div className="stat">
          <h3>{allLayers.length}</h3>
          <p>Total Layers</p>
        </div>
        <div className="stat">
          <h3>{allInfrastructures.length}</h3>
          <p>Infrastructure Projects</p>
        </div>
        <div className="stat">
          <h3>{totalBTCLocked.toLocaleString()}</h3>
          <p>BTC Locked</p>
        </div>
      </div>

      <div className="charts">
        <h3>Layers by Type</h3>
        {Object.entries(layersByType).map(([type, count]) => (
          <div key={type} className="chart-item">
            <span>{type}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Research Analysis Tool

```typescript
import { allLayers, allInfrastructures, RiskCategory } from '@bitcoinlayers/data';

// Generate research insights
function generateInsights() {
  const insights = {
    // Most secure layers (all low risk)
    mostSecureLayers: allLayers.filter(layer => 
      layer.riskFactors.every(risk => risk === 'Low')
    ),

    // Fastest growing TVL
    highTVLLayers: allLayers
      .filter(layer => layer.btcLocked && layer.btcLocked > 1000)
      .sort((a, b) => (b.btcLocked || 0) - (a.btcLocked || 0)),

    // Mainnet vs testnet distribution
    liveStatus: allLayers.reduce((acc, layer) => {
      acc[layer.live] = (acc[layer.live] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),

    // Infrastructure distribution
    infrastructureByPurpose: allInfrastructures.reduce((acc, infra) => {
      acc[infra.purpose] = (acc[infra.purpose] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
  };

  return insights;
}

// Export research data
function exportToCSV() {
  const headers = ['Name', 'Type', 'Category', 'Live Status', 'BTC Locked', 'Risk Score'];
  
  const rows = allLayers.map(layer => [
    layer.title,
    layer.entityType,
    layer.entityCategory,
    layer.live,
    layer.btcLocked || 0,
    calculateRiskScore(layer.riskFactors)
  ]);

  const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
  return csv;
}
```

## Development Workflow

### 1. Setup Your Project

```bash
# Create new project
npm init -y
npm install @bitcoinlayers/data

# For TypeScript projects
npm install -D typescript @types/node
```

### 2. Basic Usage

```javascript
// CommonJS
const { allLayers, allInfrastructures } = require('@bitcoinlayers/data');

// ES Modules
import { allLayers, allInfrastructures } from '@bitcoinlayers/data';

// Specific imports for tree-shaking
import { lightning, ethereum } from '@bitcoinlayers/data/layers';
import { wbtc, tbtc } from '@bitcoinlayers/data/infrastructure';
```

### 3. Data Updates

The package is updated regularly as Bitcoin Layers research evolves. To get the latest data:

```bash
npm update @bitcoinlayers/data
```

## Use Cases

- **Portfolio Trackers**: Show user holdings across different Bitcoin layers
- **Risk Analyzers**: Assess security trade-offs of different scaling solutions  
- **Research Dashboards**: Visualize the Bitcoin scaling landscape
- **Educational Tools**: Help users understand Bitcoin L2s and infrastructure
- **DeFi Aggregators**: Compare yield opportunities across layers
- **Wallet Integrations**: Suggest appropriate layers based on user needs

## License

MIT License - see [LICENSE](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/LICENSE)

## Contributing

This package is automatically generated from the [Bitcoin Layers](https://github.com/bitcoinlayers/bitcoinlayers) research repository. 

To contribute data or corrections, please see the [contribution guide](https://github.com/bitcoinlayers/bitcoinlayers#how-to-add-a-project).

## Links

- [Website](https://bitcoinlayers.org)
- [Source Repository](https://github.com/bitcoinlayers/bitcoinlayers)
- [Documentation](https://bitcoinlayers.org/docs)
- [API Documentation](https://github.com/bitcoinlayers/data-ingestion)