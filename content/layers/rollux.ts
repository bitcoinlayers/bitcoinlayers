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
    RiskSummarySnippet,
    OtherIcons,
    Categorization,
} from "../props";

const rollux: LayerProject = {
    type: Type.Layer,
    slug: "rollux",
    title: "Rollux",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Other,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.UnderReview,
    ],
    btcLocked: 10,
    nativeToken: "SYS",
    feeToken: "SYS",
    notice: Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://rollux.com",
        },
        {
            text: Site.Docs,
            url: "https://docs.rollux.com/docs/developers",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.rollux.com",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/SYS-Labs/rollux",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/RolluxL2",
        },
    ],
    description:
        "Rollux is an optimistic rollup that uses Syscoin, two blockchains that are simultaneously merge-mined by bitcoin miners, as its base layer for data availability and state validation respectively. It has an EVM-compatible execution environment.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleUpgrade,
                content: RiskSummarySnippet.RiskSummaryImmediateUpgrade
            },
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs
            },
            {
                title: RiskSummarySnippet.TitleAltDA,
                content: RiskSummarySnippet.RiskSummaryAltDANetwork,
            },
            {
                title: RiskSummarySnippet.TitleCentralizedSequencer,
                content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
            }
        ],
        categorization: [
            {
                title: Categorization.NoBridgeTitle,
                content: Categorization.NoBridgeSnippet,
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
                    name: "BitGo WBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "wBTC on Rollux has a number of trust assumptions",
                    content: `${TokenSnippet.BitGowBTC}\n\nRollux’s L1 bridge contract, which facilitates the transfer of wBTC from Syscoin to Rollux, is immediately upgradeable by a multi-sig wallet with anonymous signers. The Rollux L1 contract lives on the Syscoin NEVM chain.`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "The Syscoin blockchain satisfies Rollux's data availability requirement",
            content:
                "The Rollux chain posts transaction data to Syscoin’s UTXO chain’s data availability solution, [PoDA](https://docs.syscoin.org/docs/tech/poda/). The Syscoin L1 is a merge-mined chain with Bitcoin.\n\nData availability is satisfied by blobs, meaning that Syscoin nodes only store data related to Rollux for at least six hours after finality is reached. After this period, it is deleted. PoDA does not shard data and requires full nodes to store the entire contents of a blob for a given time period. At least one archive node needs to archive the full contents of the blob to ensure Rollux’s historical state is intact.\n\nAfter receiving a blob from Rollux, the UTXO chain attests to the availability of data to the NEVM chain.\n\nOnly one non-pruned online node is needed to reconstruct the entire state of Syscoin and Rollux.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "Rollux is operated by a centralized sequencer with forced inclusion to the Syscoin L1 possible",
            content: ReviewSnippet.SelfSequenceMainAlt,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Rollux inherits finality guarantees from Syscoin",
            content: ReviewSnippet.FinalityAltRollupCentralizedProposer,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Rollux's data availability layer is merge-mined",
                    content: BitcoinSecuritySnippet.MergeMineDA,
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "An alternative token plays a role in network security",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "Fees and issuance are paid to miners who merge-mine Syscoin",
                    content: BitcoinSecuritySnippet.MergeMineDAFees,
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
                    title: "Users trust numerous operators to process their withdrawals",
                    content:
                        "Users trust that the centralized proposer will include their withdrawal request in the latest state root published to the Syscoin L1. They also trust that the controller of the wBTC contract will process their withdrawal request and that Syscoin miners will mine the burn transaction on the Syscoin chain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Merge-mining",
                    content:
                        "Merged mining is a crucial part of Syscoin’s (Rollux's parent chain) consensus mechanism that allows coupling between Bitcoin and Syscoin. Essentially, BTC mining pools add references to Syscoin blocks in mining jobs sent to mining participants. Additionally, because the Syscoin mining algorithm is the same as bitcoin’s, there is little added energy expenditure. This combined with miners earning a portion of transaction fees and newly issued SYS tokens from Syscoin block mining creates an incentive for providing security to both BTC and to Syscoin.",
                },
                {
                    title: "EVM-compatible",
                    content:
                        "Rollux uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its coding language, which is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Rollux is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on Rollux compared to other execution environments.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content:
                        "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
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
                        "Rollux’s [node implementation](https://github.com/sys-labs/rollux) is open-source.",
                },
            ],
        },
    ],
};

export default rollux;
