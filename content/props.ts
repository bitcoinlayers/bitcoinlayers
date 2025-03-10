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

export enum TokenSnippet { //TODO: Janusz to add more here
    UnderReview = "This two-way peg is under review",
    CustodianPeg = "BTC backing this asset is managed by centralized parties",
    CustodianDerivative = "This asset is backed by an alternative derivative of BTC",
    FederationPeg = "BTC backing this asset is secured by a federation",
    BitGowBTC = "wBTC is backed by a centralized consortium of three companies. These entities are responsible for custodying BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.",
    ThresholdtBTC = "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed but permissioned two-way peg. tBTC is minted on Ethereum and then bridged to the network via a custom bridge implementation.",
    CoinbasecbBTC = "Coinbase is responsible for securing the BTC that backs cbBTC. Users trust Coinbase to ensure the funds backing cbBTC are not stolen or lost.\n\nIn addition to securing the funds funds backing cbBTC, Coinbase can censor users from using cbBTC and maintains unilateral control of cbBTC's smart contracts.",
    BinanceBTCB = "When interacting with BTCB, users trust that Binance, a centralized custodian, will safely custody the BTC backing BTCB. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their BTCB tokens. They also trust that Binance will effectively manage the BTC and not lose access to it. If the BTC backing BTCB, BTCB tokens could become effectively worthless.",
    LombardLBTC = "BTC backing Lombard LBTC is secured by a network of five validators participating in Lombard’s security consortium. The security consortium participates in a CometBFT consensus protocol.\n\nAdding and removing validators from this consortium is handled by the current validator set within a given epoch.",
    SolvBTC = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It’s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).",
    SolvBTCBBN = "Four entities custody the bitcoin assets backing Solv.BBN tokens. These entities are Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking). Ceffu and Cobo are the custodians for funds that are staked with Babylon.",
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
    smartcontractreview = "We are reviewing the specific smart contracts related to this two-way peg. The relevant token contract is listed in the bottom of the review.",
}
export enum ReviewSnippet { //TODO: Janusz to add more here
    EthereumRollupDA = "The data for network's state is made available by Ethereum full nodes. Anyone can run an Ethereum node and verify the state of the network.",
    BasedSequencedAlt = "The network is a based sequenced rollup. L1 block producers are responsible for sequencing the network's transactions.",
    SelfProposeMainAlt = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and send their transactions directly to its parent chain. Users can also self-propose their own state transition, and exit the network to its parent chain.",
    SelfSequenceMainAlt = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and force include their transaction to be included in an upcoming sequence.",
    FinalityAltRollupCentralizedProposer = "The network's state is updated offchain. State transitions are ultimately considered finalized on its parent chain. Only a single, whitelisted validator is able to publish state updates to the parent chain. If this validator goes offline, then users of the network would be unable to update state relative to its official bridge and permit exits.\n\nA malicious validator could publish a malicious state transition and steal funds from the bridge on the parent chain.",
    FinalityAltRollupCentralizedProposers = "The network's state is updated offchain. State transitions are ultimately finalized on its parent chain. Only whitelisted validators are able to publish state updates to the parent chain. If these validators go offline, then users of the network would be unable to update state relative to its official bridge and permit exits.",
    FinalityAltRollupFederationFraudProofs = "The network's state is updated offchain. State transitions are ultimately considered finalized on its parent chain. A network of validators are able to publish state updates.\n\nIf they were to publish malicious state updates, they could be challenged via fault proofs. A federated group of validators are able to submit fault proofs.",
    FinalityAltRollupPermissionlessFraudProofs = "The network's state is updated offchain. State transitions are ultimately considered finalized on its parent chain.\n\nIf a proposer were to publish a malicious state update, they could be challenged via fault proofs. Anyone with sufficient capital resources can submit a fault proof.",
    FinalityAltRollupValidityProofs = "The network's state is updated offchain. State transitions are ultimately considered finalized on its parent chain. An entity known as a prover periodically submits a validity proof to prove the correctness of a batch of transactions to the parent chain hosting the network's bridge program.",
    AltL1DA = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network.",
    AltL1Operators = "Block production is handled by a distributed network of operators.\n\nAnyone with sufficient capital resources can become a network operator and produce blocks.",
    CometBFTFinality = "The network uses CometBFT for consensus. Like Tendermint, the protocol on which CometBFT is based, CometBFT has single-slot finality, meaning that blocks cannot be re-organized once they are part of the canonical blockchain. More than ⅔ of validator voting power must sign commit votes to finalize a block. If validators attempt to commit multiple blocks at the same block height, their stake will be slashed.",
    UnderReview = "This two-way peg is under review",
}
export enum BitcoinSecuritySnippet { //TODO: Janusz to add more here
    NoSecurity = "In its current state, the network does not inherit security from Bitcoin.",
    AltTokenFees = "Fees to network operators are paid in an alternative token.",
    CentralizedSequencerMEV = "The network does not introduce any MEV on the Bitcoin L1. Users trust the sequencer to not reorder their transactions to extract MEV.",
    AltNetworkMEV = "The network does not introduce any MEV on the Bitcoin L1. Users trust the validators of the network to not reorder their transactions to extract MEV.",
    NoSecurityBudget = "The network does not currently contribute to the Bitcoin security budget.",
    UnderReview = "This two-way peg is under review",
}
export enum TechnologySnippet { //TODO: Janusz to add more here
    EVM = "The network uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem.",
    FaultProofs = "A cryptographic proof that enables challengers to contest a proposed state transition that contains invalid or fraudulent transactions. Networks that use fault proofs (e.g., optimistic rollups) initially assume that new blocks are valid, then rely on users or watchtowers to challenge blocks if they include invalid state transitions, which are then resolved onchain or a parent blockchain.",
    IBC = "This protocol has implemented support for IBC, enabling users to transfer their nBTC to other supported IBC-enabled blockchains. IBC, or the Inter-Blockchain Communication protocol, is a blockchain interoperability standard that enables connected chains to transfer assets and messages between each other.",
}
export enum UseCaseSnippet { //TODO: Janusz to add more here
    OnchainApps = "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
}
export enum KnowledgeBitSnippet { //TODO: Janusz to add more here
    EthereumL2 = "This network is a layer 2 for Ethereum. For a view into the technology from an Ethereum perspective, head to [L2Beat](https://www.L2Beat.com) for their review.",
}
export enum AdditionalSnippet { //TODO: Janusz to add more here
    UpgradeableContractsCentralizedAndNoExit = "The contracts related to this project are immediately upgradeable by a centralized party. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade, there is no exit delay and users are unable to leave the chain.",
    UpgradeableContractsFederatedAndExit = "The contracts related to this project are immediately upgradeable by a federation. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade by this federation, there is no exit delay and users are unable to leave the chain.",
}

//Below is snippets for alternative chains that we haven't been able to review yet due to volume.

export enum AtlSnippet { //TODO: Janusz to add more here
    OperatorsPoSNetwork = "Blocks are produced and proposed by an alternative proof-of-stake network.",
    DAConsensusNetwork = "Data is published to, and made available by, full nodes participating in an alternative consensus network. Anyone can run a node and verify the current state of the network",
    FinalityConsensusNetwork = "Finality assurances are provided by an alternative consensus network. Users trust that once a transaction has been added to the chain it won't be reverted.",
    PrioritizeLayers = "The Bitcoin Layers project prioritizes reviews on protocols that claim to be bitcoin layers. It also reviews bridges, token wrappers, and other mechanisms that support synthetic versions of bitcoin on other chains. If you'd ike to contribute to this review, feel free to submit a PR in our [GitHub](https://github.com/bitcoinlayers/bitcoinlayers) or join our [telegram group](https://t.me/+8rv-1I2gkmQ4ZmJh) to discuss.",
}

export enum WrapperSnippet { //TODO: Janusz to add more here
    BlacklistYes = "The token implementation has a blacklist function." 
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
