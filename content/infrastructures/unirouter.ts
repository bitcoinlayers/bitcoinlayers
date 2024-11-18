import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const unirouter: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "unirouter",
    title: "UniRouter",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Bsquared Network",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://unirouter.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.unirouter.io",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.bsquared.network/address/0x796e4D53067FF374B89b2Ac101ce0c1f72ccaAc2",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/UniRouterBTC",
        },
    ],
    description: "Under Review",
    sections: [
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "[uBTC Bsquared smart contract](https://explorer.bsquared.network/address/0x796e4D53067FF374B89b2Ac101ce0c1f72ccaAc2)",
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

export default unirouter;
