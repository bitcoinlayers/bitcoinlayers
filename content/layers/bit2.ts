import {
    LayerProject,
    Type,
    LiveStatus,
    EntityType,
    Site,
    RiskCategory,
} from "../props";

const bit2: LayerProject = {
    type: Type.Layer,
    slug: "bit2",
    title: "Bit2",
    entityType: EntityType.EthereumRollup,
    live: LiveStatus.Testnet,
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
            url: "https://bit2.network",
        },
        {
            text: Site.Docs,
            url: "https://bit2.network/coming-soon",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/bit2net",
        },
    ],
    description:
        "Bit2 is an Ethereum rollup that uses wBTC for gas and shares sequencer revenue with wBTC holders.",
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

export default bit2;
