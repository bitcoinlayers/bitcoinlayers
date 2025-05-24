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

const alloallobtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "allo-allobtc",
    title: "Allo alloBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: true,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "BNBSmartChain",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "AlloBTC is a BTC wrapped asset. It is under review.",
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
                    title: "This peg is under review.",
                    content:
                        "This peg is under review.",
                },
            ],
};

export default alloallobtc;
