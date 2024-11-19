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

const nomic: LayerProject = {
    type: Type.Layer,
    slug: "nomic",
    title: "Nomic",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 4.95,
    nativeToken: "NOM",
    feeToken: "NOM",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.nomic.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.nomic.io",
        },
        {
            text: Site.Explorer,
            url: "https://bigdipper.live/nomic",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/nomic-io",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/nomicbtc",
        },
    ],
    description:
        "Nomic is a Cosmos SDK Chain that enables users to leverage bitcoin in the Cosmos ecosystem.",
    riskAnalysis: [
        {
            category: RiskCategory.UnilateralExits,
            score: 0,
            tier: "",
            title: "Under Review",
            content: "",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: "",
            title: "Under Review",
            content: "",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: "",
            title: "Under Review",
            content: "",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: "",
            title: "Under Review",
            content: "",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Under Review",
            content: [
                {
                    title: "📝 Project is currently under review",
                    content:
                        "We are currently reviewing trust assumptions related to this protocol against our framework. After the review is complete, we will publish the review on this site and make an announcement via our social media properties.",
                },
            ],
        },
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content:
                        "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

export default nomic;
