import {
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    InfrastructureProject,
} from "../props";

const avail: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "avail",
    title: "Avail",
    entityType: EntityType.DataAvailability,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "AVAIL",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://availproject.org",
        },
        {
            text: Site.Docs,
            url: "https://www.availproject.org/developer",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.avail.so/#/explorer",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/availproject",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/availproject",
        },
    ],
    description:
        "Avail is a data availability layer. Scaling protocols that want to save costs on data availability can integrate with Avail for improved performance with some additional tradeoffs. Avail is also developing infrastructure to support improved interoperability.",
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

export default avail;
