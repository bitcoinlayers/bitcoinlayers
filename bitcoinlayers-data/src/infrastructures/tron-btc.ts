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

const tronbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "tron-btc",
    title: "BTCTRON",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Tron",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "BTCTRON is a BTC-synthetic asset home to the Tron blockchain.",
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
            title: "Users trust a centralized exchange with the custody of BTC backing BTCTRON",
            content:
                "When users swap BTC for BTCTRON, they send their BTC to Poloniex, a centralized custodian. Information on how the BTC is secured is not available.\n\n[Source](https://support.poloniex.com/hc/en-us/articles/360058176553-Introducing-Multi-chain-Deposits-and-Withdrawals)",
        },
    ],
};

export default tronbtc;
