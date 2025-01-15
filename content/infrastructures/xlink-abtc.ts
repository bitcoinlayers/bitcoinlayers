import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const xlinkabtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "xlink-abtc",
    title: "XLink aBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Stacks, Core, Base, Linea, Mode, BNB, Ethereum, Bsquared, BOB, Bitlayer, Merlin, AIlayer, Xlayer, Arbitrum, Aurora, Manta",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://xlink.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.xlink.network",
        },
        {
            text: Site.Explorer,
            url: "https://docs.xlink.network/xlink-network/readme/ethereum-contract-addresses",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/xlink-network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/XLinkbtc",
        },
    ],
    description:
        "XLink aBTC is a BTC-backed reserve asset that can be used across a number of blockchain environments.",
    sections: [
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
            title: "There is limited information available on Xlink aBTC's custody mechanism",
            content:
                "There is limited information available on Xlink aBTC's custody mechanism for BTC backing aBTC. Users trust Alex, the project behind Xlink, to set up secure custody practices. Xlink's [website](https://www.xlink.network/) mentions that institutional grade MPC solutions are used.",
        },
    ],
};

export default xlinkabtc;
