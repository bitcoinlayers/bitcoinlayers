import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const unirouter: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "unirouter-ubtc",
    title: "UniRouter uBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Bsquared, Core",
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
    description: "uBTC is a liquid staking token that is operated by the UniRouter team. It is live on Bsquared Network.",
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
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust UniRouter with their custody practices. UniRouter has not disclosed who manages the BTC backing uBTC.",
            content:
                "Users trust that the UniRouter team has set up secure custody practices and has BTC reserves backing uniBTC. UniRouter has not disclosed who secures the BTC backing uBTC.",
        },
    ],
};

export default unirouter;
