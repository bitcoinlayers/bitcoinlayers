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
    RiskSummarySnippet,
} from "../props";

const fantom: LayerProject = {
    type: Type.Layer,
    slug: "fantom",
    title: "Fantom",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust",// Set to true for partial review mode
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "FTM",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.soniclabs.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.soniclabs.com/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.fantom.network/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/Fantom-foundation",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/FantomFDN",
        },
    ],
    description: "Fantom is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleAlternativeL1,
            content: RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
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
                    content: `${TokenSnippet.BitGowBTC}\n\n${TokenSnippet.smartcontractreview},`
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Data is stored and made available by Fantom full nodes. ",
            content:
                "The data for Fantom's state is made available by its full nodes. We are reviewing if operating a node is permissionless.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Fantom is operated by a federated validator set",
            content: ReviewSnippet.OperatorSidechainPOS
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "We are currently reviewing Fantom's finality guarantees",
            content: "Finality guarantees are provided via an alternative proof-of-stake network. We are reviewing Fantom's consensus mechanism.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Fantom does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "FTM token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Fantom does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "deprecated",
            title: "Network is no longer being developed",
            content: [
                {
                    content:
                        "The Fantom network is undergoing a migration to the Sonic network. FTM token holders are able to swap the FTM for S. While the network is still operating, we consider it being deprecated. BTC users should work directly with their bridge provider to exit the Fantom network. Due to this migration, we have given Fantom a custom Very High trust assumption score.",
                },
            ],
        },
    ],
};

export default fantom;
