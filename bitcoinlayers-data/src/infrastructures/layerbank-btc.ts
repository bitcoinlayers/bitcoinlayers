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

const layerbankbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "layerbank-btc",
    title: "Layerbank BTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Bsquared Network",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Layerbank BTC is a BTC wrapped asset. It is under review.",
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

export default layerbankbtc;
