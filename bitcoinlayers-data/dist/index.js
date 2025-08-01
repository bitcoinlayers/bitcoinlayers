'use strict';

exports.Type = void 0;
(function (Type) {
    Type["Infrastructure"] = "Infrastructure";
    Type["Layer"] = "Layer";
})(exports.Type || (exports.Type = {}));
exports.LiveStatus = void 0;
(function (LiveStatus) {
    LiveStatus["Mainnet"] = "Mainnet";
    LiveStatus["Testnet"] = "Testnet";
    LiveStatus["Announced"] = "Announced";
    LiveStatus["Proposed"] = "Proposed";
    LiveStatus["Beta"] = "Beta";
    LiveStatus["Deposits"] = "Deposits Live";
    LiveStatus["BIP"] = "Bip Drafted";
    LiveStatus["Activation"] = "Activation Client";
})(exports.LiveStatus || (exports.LiveStatus = {}));
exports.Purpose = void 0;
(function (Purpose) {
    Purpose["General"] = "General";
    Purpose["Payments"] = "Payments";
    Purpose["LiquidStaking"] = "Liquid Staking";
    Purpose["EcashMint"] = "Ecash Mint";
    Purpose["FederatedEcashMint"] = "Federated Ecash Mint";
    Purpose["Staking"] = "Staking";
    Purpose["BitcoinNative"] = "Offchain UTXO transfers";
})(exports.Purpose || (exports.Purpose = {}));
exports.RiskFactor = void 0;
(function (RiskFactor) {
    RiskFactor["Low"] = "Low";
    RiskFactor["Medium"] = "Medium";
    RiskFactor["High"] = "High";
    RiskFactor["VeryHigh"] = "Very High";
    RiskFactor["Critical"] = "Critical";
    RiskFactor["Unverified"] = "Unverified";
    RiskFactor["UnderReview"] = "Under Review";
    RiskFactor["NotApplicable"] = "Not Applicable";
    RiskFactor["AlternativePoS"] = "Alternative PoS Network";
})(exports.RiskFactor || (exports.RiskFactor = {}));
exports.RiskCategory = void 0;
(function (RiskCategory) {
    RiskCategory["BtcCustody"] = "BTC Custody";
    RiskCategory["DataAvailability"] = "Data Availability";
    RiskCategory["NetworkOperators"] = "Network Operators";
    RiskCategory["SettlementAssurance"] = "Settlement Assurance";
    RiskCategory["UnilateralExits"] = "Unilateral Exits";
    RiskCategory["BlockProduction"] = "Block Production";
    RiskCategory["StateValidation"] = "State Validation";
    RiskCategory["FinalityGuarantees"] = "Finality Guarantees";
    RiskCategory["LivenessReorgResistance"] = "Liveness & Reorg Resistance";
})(exports.RiskCategory || (exports.RiskCategory = {}));
exports.EntityType = void 0;
(function (EntityType) {
    EntityType["CSV"] = "CSV";
    EntityType["EthereumRollup"] = "Ethereum Rollup";
    EntityType["Rollup"] = "Rollup";
    EntityType["Federation"] = "Federation";
    EntityType["Sidechain"] = "Sidechain";
    EntityType["MergeMined"] = "Merge-mined";
    EntityType["SidechainRollup"] = "Sidechain Rollup";
    EntityType["SovereignRollup"] = "Sovereign Rollup";
    EntityType["StateChannel"] = "State Channel";
    EntityType["Statechain"] = "Statechain";
    EntityType["VirtualUTXOs"] = "Virtual UTXOs";
    EntityType["zkCSV"] = "zkCSV";
    EntityType["Hybrid"] = "Hybrid";
    EntityType["Anchor"] = "Anchor";
    EntityType["ChaumianEcashProtocol"] = "Chaumian Ecash";
    EntityType["FederationSDK"] = "Federation SDK";
    EntityType["LiquidStaking"] = "Liquid Staking";
    EntityType["Restaking"] = "Restaking";
    EntityType["RollupSDK"] = "Rollup SDK";
    EntityType["Staking"] = "Staking";
    EntityType["PermissionedChain"] = "Permissioned Chain";
    EntityType["ArkSidechain"] = "Ark on Sidechain";
    EntityType["Sequencing"] = "Sequencing";
    EntityType["DataAvailability"] = "Data Availability";
    EntityType["Bridge"] = "Bridge";
    EntityType["RaaS"] = "RaaS";
    EntityType["BTCWrapper"] = "BTC Wrapper";
    EntityType["ReserveAsset"] = "Reserve";
    EntityType["Lending"] = "Lending";
    EntityType["Yield"] = "Yield";
    EntityType["SequencingDA"] = "Sequencing & DA";
    EntityType["BitcoinBridge"] = "Bitcoin Bridge";
    EntityType["MPCProtocol"] = "MPC Protocol";
    EntityType["TBD"] = "To Be Determined";
    EntityType["Ark"] = "Ark";
    EntityType["AltL1"] = "Alt. Layer 1";
    EntityType["AltRollup"] = "Alt. Rollup";
    EntityType["Alt"] = "Alt. Chain";
    EntityType["SingleOp"] = "Single Opcode";
    EntityType["GroupOp"] = "Group of Opcodes";
    EntityType["StakedBTC"] = "Natively Staked BTC";
    EntityType["PoSNetwork"] = "PoS Network";
    EntityType["BPoSNetwork"] = "BPoS Network";
    EntityType["-"] = "-";
})(exports.EntityType || (exports.EntityType = {}));
exports.EntityCategory = void 0;
(function (EntityCategory) {
    EntityCategory["BitcoinNative"] = "Bitcoin Native";
    EntityCategory["Sidesystem"] = "Sidesystems";
    EntityCategory["Integrated"] = "Integrated";
    EntityCategory["Alt"] = "Alt. L1s & More";
    EntityCategory["More"] = "More";
})(exports.EntityCategory || (exports.EntityCategory = {}));
exports.Notice = void 0;
(function (Notice) {
    Notice["NoBridge"] = "No native bitcoin bridge";
    Notice["Sidesystem"] = "Sidesystems";
    Notice["Reorg"] = "\uD83D\uDEA8 This project will be moved to the Alternative category after June 30th.";
    Notice["UnderReview"] = "\uD83D\uDEA8 This project's categorization is under review.";
    Notice["OtherReasonBridge"] = "This project does not have an enshrined bitcoin bridge that meets our sidesystem standards.";
    Notice["ClaimBitcoinLayer"] = "This network is denominated in BTC.";
})(exports.Notice || (exports.Notice = {}));
exports.Categorization = void 0;
(function (Categorization) {
    Categorization["NoBridgeTitle"] = "The project does not have an enshrined bitcoin bridge";
    Categorization["NoBridgeSnippet"] = "The project does not have an enshrined bitcoin bridge that meets our sidesystem standards. Our standards require sidesystem's enshinred bridge programs to have at least 5 signers with 4 of those signers being external to the project's primary development organization.";
})(exports.Categorization || (exports.Categorization = {}));
exports.BitcoinLayer = void 0;
(function (BitcoinLayer) {
    BitcoinLayer["Yes"] = "The project meets our technical standards to be considered a bitcoin layer";
})(exports.BitcoinLayer || (exports.BitcoinLayer = {}));
exports.UnilateralExit = void 0;
(function (UnilateralExit) {
    UnilateralExit["Yes"] = "This protocol supports unilateral exit, allowing users to withdraw funds without counterparty cooperation";
})(exports.UnilateralExit || (exports.UnilateralExit = {}));
exports.OtherIcons = void 0;
(function (OtherIcons) {
    OtherIcons["MergeMine"] = "This protocol is merge-mined by bitcoin miners.";
    OtherIcons["NotALayer"] = "This protocol is not a bitcoin layer";
    OtherIcons["Staking"] = "This protocol leverages bitcoin staking for aspects of its protocol.";
    OtherIcons["Hybrid"] = "This protocol's VM can interact with L1 bitcoin transactions.";
})(exports.OtherIcons || (exports.OtherIcons = {}));
exports.CustodyTitle = void 0;
(function (CustodyTitle) {
    CustodyTitle["BitcoinNative"] = "Bitcoin Native";
    CustodyTitle["Distributed"] = "Distributed Third-Party";
    CustodyTitle["Centralized"] = "Centralized Third-Party";
})(exports.CustodyTitle || (exports.CustodyTitle = {}));
exports.Site = void 0;
(function (Site) {
    Site["Website"] = "Website";
    Site["Docs"] = "Docs";
    Site["Explorer"] = "Explorer";
    Site["GitHub"] = "GitHub";
    Site["Twitter"] = "Twitter";
})(exports.Site || (exports.Site = {}));
//Below is snippets for bitcoin tokens. This is where we write the custody score for the token so we don't have to write it on dozens of pages.
exports.TokenSnippet = void 0;
(function (TokenSnippet) {
    TokenSnippet["UnderReview"] = "This two-way peg is under review";
    TokenSnippet["CustodianPeg"] = "BTC backing this asset is managed by centralized parties";
    TokenSnippet["CustodianDerivative"] = "This asset is backed by an alternative derivative of BTC";
    TokenSnippet["FederationPeg"] = "BTC backing this asset is secured by a federation";
    TokenSnippet["VariousCustodianPeg"] = "BTC backing this asset is secured by a number of individual custodians";
    TokenSnippet["BitGowBTC"] = "wBTC is backed by a centralized consortium of three companies. These entities are responsible for custodying BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.";
    TokenSnippet["ThresholdtBTC"] = "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed but permissioned two-way peg. This group of signers participate in a threshold signature scheme to secure the BTC that backs tBTC.";
    TokenSnippet["CoinbasecbBTC"] = "Coinbase is responsible for securing the BTC that backs cbBTC. Users trust Coinbase to ensure the funds backing cbBTC are not stolen or lost.\n\nIn addition to securing the funds funds backing cbBTC, Coinbase can censor users from using cbBTC and maintains unilateral control of cbBTC's smart contracts.";
    TokenSnippet["BinanceBTCB"] = "When interacting with BTCB, users trust that Binance, a centralized custodian, will safely custody the BTC backing BTCB. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their BTCB tokens. They also trust that Binance will effectively manage the BTC and not lose access to it. If the BTC backing BTCB, BTCB tokens could become effectively worthless.";
    TokenSnippet["LombardLBTC"] = "BTC backing Lombard LBTC is secured by a network of validators participating in Lombard\u2019s security consortium. The security consortium participates in a CometBFT consensus protocol. Adding and removing validators from this consortium is handled by the current validator set within a given epoch.\n\nThere are currently [nine (9) validators](https://etherscan.io/address/0xdad58DfA5c1a7a34419AFdBE1f0d610efeea95E4#readProxyContract) participating in securing the BTC that backs LBTC.";
    TokenSnippet["SolvBTC"] = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).";
    TokenSnippet["xSolvBTC"] = "Four entities custody the bitcoin assets backing xSolvBTC tokens. These entities are Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking). Ceffu and Cobo are the custodians for funds that are staked with Babylon.";
    TokenSnippet["PumpBTC"] = "PumpBTC works with custodial providers to swap PumpBTC deposits into native BTC for BTC staking. When a user deposits a BTC derivative token (e.g. wBTC) into the PumpBTC contract, they are given PumpBTC in return. Cobo and Coinover have been mentioned as operators participating in Pump.";
    TokenSnippet["UniRouterBTC"] = "Users trust that the UniRouter team has set up secure custody practices and has BTC reserves backing uniBTC. UniRouter has not disclosed who secures the BTC backing uBTC.";
    TokenSnippet["AvalancheBTCb"] = "Ava Labs has disclosed that users trust a network of entities who participate in securing the BTC that backs BTCb. These eight entities are also reported to run special HSM hardware.\n\nThe eight entities securing the bridge are: Halborn, Avascan, Bware Labs, Ankr, Chainstack, Protofire, Blockdaemon, and Ava Labs.";
    TokenSnippet["BedrockUniBTC"] = "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into the uniBTC smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens. To deposit these tokens on Babylon, the protocol relies on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon. Bedrock has not disclosed who is responsible for securing and staking native BTC on users' behalf.";
    TokenSnippet["LorenzostBTC"] = "Users trust Lorenzo, the operators of Lorenzo stBTC, to secure and stake native BTC that backs stBTC. It has also been stated in Lorenzo's [marketing materials](https://medium.com/@lorenzoprotocol/lorenzo-allies-with-cobo-ceffu-and-chainup-e0d824c4744d) that custodian providers Cobo, Ceffu, and Chainup are participating in Lorenzo's protocol as custody providers, but their documentation does not claim this.";
    TokenSnippet["AcornaBTC"] = "Users of aBTC reportedly trust a multi-signature wallet to secure the funds backing aBTC. Acorn's documentation mentions that a multi-signature wallet, supported by HSMs, is responsible for securing funds that back aBTC. Acorn has not disclosed the operators of this wallet.";
    TokenSnippet["ibtcnetworkibtc"] = "iBTC is a two-way peg that leverages DLC contracts between various institutions and a federated attestor network. We are reviewing its trust assumptions.";
    TokenSnippet["babypie"] = "An MPC set up between Babypie and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Babypie's claims in their documentation are being executed in practice.";
    TokenSnippet["xlink"] = "There is limited information available on Xlink aBTC's custody mechanism for BTC backing aBTC. Users trust Alex, the project behind Xlink, to set up secure custody practices. Xlink's [website](https://www.xlink.network/) mentions that institutional grade MPC solutions are used.";
    TokenSnippet["FireBTC"] = "An MPC set up between Ignition and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Ignition's claims in their documentation are being executed in practice.";
    TokenSnippet["SolvBTCENA"] = "SolvBTC.ENA is a derivative asset that represents SolvBTC locked in a vault executing a trading strategy.\n\nSolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).The token is backed by [SolvBTC](https://www.bitcoinlayers.org/infrastructure/solv-solvbtc).\n\nUsers expose themselves to smart contract and application risks when depositing funds into SolvBTC.ENA.";
    TokenSnippet["KrakenKBTC"] = "Kraken, a centralized custodian, secures the BTC backing kBTC. The funds backing kBTC are held at Kraken Financial, a Wyoming-chartered SPDI (Special Purpose Depository Institution)";
    TokenSnippet["MerlinMBTC"] = "BTC backing Merlin M-BTC is secured via an MPC wallet managed by Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Merlin has stated that more players are being added into this custody scheme.";
    TokenSnippet["ObeliskoBTC"] = "Obelisk's documentation claims that users deposit BTC into an MPC scheme to mint oBTC on a respective destination chain.";
    TokenSnippet["BTCTRON"] = "When users swap BTC for BTCTRON, they send their BTC to Poloniex, a centralized custodian. Information on how the BTC is secured is not available.";
    TokenSnippet["BabylonStakedBTC"] = "Babylon Staked BTC is native BTC locked in a L1 staking script. Users lock their funds in the script with the help of a covenant emulator committee. Users can withdrawal their funds from the script at any time with the help of the covenant emulator committee. If the committee is offline, users can spend their funds after a timelock expires.\n\nStaked BTC comes with additional trust assumptions such as slashing conditions. We are reviewing these trust assumptions related to Babylon.";
    TokenSnippet["SparkBTC"] = "Users custody funds collectively with the statechain entity in a 2-2 multisig. Every Spark vUTXO has a pre-signed unilateral exit path. When funds are transferred, users trust the statechain entity to delete the keyshare it held with the previous owner so it cannot collectively spend funds with past owners.";
    TokenSnippet["MercuryLayerBTC"] = "The statechain setup involves locking a UTXO onchain with the private key shared between the operator and the current statecoin owner. Although the Mercury Layer server acts as a trusted entity, users are safeguarded against potential unresponsiveness by having the ability to unilaterally exit and enforce their UTXO ownership onchain as each transfer is secured by a decrementing timelock mechanism and a series of backup transactions.";
    TokenSnippet["HyperliquidBTC"] = "The Unit Protocol consists of a network of 3 guardians participating in an MPC scheme. These guardians are responsible for securing the BTC backing a BTC-denominated asset on Hyperliquid. They are also responsible for executing signing events related to the asset.";
    TokenSnippet["SimpleSBTC"] = "BTC backing Simple sBTC is secured by a [3/5 multisig](https://mempool.space/address/bc1ps0qa22q30rrp4584gz4teqkchn76wakzaq6mlhsv6sg36e0fl83sss2vxa). Information on who the signers are for this multisig and their signing mechanisms is unavailable.";
    TokenSnippet["BoolBTC"] = "The Bool Network has not disclosed its custody mechanism for BTC backing bBTC across the various networks its deployed on. In its documentation, it references a custody mechanism that would see an approved entity be able to set up a 2-2 multisig between Bool and the entity.\n\nIt is possible this is the set up for bBTC custody across the chains its deployed on. In any case, users trust that Bool Network and the development teams behind specific networks have set up secure custody practices.\n\n\u26A0\uFE0F Bool Network has [pivoted](https://x.com/DeepSafe_AI/status/1881704352768999641) and may no longer be maintaining its bridge infrastructure.\n\n[Source](https://docs.bool.network/interoperability-protocol/self-custody/channels)";
    TokenSnippet["NomicNBTC"] = "Users deposit BTC into a Reserve Wallet to receive nBTC on Nomic. The Reserve Wallet is a Bitcoin L1 multisig wallet managed by the Nomic signatory set. The Nomic signatory is made up of the top 20 Nomic validators measured by weighted stake.\n\nBecoming a signatory requires staking NOM tokens. Disbursing funds from the reserve wallet requires a 2/3s threshold, weighted by voting power through NOM tokens.";
    TokenSnippet["StacksSBTC"] = "sBTC is a bridge between bitcoin and stacks managed by 14 institutional signers. sBTC on Stacks is backed by BTC held in a wallet managed by these signers. The identities of entities participating in the sBTC bridge are publicly known.\n\nIf 10 of the signers colluded, they could steal all of the BTC backing sBTC. You can find the signers [here](https://bitcoinl2labs.com/sbtc-rollout#sbtc-signers).";
    TokenSnippet["AlexBTC"] = "Users trust Wrapped, a custodian provider, with the custody of BTC backing xBTC. Alex, a DeFi project largely associated with the Stacks ecosystem, acquired Wrapped and has initiated a transition to move xBTC into sBTC.\n\nFunds that are not moved into sBTC are still secured by [Wrapped](https://wrapped.com/).";
    TokenSnippet["BsquaredBTC"] = "Previous blog posts have stated that when users deposit funds into Bsquared, they deposit funds into a MPC wallet managed by the Bsquared Network team and Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Bsquared has stated that more players are being added into this custody scheme.";
    TokenSnippet["SolvBTCdotSolv"] = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc). Multisigs securing derivative assets backing by SolvBTC are secured by GnosisSafes with 5 signers.";
    TokenSnippet["BTCN"] = "BTCN is an Ethereum-based ERC-20 token. It is a BTC-derivative asset that is backed by cbBTC and wBTC. All of the BTCN supply is locked into Corn\u2019s ERC-20 Bridge contract on Ethereum and is in escrow. On Corn, BTCN is primarily stored in the Bitcorn OFT contract.\n\nThe BTCN contract is managed by the [0xCff...2C7D](https://etherscan.io/address/0xcff1ad9f09b32252171207e8525c90b18d4e2c7d#code) multisig address on Ethereum. The multi-sig has a 2/4 signing threshold.";
    TokenSnippet["LiquidLBTC"] = "BTC withdrawals are currently permissioned by the Liquid federation. Users must trust that when they deposit BTC into the Liquid blockchain, the signers will not collude and steal their BTC. Most users typically acquire L-BTC on secondary marketplaces, not through bridge deposits. Supported marketplaces for L-BTC are also members of the Liquid federation. Users trust that the federation will not steal the BTC, which would leave their newly acquired L-BTC worthless. The BTC that backs L-BTC is held in a 11-15 multi-sig wallet where 11 (\u2154 + 1) of the signers would need to be compromised in order to steal the BTC.\n\nNot all signers for the Liquid two-way peg are publicly disclosed.";
    TokenSnippet["SideBTC"] = "Side sBTC is managed by 21 signers who additionally participate as validators in Side's proof-of-stake consensus.\n\nThese signers participate in a TSS network that where trusted validators perform signing duties for sBTC abd Side Chain.";
    TokenSnippet["RootstockRBTC"] = "The BTC that backs RBTC is secured by a 5-of-9 federated multisig, referred to as the Powpeg (Proof of Work Peg). The signers of the Powpeg run specialized HSM hardware to secure the private keys used for signing Powpeg transactions.\n\nThe identities of entities participating in the Powpeg are publicly known. Users trust the operators of the Powpeg to custody their funds.\n\nPowpeg signer identities and attestations can be found [here](https://rootstock.io/powpeg/).";
    TokenSnippet["AlloBTC"] = "BTC backing AlloBTC is custodied by Cobo, a centralized exchange. Cobo offers a 2/2 MPC custody solution where they co-custody funds along with protocols leveraging their servives. AlloBTC has not disclosed if this is the case in their documentation or marketing materials.";
    TokenSnippet["KinzaBTC"] = "Kinza's kBTC is backed by BTC held in custodian wallets. These wallets are secured by an MPC scheme where Kinza, Cobo, and Coinover participate as signers. Cobo and Coinover are institutional custody providers.";
    TokenSnippet["pStakeyBTC"] = "pStake's yBTC is backed by BTC held in custodian wallets. These wallets are secured by signers participating in an MPC scheme. pStake has a dedicated Cobo account where users' funds are held.";
    TokenSnippet["enzoBTC"] = "enzoBTC can be acquired through depositing native BTC, [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), or [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb).\n\nFunds backing enzoBTC are secured by various custodians including Cobo, Ceffu, and Chainup.";
    TokenSnippet["TwentyOnecoBTC"] = "BTC backing 21.co BTC is held by third party custodians. 21.co has not officially disclosed the identities of these custodian providers.";
    TokenSnippet["BedrockbrBTC"] = "Bedrock brBTC is a derivative asset backed by other wrapped BTC assets. When depositing funds for brBTC, users take on smart contract risks in addition to the custodian risk related to the backing asset.\b\bBedrock brBTC may be backed by [uniBTC](https://www.bitcoinlayers.org/infrastructure/bedrock-unibtc), [FBTS](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [M-BTC](https://www.bitcoinlayers.org/infrastructure/merlin-mbtc), or [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb).";
    TokenSnippet["BadgereBTC"] = "To obtain eBTC, users must deposit Lido stETH, an ETH-denominated asset, as collateral to borrow eBTC. If a users's collateralization ratio falls below a certain threshold, they can be liquidated. Collateralization ratios are based on the ETH/BTC price pair";
    TokenSnippet["HemiBTC"] = "BTC backing HemiBTC is secured in a single-signature bitcoin address. Hemi claims that they use a threshold signature scheme to move funds from this address, but the specific siganture scheme, and participating signers, have not been officially disclosed.";
    TokenSnippet["iBTC"] = "BTC backing iBTC is secured by numerous 2-2 multisigs between institutions and iBTC's attestor network. iBTC network's attestor network has a 2/3s majority signing threshold and uses FROST to produce valid signatures to co-sign movement of funds related to iBTC BTC multisigs.\n\nUsers who acquire iBTC in onchains market trust that their tokens will remain backed by institutions supplying liquidity.";
    TokenSnippet["MerlinwBTC"] = "BTC backing Merlin wBTC is likely secured by Cobo, a centralized institution. When users deposit BTC into the Merlin Chain bridge, they are depositing funds into custodian addresses managed by Cobo.";
    TokenSnippet["ZueszBTC"] = "zBTC has a group of guardians securing the BTC that backs zBTC. This BTC is dispersed across a number of individual addresses, meaning that each custodian custodies a subset of funds in isolation of other custodians. Users should be aware of which custodian custodies the funds backing zBTC when using the network.";
    TokenSnippet["MantamBTC"] = "mBTC is backed by [BitGo wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc) and [Binance BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb). When users exchange these funds for mBTC, reserve assets are secured by vaults managed by Ceffu, an centralized institution.";
    TokenSnippet["SolvsolvbtcCORE"] = "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It\u2019s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc). We are reviewing if SolvBTC.CORE is natively minted or bridged from another chain.";
    TokenSnippet["BitLayerwBTC"] = "Bitlayer's current BTC bridge is a federated two-way peg with institutional signers. Bitlayer is working with multiple MPC custody platforms.\n\nUsers do not custody bitcoin assets backing tokens on Bitlayer.\n\nNote that we are unable to verify the participants in this model.";
    TokenSnippet["OsmosisBTC"] = "BTC on Osmosis is backed by a number of collateral assets; WBTC.eth.axl, wBTC, nBTC, ckBTC, and cbBTC.axl.";
    TokenSnippet["smartcontractreview"] = "This token has trust assumptions past the initial two-way peg. We are reviewing specific smart contracts related to this implementation to learn more about these assumptions.";
    TokenSnippet["BotanixBTC"] = "BTC backing Botanix pBTC is secured by a federation of signers. The identities of entities participating in the federation are [publicly known](https://docs.botanixlabs.com/botanix/get-to-know-botanix/roadmap-to-spiderchain/founding-federation/federation-overview). Users trust the operators of the federation to custody their funds, process deposits, and honor withdrawals.";
    TokenSnippet["BotanixStakedBTC"] = "Botanix stBTC is a derivative asset backed by wrapped BTC locked in a staking vault. When users deposit funds into Botanix stBTC, they are depositing funds into a staking contract. The contract is [upgradeable](https://botanixscan.io/address/0x09C5874F1425697C81c34F58957f2BE584306312).";
    TokenSnippet["TemplateBTC"] = "This is a fake prop used for the template file.";
})(exports.TokenSnippet || (exports.TokenSnippet = {}));
//Below is snippets for layer assessments.
exports.ReviewSnippet = void 0;
(function (ReviewSnippet) {
    ReviewSnippet["EthereumRollupDA"] = "The data for network's state is made available by Ethereum full nodes. Anyone can run an Ethereum node and verify the state of the network.";
    ReviewSnippet["BasedSequencedAlt"] = "The network is a based sequenced rollup. L1 block producers are responsible for sequencing the network's transactions.";
    ReviewSnippet["SelfProposeMainAlt"] = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and send their transactions directly to its parent chain. Users can also self-propose their own state transition, and exit the network to its parent chain.";
    ReviewSnippet["SelfProposeNone"] = "The network's proposer role is managed by one entity. The proposer can refuse to post state updates and also have liveness failures. If the proposer goes down, users cannot update state relative to its official bridge program and permit exits.";
    ReviewSnippet["SelfSequenceMainAlt"] = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users can bypass the sequencer and force include their transaction to be included in an upcoming sequence.";
    ReviewSnippet["SelfSequenceNone"] = "The network's sequencer is managed by one entity. The sequencer can censor transactions and can also cause liveness failures if it goes down. Users cannot sequencer their own transactions if the sequencer goes down or censors them.";
    ReviewSnippet["FinalityAltRollupCentralizedProposer"] = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. Only a single, whitelisted validator is able to publish state updates to the parent chain. If this validator goes offline, then users of the network would be unable to update state relative to its official bridge and permit exits.\n\nA malicious validator could publish a malicious state transition and steal funds from the bridge on the parent chain.";
    ReviewSnippet["FinalityAltRollupCentralizedProposers"] = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. Only whitelisted validators are able to publish state updates to the parent chain. If these validators go offline, then users of the network would be unable to update state relative to its official bridge and permit exits.";
    ReviewSnippet["FinalityAltRollupFederationFraudProofs"] = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. A network of validators are able to publish state updates.\n\nIf they were to publish malicious state updates, they could be challenged via fault proofs. A federated group of validators are able to submit fault proofs.";
    ReviewSnippet["FinalityAltRollupPermissionlessFraudProofs"] = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs.\n\nIf a proposer were to publish a malicious state update, they could be challenged via fault proofs. Anyone with sufficient capital resources can submit a fault proof.";
    ReviewSnippet["FinalityAltRollupValidityProofs"] = "The network's state is updated offchain by nodes who apply state transition logic over the data made available by its data availability layer. After a new state is generated, a state root is posted to bridge programs. An entity known as a prover periodically submits a validity proof to prove the correctness of a batch of transactions to the parent chain hosting the network's bridge program.";
    ReviewSnippet["FinalityAnchorChain"] = "The network's consensus mechanism sees its validator set build upon a checkpoint it posts to bitcoin. Since a validator cannot build a valid block without referencing a block hash posted to bitcoin, the network cannot be reorged without reorging bitcoin.";
    ReviewSnippet["AltL1DA"] = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network.";
    ReviewSnippet["AltL1DAPOW"] = "The data availability requirement is satisfied by sidechain full nodes. The network's node software is open-source, and anyone can run a full node to verify the current state of the chain.\n\nLike any sidechain, blocks can be orphaned, so miners are disincentivized to withhold data and not broadcast their blocks as they would not receive mining rewards.";
    ReviewSnippet["DAConsensusNetwork"] = "Data is published to, and made available by, full nodes participating in an alternative consensus network. Anyone can run a node and verify the current state of the network.";
    ReviewSnippet["DAFederation"] = "Data is published to, and made available by, full nodes participating in a federated validator set. Running a validator and full node in this set up is permissioned.";
    ReviewSnippet["AltL1DaBTCStake"] = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network. The network's data availability layer is secured via bitcoin staking.";
    ReviewSnippet["AltL1DaMergeMine"] = "Data relative to the network's state is stored and made available by its full node set. Anyone can run a full node and verify the state of the network. The network's data availability layer is indirectly secured via bitcoin miners who merge-mine the network.";
    ReviewSnippet["AltDADAC"] = "Data relative to the network's state is stored and made available by a permissioned set of nodes. Users trust this committee to make the data available to them so they can verify the state of the network.";
    ReviewSnippet["AltL1Finality"] = "State transitions are finalized by an alternative consensus mechanism with a distributed validator set.";
    ReviewSnippet["AltL1FinalityPOW"] = "The network's state transitions are validated by its full node set. After a block is mined by a miner, it is broadcast to its full node set who validates the block and includes it in the chain.";
    ReviewSnippet["AltL1FinalityFederatedFullNode"] = "After blocks are proposed by a block producer, a majority of the network operators are needed to sign off on the block to propagate it to the network. After this is done, full nodes accept the block and include it in the chain.";
    ReviewSnippet["CometBFTFinality"] = "The network uses CometBFT for consensus. Like Tendermint, the protocol on which CometBFT is based, CometBFT has single-slot finality, meaning that blocks cannot be re-organized once they are part of the canonical blockchain. More than \u2154 of validator voting power must sign commit votes to finalize a block. If validators attempt to commit multiple blocks at the same block height, their stake will be slashed.";
    ReviewSnippet["UnderReview"] = "This two-way peg is under review";
    ReviewSnippet["NoFraudProofsBridge"] = "Users trust the proposer to not publish a malicious, unchallenged state transition. If a centralized party does not contest this state transition within a given time frame, all funds from the bridge can be stolen.";
    ReviewSnippet["CentralizedUpgradeableBridge"] = "A centralized admin can create a malicious smart contract upgrade. In the event of a malicious smart contract upgrade, there is no exit window for users. This means that the admin behind the bridge can steal all funds in the official bridge.";
    ReviewSnippet["OperatorsPoSNetwork"] = "Blocks are produced and proposed by an alternative proof-of-stake network.";
    ReviewSnippet["OperatorSidechainPOS"] = "The network's blocks are constructed by a distributed validator set. Validators participate in a proof-of-stake consensus network. Anyone with sufficient resources and token stake can become a validator and participate in block production.";
    ReviewSnippet["OperatorSidechainPOSBTCStake"] = "The network's blocks are constructed by a distributed validator set. Validators participate in a proof-of-stake consensus network. Anyone with sufficient resources and token stake can become a validator and participate in block production.\n\nPart of stake weight is derived from BTC stake that is assigned to a given validator.";
    ReviewSnippet["OperatorSidechainMergeMine"] = "Bitcoin miners who are willing are able to merge-mine the network and produce blocks. If interested parties do not possess enough hashpower to competitively solo mine, they can join a mining pool that support the network.";
    ReviewSnippet["OperatorFederated"] = "Blocks are proposed and finalized by a permissioned federation. Only a limited number of operators are able to participate in block production.";
    ReviewSnippet["OperatorCentralizedStatechain"] = "Offchain UTXO transfers are co-signed by the user and a single operator. Users trust this operator for liveness and ensuring the system remains operational.";
    ReviewSnippet["OperatorFederatedStatechain"] = "Offchain UTXO transfers are co-signed by the user and a federation of operators. Users trust this federation for liveness and ensuring the system remains operational.";
    ReviewSnippet["FinalityStatechainSingleOperator"] = "Finality is provided by the statechain entity deleting the keyshare that it held with the previous owner. This implementation's statechain entity is a single signer.\n\nIf the entity does not delete the keyshare, then it can collude with a previous owner and double spend the new owner.\n\nThere is no way to prove that the entity deleted its previous keyshare. Users are unable to have any finality assurances in this set up.";
    ReviewSnippet["FinalityStatechainFederation"] = "Finality is provided by the statechain entity deleting the keyshare that it held with the previous owner. This implementation's statechain entity is comprised of a federation of signers where a certain threshold is needed to co-sign transfers.\n\nIf the entity does not delete the keyshare, then it can collude with a previous owner and double spend the new owner. There is no way to prove that the entity deleted its previous keyshare. Users are unable to have any finality assurances in this set up.";
    ReviewSnippet["StatechainDABlindedServer"] = "Transaction data is self-hosted. The operator blindly signs and timestamps the individual statechain states and the transfer history gets passed on between clients. Due to the use of blind signing, the operator remains unaware of the transfer history.";
    ReviewSnippet["OperatorStatechainBlindedServerSingleServer"] = "The system employs a statechain entity that generates and updates key shares in addition to offering a blind signing service. The statechain entity is a centralized server.";
    ReviewSnippet["FinalityAltNetworkUnderReview"] = "Finality assurances are provided by an alternative consensus network. We are reviewing this section.";
    ReviewSnippet["TemplateReview"] = "This is a fake prop used for the template file.";
})(exports.ReviewSnippet || (exports.ReviewSnippet = {}));
//Below is snippets for additional information in layers reviews.
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
    TechnologySnippet["Statechain"] = "Statechains are offchain protocols where users custody an L1 UTXO collaboratively with a statechain entity. Users transfer funds by sending their private key to a new recipient with a decrementing timelock. Statechain entities are expected delete its previous keyshare with previous owners and only interact with the current holder of the keyshare.\n\nIf the statechain entity interacts with a previous owner, then they can double spend the current owner. And if a previous owner broadcasts its unilateral exit transaction, then the current owner must broadcast their own to ensure ownership of funds (due to the current owner's timelocks expiring before previous owners).";
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
})(exports.TechnologySnippet || (exports.TechnologySnippet = {}));
exports.UseCaseSnippet = void 0;
(function (UseCaseSnippet) {
    UseCaseSnippet["OnchainApps"] = "Onchain applications are supported. Onchain applications include borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.";
    UseCaseSnippet["OffchainUTXOTransfers"] = "Users can transfer virtual representations of UTXOs offchain with the assistance of an operator. These transfers have fast, soft confirmation times and are lower in fees than L1 Bitcoin transactions.";
    UseCaseSnippet["UTXOTokenizedApplications"] = "The protocol can be used to improve the efficiency of UTXO-based token protocols. Users are able to transfer and trade tokenized UTXOs with faster confirmation times than Bitcoin L1 with trust tradeoffs.\n\nTokenized applications may include stablecoin transfers or token exchange protocols.";
    UseCaseSnippet["BitcoinStaking"] = "Users can lock L1 BTC into staking script to support the network's security. The BTC is directed to validators within the Proof-of-Stake network. These scripts see users retain custody of their funds, but sees them take on slashing risks.\n\nIn return for locking their funds into a staking script, users are paid rewards in the form of fees or altcoin issuance.";
    UseCaseSnippet["TestingGround"] = "Since the network has enabled opcodes that are not yet live on Bitcoin, developers can deploy applications there to preview what it would be like on Bitcoin. This includes analyzing the builder experience, potential security vulnerabilities, and presenting how these changes might permanently affect the Bitcoin network.";
    UseCaseSnippet["TokenizedAssets"] = "The network enables developers and users alike to issue tokenized securities, stablecoins, and synthetic forms of cryptocurrencies.";
    UseCaseSnippet["IBCTransfers"] = "Using IBC, users can transfer tokens (including BTC-denominated tokens) to connected blockchains and engage in use-cases such as: 1) Get a USK loan on Kujira 2) Trade and provide liquidity on Osmosis 3) Trade perpetual swaps using Levana";
    UseCaseSnippet["OffchainTransfers"] = "The network itself can also be used for p2p payments denominated in BTC.";
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
//Below is snippets for wrapper assessments.
exports.WrapperReviews = void 0;
(function (WrapperReviews) {
    WrapperReviews["GovernanceLow"] = "Users have at least 48 hours to submit a withdrawal request to the bridge operators if a malicious contract upgrade is pushed to the token contract.";
    WrapperReviews["GovernanceMediumLessThan48"] = "Users have less than 48 hours to submit a withdrawal request to the bridge operators if a malicious contract upgrade is pushed to the token contract. A publicly disclosed federation with at least 5 operators can implement contract upgrades";
    WrapperReviews["GovernanceMedium"] = "There is no delay on contract upgrades. A publicly disclosed federation with at least 5 operators can implement contract upgrades.";
    WrapperReviews["GovernanceHigh"] = "There is no delay on contract upgrades. A known, centralized party or federation with less than 5 operators can implement contract upgrades";
    WrapperReviews["GovernanceVeryHigh"] = "There is no delay on contract upgrades. The identities of the signers who can implement contract upgrades is not disclosed";
    WrapperReviews["crLow"] = "The token has no pause or blacklist function. Users can transact the BTC-backed token freely on a given network.";
    WrapperReviews["CrBlacklistFederation"] = "The token has a blacklist function. A publicly known federation is able to blacklist users and stop them from being able to transact with the token.";
    WrapperReviews["CrBlacklistSingleSigner"] = "The token has a blacklist function. A single entity is able to blacklist users and stop them from being able to transact with the token.";
    WrapperReviews["CrBlacklistUnknown"] = "The token has a blacklist function. The identity of the entity who can blacklist users is unknown.";
    WrapperReviews["CrPauseFederation"] = "The token has a pause function. A publicly known federation is able to blacklist users and stop them from being able to transact with the token.";
    WrapperReviews["CrPauseSingleSigner"] = "The token has a pause function. A single entity is able to blacklist users and stop them from being able to transact with the token.";
    WrapperReviews["CrPauseUnknown"] = "The token has a pause function. The identity of the entity who can blacklist users is unknown.";
    WrapperReviews["crHigh"] = "The token has a pause and a blacklist function.";
    WrapperReviews["SupplyIssuanceLow"] = "Newly tokens are minted via an onchain smart contract. The smart contract executes a bitcoin light client and mints tokens when a deposit transaction occurs on bitcoin. Users can notify the smart contract of a deposit if necessary.";
    WrapperReviews["SupplyIssuanceMed"] = "A federation is responsible for passing messages that result in tokens being minted on a given layer.";
    WrapperReviews["SupplyIssuanceHigh"] = "A single entity is responsible for passing messages that result in tokens being minted on a given layer.";
    WrapperReviews["SupplyIssuanceVeryHigh"] = "The process of passing messages between bitcoin and a given layer to mint this token is not disclosed.";
})(exports.WrapperReviews || (exports.WrapperReviews = {}));
//Below is snippets for additional information in wrapper reviews.
exports.WrapperSnippet = void 0;
(function (WrapperSnippet) {
    WrapperSnippet["BlacklistYes"] = "The token implementation has a blacklist function.";
})(exports.WrapperSnippet || (exports.WrapperSnippet = {}));
exports.BTCWrapperTransparency = void 0;
(function (BTCWrapperTransparency) {
    BTCWrapperTransparency["ProofofReservesYes"] = "The project provides active proof-of-reserves. The proof-of-reserves can be seen";
    BTCWrapperTransparency["ProofofReservesNo"] = "The project has not published a Proof-of-Reserves. Users trust that the custodians holding native BTC backing the derivative asset to have ample reserves.";
    BTCWrapperTransparency["ProofofReservesStakingNo"] = "The project has not published a Proof-of-Reserves. Users trust that the custodians holding native BTC backing the derivative asset to have ample reserves and that operators are staking BTC onto Babylon on users\u2019 behalf.";
    BTCWrapperTransparency["OperatorsDisclosedYes"] = "Operators of the protocol have been disclosed.";
    BTCWrapperTransparency["OperatorsDisclosedNo"] = "Operators of the protocol are not publicly disclosed.";
    BTCWrapperTransparency["WithdrawalsYes"] = "The network does not introduce any MEV on the Bitcoin L1. Users trust the sequencer to not reorder their transactions to extract MEV.";
    BTCWrapperTransparency["ContractsYes"] = "Contracts related to the project are source viewable and verified.";
    BTCWrapperTransparency["ContractsNo"] = "Contracts related to the project are not source viewable and verified.";
    BTCWrapperTransparency["ContractsSome"] = "Not all contracts related to the project are source viewable and verified.";
    BTCWrapperTransparency["RedemptionsYes"] = "Redemptions are enabled. The project has documented how redemptions are processed in their documentation.";
    BTCWrapperTransparency["RedemptionsYesNoDocs"] = "Redemptions are enabled. The project has not disclosed how redemptions are processed in their documentation.";
    BTCWrapperTransparency["StakeAttestationsNo"] = "The project does not provide any attestations that its BTC is in-fact staked onto Babylon.";
    BTCWrapperTransparency["StakeAttestationsYes"] = "The project does not provide any attestations that its BTC is in-fact staked onto Babylon.";
})(exports.BTCWrapperTransparency || (exports.BTCWrapperTransparency = {}));
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
    RiskSummarySnippet["RiskStatechainPreviousOwner"] = "If the previous owner broadcasts their unilateral exit transaction, the current owner must respond by broadcasting theirs with a sooner expiring timelock. If the current owner does not respond, the previous owner can steal funds.";
    RiskSummarySnippet["RiskStatechainTimelock"] = "If a previous owner of the UTXO broadcasts their unilateral exit transaction, and the current owner does not broadcast their own, the previous owner can steal funds.";
    RiskSummarySnippet["RiskStatechainNoExit"] = "This implementation does not support unilateral exits. If the statechain entity becomes unresponsive, users funds are frozen.";
    RiskSummarySnippet["RiskLightningChannel"] = "If a counterparty maliciously broadcasts a previous state, and it is not contested, they can close the channel with previous balances that favor the malicious actor.";
    RiskSummarySnippet["RiskSummary"] = "";
})(exports.RiskSummarySnippet || (exports.RiskSummarySnippet = {}));
exports.PegRiskSummarySnippet = void 0;
(function (PegRiskSummarySnippet) {
    PegRiskSummarySnippet["CustodianTitle"] = "Users do not have unilateral claims on native BTC.";
    PegRiskSummarySnippet["OneCustodian"] = "BTC backing this asset is secured by a centralized custodian. Users trust this single entity with maintaining the peg with BTC.";
    PegRiskSummarySnippet["Guardian"] = "BTC backing this asset is secured by multiple custodians. Users trust this group with maintaining the peg with BTC.";
    PegRiskSummarySnippet["Federation"] = "BTC backing this asset is secured by a federation of signers. Users trust this federation with maintaining the peg with BTC.";
    PegRiskSummarySnippet["PoS"] = "BTC backing this asset is secured by a signers participating in a proof-of-stake network. Users trust these signers with maintaining the peg with BTC.";
    PegRiskSummarySnippet["UnkownSignersTitle"] = "The signers for this two-way peg have not been disclosed";
    PegRiskSummarySnippet["UnkownSigners"] = "The parties responsible for securing the assets backing this wrapper have not been disclosed. There is little-to-no reputational risk for signers securing these funds.";
    PegRiskSummarySnippet["Collateralized"] = "Users are exposed to smart contract risks and potential liquidations when using this asset.";
    PegRiskSummarySnippet["MultipleAssets"] = "This asset is backed by other BTC wrapped assets. If a reserve asset became unbacked, the two-way peg with BTC would break.";
    PegRiskSummarySnippet["SlashingRisk"] = "This asset represents BTC staked in a staking protocol. If the corresponding BTC is slashed, users' balances could be affected.";
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
const AlertSnippet = {
    ProofOfProofConsensus: {
        type: "warning",
        title: "Note on Hemi's Proof-of-Proof consensus",
        content: "While Hemi's anchors its state to bitcoin, the network is currently managed by a centralized operator. The operator is unable to revert Hemi's state after Hemi full nodes compute a new state root. This is independent of any additional finality guarantees potentially provided by bitcoin.",
        linkText: "Learn more about bitcoin anchoring for alternative blockchains",
        linkUrl: "https://lxresearch.co",
        expandable: true,
    },
    SecurityModelDifference: {
        type: "warning",
        title: "Important Security Consideration",
        content: "Hemi's security model is fundamentally different from Bitcoin's. Users should understand that they are not protected by Bitcoin's hash rate when using Hemi.",
        linkText: "Learn more about Bitcoin security",
        linkUrl: "https://docs.hemi.xyz/security",
        expandable: true,
    },
    CentralizedSequencerRisk: {
        type: "warning",
        title: "Centralized Sequencer Risk",
        content: "The network is operated by a centralized sequencer. If this sequencer goes offline or becomes malicious, it could affect network operations and user fund accessibility.",
        expandable: true,
    },
    AltDALayerRisk: {
        type: "warning",
        title: "Alternative Data Availability Risk",
        content: "This network relies on an alternative data availability layer. If the DA layer becomes unavailable, the network cannot progress and user funds may be frozen.",
        expandable: true,
    },
    BridgeUpgradeRisk: {
        type: "error",
        title: "Bridge Upgrade Risk",
        content: "Bridge contracts can be upgraded by a centralized party or federation. In case of a malicious upgrade, user funds could be at risk.",
        expandable: true,
    },
    UnderReviewNotice: {
        type: "info",
        title: "Section Under Review",
        content: "This section is currently under review. Some information may be incomplete or subject to change as our analysis progresses.",
    },
};
exports.AssessmentCategory = void 0;
(function (AssessmentCategory) {
    AssessmentCategory["AssetCustody"] = "Asset Custody";
    AssessmentCategory["StakingType"] = "Staking Type";
    AssessmentCategory["SlashingRisk"] = "Slashing Risk";
    AssessmentCategory["IncentiveModel"] = "Incentive Model";
    AssessmentCategory["Reputation"] = "Reputation & Participation";
    AssessmentCategory["Signing"] = "Signing Mechanism";
    AssessmentCategory["KeyStorage"] = "Key Storage";
    AssessmentCategory["CensorshipResistance"] = "Censorship Resistance";
    AssessmentCategory["FinalityAssurances"] = "Finality Assurances";
    AssessmentCategory["ProofofOwnership"] = "Proof of Ownership";
    AssessmentCategory["NativeBitcoinCustody"] = "Native Bitcoin Custody";
    AssessmentCategory["UnilateralExit"] = "Unilateral Exit Guarantees";
    AssessmentCategory["UserRisk"] = "User Risk";
    AssessmentCategory["ThirdPartyStaking"] = "Third Party Staking";
    AssessmentCategory["SelfCustodialStaking"] = "Self-custodial Staking";
    AssessmentCategory["SupplyIssuance"] = "Supply Issuance";
    AssessmentCategory["StakeAttestations"] = "Stake Attestations";
    AssessmentCategory["Governance"] = "Governance";
})(exports.AssessmentCategory || (exports.AssessmentCategory = {}));

const template$c = {
    type: exports.Type.Layer,
    slug: "ailayer",
    title: "AILayer",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const template$b = {
    type: exports.Type.Layer,
    slug: "algorand",
    title: "Algorand",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

/// Review snippets for additional information added to reviews
var BitcoinSecuritySnippet;
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
})(BitcoinSecuritySnippet || (BitcoinSecuritySnippet = {}));
var TechnologySnippet;
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
})(TechnologySnippet || (TechnologySnippet = {}));
var UseCaseSnippet;
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
})(UseCaseSnippet || (UseCaseSnippet = {}));
var KnowledgeBitSnippet;
(function (KnowledgeBitSnippet) {
    KnowledgeBitSnippet["EthereumL2"] = "This network is a layer 2 for Ethereum. For a view into the technology from an Ethereum perspective, head to [L2Beat](https://www.L2Beat.com) for their review.";
    KnowledgeBitSnippet["Template"] = "Template used for the template prop file.";
})(KnowledgeBitSnippet || (KnowledgeBitSnippet = {}));
var AdditionalSnippet;
(function (AdditionalSnippet) {
    AdditionalSnippet["UpgradeableContractsCentralizedAndNoExit"] = "The contracts related to this project are immediately upgradeable by a centralized party. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade, there is no exit delay and users are unable to leave the chain.";
    AdditionalSnippet["UpgradeableContractsFederatedAndExit"] = "The contracts related to this project are immediately upgradeable by a federation. These contracts affect the project's chain and may affect specific two-way peg implementations.\n\nIn case of an malicious upgrade by this federation, there is no exit delay and users are unable to leave the chain.";
    AdditionalSnippet["InitialReview"] = "This is the initial review of the network. We will conduct a full review of the network shortly in the future. The contents in this review are subject to change.";
})(AdditionalSnippet || (AdditionalSnippet = {}));
var OtherSnippet;
(function (OtherSnippet) {
    OtherSnippet["WithdrawalsAltRollup"] = "Withdrawing BTC-backed assets from the network depends on a variety of factors. First, users must trust the network operators to include their withdrawal request in a block. If the user's assets are locked in the network's official bridge program, they rely on a proposer to include their request in proposed state transition. After the state transition is finalized, the user can redeem their funds.\n\nIf a user's BTC-backed asset is minted directly onto the network, then the user's withdrawal request must be processed by the asset issuer.";
    OtherSnippet["NotASideSystem"] = "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.";
})(OtherSnippet || (OtherSnippet = {}));
//Below is snippets for alternative chains that we haven't been able to review yet due to volume.
var AtlSnippet;
(function (AtlSnippet) {
    AtlSnippet["FinalityConsensusNetwork"] = "Finality assurances are provided by an alternative consensus network. Users trust that once a transaction has been added to the chain it won't be reverted.";
    AtlSnippet["DAConsensusNetwork"] = "Data is published to, and made available by, full nodes participating in an alternative consensus network. Anyone can run a node and verify the current state of the network";
    AtlSnippet["OperatorsPoSNetwork"] = "Blocks are produced and proposed by an alternative proof-of-stake network.";
    AtlSnippet["PrioritizeLayers"] = "The Bitcoin Layers project prioritizes reviews on protocols that claim to be bitcoin layers. It also reviews bridges, token wrappers, and other mechanisms that support synthetic versions of bitcoin on other chains. If you'd ike to contribute to this review, feel free to submit a PR in our [GitHub](https://github.com/bitcoinlayers/bitcoinlayers) or join our [telegram group](https://t.me/+8rv-1I2gkmQ4ZmJh) to discuss.";
})(AtlSnippet || (AtlSnippet = {}));
const Alertsnippet = {
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
    BitcoinBridgeNoSigners: {
        type: "error",
        title: "The signers for this bridge have not been disclosed",
        content: "The signers for this bitcoin two-way peg have not been disclosed. The signers have unilateral control of funds backing this wrapped asset. Collusion can result in loss of user funds. There is no reputational damange for these signers if they act maliciously.",
        expandable: true,
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
var Reviewsnippet;
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
})(Reviewsnippet || (Reviewsnippet = {}));

