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

const nexio: LayerProject = {
    type: Type.Layer,
    slug: "nexio",
    title: "Nexio",
    entityType: EntityType.TBD,
    live: LiveStatus.Announced,
    staking: false,
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
            url: "https://x.com/buildnexio/status/1811057118625079800",
        },
        {
            text: Site.Website,
            url: "https://x.com/buildnexio/status/1811057118625079800",
        },
        {
            text: Site.Docs,
            url: "https://x.com/buildnexio/status/1811057118625079800",
        },
        {
            text: Site.Explorer,
            url: "https://x.com/buildnexio/status/1811057118625079800",
        },
        {
            text: Site.GitHub,
            url: "https://x.com/buildnexio/status/1811057118625079800",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/buildnexio",
        },
    ],
    description:
        "Nexio is building a MoveVM-based rollup to support bitcoin applications.",
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

export default nexio;
