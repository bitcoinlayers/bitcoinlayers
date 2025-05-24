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

const pstake: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "pstake-ybtc",
    title: "Pstake yBTC",
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
    description: "pStake yBTC is a BTC wrapped asset. It is under review.",
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
                            title: "BTC backing yBTC is secured by Cobo, an institutional provider",
                            content:
                                "pStake's yBTC is backed by BTC held in custodian wallets. These wallets are secured by signers participating in an MPC scheme. pStake has a dedicated Cobo account where users' funds are held.\n\n[Source](https://blog.pstake.finance/2024/10/17/introducing-ybtc-by-pstake-yield-optimized-bitcoin-lst-on-babylon/#:~:text=Due%20to%20the%20Bitcoin%20Network%E2%80%99s,minimize%20the%20risk%20of%20centralization)",
                        },
                    ],
};

export default pstake;
