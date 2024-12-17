import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const boolbbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bool-bbtc",
    title: "Bool bBTC",
    entityType: EntityType.BTCWrapper,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Fractal",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bool.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.bool.network",
        },
        {
            text: Site.Explorer,
            url: "https://beta-testnet.boolscan.com",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/boolnetwork",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/bool_official",
        },
    ],
    description:
        "Bool Network is an infrastructure provider currently managing bridges for a number of Bitcoin scaling protocols. The Bitcoin wallets it manages are secured by an MPC Protocol.",
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

export default boolbbtc;
