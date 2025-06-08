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

const mantambtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "manta-mbtc",
    title: "Manta mBTC",
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
    description: "Manta mBTC is a wrapped BTC asset available on various networks. It is backed by other wrapped BTC assets.",
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
                title: "mBTC is backed by other wrapped assets. Funds backing mBTC are secured by Ceffu, a centralized institution",
                content:
                    "mBTC is backed by [BitGo wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc) and [Binance BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb). When users exchange these funds for mBTC, reserve assets are secured by vaults managed by Ceffu, an centralized institution.\n\n[Source](https://mantanetwork.medium.com/manta-cedefi-boosting-yield-and-security-4728b723be69)",
            },
        ],
};

export default mantambtc;