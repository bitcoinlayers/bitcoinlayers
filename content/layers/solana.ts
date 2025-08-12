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
import custodyTradeoffs from "../../components/charts/chart-content/alternative-network";

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
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.BitGowBTC}\n\nwBTC on Solana is minted via the Portal bridge from Ethereum. We are reviewing the Portal bridge's smart contracts and trust assumptions.`,
                },
                {
                    name: "21 Shares BTC",
                    infrastructureSlug: "21shares-21btc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.TwentyOnecoBTC}`,
                },
                {
                    name: "Zeus zBTC",
                    infrastructureSlug: "zeus-zbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.VariousCustodianPeg,
                    content: `${TokenSnippet.ZueszBTC}`,
                },
                {
                    name: "Rootstock RBTC",
                    infrastructureSlug: "rootstock-rbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.RootstockRBTC} Rootstock is bridged to Solana via a LayerZero implementation.`,
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
    architectureReview: {
        title: "Alternative Blockchain Architecture",
        description: "Understand how alternative blockchains handle key infrastructure components",
        mechanisms: [
            {
                key: "data-availability",
                label: "Data Availability",
                description: "Solana stores all transaction data on-chain, making it available to anyone who runs a Solana validator node.",
                icon: "BitcoinIcon",
                color: "blue",
                tradeoffs: {
                    title: "Solana Data Availability",
                    subtitle: "How Solana stores and makes transaction data available",
                    mechanisms: [
                        {
                            name: "Validator Node Storage",
                            description: "All Solana transaction data is stored by validator nodes and made available to the network",
                            pros: [
                                "Anyone can run a Solana validator and access all data",
                                "Data is distributed across validator nodes globally",
                                "Integrated with Solana's proof-of-stake consensus"
                            ],
                            cons: [
                                "Relies on Solana's proof-of-stake security, not Bitcoin",
                                "High hardware requirements for validators",
                                "Data availability depends on Solana network health"
                            ],
                            networks: ["solana"]
                        }
                    ]
                },
                projects: ["solana"]
            },
            {
                key: "network-operators",
                label: "Network Operators",
                description: "Solana is operated by a distributed set of validators who stake SOL and participate in consensus to produce blocks.",
                icon: "NetworkIcon",
                color: "green",
                tradeoffs: {
                    title: "Solana Network Operators",
                    subtitle: "How Solana's proof-of-stake validators operate the network",
                    mechanisms: [
                        {
                            name: "Proof-of-Stake Validators",
                            description: "Solana validators stake SOL and participate in block production and validation using proof-of-history",
                            pros: [
                                "Over 1,000 validators securing the network",
                                "Permissionless - anyone can become a validator",
                                "High throughput with proof-of-history timestamps"
                            ],
                            cons: [
                                "High hardware requirements for validators",
                                "Validators can be slashed for malicious behavior",
                                "Not secured by Bitcoin's energy-intensive mining"
                            ],
                            networks: ["solana"]
                        }
                    ]
                },
                projects: ["solana"]
            },
            {
                key: "finality-guarantees",
                label: "Finality Guarantees",
                description: "Solana transactions achieve finality through its proof-of-stake consensus with proof-of-history timestamps.",
                icon: "ShieldIcon",
                color: "purple",
                tradeoffs: {
                    title: "Solana Finality",
                    subtitle: "How Solana achieves transaction finality",
                    mechanisms: [
                        {
                            name: "Proof-of-History Finality",
                            description: "Solana uses proof-of-history timestamps with proof-of-stake to achieve fast finality",
                            pros: [
                                "Very fast finality (~400ms for confirmation)",
                                "Proof-of-history provides verifiable passage of time",
                                "Economic security through validator slashing"
                            ],
                            cons: [
                                "Finality depends on validator honesty, not proof-of-work",
                                "Potential for network halts if consensus fails",
                                "Different security model than Bitcoin's probabilistic finality"
                            ],
                            networks: ["solana"]
                        }
                    ]
                },
                projects: ["solana"]
            }
        ]
    },
};

export default solana;
