export enum Type {
    Infrastructure = "Infrastructure",
    Layer = "Layer",
}

export enum LiveStatus {
    Mainnet = "Mainnet",
    Testnet = "Testnet",
    Announced = "Announced",
    Proposed = "Proposed",
    Beta = "Beta",
    Deposits = "Deposits Live",
    BIP = "Bip Drafted",
    Activation = "Activation Client",
}

export enum Purpose {
    General = "General",
    Payments = "Payments",
    LiquidStaking = "Liquid Staking",
    EcashMint = "Ecash Mint",
    FederatedEcashMint = "Federated Ecash Mint",
    Staking = "Staking",
}

export enum RiskFactor {
    Low = "Low",
    Medium = "Medium",
    High = "High",
    VeryHigh = "Very High",
    Critical = "Critical",
    Unverified = "Unverified",
    UnderReview = "Under Review",
    NotApplicable = "Not Applicable",
    AlternativePoS = "Alternative PoS Network",
}

export enum RiskCategory {
    BtcCustody = "BTC Custody",
    DataAvailability = "Data Availability",
    NetworkOperators = "Network Operators",
    SettlementAssurance = "Settlement Assurance",
    UnilateralExits = "Unilateral Exits",
    BlockProduction = "Block Production",
    StateValidation = "State Validation",
    FinalityGuarantees = "Finality Guarantees",
    LivenessReorgResistance = "Liveness & Reorg Resistance",
}

export enum EntityType {
    CSV = "CSV",
    EthereumRollup = "Ethereum Rollup",
    Rollup = "Rollup",
    Federated = "Federated",
    Sidechain = "Sidechain",
    SidechainRollup = "Sidechain Rollup",
    SovereignRollup = "Sovereign Rollup",
    StateChannel = "State Channel",
    Statechain = "Statechain",
    VirtualUTXOs = "Virtual UTXOs",
    zkCSV = "zkCSV",
    Hybrid = "Hybrid Chain",
    Anchor = "Anchor Chain",
    ChaumianEcashProtocol = "Chaumian Ecash Protocol",
    FederationSDK = "Federation SDK",
    LiquidStaking = "Liquid Staking",
    Restaking = "Restaking",
    RollupSDK = "Rollup SDK",
    Staking = "Staking",
    PermissionedChain = "Permissioned Chain",
    ArkSidechain = "Ark on Sidechain",
    Sequencing = "Sequencing",
    DataAvailability = "Data Availability",
    Bridge = "Bridge",
    RaaS = "RaaS",
    BTCWrapper = "BTC Wrapper",
    ReserveAsset = "Reserve",
    Lending = "Lending",
    Yield = "Yield",
    SequencingDA = "Sequencing & DA",
    BitcoinBridge = "Bitcoin Bridge",
    MPCProtocol = "MPC Protocol",
    TBD = "To Be Determined",
    Ark = "Ark",
    AltL1 = "Alt. Layer 1",
    AltRollup = "Alt. Rollup",
    Alt = "Alt. Chain",
    SingleOp = "Single Opcode",
    GroupOp = "Group of Opcodes",
    StakedBTC = "Natively Staked BTC",
    "-" = "-",
}

export enum EntityCategory {
    BitcoinNative = "Bitcoin Native",
    Sidesystem = "Sidesystems",
    Alt = "Alt. L1s & More",
}

export enum Notice {
    NoBridge = "No native bitcoin bridge",
    Sidesystem = "Sidesystems",
    Reorg = "🚨 This project will be moved to the Alternative category after June 30th.",
}

export enum Site {
    Website = "Website",
    Docs = "Docs",
    Explorer = "Explorer",
    GitHub = "GitHub",
    Twitter = "Twitter",
}

//Below is snippets for bitcoin tokens. This is where we write the custody score for the token so we don't have to write it on dozens of pages.

