export enum Type {
    Infrastructure = "Infrastructure",
    Layer = "Layer",
}

export enum LiveStatus {
    Mainnet = "Mainnet",
    Testnet = "Testnet",
    Announced = "Announced",
    Proposed = "Proposed",
    Beta = "Beta",
    Deposits = "Deposits Live",
}

export enum Purpose {
    General = "General",
    Payments = "Payments",
    LiquidStaking = "Liquid Staking",
    EcashMint = "Ecash Mint",
    FederatedEcashMint = "Federated Ecash Mint",
    Staking = "Staking",
}

export enum RiskFactor {
    Low = "Low",
    Medium = "Medium",
    High = "High",
    VeryHigh = "Very High",
    Critical = "Critical",
    Unverified = "Unverified",
    UnderReview = "Under Review",
    NotApplicable = "Not Applicable",
}

export enum RiskCategory {
    BtcCustody = "BTC Custody",
    DataAvailability = "Data Availability",
    NetworkOperators = "Network Operators",
    SettlementAssurance = "Settlement Assurance",
    UnilateralExits = "Unilateral Exits",
    BlockProduction = "Block Production",
    StateValidation = "State Validation",
    FinalityGuarantees = "Finality Guarantees",
    LivenessReorgResistance = "Liveness & Reorg Resistance",
}

export enum EntityType {
    CSV = "CSV",
    EthereumRollup = "Ethereum Rollup",
    Rollup = "Rollup",
    Sidechain = "Sidechain",
    SidechainRollup = "Sidechain Rollup",
    SovereignRollup = "Sovereign Rollup",
    StateChannel = "State Channel",
    Statechain = "Statechain",
    VirtualUTXOs = "Virtual UTXOs",
    zkCSV = "zkCSV",
    ChaumianEcashProtocol = "Chaumian Ecash Protocol",
    FederationSDK = "Federation SDK",
    LiquidStaking = "Liquid Staking",
    Restaking = "Restaking",
    RollupSDK = "Rollup SDK",
    Staking = "Staking",
    PermissionedChain = "Permissioned Chain",
    ArkSidechain = "Ark on Sidechain",
    Sequencing = "Sequencing",
    DataAvailability = "Data Availability",
    Bridge = "Bridge",
    RaaS = "RaaS",
    BTCWrapper = "BTC Wrapper",
    SequencingDA = "Sequencing & DA",
    BitcoinBridge = "Bitcoin Bridge",
    MPCProtocol = "MPC Protocol",
    TBD = "To Be Determined",
    Ark = "Ark",
    "-" = "-",
}

export enum Site {
    Website = "Website",
    Docs = "Docs",
    Explorer = "Explorer",
    GitHub = "GitHub",
    Twitter = "Twitter",
}

export interface RiskSection {
    category: RiskCategory;
    score: number;
    tier: RiskFactor | "";
    title: string;
    content: string;
}

export interface ContentSection {
    id: string;
    title: string;
    content: { title?: string; content: string }[];
}

export enum AssessmentCategory {
    AssetCustody = "Asset Custody",
    StakingType = "Staking Type",
    SlashingRisk = "Slashing Risk",
    IncentiveModel = "Incentive Model",
    Reputation = "Reputation & Participation",
    Signing = "Signing Mechanism",
    KeyStorage = "Key Storage",
    CensorshipResistance = "Censorship Resistance",
    UserRisk = "User Risk",
    ThirdPartyStaking = "Third Party Staking",
    SelfCustodialStaking = "Self-custodial Staking",
}

export interface AssessmentSection {
    category: AssessmentCategory;
    score: number;
    tier: RiskFactor | "";
    title: string;
    content: string;
}

export interface BaseProject {
    type: Type;
    slug: string;
    title: string;
    entityType: EntityType;
    live: LiveStatus;
    staking: boolean;
    liquidStaking: boolean;
    bridge: boolean;
    underReview: boolean;
    riskFactors: (RiskFactor | "")[];
    nativeToken: string;
    bitcoinOnly: boolean;
    links: { text: Site | string; url: string | URL }[];
    description: string;
    sections: ContentSection[];
    associatedLayers?: string;
}

export interface InfrastructureProject extends BaseProject {
    type: Type.Infrastructure;
    purpose: Purpose;
    assessment?: AssessmentSection[];
}

export interface LayerProject extends BaseProject {
    type: Type.Layer;
    btcLocked: number;
    feeToken: string;
    riskAnalysis: RiskSection[];
}

export type Project = InfrastructureProject | LayerProject;
