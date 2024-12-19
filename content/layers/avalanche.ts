import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
} from "../props";

const avalanche: LayerProject = {
    type: Type.Layer,
    slug: "avalanche",
    title: "Avalanche",
    entityType: EntityType.Sidechain,
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
    feeToken: "AVAX",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.avax.network/",
        },
        {
            text: Site.Docs,
            url: "https://docs.avax.network/",
        },
        {
            text: Site.Explorer,
            url: "https://avascan.info/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ava-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/avax",
        },
    ],
    description:
        "Avalanche is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts. It also supports the interoperable subnet blockchains.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Avalanche BTCb",
                    infrastructureSlug: "avalance-btcb",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Solv LBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Kraken KBTC",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Data is stored and made available by Avalanche full nodes",
            content:
                "The data for Avalanche's state is made available by its full nodes. Anyone can run an Avalanche node and verify is state.\n\nWe are currently reviewing Avalanche's full node implementation",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Avalanche is operated by a decentralized validator set",
            content:
                "Blocks are built and proposed by a permissionless consensus network.\n\nWe are currently reviewing Avalanche's network operators",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Finality on Avalanche is guaranteed by a permissionless consensus mechanism",
            content:
                "Blocks are validated and finalized by a permissionless consensus network.\n\nWe are currently reviewing Avalanche's finality guarantees",
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

export default avalanche;
