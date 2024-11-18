import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
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
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "[Bsquared vault for UniRouter uBTC](https://explorer.bsquared.network/address/0x7551aEa51588AaCe99B89c3FaC3CFc4108DB8094)\n\n[Bsquared vault for Lorenzo stBTC](https://explorer.bsquared.network/address/0x0Ce45dd53affbb011884EF1866E0738f58AB7969)\n\n[Bsquared vault for Bedrock uniBTC](https://explorer.bsquared.network/address/0xBc323bA4bbf2559417C3Ca47A75e2Ea341Cf8320)",
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

export default cygnus;
