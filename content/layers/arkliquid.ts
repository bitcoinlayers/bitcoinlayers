import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskCategory,
} from "../props";

const arkliquid: LayerProject = {
    type: Type.Layer,
    slug: "ark",
    title: "Ark (on Liquid)",
    entityType: EntityType.VirtualUTXOs,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Unverified,
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "LBTC",
    feeToken: "LBTC",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://arklabs.to",
        },
        {
            text: Site.Docs,
            url: "https://arkdev.info/docs",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ark-network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/ArkLabsHQ",
        },
    ],
    description:
        "This review covers the Ark implementation written in [Go](https://github.com/ark-network/ark), running on the Liquid network. A separate review for the covenant-less version of Ark (clArk) which operates on Bitcoin, will follow. Ark is a proposed payments protocol designed to shift liquidity requirements to a central operator, which is an always-on server, known as the Ark Service Provider (ASP). There are currently no ASPs supporting Ark on Liquid.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.High,
            title: "Users enter a 2-of-2 multisig with the ASP that guarantees unilateral exit to L-BTC, but not to BTC",
            content:
                "The user deposits their L-BTC into a 2-of-2 multisig with the ASP, getting an off-chain VTXO in return. The setup allows the user to unilaterally exit back to the Liquid blockchain, ensuring self-custody of the funds, provided they exceed the minimum relay fee on the Liquid blockchain. However, the funds become custodial if the user fails to refresh their coins during the designated timeout period, enabling the ASP to sweep them. It is important to note that L-BTC cannot be exited unilaterally to BTC due to the federated nature of Liquid.\n\n🔬We are currently reviewing the signers for the Liquid two-way peg, which would affect this implementation of Ark.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored on-chain (Liquid) in a shared transaction output",
            content:
                "The VTXOs are batched in a binary tree, with the VTXOs serving as the leaves of the tree. This binary tree is then included in a Liquid block as a shared output. In cases of dispute resolution, VTXOs can be revealed. When conducting transactions, the user receives the tree data along with an index indicating the position of their respective VTXO within the tree. It's important to note that Liquid data is stored off the Bitcoin blockchain. Users can run archive nodes on Liquid, which keep a complete history of the Liquid blockchain.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "Operated by a service provider, the ASP, and relies on the liveness of the Liquid blockchain to enable unilateral exit ",
            content:
                "The Ark network is operated by a central entity, the ASP, an always-on server that provides liquidity and is responsible for issuing VTXOs after an L-BTC deposit on the Liquid blockchain. The ASP is trust-minimized. Only through colluding with Liquid functionaries, it can fraud users: The ASP can generally claim VTXOs if the user does not refresh them or unilaterally exit in time. One way the ASP could abuse this is to collude with parent chain block producers to delay the unilateral exit, so that the ASP can eventually claim users’ funds. Without the ASP colluding with the Liquid functionaries, a unilateral exit to Liquid is possible. Furthermore, as this implementation of Ark is running on Liquid, users trust that the respective functionaries operating the Liquid blockchain will include their on-chain withdrawals in a Liquid block.",
        },
        {
            category: RiskCategory.SettlementAssurance,
            score: 0,
            tier: RiskFactor.High,
            title: "Funds are available immediately for further VTXO transfers, while finality is only reached with a block confirmation on Liquid",
            content:
                "Ark transactions operate under the principle of [delayed finality, but immediate availability](https://x.com/brqgoo/status/1661396945653448708). While finality is only reached once the shared output is confirmed in a block on the Liquid blockchain, funds are immediately available to the user for use in an LN transaction or another Ark transaction.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Ark on Liquid inherits no security from Bitcoin network",
                    content:
                        "Ark on Liquid does not inherit any security from Bitcoin, as Liquid is a federated sidechain independent of Bitcoin. For more information, visit our [Liquid Risk Review](https://www.bitcoinlayers.org/layers/liquid).",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content: "Ark on Liquid introduces no MEV to Bitcoin.",
                },
                {
                    title: "No alternative token needed for network security",
                    content:
                        "No alternative token is needed for network security. VTXOs are being issued by the ASP. Those live off the Liquid blockchain and are backed by L-BTC. L-BTC itself is pegged via a federated multisig to BTC.",
                },
                {
                    title: "Ark on Liquid does not contribute to the security budget",
                    content:
                        "Ark on Liquid does not pay any fees to Bitcoin miners.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "There are currently no ASPs live on Ark on Liquids",
                    content:
                        "There are currently no ASPs supporting Ark on Liquid. This means that users cannot interact with the network, unless they run their own ASP. A demo application was created for Bitcoin++ for testing and showcase purposes, but support is currently deprecated.",
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
                        "In case of a [cooperative exit](https://arkdev.info/docs/learn/leaving#cooperative-exit), a user trades their VTXO for an on-chain UTXO. This trade is facilitated by the ASP using a round transaction. Steps are: the ASP creates a round transaction with an additional output, locked by Alice (connector output). Then, the user signs a forfeit transaction which spends from the old VTXO and adds the connector output from the previously created round transaction. The ASP then broadcasts the round transaction, providing the user with a new UTXO. During a period of four weeks, the user could double spend their VTXO. Trying to do so results in the ASP gaining the ability to claim the users’ funds within a 24h window, using the forfeit transaction signed by the user.\n\nIn case of a non-cooperative exit, due to an unresponsive or malicious ASP, an Ark VTXO can be redeemed as a UTXO on the Liquid blockchain provided the ASP doesn’t collude with Liquid functionaries. A unilateral exit is triggered by the user through revealing the branch of the shared output that locks their funds. This ensures self-custody of Ark funds in relation to L-BTC, even though a third party is involved in transaction processing.\n\nTo process withdrawals from L-BTC back to BTC, users must either trust Liquid functionaries to process their withdrawals or perform a swap between BTC and L-BTC with a third party.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "VTXOs and transferring them",
                    content:
                        "Transacting VTXOs off-chain happens via so-called “Ark rounds”, which are facilitated by the ASP. A round occurs periodically by including the VTXOs in a shared output on the Liquid blockchain as part of a covenant tree. The VTXO transfers happen atomically by adding so-called connector outputs. Connector outputs ensure that the ASP can only claim the users’ old VTXO if a new one has been created by the ASP as part of a new shared output. Importantly, the user can redeem those checks on the Liquid blockchain without interacting with the ASP.",
                },
                {
                    title: "VTXO refreshing with period liveness requirement for the user",
                    content:
                        "With the introduction of Ark rounds, the user is required to refresh their VTXOs by opening their Ark wallet before the shared output expiration (current default timeout period is set at a four week period, but this is ASP-specific). Failing to do so results in the ASP being able to sweep users’ funds. Those [funds will then be held custodially by the operator](https://x.com/brqgoo/status/1806875774265241781) and can be claimed back by the user to be held again in a non-custodial fashion should the operator process their claim. To mitigate this, a watchtower-like solution is being proposed where a user can delegate VTXO refreshment.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Improved self-custodial UX for end users",
                    content:
                        "Ark will serve as a complementary protocol to the Lightning Network. Self-custodial usage of funds on LN remains a challenge for non-technical end users, first and foremost due to inbound liquidity issues. Ark as a stand-alone option can circumvent those issues, as liquidity requirements are shifted to the ASP.\n\nFurthermore, Ark can be run as a complementary service by exchanges or brokerages to facilitate self-custody of users’ funds. In case of the user missing to refresh funds, those turn back to the traditional custodial model facilitated by exchanges.",
                },
                {
                    title: "Scaling L-BTC for end users",
                    content:
                        "The shared output model of Ark serves as a scaling method, as UTXOs are being shared among a multitude of users, potentially up to tens or hundreds of thousands of users. Ark will function as a complementary protocol to Lightning. While Lightning scales vertically, [Ark scales horizontally](https://x.com/tierotiero/status/1798301214905606227). In other words, Ark can be seen as the [clearing layer](https://x.com/RyanTheGentry/status/1663322538443698177) (facilitating transactions between two entities within the same ASP), Lightning will serve as the settlement layer (transactions between two ASPs), while Liquid serves as the ultimate court through confirming the shared output in a block.",
                },
                {
                    title: "Offline payments",
                    content:
                        "The Ark protocol on Liquid ensures (self-custodial) offline transactions by making use of covenants, specifically [introspection opcodes](https://glossary.blockstream.com/introspection-opcodes/). This is a strong improvement over the current state of async payments on LN.",
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
                        "The code is open source on [GitHub](https://github.com/ark-network/ark), available under an MIT license.",
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
                        "[Ark Developer Hub](https://arkdev.info)\n[Simplest Ark Explanation](https://gist.github.com/RubenSomsen/a394beb1dea9e47e981216768e007454?permalink_comment_id=4633382#simplest-ark-explanation)\n[Updates on Ark with Tiero](https://stephanlivera.com/episode/584/)",
                },
            ],
        },
    ],
};

export default arkliquid;
