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

const rollux: LayerProject = {
    type: Type.Layer,
    slug: "rollux",
    title: "Rollux",
    entityType: EntityType.SidechainRollup,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.Medium,
    ],
    btcLocked: 10,
    nativeToken: "SYS",
    feeToken: "SYS",
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
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Rollux does not have a consensus-level bridge with bitcoin",
            content:
                "The Rollux L2 does not currently have a direct bridge with the Bitcoin mainchain. The only Bitcoin synthetic on Rollux is a wBTC contract. The contract is an upgradeable contract managed by a specific address, the controller, on the Syscoin L1, the blockchain that Rollux settles to. wBTC can be deposited onto Rollux by way of Ethereum, Polygon PoS, and Binance Smart Chain. The controller of this address is responsible for minting and burning tokens related to the wBTC contract.\n\nRollux’s L1 bridge contract, which facilitates the transfer of wBTC from Syscoin to Rollux, is immediately upgradeable by a multi-sig wallet with anonymous signers.\n\nThe Rollux L1 contract lives on the Syscoin NEVM chain.",
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
            content:
                "The Rollux chain is operated by a centralized sequencer. Users can be censored by the centralized sequencer and the chain can have liveness failures if the sequencer goes offline.\n\nForced inclusion to the Syscoin L1 is possible. Users are able to have their transaction included in a sequence by submitting it to the L1 smart contract.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Rollux inherits finality guarantees from Syscoin",
            content:
                "The Rollux sequencer provides a soft confirmation of transactions which are eventually summarized and sent to Syscoin.\n\nRollux's sequencer can reorg prior to a transaction batch being accepted on Syscoin.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Unilateral exits to Bitcoin not possible",
                    content:
                        "Users cannot exit from Rollux to Bitcoin at all, as there is no bridge; they must instead withdraw to Syscoin and then to Bitcoin. Users cannot unilaterally exit from the Syscoin with an L1 Bitcoin transaction. They currently trust centralized operators to process their withdrawals.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content:
                        "Rollux does not leak MEV to the Bitcoin L1. Users trust the centralized sequencer to not extract MEV from their transactions.",
                },
                {
                    title: "An alternative token plays a role in network security",
                    content:
                        "Rollux’s gas fees and data availability fees are paid in [SYS](https://www.coingecko.com/en/coins/syscoin).",
                },
                {
                    title: "Fees and issuance are paid to miners who merge-mine Syscoin",
                    content:
                        "Fees associated with Rollux’s data availability are paid to Bitcoin miners who optionally merge-mine Rollux’s data availability layer, Syscoin.",
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
