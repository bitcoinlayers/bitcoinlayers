import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
} from "../props";

const bnbsmartchain: LayerProject = {
    type: Type.Layer,
    slug: "bnbsmartchain",
    title: "BNB Smart Chain",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BNB",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://usecorn.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.usecorn.com/docs/developers/introduction",
        },
        {
            text: Site.Explorer,
            url: "https://cornscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/usecorn",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/use_corn",
        },
    ],
    description:
        "BNB Smart Chain is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Binance custodies the BTC backing BTCB",
                    content:
                        "BTCB on BNB Smart Chain is backed by Binance. Binance is the single entity responsible for custodying BTC that backs BTCB on BNB Smart Chain.\n\nUsers trust Binance to ensure the funds backing BTCB are not stolen or lost.",
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "wBTC is managed by a centralized consortium of companies. We are analyzing if wBTC is natively minted on Binance or if is bridged from Ethereum.",
                    content:
                        "wBTC on BNB Smart Chain is backed by a centralized consortium of three companies. These entities are responsible for securing BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.",
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "Users trust the Threshold Network to keep tBTC backed",
                    content:
                        "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed, but permissioned, two-way peg.\n\nWe are currently reviewing if tBTC is minted on BNB Smart Chain natively or minted on Ethereum and then bridged to BNB Smart Chain via a custom bridge contract.",
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "Solv SolvBTCBBN",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content:
                        "SolvBTCBBN is a derivative of Solv BTC. We are reviewing its trust assumptions.",
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content:
                        "SolvBTC.ENA is a derivative of Solv BTC. We are reviewing its trust assumptions.",
                },
                {
                    name: "Pump BTC",
                    infrastructureSlug: "pump-btc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "Kinza kBTC",
                    infrastructureSlug: "kinza-kbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "We are reviewing BNB Smart Chain's data availability requirement",
            content:
                "We are currently reviewing BNB Smart Chains's full node implementation",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "BNB Smart Chain is operated by a distributed validator set",
            content:
                "Blocks are built and proposed by a distributed consensus network.\n\nWe are currently reviewing BNB Smart Chain's network operators",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "We are currently reviewing BNB Smart Chain's finality guarantees",
            content:
                "Blocks are validated and finalized by a distributed consensus network.\n\nWe are currently reviewing BNB Smart Chain's finality guarantees",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content:
                        "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default bnbsmartchain;
