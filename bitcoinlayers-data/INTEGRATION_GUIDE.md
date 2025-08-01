# Integration Guide: Using Bitcoin Layers as a Dependency

## Quick Start

### Installation

```bash
npm install @bitcoinlayers/data
```

### Basic Usage

```typescript
import { allLayers, allInfrastructures, LayerProject, InfrastructureProject } from '@bitcoinlayers/data';

console.log(`Found ${allLayers.length} layers and ${allInfrastructures.length} infrastructure projects`);
```

## Integration Patterns

### 1. Data Filtering and Analysis

```typescript
import { allLayers, RiskFactor, EntityType, LiveStatus } from '@bitcoinlayers/data';

// Filter by security level
const secureLayers = allLayers.filter(layer => 
  layer.riskFactors.every(risk => risk === RiskFactor.Low)
);

// Filter by layer type
const rollups = allLayers.filter(layer => 
  layer.entityType === EntityType.Rollup
);

// Filter by live status
const mainnetLayers = allLayers.filter(layer => 
  layer.live === LiveStatus.Mainnet
);

// Complex filtering
const productionReadyLayers = allLayers.filter(layer => 
  layer.live === LiveStatus.Mainnet &&
  !layer.underReview &&
  layer.btcLocked && layer.btcLocked > 100
);
```

### 2. Building Comparison Tools

```typescript
import { allInfrastructures, Purpose, EntityType } from '@bitcoinlayers/data';

function compareBTCWrappers() {
  const wrappers = allInfrastructures.filter(infra => 
    infra.entityType === EntityType.BTCWrapper ||
    infra.entityType === EntityType.ReserveAsset
  );

  return wrappers.map(wrapper => ({
    name: wrapper.title,
    slug: wrapper.slug,
    description: wrapper.description,
    trustModel: wrapper.riskSummary,
    assessment: wrapper.assessment,
    chains: wrapper.associatedLayers,
    links: wrapper.links,
  }));
}

function findLiquidStakingOptions() {
  return allInfrastructures
    .filter(infra => infra.purpose === Purpose.LiquidStaking)
    .map(solution => ({
      name: solution.title,
      description: solution.description,
      entityType: solution.entityType,
      live: solution.live,
      website: solution.links.find(link => link.text === 'Website')?.url,
    }));
}
```

### 3. Risk Analysis System

```typescript
import { LayerProject, RiskFactor, RiskCategory } from '@bitcoinlayers/data';

interface RiskAnalysis {
  projectName: string;
  overallRiskScore: number;
  riskBreakdown: Record<string, number>;
  recommendations: string[];
}

function analyzeProjectRisk(project: LayerProject): RiskAnalysis {
  const riskWeights = {
    [RiskFactor.Low]: 1,
    [RiskFactor.Medium]: 2,
    [RiskFactor.High]: 3,
    [RiskFactor.VeryHigh]: 4,
    [RiskFactor.Critical]: 5,
  };

  const overallScore = project.riskFactors.reduce((total, risk) => 
    total + (riskWeights[risk] || 0), 0
  );

  const riskBreakdown: Record<string, number> = {};
  project.riskAnalysis?.forEach(analysis => {
    riskBreakdown[analysis.category] = riskWeights[analysis.tier] || 0;
  });

  const recommendations = generateRecommendations(project);

  return {
    projectName: project.title,
    overallRiskScore: overallScore,
    riskBreakdown,
    recommendations,
  };
}

function generateRecommendations(project: LayerProject): string[] {
  const recommendations: string[] = [];
  
  if (project.underReview) {
    recommendations.push("This project is under review - exercise caution");
  }
  
  if (project.riskFactors.includes(RiskFactor.Critical)) {
    recommendations.push("Critical risks identified - suitable only for experienced users");
  }
  
  if (project.btcLocked && project.btcLocked > 10000) {
    recommendations.push("High TVL indicates strong adoption");
  }
  
  return recommendations;
}
```

### 4. Portfolio Tracking

```typescript
import { allLayers, allInfrastructures } from '@bitcoinlayers/data';

interface UserHolding {
  projectSlug: string;
  amount: number;
  valueUSD: number;
}

interface PortfolioAnalysis {
  totalValue: number;
  riskDistribution: Record<string, number>;
  layerDistribution: Record<string, number>;
  recommendations: string[];
}

function analyzePortfolio(holdings: UserHolding[]): PortfolioAnalysis {
  const allProjects = [...allLayers, ...allInfrastructures];
  
  let totalValue = 0;
  const riskDistribution: Record<string, number> = {};
  const layerDistribution: Record<string, number> = {};

  holdings.forEach(holding => {
    const project = allProjects.find(p => p.slug === holding.projectSlug);
    if (!project) return;

    totalValue += holding.valueUSD;
    
    // Track risk distribution
    if ('riskFactors' in project) {
      project.riskFactors.forEach(risk => {
        riskDistribution[risk] = (riskDistribution[risk] || 0) + holding.valueUSD;
      });
    }
    
    // Track layer type distribution
    layerDistribution[project.entityType] = 
      (layerDistribution[project.entityType] || 0) + holding.valueUSD;
  });

  return {
    totalValue,
    riskDistribution,
    layerDistribution,
    recommendations: generatePortfolioRecommendations(riskDistribution, totalValue),
  };
}

function generatePortfolioRecommendations(
  riskDist: Record<string, number>, 
  totalValue: number
): string[] {
  const recommendations: string[] = [];
  
  const highRiskRatio = (riskDist['High'] || 0) / totalValue;
  if (highRiskRatio > 0.3) {
    recommendations.push("Consider reducing high-risk exposure");
  }
  
  const lowRiskRatio = (riskDist['Low'] || 0) / totalValue;
  if (lowRiskRatio < 0.2) {
    recommendations.push("Consider adding some low-risk Bitcoin layers");
  }
  
  return recommendations;
}
```

