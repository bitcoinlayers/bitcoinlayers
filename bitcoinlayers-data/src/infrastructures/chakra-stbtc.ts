import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    PegRiskSummarySnippet,
} from "../props";

const chakra: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "chakra-stbtc",
    title: "Chakra stBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    riskSummary: [
        {
            title: "This wrapper is under review",
            content: "We are currently reviewing this two-way peg implementation."
        },
    ],
    description: "Chakra stBTC is a BTC wrapped asset. It is under review.",
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

export default chakra;
