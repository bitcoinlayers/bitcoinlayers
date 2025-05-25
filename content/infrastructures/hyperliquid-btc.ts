import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
} from "../props";

const hyperliquidbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "unit-ubtc",
    title: "Hyperliquid BTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Hyperliquid",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description:
        "Hyperliquid BTC is a BTC-denominated asset available to Hyperliquid users. BTC backing this asset is secured by a 2/3 MPC scheme.",
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
            title: "Users trust 2/3 signers participating in the Unit Protocol",
            content:
                "The Unit Protocol consists of a network of 3 guardians participating in an MPC scheme. These guardians are responsible for securing the BTC backing a BTC-denominated asset on Hyperliquid. They are also responsible for executing signing events related to the asset.\n\n[Source](https://docs.hyperunit.xyz/architecture/security)",
        },
    ],
};

export default hyperliquidbtc;