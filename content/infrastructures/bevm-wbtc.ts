import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const bevmwbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bevm-wbtc",
    title: "BEVM WBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "BEVM",
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
        assessment: [
            {
                category: AssessmentCategory.AssetCustody,
                score: 0,
                tier: "",
                title: "Users trust a federation to secure BTC backing BEVM wBTC",
                content:
                    "On BEVM's official bridge, BTC is locked in a bitcoin address controlled by up to 15 trustees. These trustees custody the BTC that backs wBTC on BEVM.\n\nTrustees are selected by BEVM's validator set. Users trust that the trustees will not steal their BTC.",
            },
        ],
    };

export default bevmwbtc;
