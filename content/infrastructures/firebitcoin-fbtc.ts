import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const fire: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "firebitcoin-fbtc",
    title: "Fire Bitcoin FBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.General,
    associatedLayers: "EVM-based chains",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://fbtc.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.fbtc.com",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://docs.fbtc.com/",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/fbtc-xyz",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/IgnitionFBTC",
        },
    ],
    description:
        "Ignitions's FBTC is a BTC-backed reserve asset that can be used across various EVM chains.",
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
            title: "Users trust an MPC set between Ignition and Cobo to secure funds backing mBTC.",
            content:
                "An MPC set up between Ignition and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Ignition's claims in their documentation are being executed in practice.\n\n[Source](https://medium.com/@IgnitionFBTC/fbtc-announces-plans-to-launch-to-help-liberate-the-growth-power-of-btc-8a5957406b81)",
        },
    ],
};

export default fire;
