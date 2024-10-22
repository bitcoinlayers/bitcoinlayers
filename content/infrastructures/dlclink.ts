import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const dlclink: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "dlclink",
    title: "DLC Link",
    entityType: EntityType.BTCWrapper,
    live: LiveStatus.Mainnet,
    staking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.dlc.link/",
        },
        {
            text: Site.Website,
            url: "https://www.dlc.link/",
        },
        {
            text: Site.Docs,
            url: "https://github.com/DLC-link/gitbook-docs",
        },
        {
            text: Site.Explorer,
            url: "https://github.com/dlc-link",
        },
        {
            text: Site.GitHub,
            url: "https://x.com/dlc_link",
        },
    ],
    description:
        "DLC Link supports the development of dlcBTC, a Bitcoin wrapper that leverages discrete log contracts.",
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

export default dlclink;