export enum TokenSnippet { //TODO: Janusz to add more here
    UnderReview = "This two-way peg is under review",
    CustodianPeg = "BTC backing this asset is managed by centralized parties",
    CustodianDerivative = "This asset is backed by an alternative derivative of BTC",
    FederationPeg = "BTC backing this asset is secured by a federation",
    BitGowBTC = "wBTC is backed by a centralized consortium of three companies. These entities are responsible for custodying BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.",
    ThresholdtBTC = "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed but permissioned two-way peg. tBTC is minted on Ethereum and then bridged to the network via a custom bridge implementation.",
    CoinbasecbBTC = "Coinbase is responsible for securing the BTC that backs cbBTC. Users trust Coinbase to ensure the funds backing cbBTC are not stolen or lost.\n\nIn addition to securing the funds funds backing cbBTC, Coinbase can censor users from using cbBTC and maintains unilateral control of cbBTC's smart contracts.",
    BinanceBTCB = "When interacting with BTCB, users trust that Binance, a centralized custodian, will safely custody the BTC backing BTCB. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their BTCB tokens. They also trust that Binance will effectively manage the BTC and not lose access to it. If the BTC backing BTCB, BTCB tokens could become effectively worthless.",
    LombardLBTC = "BTC backing Lombard LBTC is secured by a network of validators participating in Lombard’s security consortium. The security consortium participates in a CometBFT consensus protocol. Adding and removing validators from this consortium is handled by the current validator set within a given epoch.\n\nThere are currently [nine (9) validators](https://etherscan.io/address/0xdad58DfA5c1a7a34419AFdBE1f0d610efeea95E4#readProxyContract) participating in securing the BTC that backs LBTC.",
    SolvBTC = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It’s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).",
    xSolvBTC = "Four entities custody the bitcoin assets backing xSolvBTC tokens. These entities are Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking). Ceffu and Cobo are the custodians for funds that are staked with Babylon.",
    PumpBTC = "PumpBTC works with custodial providers to swap PumpBTC deposits into native BTC for BTC staking. When a user deposits a BTC derivative token (e.g. wBTC) into the PumpBTC contract, they are given PumpBTC in return. The staking contract is operated by a [⅔ GnosisSafe](https://etherscan.io/address/0xAC364d14020f1da0044699691a91f06ca6131Fe3).\n\nCobo and Coinover have been mentioned as operators participating in Pump.",
    UniRouterBTC = "Users trust that the UniRouter team has set up secure custody practices and has BTC reserves backing uniBTC. UniRouter has not disclosed who secures the BTC backing uBTC.",
    AvalancheBTCb = "Ava Labs has disclosed that users trust a network of entities who participate in securing the BTC that backs BTCb. These eight entities are also reported to run special HSM hardware.\n\nThe eight entities securing the bridge are: Halborn, Avascan, Bware Labs, Ankr, Chainstack, Protofire, Blockdaemon, and Ava Labs.",
    BedrockUniBTC = "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into the uniBTC smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens. To deposit these tokens on Babylon, the protocol relies on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon. Bedrock has not disclosed who is responsible for securing and staking native BTC on users' behalf.",
    LorenzostBTC = "Users trust Lorenzo, the operators of Lorenzo stBTC, to secure and stake native BTC that backs stBTC. It has also been stated in Lorenzo's [marketing materials](https://medium.com/@lorenzoprotocol/lorenzo-allies-with-cobo-ceffu-and-chainup-e0d824c4744d) that custodian providers Cobo, Ceffu, and Chainup are participating in Lorenzo's protocol as custody providers, but their documentation does not claim this.",
    AcornaBTC = "Users of aBTC reportedly trust a multi-signature wallet to secure the funds backing aBTC. Acorn's documentation mentions that a multi-signature wallet, supported by HSMs, is responsible for securing funds that back aBTC. Acorn has not disclosed the operators of this wallet.",
    ibtcnetworkibtc = "iBTC is a two-way peg that leverages DLC contracts between various institutions and a federated attestor network. We are reviewing its trust assumptions.",
    babypie = "An MPC set up between Babypie and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Babypie's claims in their documentation are being executed in practice.",
    xlink = "There is limited information available on Xlink aBTC's custody mechanism for BTC backing aBTC. Users trust Alex, the project behind Xlink, to set up secure custody practices. Xlink's [website](https://www.xlink.network/) mentions that institutional grade MPC solutions are used.",
    FireBTC = "An MPC set up between Ignition and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Ignition's claims in their documentation are being executed in practice.",
    SolvBTCENA = "SolvBTC.ENA is a derivative asset that represents SolvBTC locked in a vault executing a trading strategy. The token is backed by [SolvBTC](https://www.bitcoinlayers.org/infrastructure/solv-solvbtc).",
    KrakenKBTC = "Kraken, a centralized custodian, secures the BTC backing kBTC. The funds backing kBTC are held at Kraken Financial, a Wyoming-chartered SPDI (Special Purpose Depository Institution)",
    MerlinMBTC = "When users deposit funds into Merlin, they deposit funds into a MPC wallet managed by Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Merlin has stated that more players are being added into this custody scheme.",
    ObeliskoBTC = "Obelisk's documentation claims that users deposit BTC into an MPC scheme to mint oBTC on a respective destination chain.",
    BTCTRON = "When users swap BTC for BTCTRON, they send their BTC to Poloniex, a centralized custodian. Information on how the BTC is secured is not available.",
    BabylonStakedBTC = "Babylon Staked BTC is native BTC locked in a L1 staking script. Users lock their funds in the script with the help of a covenant emulator committee. Users can withdrawal their funds from the script at any time with the help of the covenant emulator committee. If the committee is offline, users can spend their funds after a timelock expires.\n\nStaked BTC comes with additional trust assumptions such as slashing conditions. We are reviewing these trust assumptions related to Babylon.",
    SparkBTC = "Users custody funds collectively with the statechain entity. When depositing into Spark, users co-construct a pre-signed transactions with the statechain entity. This pre-signed transaction contains a unilateral exit path for the user if the statechain entity becomes unresponsive.\n\nWhen receiving funds via a statechain transfer, users re-construct the exit transaction to contain a lower timelock ensuring they can execute an exit transaction prior to a previous owner. Users additionally trust the statechain entity to delete the keyshare it held with the previous owner so it cannot collectively spend funds with past owners.",
    MercuryLayerBTC = "The statechain setup involves locking a UTXO onchain with the private key shared between the operator and the current statecoin owner. Although the Mercury Layer server acts as a trusted entity, users are safeguarded against potential unresponsiveness by having the ability to unilaterally exit and enforce their UTXO ownership onchain as each transfer is secured by a decrementing timelock mechanism and a series of backup transactions.",
    HyperliquidBTC = "The Unit Protocol consists of a network of 3 guardians participating in an MPC scheme. These guardians are responsible for securing the BTC backing a BTC-denominated asset on Hyperliquid. They are also responsible for executing signing events related to the asset.",
    SimpleSBTC = "BTC backing Simple sBTC is secured by a [3/5 multisig](https://mempool.space/address/bc1ps0qa22q30rrp4584gz4teqkchn76wakzaq6mlhsv6sg36e0fl83sss2vxa). Information on who the signers are for this multisig and their signing mechanisms is unavailable.",
    BoolBTC = "The Bool Network has not disclosed its custody mechanism for BTC backing bBTC across the various networks its deployed on. In its documentation, it references a custody mechanism that would see an approved entity be able to set up a 2-2 multisig between Bool and the entity.\n\nIt is possible this is the set up for bBTC custody across the chains its deployed on. In any case, users trust that Bool Network and the development teams behind specific networks have set up secure custody practices.\n\n⚠️ Bool Network has [pivoted](https://x.com/DeepSafe_AI/status/1881704352768999641) and may no longer be maintaining its bridge infrastructure.\n\n[Source](https://docs.bool.network/interoperability-protocol/self-custody/channels)",
    NomicNBTC = "Users deposit BTC into a Reserve Wallet to receive nBTC on Nomic. The Reserve Wallet is a Bitcoin L1 multisig wallet managed by the Nomic signatory set. The Nomic signatory is made up of the top 20 Nomic validators measured by weighted stake.\n\nBecoming a signatory requires staking NOM tokens. Disbursing funds from the reserve wallet requires a 2/3s threshold, weighted by voting power through NOM tokens.",
    StacksSBTC = "sBTC is a bridge between bitcoin and stacks managed by 14 institutional signers. sBTC on Stacks is backed by BTC held in a wallet managed by these signers. The identities of entities participating in the sBTC bridge are publicly known.\n\nIf 10 of the signers colluded, they could steal all of the BTC backing sBTC. You can find the signers [here](https://bitcoinl2labs.com/sbtc-rollout#sbtc-signers).",
    AlexBTC = "Users trust Wrapped, a custodian provider, with the custody of BTC backing xBTC. Alex, a DeFi project largely associated with the Stacks ecosystem, acquired Wrapped and has initiated a transition to move xBTC into sBTC.\n\nFunds that are not moved into sBTC are still secured by [Wrapped](https://wrapped.com/).",
    BsquaredBTC = "Previous blog posts have stated that when users deposit funds into Bsquared, they deposit funds into a MPC wallet managed by the Bsquared Network team and Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Bsquared has stated that more players are being added into this custody scheme.",
    SolvBTCdotSolv = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It’s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. SolvBTC is additionally backed by various BTC-derivative assets; M-BTC, BTCB, wBTC, FBTC, cbBTC, BTC.b, and tBTC.\n\nMultisigs securing derivative assets backing by SolvBTC are secured by GnosisSafes with 5 signers.",
    BTCN = "BTCN is an Ethereum-based ERC-20 token. It is a BTC-derivative asset that is backed by cbBTC and wBTC. All of the BTCN supply is locked into Corn’s ERC-20 Bridge contract on Ethereum and is in escrow. On Corn, BTCN is primarily stored in the Bitcorn OFT contract.\n\nThe BTCN contract is managed by the [0xCff...2C7D](https://etherscan.io/address/0xcff1ad9f09b32252171207e8525c90b18d4e2c7d#code) multisig address on Ethereum. The multi-sig has a 2/4 signing threshold.",
    LiquidLBTC = "BTC withdrawals are currently permissioned by the Liquid federation. Users must trust that when they deposit BTC into the Liquid blockchain, the signers will not collude and steal their BTC. Most users typically acquire L-BTC on secondary marketplaces, not through bridge deposits. Supported marketplaces for L-BTC are also members of the Liquid federation. Users trust that the federation will not steal the BTC, which would leave their newly acquired L-BTC worthless. The BTC that backs L-BTC is held in a 11-15 multi-sig wallet where 11 (⅔ + 1) of the signers would need to be compromised in order to steal the BTC.\n\nNot all signers for the Liquid two-way peg are publicly disclosed.",
    SideBTC = "Side sBTC is managed by 21 signers who additionally participate as validators in Side's proof-of-stake consensus.\n\nThese signers participate in a TSS network that where trusted validators perform signing duties for sBTC abd Side Chain.",
    RootstockRBTC = "The BTC that backs RBTC is secured by a 5-of-9 federated multisig, referred to as the Powpeg (Proof of Work Peg). The signers of the Powpeg run specialized HSM hardware to secure the private keys used for signing Powpeg transactions.\n\nThe identities of entities participating in the Powpeg are publicly known. Users trust the operators of the Powpeg to custody their funds.\n\nPowpeg signer identities and attestations can be found [here](https://rootstock.io/powpeg/).",
    smartcontractreview = "This token's trust asssumptions change across chains. We are reviewing the specific smart contracts related to this two-way peg. The relevant token contract is listed in the bottom of the review.",
    TemplateBTC = "This is a fake prop used for the template file.",
}

