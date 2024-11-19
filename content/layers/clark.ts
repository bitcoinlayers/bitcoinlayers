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

const clark: LayerProject = {
    type: Type.Layer,
    slug: "clark",
    title: "clArk",
    entityType: EntityType.Ark,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "BTC",
    feeToken: "BTC",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://www.spark.info",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/buildonspark",
        },
    ],
    description: "clArk is an implementation of Ark.",
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
            id: "underreivew",
            title: "Under review",
            content: [
                {
                    title: "clArk is under review",
                    content:
                        "clArk is currently being reviewed by the Bitcoin Layers team.",
                },
            ],
        },
    ],
};

export default clark;
