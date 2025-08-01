'use strict';

exports.RiskSummarySnippet = void 0;
(function (RiskSummarySnippet) {
    RiskSummarySnippet["RiskSummarySecurityCouncil"] = "If the security council is compromised, they can immediately upgrade specific contracts and potentially steal user funds. This risk may be relevant to BTC-backed tokens locked in the layer's official bridge contract.";
    RiskSummarySnippet["RiskSummaryImmediateUpgrade"] = "A centralized party can immediately upgrade specific system contracts. This risk may be relevant to BTC-backed tokens locked in the layer's official bridge contract.";
    RiskSummarySnippet["RiskSummaryCentralNotImmediateUpgrade"] = "A centralized party can upgrade bridge contracts and steal user funds.";
    RiskSummarySnippet["TitleBridgeUpgrade"] = "Bridge contracts are upgradeable";
    RiskSummarySnippet["TitleSystemUpgrade"] = "Some system contracts are upgradeable";
    RiskSummarySnippet["TitleUpgrade"] = "Some contracts are upgradeable. These contracts may be related to BTC-backed tokens locked in the layer's official bridge contract.";
    RiskSummarySnippet["RiskSummaryCustodianPegs"] = "All BTC backing wrapped tokens on this network are ultimately secured by custodians. Users trust that these custodians will not misappropriate funds and keep their assets pegged 1:1. Each custodian has their own risks. Learn more in the trust assumptions review section.";
    RiskSummarySnippet["TitleCustodianPegs"] = "All BTC pegs have custodian trust assumptions";
    RiskSummarySnippet["RiskSummaryAltDANetwork"] = "Data related to the network's state is made available by another consensus network. The network's state cannot make progress if the data availability layer withholds the data. If the network cannot make progress, user funds can be frozen.";
    RiskSummarySnippet["RiskSummaryAltDACommittee"] = "Data related to the network's state is made available by an offchain committee. The network's state cannot make progress if this committee withholds the data. If the network cannot make progress, user funds can be frozen.";
    RiskSummarySnippet["TitleAltDA"] = "Another data availability layer is used";
    RiskSummarySnippet["RiskSummaryCentralizedSequencer"] = "The network is operated by a centralized operator. If this operator goes offline, the network can be halted which can freeze user funds. Please see the trust assumptions to learn if their is a fallback mechanism for liveness failures.";
    RiskSummarySnippet["TitleCentralizedSequencer"] = "A centralized entity is the network operator";
    RiskSummarySnippet["RiskSummaryAlternativeL1"] = "The network is an alternative blockchain. Users trust the economic security of the network to deter validators from censorship and creating malicious peg outs.";
    RiskSummarySnippet["TitleAlternativeL1"] = "The network is an alternative blockchain";
    RiskSummarySnippet["TitleFederation"] = "The network is managed by a federation.";
    RiskSummarySnippet["RiskSummaryFederation"] = "The network is managed by a federation. Users trust the federation to not censor them, halt the network, and freeze user funds.";
    RiskSummarySnippet["RiskFederationPeg"] = "The BTC backing the official wrapped bitcoin asset is managed by a federation. Users trust that this federation of custodians will not misappropriate funds and keep their assets pegged 1:1. If the federation becomes compromised, it can unilaterally steal users' funds. The network may support other wrapped BTC assets with different trust assumptions.";
    RiskSummarySnippet["RiskPOSPeg"] = "The BTC backing the official wrapped bitcoin asset is managed by a validators participating in the network's proof-of-stake protocol. Users trust that these signers will not misappropriate funds and keep their assets pegged 1:1. If signers with the majority of stake becomes malicious, they can unilaterally steal users' funds. The network may support other wrapped BTC assets with different trust assumptions.";
    RiskSummarySnippet["RiskStatechainFinality"] = "If the statechain entity does not delete the keyshare it held with the previous owner, they can collude and immediately spend funds. This effectively results in the current owner's funds being stolen.";
    RiskSummarySnippet["RiskStatechainPreviousOwner"] = "If the previous owner broadcasts their unilateral exit transaction, the current owner must respond by broadcasting theirs with a faster expiring timelock. If the current owner does not respond, the previous owner can steal funds.";
    RiskSummarySnippet["RiskStatechainTimelock"] = "If a previous owner of the UTXO broadcasts their unilateral exit transaction, and the current owner does not broadcast their own, the previous owner can steal funds.";
    RiskSummarySnippet["RiskStatechainNoExit"] = "This implementation does not support unilateral exits. If the statechain entity becomes unresponsive, users funds are frozen.";
    RiskSummarySnippet["RiskLightningChannel"] = "If a counterparty maliciously broadcasts a previous state, and it is not contested, they can close the channel with previous balances that favor the malicious actor.";
    RiskSummarySnippet["NoDALayer"] = "The network's state is not made available by a data availability layer. Users trust the network operator(s) to maintain a record of the network's state.";
    RiskSummarySnippet["TitleCentralizedDA"] = "The network's state is made available by a centralized entity";
    RiskSummarySnippet["CustodianTitle"] = "Users do not have unilateral claims on native BTC.";
    RiskSummarySnippet["OneCustodian"] = "BTC backing this asset is secured by a centralized custodian. Users trust this single entity with maintaining the peg with BTC.";
    RiskSummarySnippet["Guardian"] = "BTC backing this asset is secured by multiple custodians. Users trust this group with maintaining the peg with BTC.";
    RiskSummarySnippet["Federation"] = "BTC backing this asset is secured by a federation of signers. Users trust this federation with maintaining the peg with BTC.";
    RiskSummarySnippet["PoS"] = "BTC backing this asset is secured by a signers participating in a proof-of-stake network. Users trust these signers with maintaining the peg with BTC.";
    RiskSummarySnippet["UnkownSignersTitle"] = "The signers for this two-way peg have not been disclosed";
    RiskSummarySnippet["UnkownSigners"] = "The parties responsible for securing the assets backing this wrapper have not been disclosed. There is little-to-no reputational risk for signers securing these funds.";
    RiskSummarySnippet["Collateralized"] = "Users are exposed to smart contract risks and potential liquidations when using this asset.";
    RiskSummarySnippet["MultipleAssets"] = "This asset is backed by other BTC wrapped assets. If a reserve asset became unbacked, the two-way peg with BTC would break.";
    RiskSummarySnippet["SlashingRisk"] = "This asset represents BTC staked in a staking protocol. If the corresponding BTC is slashed, users' balances could be affected.";
    RiskSummarySnippet["TitleNoProofs"] = "Bridge program(s) do not have a functional proof system";
    RiskSummarySnippet["RiskSummaryNoProofs"] = "The bridge program(s) do not have a functional proof system. A centralized proposer can submit a malicious state transition and steal funds from the bridge.";
    RiskSummarySnippet["RiskSummary"] = "";
})(exports.RiskSummarySnippet || (exports.RiskSummarySnippet = {}));
exports.PegRiskSummarySnippet = void 0;
(function (PegRiskSummarySnippet) {
    PegRiskSummarySnippet["RiskSummary"] = "";
})(exports.PegRiskSummarySnippet || (exports.PegRiskSummarySnippet = {}));
exports.OtherRiskSummarySnippet = void 0;
(function (OtherRiskSummarySnippet) {
    OtherRiskSummarySnippet["EcashCustodyTitle"] = "Users funds are managed by the mint operator";
    OtherRiskSummarySnippet["CashuCustody"] = "A Cashu mint is operated by a single entity that custodies users\u2019 funds in return for issuing bearer Ecash tokens. If the mint gets hacked, becomes unresponsive or turns malicious, user funds can be stolen.";
    OtherRiskSummarySnippet["FedimintCustody"] = "Users deposit BTC into a multisig to interact with a Fedimint. Users explicitly trust the signers, known as guardians, of the federations\u2019 multisig to not steal their funds. If the mint gets hacked, becomes unresponsive or turns malicious, user funds can be stolen.";
    OtherRiskSummarySnippet["VariousMints"] = "Users can choose between different mints to interact with. It is avised that users choose a mint that they trust and personally know the identities of the operators.";
    OtherRiskSummarySnippet["EcashDebasementRisk"] = "Ecash notes represent a claim on BTC held by the mint operators. As such, there is the risk that the operators issues more Ecash tokens than bitcoin it actually holds. This can lead to Ecash tokens being unbacked.";
    OtherRiskSummarySnippet["RiskSummary"] = "";
})(exports.OtherRiskSummarySnippet || (exports.OtherRiskSummarySnippet = {}));
exports.DefinitionSnippet = void 0;
(function (DefinitionSnippet) {
    DefinitionSnippet["DefinitionAltRollup"] = "The network is an alternative rollup. It uses an alternative network for data availability and consensus. It supports a variety of BTC-backed assets.";
})(exports.DefinitionSnippet || (exports.DefinitionSnippet = {}));

