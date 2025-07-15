/// Review snippets for additional information added to reviews

export enum BitcoinSecuritySnippet { //TODO: Janusz to add more here
    NoSecurity = "In its current state, the network does not inherit security from Bitcoin.",
    AltTokenFees = "Fees to network operators are paid in an alternative token.",
    WrappedTokenFees = "Network fees are paid in a BTC-backed asset on the network.",
    CentralizedSequencerMEV = "The network does not introduce any MEV on the Bitcoin L1. Users trust the sequencer to not reorder their transactions to extract MEV.",
    AltNetworkMEV = "The network does not introduce any MEV on the Bitcoin L1. Users trust the validators of the network to not reorder their transactions to extract MEV.",
    NoSecurityBudget = "The network does not currently contribute to the Bitcoin security budget.",
    UnderReview = "This two-way peg is under review",
    YesSecurityCheckpointPOS = "The network's checkpoint mechanism provides security against long-range attacks, enabling more secure light clients and shorter unbonding periods for validators.",
    YesSecurityDualStaking = "The network's economic security is partially derived from staked BTC locked in bitcoin L1 staking scripts.",
    MEVUnderReview = "We are currently reviewing the network's potential creating more opportunities for MEV on bitcoin.",
    BitcoinSecurityOffchainUTXO = "The protocol enables users to unilaterally exit. Users only need to interact with the bitcoin network to exit the protocol.",
    OffchainUTXOMEV = "Due to transaction sequencing being offchain, the protocol does not enable MEV on the Layer 1.",
    OffchainUTXONoToken = "The protocol does not need another token for transaction fees or other use cases.",
    StatechainSecurityBudget = "Statechains do not interact with the base layer outside of uses unilaterally exiting with their funds. Unilateral exit transactions pay L1 transaction fees.",
    FinalityAssurance = "The network cannot be reorged without reorging bitcoin. This is due to the fact that the network builds upon a checkpoint posted to bitcoin.",
    CheckpointCometBFT = "The network's security is independent of bitcoin and reliant on its own proof-of-stake mechanism.\n\nIts checkpoint mechanism does provide security against long-range attacks, enabling more secure light clients and shorter unbonding periods for validators.",
    Checkpoint = "The network's security is independent of bitcoin and reliant on its own consensus mechanism. Its checkpoint mechanism, however, ensures that after a transaction including a checkpoint reference is included on bitcoin, the network's state cannot be reverted without reorging bitcoin.",
    FeesPOSCheckpoint = "Periodic checkpoint transactions are made that pay fees to bitcoin miners.",
    MergeMineDA = "The network's data availability layer is merge-mined by bitcoin miners.",
    MergeMine = "The network is merge-mined by bitcoin miners.",
    MergeMineDAFees = "Fees from securing the network's data availability are paid to Bitcoin miners who optionally merge-mine the network.",
    MergeMineFees = "Fees from securing the network's are paid to Bitcoin miners who optionally merge-mine the network.",
    MergeMineMEV = "The network does not leak MEV to bitcoin. Bitcoin miners may take advantage of opportunities to extract MEV if the network is experiencing high activity.",
    Template = "Template used for the template prop file.",
}

