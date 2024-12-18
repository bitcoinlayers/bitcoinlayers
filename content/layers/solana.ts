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

const solana: LayerProject = {
    type: Type.Layer,
    slug: "solana",
    title: "Solana",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://solana.com/",
        },
        {
            text: Site.Docs,
            url: "https://solana.com/docs",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.solana.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/solana-foundation/solana-com",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/solana",
        },
    ],
    description:
        "Solana is an alternative blockchain that supports a number of wrapped BTC tokens. Ethereum is home to the SVM execution environment which supports more expressive smart contracts.",
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
            title: "Under review",
            content: [
                {
                    content: "This project is under review.",
                },
            ],
        },
    ],
};

export default solana;