/// Review snippets for additional information added to reviews
exports.BitcoinSecuritySnippet = void 0;
(function (BitcoinSecuritySnippet) {
    BitcoinSecuritySnippet["NoSecurity"] = "In its current state, the network does not inherit security from Bitcoin.";
    BitcoinSecuritySnippet["AltTokenFees"] = "Fees to network operators are paid in an alternative token.";
    BitcoinSecuritySnippet["WrappedTokenFees"] = "Network fees are paid in a BTC-backed asset on the network.";
    BitcoinSecuritySnippet["CentralizedSequencerMEV"] = "The network does not introduce any MEV on the Bitcoin L1. Users trust the sequencer to not reorder their transactions to extract MEV.";
    BitcoinSecuritySnippet["AltNetworkMEV"] = "The network does not introduce any MEV on the Bitcoin L1. Users trust the validators of the network to not reorder their transactions to extract MEV.";
    BitcoinSecuritySnippet["NoSecurityBudget"] = "The network does not currently contribute to the Bitcoin security budget.";
    BitcoinSecuritySnippet["UnderReview"] = "This two-way peg is under review";
    BitcoinSecuritySnippet["YesSecurityCheckpointPOS"] = "The network's checkpoint mechanism provides security against long-range attacks, enabling more secure light clients and shorter unbonding periods for validators.";
    BitcoinSecuritySnippet["YesSecurityDualStaking"] = "The network's economic security is partially derived from staked BTC locked in bitcoin L1 staking scripts.";
    BitcoinSecuritySnippet["MEVUnderReview"] = "We are currently reviewing the network's potential creating more opportunities for MEV on bitcoin.";
    BitcoinSecuritySnippet["BitcoinSecurityOffchainUTXO"] = "The protocol enables users to unilaterally exit. Users only need to interact with the bitcoin network to exit the protocol.";
    BitcoinSecuritySnippet["OffchainUTXOMEV"] = "Due to transaction sequencing being offchain, the protocol does not enable MEV on the Layer 1.";
    BitcoinSecuritySnippet["OffchainUTXONoToken"] = "The protocol does not need another token for transaction fees or other use cases.";
    BitcoinSecuritySnippet["StatechainSecurityBudget"] = "Statechains do not interact with the base layer outside of uses unilaterally exiting with their funds. Unilateral exit transactions pay L1 transaction fees.";
    BitcoinSecuritySnippet["FinalityAssurance"] = "The network cannot be reorged without reorging bitcoin. This is due to the fact that the network builds upon a checkpoint posted to bitcoin.";
    BitcoinSecuritySnippet["CheckpointCometBFT"] = "The network's security is independent of bitcoin and reliant on its own proof-of-stake mechanism.\n\nIts checkpoint mechanism does provide security against long-range attacks, enabling more secure light clients and shorter unbonding periods for validators.";
    BitcoinSecuritySnippet["Checkpoint"] = "The network's security is independent of bitcoin and reliant on its own consensus mechanism. Its checkpoint mechanism, however, ensures that after a transaction including a checkpoint reference is included on bitcoin, the network's state cannot be reverted without reorging bitcoin.";
    BitcoinSecuritySnippet["FeesPOSCheckpoint"] = "Periodic checkpoint transactions are made that pay fees to bitcoin miners.";
    BitcoinSecuritySnippet["MergeMineDA"] = "The network's data availability layer is merge-mined by bitcoin miners.";
    BitcoinSecuritySnippet["MergeMine"] = "The network is merge-mined by bitcoin miners.";
    BitcoinSecuritySnippet["MergeMineDAFees"] = "Fees from securing the network's data availability are paid to Bitcoin miners who optionally merge-mine the network.";
    BitcoinSecuritySnippet["MergeMineFees"] = "Fees from securing the network's are paid to Bitcoin miners who optionally merge-mine the network.";
    BitcoinSecuritySnippet["MergeMineMEV"] = "The network does not leak MEV to bitcoin. Bitcoin miners may take advantage of opportunities to extract MEV if the network is experiencing high activity.";
    BitcoinSecuritySnippet["Template"] = "Template used for the template prop file.";
})(exports.BitcoinSecuritySnippet || (exports.BitcoinSecuritySnippet = {}));
exports.TechnologySnippet = void 0;
(function (TechnologySnippet) {
    TechnologySnippet["EVM"] = "The network uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem.";
    TechnologySnippet["FaultProofs"] = "The network leverages cryptographic proofs that enables challengers to contest a proposed state transition that contains invalid or fraudulent transactions. Networks that use fault proofs (e.g., optimistic rollups) initially assume that new blocks are valid, then rely on users or watchtowers to challenge blocks if they include invalid state transitions, which are then resolved onchain or a parent blockchain. Fault proofs are largely used to secure bridge programs securing user funds.";
    TechnologySnippet["IBC"] = "This protocol has implemented support for IBC, enabling users to transfer their tokens to other supported IBC-enabled blockchains. IBC, or the Inter-Blockchain Communication protocol, is a blockchain interoperability standard that enables connected chains to transfer assets and messages between each other.";
    TechnologySnippet["BitcoinStakingUnderReview"] = "Bitcoin staking is a mechanism by which BTC on the L1 is locked in a staking script. The BTC is then directed to validators on a Proof-of-Stake network which adds to the network's economic security. These scripts see users retain custody of their funds.\n\nAll bitcoin staking mechanisms vary in implementation. We are currently reviewing the network's exact staking mechanism.";
    TechnologySnippet["Statechain"] = "Statechains are offchain protocols where users custody an L1 UTXO collaboratively with a statechain entity. Users transfer their keyshare for a specific UTXO, offchain, to a new recipient with a decrementing timelock. Every UTXO has a pre-signed unilateral exit path. Statechain entities are expected delete the keyshare it held with previous owners and only interact with the current holder of the UTXO.\n\nIf the statechain entity interacts with a previous owner, then they can double spend the current owner. And if a previous owner broadcasts its unilateral exit transaction, then the current owner must broadcast their own to ensure ownership of funds (due to the current owner's timelocks expiring before previous owners).";
    TechnologySnippet["FROST"] = "FROST (Flexible Round-Optimized Schnorr Threshold Signatures) is a protocol that minimizes the number of rounds of communication between participants in Schnorr signature schemes, reducing network bandwidth, time, and probability of errors. It can be used to implement 'n-of-m' threshold signatures represented by a single signature on the blockchain. This saves block space and increases privacy by making them indistinguishable from other, more common spend types.";
    TechnologySnippet["ArbitrumStylus"] = "In addition to being EVM-compatible, the network leverages Stylus to support developers building WASM-based smart contracts. Developers can decide between building EVM-based applications or writing smart contracts in more common programming languages, such as Rust, and compiling these contracts to WASM.";
    TechnologySnippet["AnyTrustDA"] = "The data needed to reconstruct the state and construct fraud proofs is made available by a permissioned committee. The committee is based on the AnyTrust data availability protocol. This sees a committee of signers produce a data availability certificate that the data needed for proof construction is available for a certain amount of time.\n\nIn this design, a sequencer posts batches of transactions to the committee. After the signers receive this batches and produce a data availability certificate, the sequencer submits the latest hash of these batches, and a corresponding Data Availability Certificate, to corresponding light clients (i.e. bridges).";
    TechnologySnippet["BitcoinScript"] = "Bitcoin Script is bitcoin\u2019s scripting language that enables users to define the conditions under which a Bitcoin UTXO can be spent. It is a low-level Assembly-based programming language.";
    TechnologySnippet["OP_CAT"] = "OP_CAT is a Bitcoin opcode, short for Operation Concatenate. It allows the combination of two data elements on the Bitcoin stack. The opcode was originally introduced by Satoshi Nakamoto, but was removed due to potential denial of service attack vectors.\n\nOP_CAT would enable more expressive smart contracts on bitcoin, including \u201Ccovenants\u201D, a way to set spending conditions on individual UTXOs. Teams are also reviewing how it can support SNARK verification in Script, which would further improve bridging L1 assets to second layer protocols.";
    TechnologySnippet["MergeMining"] = "Merged mining is a feature of the network's consensus mechanism that allows coupling between bitcoin and the alternative network. Essentially, BTC mining pools add references to the network's blocks in mining jobs sent to mining participants. Additionally, because the network's mining algorithm is the same as bitcoin\u2019s, there is little added energy expenditure. This sees bitcoin miners have an ability to additionally mine a percentage of the network's blocks. Miners are incentivized through earning a portion of transaction fees or newly issued tokens.";
    TechnologySnippet["Elements"] = "The network is built with the Elements technology stack. Elements is an open-source technology stack built on top of the Bitcoin code base. Since it is built on the Bitcoin code base, Elements enables the network to be a testing ground for potential changes to the Bitcoin protocol.";
    TechnologySnippet["ConfidentialTransactions"] = "The network enables Confidential Transactions which can provide users a higher level of privacy. This feature ensures that anyone, other than the participants in a transaction, cannot see the tokens, and the amount of, transferred between them.";
    TechnologySnippet["OrgaMerk"] = "Orga is a custom-built stack designed for creating Proof-of-Stake (PoS) blockchains in Rust, offering an alternative to the Cosmos SDK. At its core, Orga integrates with CometBFT as its consensus engine.\n\nMerk complements Orga as a high-performance Merkle key/value store, serving as the state database for blockchains. It supports the proof generation necessary for the networks's IBC interactions with other networks and for enabling lightweight client functionalities for end users.";
    TechnologySnippet["Template"] = "Template used for the template prop file.";
    TechnologySnippet["vUTXO"] = "vUTXOs are offchain representations of UTXOs. They are similar to Bitcon's UTXOs, but entirely held offchain. vUTXOs have unilateral spending paths and can be used to create an onchain UTXO at a later time. As vUTXOs are transferred offchain, users work with a service provider to create updated, pre-signed unilateral spending paths onchain to ensure users can create a new onchain UTXO and claim their funds.";
})(exports.TechnologySnippet || (exports.TechnologySnippet = {}));
exports.UseCaseSnippet = void 0;
(function (UseCaseSnippet) {
    UseCaseSnippet["OnchainApps"] = "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.";
    UseCaseSnippet["OffchainUTXOTransfers"] = "Users can transfer virtual representations of UTXOs offchain with the assistance of an operator. These transfers have fast, soft confirmation times and are lower in fees than L1 Bitcoin transactions.";
    UseCaseSnippet["UTXOTokenizedApplications"] = "The protocol can be used to improve the efficiency of UTXO-based token protocols. Users are able to transfer and trade tokenized UTXOs with faster confirmation times than Bitcoin L1 with trust tradeoffs. Tokenized applications may include stablecoin transfers or token exchange protocols.";
    UseCaseSnippet["BitcoinStaking"] = "Users can lock L1 BTC into staking script to support the network's security. The BTC is directed to validators within the Proof-of-Stake network. These scripts see users retain custody of their funds, but sees them take on slashing risks.\n\nIn return for locking their funds into a staking script, users are paid rewards in the form of fees or altcoin issuance.";
    UseCaseSnippet["TestingGround"] = "Since the network has enabled opcodes that are not yet live on Bitcoin, developers can deploy applications there to preview what it would be like on Bitcoin. This includes analyzing the builder experience, potential security vulnerabilities, and presenting how these changes might permanently affect the Bitcoin network.";
    UseCaseSnippet["TokenizedAssets"] = "The network enables developers and users alike to issue tokenized securities, stablecoins, and synthetic forms of cryptocurrencies.";
    UseCaseSnippet["IBCTransfers"] = "Using IBC, users can transfer tokens (including BTC-denominated tokens) to connected blockchains and engage in use-cases such as: 1) Get a USK loan on Kujira 2) Trade and provide liquidity on Osmosis 3) Trade perpetual swaps using Levana";
    UseCaseSnippet["OffchainTransfers"] = "The network itself can also be used for p2p payments denominated in BTC.";
    UseCaseSnippet["LightningCompatible"] = "The network is compatible with the Lightning Network. This means that users can pay lightning invoices from the network with the help of a service provider.";
    UseCaseSnippet["AIAgents"] = "Template for a protocol that uses AI agents to interact with the network.";
    UseCaseSnippet["Template"] = "Template used for the template prop file.";
})(exports.UseCaseSnippet || (exports.UseCaseSnippet = {}));
exports.KnowledgeBitSnippet = void 0;
(function (KnowledgeBitSnippet) {
    KnowledgeBitSnippet["EthereumL2"] = "This network is a layer 2 for Ethereum. For a view into the technology from an Ethereum perspective, head to [L2Beat](https://www.L2Beat.com) for their review.";
    KnowledgeBitSnippet["Template"] = "Template used for the template prop file.";
})(exports.KnowledgeBitSnippet || (exports.KnowledgeBitSnippet = {}));
exports.AdditionalSnippet = void 0;
(function (AdditionalSnippet) {
    AdditionalSnippet["UpgradeableContractsCentralizedAndNoExit"] = "The contracts related to this project are immediately upgradeable by a centralized party. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade, there is no exit delay and users are unable to leave the chain.";
    AdditionalSnippet["UpgradeableContractsFederatedAndExit"] = "The contracts related to this project are immediately upgradeable by a federation. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade by this federation, there is no exit delay and users are unable to leave the chain.";
    AdditionalSnippet["InitialReview"] = "This is the initial review of the network. We will conduct a full review of the network shortly in the future. The contents in this review are subject to change.";
})(exports.AdditionalSnippet || (exports.AdditionalSnippet = {}));
exports.OtherSnippet = void 0;
(function (OtherSnippet) {
    OtherSnippet["WithdrawalsAltRollup"] = "Withdrawing BTC-backed assets from the network depends on a variety of factors. First, users must trust the network operators to include their withdrawal request in a block. If the user's assets are locked in the network's official bridge program, they rely on a proposer to include their request in proposed state transition. After the state transition is finalized, the user can redeem their funds.\n\nIf a user's BTC-backed asset is minted directly onto the network, then the user's withdrawal request must be processed by the asset issuer.";
    OtherSnippet["NotASideSystem"] = "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.";
})(exports.OtherSnippet || (exports.OtherSnippet = {}));
//Below is snippets for alternative chains that we haven't been able to review yet due to volume.
exports.AtlSnippet = void 0;
(function (AtlSnippet) {
    AtlSnippet["FinalityConsensusNetwork"] = "Finality assurances are provided by an alternative consensus network. Users trust that once a transaction has been added to the chain it won't be reverted.";
    AtlSnippet["DAConsensusNetwork"] = "Data is published to, and made available by, full nodes participating in an alternative consensus network. Anyone can run a node and verify the current state of the network";
    AtlSnippet["OperatorsPoSNetwork"] = "Blocks are produced and proposed by an alternative proof-of-stake network.";
    AtlSnippet["PrioritizeLayers"] = "The Bitcoin Layers project prioritizes reviews on protocols that claim to be bitcoin layers. It also reviews bridges, token wrappers, and other mechanisms that support synthetic versions of bitcoin on other chains. If you'd ike to contribute to this review, feel free to submit a PR in our [GitHub](https://github.com/bitcoinlayers/bitcoinlayers) or join our [telegram group](https://t.me/+8rv-1I2gkmQ4ZmJh) to discuss.";
})(exports.AtlSnippet || (exports.AtlSnippet = {}));
const Alertsnippet = {
    ProofOfProofConsensus: {
        type: "warning",
        title: "Note on Hemi's Proof-of-Proof consensus",
        content: "While Hemi's anchors its state to bitcoin, the network is currently managed by a centralized operator. The operator is unable to revert Hemi's state after Hemi full nodes compute a new state root. This is independent of any additional finality guarantees potentially provided by bitcoin.",
        linkText: "Learn more about bitcoin anchoring for alternative blockchains",
        linkUrl: "https://lxresearch.co"
    },
    AltRollupAltTokenNoFraudProofs: {
        type: "error",
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge.",
    },
    StatechainKeyDeletion: {
        type: "warning",
        title: "Statechain entity cannot prove key deletion",
        content: "In statechains, there is no way to cryptographically prove that a statechain entity has deleted a keyshare it held with a previous owner. Users must trust the statechain entity to act honestly. If the statechain does not delete previously held keyshares, then the current owner is not the unilateral owner of the funds, and the statechain entity and a previous owner can double spend them. This effectively means that users do not have provable assurances that they are the only party that can immediatetly spend the UTXO with the statechain entity.",
        expandable: true,
    },
    AltRollupAltTokenNoFraudProofsPlusUpgrade: {
        type: "error",
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge escrowing funds does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge. Additionally, the bridge contract can be upgraded by a centralized party or federation. A malicious upgrade could result in loss of user funds.",
        expandable: true,
    },
    AltRollupAltTokenNoFraudProofsPlusUpgradeDelayed: {
        type: "error",
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge escrowing funds does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge. Additionally, the bridge contract can be upgraded by a centralized party or federation. A malicious upgrade could result in loss of user funds. There is a delay to upgrades.",
        expandable: true,
    },
    WrapperCentralized: {
        type: "error",
        title: "Bitcoin backing this token is secured by a centralized party",
        content: "The bitcoin backing this token is secured by a centralized party. This party can unilaterally spend the funds backing this wrapped asset. Malicious operators can result in loss of user funds.",
    },
    AltRollupAltTokenProofsUpgrade: {
        type: "error",
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. Users must consider how the native bitcoin is secured. Additionally, while there is a proving system in place, the bridge contract can instantly upgraded by a centralized party or federation. In the event of a malicious upgrade, user funds could be stolen.",
        expandable: true,
    },
    AltRollupAltTokenUnderReview: {
        type: "warning",
        title: "This token is not bridged to the network from bitcoin",
        content: "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge.",
    },
    BitcoinBridgeNoSigners: {
        type: "error",
        title: "The signers for this bridge have not been disclosed",
        content: "The signers for this bitcoin two-way peg have not been disclosed. The signers have unilateral control of funds backing this wrapped asset. Collusion can result in loss of user funds. There is no reputational damange for these signers if they act maliciously.",
        expandable: true,
    },
    SecurityModelDifference: {
        type: "warning",
        title: "Important Security Consideration",
        content: "Hemi's security model is fundamentally different from Bitcoin's. Users should understand that they are not protected by Bitcoin's hash rate when using Hemi.",
        linkText: "Learn more about Bitcoin security",
        linkUrl: "https://docs.hemi.xyz/security"
    },
    CentralizedSequencerRisk: {
        type: "warning",
        title: "Centralized Sequencer Risk",
        content: "The network is operated by a centralized sequencer. If this sequencer goes offline or becomes malicious, it could affect network operations and user fund accessibility.",
    },
    AltDALayerRisk: {
        type: "warning",
        title: "Alternative Data Availability Risk",
        content: "This network relies on an alternative data availability layer. If the DA layer becomes unavailable, the network cannot progress and user funds may be frozen.",
    },
    BridgeUpgradeRisk: {
        type: "warning",
        title: "Bridge Upgrade Risk",
        content: "Bridge contracts can be upgraded by a centralized party or federation. In case of a malicious upgrade, user funds could be at risk.",
    },
    UnderReviewNotice: {
        type: "info",
        title: "Section Under Review",
        content: "This section is currently under review. Some information may be incomplete or subject to change as our analysis progresses.",
    },
    AltRollupNotice: {
        type: "info",
        title: "Finality is not necessarily through the lens of a validating bridge",
        content: "The network is an alternative rollup. This means it uses another blockchain for data availability. From the view of its full nodes, the rollup's state is finalized after it it validates state updates published to the data availability layer. Therefore, the network's finality assurances are that of its data availability layer (assuming the node operation is permissionless). A state root may be additionally posted to the data availability layer to finalize bridge programs, but this is not a guarantee of finality. This guarantee ensures the network's bridge programs are secure and can permit withdrawals based on the network's state. This only applies to tokens that are locked in these specific's bridge programs. See the BTC custody section for more information.",
        expandable: true,
    },
    BridgeStandardMet: {
        type: "info",
        title: "This project meets our technical standards for bitcoin sidesystems",
        content: "The project has implemented the necessary infrastructure to meet our standards for bitcoin sidesystems. It implements an official bridge program that is managed by a distributed, publicly known federation. These operators risk damaging their public reputation if they act maliciously.",
        expandable: false,
    },
    UnderReview: {
        type: "info",
        title: "This section is under review",
        content: "Due to some nuance related to this specific implementation, we are reviewing a score for this section of the review.",
        expandable: false,
    },
};

