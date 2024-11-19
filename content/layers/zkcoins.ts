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

const zkcoins: LayerProject = {
    type: Type.Layer,
    slug: "zkcoins",
    title: "zkCoins",
    entityType: EntityType.zkCSV,
    live: LiveStatus.Announced,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://zerosync.org",
        },
        {
            text: Site.Docs,
            url: "https://gist.github.com/RobinLinus/d036511015caea5a28514259a1bab119",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ZeroSync/ZeroSync",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/ZeroSync_",
        },
    ],
    description:
        "zkCoins is a proposed zkCSV protocol that would support confidential payments for BTC and tokenized assets. The Zerosync team is developing BitVM to create improved trust assumptions for bridging between the Bitcoin mainchain and the zkCoins protocol.",
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

export default zkcoins;
