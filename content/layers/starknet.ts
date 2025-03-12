import Risk from "@/components/layer/layerTableItemRisk";
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
    ReviewSnippet,
    BitcoinSecuritySnippet,
    AdditionalSnippet,
    UseCaseSnippet,
} from "../props";

const starknet: LayerProject = {
    type: Type.Layer,
    slug: "starknet",
    title: "Starknet",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.VeryHigh,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "ETH",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.starknet.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.starknet.io",
        },
        {
            text: Site.Explorer,
            url: "https://starkscan.co",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/keep-starknet-strange/awesome-starknet",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Starknet",
        },
    ],
    description:
        "Starknet is a validity rollup that posts data to Ethereum.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BitGowBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Ethereum satisfies Starknet's data availability requirement",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Blocks are currently produced by a centralized sequencer",
            content: "The network's blocks are constructed by a centralized block producer. There is work ongoing to decentralize this. You can follow https://github.com/informalsystems/malachite for progress.\n\nUsers cannot build their own blocks in the event of censorship or liveness failures.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Validity proofs are used to finalize bridges and light clients",
            content: `${ReviewSnippet.FinalityAltRollupValidityProofs}\n\nUsers cannot run their own provers in the event of censorship or liveness failures.`
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Starknet does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH or STRK token used to pay fees. [Paymaster](https://doc.avnu.fi/avnu-paymaster/overview) allows dapps to expand this scope",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Starknet does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "A federation can immediately upgrade relevant contracts. This affects some two-way peg implementations",
                    content: AdditionalSnippet.UpgradeableContractsCentralizedAndNoExit,
                },
                {
                    title: "Validity proofs on Starknet don't ultimately provide security for two-way pegs securing BTC",
                    content: "Validity proofs are used to finalize a bridge contract on Ethereum and permit withdrawals. Whilst this provides security from an Ethereum user perspective, BTC users ultimately receive security from the custodian (or network) securing BTC backing wrapped BTC assets.\n\nIf the network were to add a SNARK verifier on bitcoin (via a BitVM-style mechanism or soft fork), then the finality assurances for the protocol would change.\n\nWe gave the project a custom score for this section.",
                },
            ],
        },
        {
            id: "Technology",
            title: "Technology",
            content: [
                {
                    title: "Cairo Virtual Machine",
                    content:
                        "Cairo is a virtual machine with provable function executions by default. The Cairo virtual machine uses three languages: Cairo, an ergonomic, Rust-based language for users to interface; SIERRA, a safe intermediary representation for Cairo to compile down to that avoids potentially unprovable situations such as assertions or division by zero, making function executions deterministic; and finally CASM, low-level provable code which SIERRA compiles to.\n\nThe Cairo virtual machine ensures that all function executions can be proved while still offering a fully expressive and Turing-complete environment. Cairo’s Turing-completeness allows it to emulate other VMs, which can then inherit provable characteristics on Starknet. The Ethereum Virtual Machine (EVM) is one such example with Kakarot, allowing EVM native transactions to be executed and proven on Starknet.",
                },
                {
                    title: "SHARP and Stwo",
                    content:
                        "Starknet, as well as the various StarkEx-built rollups, use a shared proving system for proof generation, called SHARP. The benefit of shared proving is saving on costs. Specifically, SHARP uses the StarkWare-built Stone prover, which next iteration Stwo, is being worked on.",
                },
                {
                    title: "Madara sequencer",
                    content:
                        "Madara is a sequencer built for L3s on top of Starknet. Madara allows L3s to leverage the SHARP system, with proofs verified on Starknet/Ethereum, while also offering DA flexibility, as L3s can choose alternative DA layers, e.g., Celestia.",
                },
            ]
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "proposedtech",
            title: "Proposed Technology",
            content: [
                {
                    title: "Recursive Covenants",
                    content:
                        "OP_CAT is a proposed opcode that could enable two primitives that would support improved bridging protocols for projects like Starknet. The first enables users to predefine spending conditions for individual UTXOs. The second primitive is the verification of merkle tree branches. This would enable you to continuously add hashes of data to a merkle tree that continuously builds upon restrictions placed by previous transactions.\n\nBy building a continuous chain of restrictions over a number of transactions, you enable recursive covenants. Recursive covenants enable users to lock funds into a group UTXO that can continuously add more restrictions based on new user deposits, and additionally enforce changes for partial withdrawals which must go back into the rollup script.",
                },
                {
                    title: "STARK Verifier with OP_CAT",
                    content:
                        "An issue that arises from shared UTXOs, specifically for L2s, is that you need a trusted party to verify offchain state transitions to enable users to withdraw funds relative to their updated balance. The StarkWare team (lead developers of Starknet) are working with L2 Iterative Ventures on developing a STARK verifier directly in Bitcoin Script with OP_CAT.\n\nIn rollups, state differences are compressed together and sent to the Bitcoin L1 with a corresponding validity proof proving that the state transition was executed correctly. Starknet are proposing a mechanism that would verify these STARK proofs proving the validity of L2 state transitions. By verifying offchain state transitions directly in Script, shared UTXOs would be able to process user withdrawals based on their updated balances. Recursive covenants and onchain STARK verification would create trust-minimized bridge programs for L2s.",
                },
                {
                    title: "Volition DA model",
                    content:
                        "Starknet is exploring a hybrid DA solution, known as a volition. The volition model offers multiple DA options, such as Ethereum blobspace, Starknet DA, or third-party solutions such as Celestia. Importantly, this model would allow for users to choose their preferred DA solution per transaction. High value per byte transactions would favor Ethereum DA, while low value per byte transactions would logically use alternative DA. This is particularly relevant for the move to Bitcoin, as Bitcoin DA is considerably more scarce than Ethereum blobspace.",
                },
            ],
        },
        {
            id: "openresearch",
            title: "Open Research Questions",
            content: [
                {
                    title: "Starknet will likely use an external sequencer thus mitigating MEV leakage to the Bitcoin L1",
                    content:
                        "A concern with rollups, and alternative rollups, on Bitcoin is the potential introduction of MEV. If Bitcoin miners have exclusive rights in ordering rollup transactions, especially those with more expressive execution environments, miners have opportunities to extract MEV through a variety of mechanisms. This is known as based sequencing. If Bitcoin rollups implemented based sequencing, miners could invest into more sophisticated block building infrastructure to extract more harmful MEV for increased profits. This could raise the barrier to entry for mining, and potentially introduce centralizing pressures.\n\nStarknet is currently sequenced (ordered) by a centralized sequencer. The Starknet community has additionally researched decentralized sequencer, but have focused on alternative consensus protocols taking on this role (CometBFT as an example).\n\nIf an alternative consensus mechanism is used to decentralize the sequencer, versus based sequencing, then MEV is unlikely to leak to Bitcoin miners.",
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
                        "[Learn more about OP_CAT](https://opcat.wtf/)\n[L2Beat's review on Ethereum Starknet](https://l2beat.com/scaling/projects/starknet)",
                },
            ],
        },
    ],
};

export default starknet;
