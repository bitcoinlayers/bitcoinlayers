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
    AtlSnippet,
    BitcoinSecuritySnippet,
    TechnologySnippet,
    UseCaseSnippet,
    RiskSummarySnippet,
} from "../props";

const ethereum: LayerProject = {
    type: Type.Layer,
    slug: "ethereum",
    title: "Ethereum",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://ethereum.org/",
        },
        {
            text: Site.Docs,
            url: "https://ethereum.org/en/developers/docs/",
        },
        {
            text: Site.Explorer,
            url: "https://etherscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ethereum",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/ethereum",
        },
    ],
    description:
        "Ethereum is an alternative blockchain that supports a number of wrapped BTC tokens. Ethereum is home to the EVM execution environment which supports more expressive smart contracts.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
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
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BitGowBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "BTC users trust that tBTC will remain backed on Ethereum",
                    content: TokenSnippet.ThresholdtBTC,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.FederationPeg,
                    content: TokenSnippet.LombardLBTC,
                },
                {
                    name: "Coinbase cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.CoinbasecbBTC,
                },
                {
                    name: "Kraken KBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.KrakenKBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BedrockUniBTC,
                },
                {
                    name: "PumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.PumpBTC,
                },
                {
                    name: "FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.FireBTC,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.SolvBTC,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: TokenSnippet.xSolvBTC,
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: TokenSnippet.SolvBTCENA,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.LorenzostBTC,
                },
                {
                    name: "Acorn aBTC",
                    infrastructureSlug: "acorn-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.AcornaBTC,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.babypie,
                },
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BinanceBTCB}${TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Obelisk oTCB",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.ObeliskoBTC}${TokenSnippet.smartcontractreview},`
                },
                {
                    name: "IBTC Network iBTC",
                    infrastructureSlug: "ibtcnetwork-ibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.ibtcnetworkibtc}`
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.xlink}${TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Avalanche BTC.b",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.AvalancheBTCb}${TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Bedrock brBTC",
                    infrastructureSlug: "bedrock-brbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "Badger eBTC",
                    infrastructureSlug: "badger-ebtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "21 Shares BBTC",
                    infrastructureSlug: "21shares-btc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "pStake yBTC",
                    infrastructureSlug: "pstake-ybtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "Lorenzo enzoBTC",
                    infrastructureSlug: "lorenzo-enzobtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "Manta mBTC",
                    infrastructureSlug: "manta-mbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
            ],
        },
    ],
    sections: [],
    architectureReview: {
        title: "Ethereum Architecture",
        description: "Understand how Ethereum handles key infrastructure components compared to Bitcoin",
        mechanisms: [
            {
                key: "data-availability",
                label: "Data Availability",
                description: "Ethereum stores all transaction data on-chain, making it available to anyone who runs an Ethereum full node.",
                icon: "BitcoinIcon",
                color: "blue",
                tradeoffs: {
                    title: "Ethereum Data Availability",
                    subtitle: "How Ethereum stores and makes transaction data available",
                    mechanisms: [
                        {
                            name: "Full Node Storage",
                            description: "All Ethereum transaction data is stored by full nodes and made available to the network",
                            pros: [
                                "Anyone can run an Ethereum node and access all data",
                                "Data is distributed across thousands of nodes globally",
                                "Integrated with Ethereum's proof-of-stake consensus"
                            ],
                            cons: [
                                "Relies on Ethereum's proof-of-stake security, not Bitcoin",
                                "Node storage requirements grow over time",
                                "Data availability depends on Ethereum network health"
                            ],
                            networks: ["ethereum"]
                        }
                    ]
                },
                projects: ["ethereum"]
            },
            {
                key: "network-operators",
                label: "Network Operators",
                description: "Ethereum is operated by a distributed set of validators who stake ETH and participate in consensus to produce blocks.",
                icon: "NetworkIcon",
                color: "green",
                tradeoffs: {
                    title: "Ethereum Network Operators",
                    subtitle: "How Ethereum's proof-of-stake validators operate the network",
                    mechanisms: [
                        {
                            name: "Proof-of-Stake Validators",
                            description: "Ethereum validators stake 32 ETH and participate in block production and validation",
                            pros: [
                                "Over 900,000 validators securing the network",
                                "Permissionless - anyone can become a validator",
                                "Economic incentives align validators with network security"
                            ],
                            cons: [
                                "Requires 32 ETH stake (~$100k+ at current prices)",
                                "Validators can be slashed for malicious behavior",
                                "Not secured by Bitcoin's energy-intensive mining"
                            ],
                            networks: ["ethereum"]
                        }
                    ]
                },
                projects: ["ethereum"]
            },
            {
                key: "finality-guarantees",
                label: "Finality Guarantees",
                description: "Ethereum transactions achieve finality through its proof-of-stake consensus when 2/3 of validators confirm a block.",
                icon: "ShieldIcon",
                color: "purple",
                tradeoffs: {
                    title: "Ethereum Finality",
                    subtitle: "How Ethereum achieves transaction finality",
                    mechanisms: [
                        {
                            name: "Proof-of-Stake Finality",
                            description: "Ethereum transactions finalize when 2/3 of validators attest to a block",
                            pros: [
                                "Fast finality (~12-15 minutes for full finality)",
                                "Deterministic finality once 2/3 validators agree",
                                "Economic security through validator slashing"
                            ],
                            cons: [
                                "Finality depends on validator honesty, not proof-of-work",
                                "Potential for long-range attacks if >1/3 validators are malicious",
                                "Different security model than Bitcoin's probabilistic finality"
                            ],
                            networks: ["ethereum"]
                        }
                    ]
                },
                projects: ["ethereum"]
            }
        ]
    },
};

export default ethereum;