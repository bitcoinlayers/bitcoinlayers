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

const lorenzoenzobtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "lorenzo-enzobtc",
    title: "Lorenzo enzoBTC",
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
    description: "Lorenzo enzoBTC is a wrapped BTC asset offered through the Lorenzo protocol.",
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
                title: "enzoBTC is backed by native BTC and other derivative assets",
                content:
                    "enzoBTC can be acquired through depositing native BTC, [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), or [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb).\n\nFunds backing enzoBTC are secured by various custodians including Cobo, Ceffu, and Chainup.\n\n[Source](https://lorenzo-protocol.gitbook.io/docs/bitcoin-liquidity-layer/enzobtc-decentralized-wrapped-btc-for-defi)",
            },
        ],
};

export default lorenzoenzobtc;