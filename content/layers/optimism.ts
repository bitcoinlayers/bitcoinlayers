import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
} from "../props";

const optimism: LayerProject = {
    type: Type.Layer,
    slug: "optimism",
    title: "Optimism",
    entityType: EntityType.EthereumRollup,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
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
                    content:
                        "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed, but permissioned, two-way peg. tBTC is minted on Ethereum and then bridged to Arbitrum via its own custom bridge contract.\n\nThis bridge is managed by a 6/9 federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.",
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "wBTC is managed by a centralized consortium of companies. We are analyzing if wBTC is natively minted on Optimism or if is bridged from Ethereum",
                    content:
                        "wBTC on Optimism is backed by a centralized consortium of three companies. These entities are responsible for custodying BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.\n\nWe are analyzing if wBTC is natively minted on Optimism or if is bridged from Ethereum",
                },
                {
                    name: "Kraken kBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Synths sBTC",
                    infrastructureSlug: "synths-sbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content:
                "The data for Optimism's state is stored on the Ethereum blockchain. Anyone can run an Ethereum node and verify the state of Optimism.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Optimism blocks are produced and proposed by a centralized operator, but users can become their own block producer in the event of censorship or liveness failures",
            content:
                "Currently, Optimism's sequencer is managed by one entity. The Optimism sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and send their transactions directly to the Ethereum L1.\n\nWe are reviewing if users can become their own block producer in Optimism's design.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Optimism state transitions finalize on Ethereum",
            content:
                "Optimism inherits finality guarantees from Ethereum. The Optimism sequencer provides a soft confirmation of transactions which are eventually summarized and sent to Ethereum.\n\Optimism's sequencer can reorg prior to a transaction batch being accepted on Ethereum.",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default optimism;