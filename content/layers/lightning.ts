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

const lightning: LayerProject = {
    type: Type.Layer,
    slug: "lightning",
    title: "Lightning Network",
    entityType: EntityType.StateChannel,
    live: LiveStatus.Mainnet,
    staking: false,
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
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://lightning.network/",
        },
        {
            text: Site.Website,
            url: "https://docs.corelightning.org/docs/home",
        },
        {
            text: Site.Docs,
            url: "https://docs.corelightning.org/docs/home",
        },
        {
            text: Site.Explorer,
            url: "https://github.com/ACINQ/eclair",
        },
        {
            text: Site.GitHub,
            url: "https://twitter.com/lightning",
        },
    ],
    description:
        "The Lightning Network (sometimes known as Lightning) is a payment-channel-based Layer 2 for payments. It enables users to open a payment channel with a counterparty and make an unlimited number of payments within the channel. It also enables users to route payments across a network of these channels to users outside of their specific channel.",
    riskAnalysis: [
        {
            category: RiskCategory.BridgeSecurity,
            score: 0,
            tier: RiskFactor.Low,
            title: "Users custody their funds with their counterparty",
            content:
                "When a user opens a payment channel, they deposit their funds into a 2-2 multi-signature address with their counterparty via an onchain Bitcoin transaction. This address holds the funds that are transferred within the channel, and users can collaboratively exit a channel by agreeing on a final state before signing off on withdrawals.\n\nIf a channel counterparty is unresponsive to a cooperative channel closure attempt, then users can unilaterally exit the channel by spending an uncooperative channel closure transaction onchain. There is a challenge-response mechanism to settle potential disputes between channel counterparties over the final state of a channel closure transaction.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Users are responsible for fulfilling the data availability requirement. State data is self-hosted by default",
            content:
                "Lightning users must be responsible for their own data availability, rather than relying on a network of nodes to complete this function. If users irrecoverably lose their channel state data, then they will lose all of the funds they had in the channel.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Low,
            title: "Lightning transactions are done via a peer-to-peer network",
            content:
                "In a payment channel, users interact in a peer-to-peer fashion, meaning no sequencer or block builder is needed. If a user wants to transfer funds to someone who is not in their specific channel, they can route their payment across a network of nodes to reach the receiver. If a channel counterparty fails to route the payment, the user will have to go through another channel (if they have another open, and there is a route to the recipient) or back onchain to transfer funds to the intended recipient.\n\nRouted payments are atomic, meaning all components of the transaction either fully succeed or fail together.\n\nLightning Network transactions are only considered final when a channel is closed. Bitcoin consensus enforces this closure as it would any other transaction. When closing a channel, users can collaboratively sign off on a final state, have this state validated by Bitcoin consensus, and then proceed to withdraw their funds.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Low,
            title: "Users can challenge a malicious counterparty",
            content:
                "Transactions on the Lightning Network happen atomically via HTLCs. Once confirmed, they cannot be reversed. Users can also ensure finality when closing a channel with their counterparty.",
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
                        "As mentioned in the risk analysis, settlement is optimistically finalized by Bitcoin consensus.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content:
                        "Lightning does not enable malicious forms of MEV on Bitcoin. Since all transactions are done offchain within a payment channel, miners are unable to influence the ordering of transactions done via Lightning.",
                },
                {
                    title: "No alternative token needed for network security",
                    content:
                        "Lightning does not use another token for network security.",
                },
                {
                    title: "Opening and closing channels contributes to the security budget",
                    content:
                        "Lightning does not directly contribute to Bitcoin’s security budget, but users do pay onchain transaction fees to miners when they open, and close, Lightning channels. .",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Self-hosted DA friction leading users to centralized solutions",
                    content:
                        "Non-technical users may find it difficult to self-host their own Lightning node, which can lead them to use custodial solutions. This can lead to a centralization of the network, as users are not interacting directly. A 2024 report from River found that 80% of Lightning Network liquidity is in channels hosted by centralized service providers.",
                },
                {
                    title: "Replacement cycling attacks",
                    content:
                        "A vulnerability was disclosed in 2023, referred to as a replacement cycling attack. This attack requires two open channels with a user which are used together to cycle transactions a user for the duration of their challenge period",
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
                        "Users can close a channel and withdraw their funds at any time. They can close a channel collaboratively with their counterparty by agreeing on the final state of the channel and withdrawing their balances to their respective addresses. In the event of a dispute over the final state, the Lightning Network’s model is optimistic. A malicious user can attempt to steal channel funds by submitting a channel closure transaction with an old state. If their counterparty is offline with no watchtower for the entire duration of the challenge period then the old state will be finalized, allowing the theft to succeed. If the counterparty, or their watchtower, is online during the challenge period, then they can submit a challenge transaction onchain that will stop the theft attempt and sweep the full balance of the channel that was incorrectly closed. Users should be aware that the cost of challenging an incorrect channel closure attempt could eat significantly into the channel balance, to the point of being uneconomical, if bitcoin fee rates are prohibitively expensive. Users should also be aware that if they are unable to confirm their challenge transaction before the end of the challenge period, for example because their transaction is being withheld by bitcoin miners, then they risk losing the full balance of their channel to their counterparty.",
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
                        "Payment channels are 2-2 multi-signature addresses that enable two counterparties to lock funds into an address, and process an unlimited number of payments between each other. Payments are considered final when the parties withdraw their funds back onchain and close their channel. Creating and managing one or more payment channels lis how a user interacts with Lightning.",
                },
                {
                    title: "Network routing",
                    content:
                        "Lightning is a network of various two-party payment channels. Users can route their payments across a variety of channels to reach a final destination (the recipient). Atomicity is enforced via a script that ensures that the transaction either reaches its intended recipient, or it fails entirely.",
                },
                {
                    title: "Hashed Timelock Contracts (HTLCs)",
                    content:
                        "HTLCs are smart contracts that ensure conditional and atomic payments. HTLCs are used in Lightning to enable transaction routing across multiple nodes. These contracts are designed in a way that sees routed payments happen atomically; meaning the payment either succeeds or fails entirely. Routing nodes are unable to misappropriate funds as they are unable to reveal a secret preimage which is conditional to the transaction being finalized. Only the intended receiver has access to the secret preimage which was created when they generated the transaction’s invoice.",
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
                        "With its low fees, Lightning is well-suited for small or high frequency transactions.",
                },
                {
                    title: "Faster transactions",
                    content:
                        "With its near-immediate confirmations due to being offchain and using P2P consensus, Lightning is well-suited for fast transactions.",
                },
                {
                    title: "Interoperability",
                    content:
                        "Lightning can act as an interoperability layer between blockchain protocols and bridge operators.",
                },
                {
                    title: "Lightning Service Providers (LSP)",
                    content:
                        "A LSP deploys liquidity in Lightning on behalf of others. LSPs improve Lightning’sUX for users by essentially supplying liquidity and managing payment channels on their behalf. Managing a payment channel can come with a number of UX hurdles, so LSPs remove the majority of the complexity and charge fees to be compensated. These providers ideally interact with users in a way that ensures that users retain custody of their funds. However, even when using a self-custodial wallet supported by an LSP, users still have to initiate mainchain transactions to deposit funds into their wallet.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "The Lightning Network is peer-to-peer",
                    content:
                        "The only operators involved are the user and the counterparty with whom they open the payment channel. Users can transitively interact with others who have open channels with their counterparty(ies). The Lightning Network operators have to run their own node and must have near-perfect uptime to ensure their channels are not being force-closed or closed with an old channel state. Leveraging a self-custodial wallet supported by an LSP ensures users retain the custody of their funds, but the LSP operator can choose to stop servicing users at any point, meaning that users must withdraw their funds to an onchain address and find a new LSP.",
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