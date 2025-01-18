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
} from "../props";

const merlin: LayerProject = {
    type: Type.Layer,
    slug: "merlin",
    title: "Merlin",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Critical,
        RiskFactor.Critical,
        RiskFactor.Critical,
    ],
    btcLocked: 9303,
    nativeToken: "MERL",
    feeToken: "WBTC",
    notice: Notice.Reorg,
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
            url: "https://github.com/MerlinLayer2",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/MerlinLayer2",
        },
    ],
    description:
        "Merlin is an implementation of Polygon CDK chain. It likely is running its rollup chain on top of a permissioned fork of the EVM.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Merlin MBTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users deposit funds into a MPC wallet managed by a custodian",
                    content:
                        "When users deposit funds into Merlin, they deposit funds into a MPC wallet managed by Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Merlin has stated that more players are being added into this custody scheme.\n\n[Source](https://www.cobo.com/post/cobo-bitmap-tech-establish-merlin-chain-bitcoin-layer-2-network-with-mpc-custody-technology)",
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into a smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens.\n\nTo deposit these tokens on Babylon, the protocol relies on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon.\n\nBedrock has not disclosed who is responsible for securing and staking native BTC on users' behalf.",
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "Users trust Lorenzo, the operators of Lorenzo stBTC, to secure and stake native BTC that backs stBTC. It has also been stated in Lorenzo's [marketing materials](https://medium.com/@lorenzoprotocol/lorenzo-allies-with-cobo-ceffu-and-chainup-e0d824c4744d) that custodian providers Cobo, Ceffu, and Chainup are participating in Lorenzo's protocol as custody providers, but their documentation does not claim this.\n\nUsers trust Lorenzo's claims in their documentation are being executed in practice.\n\n[Source](https://docs.lorenzo-protocol.xyz/introduction/stbtc-issuance-and-settlement)",
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "MBTC on Merlin backs SolvBTC on Merlin",
                    content:
                        "SolvBTC is backed by MBTC on Merlin. MBTC backing SolvBTC is held in a [GnosisSafe with a 1/5 signer threshold](https://scan.merlinchain.io/address/0x6a57a8d6c4fe64b1fd6e8c3e07b0591d22b7ce7f).",
                },
                {
                    name: "Solv SolvBTC.BBN",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "Four entities custody the bitcoin assets backing Solv.BBN tokens. These entities are Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking).\n\nCeffu and Cobo are the custodians for funds that are staked with Babylon.\n\n[Source](https://docs.solv.finance/staking-abstraction-layer-sal/the-ecological-view)",
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "State data is stored and made available by a permissioned network. The identities of its members are under review",
            content:
                "Merlin's parent chain is a private network. We cannot verify who is responsible for making data available. Users should remain cautious when interacting with this chain.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Blocks are produced by a centralized sequencer and forced inclusion mechanism is unverified",
            content:
                "Merlin chain blocks are currently produced by a centralized sequencer. It posts state updates to its parent chain which is a private network. We cannot review its trust assumptions. Users should remain cautious when interacting with this chain.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Sequencer batches and validity proofs posted to a permissioned network",
            content:
                "Merlin's parent chain is a private network. We cannot verify smart contracts related to Merlin. Users should remain cautious when interacting with this chain.",
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
                        "Gas on the Merlin chain is currently paid in a BTC-synthetic. It is unknown if Merlin will use the MERL token for network security in the future.",
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
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content:
                        "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Merlin's L1 contracts cannot be verified",
                    content:
                        "Merlin Chain contracts are all currently upgradeable by an admin. The contracts it has listed on its CDKValidium can not be verified on its respective L1 blockchain.",
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
