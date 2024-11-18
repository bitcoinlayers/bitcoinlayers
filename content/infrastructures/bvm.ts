import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const bvm: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bvm",
    title: "BVM",
    entityType: EntityType.RaaS,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "BVM",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bvm.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.bvm.network",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://docs.bvm.network",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/trustlesscomputer",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/BVMnetwork",
        },
    ],
    description:
        "BVM is a Rollup-as-a-Service provider. It supports the deployment of zkSync Era blockchains on top Supersonic, a blockchain the BVM team manages.",
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

export default bvm;
