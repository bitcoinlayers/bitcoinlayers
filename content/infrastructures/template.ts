import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
} from "../props";

const template: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "slug",
    title: "Title",
    entityType: EntityType.BitcoinBridge,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [RiskFactor.High, RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://twitter.com/bitcoinlayers",
        },
        {
            text: Site.Docs,
            url: "https://twitter.com/bitcoinlayers",
        },
        {
            text: Site.Explorer,
            url: "https://twitter.com/bitcoinlayers",
        },
        {
            text: Site.GitHub,
            url: "https://twitter.com/bitcoinlayers",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/bitcoinlayers",
        },
    ],
    description: "Under review.",
    sections: [
        {
            id: "description",
            title: "Description",
            content: [
                {
                    title: "Description",
                    content: "Under review.",
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

export default template;
