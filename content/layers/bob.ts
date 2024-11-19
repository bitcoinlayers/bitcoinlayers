import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskCategory,
} from "../props";

const bob: LayerProject = {
    type: Type.Layer,
    slug: "bob",
    title: "BOB",
    entityType: EntityType.EthereumRollup,
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
    btcLocked: 974,
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.gobob.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.gobob.xyz",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/bob-collective/bob",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/build_on_bob",
        },
    ],
    description:
        "BOB is an optimistic rollup that serves as an application layer for Bitcoin. They have launched as a rollup on top of Ethereum, with plans to derive more security from Bitcoin miners, and full nodes, over time. Its relation to Bitcoin, currently, is similar to that of a sidechain as it is an alternative consensus protocol with a two-way peg(s) between it and the Bitcoin mainchain.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Bitcoin users trust that bitcoin synthetics will remain backed, and that the BOB bridge will not steal their funds",
            content:
                "tBTC and wBTC are minted on BOB via its official Ethereum bridge.\n\nUsers trust that the bridge operators will not steal their BTC, the BOB proposer to not publish a malicious, unchallenged state transition, or the admin controlling the bridge to create a malicious smart contract upgrade.\n\nIn the event of a malicious smart contract upgrade, there is no exit window for BOB users. This means that the admin behind the bridge can steal all funds in the official bridge.\n\n🔬We are currently reviewing other bitcoin synthetics minted on BOB.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content:
                "The data for BOB’s state is stored on the Ethereum blockchain. Anyone can run an Ethereum node and verify the state of BOB.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "BOB blocks are produced and proposed by a centralized operator, but forced inclusion to Ethereum L1 possible",
            content:
                "Currently, BOB’s sequencer is managed by one entity. The BOB sequencer can censor transactions and would also cause liveness failures if it went down. Users can bypass the sequencer and send their transactions directly to the Ethereum L1. Users do, however, trust that a permissioned proposer will publish the latest state root on the Ethereum L1, permitting withdrawals.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "BOB state transitions finalize on Ethereum",
            content:
                "BOB inherits finality guarantees from Ethereum. The BOB sequencer provides a soft confirmation of transactions which are eventually summarized and sent to Ethereum.\n\n⚠️BOB's sequencer can reorg prior to a transaction batch being accepted on Ethereum.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "BOB does not inherit any security from Bitcoin",
                    content:
                        "In its current state, BOB does not inherit security from Bitcoin.",
                },
                {
                    title: "ETH token used to pay fees",
                    content:
                        "BOB users pay sequencer fees in ETH. BOB operators also pay DA fees in ETH.",
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content:
                        "BOB does not introduce any MEV on the Bitcoin L1. Users trust the BOB sequencer to not reorder their transactions to extract MEV.",
                },
                {
                    title: "BOB does not contribute to the security budget",
                    content:
                        "BOB does not currently contribute to the Bitcoin security budget.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Proposer role centralized and permissioned. BTC users must withdraw to Ethereum L1 before withdrawing to Bitcoin",
                    content:
                        "Users can bypass the sequencer and submit withdrawal requests directly to the Ethereum L1. However, they cannot force-exit as the self-proposing is not enabled. Users rely on the proposer to post updated state roots to Ethereum to ensure withdrawals can be processed. Withdrawals from BOB's official bridge to Ethereum take 7 days to finalize.\n\nOnce on the Ethereum L1, users can then redeem their BTC on Bitcoin via the two-way peg mechanism that their BTC synthetic is supported by.\n\nUsers primarily trust bridge operators to permit withdrawals back to the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content:
                        "BOB uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. BOB is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on BOB compared to other execution environments.",
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
                    title: "Under review",
                    content:
                        "We are reviewing if BOB's node software is open-source.",
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
                        "[This document outlines the privileged roles who play a role in managing various components of the BOB chain](https://docs.gobob.xyz/docs/learn/security/privileged-roles)\n[A risk review of the OP Mainnet chain on Ethereum, which has similar trust assumptions as the BOB chain as BOB is built on the OP Stack](https://l2beat.com/scaling/projects/optimism)\n[A blog covering R&D areas related to Bitcoin security on BOB.](https://mirror.xyz/0xE4dF449bDC1ec8f7688F68F7E839f1370617Ac73/UvQH9D3RyVcozOlz091gLKnbX8aqn8goFVYtHVmin-w)\n[BOB's TVL breakdown, including total BTC locked.](https://l2beat.com/scaling/projects/bob/tvl-breakdown)",
                },
            ],
        },
    ],
};

export default bob;
