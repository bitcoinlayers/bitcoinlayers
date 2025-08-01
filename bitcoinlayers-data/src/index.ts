// Main entry point for Bitcoin Layers Data package

// Re-export all types
export * from './types';

// Re-export all layers data and utilities
export * from './layers';

// Re-export all infrastructure data and utilities
export * from './infrastructure';

// Re-export all props and content
export * from './props';

// Convenience exports for common use cases
export { allLayers, allLayerSlugs } from './layers';
export { allInfrastructures, allInfrastructureSlugs } from './infrastructure';

// Type-only exports for better tree-shaking
export type { 
  LayerProject, 
  InfrastructureProject,
  Type,
  LiveStatus,
  RiskFactor,
  EntityType,
  EntityCategory,
  Notice,
  BitcoinLayer,
  UnilateralExit,
  Site,
  RiskSection,
  ContentSection,
  RiskCategory,
  TokenSnippet,
  RiskSummarySnippet,
  CustodyTitle,
  Purpose,
  AssessmentCategory,
  PegRiskSummarySnippet,
} from './types';