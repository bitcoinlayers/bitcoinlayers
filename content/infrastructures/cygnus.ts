import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
} from "../props";

const cygnus: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "cygnus",
    title: "Cygnus",
    entityType: EntityType.Restaking,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Bsquared Network",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://cygnus.finance/",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://explorer.bsquared.network",
        // },
        {
            text: Site.Docs,
            url: "https://wiki.cygnus.finance/",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/CygnusFi",
        },
    ],
    description: "Under Review",
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

export default cygnus;
