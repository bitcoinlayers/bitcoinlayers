import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const obeliskobtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "obelisk-obtc",
    title: "Obelisk oBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Core",
    bitcoinOnly: false,
    links: [],
    description:
        "Obelisk oBTC is a reserve asset that is live on various EVM-compatible networks.",
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
            title: "Users trust centralized signers to secure BTC backing oBTC",
            content:
                "Obelisk's documentation claims that users deposit BTC into an MPC scheme to mint oBTC on a respective destination chain.\n\nUsers trust Obelisk's claims in their documentation are being executed in practice.\n\n[Source](https://docs-obelisk.nodedao.com/obtc-asset/how-to-mint-obtc-on-obelisk) ",
        },
    ],
};

export default obeliskobtc;
