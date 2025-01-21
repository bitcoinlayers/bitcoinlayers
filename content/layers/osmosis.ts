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
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
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
        "Osmosis is a proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts.",
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
            tier: RiskFactor.UnderReview,
            title: "We are currently reviewing Osmosis' full node implementation",
            content:
                "We are currently reviewing Osmosis' full node implementation.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Osmosis is operated by a distributed validator set",
            content:
                "Blocks are built and proposed by a distributed consensus network.\n\nWe are currently reviewing Osmosis' network operators.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "We are currently reviewing Osmosis' finality guarantees",
            content:
                "Blocks are validated and finalized by a distributed consensus network.\n\nWe are currently reviewing Osmosis' finality guarantees",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content:
                        "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default osmosis;