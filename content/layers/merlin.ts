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

const merlin: LayerProject = {
    type: Type.Layer,
    slug: "merlin",
    title: "Merlin",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 9303,
    nativeToken: "MERL",
    feeToken: "WBTC",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://merlinchain.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.merlinchain.io",
        },
        {
            text: Site.Explorer,
            url: "https://scan.merlinchain.io",
        },
        {
            text: Site.GitHub,
            url: "https://docs.merlinchain.io/merlin-docs/developers",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/MerlinLayer2",
        },
    ],
    description:
        "Merlin is an implementation of Polygon CDK chain. It likely is running a Polygon chain on top of a permissioned fork of the EVM.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Users deposit funds into a MPC wallet managed by a custodian",
            content:
                "When users deposit funds into Merlin, they deposit funds into a MPC wallet managed by Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Merlin has stated that more players are being added into this custody scheme.\n\n🔬We are currently reviewing the signers for the Merlin two-way peg.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "State data is stored and made available by a permissioned data availability committee. The identities of its members are under review",
            content:
                "Merlin chain is built on the Polygon CDK stack. In its Github, it has a copy of the Polygon CDK Committee contract. In the contract, it states that the admin has the control to set up the committee, so it is likely that the members of this committee are permissioned and selected by the Merlin Chain operator. We have not been able to verify the members of this committee.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Blocks are produced by a centralized sequencer and forced inclusion mechanism is unverified",
            content:
                "Merlin chain blocks are currently produced by a centralized sequencer. If the sequencer were to go down, or censor users, users would force include transactions to an L1 that is not Bitcoin. We have not verified if Merlin's forced inclusion mechanism is currently live.\n\nAdditionally, Merlin transactions are not finalized until its parent chain accepts the Merlin state transition.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Sequencer batches and validity proofs posted offchain. ❓ We are unable to verify Merlin Chain's L1 contracts",
            content:
                "Merlin uses zkSNARKS to ensure state correctness. The Merlin prover posts validity proofs of execution to its L1 contract to finalize state transitions. It is unknown which chain Merlin posts its latest state root to.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Merlin currently inherits no security from Bitcoin",
                    content:
                        "Merlin's L1 contracts and data availability mechanism point to participants in an alternative consensus protocol that is not Bitcoin.",
                },
                {
                    title: "MERL token is live, but not currently used to pay transaction fees",
                    content:
                        "Gas on the Merlin chain is currently paid in a BTC-synthetic. It is unknown if Merlin will use the MERL token for network security in the future.\n\nWhen Merlin integrates with Bsquared Network, it will rely on the BSQ token for security.",
                },
                {
                    title: "No MEV introduced to Bitcoin, but a centralized sequencer can reorder transactions",
                    content:
                        "Merlin does not introduce any MEV on the Bitcoin L1. Users trust the Merlin sequencer to not reorder their transactions to extract MEV.",
                },
                {
                    title: "Merlin does not contribute to the security budget",
                    content:
                        "Merlin does not currently contribute to the Bitcoin security budget.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Some code is not open-source",
                    content:
                        "Merlin Chain contracts are all currently upgradeable by an admin. The contracts it has listed on its CDKValidium can not be verified on its respective L1 blockchain.",
                },
                {
                    title: "Merlin L1 smart contract not verified",
                    content:
                        "We are currently unable to verify if the smart contracts listed in Merlin's Github are in fact the contracts used on its mainnet. The main contract for Polygon CDKValidium on Ethereum was previously listed as the Merlin L1 contract in its documentation, but that was removed and no longer listed. Merlin chain have announced they will deploy their chain on Bsquared Network's L1 blockchain, which is a permissioned network. New contracts have been listed in its Github, but their L1 RPC points to a different chain that is not Bsquared Network.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Withdrawals are processed by a custodian",
                    content:
                        "Withdrawals from Merlin chain are processed by a custodial operator. Users trust that the Merlin sequencer will include their withdrawal request in a block, and that the custodial operators of the bridge will facilitate an exit from the system.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Leveraging the Polygon zkEVM stack",
                    content:
                        "Merlin was deployed by Lumoz, a Rollup-as-a-Service provider that supports the Polygon zkEVM stack. This sees the Merlin chain be EVM-compatible and mimic a similar architecture to Polygon Validiums on Ethereum, albeit the security of its host chain is unknown.",
                },
                {
                    title: "EVM-compatible",
                    content:
                        "Rollux uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its coding language, which is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Rollux is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on Rollux compared to other execution environments.",
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
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Merlin Chain website](https://merlinchain.io/)\n[Merlin documentation](https://docs.merlinchain.io/merlin-docs/resources/merlin-contracts)\n[Merlin Chain's Github](https://github.com/MerlinLayer2/)",
                },
            ],
        },
    ],
};

export default merlin;