export enum TechnologySnippet { //TODO: Janusz to add more here
    EVM = "The network uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem.",
    FaultProofs = "The network leverages cryptographic proofs that enables challengers to contest a proposed state transition that contains invalid or fraudulent transactions. Networks that use fault proofs (e.g., optimistic rollups) initially assume that new blocks are valid, then rely on users or watchtowers to challenge blocks if they include invalid state transitions, which are then resolved onchain or a parent blockchain. Fault proofs are largely used to secure bridge programs securing user funds.",
    IBC = "This protocol has implemented support for IBC, enabling users to transfer their tokens to other supported IBC-enabled blockchains. IBC, or the Inter-Blockchain Communication protocol, is a blockchain interoperability standard that enables connected chains to transfer assets and messages between each other.",
    BitcoinStakingUnderReview = "Bitcoin staking is a mechanism by which BTC on the L1 is locked in a staking script. The BTC is then directed to validators on a Proof-of-Stake network which adds to the network's economic security. These scripts see users retain custody of their funds.\n\nAll bitcoin staking mechanisms vary in implementation. We are currently reviewing the network's exact staking mechanism.",
    Statechain = "Statechains are offchain protocols where users custody an L1 UTXO collaboratively with a statechain entity. Users transfer funds by sending their private key to a new recipient with a decrementing timelock. Statechain entities are expected delete its previous keyshare with previous owners and only interact with the current holder of the keyshare.\n\nIf the statechain entity interacts with a previous owner, then they can double spend the current owner. And if a previous owner broadcasts its unilateral exit transaction, then the current owner must broadcast their own to ensure ownership of funds (due to the current owner's timelocks expiring before previous owners).",
    FROST = "FROST (Flexible Round-Optimized Schnorr Threshold Signatures) is a protocol that minimizes the number of rounds of communication between participants in Schnorr signature schemes, reducing network bandwidth, time, and probability of errors. It can be used to implement 'n-of-m' threshold signatures represented by a single signature on the blockchain. This saves block space and increases privacy by making them indistinguishable from other, more common spend types.",
    ArbitrumStylus = "In addition to being EVM-compatible, the network leverages Stylus to support developers building WASM-based smart contracts. Developers can decide between building EVM-based applications or writing smart contracts in more common programming languages, such as Rust, and compiling these contracts to WASM.",
    AnyTrustDA = "The data needed to reconstruct the state and construct fraud proofs is made available by a permissioned committee. The committee is based on the AnyTrust data availability protocol. This sees a committee of signers produce a data availability certificate that the data needed for proof construction is available for a certain amount of time.\n\nIn this design, a sequencer posts batches of transactions to the committee. After the signers receive this batches and produce a data availability certificate, the sequencer submits the latest hash of these batches, and a corresponding Data Availability Certificate, to corresponding light clients (i.e. bridges).",
    BitcoinScript = "Bitcoin Script is bitcoin’s scripting language that enables users to define the conditions under which a Bitcoin UTXO can be spent. It is a low-level Assembly-based programming language.",
    OP_CAT = "OP_CAT is a Bitcoin opcode, short for Operation Concatenate. It allows the combination of two data elements on the Bitcoin stack. The opcode was originally introduced by Satoshi Nakamoto, but was removed due to potential denial of service attack vectors.\n\nOP_CAT would enable more expressive smart contracts on bitcoin, including “covenants”, a way to set spending conditions on individual UTXOs. Teams are also reviewing how it can support SNARK verification in Script, which would further improve bridging L1 assets to second layer protocols.",
    MergeMining = "Merged mining is a feature of the network's consensus mechanism that allows coupling between bitcoin and the alternative network. Essentially, BTC mining pools add references to the network's blocks in mining jobs sent to mining participants. Additionally, because the network's mining algorithm is the same as bitcoin’s, there is little added energy expenditure. This sees bitcoin miners have an ability to additionally mine a percentage of the network's blocks. Miners are incentivized through earning a portion of transaction fees or newly issued tokens.",
    Elements = "The network is built with the Elements technology stack. Elements is an open-source technology stack built on top of the Bitcoin code base. Since it is built on the Bitcoin code base, Elements enables the network to be a testing ground for potential changes to the Bitcoin protocol.",
    ConfidentialTransactions = "The network enables Confidential Transactions which can provide users a higher level of privacy. This feature ensures that anyone, other than the participants in a transaction, cannot see the tokens, and the amount of, transferred between them.",
    OrgaMerk = "Orga is a custom-built stack designed for creating Proof-of-Stake (PoS) blockchains in Rust, offering an alternative to the Cosmos SDK. At its core, Orga integrates with CometBFT as its consensus engine.\n\nMerk complements Orga as a high-performance Merkle key/value store, serving as the state database for blockchains. It supports the proof generation necessary for the networks's IBC interactions with other networks and for enabling lightweight client functionalities for end users.",
    Template = "Template used for the template prop file.",
}
export enum UseCaseSnippet { //TODO: Janusz to add more here
    OnchainApps = "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
    OffchainUTXOTransfers = "Users can transfer virtual representations of UTXOs offchain with the assistance of an operator. These transfers have fast, soft confirmation times and are lower in fees than L1 Bitcoin transactions.",
    UTXOTokenizedApplications = "The protocol can be used to improve the efficiency of UTXO-based token protocols. Users are able to transfer and trade tokenized UTXOs with faster confirmation times than Bitcoin L1 with trust tradeoffs.\n\nTokenized applications may include stablecoin transfers or token exchange protocols.",
    BitcoinStaking = "Users can lock L1 BTC into staking script to support the network's security. The BTC is directed to validators within the Proof-of-Stake network. These scripts see users retain custody of their funds, but sees them take on slashing risks.\n\nIn return for locking their funds into a staking script, users are paid rewards in the form of fees or altcoin issuance.",
    TestingGround = "Since the network has enabled opcodes that are not yet live on Bitcoin, developers can deploy applications there to preview what it would be like on Bitcoin. This includes analyzing the builder experience, potential security vulnerabilities, and presenting how these changes might permanently affect the Bitcoin network.",
    TokenizedAssets = "The network enables developers and users alike to issue tokenized securities, stablecoins, and synthetic forms of cryptocurrencies.",
    IBCTransfers = "Using IBC, users can transfer tokens (including BTC-denominated tokens) to connected blockchains and engage in use-cases such as: 1) Get a USK loan on Kujira 2) Trade and provide liquidity on Osmosis 3) Trade perpetual swaps using Levana",
    OffchainTransfers = "The network itself can also be used for p2p payments denominated in BTC.",
    AIAgents = "Template for a protocol that uses AI agents to interact with the network.",
    Template = "Template used for the template prop file.",
}
export enum KnowledgeBitSnippet { //TODO: Janusz to add more here
    EthereumL2 = "This network is a layer 2 for Ethereum. For a view into the technology from an Ethereum perspective, head to [L2Beat](https://www.L2Beat.com) for their review.",
    Template = "Template used for the template prop file.",
}
export enum AdditionalSnippet { //TODO: Janusz to add more here
    UpgradeableContractsCentralizedAndNoExit = "The contracts related to this project are immediately upgradeable by a centralized party. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade, there is no exit delay and users are unable to leave the chain.",
    UpgradeableContractsFederatedAndExit = "The contracts related to this project are immediately upgradeable by a federation. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade by this federation, there is no exit delay and users are unable to leave the chain.",
    InitialReview = "This is the initial review of the network. We will conduct a full review of the network shortly in the future. The contents in this review are subject to change.",
}
export enum OtherSnippet { //TODO: Janusz to add more here
    WithdrawalsAltRollup = "Withdrawing BTC-backed assets from the network depends on a variety of factors. First, users must trust the network operators to include their withdrawal request in a block. If the user's assets are locked in the network's official bridge program, they rely on a proposer to include their request in proposed state transition. After the state transition is finalized, the user can redeem their funds.\n\nIf a user's BTC-backed asset is minted directly onto the network, then the user's withdrawal request must be processed by the asset issuer.",
    NotASideSystem = "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
}