const arbitrum = {
    type: exports.Type.Layer,
    slug: "arbitrum",
    title: "Arbitrum",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://arbitrum.io/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.arbitrum.io/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://arbiscan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/OffchainLabs/arbitrum",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/arbitrum",
        },
    ],
    description: "Arbitrum is an Ethereum rollup that supports a variety of wrapped BTC tokens.",
    riskSummary: [
        {
            title: "All BTC pegs have custodian trust assumptions",
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: "Some contracts immediately upgradeable by Arbitrum Security council",
            content: `${exports.RiskSummarySnippet.RiskSummarySecurityCouncil} The Arbitrum Security council is a 9/12 multisig.`,
        },
        {
            title: "Another network is used for data availability",
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: "A centralized entity is the network operator",
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by a 9 member federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.CoinbasecbBTC}`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xSolvBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${exports.TokenSnippet.SolvBTCENA},\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.LorenzostBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtcnetwork-ibtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.VariousCustodianPeg,
                    content: `${exports.TokenSnippet.iBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Avalanche BTCb",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.AvalancheBTCb}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Fire Bitcoin FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.FireBTC},\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.babypie},\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "xLink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink},\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Rootstock RBTC",
                    infrastructureSlug: "rootstock-rbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.RootstockRBTC}${exports.TokenSnippet.smartcontractreview}.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Arbitrum blocks are produced and proposed by a centralized operator, but users can propose their own state updates in the event of censorship or liveness failures",
            content: exports.ReviewSnippet.SelfProposeMainAlt,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Arbitrum state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Arbitrum does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Arbitrum does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-Compatible",
                    content: exports.TechnologySnippet.EVM,
                },
                {
                    title: "Fault Proofs (a.k.a Fraud Proofs)",
                    content: exports.TechnologySnippet.FaultProofs,
                },
                {
                    title: "Arbitrum Stylus",
                    content: exports.TechnologySnippet.ArbitrumStylus,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${exports.KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

const template$a = {
    type: exports.Type.Layer,
    slug: "aurora",
    title: "Aurora",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const avalanche = {
    type: exports.Type.Layer,
    slug: "avalanche",
    title: "Avalanche",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "risksummary", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "AVAX",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.avax.network/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.avax.network/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://avascan.info/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/ava-labs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/avax",
        },
    ],
    description: "Avalanche is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts. It also supports the interoperable subnet blockchains.",
    riskSummary: [
        {
            title: "All BTC pegs have custodian trust assumptions",
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: "The network is an alternative blockchain",
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Avalanche BTCb",
                    infrastructureSlug: "avalance-btcb",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.FederationPeg,
                    content: exports.TokenSnippet.AvalancheBTCb,
                },
                {
                    name: "SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.SolvBTC,
                },
                {
                    name: "Kraken KBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtcnetwork-ibtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.iBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is stored and made available by Avalanche full nodes",
            content: "The data for Avalanche's state is made available by its full nodes. Anyone can run an Avalanche node and verify is state.\n\nWe are currently reviewing Avalanche's full node implementation",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Avalanche is operated by a distributed validator set",
            content: "Blocks are built and proposed by a permissionless consensus network.\n\nWe are currently reviewing Avalanche's network operators",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Finality on Avalanche is guaranteed by a permissionless consensus mechanism",
            content: "Blocks are validated and finalized by a permissionless consensus network.\n\nWe are currently reviewing Avalanche's finality guarantees",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Avalanche does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "AVAX token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Avalanche does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-Compatible",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const babylon = {
    type: exports.Type.Layer,
    slug: "babylongenesis",
    title: "Babylon",
    entityType: exports.EntityType.BPoSNetwork,
    entityCategory: exports.EntityCategory.Integrated,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "BABY",
    notice: exports.Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://babylonlabs.io/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.babylonlabs.io/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://babylon.explorers.guru/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/babylonlabs-io/",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/babylonlabs_io",
        },
    ],
    description: "Babylon is a proof-of-stake blockchain that is partially secured by bitcoin staking. It is the first Babylon BSN network. It offers a CosmWasm execution environment that supports arbitrary smart contracts.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.LombardLBTC} LBTC on Babylon is bridged to the Cosmos Hub via Ethereum and then ported to Babylon through IBC.`,
                },
                {
                    name: "Solv BTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is stored and made available by an alternative PoS network",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Network is operated by an alternative PoS network",
            content: exports.ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Finality guarantees are provided by an alternative PoS Network",
            content: exports.ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Babylon inherits economic security from BTC the asset",
                    content: exports.BitcoinSecuritySnippet.YesSecurityDualStaking,
                },
                {
                    title: "BABY token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "MEV implications under review",
                    content: exports.BitcoinSecuritySnippet.MEVUnderReview,
                },
                {
                    title: "Babylon does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Bitcoin Staking",
                    content: exports.TechnologySnippet.BitcoinStakingUnderReview,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: `${exports.UseCaseSnippet.OnchainApps}\n\nDeploying an application on Babylon is currently permissioned. Developers must apply and be approved through Babylon governance to currently deploy on Babylon Genesis.`,
                },
            ],
        },
    ],
};

