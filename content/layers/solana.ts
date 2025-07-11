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
    ReviewSnippet,
    BitcoinSecuritySnippet,
    UseCaseSnippet,
    RiskSummarySnippet,
} from "../props";

const solana: LayerProject = {
    type: Type.Layer,
    slug: "solana",
    title: "Solana",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust",// Set to true for partial review mode
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "SOL",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://solana.com/",
        },
        {
            text: Site.Docs,
            url: "https://solana.com/docs",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.solana.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/solana-foundation/solana-com",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/solana",
        },
    ],
    description:
        "Solana is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It is home to the SVM execution environment which supports more expressive smart contracts.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: `${RiskSummarySnippet.RiskSummaryCustodianPegs}`,
            },
            {
                title: RiskSummarySnippet.TitleAlternativeL1,
                content: RiskSummarySnippet.RiskSummaryAlternativeL1,
            },
        ],
        riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "cbBTC is managed by a centralized custodian.",
                    content: TokenSnippet.CoinbasecbBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "Users trust the Threshold Network to keep tBTC backed",
                    content: `${TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by an [8 member](https://explorer.solana.com/address/Gj93RRt6QB7FjmyokAD5rcMAku7pq3Fk2Aa8y6nNbwsV/program-multisig) federation.`,
                },
                {
                    name: "Wormhole wBTC",
                    infrastructureSlug: "wormhole-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.BitGowBTC}\n\nwBTC on Solana is minted via the Portal bridge from Ethereum. We are reviewing the Portal bridge's smart contracts and trust assumptions.`,
                },
                {
                    name: "21 Shares BTC",
                    infrastructureSlug: "21shares-btc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.TwentyOnecoBTC}\n\n${TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Zeus BTC",
                    infrastructureSlug: "zeus-btc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.VariousCustodianPeg,
                    content: `${TokenSnippet.ZueszBTC}\n\n${TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Rootstock RBTC",
                    infrastructureSlug: "rootstock-rbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.RootstockRBTC}${TokenSnippet.smartcontractreview}.`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Data is stored and made available by an alternative PoS network",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Solana is operated by a distributed validator set",
            content: ReviewSnippet.OperatorSidechainPOS
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "We are currently reviewing Solana's specific finality guarantees",
            content: "Solana's finality guarantees are achieved through a distributed consensus mechanism. We are reviewing relevant trust assumptions.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Solana does not inherit any security from bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "SOL token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Solana does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

export default solana;
