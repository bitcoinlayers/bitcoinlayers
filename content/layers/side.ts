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

const side: LayerProject = {
    type: Type.Layer,
    slug: "side",
    title: "Side Protocol",
    entityType: EntityType.Sidechain,
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
            url: "https://side.one",
        },
        {
            text: Site.Docs,
            url: "https://docs.side.one",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.side.exchange",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/sideprotocol",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/SideProtocol",
        },
    ],
    description:
        "Side Protocol is building a settlement layer for modular blockchains. It will run a Proof-of-Stake consensus mechanism. Its relationship with Bitcoin would be that of a sidechain, and rollups settling on Side can leverage its BTC bridge contract.",
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

export default side;