const base = {
    type: exports.Type.Layer,
    slug: "base",
    title: "Base",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    custodyTitle: exports.CustodyTitle.Centralized,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.base.org/",
        },
        {
            text: exports.Site.Docs,
            url: "https://www.docs.base.org/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://basescan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/base-org",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/base",
        },
    ],
    description: "Base is an Ethereum rollup that that supports a variety of wrapped BTC tokens.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleSystemUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.CoinbasecbBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by a 9 member federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.LombardLBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.VariousCustodianPeg,
                    content: `${exports.TokenSnippet.iBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Pump BTC",
                    infrastructureSlug: "pump-btc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.PumpBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${exports.TokenSnippet.xSolvBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Rootstock RBTC",
                    infrastructureSlug: "rootstock-rbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.RootstockRBTC}${exports.TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink}${exports.TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "AxlBTC",
                    infrastructureSlug: "axelar-axlbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Base blocks are produced and proposed by a centralized operator, but users can propose their own state updates in the event of censorship or liveness failures",
            content: exports.ReviewSnippet.SelfProposeMainAlt,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Base's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Base does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Base does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
                {
                    title: "Fault Proofs (a.k.a Fraud Proofs)",
                    content: exports.TechnologySnippet.FaultProofs,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${exports.KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

const berachain = {
    type: exports.Type.Layer,
    slug: "berachain",
    title: "Berachain",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BERA",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.berachain.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.berachain.com/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://berascan.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/berachain",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/berachain",
        },
    ],
    description: "Berachain is an EVM-compatible L1. It leverages a novel consensus mechanism and is home to various BTC-derivative assets.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.SolvBTC,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.LombardLBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Fire FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.FireBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.PumpBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.LorenzostBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is stored and made available by an alternative PoS network",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Network is operated by an alternative PoS network",
            content: exports.ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Finality guarantees are provided by an alternative PoS Network",
            content: "Berachain leverages a novel consensus mechanism for transaction execution. Like CometBFT, it offers single slot finality. This means that once a transaction is added to the canonical chain, it cannot be reorged.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Berachain does not inherit any security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "BERA token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Berachain does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const bevm = {
    type: exports.Type.Layer,
    slug: "bevm",
    title: "BEVM",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
    ],
    btcLocked: 80,
    nativeToken: "BEVM",
    feeToken: "WBTC",
    notice: exports.Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.bevm.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://documents.bevm.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://scan.bevm.io",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/btclayer2/BEVM",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/BTCLayer2",
        },
    ],
    description: "BEVM is an EVM-compatible blockchain built on substrate. On the BEVM chain, the BTC is held in custody by a federated signer set.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BEVM WBTC",
                    infrastructureSlug: "bevm-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust a federation with the custody of their BTC. Signers under review",
                    content: "On BEVM's official bridge, BTC is locked in a bitcoin address controlled by up to 15 trustees. These trustees custody the BTC that backs wBTC on BEVM.\n\nTrustees are selected by BEVM's validator set. Users trust that the trustees will not steal their BTC.\n\n🔬We are currently reviewing if the signers for the BEVM two-way peg are publicly disclosed.",
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.LorenzostBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is made available via validator nodes and additionally stored on archive nodes. Anyone can run BEVM node",
            content: "BEVM full nodes are responsible for satisfying BEVM's data availability requirement. Archive nodes are additionally responsible for preserving the historical blockchain data. Users can run their own archive node and access the data at any time by utilizing the node as an RPC. Public endpoints deploy archival nodes to facilitate blockchain data to the users. As long as there is one archive node online, users can recover the full history of the BEVM blockchain.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "BEVM network is operated by permissioned validators",
            content: "On a BEVM chain, a block is produced every 6s and is finalized by achieving consensus among permissioned validators. Only the permissioned validators have the rights to produce the block and include the transactions in the block. Consequently, users trust the permissioned validators that they will include their transactions in the block without censoring them.\n\nBEVM governance, which is done by delegating tokens to validators, is currently not live. This sees a permissioned validator set operate the network.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Transactions on BEVM chain are finalized offchain by its permissioned validators",
            content: "Permissioned validators on BEVM chain verify and include the transactions in BEVM block. Validators participate in a proof of stake consensus mechanism and see blocks produced, and finalized, every six seconds.\n\n2/3 of the validators need to agree on a state transition prior to it being finalized. This process sees no guarantees provided via Bitcoin consensus.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "No security inherited from bitcoin consensus",
                    content: "BEVM currently has no relationship with bitcoin consensus participants.",
                },
                {
                    title: "No base layer MEV, but users trust validators to not reorder their transactions",
                    content: "Base layer MEV does not exist. Users, on the BEVM chain, trust that the validators don’t reorder their transactions. Additionally, Validator elections take place every 1 hour.",
                },
                {
                    title: "The BEVM token is used to incentivize network participants",
                    content: "BEVM token has been issued. BEVM tokens will potentially be used to incentivize the active and honest validators.",
                },
                {
                    title: "The BEVM network does not pay fees to Bitcoin miners",
                    content: "BEVM does not pay fees to Bitcoin miners.",
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content: "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust the trustees on BEVM chain to process their withdrawals",
                    content: "Upon the initiation of a withdrawal transaction on the BEVM chain, trustees will be notified of the withdrawal request, sign the withdrawal, and if the number of signatures reaches the multi-signature requirement, the transaction will be broadcasted to the bitcoin network.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "BFT PoS consensus network",
                    content: "In BEVM, validators participate in a hybrid consensus mechanism. Their consensus mechanism separates block production mechanism from block finalization. For block authoring, BABE consensus is run between the validators and it selects the block producers. In parallel, validators execute GRANDPA BFT consensus to finalize the block. Once more than ⅔ of validators agree on the new block, the chain containing a new block is finalized.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "BEVM’s node software is open source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[BEVM Website](https://www.bevm.io/)",
                },
            ],
        },
    ],
};

const bitfinity = {
    type: exports.Type.Layer,
    slug: "bitfinity",
    title: "Bitfinity",
    entityType: exports.EntityType.Alt,
    entityCategory: exports.EntityCategory.Sidesystem,
    live: exports.LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "BTF",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://bitfinity.network",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bitfinity.network",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.mainnet.bitfinity.network/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/bitfinity-network",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/bitfinitynet",
        },
    ],
    description: "Bitfinity is an EVM-based sidechain.",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "ICP ckBTC",
                    infrastructureSlug: "icp-ckbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: "Leverages ICP's ckBTC two-way peg with bitcoin. We are reviewing if there are any changes for the Bitfinity integration",
                    content: "Bitfinity's two-wag peg leverages ICP's ckBTC two-way peg to bring BTC onto the sidechain. BTC backing ckBTC is secured by validators selected by ICP's governance mechanism. This implementation is under review.",
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "We are reviewing what satisfies Bitfinity's data availability requirement",
            content: "We are reviewing the operators responsible for data availability and storage for the Bitfinity sidechain.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "We are reviewing Bitfinity's block production mechanism",
            content: "We are reviewing the operators of the Bitfinity sidechain.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "We are reviewing Bitfinity's finality guarantees",
            content: "We are reviewing how transactions are finalized on Bitfinity.",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

const bitlayer = {
    type: exports.Type.Layer,
    slug: "bitlayer",
    title: "Bitlayer",
    entityType: exports.EntityType.Federation,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.High,
    ],
    btcLocked: 5397,
    nativeToken: "BTR",
    feeToken: "WBTC",
    bitcoinOnly: false,
    notice: exports.Notice.OtherReasonBridge,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.bitlayer.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bitlayer.org",
        },
        {
            text: exports.Site.Explorer,
            url: "https://www.btrscan.com",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/bitlayer-org",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/BitlayerLabs",
        },
    ],
    description: "Bitlayer's mainnet v1 is a federated sidechain. It supports an EVM execution environment with plans to support other VMs.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleFederation,
            content: exports.RiskSummarySnippet.RiskSummaryFederation,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Bitlayer WBTC",
                    infrastructureSlug: "bitlayer-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitLayerwBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.LorenzostBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink}${exports.TokenSnippet.smartcontractreview}.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is stored offchain with node software open-source",
            content: "Bitlayer does not currently use Bitcoin for data availability. The data availability requirement is currently fulfilled by Bitlayer full nodes. The Bitlayer node software is open source and anyone can run a node and validate the state of Bitlayer.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Bitlayer is operated by a permissioned validator set",
            content: "Bitlayer blocks are currently produced by a permissioned validator set. There are currently 21 validators participating in Bitlayer consensus. Users cannot bypass this operator set if they are censored by the validator set.\n\nBitLayer has not disclosed the operators for this validator set.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Bitlayer validators finalize blocks",
            content: "There is no onchain enforcement of Bitlayer state transitions on bitcoin. Bitlayer's state transitions are finalized by a permissioned validator set. Validators sign off on proposed blocks and finalize them in the chain.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Bitlayer does not currently inherit any security from Bitcoin consensus participants",
                    content: "Bitlayer is a federated sidechain, and Bitcoin consensus participants do not participate in securing Bitlayer.",
                },
                {
                    title: "BTR token issued, but validators are not required to stake BTR",
                    content: "None of the validators in Bitlayer’s validator set are staking its native token, BTR. Currently the BTR supply is 1B and is dispersed across 6 addresses. It is unknown if Bitlayer will use this token to incentivize its current set of validators, or other future operators.",
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: "Bitlayer, due to a lack of current relationship with Bitcoin, does not introduce MEV on the Bitcoin blockchain. Users trust that Bitlayer's permissioned  validator set will not extract MEV.",
                },
                {
                    title: "Bitlayer does not contribute to the security budget",
                    content: "Bitlayer does not currently contribute to the Bitcoin security budget.",
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content: "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users cannot unilaterally withdraw from the Bitlayer sidechain",
                    content: "Users of Bitlayer's primary bridge program, or third party bridges, cannot unilaterally withdraw their assets from Bitlayer. They trust that Bitlayer validators will include withdrawal transactions in Bitlayer blocks, and that multi-sig signers will process their withdrawal back to the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: "Bitlayer uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Bitlayer is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on Bitlayer compared to other execution environments.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Portions of code is open-source",
                    content: "Some of the code related to the Bitlayer project is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Bitlayer block explorer](https://www.btrscan.com/home)\n[Bitlayer's validator set](https://www.btrscan.com/leaderboard)",
                },
            ],
        },
    ],
};

const bnbsmartchain = {
    type: exports.Type.Layer,
    slug: "bnbsmartchain",
    title: "BNB Smart Chain",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    custodyTitle: exports.CustodyTitle.Centralized,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BNB",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.bnbchain.org/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bnbchain.org/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://bscscan.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/bnb-chain",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/BNBChain",
        },
    ],
    description: "BNB Smart Chain is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BinanceBTCB,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.ThresholdtBTC,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\nWe are currently reviewing if tBTC is minted on BNB Smart Chain natively or minted on Ethereum and then bridged to BNB Smart Chain via a custom bridge contract.`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.SolvBTC,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${exports.TokenSnippet.SolvBTCENA}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Pump BTC",
                    infrastructureSlug: "pump-btc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.PumpBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.FireBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.LorenzostBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.LombardLBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.babypie}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Kinza kBTC",
                    infrastructureSlug: "kinza-kbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.KinzaBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.BedrockUniBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Avalanche BTC.b",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.AvalancheBTCb}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink}${exports.TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtcnetwork-ibtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.iBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`
                },
                {
                    name: "Bedrock brBTC",
                    infrastructureSlug: "Bedrock-brbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.BedrockbrBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Allo alloBTC",
                    infrastructureSlug: "allo-allobtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.AlloBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is made available by an alternative consensus network",
            content: exports.ReviewSnippet.DAConsensusNetwork,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "BNB Smart Chain is operated by a distributed validator set",
            content: `${exports.ReviewSnippet.OperatorSidechainPOS}\n\nBNB Smart Chain leverages a hybrid proof-of-stake mechanism similar to delegated proof-of-stake. BNB token holders can delegate tokens to their preferred validator to support their chances at winning blocks.`,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Finality guarantees are provided through BNB Smart Chain's validators",
            content: exports.AtlSnippet.FinalityConsensusNetwork,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "BNB Smart Chain does not inherit any security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "BNB Smart Chain does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const bob = {
    type: exports.Type.Layer,
    slug: "bob",
    title: "BOB",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.High,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 974,
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    notice: exports.Notice.OtherReasonBridge,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.gobob.xyz",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.gobob.xyz",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/bob-collective/bob",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/build_on_bob",
        },
    ],
    description: `BOB prioritizes use cases for BTC-backed assets and is looking to derive more security from bitcoin over time. ${exports.DefinitionSnippet.DefinitionAltRollup}`,
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleBridgeUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade,
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "BTC users trust that tBTC will remain backed on Ethereum, and that that the BOB bridge will not be maliciously upgraded",
                    content: `${exports.TokenSnippet.ThresholdtBTC} tBTC is minted via its official bridge between BOB and Ethereum. This bridge is finalized by a Hybrid proving system using validity proofs and fraud proofs.\n\n${exports.ReviewSnippet.CentralizedUpgradeableBridge}`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "BTC users trust that wBTC will remain backed on Ethereum, and that that the BOB bridge will not be maliciously upgraded",
                    content: `${exports.TokenSnippet.BitGowBTC} wBTC is minted via its official bridge between BOB and Ethereum. This bridge is finalized by a Hybrid proving system using validity proofs and fraud proofs.\n\n${exports.ReviewSnippet.CentralizedUpgradeableBridge}`,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "BTC users trust that LBTC will remain backed on Ethereum, and that that the BOB bridge will not be maliciously upgraded",
                    content: `${exports.TokenSnippet.LombardLBTC} LBTC is minted via its official bridge between BOB and Ethereum. This bridge is finalized by a Hybrid proving system using validity proofs and fraud proofs.\n\n${exports.ReviewSnippet.CentralizedUpgradeableBridge}`,
                },
                {
                    name: "Fire FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.FireBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.PumpBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC} ${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvBTC} ${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${exports.TokenSnippet.xSolvBTC} ${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${exports.TokenSnippet.xlink} ${exports.TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "BOB blocks are produced and proposed by a centralized operator, but forced inclusion to Ethereum L1 possible",
            content: exports.ReviewSnippet.SelfSequenceMainAlt,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Bob's state transitions finalize by updating its state based on data posted to Ethereum",
            content: exports.ReviewSnippet.AltL1Finality,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "BOB does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "BOB does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Proposer role centralized and permissioned. BTC users trust network operators to include their withdrawal requests in a block. Asset redemption varies dependent on the asset issuer",
                    content: exports.OtherSnippet.WithdrawalsAltRollup,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
                {
                    title: "OP Kailua",
                    content: "BOB leverages a hybrid proving system that leverages validity proofs and fraud proofs to finalize bridge programs on Ethereum. The system leverages a priveleged proposer, known as the Vanguard, that has the first right to submit a state update to BOB smart contracts on Ethereum. It can either submit a validity proof to finalize the state update after a verifier contract verifies the proof, or it can submit a state root that is validated after a challenge window passes. If only a state root is submitted, it finalizes after three days. Anyone is able to challenge this proposal by submitting a conflicting state update proposal. In the event of a challenge proposal, the Vanguard or the challenger submit a validity proof that is verified by an Ethereum smart contract. Only a correct proposal can be validated by the verifier contract, so only the correct proposal is accepted to advance the state. The publisher of an incorrect state update is slashed the 0.5 ETH collateral they posted.",
                    alert: {
                        type: "info",
                        title: "Learn more about OP Kailua",
                        content: "L2Beat has a great overview of the hybrid proving system used by BOB.",
                        linkText: "L2Beat",
                        linkUrl: "https://l2beat.com/scaling/projects/bob#state-validation",
                        expandable: true,
                    },
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Under review",
                    content: "We are reviewing if BOB's node software is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[This document outlines the privileged roles who play a role in managing various components of the BOB chain](https://docs.gobob.xyz/docs/learn/security/privileged-roles)\n[A risk review of the OP Mainnet chain on Ethereum, which has similar trust assumptions as the BOB chain as BOB is built on the OP Stack](https://l2beat.com/scaling/projects/optimism)\n[A blog covering R&D areas related to Bitcoin security on BOB.](https://mirror.xyz/0xE4dF449bDC1ec8f7688F68F7E839f1370617Ac73/UvQH9D3RyVcozOlz091gLKnbX8aqn8goFVYtHVmin-w)\n[BOB's TVL breakdown, including total BTC locked.](https://l2beat.com/scaling/projects/bob/tvl-breakdown)",
                },
            ],
        },
    ],
};

const template$9 = {
    type: exports.Type.Layer,
    slug: "botanix",
    title: "Botanix",
    entityType: exports.EntityType.Federation,
    entityCategory: exports.EntityCategory.Sidesystem,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.Medium,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "bBTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://botanixlabs.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.botanixlabs.com/botanix/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://botanixscan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/botanix-labs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/BotanixLabs",
        },
    ],
    description: "Botanix is an EVM-compatible sidechain that is operated by a federation. The network supports an enshrined bridge program managed by the federation. Botanix is built on CometBFT consensus and has plans to add bitcoin staking in the future.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleFederation,
            content: exports.RiskSummarySnippet.RiskSummaryFederation,
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskFederationPeg,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Botanix BTC",
                    infrastructureSlug: "botanix-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "BTC backing this asset is secured by a federation",
                    content: exports.TokenSnippet.BotanixBTC,
                    alert: Alertsnippet.BridgeStandardMet,
                },
                {
                    name: "Botanix Staked BTC",
                    infrastructureSlug: "botanix-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "This asset is backed by wrapped BTC locked in a staking vault",
                    content: Reviewsnippet.BotanixStakedBTC,
                },
                {
                    name: "Rover rovBTC",
                    infrastructureSlug: "rover-rovbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "This asset is backed by Botanix stBTC locked in a staking vault",
                    content: Reviewsnippet.RoverrovBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Botanix node operators are responsible for making data available",
            content: `${Reviewsnippet.AltL1DA}`
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Botanix's federation is responsible for operating the network",
            content: exports.ReviewSnippet.OperatorFederated,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Botanix's federation is responsible for finalizing transactions",
            content: exports.ReviewSnippet.CometBFTFinality,
        },
    ],
    manualContracts: [
        {
            title: "stBTC VaultContract",
            address: "0xF4586028FFdA7Eca636864F80f8a3f2589E33795",
            subtitle: "",
            explorerUrl: "https://botanixscan.io/address/0xF4586028FFdA7Eca636864F80f8a3f2589E33795/contract/3637/readContract"
        },
        {
            title: "rovBTC Vault Contract",
            address: "0xDe46F9bF2d99F2db88440C74DC4c2A373fc9F69e",
            subtitle: "",
            explorerUrl: "https://botanixscan.io/address/0x9BC574a6f1170e90D80826D86a6126d59198A3Ef/contract/3637/code"
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Node implementation is not open-source",
                    content: "Botanix's consensus node implementation, based on CometBFT, is not open-source. There is also no public consensus explorer showing validator performance and uptime.",
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Botanix does not inherit security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "Botanix is a bitcoin-denominated network",
                    content: exports.BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "Users trust the Botanix federation to not exploit MEV",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Botanix does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain Applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const bouncebit = {
    type: exports.Type.Layer,
    slug: "bouncebit",
    title: "BounceBit",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.Unverified,
        exports.RiskFactor.Unverified,
        exports.RiskFactor.Unverified,
        exports.RiskFactor.Unverified,
    ],
    btcLocked: 3901,
    nativeToken: "BB",
    feeToken: "BB",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://bouncebit.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bouncebit.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://bbscan.io",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/BounceBit-Labs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/bounce_bit",
        },
    ],
    description: "BounceBit is a bitcoin sidechain. It leverages a delegated proof-of-stake consensus mechanism and uses the BB and BBTC (BTC-synthetic on BounceBit) tokens for staking. It is EVM-compatible and can support an ecosystem of onchain applications.",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BounceBit WBTC",
                    infrastructureSlug: "boundebit-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.Unverified,
                    title: "Bridge is managed by a third party",
                    content: "The official BounceBit bitcoin bridge is proposedly managed by the Polyhedra Network. The two-way peg is currently an MPC protocol, where a selected number of signers are responsible for securing the bridge and custodying users’ BTC.\n\n🛑  We cannot currently verify claims related to BounceBit’s two-way peg. Polyhedra has not disclosed any information related to its operation of the BounceBit two-way peg.",
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Unverified,
            title: "A permissioned validator set, participating in a delegated proof-of-stake mechanism, satisfies the data availability requirement",
            content: "Currently, BounceBit’s validator set is responsible for keeping a record of the chain’s latest state. There are currently 25 active validators.\n\nThe mainnet node implementation is not open-source, so users are unable to run BounceBit nodes and maintain a record of BounceBit’s state.",
        },
        {
            category: exports.RiskCategory.LivenessReorgResistance,
            score: 0,
            tier: exports.RiskFactor.Unverified,
            title: "Network managed by a permissioned set of operators participating in a delegated proof-of-stake mechanism",
            content: "BounceBit blocks are currently signed and proposed by 25 validators participating in its proof-of-stake network. These operators are currently permissioned.\n\nOperators stake the BB token to participate in the network. Users can delegate BBTC (wrapped bitcoin) and BB tokens to validators to increase their voting power, which improves their chances of winning blocks.",
        },
        {
            category: exports.RiskCategory.StateValidation,
            score: 0,
            tier: exports.RiskFactor.Unverified,
            title: "Settlement assurances are provided by BounceBit consensus",
            content: "Settlement assurances are provided by BounceBit’s validator set, not Bitcoin. More than 2/3 of BounceBit’s validators’ voting power is needed to sign a proposed block to finalize it onchain.\n\nBounceBit has single-slot finality, meaning that blocks cannot be re-organized once they are part of the canonical blockchain.\n\nBitcoin can not validate BounceBit state transitions. Bridge operators can process fraudulent withdrawals and steal user funds.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "BounceBit’s economic security can depend on wrapped BTC assets",
                    content: "Due to its dual-token staking architecture, BounceBit can rely on wrapped forms of BTC for economic security. This reliance increases as more BTC is staked to secure the network.",
                },
                {
                    title: "BounceBit does not leak MEV to Bitcoin",
                    content: "BounceBit does not leak MEV to the Bitcoin mainchain. Users trust BounceBit validators to not reorder their transactions to extract MEV.",
                },
                {
                    title: "An alternative token is needed for network security",
                    content: "BB is one of the token's required for staking and is used to issue rewards to validators.",
                },
                {
                    title: "Bridge deposit and withdrawals pay fees to miners",
                    content: "Transaction fees are paid to Bitcoin miners when users deposit and withdraw funds from the BounceBit bridge. Block rewards on BounceBit are distributed to BounceBit validators.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Mainnet node software not open-source",
            content: [
                {
                    title: "📝 Project is currently under review",
                    content: "The mainnet node software is not open-source. Users trust the information within dashboards provided by the BounceBit, as they cannot run a node and verify the network’s current state and its participants.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust a third party bridge provider to process withdrawals",
                    content: "Withdrawals are ultimately processed by the participants in the MPC Protocol operated by the Polyhedra Network. Users trust that BounceBit validators will include their withdrawal transaction in a block and that Polyhedra Network operators will process their withdrawal and release funds on the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Evmos & CometBFT",
                    content: "BounceBit’s L1 blockchain is a fork of Evmos, an EVM-compatible chain built using the Cosmos SDK. The Cosmos SDK is built on top of CometBFT, a consensus protocol that enables high throughput and fast finality (~2-second blocks).\n\nThis architecture enables users to process transitions in both the Cosmos and EVM formats, while also ensuring BounceBit is compatible with various Cosmos SDK modules. Additionally, chains built with CometBFT are compatible with the IBC bridging standard, widely used in the Cosmos ecosystem.",
                },
                {
                    title: "EVM Compatibility",
                    content: "Due to BounceBit being based on Evmos’ architecture, developers are able to deploy EMV-compatible applications on BounceBit. BounceBit can leverage EVM-supported libraries and port over EVM-based applications to BounceBit.",
                },
                {
                    title: "Delegated Proof-of-Stake",
                    content: "BounceBit consensus relies on a delegated proof-of-stake (DPoS) model. Token holders delegate their BB and BBTC tokens to their favored validators. Validators with the highest amounts of delegated and staked tokens have a higher probability of winning the right to propose blocks.\n\nThe delegation process sees users transfer a token to a BounceBit validator and receive a synthetic token representing their delegated tokens. BounceBit validators can determine how much rewards they distribute to those who have delegated tokens towards them, and are incentivized to distribute a fair amount to ensure users continually delegate their tokens towards them.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: "Due to BounceBit being EMV-compatible, it can support a range of on-chain applications. This may include borrowing and lending protocols, decentralized exchanges and NFT marketplace.",
                },
                {
                    title: "Institutional finance",
                    content: "BounceBit is integrated with institutional financial applications, providing users an opportunity to deposit their funds with a custodian for the custodian to leverage their tokens in investment strategies on their behalf.\n\n⚠️ If you deposit funds with a custodian, you are trusting this custodian to not steal or misappropriate your funds.",
                },
                {
                    title: "BTC Staking",
                    content: "BounceBit enables BTC holders to delegate their BTC, as a part of DPoS in BounceBit, and delegate that stake to a specific validator in the BounceBit network.\n\nIn exchange for delegating their BTC, users may receive rewards in the form of BB tokens.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "BounceBit is currently operated by a closed validator set",
                    content: "The operators of the BounceBit chain are a federated operator set. Prospective validators may be able to attempt and join the operator set after the mainnet node implementation is made open source.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is not open-source",
                    content: "BounceBit’s mainnet node implementation is not currently open-source.",
                },
            ],
        },
    ],
};

const bsquared = {
    type: exports.Type.Layer,
    slug: "bsquared",
    title: "Bsquared",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "BSQ",
    feeToken: "WBTC",
    bitcoinOnly: false,
    notice: exports.Notice.OtherReasonBridge,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.bsquared.network",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bsquared.network",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.bsquared.network",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/b2network",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/BSquaredNetwork",
        },
    ],
    description: "The current Bsquared Network mainnet consists of two different chains. The parent chain is a fork of Ethermint. The rollup chain is a fork of of an Ethereum rollup stack.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDACommittee,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Bsquared WBTC",
                    infrastructureSlug: "bsquared-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users deposit funds into a MPC protocol managed by Bsquared Network and a custodian. Less than 5, individual signers have been publicly announced",
                    content: exports.TokenSnippet.BsquaredBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.BedrockUniBTC,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.LorenzostBTC,
                },
                {
                    name: "UniRouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: exports.RiskFactor.Critical,
                    title: "Smart contracts have not been reviewed. UniRouter has not disclosed its custodian operators",
                    content: exports.TokenSnippet.UniRouterBTC,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust centralized signers to secure BTC backing oBTC",
                    content: exports.TokenSnippet.ObeliskoBTC,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink}${exports.TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "LayerBank BTC",
                    infrastructureSlug: "layerbank-btc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "LayerBank uBTC",
                    infrastructureSlug: "layerbank-ubtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "DA requirement is fulfilled by permissioned validators",
            content: "Sequencer batches are posted to the Bsquared Network L1. This network consists of a permissioned validator set who is responsible for making the data readily available. The identities of these operators has not been disclosed.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Both the rollup chain and parent chain are run by federated, centralized parties",
            content: "Bsquared Network’s implementation has a single sequencer that posts sequencer batches to its network of three L1 validators.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Finality is guaranteed by a permissioned validator set",
            content: Reviewsnippet.AltRollupFinality,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Bsquared Network does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin. Users trust a centralized operator to not reorder their transactions.",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "An alternative token exists, but is not being used for network security",
                    content: BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "Bsquared Network does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-Compatible",
                    content: "Bsquared Network is EVM-compatible. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Node software code is open-source",
                    content: "The node software is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Bsquared Network's L1 explorer](https://hub-explorer.bsquared.network)\n[Bsquared Network Github](https://github.com/b2network)",
                },
            ],
        },
    ],
};

const core = {
    type: exports.Type.Layer,
    slug: "core",
    title: "Core",
    entityType: exports.EntityType.BPoSNetwork,
    entityCategory: exports.EntityCategory.Integrated,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 6705,
    nativeToken: "CORE",
    feeToken: "CORE",
    otherIcons: exports.OtherIcons.Staking,
    notice: exports.Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://coredao.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.coredao.org",
        },
        {
            text: exports.Site.Explorer,
            url: "https://scan.coredao.org",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/coredao-org",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/Coredao_Org",
        },
    ],
    description: "Core (in relation to Bitcoin) is an EVM sidechain with a hybrid consensus mechanism, Satoshi Plus, that leverages both DPoW and DPoS. It uses a federated multisig to bridge BTC with multiple parties ensuring the honesty of the two-way peg. The native token of the network is CORE, which is used for transaction fees, staking, and governance in Core DAO.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Solv SolvBTC.m",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.SolvBTCdotSolv,
                },
                {
                    name: "Solv SolvBTC.b",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.SolvBTCdotSolv,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.SolvBTC,
                },
                {
                    name: "SolvBTC.CORE",
                    infrastructureSlug: "solv-solvbtccore",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvsolvbtcCORE}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.BinanceBTCB,
                },
                {
                    name: "Avalanche BTC.b",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: exports.TokenSnippet.AvalancheBTCb,
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.ObeliskoBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Unirouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.UniRouterBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink}${exports.TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "Core coreBTC",
                    infrastructureSlug: "core-corebtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "This bridge program is being deprecated",
                    content: "The coreBTC bridge is being deprecated and only facilitating withdrawals.",
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data availability requirement fulfilled by Core chain full nodes",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Core's hybrid consensus mechanism operates the network",
            content: exports.ReviewSnippet.OperatorSidechainPOSBTCStake,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Transaction finality is provided by Core Chain consensus and has no assurances inherited from Bitcoin",
            content: exports.ReviewSnippet.AltL1Finality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Core indirectly inherits security from Bitcoin consensus participants",
                    content: `${exports.BitcoinSecuritySnippet.YesSecurityDualStaking}\n\nThe network additionally can be merge-mined by bitcoin miners.,`
                },
                {
                    title: "Core Chain requires another token to function",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced on Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Core Chain indirectly contributes to the security budget.",
                    content: exports.BitcoinSecuritySnippet.MergeMineFees,
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content: "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
                {
                    title: "Bitcoin Staking",
                    content: exports.TechnologySnippet.BitcoinStakingUnderReview,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.BitcoinStaking,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "Core's node implementation is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Understanding Core Chain by Messari](https://messari.io/report/understanding-core-chain)\n[Core Chain Whitepaper](https://github.com/coredao-org/whitepaper/blob/main/COREWhitepaper_v1.0.6.pdf)",
                },
            ],
        },
    ],
};

const corn = {
    type: exports.Type.Layer,
    slug: "corn",
    title: "Corn",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    custodyTitle: exports.CustodyTitle.Centralized,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BTCN",
    bitcoinOnly: false,
    notice: exports.Notice.OtherReasonBridge,
    links: [
        {
            text: exports.Site.Website,
            url: "https://usecorn.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.usecorn.com/docs/developers/introduction",
        },
        {
            text: exports.Site.Explorer,
            url: "https://cornscan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/usecorn",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/use_corn",
        },
    ],
    description: "Corn is a permissioned rollup that leverages a derivative of BTC as its gas token. It is built on the Arbitrum Orbit stack and uses the AnyTrust protocol for data availability. Its native token, BTCN, is an ERC-20 that lives on Ethereum.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade,
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDACommittee,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Bitcorn BTCN",
                    infrastructureSlug: "corn-btcn",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "BTCN is backed by BTC-derivative assets and is managed by a 2/4 multisig",
                    content: exports.TokenSnippet.BTCN,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.LombardLBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.SolvBTCdotSolv,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BedrockUniBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Data is stored and made available by a permissioned federation",
            content: `${exports.ReviewSnippet.AltDADAC}\n\nThere is one member of the data availability committee with a signing threshold of 1-1.`
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "The Corn network is operated and validated by permissioned entities. Users can self-propose their own state transitions if the operators go offline",
            content: `${exports.ReviewSnippet.SelfProposeMainAlt}\n\nCurrently, producing blocks and state root proposals are done by two centralized entities. The proposer must stake 0.1 ETH to post a state root.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Corn's state transitions finalize by updating its state based on data posted to a federated committee",
            content: Reviewsnippet.AltRollupFinality,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Corn does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "BTCN token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Corn does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Proposer role centralized and permissioned. BTC users must withdraw to Ethereum L1 before withdrawing to Bitcoin",
                    content: "To withdraw from Corn, a user must send BTCN to the Wrapped Bitcorn OFT contract on Corn. This contract then communicates with a swap contract on Ethereum which releases a BTC-derivative asset from the vault contract back to the user.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
                {
                    title: "Arbitrum Stylus",
                    content: exports.TechnologySnippet.ArbitrumStylus,
                },
                {
                    title: "Fault Proofs",
                    content: `${exports.TechnologySnippet.FaultProofs}\n\nOn Corn, there is only one validator who is able to submit state root proposals and contest said proposals. This means the network gains no security benefits from having fault proofs enabled.`
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "contracts",
            title: "Contracts & Permissions",
            content: [
                {
                    title: "Corn is supported by various Ethereum smart contracts",
                    content: "Below are a few of the contracts that support Corn with their respective owners:\n\nSequencerInbox: [Proxy.](https://etherscan.io/address/0x4ad144ea249a98f77e0b78104d3b6eb6cd3a76da#readProxyContract) [Implementation (Upgradeable).](https://etherscan.io/address/0x46faf6838bbf770986f073348d41881d5e54fb0f#code) [Admin.](https://etherscan.io/address/0xee9924c5fd94601c80ff8010f577c9f7f3c20b84)\n\nERC20Bridge: [Proxy.](https://etherscan.io/address/0x7E31f112d340a4D0cB0e4bD82f2853089d1bF10C#readProxyContract) [Implementation (Upgradeable).](https://etherscan.io/address/0xd7fd189f1652378f32da3db7926e51a7b0344797#code) [Admin.](https://etherscan.io/address/0xee9924c5fd94601c80ff8010f577c9f7f3c20b84)\n\nUpgradeExecutor: [Proxy.](https://etherscan.io/address/0xd67c6b5f5a75807478efa05472c8dfd3f64d0bc7) [Implementation (Upgradeable).](https://etherscan.io/address/0x011d8f10fbc20c14b453768253cdff7eb5b96917#code) [Admin.](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6?a=0x1c2c9efa3693572d008fb55253f7deaaa7f3e6b1#readProxyContract)\n\nBTCN Contract: [Proxy.](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6#code) [Implementation (Upgradeable).](https://etherscan.io/address/0xd67c6b5f5a75807478efa05472c8dfd3f64d0bc7#code) [Authority.](https://etherscan.io/address/0x515C7d8Fcb950f8b030ac08C994b37b4b8F3F7B5#code)",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Some contracts related to Corn are source viewable",
                    content: "We are reviewing if Corn has an open-source node implementation.",
                },
            ],
        },
    ],
};

const ethereum = {
    type: exports.Type.Layer,
    slug: "ethereum",
    title: "Ethereum",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://ethereum.org/",
        },
        {
            text: exports.Site.Docs,
            url: "https://ethereum.org/en/developers/docs/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://etherscan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/ethereum",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/ethereum",
        },
    ],
    description: "Ethereum is an alternative blockchain that supports a number of wrapped BTC tokens. Ethereum is home to the EVM execution environment which supports more expressive smart contracts.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "BTC users trust that tBTC will remain backed on Ethereum",
                    content: exports.TokenSnippet.ThresholdtBTC,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.FederationPeg,
                    content: exports.TokenSnippet.LombardLBTC,
                },
                {
                    name: "Coinbase cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.CoinbasecbBTC,
                },
                {
                    name: "Kraken KBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.KrakenKBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BedrockUniBTC,
                },
                {
                    name: "PumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.PumpBTC,
                },
                {
                    name: "FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.FireBTC,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.SolvBTC,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: exports.TokenSnippet.SolvBTCENA,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.LorenzostBTC,
                },
                {
                    name: "Acorn aBTC",
                    infrastructureSlug: "acorn-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.AcornaBTC,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.babypie,
                },
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BinanceBTCB}${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Obelisk oTCB",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.ObeliskoBTC}${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "IBTC Network iBTC",
                    infrastructureSlug: "ibtcnetwork-ibtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.ibtcnetworkibtc}`
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink}${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Avalanche BTC.b",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.AvalancheBTCb}${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Bedrock brBTC",
                    infrastructureSlug: "bedrock-brbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "Badger eBTC",
                    infrastructureSlug: "badger-ebtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "21 Shares BBTC",
                    infrastructureSlug: "21shares-btc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "pStake yBTC",
                    infrastructureSlug: "pstake-ybtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "Lorenzo enzoBTC",
                    infrastructureSlug: "lorenzo-enzobtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
                {
                    name: "Manta mBTC",
                    infrastructureSlug: "manta-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `This two-way peg is under review.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is stored and made available by Ethereum full nodes",
            content: exports.AtlSnippet.DAConsensusNetwork,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Ethereum is operated by an alternative validator set",
            content: exports.AtlSnippet.OperatorsPoSNetwork,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Finality on Ethereum is guaranteed by an alternative consensus mechanism",
            content: exports.AtlSnippet.FinalityConsensusNetwork,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Ethereum does not inherit any security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: "Ethereum does not introduce MEV to bitcoin. Blocks in Ethereum are primarily auctioned off to builders who construct blocks on behalf of a proposer in a given slot. The majority of blocks in Ethereum are built by 2-3 builders.",
                },
                {
                    title: "Ethereum does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const fantom = {
    type: exports.Type.Layer,
    slug: "fantom",
    title: "Fantom",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "FTM",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.soniclabs.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.soniclabs.com/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.fantom.network/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/Fantom-foundation",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/FantomFDN",
        },
    ],
    description: "Fantom is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\n${exports.TokenSnippet.smartcontractreview},`
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Data is stored and made available by Fantom full nodes. ",
            content: "The data for Fantom's state is made available by its full nodes. We are reviewing if operating a node is permissionless.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Fantom is operated by a federated validator set",
            content: exports.ReviewSnippet.OperatorSidechainPOS
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "We are currently reviewing Fantom's finality guarantees",
            content: "Finality guarantees are provided via an alternative proof-of-stake network. We are reviewing Fantom's consensus mechanism.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Fantom does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "FTM token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Fantom does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "deprecated",
            title: "Network is no longer being developed",
            content: [
                {
                    content: "The Fantom network is undergoing a migration to the Sonic network. FTM token holders are able to swap the FTM for S. While the network is still operating, we consider it being deprecated. BTC users should work directly with their bridge provider to exit the Fantom network. Due to this migration, we have given Fantom a custom Very High trust assumption score.",
                },
            ],
        },
    ],
};

const fractal = {
    type: exports.Type.Layer,
    slug: "fractal",
    title: "Fractal",
    entityType: exports.EntityType.MergeMined,
    entityCategory: exports.EntityCategory.Integrated,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: NaN,
    nativeToken: "FB",
    feeToken: "FB",
    notice: exports.Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.fractalbitcoin.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.fractalbitcoin.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://www.okx.com/web3/explorer/fractal-bitcoin",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/fractal-bitcoin/fractald-release",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/fractal_bitcoin",
        },
    ],
    description: "Fractal is a Bitcoin sidechain purpose built to scale bitcoin-native applications like Runes and BRC-20s. It leverages a novel consensus mechanism similar to merge-mining.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Simple sBTC",
                    infrastructureSlug: "simple-sbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "BTC backing the asset is held in a 3/5 multisig",
                    content: exports.TokenSnippet.SimpleSBTC,
                },
                {
                    name: "Bool bBTC",
                    infrastructureSlug: "bool-bbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Fractal relies on a third party for bridge infrastructure",
                    content: exports.TokenSnippet.BoolBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "DA requirement satisfied by Fractal full nodes",
            content: exports.ReviewSnippet.AltL1DAPOW,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Blocks are produced by two distinct miner sets",
            content: "Fractal inherits probabilistic finality from its operator set. It implements a mining mechanism called “cadence mining” that sees every ⅓ blocks merge-mined by bitcoin miners, and ⅔ blocks mined by miners running Fractal’s mining software. This sees Fractal run two different mining algorithms catered to two different operator sets.\n\nFractal blocks are considered finalized after a sufficient amount of hashrate has built on top of the longest chain.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Fractal full nodes validate proposed blocks",
            content: exports.ReviewSnippet.AltL1FinalityPOW,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Fractal is partially merge-mined",
                    content: "Fractal is partially secured by bitcoin miners who merge-mine fractal as a part of its cadence mining set up.",
                },
                {
                    title: "MEV not directly on bitcoin",
                    content: exports.BitcoinSecuritySnippet.MergeMineMEV,
                },
                {
                    title: "FB token used for fees and to incentivize miners",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "Merge-mining enables Bitcoin miners to earn more fees",
                    content: exports.BitcoinSecuritySnippet.MergeMineFees,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "The Fractal blockchain is growing at a fast rate",
                    content: "The Fractal blockchain is growing at a rate much faster than that of Bitcoin. As the blockchain continues to grow, it becomes more difficult for users to run Fractal full nodes. This might see the majority of users pass on the data availability requirement onto another party.",
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content: "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust sidechain consensus and third party bridge providers with withdrawals",
                    content: "Withdrawals from Fractal, like any sidechain, users would need to trust the operators of the Fractal chain and the bridge operator, the Bool Network, to process their withdrawal transaction and release funds on the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Bitcoin Script",
                    content: `${exports.TechnologySnippet.BitcoinScript}\n\nFractal is based on Bitcoin Script.`
                },
                {
                    title: "OP_CAT",
                    content: exports.TechnologySnippet.OP_CAT,
                },
                {
                    title: "Merge-mining",
                    content: exports.TechnologySnippet.MergeMining,
                },
                {
                    title: "Cadence mining",
                    content: "Cadence mining is a novel mining mechanism that sees ⅓ of Fractal blocks mined by bitcoin miners who merge-mine Fractal, and ⅔ of Fractal blocks mined by its own miner set. Thus, the security of Fractal mining is dependent on two distinct operator sets.\n\nBitcoin miners who want to merge-mine Fractal point some of their hashrate to secure the Fractal chain. Fractal miners run a distinct mining software that sees them leverage a different difficulty adjustment.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Tokenized UTXO applications",
                    content: exports.UseCaseSnippet.UTXOTokenizedApplications,
                },
                {
                    title: "Testing ground for new opcodes",
                    content: exports.UseCaseSnippet.TestingGround,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "The source code for Fractal's node implementation is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Fractal block explorer.](https://fractal.unisat.io/explorer)",
                },
            ],
        },
    ],
};

var RiskSummarySnippet;
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
})(RiskSummarySnippet || (RiskSummarySnippet = {}));
var PegRiskSummarySnippet;
(function (PegRiskSummarySnippet) {
    PegRiskSummarySnippet["RiskSummary"] = "";
})(PegRiskSummarySnippet || (PegRiskSummarySnippet = {}));
var OtherRiskSummarySnippet;
(function (OtherRiskSummarySnippet) {
    OtherRiskSummarySnippet["EcashCustodyTitle"] = "Users funds are managed by the mint operator";
    OtherRiskSummarySnippet["CashuCustody"] = "A Cashu mint is operated by a single entity that custodies users\u2019 funds in return for issuing bearer Ecash tokens. If the mint gets hacked, becomes unresponsive or turns malicious, user funds can be stolen.";
    OtherRiskSummarySnippet["FedimintCustody"] = "Users deposit BTC into a multisig to interact with a Fedimint. Users explicitly trust the signers, known as guardians, of the federations\u2019 multisig to not steal their funds. If the mint gets hacked, becomes unresponsive or turns malicious, user funds can be stolen.";
    OtherRiskSummarySnippet["VariousMints"] = "Users can choose between different mints to interact with. It is avised that users choose a mint that they trust and personally know the identities of the operators.";
    OtherRiskSummarySnippet["EcashDebasementRisk"] = "Ecash notes represent a claim on BTC held by the mint operators. As such, there is the risk that the operators issues more Ecash tokens than bitcoin it actually holds. This can lead to Ecash tokens being unbacked.";
    OtherRiskSummarySnippet["RiskSummary"] = "";
})(OtherRiskSummarySnippet || (OtherRiskSummarySnippet = {}));
var DefinitionSnippet;
(function (DefinitionSnippet) {
    DefinitionSnippet["DefinitionAltRollup"] = "The network is an alternative rollup. It uses an alternative network for data availability and consensus. It supports a variety of BTC-backed assets.";
})(DefinitionSnippet || (DefinitionSnippet = {}));

const fuel = {
    type: exports.Type.Layer,
    slug: "fuel",
    title: "Fuel",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://fuel.network/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.fuel.network/docs/intro/what-is-fuel/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://app.fuel.network/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/FuelLabs/",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/fuel_network",
        },
    ],
    description: "Fuel is an Ethereum rollup that supports a variety of wrapped bitcoin assets on its chain. ",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Fire FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.FireBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofs,
                },
                {
                    name: "Solv solvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofs,
                },
                {
                    name: "xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.xSolvBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofs,
                },
                {
                    name: "Pump BTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.PumpBTC} ${Reviewsnippet.smartcontractreview}`,
                },
                {
                    name: "Manta mBTC",
                    infrastructureSlug: "manta-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.MantamBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofs,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "EigenDA satisfies the network's data availability requirements",
            content: Reviewsnippet.AltRollupAltDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Users can propose their own transaction to be included in a sequencer, but cannot indepdendently submit withdrawal requests to the official bridge contract",
            content: `${Reviewsnippet.AltRollupSelfSequenceMain}`,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Fuel's state transitions finalize by updating its state based on data posted to EigenDA",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "This project has undergone a partial review",
                    content: AdditionalSnippet.InitialReview,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "The network has been reviewed by L2Beat",
                    content: KnowledgeBitSnippet.EthereumL2,
                },
            ],
        },
    ],
};

const gnosis = {
    type: exports.Type.Layer,
    slug: "gnosis",
    title: "Gnosis",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "GNO",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.gnosischain.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.gnosischain.com/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://gnosisscan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/gnosischain",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/gnosischain",
        },
    ],
    description: "Gnosis is an alternative blockchain that supports a number of wrapped BTC tokens. It is EVM-compatible and leverages the same network architecture as Ethereum.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\n${exports.TokenSnippet.smartcontractreview}`
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Gnosis chain is operated by a distributed validator set",
            content: exports.ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Finality guarantees are provided by the network's operator set",
            content: "Finality guarantees are provided through the network's operators. Users trust the network's operators to not reorg their transactions.",
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Low cost to stake and run a validator node",
                    content: "Running a validator node for Gnosis Chain requires a 1 GNO stake. The lost cost to run a validator (historically less than 1000 USD) enables more participants to join the network operator set.",
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Gnosis does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "GNO token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Gnosis does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-compatible",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const goat = {
    type: exports.Type.Layer,
    slug: "goat",
    title: "GOAT",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "GOAT",
    feeToken: "BTC",
    notice: exports.Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.goat.network/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.goat.network/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.goat.network/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/GOATNetwork",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/GOATRollup",
        },
    ],
    description: "The GOAT network is a sidechain protocol that supporting an EVM execution environment. The network runs on CometBFT consensus and has an official bridge program with bitcoin.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskFederationPeg,
        },
        {
            title: RiskSummarySnippet.TitleFederation,
            content: RiskSummarySnippet.RiskSummaryFederation,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Goat zBTC",
                    infrastructureSlug: "goat-zbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "The bitcoin backing this asset is secured by a federation of signers",
                    content: `${Reviewsnippet.GoatzBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "The network's validators are responsible for keeping a record of the network's state",
            content: Reviewsnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "The network is operated by a closed set of node operators",
            content: `${Reviewsnippet.OperatorFederated}`,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "After a transaction has been included in the chain, it cannot reorg",
            content: `${Reviewsnippet.CometBFTFinality}`
        },
    ],
    sections: []
};

const hemi = {
    type: exports.Type.Layer,
    slug: "hemi",
    title: "Hemi",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Integrated,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    notice: exports.Notice.UnderReview,
    links: [
        {
            text: exports.Site.Website,
            url: "https://hemi.xyz",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.hemi.xyz",
        },
        {
            text: exports.Site.Explorer,
            url: "https://testnet.explorer.hemi.xyz",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/hemilabs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/hemi_xyz",
        },
    ],
    description: "Hemi is a blockchain that is building compatibility with bitcoin and Ethereum. It is built on the OP Stack and has an official bridge program hosted on Ethereum. It additionally has an official bridge program on bitcoin securing BTC backing HemiBTC.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
        {
            title: RiskSummarySnippet.TitleBridgeUpgrade,
            content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
        },
        {
            title: RiskSummarySnippet.TitleNoProofs,
            content: RiskSummarySnippet.RiskSummaryNoProofs,
        },
    ],
    categorization: [
        {
            title: "The project anchors its state to bitcoin, but does not meet our criteria to be a sidesystem",
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Hemi hemiBTC",
                    infrastructureSlug: "hemi-hemibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "The signers securing BTC backing HemiBTC have not been officially disclosed",
                    content: exports.TokenSnippet.HemiBTC,
                    alert: Alertsnippet.BitcoinBridgeNoSigners,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\nBitGo wBTC is minted on Hemi through its official bridge program on Ethereum. This bridge program does not have a functional proof system. The bridge is also instantly upgadable by a 3/8 multisig.`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofsPlusUpgrade,
                },
                {
                    name: "Lorenzo enzoBTC",
                    infrastructureSlug: "lorenzo-enzobtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.enzoBTC} enzoBTC is minted directly on Hemi through a centralized admin.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "UniRouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.UniRouterBTC} UniRouter uBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC} Bedrock uniBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.babypie} Babypie mBTC is minted on Hemi via an implementation of LayerZero with an escrow contract on Ethereum. The implementation's admin is a 3/7 multisig.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.LorenzostBTC} Lorenzo stBTC is minted on Hemi through LayerZero's OFT token standard implementation.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.PumpBTC} Pump pumpBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Merlin MBTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.MerlinMBTC} Pump pumpBTC is minted on Hemi through a third-party provider, [Free Tech](https://app.free.tech/?token=M-BTC).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\nThreshold tBTC is minted on Hemi through its official bridge program on Ethereum. This bridge program does not have a functional proof system. The bridge is also instantly upgadable by a 3/8 multisig.`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofsPlusUpgrade,
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.ObeliskoBTC} enzoBTC is minted directly on Hemi through a centralized admin.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Bedrock brBTC",
                    infrastructureSlug: "bedrock-brbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockbrBTC} Bedrock brBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Kiki iBTC",
                    infrastructureSlug: "kiki-ibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${Reviewsnippet.KikiIBTC} Kiki iBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Hemi blocks are produced by a centralized sequencer",
            content: Reviewsnippet.AltRollupSelfSequenceNone,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Hemi state updates are finalized offchain. The network anchors its state to bitcoin",
            content: `${Reviewsnippet.AltRollupFinality}\n\nAfter this state is generated, nodes participating in Hemi's Proof-of-Proof consensus submit the latest state root to bitcoin.`,
            alert: AlertSnippet.ProofOfProofConsensus,
        },
    ],
    manualContracts: [
        {
            title: "Address securing BTC backing HemiBTC",
            address: "16NuSCxDVCAXbKs9GRbjbHXbwGXu3tnPSo",
            subtitle: "Specific address securing BTC backing HemiBTC. It is unknown if this address is managed by a single entity or multiple entities via a threshold signature scheme.",
            explorerUrl: "https://mempool.space/address/16NuSCxDVCAXbKs9GRbjbHXbwGXu3tnPSo"
        },
        {
            title: "Bridge contract escrowing wBTC & tBTC",
            address: "0x5eaa10F99e7e6D177eF9F74E519E319aa49f191e",
            subtitle: "This bridge contract does not have a functional proof system and can be upgraded by a 3/8 multisig.",
            explorerUrl: "https://etherscan.io/address/0x5eaa10F99e7e6D177eF9F74E519E319aa49f191e"
        },
        {
            title: "Bridge contract escrowing mBTC",
            address: "0xc4995816B5421b88f85b5AbfBe24fd218D56c676",
            subtitle: "This bridge contract can be upgraded by a 3/7 multisig.",
            explorerUrl: "https://etherscan.io/address/0xc4995816B5421b88f85b5AbfBe24fd218D56c676#code"
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "No public dashboards on PoP miners available",
                    content: "The project has not published mainnet dashboards related to active PoP miners. It is unknown how many miners are posting state roots to bitcoin.",
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Hemi checkpoints its state to bitcoin",
                    content: exports.BitcoinSecuritySnippet.Checkpoint,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Hemi does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Proof-of-Proof consensus",
                    content: "Hemi's Proof-of-Proof (PoP) consensus is a bitcoin anchoring mechanism. After Hemi full nodes compute a new state root, PoP nodes publish this state root to bitcoin. After this state root is published, a Bitcoin Finality Governor queries bitcoin, finds the appended state root, and considers Hemi's blocks final."
                },
                {
                    title: "The network is EVM-compatible",
                    content: `${exports.TechnologySnippet.EVM} The network's specific node implementation additionally executes a bitcoin light client.`,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${exports.KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

const hyperliquid = {
    type: exports.Type.Layer,
    slug: "hyperliquid",
    title: "Hyperliquid",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "HYPE",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://hyperfoundation.org/",
        },
        {
            text: exports.Site.Docs,
            url: "https://hyperliquid.gitbook.io/hyperliquid-docs",
        },
        {
            text: exports.Site.Explorer,
            url: "https://app.hyperliquid.xyz/explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/hyperliquid-dex",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/HyperliquidX",
        },
    ],
    description: "Hyperliquid is a purpose built layer 1 blockchain focused on high performance applications. It supports a BTC derivative asset where BTC backing the asset is secured by a federation of guardians.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Hyperliquid BTC",
                    infrastructureSlug: "unit-ubtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.FederationPeg,
                    content: exports.TokenSnippet.HyperliquidBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Data is stored and made available by an alternative consensus network",
            content: `${exports.ReviewSnippet.DAConsensusNetwork}\n\nWe are reviewing if node operation is permissionless.`,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Blocks are built by validators participating in a POS network",
            content: `${exports.ReviewSnippet.OperatorSidechainPOS}\n\nWe are reviewing the process for joining the validator set.`,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "This section is currently under review.",
            content: exports.ReviewSnippet.FinalityAltNetworkUnderReview
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Hyperliquid does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "HYPE token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Hyperliquid does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const template$8 = {
    type: exports.Type.Layer,
    slug: "ink",
    title: "Ink",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "manualcontracts", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://inkonchain.com/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.inkonchain.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/inkonchain",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/inkonchain",
        },
    ],
    description: "Ink is an Ethereum rollup operated by the Kraken exchange. It supports a variety of wrapped bitcoin assets on its chain including Kraken kBTC.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleSystemUpgrade,
            content: RiskSummarySnippet.RiskSummarySecurityCouncil,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Kraken kBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.KrakenKBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Ethereum satisifes the data availability requirement",
            content: Reviewsnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "In the event of censorship or liveness failures, users can propose their own exit",
            content: `${Reviewsnippet.AltRollupSelfSequenceMain}\n\n${Reviewsnippet.AltRollupSelfProposeMain}`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Ink's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    manualContracts: [
        {
            title: "Kraken kBTC Contract",
            address: "0x73E0C0d45E048D25Fc26Fa3159b0aA04BfA4Db98",
            subtitle: "Kraken kBTC bridge & token contract",
            explorerUrl: "https://explorer.inkonchain.com/address/0x73E0C0d45E048D25Fc26Fa3159b0aA04BfA4Db98"
        },
    ],
    sections: [
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "The network has been reviewed by L2Beat",
                    content: KnowledgeBitSnippet.EthereumL2,
                },
            ],
        },
    ],
};

