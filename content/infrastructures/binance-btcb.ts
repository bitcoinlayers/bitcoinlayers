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

const binancebtcb: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "binance-btcb",
    title: "Binance BTCB",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "BNB Smart Chain",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.binance.com",
        },
        {
            text: Site.Explorer,
            url: "https://bscscan.com/token/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/bnb-chain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/binance",
        },
    ],
    description: "Binance BTCB is a derivative asset native to BNB Smart Chain. BTC backing BTCB is secured by Binance, a centralized exchange.",
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
            title: "Users trust Binance with managing the BTC backing BTCB",
            content:
                "When interacting with BTCB, users trust that [Binance](https://www.binance.com/en), a centralized custodian, will safely custody the BTC backing BTCB. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their BTCB tokens. They also trust that Binance will effectively manage the BTC and not lose access to it. If the BTC backing BTCB, BTCB tokens could become effectively worthless.\n\nUsers trust Binance's reputation as an institutional provider when interacting with BTCB.",
        },
    ],
};

export default binancebtcb;
