import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    TokenSnippet,
} from "../props";

const sidesbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "side-sbtc",
    title: "Side sBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Side",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description:
        "Side sBTC is a BTC-backed asset that lives on the Side protocol. It can be used across various applications and is also one of the network's gas tokens.",
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
            title: TokenSnippet.UnderReview,
            content:
                "BTC backing Side sBTC is secured by a subset of its validators participating in a threshold signature scheme. We are currently reviewing its signer set.",
        },
    ],
};

export default sidesbtc;
