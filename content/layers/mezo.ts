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
    UseCaseSnippet,
} from "../props";

const mezo: LayerProject = {
    type: Type.Layer,
    slug: "mezo",
    title: "Mezo",
    entityType: EntityType.Sidechain,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "mezotBTC",
    feeToken: "mezotBTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://mezo.org",
        },
        {
            text: Site.Docs,
            url: "https://mezo.org/docs/users/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.mezo.org",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/mezonetwork",
        },
    ],
    description:
        "Mezo is an EVM-compatible blockchain that supports general purpose onchain applications. It runs on CometBFT consensus protocol and is operated by a federated validator set. Its official bridge is supports briding tBTC from Ethereum to Mezo.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.ThresholdtBTC}\n\nThis Mezo bridge is a escrow contract on Ethereum that holds various BTC-backed assets. The brideg is upgradeable by a 9 member federation. 5 signers are needed to initaite upgrades.`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "Data related to the Mezo network is made available by its validator set",
            content: ReviewSnippet.DAFederation,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "The Mezo network is operated by a federated validator set",
            content: ReviewSnippet.OperatorFederated,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Finality guarantees are provided through a federation. Mezo blocks cannot be reorged after being added to the chain",
            content: `${ReviewSnippet.CometBFTFinality}\n\nThe Mezo network is currently operated by a federated validator set. Finality assurances are provided by this federated group of operators.`,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Mezo does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "A wrapped BTC token used to pay fees",
                    content: BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Mezo does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-Compatible",
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
    ],
};

export default mezo;
