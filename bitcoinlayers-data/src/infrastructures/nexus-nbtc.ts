import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    AssessmentCategory,
    PegRiskSummarySnippet,
} from "../props";

const nexusnbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "nexus-nbtc",
    title: "Nexus nBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [RiskFactor.High, RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "",
        },
        {
            text: Site.Docs,
            url: "",
        },
        {
            text: Site.Explorer,
            url: "",
        },
        {
            text: Site.GitHub,
            url: "",
        },
        {
            text: Site.Twitter,
            url: "",
        },
    ],
    description: "Nexus nBTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: "This wrapper is under review",
            content: "We are currently reviewing this two-way peg implementation."
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
                title: "This peg is under review.",
                content:
                    "This peg is under review.",
            },
        ],
};

export default nexusnbtc;