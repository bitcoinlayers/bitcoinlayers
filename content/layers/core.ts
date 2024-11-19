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

const core: LayerProject = {
    type: Type.Layer,
    slug: "core",
    title: "Core",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 6705,
    nativeToken: "CORE",
    feeToken: "CORE",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://coredao.org",
        },
        {
            text: Site.Docs,
            url: "https://docs.coredao.org",
        },
        {
            text: Site.Explorer,
            url: "https://scan.coredao.org",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/coredao-org",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/Coredao_Org",
        },
    ],
    description:
        "Core (in relation to Bitcoin) is an EVM sidechain with a hybrid consensus mechanism, Satoshi Plus, that leverages both DPoW and DPoS. It uses a federated multisig to bridge BTC with multiple parties ensuring the honesty of the two-way peg. The native token of the network is CORE, which is used for transaction fees, staking, and governance in Core DAO.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Funds are custodied by a federated signer set, with a number of parties ensuring the honesty of the bridge",
            content:
                "Users trust various parties in maintaining the honesty of Core’s bridge with Bitcoin. Lockers are the party responsible for securing the bitcoin that backs coreBTC on Core Chain. These actors stake collateral, in the form of Core tokens, in order to participate as a Locker. In the event of maliciously moving bitcoin from the multi-sig, or being unable to fulfill withdrawals, Lockers would be slashed and lose the collateral they posted.\n\nOther parties in the bridge set up are responsible for monitoring the Locker’s activity and initiating the slashing process.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data availability requirement fulfilled by Core chain full nodes",
            content:
                "Core Chain's data availability requirement is fulfilled by its own network of full nodes. Anyone with enough computational resources can run a Core Chain full node.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Core's hybrid consensus mechanism operates the network",
            content:
                "Core Chain has a network of validators who participate as block producers. Each day, the 23 validators with the highest hybrid score (from DPOW and DPOS) are elected to participate in block production. Any Core chain full node can register to become a part of this set. Core Chain does not support exits that circumvent its validator set. This means that users must trust Core Chain validators to propose and finalize blocks.\n\nThere is a minimum stake to run a Core Chain validator node.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Transaction finality is provided by Core Chain consensus and has no assurances inherited from Bitcoin",
            content:
                "State transitions are finalized by Core Chain's consensus mechanism. All roles in this mechanism are minimally permissionless.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Core indirectly inherits security from Bitcoin consensus participants",
                    content:
                        "As a part of its hybrid consensus mechanism, Bitcoin miners can delegate hashrate to Core validators to improve their overall voting power.",
                },
                {
                    title: "Core Chain requires another token to function",
                    content:
                        "The CORE token is required to pay for transaction fees and smart contract execution on Core Chain. It is also used for staking and governance. The token is directly required for the security of the network, as the staking of it is one of the two variables used to create a weighted score for validator election and leader selection.",
                },
                {
                    title: "No MEV introduced on Bitcoin",
                    content:
                        "Core Chain does not introduce any MEV on Bitcoin. Users trust Core Chain validators to not extract MEV.",
                },
                {
                    title: "Core Chain indirectly contributes to the security budget.",
                    content:
                        "Core validators will reward miners who delegated their hashrate to them with newly issued CORE tokens.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Withdrawals from coreBTC rely on several permissionless roles.",
                    content:
                        "Core Chain’s consensus-enshrined bridged BTC, coreBTC, relies on several roles for withdrawals, although they are all permissionless. It also relies on the liveness of Core Chain, as one of those roles is a set of smart contracts on Core Chain.",
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
                        "Core Chain uses the Ethereum Virtual Machine (EVM) for its execution environment. While this environment was initially created for Ethereum, it has been adopted by many other networks.\n\nLike many other Bitcoin sidechains, Core Chain leverages the EVM to tap into existing developer resources and tooling.",
                },
                {
                    title: "coreBTC",
                    content:
                        "coreBTC is a native bridged BTC. Several roles are involved in the burning and minting of coreBTC.\n\nLockers hold BTC after minting and distribute it after burning. They must be overcollateralized at risk of liquidation by Liquidators. Other roles are involved as well, such as Guardians, Bitcoin Light Clients, Slashers, Relayers, and Verifiers.",
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
                    content: "Core's node implementation is open-source.",
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
                        "[Understanding Core Chain by Messari](https://messari.io/report/understanding-core-chain)\n[Core Chain Whitepaper](https://github.com/coredao-org/whitepaper/blob/main/COREWhitepaper_v1.0.6.pdf)",
                },
            ],
        },
    ],
};

export default core;