const internetcomputer = {
    type: exports.Type.Layer,
    slug: "internetcomputer",
    title: "Internet Computer",
    entityType: exports.EntityType.Hybrid,
    entityCategory: exports.EntityCategory.Sidesystem,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.High,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 277,
    nativeToken: "ICP",
    feeToken: "ICP",
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://internetcomputer.org/bitcoin-integration",
        },
        {
            text: exports.Site.Docs,
            url: "https://internetcomputer.org/docs/current/references/bitcoin-how-it-works",
        },
        {
            text: exports.Site.Explorer,
            url: "https://dashboard.internetcomputer.org/bitcoin",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/dfinity/bitcoin-canisteri",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/dfinity",
        },
    ],
    description: "The Internet Computer Protocol (ICP) is a network of connected subnet blockchains. It has a smart contract module, known as the Bitcoin Canister, that enables ICP smart contracts to have a view into Bitcoin state and conduct Bitcoin transactions. It additionally has a bitcoin-backed synthetic, known as ckBTC, which sees signers of a threshold signature scheme custody BTC and mint and burn synthetic ckBTC tokens on ICP. Developers can deploy a variety of applications leveraging the Bitcoin canister and ckBTC.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}ICP's ckBTC custody mechanism is secured by signers participating in ICP's consensus protocol.`
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: `${exports.RiskSummarySnippet.RiskSummaryAlternativeL1}`
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "ICP ckBTC",
                    infrastructureSlug: "icp-ckbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "Funds are secured by a signer set selected by ICP consensus",
                    content: "Users who deposit funds into ckBTC trust a set of operators, who are elected via ICP governance, with the custody of their bitcoin. The operators of the ‘pzp6e…’ subnet manage the “ckBTC” smart contract module, which is responsible for minting, securing and burning bitcoin-backed tokens on the ICP sidechain.\n\nThis smart contract is a part of a subnet with 34 node operators. These operators have undergone a KYB process to ICP governance and are publicly known.",
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "DA requirement is fulfilled by an alternative consensus mechanism, but node operation is not permissionless",
            content: "Data regarding the state of the ‘pzp6e…’ is made available, and stored, by the 34 individual node operators running the subnet. Should nodes for this subnet go offline, and a backup of the state is not regularly made, then users would lose access to their ckBTC balance and would be unable to burn ckBTC tokens for Bitcoin locked in the respective multi-sig on the mainchain.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Numerous roles involved in block building and ckBTC transaction settlement",
            content: "Settlement for ckBTC transfers is a result of consensus for the ‘pzp6e…’ subnet operators. Once a transaction is finalized, it cannot be reorged. Users can leverage their ckBTC on any ICP subnet per the applications they interact with. Users would initiate a “call” to a specific application on any given subnet and a boundary node would route that call accordingly. The contract would then receive the call, initiate the transaction, and see the transaction confirmed should 2 ⁄ 3 of node operators on the given subnet accept it. This sees liveness trust assumptions vary from subnet to subnet. Bitcoin-specific applications would additionally be dependent on the Bitcoin Canister which is on the ‘w4rem…’ subnet, operated by 13 nodes. The 22 Boundary Nodes are managed by a centralized development organization, the DFINITY Foundation.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Finality assurances are provided by an alternative consensus mechanism",
            content: "After transactions are accepted into a block by a subnet's validator set, they cannot be reversed.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "ICP does not inherit security from bitcoin consensus",
                    content: "ICP has no relationship with bitcoin consensus participants.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin.",
                    content: "ICP’s Bitcoin module is a separate consensus network and has no direct relationship with Bitcoin, and thus does not introduce MEV at the base layer.",
                },
                {
                    title: "An alternative token plays a role in network security",
                    content: "ICP’s network security depends on a governance model that leverages the ICP token for voting. Validators are incentivized with newly issued ICP tokens to run validators. Users do not pay any fees for transactions on ICP subnets.",
                },
                {
                    title: "ICP does not directly contribute to the security budget",
                    content: "ICP does not currently pay fees to Bitcoin miners.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Withdrawals are permitted by a specific ICP subnet",
                    content: "Withdrawals are ultimately processed by the operators of the ‘pzp6e’ subnet which manages the ckBTC smart contract. Users trust that at least 12 of the 34 signers will remain honest, not steal their funds, and process their withdrawals. If the Bitcoin Canister were to go offline, the ckBTC smart contract would be unable to issue withdrawals for users looking to burn ckBTC and redeem native bitcoin. Withdrawals would be paused until the Bitcoin Canister's subnet came back online.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Bitcoin Canister & Adapter",
                    content: "The ICP network maintains an integration with Bitcoin. The ICP network has a subnet dedicated to the Bitcoin Canister and Adapter. The Bitcoin Canister enables subnets on the ICP blockchain to interact with the bitcoin network. They can have Bitcoin addresses, sign transactions and submit transactions to the bitcoin network. The Bitcoin Adapter enables the Bitcoin Canister to access Bitcoin state by querying a randomly selected set of Bitcoin nodes periodically.",
                },
                {
                    title: "Various programming languages and modules supported",
                    content: "The ICP network supports a variety of programming languages and modules. Due to the multi-subnet architecture of ICP, there is no enshrined programming language. Developers can build on top of the subnet that best supports their individual use case. The two primary languages used for developing in ICP are Rust and Mokoto. ICP modules can also support more expressive smart contracts than the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Ordinals, Runes, & BRC-20 trading",
                    content: "Through the Bitcoin Canister and Bitcoin Adapter, ICP can support the creation of Runes, BRC-20 and Ordinals marketplaces. Application developers can deploy on ICP for improved performance of their applications.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code related to bitcoin modules are open source",
                    content: "Modules relevant to ICP’s integration with Bitcoin are open source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[ICP Developer Docs](https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp)\n[Overview on ckBTC](https://wiki.internetcomputer.org/wiki/Chain-key_Bitcoin)",
                },
            ],
        },
    ],
};

const template$7 = {
    type: exports.Type.Layer,
    slug: "iotex",
    title: "Iotex",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const template$6 = {
    type: exports.Type.Layer,
    slug: "kava",
    title: "Kava",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const lightning = {
    type: exports.Type.Layer,
    slug: "lightning",
    title: "Lightning Network",
    entityType: exports.EntityType.StateChannel,
    entityCategory: exports.EntityCategory.BitcoinNative,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.Low,
        exports.RiskFactor.Low,
        exports.RiskFactor.Low,
        exports.RiskFactor.Low,
    ],
    btcLocked: 5208,
    nativeToken: "BTC",
    feeToken: "BTC",
    notice: undefined,
    custodyTitle: exports.CustodyTitle.BitcoinNative,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://lightning.network",
        },
        {
            text: exports.Site.Docs,
            url: "https://lightning.network/docs",
        },
    ],
    description: "The Lightning Network (often called Lightning) is a payment-channel-based Layer 2 protocol built on bitcoin. It enables users to open a payment channel with a counterparty and make an unlimited number of offchain payments within the channel. By routing payments across a network of interconnected nodes, users can reach recipients outside their specific channel.",
    riskSummary: [
        {
            title: "Users must watch for malicious channel closures",
            content: exports.RiskSummarySnippet.RiskLightningChannel,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Lightning BTC",
                    infrastructureSlug: "lightning-btc",
                    score: 0,
                    tier: exports.RiskFactor.Low,
                    title: "Funds are secured in a 2-2 multisig with unilateral exit support for each counterparty",
                    content: "When users open a payment channel, funds are deposited onchain into a 2-of-2 multisig address shared between the respective channel counterparties. \n\nUsers can collaboratively close a channel by signing and broadcasting a closing transaction which distributes the funds on bitcoin L1 based on the latest channel state. \n\nIf a counterparty is unresponsive during a cooperative channel closure attempt, a user can unilaterally enforce the process by broadcasting the most recent commitment transaction representing the latest balance distribution. There is a challenge-response mechanism to settle potential disputes between channel counterparties over the final state of a channel closure transaction.",
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Low,
            title: "Channel state data is self-hosted by users",
            content: "Lightning Network users are solely responsible for preserving their channel state data, as the network does not provide data redundancy. Failure to maintain this data could result in a complete loss of funds stored in the channel.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Low,
            title: "Network operators run nodes to route Lightning payments, with node operation being permissionless. Single-node failures do not compromise payment reliability",
            content: "Users in the Lightning Network interact directly with their channel counterparties, bypassing the need for block builders or sequencers. Payments to other recipients are routed through a decentralized network of nodes.\n\nIf a route fails due to a node operator being offline, users can route via an alternative channel.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Low,
            title: "Lightning transactions are atomic and settle instantly. Finality occurs with channel closure",
            content: "Transactions on the Lightning Network use HTLCs to ensure atomicity, meaning they either succeed completely or fail entirely. Once settled, they are irreversible. Finality on Bitcoin occurs only when a channel is closed, at which point the agreed-upon state is validated and enforced by Bitcoin consensus, allowing for fund withdrawal.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Settlement is finalized by Bitcoin consensus",
                    content: "Settlement is optimistically finalized through bitcoin consensus.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content: "Lightning does not enable malicious MEV on Bitcoin because all transactions occur off-chain, leaving miners unable to influence transaction ordering.",
                },
                {
                    title: "No alternative token needed for network security",
                    content: "Lightning does not use another token for network security.",
                },
                {
                    title: "Opening and closing channels contributes to the security budget",
                    content: "Lightning does not directly contribute to bitcoin’s security budget, but users do pay onchain transaction fees to miners when opening and closing LN channels.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users can unilaterally withdraw their funds with optimistic settlement guarantees",
                    content: "Collaborative closure: Users can close a channel collaboratively by agreeing on the final state of the channel and withdraw funds directly to their respective onchain addresses.\n\nUnilateral closure: A malicious user may attempt to steal channel funds by broadcasting an outdated channel state. If the counterparty (or their watchtower) is online, they can broadcast a penalty transaction onchain using the revocation secret to counteract the fraud attempt, reclaims the full channel balance, and penalizes the malicious actor.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Payment channels",
                    content: "Payment channels are 2-2 multisig addresses on bitcoin L1 that allow two counterparties to lock funds and process an unlimited number of offchain payments between each other. Payments achieve finality only when a channel is closed and funds are settled onchain. Opening and managing one or more payment channels is how a user interacts with the Lightning Network.",
                },
                {
                    title: "Payment routing",
                    content: "The Lightning Network consists of interconnected two-party payment channels. Users can route payments across intermediary nodes to reach the intended recipient. Routing is enforced by HTLCs, ensuring payment atomicity and security.",
                },
                {
                    title: "Hashed Timelock Contracts (HTLCs)",
                    content: "Hashed Timelock Contracts (HTLCs) are smart contracts that enable atomic and conditional payments on the Lightning Network. They lock funds using two conditions: a cryptographic hash and a time limit. To unlock the funds, the recipient must provide the secret preimage matching the hash; otherwise, funds are returned automatically to the sender after the time limit expires. HTLCs facilitate secure payment routing across multiple nodes, ensuring funds cannot be misappropriated by intermediaries. The preimage, created by the recipient when generating an invoice, ensures that only they can complete the payment.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Micro-transactions",
                    content: "Once channels are established, payments occur offchain without requiring paying fees for bitcoin miners, enabling low-cost transactions. This makes Lightning well-suited for small, high frequency transactions.",
                },
                {
                    title: "Faster transactions",
                    content: "With near-instant confirmations enabled through offchain processing and p2p consensus, Lightning is optimized for rapid payments.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "UX friction leading users to centralized solutions",
                    content: "Non-technical users can find it challenging to self-host a Lightning node, often driving them towards custodial solutions. This trend contributes to liquidity and network centralization, as users rely on intermediaries instead of interacting directly. A 2024 report from River found that 80% of Lightning Network liquidity resides in channels managed by centralized service providers.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "There are multiple free and open-source implementations of the Lightning Network protocol.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Lightning Network paper](https://lightning.network/lightning-network-paper.pdf)\n[Lightning Network user guide](https://bitcoiner.guide/lightning/)",
                },
            ],
        },
    ],
};

const template$5 = {
    type: exports.Type.Layer,
    slug: "linea",
    title: "Linea",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "manualcontracts", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://linea.build/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.linea.build/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://lineascan.build/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/Consensys?q=linea&type=all&language=&sort=stargazers",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/LineaBuild",
        },
    ],
    description: "Linea is an Ethereum rollup developed at Consensys. It supports a variety of wrapped bitcoin assets on its chain including BitGo wBTC, SolvBTC, and Merlin M-BTC.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleSystemUpgrade,
            content: RiskSummarySnippet.RiskSummarySecurityCouncil,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.BitGowBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenProofsUpgrade,
                },
                {
                    name: "SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "SolvBTC-M",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTCdotSolv} This derivative of Solv is bridged to Linea from Merlin.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "SolvBTCb",
                    infrastructureSlug: "solv-solvbtcb",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvsolvbtcB}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Merlin M-BTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.MerlinMBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "xLink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.KrakenKBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Ethereum satisifes the data availability requirement",
            content: Reviewsnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "In the event of censorship or liveness failures, users cannot exit the system",
            content: `${Reviewsnippet.AltRollupSelfSequenceNone}\n\n${Reviewsnippet.AltRollupSelfProposeNone}`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Linea's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    manualContracts: [
        {
            title: "Linea Escrow Contract",
            address: "0x051F1D88f0aF5763fB888eC4378b4D8B29ea3319",
            subtitle: "This escrow contract secures wBTC on Ethereum backing wBTC on Lina.",
            explorerUrl: "https://etherscan.io/address/0x051F1D88f0aF5763fB888eC4378b4D8B29ea3319"
        },
    ],
    sections: [
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "The network has been reviewed by L2Beat",
                    content: KnowledgeBitSnippet.EthereumL2,
                },
            ],
        },
    ],
};

const liquid = {
    type: exports.Type.Layer,
    slug: "liquid",
    title: "Liquid",
    entityType: exports.EntityType.Federation,
    entityCategory: exports.EntityCategory.Sidesystem,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 3834,
    nativeToken: "LBTC",
    feeToken: "LBTC",
    notice: exports.Notice.UnderReview,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://liquid.net",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.liquid.net/docs/technical-overview",
        },
        {
            text: exports.Site.Explorer,
            url: "https://blockstream.info/liquid",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/ElementsProject/elements",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/bitcoinlayers",
        },
    ],
    description: "The Liquid Network is a sidechain that enables users to perform confidential transactions, swaps, issue tokenized assets, and more, on the sidechain. It is managed by a permissioned federation, and does not use the Bitcoin Layer 1 for security. It uses a federated multi-sig to custody the BTC that is used to issue BTC IOUs (L-BTC) on the sidechain.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleFederation,
            content: exports.RiskSummarySnippet.RiskSummaryFederation,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Liquid L-BTC",
                    infrastructureSlug: "liquid-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users trust a federation with custody of their BTC. The members of the federation have not been disclosed.",
                    content: exports.TokenSnippet.LiquidLBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Data is stored and made available by Liquid full nodes. Full nodes must connect to the network via permissioned entities",
            content: `${exports.ReviewSnippet.DAConsensusNetwork}\n\nLiquid full nodes must connect to bridge nodes to be able to participate in the network. [Bridge nodes](https://docs.liquid.net/docs/technical-overview#general-public) are run by Liquid federation members`,
            alert: Alertsnippet.UnderReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Blocks are produced by Liquid functionaries. The identities of the functionary set has not been revealed.",
            content: exports.ReviewSnippet.OperatorFederated,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Liquid blocks are finalized via Liquid full nodes. Full nodes must connect to the network via permissioned entities",
            content: `${exports.ReviewSnippet.AltL1FinalityFederatedFullNode}\n\nLiquid full nodes must connect to bridge nodes to be able to participate in the network. [Bridge nodes](https://docs.liquid.net/docs/technical-overview#general-public) are run by Liquid federation members.`,
            alert: Alertsnippet.UnderReview,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Liquid does not inherit any security from Bitcoin consensus participants",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "No other token required",
                    content: exports.BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced on Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Does not directly contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust permissioned operators to process their withdrawals",
                    content: "Withdrawals are permitted by the Liquid Federation. There is no way for users to withdraw their funds if the federation censors them. Users can also use a secondary marketplace to swap BTC for LBTC, but also must trust the federation to include, propose and validate their swap transaction within a Liquid block.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Elements",
                    content: exports.TechnologySnippet.Elements,
                },
                {
                    title: "Confidential Transactions",
                    content: exports.TechnologySnippet.ConfidentialTransactions,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Tokenized assets",
                    content: exports.UseCaseSnippet.TokenizedAssets,
                },
                {
                    title: "Testing ground for new opcodes",
                    content: exports.UseCaseSnippet.TestingGround,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "All code related to the Liquid Network project is open source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Liquid website](https://liquid.net/)\n[Article explaining how L-BTC works](https://help.blockstream.com/hc/en-us/articles/900001408623-How-does-Liquid-Bitcoin-L-BTC-work)\n[Liquid documentation](https://docs.liquid.net/docs/technical-overview)\n[Article covering the nuance around Liquid's security model](https://blog.liquid.net/the-truth-about-liquid/)",
                },
            ],
        },
    ],
};

const template$4 = {
    type: exports.Type.Layer,
    slug: "manta",
    title: "Manta",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const template$3 = {
    type: exports.Type.Layer,
    slug: "mantle",
    title: "Mantle",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const mercurylayer = {
    type: exports.Type.Layer,
    slug: "mercurylayer",
    title: "Mercury Layer",
    entityType: exports.EntityType.Statechain,
    entityCategory: exports.EntityCategory.BitcoinNative,
    custodyTitle: exports.CustodyTitle.BitcoinNative,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.Low,
        exports.RiskFactor.Low,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
    ],
    btcLocked: NaN,
    nativeToken: "BTC",
    feeToken: "BTC",
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://mercurylayer.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.mercurylayer.com",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/commerceblock/mercurylayer",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/mercurylayer",
        },
    ],
    description: "Mercury Layer is an implementation of the statechain protocol. Statechains enable the offchain transfer of UTXO ownership by transferring key shares from one entity to the next with support of a trusted third party, the statechain entity. A statecoin owner can unilaterally exit back to Bitcoin’s L1 network, given the statechain entity doesn’t collude with a previous statecoin owner. Mercury Layer utilizes an HSM server that leverages blind co-signing and key share updates. The system relies entirely on client-side software to manage the statechain transfer history and handle transaction validation.",
    riskSummary: [
        {
            title: "Users trust the statechain entity with key deletion",
            content: exports.RiskSummarySnippet.RiskStatechainFinality,
        },
        {
            title: "Users must watch for previous owners' unilateral exit transactions",
            content: exports.RiskSummarySnippet.RiskStatechainTimelock,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Mercury BTC",
                    infrastructureSlug: "mercury-btc",
                    score: 0,
                    tier: exports.RiskFactor.Low,
                    title: "A locked UTXO is collaboratively managed between a trusted server and the statecoin owner, with full L1 UTXO ownership enforceable after a timelock expiry",
                    content: exports.TokenSnippet.MercuryLayerBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Low,
            title: "Transaction verification and data transmission happens via a client-side validation model",
            content: exports.ReviewSnippet.StatechainDABlindedServer,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "The network operator is a single server",
            content: exports.ReviewSnippet.OperatorStatechainBlindedServerSingleServer,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "There is no way to prove key deletion from the statechain entity",
            content: exports.ReviewSnippet.FinalityStatechainSingleOperator,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Bitcoin finalizes statechain initiation and closures",
                    content: exports.BitcoinSecuritySnippet.BitcoinSecurityOffchainUTXO,
                },
                {
                    title: "The protocol does not enable MEV on bitcoin. Transaction verification happens via a client-side validation mechanism",
                    content: exports.BitcoinSecuritySnippet.OffchainUTXOMEV,
                },
                {
                    title: "No alternative token is being introduced",
                    content: exports.BitcoinSecuritySnippet.OffchainUTXONoToken,
                },
                {
                    title: "Mercury Layer does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.StatechainSecurityBudget,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional considerations",
            content: [
                {
                    title: "Statechains only allow for fixed-value transfers",
                    content: "Mercury Layer facilitates the offline transfer of UTXO ownership through the transfer of private key shares. Ownership transfer and not involving Bitcoin L1 interaction implies that UTXOs cannot be split and must always be transferred as a whole.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users can unilaterally exit given the statechain entity doesn’t collude with a previous statecoin owner",
                    content: "Mercury Layer permits unilateral exits. To reclaim full UTXO ownership on bitcoin L1, the current owner can close the statechain by creating an onchain transaction that spends the UTXO. In an orderly closure, the statechain operator co-signs this transaction with its key share. In an uncooperative scenario, the statecoin owner can use their backup transaction to reclaim the UTXO onchain after a timelock expiry.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Blind signing server",
                    content: "Mercury Layer employs a blind signing server that has two functions. One, it can create partial blind signatures to co-sign statechain transfers together with the user using a [variant of MuSig2](https://github.com/commerceblock/mercurylayer/blob/dev/docs/blind_musig.md). Second, the Mercury Layer server can update the key shares needed for co-signing.\n\nThe operator uses an HSM for key handling and key deletion after cosigning each new holder's withdrawal transaction.",
                },
                {
                    title: "Adding a decrementing timelock to the backup transaction",
                    content: "In the absence of covenants, which could invalidate old transactions, Mercury Layer employs [nLocktime](https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki) with decrementing timelocks to ensure users can reclaim their bitcoin L1 funds in case of server failure or attempted misbehavior of previous owners. Each time a statechain is transferred to a new owner, the timelock on the backup transaction is reduced. By progressively decreasing the timelock, Mercury Layer enables the current owner to claim the L1 funds before a previous owner can do so by publishing an old backup transaction.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Enhanced privacy with blind statechains",
                    content: "The blinding feature of MuSig2 prevents the statechain entity from learning about transaction details, such as the TxID, the full shared public key, the final signature it co-generates, or any information about statechain closure transactions.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "Mercury Layer code is [open-source available](https://github.com/commerceblock/mercurylayer) under the terms of the GNU General Public License.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Statechains are L2s, by the Bitcoin Layers team](https://x.com/BitcoinLayers/status/1925586374473724392) \n [Statechains Whitepaper, by Ruben Somsen](https://github.com/RubenSomsen/rubensomsen.github.io/blob/master/img/statechains.pdf) \n [Statechains: Non-custodial Off-chain Bitcoin Transfer, by Ruben Somsen](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39#:~:text=Statechains%20are%20a%20layer%20two,with%20scaling%20and%20save%20fees.) \n Mercury Layer's Lightning Latch Swap Protocol by Shinobi ([BM, Mar 2024](https://bitcoinmagazine.com/technical/mercury-layers-lightning-latch-swap-protocol)) \n Nicholas Gregory on Mercury Layer, Lightning Network, and More | Bitfinex Talk ([Youtube, May 2024](https://www.youtube.com/watch?v=nwWmLmxfOtc))",
                },
            ],
        },
    ],
};

const merlin = {
    type: exports.Type.Layer,
    slug: "merlin",
    title: "Merlin",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
    ],
    btcLocked: 9303,
    nativeToken: "MERL",
    feeToken: "WBTC",
    bitcoinOnly: false,
    notice: exports.Notice.OtherReasonBridge,
    links: [
        {
            text: exports.Site.Website,
            url: "https://merlinchain.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.merlinchain.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://scan.merlinchain.io",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/MerlinLayer2",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/MerlinLayer2",
        },
    ],
    description: "Merlin is an implementation of Polygon CDK chain. It likely is running its rollup chain on top of a permissioned fork of the EVM.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDACommittee,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Merlin MBTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "Users deposit funds into a MPC wallet managed by a custodian",
                    content: exports.TokenSnippet.MerlinMBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BedrockUniBTC,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.LorenzostBTC,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "MBTC on Merlin backs SolvBTC on Merlin",
                    content: exports.TokenSnippet.SolvBTC,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.UnderReview,
                    content: exports.TokenSnippet.SolvBTCENA,
                },
                {
                    name: "Merlin wBTC",
                    infrastructureSlug: "merlin-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.MerlinwBTC}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.xlink}${exports.TokenSnippet.smartcontractreview}.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "State data is stored and made available by a permissioned network. The identities of its members are under review",
            content: exports.ReviewSnippet.DAFederation,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Blocks are produced by a centralized sequencer and forced inclusion mechanism is unverified",
            content: "Merlin chain blocks are currently produced by a centralized sequencer. It posts state updates to its parent chain which is a private network. We cannot review its trust assumptions.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Transaction finalization occurs offchain through sequencer batches posted to a permissioned network",
            content: "Merlin's parent chain is a private network. We cannot verify smart contracts related to Merlin.",
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Merlin currently inherits no security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "MERL token is live, but not currently used to pay transaction fees",
                    content: exports.BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin, but a centralized sequencer can reorder transactions",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Merlin does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Merlin's L1 contracts cannot be verified",
                    content: "Merlin Chain contracts are all currently upgradeable by an admin. The contracts it has listed on its CDKValidium can not be verified on its respective L1 blockchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-compatible",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Merlin Chain website](https://merlinchain.io/)\n[Merlin documentation](https://docs.merlinchain.io/merlin-docs/resources/merlin-contracts)\n[Merlin Chain's Github](https://github.com/MerlinLayer2/)",
                },
            ],
        },
    ],
};

const mezo = {
    type: exports.Type.Layer,
    slug: "mezo",
    title: "Mezo",
    entityType: exports.EntityType.Federation,
    entityCategory: exports.EntityCategory.Sidesystem,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
        exports.RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "tBTC",
    feeToken: "tBTC",
    notice: exports.Notice.UnderReview,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://mezo.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://mezo.org/docs/users/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.mezo.org",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/mezonetwork",
        },
    ],
    description: "Mezo is an EVM-compatible blockchain that supports general purpose onchain applications. It runs on CometBFT consensus protocol and is operated by a federated validator set. Its official bridge is supports bridging tBTC from Ethereum to Mezo.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}The majority of Mezo's BTC-backed assets are secured by a bridge contract on Ethereum. This bridge contract can be upgraded by a 5/9 federation.`
        },
        {
            title: exports.RiskSummarySnippet.TitleFederation,
            content: exports.RiskSummarySnippet.RiskSummaryFederation,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\nThis token is bridge to Mezo through an escrow contract on Ethereum. The bridge is upgradable by a 9 member federation. 5 signers are needed to initiate upgrades. The identity of these signers is unknown.`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvBTC}\n\nThis token is bridge to Mezo through an escrow contract on Ethereum. The bridge is upgradable by a 9 member federation. 5 signers are needed to initiate upgrades. The identity of these signers is unknown.`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${exports.TokenSnippet.xSolvBTC}\n\nThis token is bridge to Mezo through an escrow contract on Ethereum. The bridge is upgradable by a 9 member federation. 5 signers are needed to initiate upgrades. The identity of these signers is unknown.`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\nThis token is bridge to Mezo through an escrow contract on Ethereum. The bridge is upgradable by a 9 member federation. 5 signers are needed to initiate upgrades. The identity of these signers is unknown.`,
                },
                {
                    name: "Coinbase cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.CoinbasecbBTC}\n\nThis token is bridge to Mezo through an escrow contract on Ethereum. The bridge is upgradable by a 9 member federation. 5 signers are needed to initiate upgrades. The identity of these signers is unknown.`,
                },
                {
                    name: "Fire Bitcoin FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.FireBTC}\n\nThis token is bridge to Mezo through an escrow contract on Ethereum. The bridge is upgradable by a 9 member federation. 5 signers are needed to initiate upgrades. The identity of these signers is unknown.`,
                },
                {
                    name: "Swell swBTC",
                    infrastructureSlug: "swell-swbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${Reviewsnippet.SwellswBTC}\n\nThis token is bridge to Mezo through an escrow contract on Ethereum. The bridge is upgradable by a 9 member federation. 5 signers are needed to initiate upgrades. The identity of these signers is unknown.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Data related to the Mezo network is made available by its validator set",
            content: exports.ReviewSnippet.DAFederation,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "The Mezo network is operated by a federated validator set",
            content: exports.ReviewSnippet.OperatorFederated,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Finality guarantees are provided through a federation. Mezo blocks cannot be reorged after being added to the chain",
            content: `${exports.ReviewSnippet.CometBFTFinality}\n\nThe Mezo network is currently operated by a federated validator set. Finality assurances are provided by this federated group of operators.`,
        },
    ],
    manualContracts: [
        {
            title: "Mezo Bridge Escrow Contract",
            address: "0xF6680EA3b480cA2b72D96ea13cCAF2cFd8e6908c",
            subtitle: "Main bridge contract that escrows wrapped BTC assets on Ethereum to back corresponding assets on Mezo.",
            explorerUrl: "https://etherscan.io/address/0xF6680EA3b480cA2b72D96ea13cCAF2cFd8e6908c"
        },
        {
            title: "Governance Multisig",
            address: "0x98D8899c3030741925BE630C710A98B57F397C7a",
            subtitle: "5-of-9 multisig responsible for upgrades to the bridge escrow contract.",
            explorerUrl: "https://etherscan.io/address/0x98D8899c3030741925BE630C710A98B57F397C7a"
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Mezo does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "A wrapped BTC token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Mezo does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-Compatible",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Threshold Network's tBTC review",
                    content: "Bitcoin Layers' review of [Threshold Network's tBTC](https://bitcoinlayers.org/layers/threshold-tbtc)",
                },
                {
                    title: "Proxy Upgrade Pattern",
                    content: "Learn how smart contracts on [Ethereum are upgraded](https://docs.openzeppelin.com/upgrades-plugins/proxies)",
                },
            ],
        },
    ],
};

const template$2 = {
    type: exports.Type.Layer,
    slug: "Mode",
    title: "Mode",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "manualcontracts", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Mode is an Ethereum rollup that supports a number of wrapped BTC tokens.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Ethereum satisifes the data availability requirement",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Users cannot propose their own blocks in event of liveness failures",
            content: `${exports.ReviewSnippet.FinalityAltRollupCentralizedProposer}`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Mode's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "This project has undergone a partial review",
                    content: `${AdditionalSnippet.InitialReview}`,
                },
            ],
        },
    ],
};

const template$1 = {
    type: exports.Type.Layer,
    slug: "movement",
    title: "Movement",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const nomic = {
    type: exports.Type.Layer,
    slug: "nomic",
    title: "Nomic",
    entityType: exports.EntityType.PoSNetwork,
    entityCategory: exports.EntityCategory.Sidesystem,
    custodyTitle: exports.CustodyTitle.Distributed,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: NaN,
    nativeToken: "NOM",
    feeToken: "NOM",
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.nomic.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.nomic.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://bigdipper.live/nomic",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/nomic-io",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/nomicbtc",
        },
    ],
    description: "Nomic is a proof-of-stake blockchain focused on distributed BTC custody. Nomic validators collectively control a bitcoin wallet known as the Reserve Wallet, which users can deposit BTC to in order to receive nBTC, an asset issued on the Nomic blockchain that is backed 1:1 by the BTC deposits held in the Reserve Wallet.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskPOSPeg}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Nomic nBTC",
                    infrastructureSlug: "nomic-nbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "BTC backing nBTC is managed by a group of 20 publicly known signers who participate as validators in the Nomic blockchain",
                    content: exports.TokenSnippet.NomicNBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is made available via Nomic full nodes",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Network is operated by validators in a proof-of-stake consensus protocol",
            content: exports.ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Finality is provided through an offchain consensus mechnaism",
            content: exports.ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Nomic does not inherit security from bitcoin consensus participants",
                    content: exports.BitcoinSecuritySnippet.CheckpointCometBFT,
                },
                {
                    title: "NOM token is used for network security",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Nomic pays fees for checkpoint transactions",
                    content: exports.BitcoinSecuritySnippet.FeesPOSCheckpoint,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users need cooperation from 67% of the voting power on the Reserve Wallet to withdraw",
                    content: "The Nomic BTC bridge is a proof of stake bridge. Users need cooperation from over 67% of the voting power on the Reserve Wallet to withdraw BTC from the bridge.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "The NOM token has restrictions",
                    content: "Nomic’s native token, NOM, is currently unable to be sold or acquired in various markets. This means that the token currently has no market value and validators currently have no current financial incentive to secure BTC backing nBTC.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Reserve Wallet",
                    content: "nBTC is backed by BTC held in a bitcoin wallet referred to as the Reserve Wallet. The Reserve Wallet is a P2WSH that is managed by the top 20 validators during a given period of time.",
                },
                {
                    title: "IBC-enabled transfers",
                    content: exports.TechnologySnippet.IBC,
                },
                {
                    title: "Orga & Merk",
                    content: exports.TechnologySnippet.OrgaMerk,
                },
                {
                    title: "Checkpointing mechanism",
                    content: "The Nomic checkpointing mechanism manages Bitcoin reserves by consolidating deposits and disbursing pending withdrawals into periodic Bitcoin transactions. Each checkpoint updates the reserve script to reflect the latest signatory set, a group of validators dynamically chosen from the network. These transactions are collaboratively signed using a threshold multisignature scheme. Checkpoints also provide a way for light clients to verify the state of the Nomic chain and invalidate prior emergency disbursal mechanisms.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Connection to IBC-enabled blockchains",
                    content: exports.UseCaseSnippet.IBCTransfers,
                },
                {
                    title: "Offchain nBTC transfers",
                    content: exports.UseCaseSnippet.OffchainTransfers,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "Nomic's node implementation is open-souce.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Proof-of-Stake Bitcoin Sidechains](https://gist.github.com/mappum/da11e37f4e90891642a52621594d03f6)\n\n[CometBFT Consensus](https://docs.cometbft.com/main/spec/consensus/consensus).",
                },
            ],
        },
    ],
};

