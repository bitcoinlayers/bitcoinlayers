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

const mercurylayer: LayerProject = {
    type: Type.Layer,
    slug: "mercurylayer",
    title: "Mercury Layer",
    entityType: EntityType.Statechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.Low,
        RiskFactor.Medium,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "BTC",
    feeToken: "BTC",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://mercurylayer.com",
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
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "A locked UTXO is collaboratively managed between a trusted server and the statecoin owner, with full L1 UTXO ownership enforceable after a timelock expiry",
            content:
                "the operator and the current statecoin owner. Although the Mercury Layer server acts as a trusted entity, users are safeguarded against potential unresponsiveness by having the ability to unilaterally exit and enforce their UTXO ownership onchain as each transfer is secured by a decrementing timelock mechanism and a series of backup transactions. \n\n⚠️ The statechain entity can collude with the past owner of the UTXO, create a withdrawal transaction and steal the current owner’s funds. However, the statechain entity can only steal from one user at a time; not funds in the entire system. \n\n🔬 No bridge custody score has been determined yet for Statechain protocols.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Transaction verification and data transmission happens via a client-side validation model",
            content:
                "Transaction data is self-hosted. The operator blindly signs and timestamps the individual statechain states and the transfer history gets passed on between clients. Due to the use of blind signing, the operator remains unaware of the transfer history.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "The network operator is a single server. Users can’t be censored individually.",
            content:
                "The Mercury Layer system employs a statechain entity that generates and updates key shares in addition to offering a blind signing service. Mercury Layer chooses a non-federated (i.e. centralized) setup for their service provider.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Transaction settlement does not rely on onchain confirmations. Users are not safeguard against the statechain entity double-spending their coin",
            content:
                "Offchain finality guarantees in Mercury Layer are provided by the statechain operator deleting their previous keyshare. When a user receives a statecoin, they receive a new keyshare together with the operator’s new keyshare. \n\n⚠️ Users do not have assurance that the statechain operator deleted their previous keyshare with the past owner of the statecoin.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Bitcoin finalizes statechain initiation and closures",
                    content:
                        "Transactions within the Mercury Layer protocol are executed completely offchain. However, when a user exits the protocol, their exit transaction is validated by bitcoin miners.",
                },
                {
                    title: "The protocol does not enable MEV on bitcoin. Transaction verification happens via a client-side validation mechanism",
                    content:
                        "Transaction verification is conducted via a client-side validation model. The statechain operator is not included in transaction ordering or verification.",
                },
                {
                    title: "No alternative token is being introduced",
                    content:
                        "Mercury Layer currently uses Bitcoin UTXOs as the main and only asset being transferred in the network. No other token is used for the operation of the protocol.",
                },
                {
                    title: "Mercury Layer does not contribute to the security budget",
                    content:
                        "Statechain transfers occur offchain through key share updates and the pre-signing of backup transactions, with onchain fees incurred only during statechain initiation or closure.",
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
                        "Mercury Layer permits unilateral exits. To reclaim full UTXO ownership on bitcoin L1, the current owner can close the statechain by creating an onchain transaction that spends the UTXO. In an orderly closure, the statechain operator co-signs this transaction with its key share. In an uncooperative scenario, the statecoin owner can use their backup transaction to reclaim the UTXO onchain after a timelock expiry. ",
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
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Statechains only allow for fixed-value transfers",
                    content:
                        "Mercury Layer facilitates the offline transfer of UTXO ownership through the transfer of private key shares. Ownership transfer and not involving Bitcoin L1 interaction implies that UTXOs cannot be split and must always be transferred as a whole.",
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
                        "Statechains Whitepaper by Ruben Somsen ([GitHub, Oct 2018](https://github.com/RubenSomsen/rubensomsen.github.io/blob/master/img/statechains.pdf)) \n Statechains: Non-custodial Off-chain Bitcoin Transfer by Ruben Somsen ([Medium, Jun 2019](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39#:~:text=Statechains%20are%20a%20layer%20two,with%20scaling%20and%20save%20fees.)) \n Mercury Layer's Lightning Latch Swap Protocol by Shinobi ([BM, Mar 2024](https://bitcoinmagazine.com/technical/mercury-layers-lightning-latch-swap-protocol)) \n Nicholas Gregory on Mercury Layer, Lightning Network, and More | Bitfinex Talk ([Youtube, May 2024](https://www.youtube.com/watch?v=nwWmLmxfOtc))",
                },
            ],
        },
    ],
};

export default mercurylayer;