//Below is snippets for layer assessments.

export enum ReviewSnippet { //TODO: Janusz to add more here
    EthereumRollupDA = "The data for network's state is made available by Ethereum full nodes. Anyone can run an Ethereum node and verify the state of the network.",
    BasedSequencedAlt = "The network is a based sequenced rollup. L1 block producers are responsible for sequencing the network's transactions.",
    SelfProposeMainAlt = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and send their transactions directly to its parent chain. Users can also self-propose their own state transition, and exit the network to its parent chain.",
    SelfSequenceMainAlt = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and force include their transaction to be included in an upcoming sequence.",
    SelfSequenceNone = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users cannot sequencer their own transactions if the sequencer goes down or censors them.",
    FinalityAltRollupCentralizedProposer = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. Only a single, whitelisted validator is able to publish state updates to the parent chain. If this validator goes offline, then users of the network would be unable to update state relative to its official bridge and permit exits.\n\nA malicious validator could publish a malicious state transition and steal funds from the bridge on the parent chain.",
    FinalityAltRollupCentralizedProposers = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. Only whitelisted validators are able to publish state updates to the parent chain. If these validators go offline, then users of the network would be unable to update state relative to its official bridge and permit exits.",
    FinalityAltRollupFederationFraudProofs = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. A network of validators are able to publish state updates.\n\nIf they were to publish malicious state updates, they could be challenged via fault proofs. A federated group of validators are able to submit fault proofs.",
    FinalityAltRollupPermissionlessFraudProofs = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs.\n\nIf a proposer were to publish a malicious state update, they could be challenged via fault proofs. Anyone with sufficient capital resources can submit a fault proof.",
    FinalityAltRollupValidityProofs = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. An entity known as a prover periodically submits a validity proof to prove the correctness of a batch of transactions to the parent chain hosting the network's bridge program.",
    FinalityAnchorChain = "The network's consensus mechanism sees its validator set build upon a checkpoint it posts to bitcoin. Since a validator cannot build a valid block without referencing a block hash posted to bitcoin, the network cannot be reorged without reorging bitcoin.",
    AltL1DA = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network.",
    AltL1DAPOW = "The data availability requirement is satisfied by sidechain full nodes. The network's node software is open-source, and anyone can run a full node to verify the current state of the chain.\n\nLike any sidechain, blocks can be orphaned, so miners are disincentivized to withhold data and not broadcast their blocks as they would not receive mining rewards.",
    DAConsensusNetwork = "Data is published to, and made available by, full nodes participating in an alternative consensus network. Anyone can run a node and verify the current state of the network.",
    DAFederation = "Data is published to, and made available by, full nodes participating in a federated validator set. Running a validator and full node in this set up is permissioned.",
    AltL1DaBTCStake = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network. The network's data availability layer is secured via bitcoin staking.",
    AltL1DaMergeMine = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network. The network's data availability layer is indirectly secured via bitcoin miners who merge-mine the network.",
    AltDADAC = "Data relative to the network's state is stored and made available by a permissioned set of nodes. Users trust this committee to make the data available to them so they can verify the state of the network.",
    AltL1Finality = "State transitions are finalized by an alternative consensus mechanism with a distributed validator set.",
    AltL1FinalityPOW = "The network's state transitions are validated by its full node set. After a block is mined by a miner, it is broadcast to its full node set who validates the block and includes it in the chain.",
    AltL1FinalityFederatedFullNode = "After blocks are proposed by a block producer, a majority of the network operators are needed to sign off on the block to propagate it to the network. After this is done, full nodes accept the block and include it in the chain.",
    CometBFTFinality = "The network uses CometBFT for consensus. Like Tendermint, the protocol on which CometBFT is based, CometBFT has single-slot finality, meaning that blocks cannot be re-organized once they are part of the canonical blockchain. More than ⅔ of validator voting power must sign commit votes to finalize a block. If validators attempt to commit multiple blocks at the same block height, their stake will be slashed.",
    UnderReview = "This two-way peg is under review",
    NoFraudProofsBridge = "Users trust the proposer to not publish a malicious, unchallenged state transition. If a centralized party does not contest this state transition within a given time frame, all funds from the bridge can be stolen.",
    CentralizedUpgradeableBridge = "A centralized admin can create a malicious smart contract upgrade. In the event of a malicious smart contract upgrade, there is no exit window for users. This means that the admin behind the bridge can steal all funds in the official bridge.",
    OperatorsPoSNetwork = "Blocks are produced and proposed by an alternative proof-of-stake network.",
    OperatorSidechainPOS = "The network's blocks are constructed by a distributed validator set. Validators participate in a proof-of-stake consensus network. Anyone with sufficient resources and token stake can become a validator and participate in block production.",
    OperatorSidechainPOSBTCStake = "The network's blocks are constructed by a distributed validator set. Validators participate in a proof-of-stake consensus network. Anyone with sufficient resources and token stake can become a validator and participate in block production.\n\nPart of stake weight is derived from BTC stake that is assigned to a given validator.",
    OperatorSidechainMergeMine = "Bitcoin miners who are willing are able to merge-mine the network and produce blocks. If interested parties do not possess enough hashpower to competitively solo mine, they can join a mining pool that support the network.",
    OperatorFederated = "Blocks are proposed and finalized by a permissioned federation. Only a limited number of operators are able to participate in block production.",
    OperatorCentralizedStatechain = "Offchain UTXO transfers are co-signed by the user and a single operator. Users trust this operator for liveness and ensuring the system remains operational.",
    OperatorFederatedStatechain = "Offchain UTXO transfers are co-signed by the user and a federation of operators. Users trust this federation for liveness and ensuring the system remains operational.",
    FinalityStatechainSingleOperator = "Finality is provided by the statechain entity deleting the keyshare that it held with the previous owner. This implementation's statechain entity is a single signer.\n\nIf the entity does not delete the keyshare, then it can collude with a previous owner and double spend the new owner.\n\nThere is no way to prove that the entity deleted its previous keyshare. Users are unable to have any finality assurances in this set up.",
    FinalityStatechainFederation = "Finality is provided by the statechain entity deleting the keyshare that it held with the previous owner. This implementation's statechain entity is comprised of a federation of signers where a certain threshold is needed to co-sign transfers.\n\nIf the entity does not delete the keyshare, then it can collude with a previous owner and double spend the new owner. There is no way to prove that the entity deleted its previous keyshare. Users are unable to have any finality assurances in this set up.",
    StatechainDABlindedServer = "Transaction data is self-hosted. The operator blindly signs and timestamps the individual statechain states and the transfer history gets passed on between clients. Due to the use of blind signing, the operator remains unaware of the transfer history.",
    OperatorStatechainBlindedServerSingleServer = "The system employs a statechain entity that generates and updates key shares in addition to offering a blind signing service. The statechain entity is a centralized server.",
    FinalityAltNetworkUnderReview = "Finality assurances are provided by an alternative consensus network. We are reviewing this section.",
    TemplateReview = "This is a fake prop used for the template file.",

}

