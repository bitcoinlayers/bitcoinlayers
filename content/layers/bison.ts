import {
    LayerProject,
    Type,
    LiveStatus,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    RiskCategory,
    TokenSnippet,
} from "../props";

const bison: LayerProject = {
    type: Type.Layer,
    slug: "bison",
    title: "Bison",
    entityType: EntityType.Rollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bisonlabs.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/BisonLabs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Bison_Labs",
        },
    ],
    description:
        "Bison Labs are building a sovereign rollup that enables more functionality for Ordinals and BRC-20 trading. They planning on using zk-STARKs to prove state transitions. They are in the testnet stage.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [],
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

export default bison;
