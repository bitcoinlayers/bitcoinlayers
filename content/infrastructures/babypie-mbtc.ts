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

const babypie: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "babypie-mbtc",
    title: "Babypie mBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Deposits,
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
    description:
        "Babypie mBTC is a BTC reserve asset that can be used across various EVM chains.",
        riskSummary: [
            {
                title: PegRiskSummarySnippet.CustodianTitle,
                content: PegRiskSummarySnippet.Guardian,
            },
        ],
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
            title: "Users trust an MPC set between Babypie and Cobo to secure funds backing mBTC.",
            content:
                "An MPC set up between Babypie and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Babypie's claims in their documentation are being executed in practice.\n\n[Source](https://docs.babypiexyz.io/babypies-architecture)",
        },
    ],
};

export default babypie;
