import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Site,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    BitcoinSecuritySnippet,
    TechnologySnippet,
    UseCaseSnippet,
    RiskSummarySnippet,
} from "../props";

const etherlink: LayerProject = {
    type: Type.Layer,
    slug: "etherlink",
    title: "Etherlink",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "XTZ",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        { text: Site.Website, url: "https://www.etherlink.com/" },
        { text: Site.Docs, url: "https://docs.etherlink.com/" },
        { text: Site.Explorer, url: "https://explorer.etherlink.com/" },
        { text: Site.Twitter, url: "https://x.com/etherlink" },
    ],
    description:
        "Etherlink is an EVM-compatible, non-custodial Layer 2 powered by Tezos Smart Rollups. It delivers sub-second confirmations, low fees, and integrates with Ethereum tooling. This network supports BTC-backed assets such as Lombard LBTC and wBTC.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
    ],
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.FederationPeg,
                    content: TokenSnippet.LombardLBTC,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BitGowBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Tezos full nodes",
            content: ReviewSnippet.DAConsensusNetwork,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title:
                "Blocks are produced and proposed by a centralized sequencer; users may rely on fallback mechanisms for censorship/liveness failures",
            content: ReviewSnippet.SelfProposeMainAlt,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title:
                "Fraud proofs provide a mechanism to challenge malicious state updates",
            content: ReviewSnippet.FinalityAltRollupPermissionlessFraudProofs,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Etherlink does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "XTZ token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Etherlink does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                { title: "EVM-Compatible", content: TechnologySnippet.EVM },
                { title: "Fault Proofs", content: TechnologySnippet.FaultProofs },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                { title: "Onchain applications", content: UseCaseSnippet.OnchainApps },
            ],
        },
    ],
};

export default etherlink;