const optimism = {
    type: exports.Type.Layer,
    slug: "optimism",
    title: "Optimism",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://optimism.io/",
        },
        {
            text: exports.Site.Docs,
            url: "https://www.docs.optimism.io/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://optimistic.etherscan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/optimism",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/optimism",
        },
    ],
    description: "Optimism is an Ethereum rollup that that supports a variety of wrapped BTC tokens.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleBridgeUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "Users trust the Threshold Network to keep tBTC backed and a 9 member federation to manage tBTC's bridge between Base and Ethereum",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by a 6/9 federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.`
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "wBTC is managed by a centralized consortium of companies. We are analyzing if wBTC is natively minted on Optimism or if is bridged from Ethereum",
                    content: `${exports.TokenSnippet.BitGowBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Kraken kBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.KrakenKBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Avalanche BTC.b",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.AvalancheBTCb}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtcnetwork-ibtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.VariousCustodianPeg,
                    content: `${exports.TokenSnippet.iBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`
                },
                {
                    name: "Synths sBTC",
                    infrastructureSlug: "synths-sbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.UnderReview}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Optimism blocks are produced and proposed by a centralized operator, but users can propose their own state updates in the event of censorship or liveness failures",
            content: exports.ReviewSnippet.SelfProposeMainAlt,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Optimism state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

const osmosis = {
    type: exports.Type.Layer,
    slug: "osmosis",
    title: "Osmosis",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "OSMO",
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://osmosis.zone/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.osmosis.zone/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://www.mintscan.io/osmosis",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/osmosis-labs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/osmosiszone",
        },
    ],
    description: "Osmosis is a proof-of-stake blockchain that supports a number of wrapped BTC tokens. It is IBC-compatible and a part of the Cosmos ecosystem.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Osmosis BTC",
                    infrastructureSlug: "osmosis-btc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "BTC on Osmosis is backed by several reserve assets",
                    content: exports.TokenSnippet.OsmosisBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Osmosis' full node set satisfies the data availability requirement",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Osmosis is operated by a distributed validator set",
            content: exports.ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Osmosis' finality guarantees are provided by its validator set",
            content: exports.ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Osmosis does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "OSMO token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Osmosis does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to relevant technologies and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

const polygon = {
    type: exports.Type.Layer,
    slug: "polygonpos",
    title: "Polygon PoS",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "POL",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://polygon.technology/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.polygon.technology/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://polygonscan.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/0xpolygon",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/0xPolygon",
        },
    ],
    description: "Polygon is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Avalanche BTCb-Polygon",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.AvalancheBTCb}\n\n${exports.TokenSnippet.smartcontractreview},`
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is stored and made available by Polygon full nodes",
            content: "The data for Polygon's state is made available by its full nodes. Anyone can run an Polygon node and verify is state.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Polygon is operated by a distributed validator set",
            content: "Blocks are built and proposed by a distributed consensus network. Block producers in Polygon PoS are committee based and selected by its validator set.\n\nThe set of block producers is rotated periodically.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "We are currently reviewing Polygon's finality guarantees",
            content: "Blocks are validated and finalized by a distributed consensus network. Block producers in Polygon PoS are elected to exclusively construct blocks for a specific duration of time.\n\nAfter blocks are constructed, they are validated by the block producer committee.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Polygon PoS does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "POL token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Polygon PoS does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

const polygonzkevm = {
    type: exports.Type.Layer,
    slug: "polygonzkevm",
    title: "Polygon zkEVM",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "POL",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://polygon.technology/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.polygon.technology/zkEVM/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://zkevm.polygonscan.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/0xpolygonhermez",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/0xPolygon",
        },
    ],
    description: "Polygon zkEVM is a rollup that posts data to Ethereum.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "A distributed consensus network satisfies the data availability requirement",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "The network is operated by a centralized block producer",
            content: exports.ReviewSnippet.SelfSequenceNone,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Polygon zkEVM state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Polygon zkEVM does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Polygon zkEVM does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${exports.KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

const rollux = {
    type: exports.Type.Layer,
    slug: "rollux",
    title: "Rollux",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Integrated,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.High,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 10,
    nativeToken: "SYS",
    feeToken: "SYS",
    notice: exports.Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://rollux.com",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.rollux.com/docs/developers",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.rollux.com",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/SYS-Labs/rollux",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/RolluxL2",
        },
    ],
    description: "Rollux is an optimistic rollup that uses Syscoin, two blockchains that are simultaneously merge-mined by bitcoin miners, as its base layer for data availability and state validation respectively. It has an EVM-compatible execution environment.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo WBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "wBTC on Rollux has a number of trust assumptions",
                    content: `${exports.TokenSnippet.BitGowBTC}\n\nRollux’s L1 bridge contract, which facilitates the transfer of wBTC from Syscoin to Rollux, is immediately upgradeable by a multi-sig wallet with anonymous signers. The Rollux L1 contract lives on the Syscoin NEVM chain.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "The Syscoin blockchain satisfies Rollux's data availability requirement",
            content: "The Rollux chain posts transaction data to Syscoin’s UTXO chain’s data availability solution, [PoDA](https://docs.syscoin.org/docs/tech/poda/). The Syscoin L1 is a merge-mined chain with Bitcoin.\n\nData availability is satisfied by blobs, meaning that Syscoin nodes only store data related to Rollux for at least six hours after finality is reached. After this period, it is deleted. PoDA does not shard data and requires full nodes to store the entire contents of a blob for a given time period. At least one archive node needs to archive the full contents of the blob to ensure Rollux’s historical state is intact.\n\nAfter receiving a blob from Rollux, the UTXO chain attests to the availability of data to the NEVM chain.\n\nOnly one non-pruned online node is needed to reconstruct the entire state of Syscoin and Rollux.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Rollux is operated by a centralized sequencer with forced inclusion to the Syscoin L1 possible",
            content: exports.ReviewSnippet.SelfSequenceMainAlt,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.High,
            title: "Rollux inherits finality guarantees from Syscoin",
            content: exports.ReviewSnippet.FinalityAltRollupCentralizedProposer,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Rollux's data availability layer is merge-mined",
                    content: exports.BitcoinSecuritySnippet.MergeMineDA,
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "An alternative token plays a role in network security",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "Fees and issuance are paid to miners who merge-mine Syscoin",
                    content: exports.BitcoinSecuritySnippet.MergeMineDAFees,
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content: "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust numerous operators to process their withdrawals",
                    content: "Users trust that the centralized proposer will include their withdrawal request in the latest state root published to the Syscoin L1. They also trust that the controller of the wBTC contract will process their withdrawal request and that Syscoin miners will mine the burn transaction on the Syscoin chain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Merge-mining",
                    content: "Merged mining is a crucial part of Syscoin’s (Rollux's parent chain) consensus mechanism that allows coupling between Bitcoin and Syscoin. Essentially, BTC mining pools add references to Syscoin blocks in mining jobs sent to mining participants. Additionally, because the Syscoin mining algorithm is the same as bitcoin’s, there is little added energy expenditure. This combined with miners earning a portion of transaction fees and newly issued SYS tokens from Syscoin block mining creates an incentive for providing security to both BTC and to Syscoin.",
                },
                {
                    title: "EVM-compatible",
                    content: "Rollux uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its coding language, which is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Rollux is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on Rollux compared to other execution environments.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "Rollux’s [node implementation](https://github.com/sys-labs/rollux) is open-source.",
                },
            ],
        },
    ],
};

const rootstock = {
    type: exports.Type.Layer,
    slug: "rootstock",
    title: "Rootstock",
    entityType: exports.EntityType.MergeMined,
    entityCategory: exports.EntityCategory.Sidesystem,
    custodyTitle: exports.CustodyTitle.Distributed,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 2757,
    nativeToken: "RBTC",
    feeToken: "RBTC",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://rootstock.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://dev.rootstock.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.rootstock.io",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/rsksmart",
        },
        {
            text: exports.Site.Twitter,
            url: "https://twitter.com/rootstock_io",
        },
    ],
    description: "Rootstock is a merge-mined, EVM-compatible bitcoin sidechain. As a merge-mined network, bitcoin miners can concurrently mine for Rootstock's consensus. Rootstock has an enshrined cross-chain BTC asset called ''Smart Bitcoin'' (RBTC), which is pegged 1:1 to BTC and secured by a permissioned multisig federation.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskFederationPeg}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Rootstock RBTC",
                    infrastructureSlug: "rootstock-rbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "A federated multi-sig known as the Powpeg is used to custody users' BTC. More than 5, publicly-known signers participate in the Powpeg.",
                    content: Reviewsnippet.RootstockRBTC,
                },
                {
                    name: "Wrapped Rootstock rBTC",
                    infrastructureSlug: "rootstock-wrbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "Users deposit rBTC into the Wrapped Rootstock rBTC smart contract to mint wrBTC",
                    content: Reviewsnippet.WrappedRootstockRBTC,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: Reviewsnippet.SolvBTC,
                },
                {
                    name: "Midas mBTC",
                    infrastructureSlug: "midas-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.MidasMBTC} Users deposit rBTC, or wrBTC, into the mBTC smart contract on Rootstock to mint mBTC.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data is stored and made available via Rootstock nodes. Running a node is permissionless",
            content: `${exports.ReviewSnippet.AltL1DAPOW}\n\nSo long as there is at least one non-pruned Rootstock full node online, users will be able to recover the full history and state of the Rootstock blockchain.`,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Any Bitcoin miner can participate in merge-mining Rootstock",
            content: exports.ReviewSnippet.OperatorSidechainMergeMine,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Finality assurances are provided by Rootstock's consensus mechanism",
            content: exports.ReviewSnippet.AltL1FinalityPOW,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Rootstock enables Bitcoin miners to merge-mine Rootstock",
                    content: exports.BitcoinSecuritySnippet.MergeMine,
                },
                {
                    title: "Another token is not used for network security",
                    content: "The Full Block Reward is paid out in RBTC. Its distribution is : 20% to Rootstock Labs, 0.8% to Powpeg Federation, 79.2% to miners. Miners only receive rewards from transaction fees. Fees dedicated to the federation and miners serve to incentivize the continued security, whereas the 20% dedicated to Rootstock Labs is dedicated to the maintenance and development of the network.",
                },
                {
                    title: "No MEV introduced to Bitcoin, but Bitcoin miners can extract sidechain MEV",
                    content: exports.BitcoinSecuritySnippet.MergeMineMEV,
                },
                {
                    title: "Merge-mining enables Bitcoin miners to earn more fees",
                    content: exports.BitcoinSecuritySnippet.MergeMineFees,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust permissioned operators to process their withdrawals",
                    content: "Withdrawals are currently permissioned by a federated group of signers. Users must trust that when they deposit BTC into the Rootstock blockchain, the signers will not collude and steal their BTC. Learn more about the Powpeg multisig in the Knowledge Bits section.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Merge-mining",
                    content: "Merged mining is a feature of Rootstock’s consensus mechanism that allows coupling between bitcoin and Rootstock. Essentially, BTC mining pools add references to Rootstock blocks in mining jobs sent to mining participants. Additionally, because the Rootstock mining algorithm is the same as bitcoin’s, there is little added energy expenditure. This sees bitcoin miners have an ability to additionally mine a percentage of Rootstock blocks. Miners are incentivized through earning a portion of transaction fees to mine Rootstock",
                },
                {
                    title: "REMASC",
                    content: "In order to pay out miners, every block executes the Reward Manager Smart Contract (REMASC). The contract keeps record of the Reward Balance account, which exists to change value during new block production. When a block reaches maturity, the appropriate portions of rewards are distributed according to REMASC specified rules.",
                },
                {
                    title: "EVM-Compatible",
                    content: "Rootstock uses a forked version of the Ethereum Virtual Machine (EVM), which it calls the Rootstock Virtual Machine (RVM). The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Smart contracts created for the EVM are directly compatible with the RVM.",
                },
                {
                    title: "Faster block times",
                    content: "Rootstock achieves block confirmation around every 30s.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "All code related to the Rootstock project is open source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Rootstock developer portal](https://dev.rootstock.io/)\n[Rootstock Whitepaper](https://rootstock.io/static/a79b27d4889409602174df4710102056/RS-whitepaper.pdf)\n[Powpeg documentation](https://dev.rootstock.io/rsk/architecture/powpeg/)\n[Powpeg remote attestation](https://rootstock.io/powpeg/)",
                },
            ],
        },
    ],
};

const scroll = {
    type: exports.Type.Layer,
    slug: "scroll",
    title: "Scroll",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "SCR",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://scroll.io/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.scroll.io/en/home/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://scrollscan.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/scroll-tech",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/Scroll_ZKP",
        },
    ],
    description: "Scroll is a rollup that posts data to Ethereum.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvBTC}\n\n${exports.TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.LorenzostBTC}\n\n${exports.TokenSnippet.smartcontractreview}.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "A distributed consensus network satisfies the data availability requirement",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "The network is operated by a centralized block producer",
            content: exports.ReviewSnippet.SelfSequenceNone,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Scroll state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Scroll does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Scroll does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${exports.KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

const side = {
    type: exports.Type.Layer,
    slug: "side",
    title: "Side Protocol",
    entityType: exports.EntityType.PoSNetwork,
    entityCategory: exports.EntityCategory.Sidesystem,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "SBTC",
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://side.one",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.side.one",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.side.exchange",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/sideprotocol",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/SideProtocol",
        },
    ],
    description: "Side Protocol is a Proof-of-Stake blockchain for BTC-denominated applications. It runs on CometBFT consensus.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskFederationPeg}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Side sBTC",
                    infrastructureSlug: "side-sbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "Side sBTC is managed by a federation made up of a portion of its validator set",
                    content: exports.TokenSnippet.SideBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data availability is satisfied by Side's full node set",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Side protocol is operated by an alternative PoS network",
            content: exports.ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: exports.RiskCategory.StateValidation,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Side protocol users CometBFT for consensus",
            content: exports.ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Side does not inherit any security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "sBTC or SIDE token used to pay fees",
                    content: "Users can pay fees in sBTC or SIDE on the Side Protocol",
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Side does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Side Chain is IBC=compatible",
                    content: exports.TechnologySnippet.IBC,
                }
            ],
        },
        {
            id: "usecase",
            title: "Use cases",
            content: [
                {
                    title: "Side Chain offers a variety of financial applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                }
            ],
        },
    ],
};

const solana = {
    type: exports.Type.Layer,
    slug: "solana",
    title: "Solana",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "SOL",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://solana.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://solana.com/docs",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.solana.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/solana-foundation/solana-com",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/solana",
        },
    ],
    description: "Solana is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It is home to the SVM execution environment which supports more expressive smart contracts.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: "cbBTC is managed by a centralized custodian.",
                    content: exports.TokenSnippet.CoinbasecbBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "Users trust the Threshold Network to keep tBTC backed",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by an [8 member](https://explorer.solana.com/address/Gj93RRt6QB7FjmyokAD5rcMAku7pq3Fk2Aa8y6nNbwsV/program-multisig) federation.`,
                },
                {
                    name: "Wormhole wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\nwBTC on Solana is minted via the Portal bridge from Ethereum. We are reviewing the Portal bridge's smart contracts and trust assumptions.`,
                },
                {
                    name: "21 Shares BTC",
                    infrastructureSlug: "21shares-21btc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TwentyOnecoBTC}`,
                },
                {
                    name: "Zeus zBTC",
                    infrastructureSlug: "zeus-zbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.VariousCustodianPeg,
                    content: `${exports.TokenSnippet.ZueszBTC}`,
                },
                {
                    name: "Rootstock RBTC",
                    infrastructureSlug: "rootstock-rbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.UnderReview,
                    content: `${exports.TokenSnippet.RootstockRBTC} Rootstock is bridged to Solana via a LayerZero implementation.`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is stored and made available by an alternative PoS network",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Solana is operated by a distributed validator set",
            content: exports.ReviewSnippet.OperatorSidechainPOS
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "We are currently reviewing Solana's specific finality guarantees",
            content: "Solana's finality guarantees are achieved through a distributed consensus mechanism. We are reviewing relevant trust assumptions.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Solana does not inherit any security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "SOL token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Solana does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const soneium = {
    type: exports.Type.Layer,
    slug: "soneium",
    title: "Soneium",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "ETH",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://soneium.org/en/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.soneium.org/docs/builders/overview",
        },
        {
            text: exports.Site.Explorer,
            url: "https://soneium.blockscout.com/",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/soneium",
        },
    ],
    description: "X Layer is an Ethereum rollup that supports a variety of BTC-backed assets.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
        {
            title: RiskSummarySnippet.TitleSystemUpgrade,
            content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.BitGowBTC}\n\wBTC is bridged to Soneium through a third party provider.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianDerivative,
                    content: `${Reviewsnippet.xSolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Solv SolvBTCJUP",
                    infrastructureSlug: "solv-solvbtcjup",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianDerivative,
                    content: `${Reviewsnippet.SolvBTCdotSolv}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Unit uBTC",
                    infrastructureSlug: "unit-unitbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: Reviewsnippet.FederationPeg,
                    content: `${Reviewsnippet.HyperliquidBTC}\n\nuBTC is bridged to Soneium from Hyperliquid through a third party provider.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Ethereum satisfies the network's data availability requirement",
            content: Reviewsnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "The network is operated by a centralized entity. Users can bypass the sequencer if needed",
            content: `${Reviewsnippet.AltRollupSelfSequenceMain}`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Soneium state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "This project has undergone a partial review",
                    content: `${AdditionalSnippet.InitialReview}`,
                },
            ],
        },
    ]
};

const sonic = {
    type: exports.Type.Layer,
    slug: "sonic",
    title: "Sonic",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust", // Set to true for partial review mode
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "S",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.soniclabs.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.soniclabs.com/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://sonicscan.org/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/0xsoniclabs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/SonicLabs",
        },
    ],
    description: "Sonic is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.SolvBTC}\n\n${exports.TokenSnippet.smartcontractreview},`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: `${exports.TokenSnippet.xSolvBTC}\n\n${exports.TokenSnippet.smartcontractreview},`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\n${exports.TokenSnippet.smartcontractreview},`,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.LombardLBTC}\n\n${exports.TokenSnippet.smartcontractreview},`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data is stored and made available by Sonic full nodes",
            content: "The data for Sonic's state is made available by its full nodes. We are reviewing if operating a node is permissionless.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Sonic is operated by a distributed validator set",
            content: "Blocks are built and proposed by a distributed consensus network. We are reviewing Sonic's consensus mechanism.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "We are currently reviewing Sonic's finality guarantees",
            content: "Finality guarantees are provided via an alternative proof-of-stake network. We are reviewing Sonic's consensus mechanism.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Sonic does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "S token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Sonic does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to relevant technologies and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

const spark = {
    type: exports.Type.Layer,
    slug: "spark",
    title: "Spark",
    entityType: exports.EntityType.Statechain,
    entityCategory: exports.EntityCategory.BitcoinNative,
    custodyTitle: exports.CustodyTitle.BitcoinNative,
    live: exports.LiveStatus.Beta,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.Low,
        exports.RiskFactor.Low,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.VeryHigh,
    ],
    btcLocked: NaN,
    nativeToken: "BTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.spark.money/",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/buildonspark",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/buildonspark",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.spark.money/home/welcome",
        },
    ],
    description: "Spark is an implementation of the statechain protocol where users interact with a statechain entity to process transfers for offchain representations of UTXOs. Spark's statechain implementation leverages a federation of operators to act as the statechain entity.",
    riskSummary: [
        {
            title: "Users trust the statechain entity with key deletion",
            content: RiskSummarySnippet.RiskStatechainFinality,
        },
        {
            title: "Previous owner can broadcast their unilateral exit transaction",
            content: RiskSummarySnippet.RiskStatechainPreviousOwner,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Statechain",
                    infrastructureSlug: "statechain",
                    score: 0,
                    tier: exports.RiskFactor.Low,
                    title: "Users collaboratively custody funds with the statechain entity",
                    content: exports.TokenSnippet.SparkBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Low,
            title: "Data related to current UTXO ownership is held client-side",
            content: "Transaction data is self-hosted. The statechain entity signs individual transactions and users store data for their keyshare and unilateral exit path client-side. The statechain entity also keeps a record of transfer history.",
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Offchain transfers are co-signed by a federation",
            content: `${exports.ReviewSnippet.OperatorFederatedStatechain}`,
            alert: {
                type: "warning",
                title: "Federation is below five, publicly known entities",
                content: "Spark currently operates with two members in its statechain entity federation: Lightspark and Flashnet. Both are publicly known companies that risk damaging their reputation if they act maliciously.",
                linkText: "Source",
                linkUrl: "https://docs.spark.money/home/faq#how-many-spark-operators-sos-are-there%2C-and-who-are-they%3F",
                expandable: true,
            },
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Users trust a federation to delete keyshares held with previous owners",
            content: exports.ReviewSnippet.FinalityStatechainFederation,
            alert: Alertsnippet.StatechainKeyDeletion,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Users rely on Bitcoin network participants for exit transactions",
                    content: exports.BitcoinSecuritySnippet.BitcoinSecurityOffchainUTXO,
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content: exports.BitcoinSecuritySnippet.OffchainUTXOMEV,
                },
                {
                    title: "No alternative token needed for network security",
                    content: exports.BitcoinSecuritySnippet.OffchainUTXONoToken,
                },
                {
                    title: "Unilateral exits contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.StatechainSecurityBudget,
                },
            ],
        },
        {
            id: "Technology",
            title: "Technology",
            content: [
                {
                    title: "Statechains",
                    content: TechnologySnippet.Statechain,
                },
                {
                    title: "FROST",
                    content: `${TechnologySnippet.FROST}`,
                    alert: {
                        type: "info",
                        title: "Spark leverages FROST for its statechain entity",
                        content: "In Spark, the statechain entity's private key is split into multiple keyshares, and a threshold of these keyshares are needed to create a valid signature for signing events on Spark.",
                        collapsible: true,
                        buttonText: "Learn how Spark leverages FROST",
                        expandable: false,
                    },
                },
                {
                    title: "Virtual UTXOs (vUTXOs)",
                    content: `${TechnologySnippet.vUTXO}`,
                    alert: {
                        type: "info",
                        title: "Spark calls vUTXOs 'leaves'",
                        content: "In Spark, vUTXOs are called 'leaves'. Leaves are connected to the onchain UTXO through branches, with each leaf having their own unilateral spending path. This enables users to split their leaves into multiple denominations. To create leaves, users work with the statechain entity to create a pre-signed, bitcoin transaction that takes the parent UTXO as the input, and produces multiple outputs each controlled by a new key. These keyshares are split from the previous private key. Users can spend these leaves to new recipients or further split them into smaller denominations as needed. Users should note that leaves, which are split futher from the parent UTXO, will have increased unilateral exit costs compared to a leaf that is one branch away from the parent UTXO.",
                        collapsible: true,
                        buttonText: "Learn how Spark leverages vUTXOs and splits them",
                        expandable: false,
                        linkText: "Learn more about leaf splitting in the Spark docs",
                        linkUrl: "https://docs.spark.money/spark/technical-definitions",
                    },
                },
                {
                    title: "Relative timelocks",
                    content: `Spark leverages relative timelocks to ensure that the current owner can spend their unilateral exit transaction before the previous owner.`,
                },
            ]
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Offchain UTXO transfers",
                    content: UseCaseSnippet.OffchainUTXOTransfers,
                },
                {
                    title: "Tokenized applications",
                    content: UseCaseSnippet.UTXOTokenizedApplications,
                },
                {
                    title: "Lightning compatible",
                    content: UseCaseSnippet.LightningCompatible,
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more about statechains below",
                    content: "[Statechains are L2s, by the Bitcoin Layers team](https://x.com/BitcoinLayers/status/1925586374473724392) \n [Statechains Whitepaper, by Ruben Somsen](https://github.com/RubenSomsen/rubensomsen.github.io/blob/master/img/statechains.pdf) \n [Statechains: Non-custodial Off-chain Bitcoin Transfer, by Ruben Somsen](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39#:~:text=Statechains%20are%20a%20layer%20two,with%20scaling%20and%20save%20fees.) \n [Information on FROST from the Blockstream team](https://glossary.blockstream.com/frost/)",
                },
            ],
        },
    ],
};

const stacks = {
    type: exports.Type.Layer,
    slug: "stacks",
    title: "Stacks",
    entityType: exports.EntityType.Anchor,
    entityCategory: exports.EntityCategory.Sidesystem,
    custodyTitle: exports.CustodyTitle.Distributed,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Low,
    ],
    btcLocked: 1054,
    nativeToken: "STX",
    feeToken: "STX",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.stacks.co",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.stacks.co/docs/intro",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.hiro.so/transactions?chain=mainnet",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/stacks-network",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/Stacks",
        },
    ],
    description: "Stacks is a sidechain that aims to be programmability layer for Bitcoin. It uses a novel execution environment, Clarity. Stacks uses a hybrid PoS mechanism (PoX) and derives economic security from its native token (STX).",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskFederationPeg}`
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "sBTC",
                    infrastructureSlug: "stacks-sbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.FederationPeg,
                    content: exports.TokenSnippet.StacksSBTC,
                },
                {
                    name: "Alex xBTC",
                    infrastructureSlug: "alex-xbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.AlexBTC,
                },
                {
                    name: "XLink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.xlink,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Data availability requirement is fulfilled through Stacks' full nodes",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Stacks blocks are built by miners and validated by stakers",
            content: "Blocks are built by miners during a given mining tenure. After their tenure, stakers validate the blocks built during this tenure. Anyone with sufficient capital resources can become a miner or staker.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Low,
            title: "State transitions validated and finalized by Stackers. Block leaders must build on the latest checkpoint included in the latest block tenure that was validated by stackers",
            content: exports.ReviewSnippet.FinalityAnchorChain,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Stacks inherits additional reorg resistance from bitcoin",
                    content: exports.BitcoinSecuritySnippet.FinalityAssurance,
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin, but Bitcoin miners can extract MEV from Stacks",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "An alternative token plays a role in network security",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "Stacks does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust centralized operators to process their withdrawals",
                    content: "Stacks users deposit BTC into Stacks through custodial bridge mechanisms. They trust that the operators of these bridges (e.g. aBTC and xBTC) will not steal their Bitcoin assets, or censor their withdrawals.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Clarity",
                    content: "Stacks leverages the Clarity execution environment. The Clarity language is a subset of Lisp, and is not Turing-complete as a design choice. However, it is still expressive enough to build complex smart contracts and replicate much of the functionalities from Turing-complete environments like the EVM (i.e., DeFi, NFTs, etc.). Stacks is able to read Bitcoin state, due to both Clarity and its integrated PoX consensus mechanism. This allows for events on Stacks to be triggered by Bitcoin activity, or for smart contracts to read Bitcoin state during their execution.",
                },
                {
                    title: "Proof-of-Transfer",
                    content: "Proof-of-Transfer (PoX) is Stacks' consensus mechanism, based on Proof-of-Burn. PoX involves Bitcoin miners bidding BTC for the right to mint a Stacks block. The winning miner creates the block, and is rewarded with the STX block reward and STX transaction fees from the block. The miner's bid is paid to STX stackers (stakers). This system allows for STX stackers to earn native BTC yield, and creates an additional revenue stream for miners, similar to merge-mining.",
                },
                {
                    title: "Nakamoto",
                    content: "In Nakamoto Consensus, miners commit to mining Stacks blocks by broadcasting commit transactions on the Bitcoin blockchain. After winning the right to produce Stacks blocks, the selected miner gains the exclusive right to build and append Stacks blocks for a specific tenure, typically lasting about 10 minutes, corresponding to Bitcoin's block time. These blocks are then validated by Stackers, participants in a Proof-of-Stake-like mechanism. Once validated, blocks are finalized and added to the Stacks blockchain.,",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: "The most popular use case for Stacks is onchain applications. Stacks has a number of applications, including lending, borrowing, and decentralized exchanges.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "All code related to the Stacks project is free and open source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[State of Stacks Q4 2023 from Messari](https://messari.io/report/state-of-stacks-q4-2023)\n[Bitcoin Connection from Stacks Docs](https://docs.stacks.co/stacks-101/bitcoin-connection)\n[Proof of Transfer from Stacks Docs](https://docs.stacks.co/stacks-101/proof-of-transfer)",
                },
            ],
        },
    ],
};

const starknet = {
    type: exports.Type.Layer,
    slug: "starknet",
    title: "Starknet",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    notice: exports.Notice.OtherReasonBridge,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.starknet.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.starknet.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://starkscan.co",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/keep-starknet-strange/awesome-starknet",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/Starknet",
        },
    ],
    description: "Starknet is a rollup that posts data to Ethereum. Its official bridge programs on Ethereum are finalized with validity proofs. It is currently researching bridge programs on bitcoin using BitVM, ColliderVM, or native proof verification (in the event more expressive opcodes are added to bitcoin Script).",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleSystemUpgrade,
            content: `${exports.RiskSummarySnippet.RiskSummarySecurityCouncil} Starknet's security council is a 9/12 multisig.`,
        },
        {
            title: exports.RiskSummarySnippet.TitleBridgeUpgrade,
            content: `${exports.RiskSummarySnippet.RiskSummaryCentralNotImmediateUpgrade} A 2/4 multisig can upgrade the wBTC bridge contract after a three day delay. A single signer can upgrade the tBTC bridge contract after a three day delay.`,
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    categorization: [
        {
            title: exports.Categorization.NoBridgeTitle,
            content: exports.Categorization.NoBridgeSnippet,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: exports.RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}. The wBTC implementation of the Starknet bridge contract is upgradeable by a 2/4 multisig. There is a 3 day delay before the upgrade is implemented.`,
                    alert: Alertsnippet.AltRollupAltTokenProofsUpgrade,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: `${exports.TokenSnippet.FederationPeg}. To mint on starknet, tBTC on Ethereum is locked in an upgreadeable escrow contract`,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${Reviewsnippet.AltRollupAltTokenValidityProofs} The tBTC implementation of the Starknet bridge contract is upgradeable by a single signer. There is a there a 3 day delay before the upgrade is implemented.`,
                    alert: Alertsnippet.AltRollupAltTokenProofsUpgrade,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Ethereum satisfies Starknet's data availability requirement",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "Blocks are currently produced by a centralized sequencer",
            content: "The network's blocks are constructed by a centralized block producer.\n\nUsers cannot build their own blocks in the event of censorship or liveness failures.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Starknet state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    manualContracts: [
        {
            title: "Starknet wBTC Escrow Contract",
            address: "0x283751A21eafBFcD52297820D27C1f1963D9b5b4",
            subtitle: "Bridge contract that escrows BitGo wBTC that is minted on Starknet.",
            explorerUrl: "https://etherscan.io/address/0x283751A21eafBFcD52297820D27C1f1963D9b5b4"
        },
        {
            title: "Starknet tBTC Escrow Contract",
            address: "0x2111A49ebb717959059693a3698872a0aE9866b9",
            subtitle: "Bridge contract that escrows Threshold tBTC that is minted on Starknet.",
            explorerUrl: "https://etherscan.io/address/0x2111A49ebb717959059693a3698872a0aE9866b9"
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Starknet does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Starknet does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "Technology",
            title: "Technology",
            content: [
                {
                    title: "Cairo Virtual Machine",
                    content: "Cairo is a virtual machine with zk-provable function executions by default. The Cairo virtual machine uses three languages: Cairo, an ergonomic, Rust-based language for users to interface; SIERRA, a safe intermediary representation for Cairo to compile down to that avoids potentially unprovable situations such as assertions or division by zero, making function executions deterministic; and finally CASM, low-level provable code which SIERRA compiles to.\n\nThe Cairo virtual machine ensures that all function executions can be proved while still offering a fully expressive and Turing-complete environment. Cairo’s Turing-completeness allows it to emulate other VMs, which can then inherit provable characteristics on Starknet. The Ethereum Virtual Machine (EVM) is one such example with Kakarot ZK-EVM, allowing EVM native transactions to be executed and proven on Starknet.",
                },
                {
                    title: "SHARP and Stwo",
                    content: "Starknet, as well as the various StarkEx-built rollups, use a shared proving system for proof generation, called SHARP. The benefit of shared proving is saving on costs. Specifically, SHARP uses the StarkWare-built Stwo prover, an iteration of the STONE prover.",
                },
                {
                    title: "Madara sequencer",
                    content: "Madara is a sequencer built for L3s on top of Starknet. Madara allows L3s to leverage the SHARP system, with proofs verified on Starknet/Ethereum, while also offering DA flexibility, as L3s can choose alternative DA layers, e.g., Celestia.",
                },
            ]
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "proposedtech",
            title: "Proposed Technology",
            content: [
                {
                    title: "Recursive Covenants",
                    content: "OP_CAT is a proposed opcode that could enable two primitives that would support improved bridging protocols for projects like Starknet. The first enables users to predefine spending conditions for individual UTXOs. The second primitive is the verification of merkle tree branches. This would enable you to continuously add hashes of data to a merkle tree that continuously builds upon restrictions placed by previous transactions.\n\nBy building a continuous chain of restrictions over a number of transactions, you enable recursive covenants. Recursive covenants enable users to lock funds into a group UTXO that can continuously add more restrictions based on new user deposits, and additionally enforce changes for partial withdrawals which must go back into the rollup script.",
                },
                {
                    title: "STARK Verifier with OP_CAT",
                    content: "An issue that arises from shared UTXOs, specifically for L2s, is that you need a trusted party to verify offchain state transitions to enable users to withdraw funds relative to their updated balance. The StarkWare team (lead developers of Starknet) are working with L2 Iterative Ventures on developing a STARK verifier directly in Bitcoin Script with OP_CAT.\n\nIn rollups, state differences are compressed together and sent to the Bitcoin L1 with a corresponding validity proof proving that the state transition was executed correctly. Starknet are proposing a mechanism that would verify these STARK proofs proving the validity of L2 state transitions. By verifying offchain state transitions directly in Script, shared UTXOs would be able to process user withdrawals based on their updated balances. Recursive covenants and onchain STARK verification would create trust-minimized bridge programs for L2s.",
                },
                {
                    title: "Volition DA model",
                    content: "Starknet is exploring a hybrid DA solution, known as a volition. The volition model offers multiple DA options, such as Ethereum blobspace, Starknet DA, or third-party solutions such as Celestia. Importantly, this model would allow for users to choose their preferred DA solution per transaction. High value per byte transactions would favor Ethereum DA, while low value per byte transactions would logically use alternative DA. This is particularly relevant for the move to Bitcoin, as Bitcoin DA is considerably more scarce than Ethereum blobspace.",
                },
            ],
        },
        {
            id: "openresearch",
            title: "Open Research Questions",
            content: [
                {
                    title: "Starknet will likely use an external sequencer thus mitigating MEV leakage to the Bitcoin L1",
                    content: "A concern with rollups, and alternative rollups, on Bitcoin is the potential introduction of MEV. If Bitcoin miners have exclusive rights in ordering rollup transactions, especially those with more expressive execution environments, miners have opportunities to extract MEV through a variety of mechanisms. This is known as based sequencing. If Bitcoin rollups implemented based sequencing, miners could invest into more sophisticated block building infrastructure to extract more harmful MEV for increased profits. This could raise the barrier to entry for mining, and potentially introduce centralizing pressures.\n\nStarknet is currently sequenced (ordered) by a centralized sequencer. The Starknet community has additionally researched decentralized sequencer, but have focused on alternative consensus protocols taking on this role (CometBFT as an example).\n\nIf an alternative consensus mechanism is used to decentralize the sequencer, versus based sequencing, then MEV is unlikely to leak to Bitcoin miners.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Learn more about OP_CAT](https://opcat.wtf/)\n[L2Beat's review on Ethereum Starknet](https://l2beat.com/scaling/projects/starknet)",
                },
            ],
        },
    ],
};

