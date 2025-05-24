import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const bedrockbrbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bedrock-brbtc",
    title: "Bedrock brBTC",
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
    description: "Bedrock brBTC is BTC-denominated asset backed by other derivative assets.",
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
                title: "Bedrock brBTC is backed by various wrapped BTC assets",
                content:
                    "Bedrock brBTC is a derivative asset backed by other wrapped BTC assets. When depositing funds for brBTC, users take on smart contract risks in addition to the custodian risk related to the backing asset.\b\bBedrock brBTC may be backed by [uniBTC](https://www.bitcoinlayers.org/infrastructure/bedrock-unibtc), [FBTS](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [M-BTC](https://www.bitcoinlayers.org/infrastructure/merlin-mbtc), or [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb).\n\n[Source](https://docs.bedrock.technology/multi-asset-liquid-staking/brbtc/introduction)",
            },
        ],
};

export default bedrockbrbtc;