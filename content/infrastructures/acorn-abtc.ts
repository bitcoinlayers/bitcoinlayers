import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory
} from "../props";

const acorn: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "acorn-abtc",
    title: "Acorn aBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [],
    description: "Acorn aBTC is a derivative asset that looks to live across various EVM chains.",
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
            title: "Users trust operators of a multi-signature wallet with the custody of BTC backing aBTC",
            content:
                "Users of aBTC reportedly trust a multi-signature wallet to secure the funds backing aBTC. Acorn's documentation mentions that a multi-signature wallet, supported by HSM hardware devices, is responsible for securing funds that back aBTC. Acorn has not disclosed the operators of this wallet.\n\nUsers trust Acorn's claims in their documentation are being executed in practice.\n\n[Source](https://docs.acornnetwork.io/acorn-infrastructure/module-features)",
        },
    ],
};

export default acorn;
