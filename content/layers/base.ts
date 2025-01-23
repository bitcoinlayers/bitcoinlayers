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
} from "../props";

const base: LayerProject = {
    type: Type.Layer,
    slug: "base",
    title: "Base",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.base.org/",
        },
        {
            text: Site.Docs,
            url: "https://www.docs.base.org/",
        },
        {
            text: Site.Explorer,
            url: "https://basescan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/base-org",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/base",
        },
    ],
    description:
        "Base is an Ethereum rollup that that supports a variety of wrapped BTC tokens.",
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
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.CoinbasecbBTC
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "Users trust the Threshold Network to keep tBTC backed and a 9 member federation to manage tBTC's bridge between Base and Ethereum",
                    content:
                        `${TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by a 9 member federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.`,
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: TokenSnippet.ibtcnetworkibtc
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: `${TokenSnippet.SolvBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Pump BTC",
                    infrastructureSlug: "pump-btc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: `${TokenSnippet.PumpBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "AxlBTC",
                    infrastructureSlug: "axelar-axlbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "Solv SolvBTCBBN",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: `${TokenSnippet.SolvBTCBBN}\n\n${TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Base blocks are produced and proposed by a centralized operator, but users can become their own block producer in the event of censorship or liveness failures",
            content:
                "Currently, Base's sequencer is managed by one entity. The Base sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and send their transactions directly to the Ethereum L1.\n\nWe are reviewing if users can become their own block producer in Base's design.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Base state transitions finalize on Ethereum",
            content:
                "We are reviewing the Base validator set and how state transitions are proposed and finalized.",
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
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    content: "The creator of both cbBTC and Base is Coinbase.",
                },
            ],
        },
    ],
};

export default base;
