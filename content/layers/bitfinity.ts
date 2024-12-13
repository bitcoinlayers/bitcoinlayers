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

const bitfinity: LayerProject = {
    type: Type.Layer,
    slug: "bitfinity",
    title: "Bitfinity",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bitfinity.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.bitfinity.network",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.testnet.bitfinity.network",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/bitfinity-network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/bitfinitynet",
        },
    ],
    description:
        "Bitfinity is an EVM-based Proof-of-Stake sidechain. It is currently live on testnet.",
    riskAnalysis: [
        {
            category: RiskCategory.UnilateralExits,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Under review.",
            content: [
                {
                    content: "This project is under review.",
                },
            ],
        },
    ],
};

export default bitfinity;
