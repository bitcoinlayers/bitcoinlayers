import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const celestia: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "celestia",
    title: "Celestia",
    entityType: EntityType.DataAvailability,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "TIA",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://celestia.org",
        },
        {
            text: Site.Docs,
            url: "https://docs.celestia.org",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/celestiaorg",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/celestiaorg",
        },
        {
            text: Site.GitHub,
            url: "https://x.com/CelestiaOrg/",
        },
    ],
    description:
        "Celestia is a data availability layer. Scaling protocols that want to save costs on data availability can integrate with Celestia for improved performance with some additional tradeoffs. Celestia is based on CometBFT and additionally supports Data Availability Sampling (DAS), a mechanism by which anyone running a light client can verify that the Celestia network is making rollup state data available.",
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

export default celestia;