const template = {
    type: exports.Type.Layer,
    slug: "sui",
    title: "Sui",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "website",
        },
        {
            text: exports.Site.Docs,
            url: "docs",
        },
        {
            text: exports.Site.Explorer,
            url: "explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "github",
        },
        {
            text: exports.Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${exports.TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: exports.RiskFactor.High,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: exports.ReviewSnippet.TemplateReview,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${exports.ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    manualContracts: [
        {
            title: "Bridge Escrow Contract",
            address: "0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1",
            subtitle: "Main bridge contract that holds and manages cross-chain BTC assets",
            explorerUrl: "https://etherscan.io/address/0x46abfe1c972fca43766d6ad70e1c1df72f4bb4d1"
        },
        {
            title: "Governance Multisig",
            address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
            subtitle: "5-of-9 multisig responsible for bridge upgrades and parameter changes",
            explorerUrl: "https://etherscan.io/address/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
        },
        {
            title: "tBTC Vault Contract",
            address: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
            subtitle: "Vault contract managing Threshold tBTC deposits and withdrawals",
            explorerUrl: "https://etherscan.io/address/0x18084fba666a33d37592fa2633fd49a74dd93a88"
        },
        {
            title: "Fee Distribution Contract",
            address: "0x514910771af9ca656af840dff83e8264ecf986ca",
            subtitle: "Contract handling transaction fee distribution to validators",
            explorerUrl: "https://etherscan.io/address/0x514910771af9ca656af840dff83e8264ecf986ca"
        }
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                    content: "AdditionalSnippet.Snippet or text content"
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Add a prop saying if the network inherits security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
                {
                    title: "Add a prop clarifying if the network contributes to the security budget",
                    content: exports.BitcoinSecuritySnippet.Template,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: exports.TechnologySnippet.Template,
                },
                {
                    title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                    content: "The tech is highly customizeable so I'm adding text to describe it."
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Add a prop on significant use cases.",
                    content: exports.UseCaseSnippet.Template,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: "Leave this as is. We'll add files when you submit the PR.",
                },
            ],
        },
    ],
};

const taiko = {
    type: exports.Type.Layer,
    slug: "taiko",
    title: "Taiko",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "TAIKO",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://taiko.xyz/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.taiko.xyz/start-here/getting-started",
        },
        {
            text: exports.Site.Explorer,
            url: "https://taikoscan.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/taikoxyz",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/taikoxyz",
        },
    ],
    description: "Taiko is an Ethereum rollup that leverages based sequencing. It is home to various BTC-derivative assets.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.SolvBTC,
                },
                {
                    name: "Merlin M-BTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.MerlinMBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC}\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianDerivative,
                    content: exports.TokenSnippet.xSolvBTC,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Coinbase cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.CoinbasecbBTC,
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.ObeliskoBTC,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Taiko uses Ethereum for data availability",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Ethereum validators are responsible for sequencing Taiko transactions",
            content: `${exports.ReviewSnippet.BasedSequencedAlt}\n\nEthereum validators are responsible for sequencing Taiko transactions. If users are censored by Ethereum validators, they can propose blocks to Taiko's L1 contract.`,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "Taiko state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Taiko does not inherit any security from bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: "Taiko does not introduce MEV to bitcoin. Since it is a based sequenced rollups, it is possible for Ethereum block producers to extract MEV. Blocks in Ethereum are primarily auctioned off to builders who construct blocks on behalf of a proposer in a given slot. The majority of blocks in Ethereum are built by 2-3 builders.",
                },
                {
                    title: "Ethereum does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const tron = {
    type: exports.Type.Layer,
    slug: "tron",
    title: "Tron",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.High,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "TRX",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://trondao.org/",
        },
        {
            text: exports.Site.Docs,
            url: "https://developers.tron.network/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://tronscan.org/#/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/tronprotocol",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/trondao",
        },
    ],
    description: "Tron is a proof-of-stake blockchain. It is EVM-compatible and home to BTCTRON.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BTCTRON",
                    infrastructureSlug: "tron-btc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BTCTRON}\n\n${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BitGowBTC}\n\n${exports.TokenSnippet.smartcontractreview},`
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Data availability guarantees are provided by Tron's full node set",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Blocks are produced by an elected group of validators known as super representatives",
            content: "Anyone can apply to participate as a block producer in Tron. Prospective validators, known as super representatives, can purchase TRX tokens and apply to become a super representative. After a voting process, the top 27 super representatives per voting power are selected to become block producers.",
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "Finality guarantees are provided by Tron's network operators",
            content: "Finality guarantees are provided through the network's operators. Users trust the network's operators to not reorg their transactions.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Tron does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "TRX token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Tron does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-compatible",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
                {
                    title: "Asset transfers",
                    content: `${exports.UseCaseSnippet.OffchainTransfers}`
                },
            ],
        },
    ],
};

const zeta = {
    type: exports.Type.Layer,
    slug: "zeta",
    title: "Zeta",
    entityType: exports.EntityType.AltL1,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.UnderReview,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
        exports.RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ZETA",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.zetachain.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://www.zetachain.com/docs/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.zetachain.com/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/zeta-chain",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/zetablockchain",
        },
    ],
    description: "Zeta is a proof-of-stake blockchain that supports a number of wrapped BTC tokens. It is home to the ZetaBTC token.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: `${exports.RiskSummarySnippet.RiskSummaryCustodianPegs}`,
        },
        {
            title: exports.RiskSummarySnippet.TitleAlternativeL1,
            content: exports.RiskSummarySnippet.RiskSummaryAlternativeL1,
        },
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BTC.BTC",
                    infrastructureSlug: "zeta-btc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.UnderReview}${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "PumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.PumpBTC}\n\n${exports.TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BedrockUniBTC}\n\n${exports.TokenSnippet.smartcontractreview},`
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "",
            content: exports.ReviewSnippet.AltL1DA,
        },
        {
            category: exports.RiskCategory.BlockProduction,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "",
            content: exports.ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: exports.RiskCategory.StateValidation,
            score: 0,
            tier: exports.RiskFactor.AlternativePoS,
            title: "",
            content: exports.ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Zeta does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "Zeta token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Zeta does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-compatible",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
    ],
};

const zksync = {
    type: exports.Type.Layer,
    slug: "zksync",
    title: "zkSync",
    entityType: exports.EntityType.AltRollup,
    entityCategory: exports.EntityCategory.Alt,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        exports.RiskFactor.VeryHigh,
        exports.RiskFactor.Medium,
        exports.RiskFactor.High,
        exports.RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "ZK",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://zksync.io/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.zksync.io/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.zksync.io/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/matter-labs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/zksync",
        },
    ],
    description: "zkSync is a rollup that posts data to Ethereum.",
    riskSummary: [
        {
            title: exports.RiskSummarySnippet.TitleUpgrade,
            content: exports.RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: exports.RiskSummarySnippet.TitleCustodianPegs,
            content: exports.RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: exports.RiskSummarySnippet.TitleAltDA,
            content: exports.RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: exports.RiskSummarySnippet.TitleCentralizedSequencer,
            content: exports.RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    riskAnalysis: [
        {
            category: exports.RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: exports.TokenSnippet.BitGowBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: exports.RiskFactor.UnderReview,
                    title: exports.TokenSnippet.FederationPeg,
                    content: `${exports.TokenSnippet.ThresholdtBTC}\n\n${exports.TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.BinanceBTCB},\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Merlin M-BTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: exports.RiskFactor.VeryHigh,
                    title: exports.TokenSnippet.CustodianPeg,
                    content: `${exports.TokenSnippet.MerlinMBTC},\n\n${exports.TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: exports.RiskCategory.DataAvailability,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "A distributed consensus network satisfies the data availability requirement",
            content: exports.ReviewSnippet.EthereumRollupDA,
        },
        {
            category: exports.RiskCategory.NetworkOperators,
            score: 0,
            tier: exports.RiskFactor.VeryHigh,
            title: "The network is operated by a centralized operator",
            content: exports.ReviewSnippet.SelfSequenceNone,
        },
        {
            category: exports.RiskCategory.FinalityGuarantees,
            score: 0,
            tier: exports.RiskFactor.Medium,
            title: "zkSync's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "zkSync does not inherit any security from Bitcoin",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: exports.BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: exports.BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "zkSync does not contribute to the security budget",
                    content: exports.BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: exports.TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: exports.UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${exports.KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

// Export all layer types
// Export all layers array
const allLayers = [
    core,
    internetcomputer,
    lightning,
    liquid,
    mercurylayer,
    rootstock,
    stacks,
    bob,
    bsquared,
    merlin,
    rollux,
    bitlayer,
    side,
    nomic,
    fractal,
    bitfinity,
    bevm,
    starknet,
    bouncebit,
    hemi,
    spark,
    arbitrum,
    avalanche,
    base,
    bnbsmartchain,
    optimism,
    ethereum,
    polygon,
    solana,
    corn,
    zeta,
    fantom,
    gnosis,
    polygonzkevm,
    scroll,
    taiko,
    tron,
    zksync,
    osmosis,
    berachain,
    sonic,
    hyperliquid,
    mezo,
    babylon,
    template$2,
    template$c,
    template$b,
    fuel,
    template$8,
    template$7,
    template$6,
    template$5,
    template$4,
    template$3,
    template$1,
    soneium,
    template,
    template$9,
    goat,
];
// Export layer slugs
const allLayerSlugs = allLayers.map((layer) => layer.slug);

const acorn = {
    type: exports.Type.Infrastructure,
    slug: "acorn-abtc",
    title: "Acorn aBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Acorn aBTC is a BTC-backed reserve asset that looks to live across various EVM chains.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: exports.PegRiskSummarySnippet.UnkownSignersTitle,
            content: exports.PegRiskSummarySnippet.UnkownSigners,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust operators of a multi-signature wallet with the custody of BTC backing aBTC",
            content: "Users of aBTC reportedly trust a multi-signature wallet to secure the funds backing aBTC. Acorn's documentation mentions that a multi-signature wallet, supported by HSMs, is responsible for securing funds that back aBTC. Acorn has not disclosed the operators of this wallet.\n\nUsers trust Acorn's claims in their documentation are being executed in practice.\n\n[Source](https://docs.acornnetwork.io/acorn-infrastructure/module-features)",
        },
    ],
};

const alexxbtc = {
    type: exports.Type.Infrastructure,
    slug: "alex-xbtc",
    title: "Alex xBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Stacks, Core Chain",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "xBTC is a BTC-derivative used primarily within Stacks DeFi applications. xBTC is backed by BTC held in Wrapped's custody.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.OneCustodian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust Wrapped with the custody of BTC backing xBTC",
            content: "Users trust Wrapped, a custodian provider, with the custody of BTC backing xBTC. Alex, a DeFi project largely associated with the Stacks ecosystem, acquired Wrapped and has initiated a transition to move xBTC into sBTC.\n\nFunds that are not moved into sBTC are still secured by [Wrapped](https://wrapped.com/).",
        },
    ],
};

const alloallobtc = {
    type: exports.Type.Infrastructure,
    slug: "allo-allobtc",
    title: "Allo alloBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: true,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "BNBSmartChain",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "AlloBTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.OneCustodian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "BTC backing AlloBTC is held in custody by Cobo, a centralized exchange.",
            content: "BTC backing AlloBTC is custodied by Cobo, a centralized exchange. Cobo offers a 2/2 MPC custody solution where they co-custody funds along with protocols leveraging their servives. AlloBTC has not disclosed if this is the case in their documentation or marketing materials.\n\n[Source](https://docs.allo.xyz/faq-1/btc-staking)",
        },
    ],
};

const astria = {
    type: exports.Type.Infrastructure,
    slug: "astria",
    title: "Astria",
    entityType: exports.EntityType.Sequencing,
    live: exports.LiveStatus.Proposed,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://astria.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.astria.org",
        },
        {
            text: exports.Site.Explorer,
            url: "https://astrotrek.io",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/astriaorg",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/AstriaOrg",
        },
    ],
    description: "Astria is a shared sequencer built on CometBFT consensus. It supports scaling protocols with decentralization, interoperability and more secure preconfirmations.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const avail = {
    type: exports.Type.Infrastructure,
    slug: "avail",
    title: "Avail",
    entityType: exports.EntityType.DataAvailability,
    live: exports.LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "AVAIL",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://availproject.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://www.availproject.org/developer",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.avail.so/#/explorer",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/availproject",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/availproject",
        },
    ],
    description: "Avail is a data availability layer. Scaling protocols that want to save costs on data availability can integrate with Avail for improved performance with some additional tradeoffs. Avail is also developing infrastructure to support improved interoperability.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const avalanchebtcb = {
    type: exports.Type.Infrastructure,
    slug: "avalanche-btcb",
    title: "Avalanche BTC.b",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Avalanche, Arbitrum, Core",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://core.app/",
        },
        {
            text: exports.Site.Explorer,
            url: "https://subnets.avax.network/c-chain/token/0x152b9d0FdC40C096757F570A51E494bd4b943E50",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/ava-labs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/avax",
        },
    ],
    description: "Avalanche BTCb is a BTC-backed reserve asset that primarily supports the Avalanche ecosystem.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a network of 8 entities to secure the funds backing BTCb",
            content: "Ava Labs has disclosed that users trust a network of entities who participate in securing the BTC that backs BTCb. These eight entities are also reported to run special HSM hardware.\n\nThe eight entities securing the bridge are: Halborn, Avascan, Bware Labs, Ankr, Chainstack, Protofire, Blockdaemon, and Ava Labs.\n\nUsers trust that Ava Labs's claims in their documentation are being executed in practice.\n\n[Source](https://medium.com/avalancheavax/bridging-bitcoin-to-avalanche-a-technical-overview-2535e7088b8)",
        },
    ],
};

const axelaraxlbtc = {
    type: exports.Type.Infrastructure,
    slug: "axelar",
    title: "Axelar axlBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Axelar axlBTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: "This wrapper is under review",
            content: "We are currently reviewing this two-way peg implementation."
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "This peg is under review.",
            content: "This peg is under review.",
        },
    ],
};

const babylonbtc = {
    type: exports.Type.Infrastructure,
    slug: "babylonstaked-btc",
    title: "Babylon Staked BTC",
    entityType: exports.EntityType.StakedBTC,
    live: exports.LiveStatus.Mainnet,
    staking: true,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Babylon Genesis",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://babylonchain.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.babylonchain.io",
        },
        {
            text: exports.Site.Explorer,
            url: "https://babylon.explorers.guru/",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/babylonchain",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/babylonlabs_io",
        },
    ],
    description: "Babylon Staked BTC is native BTC locked in L1 staking scripts.",
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Babylon Staked BTC is native BTC locked in L1 staking scripts",
            content: "Babylon Staked BTC is native BTC locked in a L1 staking script. Users lock their funds in the script with the help of a covenant emulator committee. Users can withdrawal their funds from the script at any time with the help of the covenant emulator committee. If the committee is offline, users can spend their funds after a timelock expires.\n\nStaked BTC comes with additional trust assumptions such as slashing conditions. We are reviewing these trust assumptions related to Babylon.",
        },
    ],
};

const babypie = {
    type: exports.Type.Infrastructure,
    slug: "babypie-mbtc",
    title: "Babypie mBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Babypie mBTC is a BTC reserve asset that can be used across various EVM chains.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust an MPC set between Babypie and Cobo to secure funds backing mBTC.",
            content: "An MPC set up between Babypie and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Babypie's claims in their documentation are being executed in practice.\n\n[Source](https://docs.babypiexyz.io/babypies-architecture)",
        },
    ],
};

const badgerebtc = {
    type: exports.Type.Infrastructure,
    slug: "badger-ebtc",
    title: "Badger eBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Badger eBTC is a BTC-denominated asset that enables users to borrow BTC against Lido stETH. Lido stETH is a derivative of ETH, Ethereum's native currency.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Collateralized,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users deposit stETH into a smart contract to receive eBTC",
            content: `To obtain eBTC, users must deposit Lido stETH, an ETH-denominated asset, as collateral to borrow eBTC. If a users's collateralization ratio falls below a certain threshold, they can be liquidated. Collateralization ratios are based on the ETH/BTC price pair.\n\n[Source](https://docs.ebtc.finance/ebtc/protocol-mechanics/liquidations)`
        },
    ],
};

const bedrockbrbtc = {
    type: exports.Type.Infrastructure,
    slug: "bedrock-brbtc",
    title: "Bedrock brBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Bedrock brBTC is BTC-denominated asset backed by other derivative assets.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Bedrock brBTC is backed by various wrapped BTC assets",
            content: "Bedrock brBTC is a derivative asset backed by other wrapped BTC assets. When depositing funds for brBTC, users take on smart contract risks in addition to the custodian risk related to the backing asset.\b\bBedrock brBTC may be backed by [uniBTC](https://www.bitcoinlayers.org/infrastructure/bedrock-unibtc), [FBTS](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [M-BTC](https://www.bitcoinlayers.org/infrastructure/merlin-mbtc), or [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb).\n\n[Source](https://docs.bedrock.technology/multi-asset-liquid-staking/brbtc/introduction)",
        },
    ],
};

const bedrock = {
    type: exports.Type.Infrastructure,
    slug: "bedrock-unibtc",
    title: "Bedrock uniBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: exports.Purpose.LiquidStaking,
    associatedLayers: "Ethereum",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.bedrock.technology",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bedrock.technology",
        },
        {
            text: exports.Site.Explorer,
            url: "https://app.bedrock.technology/statistics",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/Bedrock-Technology",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/Bedrock_DeFi",
        },
    ],
    description: "Bedrock is a liquid staking protocol featuring the uniBTC token.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ], sections: [
        {
            id: "smartcontracts",
            title: "Smart contracts & audits",
            content: [
                {
                    title: "Smart contracts have undergone audits",
                    content: "Users can verify the various implementations of uniBTC’s vault and token contracts on the chains they’re deployed on.\n\nuniBTC has gone through two audits. However, the protocol was exploited after these audits.\n\n⚠️ Audits of smart contracts do not mean exploits are not possible. Users should not deposit more funds than they’re willing to lose.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional considerations",
            content: [
                {
                    title: "Protocol has been exploited",
                    content: "The uniBTC vault contract was previously exploited. The exploit occurred because the uniBTC contract did not specify which token needed to be deposited to mint uniBTC.\n\nAn exploiter deposited 30 ETH to mint 30 uniBTC, and then swapped the uniBTC for wBTC via Uniswap. This saw the exploiter take an advantage between the price of ETH and their newly minted uniBTC which was swapped for wBTC.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Bedrock docs](https://docs.bedrock.technology/)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Wrapped BTC tokens are swapped for BTC. A custodian is responsible for depositing funds into Babylon",
            content: "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into the uniBTC smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens.\n\nTo deposit these tokens on Babylon, the protocol relies on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon.\n\nBedrock has not disclosed who is responsible for securing and staking native BTC on users' behalf.",
        },
    ],
};

const bevmwbtc = {
    type: exports.Type.Infrastructure,
    slug: "bevm-wbtc",
    title: "BEVM WBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "BEVM",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a federation to secure BTC backing BEVM wBTC",
            content: "On BEVM's official bridge, BTC is locked in a bitcoin address controlled by up to 15 trustees. These trustees custody the BTC that backs wBTC on BEVM.\n\nTrustees are selected by BEVM's validator set. Users trust that the trustees will not steal their BTC.",
        },
    ],
};

const binancebtcb = {
    type: exports.Type.Infrastructure,
    slug: "binance-btcb",
    title: "Binance BTCB",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "BNB Smart Chain",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.binance.com",
        },
        {
            text: exports.Site.Explorer,
            url: "https://bscscan.com/token/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/bnb-chain",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/binance",
        },
    ],
    description: "Binance BTCB is a derivative asset native to BNB Smart Chain. BTC backing BTCB is secured by Binance, a centralized exchange.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.OneCustodian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust Binance with managing the BTC backing BTCB",
            content: "When interacting with BTCB, users trust that [Binance](https://www.binance.com/en), a centralized custodian, will safely custody the BTC backing BTCB. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their BTCB tokens. They also trust that Binance will effectively manage the BTC and not lose access to it. If the BTC backing BTCB, BTCB tokens could become effectively worthless.\n\nUsers trust Binance's reputation as an institutional provider when interacting with BTCB.",
        },
    ],
};

const bitcoinos = {
    type: exports.Type.Infrastructure,
    slug: "bitcoinos",
    title: "BitcoinOS",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Announced,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Merlin, Cardano, and more",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.bitcoinos.build/",
        },
        {
            text: exports.Site.Docs,
            url: "https://bitcoinos-technical-documentatio.gitbook.io/bitcoinos",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://cdn.prod.website-files.com/661e3b1622f7c56970b07a4c/662a7a89ce097389c876db57_BitSNARK__Grail.pdf",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/bitsnark/bitsnark-lib",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/BTC_OS",
        },
    ],
    description: "BitcoinOS is building a network of rollup-style blockchains on top of BitSNARK and Grail, mechanisms to verify validity proofs and construct a two-way peg with Bitcoin.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const wbtc = {
    type: exports.Type.Infrastructure,
    slug: "bitgo-wbtc",
    title: "BitGo wBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Ethereum, Base, and more",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://wbtc.network",
        },
        {
            text: exports.Site.Explorer,
            url: "https://wbtc.network/dashboard/order-book",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/WrappedBTC",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/WrappedBTC",
        },
    ],
    description: "wBTC is a wrapped version of bitcoin that lives on EVM-compatible networks. wBTC is backed 1:1 with bitcoin, with the bitcoin backing wBTC custodied by three custodial providers dispersed across different geographic locations.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Trust assumptions related to wBTC change per the chain it is deployed on",
                    content: "Trust assumptions related to wBTC change across each system it is deployed on. For example, the wBTC gateway between Ethereum and Base is managed by a 1/2 multisig. This is a stronger trust assumption when compared to using wBTC on Ethereum. When interacting with wBTC across various chains, users should be aware that there may be additional trust assumptions.\n\n🔬 We are currently researching wBTC trust assumptions across the chains its deployed on.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Bitcoin Layers' comparison of tBTC, wBTC, and cbBTC](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.Reputation,
            score: 0,
            tier: "",
            title: "Users trust permissioned entities with the custody of their BTC.",
            content: "The Bitcoin backing wBTC is custodied by permissioned entities. BitGo and BiT Global are the participants responsible with custodying the funds backing wBTC across the various networks it's deployed on.\n\nThe wallets holding the bitcoin backing wBTC are dispersed between Hong Kong, Singapore, and the United States.",
        },
        {
            category: exports.AssessmentCategory.Signing,
            score: 0,
            tier: "",
            title: "Transactions signed via multi-signature wallets",
            content: "wBTC signing is done via multi-signature wallets. The signing privileges for these wallets are distributed between BitGo and BiT Global.",
        },
        {
            category: exports.AssessmentCategory.KeyStorage,
            score: 0,
            tier: "",
            title: "Keys reportedly stored in air-gapped HSMs",
            content: "[Per BitGo's docs](https://developers.bitgo.com/guides/get-started/concepts/key-storage), the keys for wallets (storing BTC backing wBTC) are stored via air-gapped HSMs. Users trust that the operators of these HSMs will not attempt to extract the relevant private keys, and prevent external malicious actors from doing so.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Smart contracts upgradeable by wBTC DAO",
            content: "wBTC's Ethereum ERC-20 contract has no blacklist functionality, meaning that the contract cannot censor individual users from transferring wBTC. The contract is upgradeable by the wBTC DAO. The DAO can also freeze the contract entirely.\n\nThe wBTC DAO is made up of 13 organizations. It takes 8 of them to upgrade or freeze the contract.",
        },
        {
            category: exports.AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "wBTC is a custodial system. Users trust the custodians to ensure wBTC remains backed 1:1",
            content: "Users trust a number of entities when interacting with wBTC. They primarily trust that the custodian providers will ensure that that wBTC remains backed with BTC. They also trust the wBTC DAO to not maliciously upgrade or freeze the wBTC contract.",
        },
    ],
};

const bitlayerwbtc = {
    type: exports.Type.Infrastructure,
    slug: "bitlayer-wbtc",
    title: "Bitlayer WBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Bitlayer",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Bitlayer wBTC is the gas token for the Bitlayer sidechain. It is backed by BTC stored in a MPC protocol.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a federation of signers with the custody of BTC backing wBTC",
            content: "Bitlayer's current BTC bridge is a federated two-way peg with institutional signers. Bitlayer is working with multiple MPC custody platforms.\n\nUsers do not custody bitcoin assets backing tokens on Bitlayer.\n\nUsers trust Bitlayer's claims in their documentation are being executed in practice.\n\n[Source](https://docs.bitlayer.org/docs/Learn/BitlayerNetwork/Bridges) ",
        },
    ],
};

const boolbbtc = {
    type: exports.Type.Infrastructure,
    slug: "bool-bbtc",
    title: "Bool bBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Fractal, Bsquared Network, BitLayer, SatoshiVM",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://bool.network",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bool.network",
        },
        {
            text: exports.Site.Explorer,
            url: "https://beta-testnet.boolscan.com",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/boolnetwork",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/bool_official",
        },
    ],
    description: "Bool Network is an infrastructure provider currently managing a wrapped BTC reserve asset, bBTC, for a number of Bitcoin scaling protocols. The Bitcoin wallets it manages are secured by an MPC Protocol.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust the Bool Network and various layers to implement secure custody practices for BTC backing bBTC",
            content: "The Bool Network has not disclosed its custody mechanism for BTC backing bBTC across the various networks its deployed on. In its documentation, it references a custody mechanism that would see an approved entity be able to set up a 2-2 multisig between Bool and the entity.\n\nIt is possible this is the set up for bBTC custody across the chains its deployed on. In any case, users trust that Bool Network and the development teams behind specific networks have set up secure custody practices.\n\n[Source](https://docs.bool.network/interoperability-protocol/self-custody/channels)",
        },
    ],
};

const bvm = {
    type: exports.Type.Infrastructure,
    slug: "bvm",
    title: "BVM",
    entityType: exports.EntityType.RaaS,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "BVM",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://bvm.network",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.bvm.network",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://docs.bvm.network",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/trustlesscomputer",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/BVMnetwork",
        },
    ],
    description: "BVM is a Rollup-as-a-Service provider. It supports the deployment of zkSync Era blockchains on top Supersonic, a blockchain the BVM team manages.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const cashu = {
    type: exports.Type.Infrastructure,
    slug: "cashu",
    title: "Cashu",
    entityType: exports.EntityType.ChaumianEcashProtocol,
    entityCategory: exports.EntityCategory.More,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: exports.Purpose.EcashMint,
    associatedLayers: "lightning",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://cashu.space",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.cashu.space",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/cashubtc",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/cashubtc",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/CashuBTC",
        },
    ],
    description: "An Ecash system consists of two parts, the mint and the Ecash wallet that stores digital bearer tokens. There are [several libraries](https://docs.cashu.space/libraries) that allow developers to build their respective services. Using blind signatures assures users’ privacy towards the mint when transacting with Ecash tokens.",
    riskSummary: [
        {
            title: exports.OtherRiskSummarySnippet.EcashCustodyTitle,
            content: exports.OtherRiskSummarySnippet.CashuCustody,
        },
        {
            title: "Users must select which mint custodies their funds",
            content: exports.OtherRiskSummarySnippet.VariousMints,
        },
        {
            title: "Tokens can be debased",
            content: exports.OtherRiskSummarySnippet.EcashDebasementRisk,
        },
    ],
    sections: [
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Chaumian blinding",
                    content: "Chaumian blinding works by allowing a message to be signed without revealing its content to the signer itself. The process involves a blinding factor that obscures the message. The signed blinded message is unblinded by the creator of the message using the original blinding factor.",
                },
                {
                    title: "Mint module",
                    content: "In the context of Cashu, a mint is a trusted entity that is responsible for issuing (“minting”) and redeeming (“melting”) Ecash tokens. Those tokens act as IOUs and are backed by BTC. Having mints hold users’ funds, requires the user to trust the mint to redeem their Ecash when they wish to convert back to BTC. Peg-ins and peg-outs to and from a Cashu mint happen through the Lightning Network. The LN infrastructure is run by the mints themselves or by public and untrusted Lightning gateways (Cashu wallets are not LN wallets). The blinding mechanism ensures that the mint operator remains unaware of users’ account balance or transaction data. Every entity running a Lightning node can run a mint using one of the [available implementations](https://docs.cashu.space/mints). The easiest way to do so is via [Nutshell](https://github.com/cashubtc/nutshell).",
                },
                {
                    title: "Token Issuance",
                    content: "While Ecash itself is an IOU from the mint towards the user, Ecash tokens itself are bearer instruments, which means that the holder of the bearer instrument - in this case a [mere data string](https://www.youtube.com/watch?v=xfYmwc-gnK8&t=379s) - is presumed to be the owner of the asset. To receive Cashu tokens, the user has two choices: 1. The user can pay a Lightning invoice issued by its [mint of choice](https://bitcoinmints.com/), which hands out the Ecash tokens in return. 2. The user receives Ecash from another user. Each mint issues their own tokens.",
                },
                {
                    title: "Token Transfer",
                    content: "The mentioned data string (aka Cashu token) can be sent via any Cashu-enabled wallet (even [offline](https://x.com/callebtc/status/1796071406624465113)) or via any messaging-supportive medium (e.g. telegram, nostr protocol, .., even [radio](https://x.com/jurbed/status/1748485334210396506)). To prevent double-spending, the recipient needs to immediately swap its token for a new one with the help of the respective mint. However, if it’s a [P2PK locked token](https://github.com/cashubtc/nuts/blob/main/11.md), the sender can’t double-spend; the receiver can even be offline and swap at a later point in time. Using a Cashu wallet, and the sender and recipient are using the same mint (a user can use as many mints as desired), results in a seamless process where the mint simply melts the senders’ token and mints a new one for the recipient. Inter-mint transfers are facilitated through the “[Multimint Swap functionality](https://docs.cashu.space/faq#mints)”, which operates via Lightning invoices under the hood. A Lightning MPP (Multi-Path Payment) equivalent, called “Multinut Payments” has [recently been implemented](https://x.com/callebtc/status/1793554488806248839) in Cashu via [NUT15](https://github.com/cashubtc/nuts/blob/main/15.md). Cashu also offers [Cashu addresses](https://github.com/cashubtc/npubcash-server), an LNURL service.",
                },
                {
                    title: "Wallets",
                    content: "Cashu wallets manage Ecash transactions. Unlike traditional Lightning wallets, Cashu wallets do not operate a Lightning node. Instead, they leverage the Cashu protocol to interact with Cashu mints, which handle the Lightning infrastructure and custody users’ funds. This setup requires users to trust the mint with the redemption of their Ecash back to Lightning. [Numerous Cashu wallets](https://docs.cashu.space/wallets) are available: native app wallets, web wallets and headless CLI wallets. They all adhere to the mandatory [Cashu NUTs](https://github.com/cashubtc/nuts) to ensure standardization and security. They differ for example in Tor support, nostr integration and add different of the optional NUT specifications. For easy integration of Cashu payments into any application, a [CDK](https://github.com/cashubtc/cdk) is being developed. [Cashu-ts](https://github.com/cashubtc/cashu-ts) is the most popular wallet library to date.",
                },
                {
                    title: "Backups",
                    content: "Cashu tokens are bearer asset tokens, meaning the data stored in the wallet (browser local storage) represents the actual money. Consequently, if this storage gets wiped, funds will be lost. Backups all support the same seed phrase mechanism. [Cashu.me](http://Cashu.me) has the additional option to exported the backup and [Minibits](https://github.com/minibits-cash/minibits_wallet) offers a local append-only backup of all ecash in a database separate from the wallet storage. To move your Cashu tokens to another wallet implementation, you can make a wallet-to-wallet transfer or melt and re-mint via LN.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Enhanced user privacy",
                    content: "Cashu aims at providing a better custodial experience by [enhancing privacy](https://maxmoney.substack.com/p/ecash-for-better-bitcoin-privacy) and therefore protecting users’ data: the custodian would not - in contrast to the current state - learn about users’ account balances, nor about their transaction history or spending habits.",
                },
                {
                    title: "Programmable Ecash",
                    content: "The token can furthermore carry additional spending restrictions ([NUT11](https://github.com/cashubtc/nuts/blob/main/11.md)) by using P2PK. This enables time-locked payments, multi-sig transactions or conditional payments.",
                },
                {
                    title: "Submarine nuts (Submarine Swap equivalent)",
                    content: "Ecash-based HTLCs can be atomically linked to Ecash [HTLCs](https://x.com/callebtc/status/1742948259050500561). This might enable a submarine swap-equivalent (BTC-LN), called “[submarine nuts](https://x.com/callebtc/status/1704915759808303542)” (Cashu <--> LN), meaning LN nodes can assist one another in receiving funds even if they lack any channels or inbound liquidity.",
                },
                {
                    title: "Cashu via nostr",
                    content: "Cashu tokens can be [sent](https://x.com/CashuBTC/status/1616063616150634498) via [nostr](https://nostr.com/), an open protocol that enables a global social network. The message is an encrypted [NIP-04 DM](https://x.com/CashuBTC/status/1607423255681318914). Nostr Wallet Connect (NWC) will further enable users to zap other users with [Cashu tokens](https://x.com/callebtc/status/1787519215051715016).",
                },
                {
                    title: "Stablenuts: USD Ecash, backed by BTC (Stablesats equivalent)",
                    content: "Stablenuts [was tested](https://x.com/CashuBTC/status/1711676159639929135) as a Cashu USD mint supported by a Strike Lightning BTC wallet. It enables the conversion of Lightning BTC to Ecash USD and back to Lightning BTC, potentially running on DLCs, USDT, LNMarkets, Stablesats, or any fiat-stable Bitcoin rails. [Boardwalk introduced](https://x.com/makeprisms/status/1790423585888280756) the first dollar-based Cashu wallet built on Bitcoin and connected to nostr shortly after.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Privacy chokepoints (user-inflicted)",
                    content: "While Cashu token transfers provide the transacting entity with an incomparable degree of privacy, there’s some chokepoints to bear in mind: not using a VPN/Tor/mixnet, etc, when interacting with the mint, may leak network metadata. The mint might collect network data such as access time, IP addresses and or other metadata users might leak information when melting their tokens with the mint and receiving Bitcoin via LN in return. The privacy characteristics of a recipient on LN apply in this case.",
                },
                {
                    title: "KYC/AML integrations possible",
                    content: "While the mint stays unaware of its user base in the current implementation, [an optional authentication protocol can be added](https://x.com/CashuBTC/status/1791001643019809146) to the protocol that allows mints to control access to its services. This authentication protocol could enable KYC/AML integration with Ecash.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Main Cashu website](https://cashu.space/)\n[Curated resource section](https://docs.cashu.space/resources/learn)\n[David Chaum - Blind signatures for untraceable payments](https://chaum.com/wp-content/uploads/2022/01/Chaum-blind-signatures.pdf)\n[Proof of Liabilities scheme](https://gist.github.com/callebtc/ed5228d1d8cbaade0104db5d1cf63939)\n[Cashu NUTs (Notation, Usage, and Terminology) specification](https://github.com/cashubtc/nuts)\n[Video explainer by Rijndael](https://www.youtube.com/watch?v=xfYmwc-gnK8&t=379s)\n[Cashu FAQ](https://docs.cashu.space/faq#general-safety-and-privacy-questions)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users funds are managed by a single entity",
            content: "A Cashu mint is operated by a single entity that custodies users’ funds in return for issuing bearer Ecash tokens. If the mint gets hacked, becomes unresponsive or turns malicious, token redemption is at risk.",
        },
    ],
};

