import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    BitcoinSecuritySnippet,
    RiskSummarySnippet,
    BitcoinLayer,
} from "../props";

const mercurylayer: LayerProject = {
    type: Type.Layer,
    slug: "mercurylayer",
    title: "Mercury Layer",
    entityType: EntityType.Statechain,
    entityCategory: EntityCategory.BitcoinNative,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Low,
        RiskFactor.Low,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
    ],
    btcLocked: NaN,
    nativeToken: "BTC",
    feeToken: "BTC",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://mercurylayer.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.mercurylayer.com",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/commerceblock/mercurylayer",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/mercurylayer",
        },
    ],
    description:
        "Mercury Layer is an implementation of the statechain protocol. Statechains enable the offchain transfer of UTXO ownership by transferring key shares from one entity to the next with support of a trusted third party, the statechain entity. A statecoin owner can unilaterally exit back to Bitcoin’s L1 network, given the statechain entity doesn’t collude with a previous statecoin owner. Mercury Layer utilizes an HSM server that leverages blind co-signing and key share updates. The system relies entirely on client-side software to manage the statechain transfer history and handle transaction validation.",
        riskSummary: [
            {
                title: "Users trust the statechain entity with key deletion",
                content: RiskSummarySnippet.RiskStatechainFinality,
            },
            {
                title: "Users must watch for previous owners' unilateral exit transactions",
                content: RiskSummarySnippet.RiskStatechainTimelock,
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
                    name: "Mercury BTC",
                    infrastructureSlug: "mercury-btc",
                    score: 0,
                    tier: RiskFactor.Low,
                    title: "A locked UTXO is collaboratively managed between a trusted server and the statecoin owner, with full L1 UTXO ownership enforceable after a timelock expiry",
                    content: TokenSnippet.MercuryLayerBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Transaction verification and data transmission happens via a client-side validation model",
            content: ReviewSnippet.StatechainDABlindedServer,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "The network operator is a single server",
            content: ReviewSnippet.OperatorStatechainBlindedServerSingleServer,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "There is no way to prove key deletion from the statechain entity",
            content: ReviewSnippet.FinalityStatechainSingleOperator,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Bitcoin finalizes statechain initiation and closures",
                    content: BitcoinSecuritySnippet.BitcoinSecurityOffchainUTXO,
                },
                {
                    title: "The protocol does not enable MEV on bitcoin. Transaction verification happens via a client-side validation mechanism",
                    content: BitcoinSecuritySnippet.OffchainUTXOMEV,
                },
                {
                    title: "No alternative token is being introduced",
                    content: BitcoinSecuritySnippet.OffchainUTXONoToken,
                },
                {
                    title: "Mercury Layer does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.StatechainSecurityBudget,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional considerations",
            content: [
                {
                    title: "Statechains only allow for fixed-value transfers",
                    content:
                        "Mercury Layer facilitates the offline transfer of UTXO ownership through the transfer of private key shares. Ownership transfer and not involving Bitcoin L1 interaction implies that UTXOs cannot be split and must always be transferred as a whole.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users can unilaterally exit given the statechain entity doesn’t collude with a previous statecoin owner",
                    content:
                        "Mercury Layer permits unilateral exits. To reclaim full UTXO ownership on bitcoin L1, the current owner can close the statechain by creating an onchain transaction that spends the UTXO. In an orderly closure, the statechain operator co-signs this transaction with its key share. In an uncooperative scenario, the statecoin owner can use their backup transaction to reclaim the UTXO onchain after a timelock expiry.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Blind signing server",
                    content:
                        "Mercury Layer employs a blind signing server that has two functions. One, it can create partial blind signatures to co-sign statechain transfers together with the user using a [variant of MuSig2](https://github.com/commerceblock/mercurylayer/blob/dev/docs/blind_musig.md). Second, the Mercury Layer server can update the key shares needed for co-signing.\n\nThe operator uses an HSM for key handling and key deletion after cosigning each new holder's withdrawal transaction.",
                },
                {
                    title: "Adding a decrementing timelock to the backup transaction",
                    content:
                        "In the absence of covenants, which could invalidate old transactions, Mercury Layer employs [nLocktime](https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki) with decrementing timelocks to ensure users can reclaim their bitcoin L1 funds in case of server failure or attempted misbehavior of previous owners. Each time a statechain is transferred to a new owner, the timelock on the backup transaction is reduced. By progressively decreasing the timelock, Mercury Layer enables the current owner to claim the L1 funds before a previous owner can do so by publishing an old backup transaction.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Enhanced privacy with blind statechains",
                    content:
                        "The blinding feature of MuSig2 prevents the statechain entity from learning about transaction details, such as the TxID, the full shared public key, the final signature it co-generates, or any information about statechain closure transactions.",
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
                        "Mercury Layer code is [open-source available](https://github.com/commerceblock/mercurylayer) under the terms of the GNU General Public License.",
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
                        "[Statechains are L2s, by the Bitcoin Layers team](https://x.com/BitcoinLayers/status/1925586374473724392) \n [Statechains Whitepaper, by Ruben Somsen](https://github.com/RubenSomsen/rubensomsen.github.io/blob/master/img/statechains.pdf) \n [Statechains: Non-custodial Off-chain Bitcoin Transfer, by Ruben Somsen](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39#:~:text=Statechains%20are%20a%20layer%20two,with%20scaling%20and%20save%20fees.) \n Mercury Layer's Lightning Latch Swap Protocol by Shinobi ([BM, Mar 2024](https://bitcoinmagazine.com/technical/mercury-layers-lightning-latch-swap-protocol)) \n Nicholas Gregory on Mercury Layer, Lightning Network, and More | Bitfinex Talk ([Youtube, May 2024](https://www.youtube.com/watch?v=nwWmLmxfOtc))",
                },
            ],
        },
    ],
};

export default mercurylayer;
