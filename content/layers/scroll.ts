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

const scroll: LayerProject = {
    type: Type.Layer,
    slug: "scroll",
    title: "Scroll",
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
        RiskFactor.VeryHigh,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "SCR",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://scroll.io/",
        },
        {
            text: Site.Docs,
            url: "https://docs.scroll.io/en/home/",
        },
        {
            text: Site.Explorer,
            url: "https://scrollscan.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/scroll-tech",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Scroll_ZKP",
        },
    ],
    description: "Scroll is a rollup that posts data to Ethereum.",
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
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.SolvBTC}\n\n${TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.LorenzostBTC}\n\n${TokenSnippet.smartcontractreview}.`,
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
            title: "",
            content: `${ReviewSnippet.FinalityAltRollupValidityProofs}\n\n\n\nWe are reviewing how to score finality guarantees for alternative rollups. Learn more on our thoughts [here](https://www.lxresearch.co/some-thoughts-on-proof-systems-for-bridges-on-other-chains/).`
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Scroll does not inherit any security from Bitcoin",
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
                    title: "Scroll does not contribute to the security budget",
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

export default scroll;
