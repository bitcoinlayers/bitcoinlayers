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
    ReviewSnippet,
    BitcoinSecuritySnippet,
} from "../props";

const osmosis: LayerProject = {
    type: Type.Layer,
    slug: "osmosis",
    title: "Osmosis",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "OSMO",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://osmosis.zone/",
        },
        {
            text: Site.Docs,
            url: "https://docs.osmosis.zone/",
        },
        {
            text: Site.Explorer,
            url: "https://www.mintscan.io/osmosis",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/osmosis-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/osmosiszone",
        },
    ],
    description:
        "Osmosis is a proof-of-stake blockchain that supports a number of wrapped BTC tokens. It is IBC-compatible and a part of the Cosmos ecosystem.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Osmosis BTC",
                    infrastructureSlug: "osmosis-btc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "BTC on Osmosis is backed by several reserve assets",
                    content:
                        "BTC on Osmosis is backed by a number of collateral assets; WBTC.eth.axl, wBTC, nBTC, ckBTC, and cbBTC.axl.",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Osmosis' full node set satisfies the data availability requirement",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Osmosis is operated by a distributed validator set",
            content: ReviewSnippet.AltL1Operators,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Osmosis' finality guarantees are provided by its validator set",
            content: ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Osmosis does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "OSMO token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Osmosis does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content:
                        "Aspects related to relevant technologies and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default osmosis;