//Below is snippets for alternative chains that we haven't been able to review yet due to volume.

export enum AtlSnippet { //TODO: Janusz to add more here
    FinalityConsensusNetwork = "Finality assurances are provided by an alternative consensus network. Users trust that once a transaction has been added to the chain it won't be reverted.",
    DAConsensusNetwork = "Data is published to, and made available by, full nodes participating in an alternative consensus network. Anyone can run a node and verify the current state of the network",
    OperatorsPoSNetwork = "Blocks are produced and proposed by an alternative proof-of-stake network.",
    PrioritizeLayers = "The Bitcoin Layers project prioritizes reviews on protocols that claim to be bitcoin layers. It also reviews bridges, token wrappers, and other mechanisms that support synthetic versions of bitcoin on other chains. If you'd ike to contribute to this review, feel free to submit a PR in our [GitHub](https://github.com/bitcoinlayers/bitcoinlayers) or join our [telegram group](https://t.me/+8rv-1I2gkmQ4ZmJh) to discuss.",
}

export const Alertsnippet = { //TODO: Janusz to add more here
    ProofOfProofConsensus: {
        type: "warning" as const,
        title: "Note on Hemi's Proof-of-Proof consensus",
        content: "While Hemi's anchors its state to bitcoin, the network is currently managed by a centralized operator. The operator is unable to revert Hemi's state after Hemi full nodes compute a new state root. This is independent of any additional finality guarantees potentially provided by bitcoin.",
        linkText: "Learn more about bitcoin anchoring for alternative blockchains",
        linkUrl: "https://lxresearch.co"
    },
    AltRollupAltTokenNoFraudProofs: {
        type: "error" as const,
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge.",
    },
    AltRollupAltTokenNoFraudProofsPlusUpgrade: {
        type: "error" as const,
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge escrowing funds does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge. Additionally, the bridge contract can be upgraded by a centralized party or federation. A malicious upgrade could result in loss of user funds.",
        expandable: true,
    },
    AltRollupAltTokenNoFraudProofsPlusUpgradeDelayed: {
        type: "error" as const,
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge escrowing funds does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge. Additionally, the bridge contract can be upgraded by a centralized party or federation. A malicious upgrade could result in loss of user funds. There is a delay to upgrades.",
        expandable: true,
    },
    WrapperCentralized: {
        type: "warning" as const,
        title: "Bitcoin backing this token is secured by a centralized party",
        content: "The bitcoin backing this token is secured by a centralized party. This party can unilaterally spend the funds backing this wrapped asset. Malicious operators can result in loss of user funds.",
    },
    AltRollupAltTokenProofsUpgrade: {
        type: "error" as const,
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. Users must consider how the native bitcoin is secured. Additionally, while there is a proving system in place, the bridge contract can instantly upgraded by a centralized party or federation. In the event of a malicious upgrade, user funds could be stolen.",
        expandable: true,
    },
    AltRollupAltTokenUnderReview: {
        type: "warning" as const,
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge.",
    },
    BitcoinBridgeNoSigners: {
        type: "warning" as const,
        title: "The signers for this bridge have not been disclosed",
        content: "The signers for this bitcoin two-way peg have not been disclosed. The signers have unilateral control of funds backing this wrapped asset. Collusion can result in loss of user funds. There is no reputational damange for these signers if they act maliciously.",
        expandable: true,
    },
    SecurityModelDifference: {
        type: "warning" as const,
        title: "Important Security Consideration",
        content: "Hemi's security model is fundamentally different from Bitcoin's. Users should understand that they are not protected by Bitcoin's hash rate when using Hemi.",
        linkText: "Learn more about Bitcoin security",
        linkUrl: "https://docs.hemi.xyz/security"
    },
    CentralizedSequencerRisk: {
        type: "warning" as const,
        title: "Centralized Sequencer Risk",
        content: "The network is operated by a centralized sequencer. If this sequencer goes offline or becomes malicious, it could affect network operations and user fund accessibility.",
    },
    AltDALayerRisk: {
        type: "warning" as const,
        title: "Alternative Data Availability Risk",
        content: "This network relies on an alternative data availability layer. If the DA layer becomes unavailable, the network cannot progress and user funds may be frozen.",
    },
    BridgeUpgradeRisk: {
        type: "warning" as const,
        title: "Bridge Upgrade Risk",
        content: "Bridge contracts can be upgraded by a centralized party or federation. In case of a malicious upgrade, user funds could be at risk.",
    },
    UnderReviewNotice: {
        type: "info" as const,
        title: "Section Under Review",
        content: "This section is currently under review. Some information may be incomplete or subject to change as our analysis progresses.",
    },
    AltRollupNotice: {
        type: "info" as const,
        title: "Finality is not necessarily through the lens of a validating bridge",
        content: "The network is an alternative rollup. This means it uses another blockchain for data availability. From the view of its full nodes, the rollup's state is finalized after it it validates state updates published to the data availability layer. Therefore, the network's finality assurances are that of its data availability layer (assuming the node operation is permissionless). A state root may be additionally posted to the data availability layer to finalize bridge programs, but this is not a guarantee of finality. This guarantee ensures the network's bridge programs are secure and can permit withdrawals based on the network's state. This only applies to tokens that are locked in these specific's bridge programs. See the BTC custody section for more information.",
        expandable: true,
    },
} as const;