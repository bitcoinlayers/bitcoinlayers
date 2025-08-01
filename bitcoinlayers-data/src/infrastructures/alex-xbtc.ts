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

const alexxbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "alex-xbtc",
    title: "Alex xBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Stacks, Core Chain",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description:
        "xBTC is a BTC-derivative used primarily within Stacks DeFi applications. xBTC is backed by BTC held in Wrapped's custody.",
    riskSummary: [
        {
            title: PegRiskSummarySnippet.CustodianTitle,
            content: PegRiskSummarySnippet.OneCustodian,
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
            title: "Users trust Wrapped with the custody of BTC backing xBTC",
            content:
                "Users trust Wrapped, a custodian provider, with the custody of BTC backing xBTC. Alex, a DeFi project largely associated with the Stacks ecosystem, acquired Wrapped and has initiated a transition to move xBTC into sBTC.\n\nFunds that are not moved into sBTC are still secured by [Wrapped](https://wrapped.com/).",
        },
    ],
};

export default alexxbtc;