const celestia = {
    type: exports.Type.Infrastructure,
    slug: "celestia",
    title: "Celestia",
    entityType: exports.EntityType.DataAvailability,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "TIA",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://celestia.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.celestia.org",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/celestiaorg",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/celestiaorg",
        },
        {
            text: exports.Site.GitHub,
            url: "https://x.com/CelestiaOrg/",
        },
    ],
    description: "Celestia is a data availability layer. Scaling protocols that want to save costs on data availability can integrate with Celestia for improved performance with some additional tradeoffs. Celestia is based on CometBFT and additionally supports Data Availability Sampling (DAS), a mechanism by which anyone running a light client can verify that the Celestia network is making rollup state data available.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const chakra = {
    type: exports.Type.Infrastructure,
    slug: "chakra-stbtc",
    title: "Chakra stBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    riskSummary: [
        {
            title: "This wrapper is under review",
            content: "We are currently reviewing this two-way peg implementation."
        },
    ],
    description: "Chakra stBTC is a BTC wrapped asset. It is under review.",
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "This peg is under review.",
            content: "This peg is under review.",
        },
    ],
};

const cbbtc = {
    type: exports.Type.Infrastructure,
    slug: "coinbase-cbbtc",
    title: "Coinbase cbBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Base, Ethereum",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.coinbase.com/cbbtc",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.base.org",
        },
        {
            text: exports.Site.Explorer,
            url: "https://basescan.org/token/0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/base-org",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/base",
        },
    ],
    description: "cbBTC is a tokenized form of BTC. It is an ERC-20 token that is available on Ethereum and Base. It is backed 1:1 by BTC. The BTC backing cbBTC is custodied by Coinbase, a centralized custodian. Coinbase also has unilateral control of the token contracts related to cbBTC.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.OneCustodian,
        },
    ],
    sections: [
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Bitcoin Layers comparison of tBTC, wBTC, and cbBTC](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust Coinbase with managing the BTC backing cbBTC",
            content: "When interacting with cbBTC, users trust that Coinbase, a centralized custodian, will safely custody the BTC backing cbBTC. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their cbBTC tokens. They also trust that Coinbase will effectively manage the BTC and not lose access to it. If the BTC backing cbBTC was stolen or inaccessible, cbBTC tokens could become effectively worthless.\n\nUsers trust Coinbase's reputation as an institutional provider when interacting with cbBTC.",
        },
        {
            category: exports.AssessmentCategory.Signing,
            score: 0,
            tier: "",
            title: "Exact signing mechanism unverifiable",
            content: "Coinbase has not disclosed the exact signing mechanism for bitcoin wallets holding and storing BTC backing cbBTC. In the [cbBTC whitepaper](https://coinbase.bynder.com/m/1303c2f4d78fc966/original/cbBTC-White-Paper.pdf), they share that a single person is unable to access any wallet's private key in plain text, meaning that a group of Coinbase employees must work together to decrypt relevant private keys for wallets associated with cbBTC.\n\nWhile unlikely, a group of Coinbase employees could collude to sign malicious transactions related to bitcoin wallets storing cbBTC.",
        },
        {
            category: exports.AssessmentCategory.KeyStorage,
            score: 0,
            tier: "",
            title: "Follows Coinbase's key management practices",
            content: "In Coinbase's [user agreement](https://www.coinbase.com/legal/user_agreement/united_states) mentions that they securely store private keys associated to users' assets on their behalf. In the [cbBTC whitepaper](https://coinbase.bynder.com/m/1303c2f4d78fc966/original/cbBTC-White-Paper.pdf), they state that these same custodial practices are used to secure BTC backing cbBTC.\n\nIn the whitepaper, they also mention that private keys are stored across facilities in the United States and Europe.\n\nWhile Coinbase is a reputable custodian, users do not hold the keys associated to BTC backing cbBTC, and trust Coinbase to follow sound custody practices.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "The system is completely centralized and not resistant to censorship",
            content: "Both cbBTC smart contracts (on Base and Ethereum) are instantly upgradeable by Coinbase. Coinbase is a US public company. Coinbase has the authority to can censor specific users from transacting with cbBTC. They can also pause the token entirely, effectively shutting down any user who wishes to transact with cbBTC.\n\nUsers trust that Coinbase will not censor their use of cbBTC. You can find the relevant token contracts",
        },
        {
            category: exports.AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "cbBTC is a custodial solution. Users trust the custodian to not misappropriate funds backing the cbBTC token",
            content: "Both aspects of cbBTC, the ERC-20 token contracts and the BTC backing these tokens, is controlled by a single entity, Coinbase. When using cbBTC, users trust that Coinbase will not censor them individually, pause the entire system, upgrade the token contract maliciously, or misappropriate funds backing cbBTC. Coinbase also has the authority to restrict users from redeeming BTC for the cbBTC.\n\nUsers effectively have no ownership of BTC the asset when using cbBTC. The own an alternative token that they trust will remain backed 1:1 with, and redeemable for, BTC.",
        },
    ],
};

const corecorebtc = {
    type: exports.Type.Infrastructure,
    slug: "core-corebtc",
    title: "Core coreBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Core Chain",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Funds are custodied by a federated signer set, with a number of parties ensuring the honesty of the bridge",
            content: "Users trust various parties in maintaining the honesty of Core’s bridge with Bitcoin. Lockers are the party responsible for securing the bitcoin that backs coreBTC on Core Chain. These actors stake collateral, in the form of Core tokens, in order to participate as a Locker. In the event of maliciously moving bitcoin from the multi-sig, or being unable to fulfill withdrawals, Lockers would be slashed and lose the collateral they posted.\n\nOther parties in the bridge set up are responsible for monitoring the Locker’s activity and initiating the slashing process.",
        },
    ],
};

const cornbtcn = {
    type: exports.Type.Infrastructure,
    slug: "corn-btcn",
    title: "Bitcorn BTCN",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Corn",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "BTCN is a derivative of BTC. It is backed by other BTC derivative assets. It is also the gas token for the Corn network.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: "Various reserve assets used",
            content: exports.PegRiskSummarySnippet.MultipleAssets,
        },
    ],
    sections: [
        {
            id: "contracts",
            title: "Supporting contracts & permissions",
            content: [
                {
                    content: "[This is the implementation of the BTCN token contract on Ethereum](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6).",
                },
                {
                    content: "[This is the ERC20Bridge contract that escrows BTCN which is minted on Corn](https://etherscan.io/address/0x7E31f112d340a4D0cB0e4bD82f2853089d1bF10C#readProxyContract).",
                },
                {
                    content: "[This is the implementation of the BTCN token contract on Corn](https://maizenet-explorer.usecorn.com/address/0x386E7A3a0c0919c9d53c3b04FF67E73Ff9e45Fb6).",
                },
                {
                    content: "[This is the owner of the BTCN token contract](https://etherscan.io/address/0x515C7d8Fcb950f8b030ac08C994b37b4b8F3F7B5#code). This Authority contract is controlled by a [2/4 multisig](https://etherscan.io/address/0xcff1ad9f09b32252171207e8525c90b18d4e2c7d#code). ",
                },
                {
                    content: "[This is the vault contract securing wBTC that partially backs the BTCN token on Corn](https://etherscan.io/address/0x00943b11764176c3a8323aefcbd6fe70cfb6272d#readProxyContract).",
                },
                {
                    content: "[This is the vault contract securing cbBTC that partially backs the BTCN token on Corn](https://etherscan.io/address/0x957c9dc25de6b8e46a7fa0d081ba749dd005b54f).",
                },
            ],
        },
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "Users trust BTCN contract owners & the various derivative assets supporting its 1:1 peg with BTC",
            content: "BTCN is a BTC derivative asset that is backed by other BTC derivative assets. wBTC and cbBTC are currently the two approved assets that back BTCN. BTCN, that is distributed to users from the Bitcorn contract on Corn, is currently backed by wBTC and cbBTC locked in respective vault contracts on Ethereum.\n\nUsers trust the owner of the BTCN contract to not implement a malicious contract upgrade. They additionally trust the owner of the Bitcorn contract on Corn to not issue more BTCN than what is locked in the vault contract on Ethereum.\n\nUsers also trust that [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc) and [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc) maintain a 1:1 peg with BTC so BTCN can also maintain a 1:1 peg.",
        },
    ],
};

const cygnus = {
    type: exports.Type.Infrastructure,
    slug: "cygnus",
    title: "Cygnus",
    entityType: exports.EntityType.Restaking,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Bsquared Network",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://cygnus.finance/",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://explorer.bsquared.network",
        // },
        {
            text: exports.Site.Docs,
            url: "https://wiki.cygnus.finance/",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/CygnusFi",
        },
    ],
    description: "Under Review",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const espresso = {
    type: exports.Type.Infrastructure,
    slug: "espresso",
    title: "Espresso",
    entityType: exports.EntityType.SequencingDA,
    live: exports.LiveStatus.Proposed,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://espressosys.com",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.espressosys.com",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/EspressoSystems",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/espressosystems",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/espressosys",
        },
    ],
    description: "Espresso is a shared sequencer marketplace. It enables rollup-style blockchains to sell their sequencing rights to a marketplace of sequencers who bid on the rights to build rollup blocks. It additionally runs a consensus protocol that provides rollups, participating in Espresso, with more secure preconfirmations.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const fedimint = {
    type: exports.Type.Infrastructure,
    slug: "fedimint",
    title: "Fedimint",
    entityType: exports.EntityType.ChaumianEcashProtocol,
    entityCategory: exports.EntityCategory.More,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: exports.Purpose.EcashMint,
    notice: undefined,
    associatedLayers: "lightning",
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://fedimint.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://fedimint.org/docs/intro",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/fedimint",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/fedimint",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/fedimint",
        },
    ],
    description: "Fedimint is a module-based open source framework for building federated applications, which can be collaboratively managed by a group of trusted entities. The main application that is in production today is an open source federated Ecash mint. The construction of a Fedimint sees users lock their BTC into a federation's multi-sig, and receive a bearer Ecash IOU in return. The concept improves on the currently predominant form of third party custody, as the user has a socially known and trusted entity guarding their BTC; a concept that is termed “second party custody”.",
    riskSummary: [
        {
            title: exports.OtherRiskSummarySnippet.EcashCustodyTitle,
            content: exports.OtherRiskSummarySnippet.FedimintCustody,
        },
        {
            title: "Users must select which mint custodies their funds",
            content: exports.OtherRiskSummarySnippet.VariousMints,
        },
        {
            title: "Tokens can be debased",
            content: exports.OtherRiskSummarySnippet.EcashDebasementRisk,
        }
    ],
    sections: [
        {
            id: "coretechnology",
            title: "Core Technology Components",
            content: [
                {
                    title: "Chaumian Ecash",
                    content: "Chaumian Ecash enables a Fedimint to create and redeem IOU notes that represent claims on bitcoin. Ecash uses blinded signatures. This shields users’ balance towards the mint and ensures the privacy of transactions.",
                },
                {
                    title: "Federations",
                    content: "Fedimint categorizes as a “federated Chaumian Mint”, jointly operated by multiple trusted entities(referred to as guardians) via a multisig setup.",
                },
                {
                    title: "Lightning Swaps",
                    content: "Fedimints enable Lightning interoperability through LN gateways. A guardian or even any user of a federation can run a lightning node and pay and accept lightning invoices on behalf of users in the federation. This is particularly useful as Fedimint users don't need to be online to accept lightning payments.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Private Payments",
                    content: "Fedimints enable anonymous payments through the use of blinded signatures. The mint is unaware of transactions made by the users or their respective account balance. The mint can only establish a link to a users’ onchain address when pegging in and out of the mint.",
                },
                {
                    title: "Second Party Custody",
                    content: "Fedimints enable users to deposit their Bitcoin with a federation of trusted “second” parties” (e.g. family member or community leader). Federated community custody may be preferred by some users over the prevailing third-party custodial model.",
                },
                {
                    title: "Low fee transactions",
                    content: "Fedimints provide low transaction fees for users, as a mint is a central entity and transactions do not require Bitcoin blockspace. Fund deposits can either be done via an onchain deposit or via the Lightning Network.",
                },
                {
                    title: "General Purpose Smart Contracts",
                    content: "Fedimints can support any arbitrary computation. Federations supporting application modules like borrowing and lending protocols, and stablecoins, are possible.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Fedimint documentation site covering technological components and use cases.](https://fedimint.org)\n[Fedi offers a Fedimint wallet and shows how a Fedimint would work in practice.](https://www.fedi.xyz/product)\n[Fedimint's FAQs answer frequently asked questions.](https://fedimint.org/docs/category/frequently-asked-questions)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users funds are managed by a set of guardians",
            content: "A Fedimint is operated by a number of guardians that custody users’ funds in return for issuing bearer Ecash tokens. If the mint gets hacked, becomes unresponsive or turns malicious, token redemption is at risk.",
        },
    ],
};

const fire = {
    type: exports.Type.Infrastructure,
    slug: "firebitcoin-fbtc",
    title: "Fire Bitcoin FBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: exports.Purpose.General,
    associatedLayers: "EVM-based chains",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://fbtc.com/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.fbtc.com",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://docs.fbtc.com/",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/fbtc-xyz",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/IgnitionFBTC",
        },
    ],
    description: "Ignitions's FBTC is a BTC-backed reserve asset that can be used across various EVM chains.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust an MPC set between Ignition and Cobo to secure funds backing mBTC.",
            content: "An MPC set up between Ignition and Cobo secures the BTC backing mBTC. Cobo is an institutional custodian provider. Users trust Ignition's claims in their documentation are being executed in practice.\n\n[Source](https://medium.com/@IgnitionFBTC/fbtc-announces-plans-to-launch-to-help-liberate-the-growth-power-of-btc-8a5957406b81)",
        },
    ],
};

const hemihemibtc = {
    type: exports.Type.Infrastructure,
    slug: "hemi-hemibtc",
    title: "Hemi BTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "HemiBTC is a wrapped BTC asset native to the Hemi blockchain, an Ethereum rollup.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
        {
            title: exports.PegRiskSummarySnippet.UnkownSignersTitle,
            content: exports.PegRiskSummarySnippet.UnkownSigners,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "The signers securing BTC backing HemiBTC have not been officially disclosed",
            content: exports.TokenSnippet.HemiBTC,
        },
    ],
};

const ibtcnetworkibtc = {
    type: exports.Type.Infrastructure,
    slug: "ibtcnetwork-ibtc",
    title: "iBTC Network iBTC", //formerly DLC Link dlcBTC
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.ibtc.network/",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.ibtc.network/ibtc-documentation",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/dlc-link",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/dlc-link",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/ibtcnetwork",
        },
    ],
    description: "iBTC is a BTC wrapped asset. It is under review.",
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Institutions lock their funds into a 2-2 multisig with iBTC's attestor network",
            content: "BTC backing iBTC is secured by numerous 2-2 multisigs between institutions and iBTC's attestor network. iBTC network's attestor network has a 2/3s majority signing threshold and uses FROST to produce valid signatures to co-sign movement of funds related to iBTC BTC multisigs.\n\nUsers who acquire iBTC in onchains market trust that their tokens will remain backed by institutions supplying liquidity.",
        },
    ],
};

const icpckbtc = {
    type: exports.Type.Infrastructure,
    slug: "internetcomputer-ckbtc",
    title: "ICP ckBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Internet Computer",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "ckBTC is a BTC-backed reserve asset that can be leveraged on the ICP network.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: `${exports.PegRiskSummarySnippet.Federation} ICP governance elects the validators of the subnet repsonsible for managing the ckBTC two-way peg.`
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Funds are secured by signer set selected by ICP consensus",
            content: "Users who deposit funds into ckBTC trust a set of operators, who are elected via ICP governance, with the custody of their bitcoin. The operators of the ‘pzp6e…’ subnet manage the “ckBTC” smart contract module, which is responsible for minting, securing and burning bitcoin-backed tokens on the ICP sidechain.\n\nThis smart contract is a part of a subnet with 34 node operators. These operators have undergone a KYB process to ICP governance and are publicly known.",
        },
    ],
};

const kinza = {
    type: exports.Type.Infrastructure,
    slug: "kinza-kbtc",
    title: "Kinza kBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Kinza kBTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "BTC backing kBTC is collaboratively secured by Cobo, Kinza, and Coinover",
            content: "Kinza's kBTC is backed by BTC held in custodian wallets. These wallets are secured by an MPC scheme where Kinza, Cobo, and Coinover participate as signers. Cobo and Coinover are institutional custody providers.\n\n[Source](https://docs.kinza.finance/kinza-bitcoin-staking/bitcoin-staking/technical-details)",
        },
    ],
};

const kbtc = {
    type: exports.Type.Infrastructure,
    slug: "kraken-kbtc",
    title: "Kraken kBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Ethereum, Optimism",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.kraken.com",
        },
        {
            text: exports.Site.Docs,
            url: "https://www.kraken.com/kbtc",
        },
        {
            text: exports.Site.Explorer,
            url: "https://etherscan.io/token/0x73e0c0d45e048d25fc26fa3159b0aa04bfa4db98",
        },
        // {
        //     text: Site.GitHub,
        //     url: "https://www.kraken.com",
        // },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/krakenfx",
        },
    ],
    description: "Kraken kBTC is a BTC-backed reserve asset that can be used on Ethereum or Optimism",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.OneCustodian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust Kraken to secure funds backing kBTC",
            content: "Kraken, a centralized custodian, secures the BTC backing kBTC. The funds backing kBTC are held at Kraken Financial, a Wyoming-chartered SPDI (Special Purpose Depository Institution).\n\nUsers trust Kraken to implement secure custody practices for kBTC reserve assets.",
        },
    ],
};

const layerbankbtc = {
    type: exports.Type.Infrastructure,
    slug: "layerbank-btc",
    title: "Layerbank BTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Bsquared Network",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Layerbank BTC is a BTC wrapped asset. It is under review.",
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "This peg is under review.",
            content: "This peg is under review.",
        },
    ],
};

const layerbankubtc = {
    type: exports.Type.Infrastructure,
    slug: "layerbank-ubtc",
    title: "Layerbank uBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Bsquared Network",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const librepbtc = {
    type: exports.Type.Infrastructure,
    slug: "libre-pbtc",
    title: "Libre pBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Libre",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Libre's bridge relies on a third party provider. Signers are permissioned nodes from the pNetwork",
            content: "BTC users who deposit funds onto Libre do so via the pNetwork bridge. A limited group of signers operate the bridge.\n\n⚠️ The pNetwork bridge has historically seen two exploits occur. One of those exploits involved BTC-backed tokens.\n\npBTC deposits are no longer being accepted. Users have to manually withdraw funds.\n\n[Source](https://docs.libre.org/libre-docs/cross-chain-interoperability/bitcoin-mainnet)",
        },
    ],
};

const liquidlbtc = {
    type: exports.Type.Infrastructure,
    slug: "liquid-lbtc",
    title: "Liquid L-BTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Liquid",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Liquid LBTC is the native token for the Liquid sidechain. The BTC backing LBTC is secured by an 11/15 federation.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a federation with custody of their BTC",
            content: "The BTC that backs L-BTC is held in a 11-15 multi-sig wallet where 11 (⅔ + 1) of the signers would need to be compromised in order to steal the BTC. Signers additionally operate HSM hardware to secure private keys used for signing.\n\nNot all of the signers of this federation are publicly known.\n\nUsers trust Liquid to have a signer set that is globally distributed.\n\n[source](https://docs.liquid.net/docs/technical-overview)",
        },
    ],
};

const lombard = {
    type: exports.Type.Infrastructure,
    slug: "lombard-lbtc",
    title: "Lombard LBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "LBTC",
    purpose: exports.Purpose.Staking,
    associatedLayers: "Ethereum",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.lombard.finance",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.lombard.finance",
        },
        {
            text: exports.Site.Explorer,
            url: "https://etherscan.io/token/0x8236a87084f8b84306f72007f36f2618a5634494",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/lombard-finance",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/Lombard_Finance",
        },
    ],
    description: "Lombard offer a mechanism that enables users to deposit BTC and receive a wrapped version of BTC that represents BTC staked into the Babylon protocol.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "The protocol provides a public proof-of-reserve",
                    content: "The project provides active proof-of-reserves. The proof-of-reserves can be seen [here](https://www.lombard.finance/por/). The proof-of-reserves is provided through an integration with [Redstone](https://docs.redstone.finance/docs/get-started/price-feeds/types-of-feeds/lombard/).\n\n⚠️ We have not reviewed the codebase behind this PoR integration.",
                },
                {
                    title: "External operators are disclosed",
                    content: `${exports.BTCWrapperTransparency.OperatorsDisclosedYes}\n\nOperators undergo KYB checks and must be approved by members of the consortium network before entering the protocol.`,
                },
                {
                    title: "Redemptions enabled and documented",
                    content: exports.BTCWrapperTransparency.RedemptionsYes,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: exports.BTCWrapperTransparency.ContractsYes,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "User keys managed in CubeSigner",
                    content: "When users deposit their funds into the Lombard protocol, the security consortium creates a BTC address for their deposit. This address stores the funds backing their LTBC holdings on the destination chain.\n\nThe keys for this address are managed in a CubeSigner device. CubeSigner is an HSM service that stores users’ keys in secure hardware. It additionally restricts spending actions to staking-specific transactions.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Reserve assets",
                    content: "Lombard LBTC is primarily backed by native BTC.\n\nOn BNB Smart Chain, it is backed by BTCB.",
                },
                {
                    title: "Blacklist monitor on deposits",
                    content: "Lombard scans incoming deposit transactions against a sanctions database. If a user with a blacklisted address attempts to deposit funds into Lombard, their mint request will be declined.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Lombard's documentation site](https://docs.gobob.xyz/docs/learn/security/privileged-roles)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a network of custodians in the Lombard protocol. Signers under review",
            content: "BTC backing Lombard LBTC is secured by a network of [custodians](https://etherscan.io/address/0xdad58DfA5c1a7a34419AFdBE1f0d610efeea95E4#readProxyContract) participating in Lombard’s security consortium. The security consortium participates in a CometBFT consensus protocol.\n\nAdding and removing validators from this consortium is handled by the current validator set within a given epoch. When a user deposits funds into the Lombard protocol, they are given a specific CubeSigner address to manage their deposits and staking transactions.\n\nWe are reviewing the signer set for the Lombard Security Consortium.",
        },
        {
            category: exports.AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Issuing LBTC tokens requires consortium & bascule approval",
            content: "Issuing new LBTC tokens requires approval from the consortium validator set and Bascule bridge. If both of these parties approve a specific batch of mint requests, new LBTC tokens will be created.\n\nThe LBTC token contract owner can grant and revoke minting & burning permissions for actors who facilitate cross-chain transfers (e.g. Chainlink CCIP).",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Pause function on respective contracts",
            content: "Token contracts have a pause function implemented. The pauser role can pause transfers of LBTC unilaterally. The pauser role is held by a 2/8 [GnosisSafe](https://etherscan.io/address/0x32B8AE4eE1401E726aF0BC154D2165D0592584c4#readProxyContract).",
        },
        {
            category: exports.AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "Contracts are upgradeable after 1 hour delay. A centralized party can upgrade contracts",
            content: "Contracts are upgradeable after a 1 hour delay. Contract upgrades can be proposed and executed by a ⅗ [GnosisSafe](https://etherscan.io/address/0x251a604E8E8f6906d60f8dedC5aAeb8CD38F4892#readProxyContract).",
        },
    ],
};

const lorenzo = {
    type: exports.Type.Infrastructure,
    slug: "lorenzo-stbtc",
    title: "Lorenzo stBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://lorenzo-protocol.xyz",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.lorenzo-protocol.xyz",
        },
        {
            text: exports.Site.Explorer,
            url: "https://scan.lorenzo-protocol.xyz",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/Lorenzo-Protocol",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/LorenzoProtocol",
        },
    ],
    description: "Lorenzo stBTC is a liquid staking token.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust Lorenzo as the staking agent who secures, and stakes, native BTC backing stBTC. Cobo, Ceffu, and ChainUp have also been mentioned to support the protocol",
            content: "Users trust Lorenzo, the operators of Lorenzo stBTC, to secure and stake native BTC that backs stBTC. It has also been stated in Lorenzo's [marketing materials](https://medium.com/@lorenzoprotocol/lorenzo-allies-with-cobo-ceffu-and-chainup-e0d824c4744d) that custodian providers Cobo, Ceffu, and Chainup are participating in Lorenzo's protocol as custody providers, but their documentation does not claim this.\n\nUsers trust Lorenzo's claims in their documentation are being executed in practice.\n\n[Source](https://docs.lorenzo-protocol.xyz/introduction/stbtc-issuance-and-settlement)",
        },
    ],
};

const lorenzoenzobtc = {
    type: exports.Type.Infrastructure,
    slug: "lorenzo-enzobtc",
    title: "Lorenzo enzoBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Lorenzo enzoBTC is a wrapped BTC asset offered through the Lorenzo protocol.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "enzoBTC is backed by native BTC and other derivative assets",
            content: "enzoBTC can be acquired through depositing native BTC, [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), or [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb).\n\nFunds backing enzoBTC are secured by various custodians including Cobo, Ceffu, and Chainup.\n\n[Source](https://lorenzo-protocol.gitbook.io/docs/bitcoin-liquidity-layer/enzobtc-decentralized-wrapped-btc-for-defi)",
        },
    ],
};

const mantambtc = {
    type: exports.Type.Infrastructure,
    slug: "manta-mbtc",
    title: "Manta mBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Manta mBTC is a wrapped BTC asset available on various networks. It is backed by other wrapped BTC assets.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "mBTC is backed by other wrapped assets. Funds backing mBTC are secured by Ceffu, a centralized institution",
            content: "mBTC is backed by [BitGo wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc) and [Binance BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb). When users exchange these funds for mBTC, reserve assets are secured by vaults managed by Ceffu, an centralized institution.\n\n[Source](https://mantanetwork.medium.com/manta-cedefi-boosting-yield-and-security-4728b723be69)",
        },
    ],
};

const merlinmbtc = {
    type: exports.Type.Infrastructure,
    slug: "merlin-mbtc",
    title: "Merlin M-BTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Merlin",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Merlin MBTC is a BTC-backed asset that primarily lives on Merlin Chain.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "The protocol does not provide a public proof-of-reserve",
                    content: exports.BTCWrapperTransparency.ProofofReservesNo,
                },
                {
                    title: "External operators are not disclosed",
                    content: exports.BTCWrapperTransparency.OperatorsDisclosedNo,
                },
                {
                    title: "Redemptions enabled",
                    content: exports.BTCWrapperTransparency.RedemptionsYesNoDocs,
                },
                {
                    title: "Contracts are not open-source and verified",
                    content: exports.BTCWrapperTransparency.ContractsSome,
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust centralized parties with the custody of BTC backing M-BTC",
            content: "BTC backing Merlin M-BTC is secured via an MPC wallet managed by Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Merlin has stated that more players are being added into this custody scheme.\n\n[Source](https://www.cobo.com/post/cobo-bitmap-tech-establish-merlin-chain-bitcoin-layer-2-network-with-mpc-custody-technology)",
        },
        {
            category: exports.AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "We cannot verify information on M-BTC's minting mechanism",
            content: "MBTC is minted to Merlin via a bridge contract between Merlin and its parent chain. Because we cannot verify its parent chain's contracts, we are unable to verify MBTC's minting and burning permissions.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "M-BTC has a blacklist function",
            content: exports.WrapperSnippet.BlacklistYes
        },
        {
            category: exports.AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "We cannot verify information on M-BTC's governance mechanism",
            content: "MBTC governance is likely managed via a bridge contract between Merlin and its parent chain. Because we cannot verify its parent chain's contracts, we are unable to verify MBTC's minting and burning permissions.\n\nIt is likely managed by the development team.",
        },
    ],
};

const merlinwbtc = {
    type: exports.Type.Infrastructure,
    slug: "merlin-wbtc",
    title: "Merlin wBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Merlin wBTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Merlin works with Cobo, a centralized institution, on securing funds backing Merlin wBTC",
            content: "BTC backing Merlin wBTC is likely secured by Cobo, a centralized institution. When users deposit BTC into the Merlin Chain bridge, they are depositing funds into custodian addresses managed by Cobo.",
        },
    ],
};

const nexusnbtc = {
    type: exports.Type.Infrastructure,
    slug: "nexus-nbtc",
    title: "Nexus nBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Nexus nBTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: "This wrapper is under review",
            content: "We are currently reviewing this two-way peg implementation."
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "This peg is under review.",
            content: "This peg is under review.",
        },
    ],
};

const nomicnbtc = {
    type: exports.Type.Infrastructure,
    slug: "nomic-nbtc",
    title: "Nomic nBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Nomic, Osmosis, and other IBC-connected chains",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "nBTC is the native token for the Nomic network. Nomic is a proof-of-stake blockchain prioritizing distributed BTC custody",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.PoS,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "BTC backing nBTC managed by a group of 20 publicly known signers who participate as validators in the Nomic blockchain",
            content: "Users deposit BTC into a Reserve Wallet to receive nBTC on Nomic. The Reserve Wallet is a Bitcoin L1 multisig wallet managed by the Nomic signatory set. The Nomic signatory is made up of the top 20 Nomic validators measured by weighted stake.\n\nBecoming a signatory requires staking NOM tokens. Disbursing funds from the reserve wallet requires a 2/3s threshold, weighted by voting power through NOM tokens.",
        },
    ],
};

const nubit = {
    type: exports.Type.Infrastructure,
    slug: "nubit",
    title: "Nubit",
    entityType: exports.EntityType.DataAvailability,
    live: exports.LiveStatus.Announced,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://nubit.org",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.nubit.org",
        },
        {
            text: exports.Site.Explorer,
            url: "https://www.explorer.nubit.org",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/RiemaLabs",
        },
        {
            text: exports.Site.GitHub,
            url: "https://x.com/Nubit_org",
        },
    ],
    description: "Nubit is building a data availability layer that uses BTC within its staking protocol. Nubit aims to provide rollup-style blockchains with more throughput in exchange for some additional tradeoffs.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const obeliskobtc = {
    type: exports.Type.Infrastructure,
    slug: "obelisk-obtc",
    title: "Obelisk oBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Core",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Obelisk oBTC is a reserve asset that is live on various EVM-compatible networks.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust centralized signers to secure BTC backing oBTC",
            content: "Obelisk's documentation claims that users deposit BTC into an MPC scheme to mint oBTC on a respective destination chain.\n\nUsers trust Obelisk's claims in their documentation are being executed in practice.\n\n[Source](https://docs-obelisk.nodedao.com/obtc-asset/how-to-mint-obtc-on-obelisk) ",
        },
    ],
};

const opcat = {
    type: exports.Type.Infrastructure,
    slug: "opcat",
    title: "OP_CAT",
    entityType: exports.EntityType.SingleOp,
    live: exports.LiveStatus.BIP,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: exports.Purpose.EcashMint,
    associatedLayers: "Layer 1, Sidesystems, Alternative Networks",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://github.com/sCrypt-Inc/awesome-op-cat",
        },
        {
            text: exports.Site.Docs,
            url: "https://github.com/sCrypt-Inc/awesome-op-cat",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/fedimint",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/sCrypt-Inc/awesome-op-cat",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/sCrypt-Inc/awesome-op-cat",
        },
    ],
    description: "OP_CAT is an opcode that was removed from bitcoin script. It's been proposed to be re-added into script. Its key feature is that it concatenates two data elements.",
    sections: [
        {
            id: "Use cases",
            title: "Use cases",
            content: [
                {
                    title: "Recursive Covenants",
                    content: "OP_CAT is a proposed opcode that could enable two primitives that would support improved bridging protocols for projects like Starknet. The first enables users to predefine spending conditions for individual UTXOs. The second primitive is the verification of merkle tree branches. This would enable you to continuously add hashes of data to a merkle tree that continuously builds upon restrictions placed by previous transactions.\n\nBy building a continuous chain of restrictions over a number of transactions, you enable recursive covenants. Recursive covenants enable users to lock funds into a group UTXO that can continuously add more restrictions based on new user deposits, and additionally enforce changes for partial withdrawals which must go back into the rollup script.",
                },
                {
                    title: "STARK Verifier with OP_CAT",
                    content: "An issue that arises from shared UTXOs, specifically for L2s, is that you need a trusted party to verify offchain state transitions to enable users to withdraw funds relative to their updated balance. The StarkWare team (lead developers of Starknet) are working with L2 Iterative Ventures on developing a STARK verifier directly in Bitcoin Script with OP_CAT.\n\nIn rollups, state differences are compressed together and sent to the Bitcoin L1 with a corresponding validity proof proving that the state transition was executed correctly. Starknet are proposing a mechanism that would verify these STARK proofs proving the validity of L2 state transitions. By verifying offchain state transitions directly in Script, shared UTXOs would be able to process user withdrawals based on their updated balances. Recursive covenants and onchain STARK verification would create trust-minimized bridge programs for L2s.",
                },
            ],
        },
        {
            id: "script-functionality",
            title: "Script Functionality",
            content: [
                {
                    title: "Example SNARK verifier",
                    content: `fn reconstruct() -> Script {
    script! {
        // handle 0x80 specially---it is the "negative zero", but most arithmetic opcodes refuse to work with it.
        OP_DUP OP_PUSHBYTES_1 OP_LEFT OP_EQUAL
        OP_IF
            OP_DROP
            OP_PUSHBYTES_0 OP_TOALTSTACK
            OP_PUSHBYTES_4 OP_PUSHBYTES_0 OP_PUSHBYTES_0 OP_PUSHBYTES_0 OP_LEFT
        OP_ELSE
            OP_DUP OP_ABS
            OP_DUP OP_TOALTSTACK

            OP_SIZE 4 OP_LESSTHAN
            OP_IF
                OP_DUP OP_ROT
                OP_EQUAL OP_TOALTSTACK

                // stack: abs(a)
                // altstack: abs(a), is_positive

                OP_SIZE 2 OP_LESSTHAN OP_IF OP_PUSHBYTES_2 OP_PUSHBYTES_0 OP_PUSHBYTES_0 OP_CAT OP_ENDIF
                OP_SIZE 3 OP_LESSTHAN OP_IF OP_PUSHBYTES_1 OP_PUSHBYTES_0 OP_CAT OP_ENDIF

                OP_FROMALTSTACK
                OP_IF
                    OP_PUSHBYTES_1 OP_PUSHBYTES_0
                OP_ELSE
                    OP_PUSHBYTES_1 OP_LEFT
                OP_ENDIF
                OP_CAT
            OP_ELSE
                OP_DROP
            OP_ENDIF
        OP_ENDIF
    }
}`
                },
            ],
        },
        {
            id: "stakeholderresources",
            title: "Stakeholder Resources",
            content: [
                {
                    title: "Learn how OP_CAT impacts you",
                    content: "Each softfork proposal impacts different stakeholders differently. Check out the resources below to learn this proposal would impact you.",
                },
            ],
        },
    ],
};

const OsmosisBTC = {
    type: exports.Type.Infrastructure,
    slug: "osmosis-osmobtc",
    title: "Osmosis OsmoBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "OsmoBTC is a wrapped BTC asset home to the Osmosis blockchain. It is backed by a number of different wrapped assets.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: "Various reserve assets used",
            content: exports.PegRiskSummarySnippet.MultipleAssets,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "This peg is backed by a variety of wrapped BTC assets",
            content: "BTC on Osmosis is backed by a number of collateral assets; WBTC.eth.axl, wBTC, nBTC, ckBTC, and cbBTC.axl.",
        },
    ],
};

const pstake = {
    type: exports.Type.Infrastructure,
    slug: "pstake-ybtc",
    title: "Pstake yBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "pStake yBTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "BTC backing yBTC is secured by Cobo, an institutional provider",
            content: "pStake's yBTC is backed by BTC held in custodian wallets. These wallets are secured by signers participating in an MPC scheme. pStake has a dedicated Cobo account where users' funds are held.\n\n[Source](https://blog.pstake.finance/2024/10/17/introducing-ybtc-by-pstake-yield-optimized-bitcoin-lst-on-babylon/#:~:text=Due%20to%20the%20Bitcoin%20Network%E2%80%99s,minimize%20the%20risk%20of%20centralization)",
        },
    ],
};

