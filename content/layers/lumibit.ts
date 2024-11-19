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

const lumibit: LayerProject = {
    type: Type.Layer,
    slug: "lumibit",
    title: "Lumibit",
    entityType: EntityType.Rollup,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "LBIT",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://lumibit.xyz",
        },
        {
            text: Site.Docs,
            url: "https://lumibit.gitbook.io/lumibit-gitbook",
        },
        {
            text: Site.Explorer,
            url: " https://scan.devnet.lumibit.xyz",
        },
        {
            text: Site.GitHub,
            url: "https://lumibit.gitbook.io/lumibit-gitbook/development-guide/typescript-sdk",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/LumiBitL2",
        },
    ],
    description:
        "Lumibit is building a sovereign rollup leveraging Scoll's technology stack. Information on the rollup's design is limited, but a private testnet has been released.",
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

export default lumibit;
