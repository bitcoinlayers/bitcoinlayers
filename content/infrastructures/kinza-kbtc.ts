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

const kinza: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "kinza-kbtc",
    title: "Kinza kBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Kinza kBTC is a BTC wrapped asset. It is under review.",
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
                            title: "BTC backing kBTC is collaboratively secured by Cobo, Kinza, and Coinover",
                            content:
                                "Kinza's kBTC is backed by BTC held in custodian wallets. These wallets are secured by an MPC scheme where Kinza, Cobo, and Coinover participate as signers. Cobo and Coinover are institutional custody providers.\n\n[Source](https://docs.kinza.finance/kinza-bitcoin-staking/bitcoin-staking/technical-details)",
                        },
                    ],
};

export default kinza;