/// Review snippets for Layers reviews
exports.Reviewsnippet = void 0;
(function (Reviewsnippet) {
    /// BTC Custody Review Snippets
    Reviewsnippet["AltRollupAltTokenFedFraudProofs"] = "The token is bridged from the network's parent chain. The bridge is secured by fraud proofs. Fraud proof submission is limited to a permissioned set of nodes.";
    Reviewsnippet["AltRollupAltTokenPermissionlessFraudProofs"] = "The token is bridged from the network's parent chain. The bridge is secured by fraud proofs. Anyone with sufficient financial and computational resources can submit a fraud proof.";
    Reviewsnippet["AltRollupAltTokenNoFraudProofs"] = "The token is bridged to the network's from a bridge contract hosted on its parent chain. The bridge does not have a functioning proof system. The proposer can submit a malicious state transition and steal funds from the bridge.";
    Reviewsnippet["AltRollupAltTokenValidityProofs"] = "The token is bridged to the network through a bridge contract hosted on its parent chain. This bridge contract is finalized by validity proofs which update the bridge's view of the network's state after being verified.";
    Reviewsnippet["CentralizedUpgradeableBridge"] = "A centralized admin can create a malicious smart contract upgrade. In the event of a malicious smart contract upgrade, there is no exit window for users. This means that the admin behind the bridge can steal all funds in the official bridge.";
    /// DA Review Snippets
    Reviewsnippet["EthereumRollupDA"] = "The data for network's state is made available by Ethereum full nodes. Anyone can run an Ethereum node and verify the state of the network.";
    Reviewsnippet["AltRollupAltDA"] = "The data for network's state is made available by an alternative data availability layer. Users trust that this data availability layer will make the data available so the network can make progress.";
    Reviewsnippet["AltL1DA"] = "Data relative to the network's state is stored and made available by its node operators. Anyone can run a node, keep a historical record of the network's state, and make that data available to other network participants as needed.";
    Reviewsnippet["AltRollupNoDA"] = "The network's state is not made available by a data availability layer. Users trust the network operator(s) to maintain a record of the network's state.";
    Reviewsnippet["AltL1DAPOW"] = "The data availability requirement is satisfied by sidechain full nodes. The network's node software is open-source, and anyone can run a full node to verify the current state of the chain.\n\nLike any sidechain, blocks can be orphaned, so miners are disincentivized to withhold data and not broadcast their blocks as they would not receive mining rewards.";
    Reviewsnippet["DAConsensusNetwork"] = "Data is published to, and made available by, full nodes participating in an alternative consensus network. Anyone can run a node and verify the current state of the network.";
    Reviewsnippet["DAFederation"] = "Data is published to, and made available by, full nodes participating in a federated validator set. Running a validator and full node in this set up is permissioned.";
    Reviewsnippet["AltL1DaBTCStake"] = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network. The network's data availability layer is secured via bitcoin staking.";
    Reviewsnippet["AltL1DaMergeMine"] = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network. The network's data availability layer is indirectly secured via bitcoin miners who merge-mine the network.";
    Reviewsnippet["AltDADAC"] = "Data relative to the network's state is stored and made available by a permissioned set of nodes. Users trust this committee to make the data available to them so they can verify the state of the network.";
    Reviewsnippet["StatechainDABlindedServer"] = "Transaction data is self-hosted. The operator blindly signs and timestamps the individual statechain states and the transfer history gets passed on between clients. Due to the use of blind signing, the operator remains unaware of the transfer history.";
    /// Operator Review Snippets
    Reviewsnippet["OperatorStatechainBlindedServerSingleServer"] = "The system employs a statechain entity that generates and updates key shares in addition to offering a blind signing service. The statechain entity is a centralized server.";
    Reviewsnippet["AltRollupBasedSequenced"] = "The network is a based sequenced rollup. L1 block producers are responsible for sequencing the network's transactions.";
    Reviewsnippet["AltRollupSelfProposeMain"] = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and send their transactions directly to its parent chain. Users can also self-propose their own state transition, and exit the network to its parent chain.";
    Reviewsnippet["AltRollupSelfProposeNone"] = "The network's proposer role is managed by one entity. The proposer can refuse to post state updates and also have liveness failures. If the proposer goes down, users cannot update state relative to its official bridge program and permit exits.";
    Reviewsnippet["AltRollupSelfSequenceMain"] = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and force include their transaction to be included in an upcoming sequence.";
    Reviewsnippet["AltRollupSelfSequenceNone"] = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users cannot sequence their own transactions if the sequencer goes down or censors them.";
    Reviewsnippet["OperatorsPoSNetwork"] = "Blocks are produced and proposed by an alternative proof-of-stake network.";
    Reviewsnippet["OperatorSidechainPOS"] = "The network's blocks are constructed by a distributed validator set. Validators participate in a proof-of-stake consensus network. Anyone with sufficient resources and token stake can become a validator and participate in block production.";
    Reviewsnippet["OperatorSidechainPOSBTCStake"] = "The network's blocks are constructed by a distributed validator set. Validators participate in a proof-of-stake consensus network. Anyone with sufficient resources and token stake can become a validator and participate in block production.\n\nPart of stake weight is derived from BTC stake that is assigned to a given validator.";
    Reviewsnippet["OperatorSidechainMergeMine"] = "Bitcoin miners who are willing are able to merge-mine the network and produce blocks. If interested parties do not possess enough hashpower to competitively solo mine, they can join a mining pool that support the network.";
    Reviewsnippet["OperatorFederated"] = "Blocks are proposed and finalized by a permissioned federation. Only a limited number of operators are able to participate in block production.";
    Reviewsnippet["OperatorCentralizedStatechain"] = "Offchain UTXO transfers are co-signed by the user and a single operator. Users trust this operator for liveness and ensuring the system remains operational.";
    Reviewsnippet["OperatorFederatedStatechain"] = "Offchain UTXO transfers are co-signed by the user and a federation of operators. Users trust this federation for liveness and ensuring the system remains operational.";
    /// Finality Review Snippets
    Reviewsnippet["FinalityAltNetworkUnderReview"] = "Finality assurances are provided by an alternative consensus network. We are reviewing this section.";
    Reviewsnippet["StatechainFinalityFederation"] = "Finality is provided by the statechain entity deleting the keyshare that it held with the previous owner. This implementation's statechain entity is comprised of a federation of signers where a certain threshold is needed to co-sign transfers.\n\nIf the entity does not delete the keyshare, then it can collude with a previous owner and double spend the new owner. There is no way to prove that the entity deleted its previous keyshare. Users are unable to have any finality assurances in this set up.";
    Reviewsnippet["StatechainFinalitySingleOperator"] = "Finality is provided by the statechain entity deleting the keyshare that it held with the previous owner. This implementation's statechain entity is a single signer.\n\nIf the entity does not delete the keyshare, then it can collude with a previous owner and double spend the new owner.\n\nThere is no way to prove that the entity deleted its previous keyshare. Users are unable to have any finality assurances in this set up.";
    Reviewsnippet["AltRollupFinality"] = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root may be posted to bridge programs.";
    Reviewsnippet["FinalityAnchorChain"] = "The network's consensus mechanism sees its validator set build upon a checkpoint it posts to bitcoin. Since a validator cannot build a valid block without referencing a block hash posted to bitcoin, the network cannot be reorged without reorging bitcoin.";
    Reviewsnippet["AltL1Finality"] = "State transitions are finalized by an alternative consensus mechanism with a distributed validator set.";
    Reviewsnippet["AltL1FinalityPOW"] = "The network's state transitions are validated by its full node set. After a block is mined by a miner, it is broadcast to its full node set who validates the block and includes it in the chain.";
    Reviewsnippet["AltL1FinalityFederatedFullNode"] = "After blocks are proposed by a block producer, a majority of the network operators are needed to sign off on the block to propagate it to the network. After this is done, full nodes accept the block and include it in the chain.";
    Reviewsnippet["CometBFTFinality"] = "The network uses CometBFT for consensus. Like Tendermint, the protocol on which CometBFT is based, CometBFT has single-slot finality, meaning that blocks cannot be re-organized once they are part of the canonical blockchain. More than \u2154 of validator voting power must sign commit votes to finalize a block. If validators attempt to commit multiple blocks at the same block height, their stake will be slashed.";
    /// Specific BTC Custody Snippets
    Reviewsnippet["UnderReview"] = "This two-way peg is under review";
    Reviewsnippet["CustodianPeg"] = "BTC backing this asset is managed by centralized parties";
    Reviewsnippet["CustodianDerivative"] = "This asset is backed by an alternative derivative of BTC";
    Reviewsnippet["FederationPeg"] = "BTC backing this asset is secured by a federation";
    Reviewsnippet["VariousCustodianPeg"] = "BTC backing this asset is secured by a number of individual custodians";
    Reviewsnippet["BitGowBTC"] = "wBTC is backed by a centralized consortium of three companies. These entities are responsible for custodying BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.";
    Reviewsnippet["ThresholdtBTC"] = "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed but permissioned two-way peg. This group of signers participate in a threshold signature scheme to secure the BTC that backs tBTC.";
    Reviewsnippet["CoinbasecbBTC"] = "Coinbase is responsible for securing the BTC that backs cbBTC. Users trust Coinbase to ensure the funds backing cbBTC are not stolen or lost.\n\nIn addition to securing the funds funds backing cbBTC, Coinbase can censor users from using cbBTC and maintains unilateral control of cbBTC's smart contracts.";
    Reviewsnippet["BinanceBTCB"] = "When interacting with BTCB, users trust that Binance, a centralized custodian, will safely custody the BTC backing BTCB. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their BTCB tokens. They also trust that Binance will effectively manage the BTC and not lose access to it. If the BTC backing BTCB, BTCB tokens could become effectively worthless.";
    Reviewsnippet["LombardLBTC"] = "BTC backing Lombard LBTC is secured by a network of validators participating in Lombard\u2019s security consortium. The security consortium participates in a CometBFT consensus protocol. Adding and removing validators from this consortium is handled by the current validator set within a given epoch.\n\nThere are currently [nine (9) validators](https://etherscan.io/address/0xdad58DfA5c1a7a34419AFdBE1f0d610efeea95E4#readProxyContract) participating in securing the BTC that backs LBTC.";
    Reviewsnippet["SolvBTC"] = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).";
    Reviewsnippet["xSolvBTC"] = "Four entities custody the bitcoin assets backing xSolvBTC tokens. These entities are Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking). Ceffu and Cobo are the custodians for funds that are staked with Babylon.";
    Reviewsnippet["PumpBTC"] = "PumpBTC works with custodial providers to swap PumpBTC deposits into native BTC for BTC staking. When a user deposits a BTC derivative token (e.g. wBTC) into the PumpBTC contract, they are given PumpBTC in return. Cobo and Coinover have been mentioned as operators participating in Pump.";
    Reviewsnippet["UniRouterBTC"] = "Users trust that the UniRouter team has set up secure custody practices and has BTC reserves backing uniBTC. UniRouter has not disclosed who secures the BTC backing uBTC.";
    Reviewsnippet["AvalancheBTCb"] = "Ava Labs has disclosed that users trust a network of entities who participate in securing the BTC that backs BTCb. These eight entities are also reported to run special HSM hardware.\n\nThe eight entities securing the bridge are: Halborn, Avascan, Bware Labs, Ankr, Chainstack, Protofire, Blockdaemon, and Ava Labs.";
    Reviewsnippet["BedrockUniBTC"] = "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into the uniBTC smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens. To deposit these tokens on Babylon, the protocol relies on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon. Bedrock has not disclosed who is responsible for securing and staking native BTC on users' behalf.";
    Reviewsnippet["LorenzostBTC"] = "Users trust Lorenzo, the operators of Lorenzo stBTC, to secure and stake native BTC that backs stBTC. It has also been stated in Lorenzo's [marketing materials](https://medium.com/@lorenzoprotocol/lorenzo-allies-with-cobo-ceffu-and-chainup-e0d824c4744d) that custodian providers Cobo, Ceffu, and Chainup are participating in Lorenzo's protocol as custody providers, but their documentation does not claim this.";
    Reviewsnippet["AcornaBTC"] = "Users of aBTC reportedly trust a multi-signature wallet to secure the funds backing aBTC. Acorn's documentation mentions that a multi-signature wallet, supported by HSMs, is responsible for securing funds that back aBTC. Acorn has not disclosed the operators of this wallet.";
    Reviewsnippet["ibtcnetworkibtc"] = "iBTC is a two-way peg that leverages DLC contracts between various institutions and a federated attestor network. We are reviewing its trust assumptions.";
    Reviewsnippet["babypie"] = "An MPC set up between Babypie and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Babypie's claims in their documentation are being executed in practice.";
    Reviewsnippet["xlink"] = "There is limited information available on Xlink aBTC's custody mechanism for BTC backing aBTC. Users trust Alex, the project behind Xlink, to set up secure custody practices. Xlink's [website](https://www.xlink.network/) mentions that institutional grade MPC solutions are used.";
    Reviewsnippet["FireBTC"] = "An MPC set up between Ignition and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Ignition's claims in their documentation are being executed in practice.";
    Reviewsnippet["SolvBTCENA"] = "SolvBTC.ENA is a derivative asset that represents SolvBTC locked in a vault executing a trading strategy.\n\nSolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).The token is backed by [SolvBTC](https://www.bitcoinlayers.org/infrastructure/solv-solvbtc).\n\nUsers expose themselves to smart contract and application risks when depositing funds into SolvBTC.ENA.";
    Reviewsnippet["KrakenKBTC"] = "Kraken, a centralized custodian, secures the BTC backing kBTC. The funds backing kBTC are held at Kraken Financial, a Wyoming-chartered SPDI (Special Purpose Depository Institution).";
    Reviewsnippet["MerlinMBTC"] = "BTC backing Merlin M-BTC is secured via an MPC wallet managed by Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Merlin has stated that more players are being added into this custody scheme.";
    Reviewsnippet["ObeliskoBTC"] = "Obelisk's documentation claims that users deposit BTC into an MPC scheme to mint oBTC on a respective destination chain.";
    Reviewsnippet["BTCTRON"] = "When users swap BTC for BTCTRON, they send their BTC to Poloniex, a centralized custodian. Information on how the BTC is secured is not available.";
    Reviewsnippet["BabylonStakedBTC"] = "Babylon Staked BTC is native BTC locked in a L1 staking script. Users lock their funds in the script with the help of a covenant emulator committee. Users can withdrawal their funds from the script at any time with the help of the covenant emulator committee. If the committee is offline, users can spend their funds after a timelock expires.\n\nStaked BTC comes with additional trust assumptions such as slashing conditions. We are reviewing these trust assumptions related to Babylon.";
    Reviewsnippet["SparkBTC"] = "Users custody funds collectively with the statechain entity in a 2-2 multisig. When funds are transferred, users trust the statechain entity to delete the keyshare it held with the previous owner so it cannot collectively spend funds with past owners.";
    Reviewsnippet["MercuryLayerBTC"] = "The statechain setup involves locking a UTXO onchain with the private key shared between the operator and the current statecoin owner. Although the Mercury Layer server acts as a trusted entity, users are safeguarded against potential unresponsiveness by having the ability to unilaterally exit and enforce their UTXO ownership onchain as each transfer is secured by a decrementing timelock mechanism and a series of backup transactions.";
    Reviewsnippet["HyperliquidBTC"] = "The Unit Protocol consists of a network of 3 guardians participating in an MPC scheme. These guardians are responsible for securing the BTC backing a BTC-denominated asset on Hyperliquid. They are also responsible for executing signing events related to the asset.";
    Reviewsnippet["SimpleSBTC"] = "BTC backing Simple sBTC is secured by a [3/5 multisig](https://mempool.space/address/bc1ps0qa22q30rrp4584gz4teqkchn76wakzaq6mlhsv6sg36e0fl83sss2vxa). Information on who the signers are for this multisig and their signing mechanisms is unavailable.";
    Reviewsnippet["BoolBTC"] = "The Bool Network has not disclosed its custody mechanism for BTC backing bBTC across the various networks its deployed on. In its documentation, it references a custody mechanism that would see an approved entity be able to set up a 2-2 multisig between Bool and the entity.\n\nIt is possible this is the set up for bBTC custody across the chains its deployed on. In any case, users trust that Bool Network and the development teams behind specific networks have set up secure custody practices.\n\n\u26A0\uFE0F Bool Network has [pivoted](https://x.com/DeepSafe_AI/status/1881704352768999641) and may no longer be maintaining its bridge infrastructure.\n\n[Source](https://docs.bool.network/interoperability-protocol/self-custody/channels)";
    Reviewsnippet["NomicNBTC"] = "Users deposit BTC into a Reserve Wallet to receive nBTC on Nomic. The Reserve Wallet is a Bitcoin L1 multisig wallet managed by the Nomic signatory set. The Nomic signatory is made up of the top 20 Nomic validators measured by weighted stake.\n\nBecoming a signatory requires staking NOM tokens. Disbursing funds from the reserve wallet requires a 2/3s threshold, weighted by voting power through NOM tokens.";
    Reviewsnippet["StacksSBTC"] = "sBTC is a bridge between bitcoin and stacks managed by 14 institutional signers. sBTC on Stacks is backed by BTC held in a wallet managed by these signers. The identities of entities participating in the sBTC bridge are publicly known.\n\nIf 10 of the signers colluded, they could steal all of the BTC backing sBTC. You can find the signers [here](https://bitcoinl2labs.com/sbtc-rollout#sbtc-signers).";
    Reviewsnippet["AlexBTC"] = "Users trust Wrapped, a custodian provider, with the custody of BTC backing xBTC. Alex, a DeFi project largely associated with the Stacks ecosystem, acquired Wrapped and has initiated a transition to move xBTC into sBTC.\n\nFunds that are not moved into sBTC are still secured by [Wrapped](https://wrapped.com/).";
    Reviewsnippet["BsquaredBTC"] = "Previous blog posts have stated that when users deposit funds into Bsquared, they deposit funds into a MPC wallet managed by the Bsquared Network team and Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Bsquared has stated that more players are being added into this custody scheme.";
    Reviewsnippet["SolvBTCdotSolv"] = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc). Multisigs securing derivative assets backing by SolvBTC are secured by GnosisSafes with 5 signers.";
    Reviewsnippet["BTCN"] = "BTCN is an Ethereum-based ERC-20 token. It is a BTC-derivative asset that is backed by cbBTC and wBTC. All of the BTCN supply is locked into Corn\u2019s ERC-20 Bridge contract on Ethereum and is in escrow. On Corn, BTCN is primarily stored in the Bitcorn OFT contract.\n\nThe BTCN contract is managed by the [0xCff...2C7D](https://etherscan.io/address/0xcff1ad9f09b32252171207e8525c90b18d4e2c7d#code) multisig address on Ethereum. The multi-sig has a 2/4 signing threshold.";
    Reviewsnippet["LiquidLBTC"] = "BTC withdrawals are currently permissioned by the Liquid federation. Users must trust that when they deposit BTC into the Liquid blockchain, the signers will not collude and steal their BTC. Most users typically acquire L-BTC on secondary marketplaces, not through bridge deposits. Supported marketplaces for L-BTC are also members of the Liquid federation. Users trust that the federation will not steal the BTC, which would leave their newly acquired L-BTC worthless. The BTC that backs L-BTC is held in a 11-15 multi-sig wallet where 11 (\u2154 + 1) of the signers would need to be compromised in order to steal the BTC.\n\nNot all signers for the Liquid two-way peg are publicly disclosed.";
    Reviewsnippet["SideBTC"] = "Side sBTC is managed by 21 signers who additionally participate as validators in Side's proof-of-stake consensus.\n\nThese signers participate in a TSS network that where trusted validators perform signing duties for sBTC abd Side Chain.";
    Reviewsnippet["RootstockRBTC"] = "The BTC that backs RBTC is secured by a 5-of-9 federated multisig, referred to as the Powpeg (Proof of Work Peg). The signers of the Powpeg run specialized HSM hardware to secure the private keys used for signing Powpeg transactions.\n\nThe identities of entities participating in the Powpeg are publicly known. Users trust the operators of the Powpeg to custody their funds.\n\nPowpeg signer identities and attestations can be found [here](https://rootstock.io/powpeg/).";
    Reviewsnippet["AlloBTC"] = "BTC backing AlloBTC is custodied by Cobo, a centralized exchange. Cobo offers a 2/2 MPC custody solution where they co-custody funds along with protocols leveraging their servives. AlloBTC has not disclosed if this is the case in their documentation or marketing materials.";
    Reviewsnippet["KinzaBTC"] = "Kinza's kBTC is backed by BTC held in custodian wallets. These wallets are secured by an MPC scheme where Kinza, Cobo, and Coinover participate as signers. Cobo and Coinover are institutional custody providers.";
    Reviewsnippet["pStakeyBTC"] = "pStake's yBTC is backed by BTC held in custodian wallets. These wallets are secured by signers participating in an MPC scheme. pStake has a dedicated Cobo account where users' funds are held.";
    Reviewsnippet["enzoBTC"] = "Funds backing enzoBTC are secured by various custodians including Cobo, Ceffu, and Chainup.";
    Reviewsnippet["TwentyOnecoBTC"] = "BTC backing 21.co BTC is held by third party custodians. 21.co has not officially disclosed the identities of these custodian providers.";
    Reviewsnippet["BedrockbrBTC"] = "Bedrock brBTC is a derivative asset backed by other wrapped BTC assets. When depositing funds for brBTC, users take on smart contract risks in addition to the custodian risk related to the backing asset.\b\bBedrock brBTC may be backed by [uniBTC](https://www.bitcoinlayers.org/infrastructure/bedrock-unibtc), [FBTS](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [M-BTC](https://www.bitcoinlayers.org/infrastructure/merlin-mbtc), or [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb).";
    Reviewsnippet["BadgereBTC"] = "To obtain eBTC, users must deposit Lido stETH, an ETH-denominated asset, as collateral to borrow eBTC. If a users's collateralization ratio falls below a certain threshold, they can be liquidated. Collateralization ratios are based on the ETH/BTC price pair";
    Reviewsnippet["HemiBTC"] = "BTC backing HemiBTC is secured in a single-signature bitcoin address. Hemi claims that they use a threshold signature scheme to move funds from this address, but the specific siganture scheme, and participating signers, have not been officially disclosed.";
    Reviewsnippet["iBTC"] = "BTC backing iBTC is secured by numerous 2-2 multisigs between institutions and iBTC's attestor network. iBTC network's attestor network has a 2/3s majority signing threshold and uses FROST to produce valid signatures to co-sign movement of funds related to iBTC BTC multisigs.\n\nUsers who acquire iBTC in onchains market trust that their tokens will remain backed by institutions supplying liquidity.";
    Reviewsnippet["MerlinwBTC"] = "BTC backing Merlin wBTC is likely secured by Cobo, a centralized institution. When users deposit BTC into the Merlin Chain bridge, they are depositing funds into custodian addresses managed by Cobo.";
    Reviewsnippet["ZueszBTC"] = "zBTC has a group of guardians securing the BTC that backs zBTC. This BTC is dispersed across a number of individual addresses, meaning that each custodian custodies a subset of funds in isolation of other custodians. Users should be aware of which custodian custodies the funds backing zBTC when using the network.";
    Reviewsnippet["MantamBTC"] = "mBTC is backed by [BitGo wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc) and [Binance BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb). When users exchange these funds for mBTC, reserve assets are secured by vaults managed by Ceffu, an centralized institution.";
    Reviewsnippet["SolvsolvbtcCORE"] = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc). We are reviewing if SolvBTC.CORE is natively minted or bridged from another chain.";
    Reviewsnippet["SolvsolvbtcB"] = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc). We are reviewing if SolvBTCb is natively minted or bridged from another chain.";
    Reviewsnippet["BitLayerwBTC"] = "Bitlayer's current BTC bridge is a federated two-way peg with institutional signers. Bitlayer is working with multiple MPC custody platforms.\n\nUsers do not custody bitcoin assets backing tokens on Bitlayer.\n\nNote that we are unable to verify the participants in this model.";
    Reviewsnippet["OsmosisBTC"] = "BTC on Osmosis is backed by a number of collateral assets; WBTC.eth.axl, wBTC, nBTC, ckBTC, and cbBTC.axl.";
    Reviewsnippet["smartcontractreview"] = "This token has trust assumptions past the initial two-way peg. We are reviewing specific smart contracts related to this implementation to learn more about these assumptions.";
    Reviewsnippet["BotanixBTC"] = "BTC backing Botanix BTC is secured by a federation of 16 signers. The identities of entities participating in the federation are [publicly known](https://docs.botanixlabs.com/botanix/get-to-know-botanix/roadmap-to-spiderchain/founding-federation/federation-overview). Users trust the operators of the federation to custody their funds, process deposits, and honor withdrawals.";
    Reviewsnippet["GoatzBTC"] = "BTC backing Goat zBTC is secured by a federation of signers participating in a threshold signature scheme. The identities of entities participating in the federation have not been publicly disclosed. Users trust the operators of the federation to custody their funds, process deposits, and honor withdrawals.";
    Reviewsnippet["BotanixStakedBTC"] = "Botanix stBTC is a derivative asset backed by Botanix pBTC locked in a staking vault. The contract is upgradable [by a 3/5 multisig](https://botanixscan.io/address/0x09C5874F1425697C81c34F58957f2BE584306312).";
    Reviewsnippet["WrappedRootstockRBTC"] = "wrBTC is a derivative of Rootstock rBTC. To mint wrBTC, users deposit rBTC into the Wrapped Rootstock rBTC smart contract. The smart contract is not upgradeable. Users trust the code behind the smart contract and the [RBTC federation](https://www.bitcoinlayers.org/infrastructure/rootstock-rbtc) to keep RBTC pegged 1:1 with BTC.";
    Reviewsnippet["MidasMBTC"] = "Midas mBTC is backed by assets held in Fireblocks and Fordefi institutional wallets.";
    Reviewsnippet["SwellswBTC"] = "swBTC is a derivative of [BitGo wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc) that is minted when wBTC is locked into a Swell smart contract. Users trust the code behind the smart contract and wBTC to remain pegged 1:1 with BTC.";
    Reviewsnippet["RoverrovBTC"] = "Rover rovBTC is a liquid version of Botanix's stBTC. The rovBTC vault contract is instantly upgradable by a [3/4 multisig](https://botanixscan.io/address/0xDe46F9bF2d99F2db88440C74DC4c2A373fc9F69e). Users trust the contract owners to not implement malicious upgrades and the underlying assets to remain pegged 1:1 with BTC.";
    Reviewsnippet["KikiIBTC"] = "Kiki iBTC is a liquid token representing bitcoin locked in the exSat Network. The custodian providers behind this token have not been publicly disclosed.";
    Reviewsnippet["TemplateBTC"] = "This is a fake prop used for the template file.";
})(exports.Reviewsnippet || (exports.Reviewsnippet = {}));

