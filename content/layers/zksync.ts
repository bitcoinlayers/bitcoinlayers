import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    BitcoinSecuritySnippet,
    TechnologySnippet,
    KnowledgeBitSnippet,
    UseCaseSnippet,
} from "../props";

const zksync: LayerProject = {
    type: Type.Layer,
    slug: "zksync",
    title: "zkSync",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "ZK",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://zksync.io/",
        },
        {
            text: Site.Docs,
            url: "https://docs.zksync.io/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.zksync.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/matter-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/zksync",
        },
    ],
    description: "zkSync is a rollup that posts data to Ethereum.",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BitGowBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.ThresholdtBTC}\n\n${TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BinanceBTCB},\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Merlin M-BTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.MerlinMBTC},\n\n${TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "A distributed consensus network satisfies the data availability requirement",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "The network is operated by a centralized block producer",
            content: ReviewSnippet.SelfSequenceNone,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "State updates are finalized by rollup nodes. We are reviewing finality assurance scores for alternative rollups with no official BTC bridge",
            content: `${ReviewSnippet.FinalityAltRollupValidityProofs}\n\n\n\nWe are reviewing how to score finality guarantees for alternative rollups. Learn more on our thoughts [here](https://www.lxresearch.co/some-thoughts-on-proof-systems-for-bridges-on-other-chains/).`
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "zkSync does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "zkSync does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

export default zksync;