//Below is snippets for additional information in layers reviews.

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
    FeesPOSCheckpoint = "Periodic checkpoint transactions are made that pay fees to bitcoin miners.",
    MergeMineDA = "The network's data availability layer is merge-mined by bitcoin miners.",
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
    Template = "Template used for the template prop file.",
}
export enum KnowledgeBitSnippet { //TODO: Janusz to add more here
    EthereumL2 = "This network is a layer 2 for Ethereum. For a view into the technology from an Ethereum perspective, head to [L2Beat](https://www.L2Beat.com) for their review.",
    Template = "Template used for the template prop file.",
}
export enum AdditionalSnippet { //TODO: Janusz to add more here
    UpgradeableContractsCentralizedAndNoExit = "The contracts related to this project are immediately upgradeable by a centralized party. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade, there is no exit delay and users are unable to leave the chain.",
    UpgradeableContractsFederatedAndExit = "The contracts related to this project are immediately upgradeable by a federation. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade by this federation, there is no exit delay and users are unable to leave the chain.",
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

//Below is snippets for wrapper assessments.

export enum WrapperReviews { //TODO: Janusz to add more here
    GovernanceLow = "Users have at least 48 hours to submit a withdrawal request to the bridge operators if a malicious contract upgrade is pushed to the token contract.",
    GovernanceMediumLessThan48 = "Users have less than 48 hours to submit a withdrawal request to the bridge operators if a malicious contract upgrade is pushed to the token contract. A publicly disclosed federation with at least 5 operators can implement contract upgrades",
    GovernanceMedium = "There is no delay on contract upgrades. A publicly disclosed federation with at least 5 operators can implement contract upgrades.",
    GovernanceHigh = "There is no delay on contract upgrades. A known, centralized party or federation with less than 5 operators can implement contract upgrades",
    GovernanceVeryHigh = "There is no delay on contract upgrades. The identities of the signers who can implement contract upgrades is not disclosed",
    crLow = "The token has no pause or blacklist function. Users can transact the BTC-backed token freely on a given network.",
    CrBlacklistFederation = "The token has a blacklist function. A publicly known federation is able to blacklist users and stop them from being able to transact with the token.",
    CrBlacklistSingleSigner = "The token has a blacklist function. A single entity is able to blacklist users and stop them from being able to transact with the token.",
    CrBlacklistUnknown = "The token has a blacklist function. The identity of the entity who can blacklist users is unknown.",
    CrPauseFederation = "The token has a pause function. A publicly known federation is able to blacklist users and stop them from being able to transact with the token.",
    CrPauseSingleSigner = "The token has a pause function. A single entity is able to blacklist users and stop them from being able to transact with the token.",
    CrPauseUnknown = "The token has a pause function. The identity of the entity who can blacklist users is unknown.",
    crHigh = "The token has a pause and a blacklist function.",
    SupplyIssuanceLow = "Newly tokens are minted via an onchain smart contract. The smart contract executes a bitcoin light client and mints tokens when a deposit transaction occurs on bitcoin. Users can notify the smart contract of a deposit if necessary.",
    SupplyIssuanceMed = "A federation is responsible for passing messages that result in tokens being minted on a given layer.",
    SupplyIssuanceHigh = "A single entity is responsible for passing messages that result in tokens being minted on a given layer.",
    SupplyIssuanceVeryHigh = "The process of passing messages between bitcoin and a given layer to mint this token is not disclosed.",
}

//Below is snippets for additional information in wrapper reviews.

export enum WrapperSnippet { //TODO: Janusz to add more here
    BlacklistYes = "The token implementation has a blacklist function.",
}

export enum BTCWrapperTransparency { //TODO: Janusz to add more here
    ProofofReservesYes = "The project provides active proof-of-reserves. The proof-of-reserves can be seen",
    ProofofReservesNo = "The project has not published a Proof-of-Reserves. Users trust that the custodians holding native BTC backing the derivative asset to have ample reserves.",
    ProofofReservesStakingNo = "The project has not published a Proof-of-Reserves. Users trust that the custodians holding native BTC backing the derivative asset to have ample reserves and that operators are staking BTC onto Babylon on users’ behalf.",
    OperatorsDisclosedYes = "Operators of the protocol have been disclosed.",
    OperatorsDisclosedNo = "Operators of the protocol are not publicly disclosed.",
    WithdrawalsYes = "The network does not introduce any MEV on the Bitcoin L1. Users trust the sequencer to not reorder their transactions to extract MEV.",
    ContractsYes = "Contracts related to the project are source viewable and verified.",
    ContractsNo = "Contracts related to the project are not source viewable and verified.",
    ContractsSome = "Not all contracts related to the project are source viewable and verified.",
    RedemptionsYes = "Redemptions are enabled. The project has documented how redemptions are processed in their documentation.",
    RedemptionsYesNoDocs = "Redemptions are enabled. The project has not disclosed how redemptions are processed in their documentation.",
    StakeAttestationsNo = "The project does not provide any attestations that its BTC is in-fact staked onto Babylon.",
    StakeAttestationsYes = "The project does not provide any attestations that its BTC is in-fact staked onto Babylon.",
}

export enum DefinitionSnippet { //TODO: Janusz to add more here
    DefinitionAltRollup = "The network is an alternative rollup. It uses an alternative network for data availability and consensus. It supports a variety of BTC-backed assets.",
}

export interface Peg {
    name: string;
    infrastructureSlug: string;
    score: number;
    tier: RiskFactor | "";
    title: TokenSnippet | string;
    content: string;
}

export interface RiskSection {
    category: RiskCategory;
    score: number;
    tier: RiskFactor | "";
    title: string;
    content: string;
    pegs?: Peg[];
}

export interface ContentSection {
    id: string;
    title: string;
    content: { title?: string; content: string }[];
}

export enum AssessmentCategory {
    AssetCustody = "Asset Custody",
    StakingType = "Staking Type",
    SlashingRisk = "Slashing Risk",
    IncentiveModel = "Incentive Model",
    Reputation = "Reputation & Participation",
    Signing = "Signing Mechanism",
    KeyStorage = "Key Storage",
    CensorshipResistance = "Censorship Resistance",
    UserRisk = "User Risk",
    ThirdPartyStaking = "Third Party Staking",
    SelfCustodialStaking = "Self-custodial Staking",
    SupplyIssuance = "Supply Issuance",
    StakeAttestations = "Stake Attestations",
    Governance = "Governance",
}

export interface AssessmentSection {
    category: AssessmentCategory;
    score: number;
    tier: RiskFactor | "";
    title: string;
    content: string;
}

export interface BaseProject {
    type: Type;
    slug: string;
    title: string;
    entityType: EntityType;
    entityCategory?: EntityCategory;
    live: LiveStatus;
    staking: boolean;
    liquidStaking: boolean;
    bridge: boolean;
    underReview: boolean;
    riskFactors: (RiskFactor | "")[];
    nativeToken: string;
    notice?: Notice;
    bitcoinOnly: boolean;
    links: { text: Site | string; url: string | URL }[];
    description: string;
    sections: ContentSection[];
    associatedLayers?: string;
}

export interface InfrastructureProject extends BaseProject {
    type: Type.Infrastructure;
    purpose: Purpose;
    assessment?: AssessmentSection[];
}

export interface LayerProject extends BaseProject {
    type: Type.Layer;
    btcLocked: number;
    feeToken: string;
    riskAnalysis: RiskSection[];
}

export type Project = InfrastructureProject | LayerProject;