### 5. React Components

```typescript
import React, { useMemo } from 'react';
import { allLayers, allInfrastructures, LayerProject, LiveStatus } from '@bitcoinlayers/data';

// Layer selector component
export function LayerSelector({ onSelect }: { onSelect: (layer: LayerProject) => void }) {
  const mainnetLayers = useMemo(() => 
    allLayers.filter(layer => layer.live === LiveStatus.Mainnet),
    []
  );

  return (
    <select onChange={(e) => {
      const layer = mainnetLayers.find(l => l.slug === e.target.value);
      if (layer) onSelect(layer);
    }}>
      <option value="">Select a Bitcoin Layer</option>
      {mainnetLayers.map(layer => (
        <option key={layer.slug} value={layer.slug}>
          {layer.title} - {layer.entityType}
        </option>
      ))}
    </select>
  );
}

// Statistics dashboard
export function BitcoinLayersStats() {
  const stats = useMemo(() => {
    const totalBTC = allLayers
      .filter(layer => layer.btcLocked)
      .reduce((sum, layer) => sum + (layer.btcLocked || 0), 0);

    const byStatus = allLayers.reduce((acc, layer) => {
      acc[layer.live] = (acc[layer.live] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { totalBTC, byStatus };
  }, []);

  return (
    <div className="bitcoin-layers-stats">
      <h2>Bitcoin Scaling Overview</h2>
      <div className="stat-grid">
        <div className="stat">
          <h3>{allLayers.length}</h3>
          <p>Total Layers</p>
        </div>
        <div className="stat">
          <h3>{allInfrastructures.length}</h3>
          <p>Infrastructure Projects</p>
        </div>
        <div className="stat">
          <h3>{stats.totalBTC.toLocaleString()}</h3>
          <p>BTC Locked</p>
        </div>
      </div>
      
      <div className="status-breakdown">
        <h3>By Status</h3>
        {Object.entries(stats.byStatus).map(([status, count]) => (
          <div key={status} className="status-item">
            <span>{status}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 6. API Integration

```typescript
import { allLayers, allInfrastructures } from '@bitcoinlayers/data';

// Express.js API endpoints
app.get('/api/layers', (req, res) => {
  const { type, status, minBTC } = req.query;
  
  let filteredLayers = allLayers;
  
  if (type) {
    filteredLayers = filteredLayers.filter(layer => layer.entityType === type);
  }
  
  if (status) {
    filteredLayers = filteredLayers.filter(layer => layer.live === status);
  }
  
  if (minBTC) {
    filteredLayers = filteredLayers.filter(layer => 
      layer.btcLocked && layer.btcLocked >= parseInt(minBTC as string)
    );
  }
  
  res.json(filteredLayers);
});

app.get('/api/layers/:slug', (req, res) => {
  const layer = allLayers.find(l => l.slug === req.params.slug);
  if (!layer) {
    return res.status(404).json({ error: 'Layer not found' });
  }
  res.json(layer);
});

app.get('/api/infrastructure', (req, res) => {
  const { purpose, entityType } = req.query;
  
  let filtered = allInfrastructures;
  
  if (purpose) {
    filtered = filtered.filter(infra => infra.purpose === purpose);
  }
  
  if (entityType) {
    filtered = filtered.filter(infra => infra.entityType === entityType);
  }
  
  res.json(filtered);
});
```

## Best Practices

### 1. Performance Optimization

```typescript
// Cache heavy computations
const layersByType = useMemo(() => {
  return allLayers.reduce((acc, layer) => {
    if (!acc[layer.entityType]) acc[layer.entityType] = [];
    acc[layer.entityType].push(layer);
    return acc;
  }, {} as Record<string, LayerProject[]>);
}, []);

// Use specific imports to reduce bundle size
import { lightning, liquid } from '@bitcoinlayers/data/layers';
import { Type, RiskFactor } from '@bitcoinlayers/data/types';
```

### 2. Error Handling

```typescript
function safeGetLayer(slug: string): LayerProject | null {
  try {
    return allLayers.find(layer => layer.slug === slug) || null;
  } catch (error) {
    console.error('Error finding layer:', error);
    return null;
  }
}

function safeCalculateRisk(layer: LayerProject): number {
  try {
    if (!layer.riskFactors || layer.riskFactors.length === 0) {
      return 0;
    }
    return calculateRiskScore(layer.riskFactors);
  } catch (error) {
    console.error('Error calculating risk for', layer.title, error);
    return 999; // High risk for errors
  }
}
```

### 3. TypeScript Integration

```typescript
// Create custom types for your use case
interface LayerWithMetrics extends LayerProject {
  riskScore: number;
  marketShare: number;
  growthRate: number;
}

// Type guards for safe access
function isMainnetLayer(layer: LayerProject): boolean {
  return layer.live === LiveStatus.Mainnet;
}

function hasSignificantTVL(layer: LayerProject): layer is LayerProject & { btcLocked: number } {
  return layer.btcLocked !== undefined && layer.btcLocked > 1000;
}
```

This comprehensive integration guide should help developers understand how to effectively use Bitcoin Layers data in their applications!