const pump = {
    type: exports.Type.Infrastructure,
    slug: "pump-pumpbtc",
    title: "Pump pumpBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: exports.Purpose.LiquidStaking,
    associatedLayers: "Ethereum",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://pumpbtc.xyz",
        },
        {
            text: exports.Site.Docs,
            url: "https://pumpbtc.gitbook.io/pumpbtc",
        },
        {
            text: exports.Site.Explorer,
            url: "https://www.blockchain.com/explorer/assets/pumpbtc",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/pumpbtc",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/Pumpbtcxyz",
        },
    ],
    description: "Pump offers a mechanism that enables users to deposit wrapped BTC into smart contracts on EVM-based chains. Users receive PumpBTC, a token representing staked BTC, on Babylon in exchange for depositing a wrapped BTC token",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: "Various reserve assets used",
            content: exports.PegRiskSummarySnippet.MultipleAssets,
        },
    ],
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "Proof-of-Reserves",
                    content: "The project provides a [list of BTC addresses](https://dashboard.pumpbtc.xyz/) that it claims to be its reserves.",
                },
                {
                    title: "External operators disclosed",
                    content: exports.BTCWrapperTransparency.OperatorsDisclosedYes,
                },
                {
                    title: "Redemptions enabled and documented",
                    content: exports.BTCWrapperTransparency.RedemptionsYes,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: exports.BTCWrapperTransparency.ContractsYes,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Key storage & signing",
                    content: "PumpBTC states that reserve wallets are managed by an MPC solution between Cobo and Coinover. EVM wallets managing derivative assets are signed by GnosisSafes.",
                },
                {
                    title: "Cross-chain PumpBTC",
                    content: "Users can also mint wrapped versions of PumpBTC to be moved to another chain. Crosschain minting and burning is handled by an implementation of LayerZero.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Pump's documentation](https://pumpbtc.gitbook.io/pumpbtc)\n[Pump dashboard](https://dashboard.pumpbtc.xyz/)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "PumpBTC works with custodians to store bitcoin assets",
            content: "PumpBTC works with custodial providers to swap PumpBTC deposits into native BTC for BTC staking. When a user deposits a BTC derivative token (e.g., wBTC) into the PumpBTC contract, they are given PumpBTC in return. The staking contract is operated by a [⅔ GnosisSafe](https://etherscan.io/address/0xAC364d14020f1da0044699691a91f06ca6131Fe3).\n\nCobo and Coinover have been mentioned as operators participating in Pump.\n\n[Source](https://pumpbtc.gitbook.io/pumpbtc/custody-and-security/how-does-pumpbtc-ensure-safety)",
        },
        {
            category: exports.AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Minting of PumpBTC is managed by a smart contract",
            content: "PumpBTC is minted through a smart contract. Users deposit a wrapped version of BTC on an EVM chain into the contract and then receive PumpBTC.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist function currently implemented",
            content: "Implementations of the token do not have a blacklist or pause function.",
        },
        {
            category: exports.AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "A centralized party can assign roles",
            content: "A [⅔ GnosisSafe](https://etherscan.io/address/0x77A0545Dc1Dc6bAee8d9c1d436c6688a75Ae5777) is responsible for assigning roles for various PumpBTC implementations. The token contract is not upgradeable.",
        },
    ],
};

const rootstockrbtc = {
    type: exports.Type.Infrastructure,
    slug: "rootstock-rbtc",
    title: "Rootstock RBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Rootstock",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "RBTC is the gas token for the Rootstock sidechain. It is secured by a federation of nine signers who run specialized HSM hardware environments.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust 9, publicly disclosed entities with securing BTC that backs RBTC",
            content: "The BTC that backs RBTC is secured by a 5-of-9 federated multisig, referred to as the Powpeg (Proof of Work Peg). The signers of the Powpeg run specialized HSM hardware to secure the private keys used for signing Powpeg transactions.\n\nThe identities of entities participating in the Powpeg are publicly known. Users trust the operators of the Powpeg to custody their funds.\n\nPowpeg signer identities and attestations can be found [here](https://rootstock.io/powpeg/).",
        },
    ],
};

const sidesbtc = {
    type: exports.Type.Infrastructure,
    slug: "side-sbtc",
    title: "Side sBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Side",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Side sBTC is a BTC-backed asset that lives on the Side protocol. It can be used across various applications and is also one of the network's gas tokens.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.PoS,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "21 Side Chain validators are signers securing BTC backing sBTC",
            content: "BTC backing Side sBTC is secured by a subset of its validators participating in a threshold signature scheme. 21 validators are given the right to participate as a signer in this set up.\n\nThese signers are [publicly disclosed entities](https://docs.side.one/overview/side-introduction/sbtc-and-side-bridge/signer-set).",
        },
    ],
};

const simplesbtc = {
    type: exports.Type.Infrastructure,
    slug: "simple-sbtc",
    title: "Simple sBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Fractal",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Simple sBTC is a two-way peg managed by the Unisat team. It is used to secure BTC backing sBTC on the Fractal network.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.OneCustodian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "A 3/5 multisig secures the BTC backing Simple sBTC",
            content: "BTC backing Simple sBTC is secured by a [3/5 multisig](https://mempool.space/address/bc1ps0qa22q30rrp4584gz4teqkchn76wakzaq6mlhsv6sg36e0fl83sss2vxa). Information on who the signers are for this multisig and their signing mechanisms is unavailable.",
        },
    ],
};

const solv = {
    type: exports.Type.Infrastructure,
    slug: "solv-solvbtc",
    title: "Solv SolvBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: exports.Purpose.General,
    associatedLayers: "Ethereum, BNB, Arbitrum, Avalanche, Merlin, BOB, Base",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://solv.finance",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.solv.finance",
        },
        {
            text: exports.Site.Explorer,
            url: "https://etherscan.io/token/0x7a56e1c57c7475ccf742a1832b028f0456652f97",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/solv-finance",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/SolvProtocol",
        },
    ],
    description: "SolvBTC is a BTC-backed reserve asset that is backed by native BTC and various BTC-derivatives. It is deployed across various blockchains.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: "Various reserve assets used",
            content: exports.PegRiskSummarySnippet.MultipleAssets,
        },
    ],
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "The protocol does not provide a public proof-of-reserve",
                    content: exports.BTCWrapperTransparency.ProofofReservesNo,
                },
                {
                    title: "External operators are not disclosed",
                    content: exports.BTCWrapperTransparency.OperatorsDisclosedNo,
                },
                {
                    title: "Redemptions enabled",
                    content: exports.BTCWrapperTransparency.RedemptionsYesNoDocs,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: exports.BTCWrapperTransparency.ContractsYes,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Blacklist function added to SolvV3 contracts",
                    content: "The SolvBTCV3 [release](https://github.com/solv-finance/SolvBTC/commits/main/contracts/SolvBTCV3.sol) will see a blaskList function implemented. This function will enable the owner of the SolvBTC contract to blacklist individual users; refraining them from interacting with the token. Current implementations of SolvBTC do not have this function.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust custodians managing BTC backing SolvBTC and the operators of various BTC-derivative assets.",
            content: "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It’s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).\n\nMultisigs securing derivative assets backed by SolvBTC are largely secured by GnosisSafes with 5 signers. The signing threshold varies across implementation. The M-BTC safe has a ⅕ threshold where the wBTC safe on Ethereum has a ⅗.\n\n[Source](https://solvprotocol.medium.com/introducing-solvbtc-the-first-ever-yield-bearing-bitcoin-871179c73ca6)",
        },
        {
            category: exports.AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Minting of SolvBTC is managed by a permissioned group of entities",
            content: "Minting permissions are handled by three distinct entities in SolvBTC. In each implementation, the SolvBTCMultiAsset pool has minting capabilities and is the only entity with burning capabilities. An implementation of Chainlink CCIP on each chain enables cross-chain minting of SolvBTC tokens. Additionally, an AtomicMintContract on each chain has minting permissions.\n\nSolvBTC discloses all contract owner addresses in its documentation. The 0x0c2…5b7D address can grant, and revoke, minting authority for all implementations of SolvBTC tokens.\n\nSolvBTC does not disclose a specific protocol that monitors BTC deposits to initiate token minting on its respective chains.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist or pause function on respective contracts",
            content: "Implementations of the token do not have a blacklist or pause function.",
        },
        {
            category: exports.AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "A centralized party can upgrade contracts",
            content: "The token contracts’ various deployments are unilaterally owned by an address controlled by an owner. This owner can unilaterally upgrade contracts. The signing threshold is ⅗.",
        },
    ],
};

const solvsolvbtccore = {
    type: exports.Type.Infrastructure,
    slug: "solv-solvbtccore",
    title: "Solv SOLV.BTC CORE",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "Core",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "BTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: "Various reserve assets used",
            content: exports.PegRiskSummarySnippet.MultipleAssets,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust custodians managing BTC backing SolvBTC and the operators of various BTC-derivative assets.",
            content: `${exports.TokenSnippet.SolvBTC}.\n\nWe are reviewing if SolvBTC.CORE is natively minted or bridged from another chain.`,
        },
    ],
};

const solvena = {
    type: exports.Type.Infrastructure,
    slug: "solv-solvbtcena",
    title: "Solv SolvBTC.ENA",
    entityType: exports.EntityType.Yield,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: exports.Purpose.General,
    associatedLayers: "Ethereum, BNB, Arbitrum, Avalanche, Merlin, BOB, Base",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://solv.finance",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.solv.finance",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/solv-finance",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/SolvProtocol",
        },
    ],
    description: "SolvBTC.ENA offer a mechanism that enables users to deposit SolvBTC into smart contracts on EVM-based chains. Users receive a token representing BTC deposited on Ethena in exchange for their wrapped BTC token.",
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "This peg is under review.",
            content: `SolvBTC.ENA is a derivative asset that represents SolvBTC locked in a vault executing a trading strategy.\n\n${exports.TokenSnippet.SolvBTC}The token is backed by [SolvBTC](https://www.bitcoinlayers.org/infrastructure/solv-solvbtc).\n\nUsers expose themselves to smart contract and application risks when depositing funds into SolvBTC.ENA.`
        },
    ],
};

const xsolvbtc = {
    type: exports.Type.Infrastructure,
    slug: "solv-xsolvbtc",
    title: "Solv xSolvBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: exports.Purpose.General,
    associatedLayers: "Ethereum, BNB, Arbitrum, Avalanche, Merlin, BOB, Base",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://solv.finance",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.solv.finance",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/solv-finance",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/SolvProtocol",
        },
    ],
    description: "xSolvBTC offer a mechanism that enables users to deposit SolvBTC into smart contracts on EVM-based chains. Users receive a token representing BTC deposited on Babylon in exchange for their wrapped BTC token.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: "Asset represents staked BTC",
            content: exports.PegRiskSummarySnippet.SlashingRisk,
        },
    ],
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "The protocol does not provide a public proof-of-reserve",
                    content: exports.BTCWrapperTransparency.ProofofReservesNo,
                },
                {
                    title: "External operators are not disclosed",
                    content: exports.BTCWrapperTransparency.OperatorsDisclosedYes,
                },
                {
                    title: "Redemptions enabled",
                    content: exports.BTCWrapperTransparency.RedemptionsYesNoDocs,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: exports.BTCWrapperTransparency.ContractsYes,
                },
                {
                    title: "The project does not provide stake attestations",
                    content: exports.BTCWrapperTransparency.StakeAttestationsNo,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Babylon is not live.",
                    content: "The Babylon blockchain is not live. Only deposits are being processed.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Solv docs](https://docs.solv.finance/)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Bitcoin assets used to back xSolvBTC are custodied by institutional providers",
            content: exports.TokenSnippet.xSolvBTC,
        },
        {
            category: exports.AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Minting of SolvBTC is managed by a permissioned group of entities",
            content: "Minting permissions are handled by three distinct entities in xSolvBTC. In each implementation, the SolvBTCMultiAsset pool has minting capabilities and is the only entity with burning capabilities. An implementation of Chainlink CCIP on each chain enables cross-chain minting of xSolvBTC tokens. Additionally, an AtomicMintContract on each chain has minting permissions.\n\nxSolvBTC discloses all contract owner addresses in its documentation. The 0x0c2…5b7D address can grant, and revoke, minting authority for all implementations of xSolvBTC tokens.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist function currently implemented",
            content: "Implementations of the token do not have a blacklist or pause function.",
        },
        {
            category: exports.AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "A centralized party can upgrade contracts",
            content: "The token contracts’ various deployments are unilaterally owned by an address controlled by an owner. This owner can unilaterally upgrade contracts. The signing threshold is ⅗.",
        },
    ],
};

const sovereign = {
    type: exports.Type.Infrastructure,
    slug: "sovereign",
    title: "Sovereign",
    entityType: exports.EntityType.RollupSDK,
    live: exports.LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Website,
            url: "https://www.sovereign.xyz",
        },
        {
            text: exports.Site.Docs,
            url: "https://github.com/Sovereign-Labs/sovereign-sdk",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/Sovereign-Labs/sovereign-sdk",
        // },
        {
            text: exports.Site.GitHub,
            url: "https://x.com/sovereign_labs",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/sovereign_labs",
        },
    ],
    description: "Sovereign is a framework for building sovereign rollups. Their infrastructure is being used to support the deployment of multiple rollups in the Bitcoin ecosystem.",
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

const stackssbtc = {
    type: exports.Type.Infrastructure,
    slug: "stacks-sbtc",
    title: "Stacks sBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Stacks, Aptos",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Stacks sBTC is a BTC-backed reserve asset that is native to the Stacks blockchain. BTC backing sBTC is secured by an 10/14 federation.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a federation of 14 signers with securing BTC that backs sBTC",
            content: "Stacks sBTC implements a federation of 14 publicly known signers to secure the BTC backing sBTC. These signers are publicly known institutions.\n\nWithdrawals are not currently enabled for sBTC. If withdrawals are not activated, users will not be able to redeem BTC for sBTC.\n\nUsers can find the sBTC signer set [here](https://www.stacks.co/sbtc).",
        },
    ],
};

const statechain = {
    type: exports.Type.Infrastructure,
    slug: "statechain",
    title: "Statechain Custody Model",
    entityType: exports.EntityType.Statechain,
    entityCategory: exports.EntityCategory.BitcoinNative,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: exports.Purpose.BitcoinNative,
    associatedLayers: "spark, mercurylayer",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: exports.Site.Docs,
            url: "https://docs.spark.money/spark/technical-definitions",
        },
    ],
    description: "Statechains are protocols that enable users to transfer bitcoin UTXOs offchain with the help of a service provider.",
    riskSummary: [
        {
            title: "No provable finality assurance",
            content: `Because statechain entities can not prove key deletion, users do not have a provable assurance that they are the only user that can collectively spend the onchain UTXO with the statechain entity.`,
        },
    ],
    sections: [
        {
            id: "technologybits",
            title: "Technology Bits",
            content: [
                {
                    title: "Statechain transfers",
                    content: "Statechains support the transfer of Bitcoin UTXOs that are spendable by a user and a service provider known as a statechain entity. Statechain transfers see a user send their private keyshare for the UTXO to a recipient. To ensure that the current recipient is the only party able to immediately spend the UTXO, statechains entities are responsible for co-signing transfers and deleting keyshares held with previous owners. If the statechain entity is honest, only the current owner and the statechain entity can spend the UTXO onchain.",
                },
                {
                    title: "Timelocks",
                    content: "Statechains leverage timelocks to ensure that the current owner can spend their unilateral exit transaction before the previous owner.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.NativeBitcoinCustody,
            score: 0,
            tier: "",
            title: "Users collaboratively custody funds with the statechain entity",
            content: "UTXOs are collaboratively held in a 2-2 multisig (or 2-2 MPC scheme) between the user and the statechain entity. To immediately spend the UTXO, both parties are needed to sign a transaction. However, during the deposit process, both parties co-sign a pre-signed exit transaction that can be used by the user to spend the UTXO if the statechain entity were to become unresponsive. Please see specific implementation reviews to learn if unilateral exit is possible.",
        },
        {
            category: exports.AssessmentCategory.ProofofOwnership,
            score: 0,
            tier: "",
            title: "There is no proof of outright ownership. Users trust statechain entity to delete keyshares it held with a previous owner",
            content: "Users have no provable assurance that they are the only party immediately able to spend a Bitcoin UTXO with the statechain entity. Because statechain transfers see a user send their private keyshare for a UTXO to a recipient, the statechain entity must delete their keyshare held with previous owners. This is to ensure that the only parties able to immediately spend the UTXO are the recipient and the statechain entity. There is no way to prove key deletion, so users explicitly trust the statechain entity to act honestly and delete all keyshares it held with previous owners.",
        },
        {
            category: exports.AssessmentCategory.UnilateralExit,
            score: 0,
            tier: "",
            title: "Users can unilaterally exit from the Statechain if the service provider becomes unresponsive",
            content: "Because all Statechain UTXOs have pre-signed unilateral exit transactions, users can exit the protocol if the statechain entity becomes unresponsive. Users must note that all previous owners can unilaterally exit, so they must publish their exit path on chain to ensure they retain access to their funds. Statechain implementations should implement timelocks to ensure that the current owner can spend their unilateral exit transaction before any previous owner.",
        },
    ],
};

const tbtc = {
    type: exports.Type.Infrastructure,
    slug: "threshold-tbtc",
    title: "Threshold tBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "T",
    purpose: exports.Purpose.General,
    associatedLayers: "EVM-based chains",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://threshold.network",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.threshold.network",
        },
        {
            text: exports.Site.Explorer,
            url: "https://etherscan.io/token/0xcdf7028ceab81fa0c6971208e83fa7872994bee5",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/threshold-network",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/thetnetwork",
        },
    ],
    description: "tBTC is a BTC-backed reserve asset that lives as an ERC-20 token on EVM-based blockchains. Its accounting ledger is Ethereum. The BTC backing tBTC is secured by a distributed signer set and staking mechanism.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: `${exports.PegRiskSummarySnippet.Federation} Signers must stake T tokens before being approved by the Threshold DAO to become a signer.`
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Trust assumptions related to tBTC change per the chain it is deployed on. Ethereum is the accounting layer",
                    content: "Trust assumptions related to tBTC change across each system it is deployed on. For example, the tBTC gateway between Ethereum and Base is managed by a 6/9 multisig. This is a stronger trust assumption when compared to using tBTC on Ethereum. When interacting with tBTC across various chains, users should be aware that there may be additional trust assumptions.\n\n🔬 We are currently researching tBTC trust assumptions across the chains its deployed on.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "tECDSA Scheme",
                    content: "Signers who participate in securing the bitcoin wallets in tBTC's protocol leverage a tECDSA scheme to shard the wallet's private key across a number of parties. In tBTC, the tECDSA scheme has a 51% threshold. It requires 51% of the threshold of signers to produce a valid signature for a bitcoin transaction.\n\nSigners of bitcoin wallets are selected through a randomized process known as the sortition pool. When a new wallet is created, a signer submits a sortition transaction to kick off a distributed key generation ceremony. The sortition pool then selects a number of signers to participate in the ceremony, generate a new wallet, and then distribute the private key shards across the group of signers.\n\nOnce the signers are distributed their individual key shares, they then participate is signing events via an offchain communication protocol.",
                },
                {
                    title: "Ethereum Staking Contracts",
                    content: "Participation in the tBTC protocol requires a prospective signer to participate as a staker. tBTC's staking contracts live on Ethereum. A signer would need to acquire the necessary amount of T tokens to participate as a staker, stake them via the T staking contract, and then apply to become a signer through Threshold governance.",
                },
                {
                    title: "Multiple Bitcoin Wallets",
                    content: "tBTC creates new wallets periodically to store the bitcoin backing tBTC. Every wallet undergoes its own distributed key generation ceremony and has a unique signer setup. This distributes the risk of collusion and theft across a number of wallets and signer groups.",
                },
            ],
        },
        {
            id: "economics",
            title: "Economics",
            content: [
                {
                    title: "Signers selection process influenced by stake of T token",
                    content: "Signers of bitcoin wallets backing tBTC are selected by a randomized process known as the sortition pool. While random, the overall value of a prospective signer's stake does impact the amount of key shares they receive in the threshold signing scheme. If a prospective signer hold a significant amount of stake (e.g. > 51%), there is a chance they could effectively gain unilateral control of a single bitcoin wallet.\n\nThis is currently mitigated by the fact that tBTC signing privileges are currently permissioned and signers must be approved by the Threshold DAO in its current set up. If tBTC signing privileges became permissionless, the mechanism could be vulnerable to malicious parties acquiring a large amount of stake.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Bitcoin Layers' comparison of tBTC, wBTC, and cbBTC](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust permissioned entities with the custody of their BTC. tBTC Beta Stakers must apply to Threshold DAO for signing privileges",
            content: "The bitcoin wallets that store the bitcoin backing tBTC are managed by a permissioned signer set. The signers of the wallets participate as stakers in an Ethereum staking contract to become eligible for signing privileges. When a new wallet is created, a randomized process, known as the sortition pool, will select signers who will be responsible for custodying funds and signing transactions for respective bitcoin wallets.\n\nIf signers colluded, and had sufficient amount of signing power for a bitcoin wallet, they could steal funds from a wallet they managed.",
        },
        {
            category: exports.AssessmentCategory.Signing,
            score: 0,
            tier: "",
            title: "Threshold ECDSA scheme used for signing transactions",
            content: "Each bitcoin wallet that manages BTC backing tBTC is controlled by participants in a tECDSA scheme. The tECDSA scheme sees a specific bitcoin wallet's private key sharded into a 100 key shares which are distributed to a randomly selected group of signers. In tBTC, there is a 51% signing threshold meaning that 51% of the signers are needed to create a valid signature to authorize bitcoin transactions.",
        },
        {
            category: exports.AssessmentCategory.KeyStorage,
            score: 0,
            tier: "",
            title: "No specific key storage requirements",
            content: "There is no specific hardware requirement associated with running a tBTC v2 signing node. Nodes can also be run via a number of VPS providers.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist or pause function on tBTC smart contracts",
            content: "tBTC's [token contract](https://etherscan.io/address/0x9C070027cdC9dc8F82416B2e5314E11DFb4FE3CD#code) does not have functions that can censor individual users. It is upgradeable via the Threshold DAO and a controller elected by the DAO. If an upgrade to the tBTC token contract was malicious, then users would have 1 day to exit.\n\nA malicious upgrade could result in the loss of user funds.",
        },
        {
            category: exports.AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "tBTC is a distributed, but permissioned system",
            content: "While trust is distributed across a number of parties, tBTC is not a fully trustless system. Users trust that Beta Stakers won't collude and steal BTC backing tBTC. They also trust the tBTC protocol to ensure that signing responsibilities are sufficiently distributed so a single entity cannot gain control over 51% of signing power for a specific wallet.",
        },
    ],
};

const tronbtc = {
    type: exports.Type.Infrastructure,
    slug: "tron-btc",
    title: "BTCTRON",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Tron",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "BTCTRON is a BTC-synthetic asset home to the Tron blockchain.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.OneCustodian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a centralized exchange with the custody of BTC backing BTCTRON",
            content: "When users swap BTC for BTCTRON, they send their BTC to Poloniex, a centralized custodian. Information on how the BTC is secured is not available.\n\n[Source](https://support.poloniex.com/hc/en-us/articles/360058176553-Introducing-Multi-chain-Deposits-and-Withdrawals)",
        },
    ],
};

const unirouter = {
    type: exports.Type.Infrastructure,
    slug: "unirouter-ubtc",
    title: "UniRouter uBTC",
    entityType: exports.EntityType.LiquidStaking,
    live: exports.LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Bsquared, Core",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://unirouter.io",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.unirouter.io",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/unirouter",
        },
        {
            text: exports.Site.Explorer,
            url: "https://explorer.bsquared.network/address/0x796e4D53067FF374B89b2Ac101ce0c1f72ccaAc2",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/UniRouterBTC",
        },
    ],
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.UnkownSignersTitle,
            content: exports.PegRiskSummarySnippet.UnkownSigners,
        },
    ],
    description: "uBTC is a liquid staking token that is operated by the UniRouter team. It is live on Bsquared Network.",
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "Proof-of-Reserves",
                    content: "The project has not published a Proof-of-Reserves. Users trust that the custodians holding native BTC backing the derivative asset to have ample reserves.",
                },
                {
                    title: "External operators disclosed",
                    content: exports.BTCWrapperTransparency.OperatorsDisclosedNo,
                },
                {
                    title: "Redemptions enabled and documented",
                    content: exports.BTCWrapperTransparency.RedemptionsYesNoDocs,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: exports.BTCWrapperTransparency.ContractsNo,
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust UniRouter with their custody practices. UniRouter has not disclosed who manages the BTC backing uBTC.",
            content: "Users trust that the UniRouter team has set up secure custody practices and has BTC reserves backing uBTC. UniRouter has not disclosed who secures the BTC backing uBTC.",
        },
        {
            category: exports.AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Contracts are not verified",
            content: "There’s no documentation on how the project manages supply issuance.",
        },
        {
            category: exports.AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Contracts are not verified",
            content: "We cannot currently verify if the token has a blacklist or pause function.",
        },
        {
            category: exports.AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "Contracts are not verified",
            content: "We cannot currently verify who controls relevant contracts and upgrade mechanisms.",
        },
    ],
};

const hyperliquidbtc = {
    type: exports.Type.Infrastructure,
    slug: "unit-ubtc",
    title: "Hyperliquid BTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Hyperliquid",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Hyperliquid BTC is a BTC-denominated asset available to Hyperliquid users. BTC backing this asset is secured by a 2/3 MPC scheme.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust 2/3 signers participating in the Unit Protocol",
            content: "The Unit Protocol consists of a network of 3 guardians participating in an MPC scheme. These guardians are responsible for securing the BTC backing a BTC-denominated asset on Hyperliquid. They are also responsible for executing signing events related to the asset.\n\n[Source](https://docs.hyperunit.xyz/architecture/security)",
        },
    ],
};

const xlinkabtc = {
    type: exports.Type.Infrastructure,
    slug: "xlink-abtc",
    title: "XLink aBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: exports.Purpose.General,
    associatedLayers: "Stacks, Core, Base, Linea, Mode, BNB, Ethereum, Bsquared, BOB, Bitlayer, Merlin, AIlayer, Xlayer, Arbitrum, Aurora, Manta",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "https://xlink.network",
        },
        {
            text: exports.Site.Docs,
            url: "https://docs.xlink.network",
        },
        {
            text: exports.Site.Explorer,
            url: "https://docs.xlink.network/xlink-network/readme/ethereum-contract-addresses",
        },
        {
            text: exports.Site.GitHub,
            url: "https://github.com/xlink-network",
        },
        {
            text: exports.Site.Twitter,
            url: "https://x.com/XLinkbtc",
        },
    ],
    description: "XLink aBTC is a BTC-backed reserve asset that can be used across a number of blockchain environments.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.UnkownSignersTitle,
            content: exports.PegRiskSummarySnippet.UnkownSigners,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "There is limited information available on Xlink aBTC's custody mechanism",
            content: "There is limited information available on Xlink aBTC's custody mechanism for BTC backing aBTC. Users trust Alex, the project behind Xlink, to set up secure custody practices. Xlink's [website](https://www.xlink.network/) mentions that institutional grade MPC solutions are used.",
        },
    ],
};

const zueszbtc = {
    type: exports.Type.Infrastructure,
    slug: "zeus-zbtc",
    title: "Zeus zBTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "Zeus zBTC is a wrapped BTC asset on Solana. Funds backing zBTC are secured in individual instances by custodian partners.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: `${exports.PegRiskSummarySnippet.Guardian} Zeus zBTC guardians secure native BTC indepedent of each other. They do not collectively manage an MPC protocol. Users trust the specific guardian securing BTC backing their zBTC tokens.`,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Funds backing zBTC are secured by a number custodians individually",
            content: "zBTC has a group of guardians securing the BTC that backs zBTC. This BTC is dispersed across a number of individual addresses, meaning that each custodian custodies a subset of funds in isolation of other custodians. Users should be aware of which custodian custodies the funds backing zBTC when using the network.",
        },
    ],
};

const twentyonesharesbtc = {
    type: exports.Type.Infrastructure,
    slug: "21shares-21btc",
    title: "21.co BTC",
    entityType: exports.EntityType.ReserveAsset,
    live: exports.LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [exports.RiskFactor.High, exports.RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: exports.Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: exports.Site.Website,
            url: "",
        },
        {
            text: exports.Site.Docs,
            url: "",
        },
        {
            text: exports.Site.Explorer,
            url: "",
        },
        {
            text: exports.Site.GitHub,
            url: "",
        },
        {
            text: exports.Site.Twitter,
            url: "",
        },
    ],
    description: "21 Shares BTC is a BTC wrapped asset. It is under review.",
    riskSummary: [
        {
            title: exports.PegRiskSummarySnippet.CustodianTitle,
            content: exports.PegRiskSummarySnippet.Guardian,
        },
        {
            title: exports.PegRiskSummarySnippet.UnkownSignersTitle,
            content: exports.PegRiskSummarySnippet.UnkownSigners,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content: "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: exports.AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "BTC backing 21.co BTC is held by third party custodians",
            content: "BTC backing 21.co BTC is held by third party custodians. 21.co has not officially disclosed the identities of these custodian providers.\n\n[Source](https://cdn.21.co/uploads/documents/whitepapers/21co_21BTC_Whitepaper.pdf)",
        },
    ],
};

// Export all infrastructure types
// Export all infrastructures array
const allInfrastructures = [
    bvm,
    celestia,
    espresso,
    lorenzo,
    sovereign,
    nubit,
    babylonbtc,
    fedimint,
    ibtcnetworkibtc,
    cashu,
    tbtc,
    lombard,
    wbtc,
    cbbtc,
    kbtc,
    solv,
    xsolvbtc,
    solvena,
    bedrock,
    pump,
    fire,
    bitcoinos,
    binancebtcb,
    unirouter,
    acorn,
    babypie,
    chakra,
    kinza,
    pstake,
    alexxbtc,
    boolbbtc,
    simplesbtc,
    xlinkabtc,
    bevmwbtc,
    bitlayerwbtc,
    corecorebtc,
    icpckbtc,
    layerbankbtc,
    layerbankubtc,
    librepbtc,
    liquidlbtc,
    nomicnbtc,
    rootstockrbtc,
    avalanchebtcb,
    obeliskobtc,
    cornbtcn,
    stackssbtc,
    tronbtc,
    merlinmbtc,
    merlinwbtc,
    hemihemibtc,
    sidesbtc,
    nexusnbtc,
    statechain,
    astria,
    avail,
    cygnus,
    opcat,
    OsmosisBTC,
    bedrockbrbtc,
    alloallobtc,
    axelaraxlbtc,
    hyperliquidbtc,
    zueszbtc,
    lorenzoenzobtc,
    badgerebtc,
    mantambtc,
    solvsolvbtccore,
    twentyonesharesbtc,
];
// Export infrastructure slugs
const allInfrastructureSlugs = allInfrastructures.map((infrastructure) => infrastructure.slug);

exports.AlertSnippet = AlertSnippet;
exports.acorn = acorn;
exports.ailayer = template$c;
exports.alex = alexxbtc;
exports.algorand = template$b;
exports.allInfrastructureSlugs = allInfrastructureSlugs;
exports.allInfrastructures = allInfrastructures;
exports.allLayerSlugs = allLayerSlugs;
exports.allLayers = allLayers;
exports.allo = alloallobtc;
exports.arbitrum = arbitrum;
exports.astria = astria;
exports.aurora = template$a;
exports.avail = avail;
exports.avalanche = avalanche;
exports.avalanchebtcb = avalanchebtcb;
exports.axelar = axelaraxlbtc;
exports.babylongenesis = babylon;
exports.babylonstaked = babylonbtc;
exports.babypie = babypie;
exports.badger = badgerebtc;
exports.base = base;
exports.bedrock = bedrockbrbtc;
exports.bedrockuni = bedrock;
exports.berachain = berachain;
exports.bevm = bevm;
exports.bevmwbtc = bevmwbtc;
exports.binancebtcb = binancebtcb;
exports.bitcoinos = bitcoinos;
exports.bitfinity = bitfinity;
exports.bitgowbtc = wbtc;
exports.bitlayer = bitlayer;
exports.bitlayerwbtc = bitlayerwbtc;
exports.bnbsmartchain = bnbsmartchain;
exports.bob = bob;
exports.boolbbtc = boolbbtc;
exports.botanix = template$9;
exports.bouncebit = bouncebit;
exports.bsquared = bsquared;
exports.bvm = bvm;
exports.cashu = cashu;
exports.celestia = celestia;
exports.chakra = chakra;
exports.coinbasecbbtc = cbbtc;
exports.core = core;
exports.corecorebtc = corecorebtc;
exports.corn = corn;
exports.cornbtcn = cornbtcn;
exports.cygnus = cygnus;
exports.espresso = espresso;
exports.ethereum = ethereum;
exports.fantom = fantom;
exports.fedimint = fedimint;
exports.firebitcoin = fire;
exports.fractal = fractal;
exports.fuel = fuel;
exports.gnosis = gnosis;
exports.goat = goat;
exports.hemi = hemi;
exports.hemibtc = hemihemibtc;
exports.hyperliquid = hyperliquid;
exports.ibtcnetwork = ibtcnetworkibtc;
exports.ink = template$8;
exports.internetcomputer = internetcomputer;
exports.internetcomputerck = icpckbtc;
exports.iotex = template$7;
exports.kava = template$6;
exports.kinza = kinza;
exports.kraken = kbtc;
exports.layerbankbtc = layerbankbtc;
exports.layerbankubtc = layerbankubtc;
exports.libre = librepbtc;
exports.lightning = lightning;
exports.linea = template$5;
exports.liquid = liquid;
exports.liquidlbtc = liquidlbtc;
exports.lombard = lombard;
exports.lorenzoenzobtc = lorenzoenzobtc;
exports.lorenzostbtc = lorenzo;
exports.manta = template$4;
exports.mantambtc = mantambtc;
exports.mantle = template$3;
exports.mercurylayer = mercurylayer;
exports.merlin = merlin;
exports.merlinmbtc = merlinmbtc;
exports.merlinwbtc = merlinwbtc;
exports.mezo = mezo;
exports.mode = template$2;
exports.movement = template$1;
exports.nexus = nexusnbtc;
exports.nomic = nomic;
exports.nomicnbtc = nomicnbtc;
exports.nubit = nubit;
exports.obelisk = obeliskobtc;
exports.opcat = opcat;
exports.optimism = optimism;
exports.osmosis = osmosis;
exports.osmosisbtc = OsmosisBTC;
exports.polygonpos = polygon;
exports.polygonzkevm = polygonzkevm;
exports.pstake = pstake;
exports.pump = pump;
exports.rollux = rollux;
exports.rootstock = rootstock;
exports.rootstockrbtc = rootstockrbtc;
exports.scroll = scroll;
exports.side = side;
exports.sidesbtc = sidesbtc;
exports.simplesbtc = simplesbtc;
exports.solana = solana;
exports.solvcore = solvsolvbtccore;
exports.solvena = solvena;
exports.solvsolvbtc = solv;
exports.solvx = xsolvbtc;
exports.soneium = soneium;
exports.sonic = sonic;
exports.sovereign = sovereign;
exports.spark = spark;
exports.stacks = stacks;
exports.stackssbtc = stackssbtc;
exports.starknet = starknet;
exports.statechain = statechain;
exports.sui = template;
exports.taiko = taiko;
exports.thresholdtbtc = tbtc;
exports.tron = tron;
exports.tronbtc = tronbtc;
exports.twentyoneshares = twentyonesharesbtc;
exports.unirouter = unirouter;
exports.unit = hyperliquidbtc;
exports.xlink = xlinkabtc;
exports.zeta = zeta;
exports.zeus = zueszbtc;
exports.zksync = zksync;
//# sourceMappingURL=index.js.map
