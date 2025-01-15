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
} from "../props";

const nomic: LayerProject = {
    type: Type.Layer,
    slug: "nomic",
    title: "Nomic",
    entityType: EntityType.Sidechain,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 4.95,
    nativeToken: "NOM",
    feeToken: "NOM",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.nomic.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.nomic.io",
        },
        {
            text: Site.Explorer,
            url: "https://bigdipper.live/nomic",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/nomic-io",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/nomicbtc",
        },
    ],
    description:
        "Nomic is a proof-of-stake blockchain focused on distributed BTC custody. Nomic validators collectively control a bitcoin wallet known as the Reserve Wallet, which users can deposit BTC to in order to receive nBTC, an asset issued on the Nomic blockchain that is backed 1:1 by the BTC deposits held in the Reserve Wallet.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Nomic nBTC",
                    infrastructureSlug: "nomic-nbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "BTC backing nBTC managed by a group of 20 publicly known signers who participate as validators in the Nomic blockchain",
                    content: "Users deposit BTC into a Reserve Wallet to receive nBTC on Nomic. The Reserve Wallet is a Bitcoin L1 multisig wallet managed by the Nomic signatory set. The Nomic signatory is made up of the top 20 Nomic validators measured by weighted stake.\n\nBecoming a signatory is permissionless and requires staking NOM tokens. Disbursing funds from the reserve wallet requires a threshold of signatories to sign, weighted by voting power through NOM tokens.\n\nWe are reviewing the signing threshold for this wallet.",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is made available via Nomic full nodes",
            content: "Nomic blockchain data can be accessed via Nomic full nodes. The node software is open source and running a node is permissionless. Therefore, anyone can validate Nomic blockchain data.\n\nData transmission from and to Bitcoin happens via relayers. Running a relayer is also permissionless.",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Network is operated by validators in a proof-of-stake consensus protocol",
            content: "Nomic is a proof of stake blockchain that is currently operated by 90 validators. Any user can stake NOM to become a Nomic validator. A subset of validators also participate as signers on the Nomic Reserve Wallet.\n\nIn case of a Nomic network liveness failure, an emergency disbursal mechanism is in place which will distribute BTC on L1 to the respective nBTC holders.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Finality is provided through an offchain consensus mechnaism",
            content: "Nomic uses CometBFT for consensus. Like Tendermint, the protocol on which CometBFT is based, CometBFT has single-slot finality, meaning that blocks cannot be re-organized once they are part of the canonical blockchain. More than ⅔ of validator voting power must sign commit votes to finalize a block. If validators attempt to commit multiple blocks at the same block height, their NOM will be slashed.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Nomic does not inherit security from bitcoin consensus participants",
                    content:
                        "Nomic's security is independent of bitcoin and reliant on its own proof-of-stake mechanism.\n\nIts checkpoint mechanism does provide security against long-range attacks, enabling more secure light clients and shorter unbonding periods for validators.",
                },
                {
                    title: "NOM token is used for network security",
                    content:
                        "Users must stake NOM to become a validator and signer on the Reserve Wallet.",
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content:
                        "Nomic does not leak MEV to bitcoin.",
                },
                {
                    title: "Nomic pays fees for checkpoint transactions",
                    content:
                        "Periodic checkpoint transactions are made that pay fees to bitcoin miners.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users need cooperation from 90% of the voting power on the Reserve Wallet to withdraw",
                    content:
                        "The Nomic BTC bridge is a proof of stake bridge. Users need cooperation from over 90% of the voting power on the Reserve Wallet to withdraw BTC from the bridge.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "The NOM token is untransferrable",
                    content:
                        "Nomic’s native token, NOM, is currently untransferrable and unable to be sold, or bought, in various markets. This means that the token currently has no value and validators currently have no current financial incentive to secure BTC backing nBTC..",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Reserve Wallet",
                    content:
                        "nBTC is backed by BTC held in a bitcoin wallet referred to as the Reserve Wallet. The Reserve Wallet is a P2WSH that is managed by the top 20 validators during a given period of time.",
                },
                {
                    title: "IBC-enabled transfers",
                    content:
                        "Nomic has implemented support for IBC, enabling users to transfer their nBTC to other supported IBC-enabled blockchains. IBC, or the Inter-Blockchain Communication protocol, is a blockchain interoperability standard that enables connected chains to transfer assets and messages between each other.",
                },
                {
                    title: "Orga & Merk",
                    content:
                        "Orga is a custom-built stack designed for creating Proof-of-Stake (PoS) blockchains in Rust, offering an alternative to the Cosmos SDK. At its core, Orga integrates with CometBFT as its consensus engine.\n\nMerk complements Orga as a high-performance Merkle key/value store, serving as the state database for blockchains. It supports the proof generation necessary for Nomic's IBC interactions with other networks and for enabling lightweight client functionalities for end users.",
                },
                {
                    title: "Checkpointing mechanism",
                    content:
                        "The Nomic checkpointing mechanism manages Bitcoin reserves by consolidating deposits and disbursing pending withdrawals into periodic Bitcoin transactions. Each checkpoint updates the reserve script to reflect the latest signatory set, a group of validators dynamically chosen from the network. These transactions are collaboratively signed using a threshold multisignature scheme. Checkpoints also provide a way for light clients to verify the state of the Nomic chain and invalidate prior emergency disbursal mechanisms.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Connection to IBC-enabled blockchains",
                    content:
                        "Using IBC, users can transfer nBTC to connected blockchains and engage in use-cases such as:\n\n- Get a USK loan on Kujira\n\n- Trade and provide liquidity on Osmosis\n\n- Trade perpetual swaps using Levana",
                },
                {
                    title: "Offchain nBTC transfers",
                    content:
                        "Nomic itself can also be used for p2p payments denominated in nBTC.",
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
                        "Nomic's node implementation is open-souce.",
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
                        "[Proof-of-Stake Bitcoin Sidechains](https://gist.github.com/mappum/da11e37f4e90891642a52621594d03f6)\n\n[CometBFT Consensus](https://docs.cometbft.com/main/spec/consensus/consensus).",
                },
            ],
        },
    ],
};

export default nomic;
