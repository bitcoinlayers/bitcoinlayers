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
    BitcoinSecuritySnippet,
    TechnologySnippet,
    UseCaseSnippet,
    RiskSummarySnippet,
} from "../props";

const fractal: LayerProject = {
    type: Type.Layer,
    slug: "fractal",
    title: "Fractal",
    entityType: EntityType.MergeMined,
    entityCategory: EntityCategory.Integrated,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: NaN,
    nativeToken: "FB",
    feeToken: "FB",
    notice: Notice.ClaimBitcoinLayer,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.fractalbitcoin.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.fractalbitcoin.io",
        },
        {
            text: Site.Explorer,
            url: "https://www.okx.com/web3/explorer/fractal-bitcoin",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/fractal-bitcoin/fractald-release",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/fractal_bitcoin",
        },
    ],
    description:
        "Fractal is a Bitcoin sidechain purpose built to scale bitcoin-native applications like Runes and BRC-20s. It leverages a novel consensus mechanism similar to merge-mining.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs,
            },
            {
                title: RiskSummarySnippet.TitleAlternativeL1,
                content: RiskSummarySnippet.RiskSummaryAlternativeL1,
            }
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
                    name: "Simple sBTC",
                    infrastructureSlug: "simple-sbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "BTC backing the asset is held in a 3/5 multisig",
                    content: TokenSnippet.SimpleSBTC,
                },
                {
                    name: "Bool bBTC",
                    infrastructureSlug: "bool-bbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Fractal relies on a third party for bridge infrastructure",
                    content: TokenSnippet.BoolBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "DA requirement satisfied by Fractal full nodes",
            content: ReviewSnippet.AltL1DAPOW,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Blocks are produced by two distinct miner sets",
            content:
                "Fractal inherits probabilistic finality from its operator set. It implements a mining mechanism called “cadence mining” that sees every ⅓ blocks merge-mined by bitcoin miners, and ⅔ blocks mined by miners running Fractal’s mining software. This sees Fractal run two different mining algorithms catered to two different operator sets.\n\nFractal blocks are considered finalized after a sufficient amount of hashrate has built on top of the longest chain.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Fractal full nodes validate proposed blocks",
            content: ReviewSnippet.AltL1FinalityPOW,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Fractal is partially merge-mined",
                    content:
                        "Fractal is partially secured by bitcoin miners who merge-mine fractal as a part of its cadence mining set up.",
                },
                {
                    title: "MEV not directly on bitcoin",
                    content: BitcoinSecuritySnippet.MergeMineMEV,
                },
                {
                    title: "FB token used for fees and to incentivize miners",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "Merge-mining enables Bitcoin miners to earn more fees",
                    content: BitcoinSecuritySnippet.MergeMineFees,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "The Fractal blockchain is growing at a fast rate",
                    content:
                        "The Fractal blockchain is growing at a rate much faster than that of Bitcoin. As the blockchain continues to grow, it becomes more difficult for users to run Fractal full nodes. This might see the majority of users pass on the data availability requirement onto another party.",
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content:
                        "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust sidechain consensus and third party bridge providers with withdrawals",
                    content:
                        "Withdrawals from Fractal, like any sidechain, users would need to trust the operators of the Fractal chain and the bridge operator, the Bool Network, to process their withdrawal transaction and release funds on the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Bitcoin Script",
                    content: `${TechnologySnippet.BitcoinScript}\n\nFractal is based on Bitcoin Script.`
                },
                {
                    title: "OP_CAT",
                    content: TechnologySnippet.OP_CAT,
                },
                {
                    title: "Merge-mining",
                    content: TechnologySnippet.MergeMining,
                },
                {
                    title: "Cadence mining",
                    content:
                        "Cadence mining is a novel mining mechanism that sees ⅓ of Fractal blocks mined by bitcoin miners who merge-mine Fractal, and ⅔ of Fractal blocks mined by its own miner set. Thus, the security of Fractal mining is dependent on two distinct operator sets.\n\nBitcoin miners who want to merge-mine Fractal point some of their hashrate to secure the Fractal chain. Fractal miners run a distinct mining software that sees them leverage a different difficulty adjustment.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Tokenized UTXO applications",
                    content: UseCaseSnippet.UTXOTokenizedApplications,
                },
                {
                    title: "Testing ground for new opcodes",
                    content: UseCaseSnippet.TestingGround,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content:
                        "The source code for Fractal's node implementation is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Fractal block explorer.](https://fractal.unisat.io/explorer)",
                },
            ],
        },
    ],
};

export default fractal;
