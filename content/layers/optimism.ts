import { tokenToString } from "typescript";
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

const optimism: LayerProject = {
    type: Type.Layer,
    slug: "optimism",
    title: "Optimism",
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
        "Arbitrum is an Ethereum rollup that that supports a variety of wrapped BTC tokens.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "Users trust the Threshold Network to keep tBTC backed and a 9 member federation to manage tBTC's bridge between Base and Ethereum",
                    content: `${TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by a 6/9 federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.`
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "wBTC is managed by a centralized consortium of companies. We are analyzing if wBTC is natively minted on Optimism or if is bridged from Ethereum",
                    content: `${TokenSnippet.BitGowBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Kraken kBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.KrakenKBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BedrockUniBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Synths sBTC",
                    infrastructureSlug: "synths-sbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.UnderReview}\n\n${TokenSnippet.smartcontractreview}`,
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
            tier: RiskFactor.Medium,
            title: "Optimism blocks are produced and proposed by a centralized operator, but users can become their own block producer in the event of censorship or liveness failures",
            content: ReviewSnippet.SelfProposeMainAlt,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Optimism state transitions finalize on Ethereum",
            content: `${ReviewSnippet.FinalityAltRollupPermissionlessFraudProofs}\n\nWe are reviewing how to score finality guarantees for alternative rollups. Learn more on our thoughts [here](https://www.lxresearch.co/some-thoughts-on-proof-systems-for-bridges-on-other-chains/).`
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

export default optimism;
