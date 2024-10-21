enum Type {
    Infrastructure = "Infrastructure",
    Layer = "Layer"
}

enum LiveStatus {
    Mainnet = "Mainnet",
    Testnet = "Testnet",
    Announced = "Announced",
    Proposed = "Proposed"
}

enum RiskFactor {
    Low = "Low",
    Medium = "Medium",
    High = "High",
    Critical = "Critical",
    Unverified = "Unverified",
    UnderReview = "Under Review",
    NotApplicable = "Not Applicable"
}

// enum Purpose {
//     General = "General",
//     Payments = "Payments"
// }

enum RiskCategory {
    BridgeSecurity = "Bridge Security",
    DataAvailability = "Data Availability",
    NetworkOperators = "Network Operators",
    SettlementAssurance = "Settlement Assurance"
}

enum SettlementType {
    Offchain = "Offchain",
    External = "External",
    None = "-",
    UnderReview = "Under review"
}

enum EntityType {
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
    RollupSDK = "Rollup SDK",
    Staking = "Staking"
}

enum Site {
    Website = "Website",
    Docs = "Docs",
    Explorer = "Explorer",
    Github = "GitHub",
    Twitter = "Twitter"
}

interface RiskSection {
    category: RiskCategory;
    score: number;
    tier: RiskFactor | "";
    title: string;
    content: string;
}

interface ContentSection {
    id: string;
    title: string;
    content: { title: string; content: string }[];
}

interface Project {
    type: Type;
    slug: string;
    title: string;
    entityType: EntityType;
    live: LiveStatus;
    staking: boolean;
    bridge: boolean;
    underReview: boolean; // Heads up, this is a boolean now
    riskFactors: (RiskFactor | '')[];
    nativeToken: string;
    bitcoinOnly: boolean;
    links: { text: Site | string; url: string | URL }[];
    description: string;
    sections: ContentSection[];
    // purpose?: Purpose | "-";
    // btcBridge?: string;
    // settlement?: SettlementType;
    btcLocked: number;
    // executionEnv?: string;
    // consensus?: string;
    feeToken: string;
    // enshrinedBtc?: string;
    riskAnalysis: RiskSection[];
    // Infrastructure-specific properties
    // bitcoinSecurity?: string;
    associatedLayers?: string;
}

const exampleProject: Project = {
    type: Type.Layer,
    slug: "example-rollup",
    title: "Example Rollup",
    entityType: EntityType.Rollup,
    live: LiveStatus.Testnet,
    staking: true,
    bridge: true,
    underReview: false,
    riskFactors: [RiskFactor.Medium, RiskFactor.Low, RiskFactor.Low, RiskFactor.High],
    nativeToken: "EXR",
    bitcoinOnly: false,
    links: [
        { text: Site.Website, url: "https://example-rollup.com" },
        { text: Site.Docs, url: "https://docs.example-rollup.com" },
        { text: Site.Explorer, url: "https://example-explorer.com"},
        { text: Site.Github, url: "https://github.com/example-rollup" },
        { text: Site.Twitter, url: "https://twitter.com/example_rollup" },
        { text: 'Nostr', url: 'https://example-nostr.com'}
    ],
    description: "Example Rollup is a Layer 2 scaling solution for Bitcoin, offering fast and low-cost transactions.",
    sections: [
        {
            id: "overview",
            title: "Overview",
            content: [
                {
                    title: "What is Example Rollup?",
                    content: "Example Rollup is a Layer 2 scaling solution that uses optimistic rollup technology to increase transaction throughput and reduce fees for Bitcoin users."
                },
                {
                    title: "How does it work?",
                    content: "Example Rollup batches multiple transactions off-chain and then submits them as a single transaction to the Bitcoin network, reducing congestion and fees."
                }
            ]
        }
    ],
    btcLocked: 1000,
    feeToken: "EXR",
    riskAnalysis: [
        {
            category: RiskCategory.BridgeSecurity,
            score: 7,
            tier: RiskFactor.Medium,
            title: "Bridge Security",
            content: "The bridge uses a multi-signature scheme with 7 validators, providing a good balance between security and decentralization."
        },
        {
            category: RiskCategory.DataAvailability,
            score: 8,
            tier: RiskFactor.Low,
            title: "Data Availability",
            content: "All transaction data is published on-chain, ensuring high availability and resistance to censorship."
        }
    ],
    associatedLayers: "Bitcoin"
};
