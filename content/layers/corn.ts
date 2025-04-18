import { tokenToString } from "typescript";
import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    TechnologySnippet,
} from "../props";

const corn: LayerProject = {
    type: Type.Layer,
    slug: "corn",
    title: "Corn",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.UnderReview,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BTCN",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://usecorn.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.usecorn.com/docs/developers/introduction",
        },
        {
            text: Site.Explorer,
            url: "https://cornscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/usecorn",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/use_corn",
        },
    ],
    description:
        "Corn is a permissioned rollup that leverages a derivative of BTC as its gas token. It is built on the Arbitrum Orbit stack and uses the AnyTrust protocol for data availability. Its native token, BTCN, is an ERC-20 that lives on Ethereum.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Bitcorn BTCN",
                    infrastructureSlug: "corn-btcn",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "BTCN is backed by BTC-derivative assets and is managed by a 2/4 multisig",
                    content:
                        "BTCN is an Ethereum-based ERC-20 token. It is a BTC-derivative asset that is backed by cbBTC and wBTC. All of the BTCN supply is locked into Corn’s ERC-20 Bridge contract on Ethereum and is in escrow. On Corn, BTCN is primarily stored in the Bitcorn OFT contract.\n\nThe BTCN contract is managed by the [0xCff...2C7D](https://etherscan.io/address/0xcff1ad9f09b32252171207e8525c90b18d4e2c7d#code) multisig address on Ethereum. The multi-sig has a 2/4 signing threshold.",
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It’s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. SolvBTC is additionally backed by various BTC-derivative assets; M-BTC, BTCB, wBTC, FBTC, cbBTC, BTC.b, and tBTC.\n\nMultisigs securing derivative assets backing by SolvBTC are secured by GnosisSafes with 5 signers.",
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "Four entities custody the bitcoin assets backing xSolvBTC tokens. These entities are Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking).\n\nCeffu and Cobo are the custodians for funds that are staked with Babylon.\n\n[Source](https://docs.solv.finance/staking-abstraction-layer-sal/the-ecological-view)",
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BedrockUniBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Data is stored and made available by a permissioned federation",
            content:
                "The data needed to reconstruct the state and construct fraud proofs is made available by a permissioned committee. The committee is based on the AnyTrust data availability protocol. This sees a committee of signers produce a data availability certificate that the data needed for proof construction is available for a certain amount of time. In Corn, the data is made available by the DAC for two weeks.\n\nThere is one member of the data availability committee with a signing threshold of 1-1.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "The Corn network is operated and validated by permissioned entities. We are reviewing if users can self-propose their own state transitions if operators go offline",
            content:
                "The Corn Network is operated by permissioned entities. Blocks are constructed by a single sequencer who is responsible for building Corn blocks and submitting the latest hash of these batches, and a corresponding Data Availability Certificate, to Ethereum.\n\nA centralized proposer is responsible for updating the system by proposing a new state root based on the data posted to Ethereum. This proposal requires 0.1 ETH stake.\n\nCurrently, producing blocks and state root proposals are done by two centralized entities. Their addresses are:\n\n[Sequencer address](https://etherscan.io/address/0x9298413c781c241af6f6733b7df00de5d4a42d93)\n\n[Proposer address](https://etherscan.io/address/0xe9d1e89a73d7608a45f3cdb5a898dfd9e3a3ba42)",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Corn state transitions are submitted and validated by a centralized proposer",
            content:
                "Corn blocks are finalized after its full nodes compute a new state root based on the data made available by the data availability committee. In its current architecture, only one entity is able to propose new state roots and advance the state.\n\n⚠️ Corn blocks can be reorged by the sequencer prior to the proposer computing and finalizing a new state root.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Corn does not inherit any security from Bitcoin",
                    content:
                        "In its current state, Corn does not inherit security from Bitcoin.",
                },
                {
                    title: "BTCN token used to pay fees",
                    content:
                        "Corn users pay sequencer fees in BTCN, a BTC-derivative asset.",
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content:
                        "Corn does not introduce any MEV on the Bitcoin L1. Users trust the Corn sequencer to not reorder their transactions to extract MEV.",
                },
                {
                    title: "Corn does not contribute to the security budget",
                    content:
                        "Corn does not currently contribute to the Bitcoin security budget.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Proposer role centralized and permissioned. BTC users must withdraw to Ethereum L1 before withdrawing to Bitcoin",
                    content:
                        "To withdraw from Corn, a user must send BTCN to the Wrapped Bitcorn OFT contract on Corn. This contract then communicates with a swap contract on Ethereum which releases a BTC-derivative asset from the vault contract back to the user.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: TechnologySnippet.EVM,
                },
                {
                    title: "Arbitrum Stylus",
                    content:
                        "In addition to being EVM-compatible, Corn leverages Stylus to support developers building WASM-based smart contracts. Developers can decide between building EVM-based applications or writing smart contracts in more common programming languages, such as Rust, and compiling these contracts to WASM.",
                },
                {
                    title: "Fault Proofs",
                    content:
                        "Corn sees its rollup state transitions and bridge finality finalized by validators submitting proposals for new state transitions. These proposals are submitted by a validator staking 0.1 ETH. If a proposed state transition is invalid, another validator can submit a fault proof and challenge another validator’s proposed state transition.\n\nCorn currently only has one, whitelisted validator who is able to submit state transitions and fault proofs.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content:
                        "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                },
            ],
        },
        {
            id: "contracts",
            title: "Contracts & Permissions",
            content: [
                {
                    title: "Corn is supported by various Ethereum smart contracts",
                    content:
                        "Below are a few of the contracts that support Corn with their respective owners:\n\nSequencerInbox: [Proxy.](https://etherscan.io/address/0x4ad144ea249a98f77e0b78104d3b6eb6cd3a76da#readProxyContract) [Implementation (Upgradeable).](https://etherscan.io/address/0x46faf6838bbf770986f073348d41881d5e54fb0f#code) [Admin.](https://etherscan.io/address/0xee9924c5fd94601c80ff8010f577c9f7f3c20b84)\n\nERC20Bridge: [Proxy.](https://etherscan.io/address/0x7E31f112d340a4D0cB0e4bD82f2853089d1bF10C#readProxyContract) [Implementation (Upgradeable).](https://etherscan.io/address/0xd7fd189f1652378f32da3db7926e51a7b0344797#code) [Admin.](https://etherscan.io/address/0xee9924c5fd94601c80ff8010f577c9f7f3c20b84)\n\nUpgradeExecutor: [Proxy.](https://etherscan.io/address/0xd67c6b5f5a75807478efa05472c8dfd3f64d0bc7) [Implementation (Upgradeable).](https://etherscan.io/address/0x011d8f10fbc20c14b453768253cdff7eb5b96917#code) [Admin.](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6?a=0x1c2c9efa3693572d008fb55253f7deaaa7f3e6b1#readProxyContract)\n\nBTCN Contract: [Proxy.](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6#code) [Implementation (Upgradeable).](https://etherscan.io/address/0xd67c6b5f5a75807478efa05472c8dfd3f64d0bc7#code) [Authority.](https://etherscan.io/address/0x515C7d8Fcb950f8b030ac08C994b37b4b8F3F7B5#code)",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Some contracts related to Corn are source viewable",
                    content:
                        "We are reviewing if Corn has an open-source node implementation.",
                },
            ],
        },
    ],
};

export default corn;