exports.CustodyTitle = void 0;
(function (CustodyTitle) {
    CustodyTitle["BitcoinNative"] = "Bitcoin Native";
    CustodyTitle["Federated"] = "Federated";
    CustodyTitle["Custodial"] = "Custodial";
})(exports.CustodyTitle || (exports.CustodyTitle = {}));
exports.CustodyText = void 0;
(function (CustodyText) {
    CustodyText["BitcoinNaitve"] = "placeholder";
    CustodyText["Federated"] = "placeholder";
    CustodyText["Custodial"] = "placeholder";
})(exports.CustodyText || (exports.CustodyText = {}));
const custodyProps = {
    "bitcoin-native": {
        label: "Bitcoin Native",
        description: "These protocols use Bitcoin's native features like 2-of-2 multisigs, payment channels, or statechains where users maintain control of their private keys and can unilaterally exit without trusting third parties. The security model relies entirely on Bitcoin's consensus and cryptographic guarantees.",
        networks: [
            "lightning",
            "mercurylayer",
            "spark"
        ]
    },
    "multisig": {
        label: "Multisig",
        description: "These protocols secure Bitcoin through multi-signature wallets managed by federations or validator sets. While not fully self-custodial, they distribute trust across multiple known parties rather than a single entity. Users must trust that a threshold of signers won't collude to steal funds.",
        networks: [
            "liquid",
            "stacks",
            "rootstock",
            "side",
            "nomic"
        ]
    },
    "mpc": {
        label: "MPC",
        description: "Multi-Party Computation (MPC) protocols use cryptographic schemes where multiple parties collectively manage private keys without any single party having full control. These systems often involve institutional custodians and threshold signature schemes to secure Bitcoin deposits.",
        networks: [
            "merlin",
            "bouncebit",
            "bsquared",
            "bitlayer",
            "hemi"
        ]
    },
    "custodial": {
        label: "Custodial",
        description: "These protocols rely on centralized custodians or trusted third parties to hold Bitcoin reserves backing tokens on their networks. Users must trust these entities not to steal funds and to maintain proper reserves. This includes major centralized exchanges and institutional custody providers.",
        networks: [
            "arbitrum",
            "avalanche",
            "base",
            "berachain",
            "bevm",
            "bitfinity",
            "bnbsmartchain",
            "bob",
            "core",
            "corn",
            "ethereum",
            "fantom",
            "fractal",
            "gnosis",
            "hyperliquid",
            "internetcomputer",
            "mezo",
            "optimism",
            "osmosis",
            "polygonpos",
            "polygonzkevm",
            "rollux",
            "scroll",
            "solana",
            "sonic",
            "starknet",
            "taiko",
            "tron",
            "zeta",
            "zksync"
        ]
    }
};

exports.Alertsnippet = Alertsnippet;
exports.custodyProps = custodyProps;
//# sourceMappingURL=index.js.map
