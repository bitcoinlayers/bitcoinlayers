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

const internetcomputer: LayerProject = {
    type: Type.Layer,
    slug: "internetcomputer",
    title: "Internet Computer",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.High,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 277,
    nativeToken: "ICP",
    feeToken: "ckBTC",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://internetcomputer.org/bitcoin-integration",
        },
        {
            text: Site.Docs,
            url: "https://internetcomputer.org/docs/current/references/bitcoin-how-it-works",
        },
        {
            text: Site.Explorer,
            url: "https://dashboard.internetcomputer.org/bitcoin",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/dfinity/bitcoin-canisteri",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/dfinity",
        },
    ],
    description:
        "The Internet Computer Protocol (ICP) is a network of connected subnet blockchains. It has a smart contract module, known as the Bitcoin Canister, that enables ICP smart contracts to have a view into Bitcoin state and conduct Bitcoin transactions. It additionally has a bitcoin-backed synthetic, known as ckBTC, which sees signers of a multi-sig scheme custody BTC and mint and burn synthetic ckBTC tokens on ICP. Developers can deploy a variety of applications leveraging the Bitcoin canister and ckBTC.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Funds are custodied by signer set selected by ICP consensus",
            content:
                "Users who deposit funds into ckBTC trust a set of operators, who are elected via ICP governance, with the custody of their bitcoin. The operators of the ‘pzp6e…’ subnet manage the “ckBTC” smart contract module, which is responsible for minting, custodying and burning bitcoin-backed tokens on the ICP sidechain.\n\nThis smart contract is a part of a subnet with 34 node operators. These operators have undergone a KYB process to ICP governance and are publicly known.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "DA requirement is fulfilled by an alternative consensus mechanism, but node operation is not permissionless",
            content:
                "Data regarding the state of the ‘pzp6e…’ is made available, and stored, by the 34 individual node operators running the subnet. Should nodes for this subnet go offline, and a backup of the state is not regularly made, then users would lose access to their ckBTC balance and would be unable to burn ckBTC tokens for Bitcoin locked in the respective multi-sig on the mainchain.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Numerous roles involved in block building and ckBTC transaction settlement",
            content:
                "Settlement for ckBTC transfers is a result of consensus for the ‘pzp6e…’ subnet operators. Once a transaction is finalized, it cannot be reorged. Users can leverage their ckBTC on any ICP subnet per the applications they interact with. Users would initiate a “call” to a specific application on any given subnet and a boundary node would route that call accordingly. The contract would then receive the call, initiate the transaction, and see the transaction confirmed should 2 ⁄ 3 of node operators on the given subnet accept it. This sees liveness trust assumptions vary from subnet to subnet. Bitcoin-specific applications would additionally be dependent on the Bitcoin Canister which is on the ‘w4rem…’ subnet, operated by 13 nodes. The 22 Boundary Nodes are managed by a centralized development organization, the DFINITY Foundation.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Finality assurances are provided by an alternative consensus mechanism",
            content:
                "After transactions are accepted into a block by a subnet's validator set, they cannot be reversed.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "ICP does not inherit security from bitcoin consensus",
                    content:
                        "ICP has no relationship with bitcoin consensus participants.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin.",
                    content:
                        "ICP’s Bitcoin module is a separate consensus network and has no direct relationship with Bitcoin, and thus does not introduce MEV at the base layer.",
                },
                {
                    title: "An alternative token plays a role in network security",
                    content:
                        "ICP’s network security depends on a governance model that leverages the ICP token for voting. Validators are incentivized with newly issued ICP tokens to run validators. Users do not pay any fees for transactions on ICP subnets.",
                },
                {
                    title: "ICP does not directly contribute to the security budget",
                    content:
                        "ICP does not currently pay fees to Bitcoin miners.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Withdrawals are permitted by a specific ICP subnet",
                    content:
                        "Withdrawals are ultimately processed by the operators of the ‘pzp6e’ subnet which manages the ckBTC smart contract. Users trust that at least 12 of the 34 signers will remain honest, not steal their funds, and process their withdrawals. If the Bitcoin Canister were to go offline, the ckBTC smart contract would be unable to issue withdrawals for users looking to burn ckBTC and redeem native bitcoin. Withdrawals would be paused until the Bitcoin Canister's subnet came back online.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Bitcoin Canister & Adapter",
                    content:
                        "The ICP network maintains an integration with Bitcoin. The ICP network has a subnet dedicated to the Bitcoin Canister and Adapter. The Bitcoin Canister enables subnets on the ICP blockchain to interact with the bitcoin network. They can have Bitcoin addresses, sign transactions and submit transactions to the bitcoin network. The Bitcoin Adapter enables the Bitcoin Canister to access Bitcoin state by querying a randomly selected set of Bitcoin nodes periodically.",
                },
                {
                    title: "Various programming languages and modules supported",
                    content:
                        "The ICP network supports a variety of programming languages and modules. Due to the multi-subnet architecture of ICP, there is no enshrined programming language. Developers can build on top of the subnet that best supports their individual use case. The two primary languages used for developing in ICP are Rust and Mokoto. ICP modules can also support more expressive smart contracts than the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Ordinals, Runes, & BRC-20 trading",
                    content:
                        "Through the Bitcoin Canister and Bitcoin Adapter, ICP can support the creation of Runes, BRC-20 and Ordinals marketplaces. Application developers can deploy on ICP for improved performance of their applications.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code related to bitcoin modules are open source",
                    content:
                        "Modules relevant to ICP’s integration with Bitcoin are open source.",
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
                        "[ICP Developer Docs](https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp)\n[Overview on ckBTC](https://wiki.internetcomputer.org/wiki/Chain-key_Bitcoin)",
                },
            ],
        },
    ],
};

export default internetcomputer;
