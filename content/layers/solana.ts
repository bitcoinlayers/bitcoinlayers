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
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
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
            title: "This section is under review",
            content:
                "We are currently reviewing what satisfies the data availability requirement on Solana.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Solana is operated by a distributed validator set",
            content:
                "Blocks are built and proposed by a distributed consensus network.\n\nWe are currently reviewing Solana's network operators",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "We are currently reviewing Solana's finality guarantees",
            content:
                "Blocks are validated and finalized by a distributed consensus network.\n\nWe are currently reviewing Solana's finality guarantees",
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

export default solana;
