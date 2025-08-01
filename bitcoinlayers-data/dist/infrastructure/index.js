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
exports.alex = alexxbtc;
exports.allInfrastructureSlugs = allInfrastructureSlugs;
exports.allInfrastructures = allInfrastructures;
exports.allo = alloallobtc;
exports.astria = astria;
exports.avail = avail;
exports.avalanchebtcb = avalanchebtcb;
exports.axelar = axelaraxlbtc;
exports.babylonstaked = babylonbtc;
exports.babypie = babypie;
exports.badger = badgerebtc;
exports.bedrock = bedrockbrbtc;
exports.bedrockuni = bedrock;
exports.bevmwbtc = bevmwbtc;
exports.binancebtcb = binancebtcb;
exports.bitcoinos = bitcoinos;
exports.bitgowbtc = wbtc;
exports.bitlayerwbtc = bitlayerwbtc;
exports.boolbbtc = boolbbtc;
exports.bvm = bvm;
exports.cashu = cashu;
exports.celestia = celestia;
exports.chakra = chakra;
exports.coinbasecbbtc = cbbtc;
exports.corecorebtc = corecorebtc;
exports.cornbtcn = cornbtcn;
exports.cygnus = cygnus;
exports.espresso = espresso;
exports.fedimint = fedimint;
exports.firebitcoin = fire;
exports.hemibtc = hemihemibtc;
exports.ibtcnetwork = ibtcnetworkibtc;
exports.internetcomputerck = icpckbtc;
exports.kinza = kinza;
exports.kraken = kbtc;
exports.layerbankbtc = layerbankbtc;
exports.layerbankubtc = layerbankubtc;
exports.libre = librepbtc;
exports.liquidlbtc = liquidlbtc;
exports.lombard = lombard;
exports.lorenzoenzobtc = lorenzoenzobtc;
exports.lorenzostbtc = lorenzo;
exports.mantambtc = mantambtc;
exports.merlinmbtc = merlinmbtc;
exports.merlinwbtc = merlinwbtc;
exports.nexus = nexusnbtc;
exports.nomicnbtc = nomicnbtc;
exports.nubit = nubit;
exports.obelisk = obeliskobtc;
exports.opcat = opcat;
exports.osmosisbtc = OsmosisBTC;
exports.pstake = pstake;
exports.pump = pump;
exports.rootstockrbtc = rootstockrbtc;
exports.sidesbtc = sidesbtc;
exports.simplesbtc = simplesbtc;
exports.solvcore = solvsolvbtccore;
exports.solvena = solvena;
exports.solvsolvbtc = solv;
exports.solvx = xsolvbtc;
exports.sovereign = sovereign;
exports.stackssbtc = stackssbtc;
exports.statechain = statechain;
exports.thresholdtbtc = tbtc;
exports.tronbtc = tronbtc;
exports.twentyoneshares = twentyonesharesbtc;
exports.unirouter = unirouter;
exports.unit = hyperliquidbtc;
exports.xlink = xlinkabtc;
exports.zeus = zueszbtc;
//# sourceMappingURL=index.js.map
