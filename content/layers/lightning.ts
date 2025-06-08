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
    RiskSummarySnippet,
} from "../props";

const lightning: LayerProject = {
    type: Type.Layer,
    slug: "lightning",
    title: "Lightning Network",
    entityType: EntityType.StateChannel,
    entityCategory: EntityCategory.BitcoinNative,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Low,
        RiskFactor.Low,
        RiskFactor.Low,
        RiskFactor.Low,
    ],
    btcLocked: 5208,
    nativeToken: "BTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://lightning.network",
        },
        {
            text: Site.Docs,
            url: "https://lightning.network/docs",
        },
    ],
    description:
        "The Lightning Network (often called Lightning) is a payment-channel-based Layer 2 protocol built on bitcoin. It enables users to open a payment channel with a counterparty and make an unlimited number of offchain payments within the channel. By routing payments across a network of interconnected nodes, users can reach recipients outside their specific channel.",
        riskSummary: [
            {
                title: "Users must watch for malicious channel closures",
                content: RiskSummarySnippet.RiskLightningChannel,
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
                    name: "Lightning BTC",
                    infrastructureSlug: "lightning-btc",
                    score: 0,
                    tier: RiskFactor.Low,
                    title: "Funds are secured in a 2-2 multisig with unilateral exit support for each counterparty",
                    content:
                        "When users open a payment channel, funds are deposited onchain into a 2-of-2 multisig address shared between the respective channel counterparties. \n\nUsers can collaboratively close a channel by signing and broadcasting a closing transaction which distributes the funds on bitcoin L1 based on the latest channel state. \n\nIf a counterparty is unresponsive during a cooperative channel closure attempt, a user can unilaterally enforce the process by broadcasting the most recent commitment transaction representing the latest balance distribution. There is a challenge-response mechanism to settle potential disputes between channel counterparties over the final state of a channel closure transaction.",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Channel state data is self-hosted by users",
            content:
                "Lightning Network users are solely responsible for preserving their channel state data, as the network does not provide data redundancy. Failure to maintain this data could result in a complete loss of funds stored in the channel.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Low,
            title: "Network operators run nodes to route Lightning payments, with node operation being permissionless. Single-node failures do not compromise payment reliability",
            content:
                "Users in the Lightning Network interact directly with their channel counterparties, bypassing the need for block builders or sequencers. Payments to other recipients are routed through a decentralized network of nodes.\n\nIf a route fails due to a node operator being offline, users can route via an alternative channel.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Low,
            title: "Lightning transactions are atomic and settle instantly. Finality occurs with channel closure",
            content:
                "Transactions on the Lightning Network use HTLCs to ensure atomicity, meaning they either succeed completely or fail entirely. Once settled, they are irreversible. Finality on Bitcoin occurs only when a channel is closed, at which point the agreed-upon state is validated and enforced by Bitcoin consensus, allowing for fund withdrawal.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Settlement is finalized by Bitcoin consensus",
                    content:
                        "Settlement is optimistically finalized through bitcoin consensus.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content:
                        "Lightning does not enable malicious MEV on Bitcoin because all transactions occur off-chain, leaving miners unable to influence transaction ordering.",
                },
                {
                    title: "No alternative token needed for network security",
                    content:
                        "Lightning does not use another token for network security.",
                },
                {
                    title: "Opening and closing channels contributes to the security budget",
                    content:
                        "Lightning does not directly contribute to bitcoin’s security budget, but users do pay onchain transaction fees to miners when opening and closing LN channels.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users can unilaterally withdraw their funds with optimistic settlement guarantees",
                    content:
                        "Collaborative closure: Users can close a channel collaboratively by agreeing on the final state of the channel and withdraw funds directly to their respective onchain addresses.\n\nUnilateral closure: A malicious user may attempt to steal channel funds by broadcasting an outdated channel state. If the counterparty (or their watchtower) is online, they can broadcast a penalty transaction onchain using the revocation secret to counteract the fraud attempt, reclaims the full channel balance, and penalizes the malicious actor.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Payment channels",
                    content:
                        "Payment channels are 2-2 multisig addresses on bitcoin L1 that allow two counterparties to lock funds and process an unlimited number of offchain payments between each other. Payments achieve finality only when a channel is closed and funds are settled onchain. Opening and managing one or more payment channels is how a user interacts with the Lightning Network.",
                },
                {
                    title: "Payment routing",
                    content:
                        "The Lightning Network consists of interconnected two-party payment channels. Users can route payments across intermediary nodes to reach the intended recipient. Routing is enforced by HTLCs, ensuring payment atomicity and security.",
                },
                {
                    title: "Hashed Timelock Contracts (HTLCs)",
                    content:
                        "Hashed Timelock Contracts (HTLCs) are smart contracts that enable atomic and conditional payments on the Lightning Network. They lock funds using two conditions: a cryptographic hash and a time limit. To unlock the funds, the recipient must provide the secret preimage matching the hash; otherwise, funds are returned automatically to the sender after the time limit expires. HTLCs facilitate secure payment routing across multiple nodes, ensuring funds cannot be misappropriated by intermediaries. The preimage, created by the recipient when generating an invoice, ensures that only they can complete the payment.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Micro-transactions",
                    content:
                        "Once channels are established, payments occur offchain without requiring paying fees for bitcoin miners, enabling low-cost transactions. This makes Lightning well-suited for small, high frequency transactions.",
                },
                {
                    title: "Faster transactions",
                    content:
                        "With near-instant confirmations enabled through offchain processing and p2p consensus, Lightning is optimized for rapid payments.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "UX friction leading users to centralized solutions",
                    content:
                        "Non-technical users can find it challenging to self-host a Lightning node, often driving them towards custodial solutions. This trend contributes to liquidity and network centralization, as users rely on intermediaries instead of interacting directly. A 2024 report from River found that 80% of Lightning Network liquidity resides in channels managed by centralized service providers.",
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
                        "There are multiple free and open-source implementations of the Lightning Network protocol.",
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
                        "[Lightning Network paper](https://lightning.network/lightning-network-paper.pdf)\n[Lightning Network user guide](https://bitcoiner.guide/lightning/)",
                },
            ],
        },
    ],
};

export default lightning;
