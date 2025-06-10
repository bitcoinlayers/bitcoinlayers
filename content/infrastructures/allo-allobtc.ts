import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    TokenSnippet,
    PegRiskSummarySnippet,
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
                    title: "BTC backing AlloBTC is held in custody by Cobo, a centralized exchange.",
                    content:
                        "BTC backing AlloBTC is custodied by Cobo, a centralized exchange. Cobo offers a 2/2 MPC custody solution where they co-custody funds along with protocols leveraging their servives. AlloBTC has not disclosed if this is the case in their documentation or marketing materials.\n\n[Source](https://docs.allo.xyz/faq-1/btc-staking)",
                },
            ],
};

export default alloallobtc;
