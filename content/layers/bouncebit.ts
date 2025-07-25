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
} from "../props";

const bouncebit: LayerProject = {
    type: Type.Layer,
    slug: "bouncebit",
    title: "BounceBit",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        RiskFactor.Unverified,
        RiskFactor.Unverified,
        RiskFactor.Unverified,
        RiskFactor.Unverified,
    ],
    btcLocked: 3901,
    nativeToken: "BB",
    feeToken: "BB",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bouncebit.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.bouncebit.io",
        },
        {
            text: Site.Explorer,
            url: "https://bbscan.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/BounceBit-Labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/bounce_bit",
        },
    ],
    description:
        "BounceBit is a bitcoin sidechain. It leverages a delegated proof-of-stake consensus mechanism and uses the BB and BBTC (BTC-synthetic on BounceBit) tokens for staking. It is EVM-compatible and can support an ecosystem of onchain applications.",
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
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BounceBit WBTC",
                    infrastructureSlug: "boundebit-wbtc",
                    score: 0,
                    tier: RiskFactor.Unverified,
                    title: "Bridge is managed by a third party",
                    content:
                        "The official BounceBit bitcoin bridge is proposedly managed by the Polyhedra Network. The two-way peg is currently an MPC protocol, where a selected number of signers are responsible for securing the bridge and custodying users’ BTC.\n\n🛑  We cannot currently verify claims related to BounceBit’s two-way peg. Polyhedra has not disclosed any information related to its operation of the BounceBit two-way peg.",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "A permissioned validator set, participating in a delegated proof-of-stake mechanism, satisfies the data availability requirement",
            content:
                "Currently, BounceBit’s validator set is responsible for keeping a record of the chain’s latest state. There are currently 25 active validators.\n\nThe mainnet node implementation is not open-source, so users are unable to run BounceBit nodes and maintain a record of BounceBit’s state.",
        },
        {
            category: RiskCategory.LivenessReorgResistance,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "Network managed by a permissioned set of operators participating in a delegated proof-of-stake mechanism",
            content:
                "BounceBit blocks are currently signed and proposed by 25 validators participating in its proof-of-stake network. These operators are currently permissioned.\n\nOperators stake the BB token to participate in the network. Users can delegate BBTC (wrapped bitcoin) and BB tokens to validators to increase their voting power, which improves their chances of winning blocks.",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "Settlement assurances are provided by BounceBit consensus",
            content:
                "Settlement assurances are provided by BounceBit’s validator set, not Bitcoin. More than 2/3 of BounceBit’s validators’ voting power is needed to sign a proposed block to finalize it onchain.\n\nBounceBit has single-slot finality, meaning that blocks cannot be re-organized once they are part of the canonical blockchain.\n\nBitcoin can not validate BounceBit state transitions. Bridge operators can process fraudulent withdrawals and steal user funds.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "BounceBit’s economic security can depend on wrapped BTC assets",
                    content:
                        "Due to its dual-token staking architecture, BounceBit can rely on wrapped forms of BTC for economic security. This reliance increases as more BTC is staked to secure the network.",
                },
                {
                    title: "BounceBit does not leak MEV to Bitcoin",
                    content:
                        "BounceBit does not leak MEV to the Bitcoin mainchain. Users trust BounceBit validators to not reorder their transactions to extract MEV.",
                },
                {
                    title: "An alternative token is needed for network security",
                    content:
                        "BB is one of the token's required for staking and is used to issue rewards to validators.",
                },
                {
                    title: "Bridge deposit and withdrawals pay fees to miners",
                    content:
                        "Transaction fees are paid to Bitcoin miners when users deposit and withdraw funds from the BounceBit bridge. Block rewards on BounceBit are distributed to BounceBit validators.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Mainnet node software not open-source",
            content: [
                {
                    title: "📝 Project is currently under review",
                    content:
                        "The mainnet node software is not open-source. Users trust the information within dashboards provided by the BounceBit, as they cannot run a node and verify the network’s current state and its participants.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust a third party bridge provider to process withdrawals",
                    content:
                        "Withdrawals are ultimately processed by the participants in the MPC Protocol operated by the Polyhedra Network. Users trust that BounceBit validators will include their withdrawal transaction in a block and that Polyhedra Network operators will process their withdrawal and release funds on the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Evmos & CometBFT",
                    content:
                        "BounceBit’s L1 blockchain is a fork of Evmos, an EVM-compatible chain built using the Cosmos SDK. The Cosmos SDK is built on top of CometBFT, a consensus protocol that enables high throughput and fast finality (~2-second blocks).\n\nThis architecture enables users to process transitions in both the Cosmos and EVM formats, while also ensuring BounceBit is compatible with various Cosmos SDK modules. Additionally, chains built with CometBFT are compatible with the IBC bridging standard, widely used in the Cosmos ecosystem.",
                },
                {
                    title: "EVM Compatibility",
                    content:
                        "Due to BounceBit being based on Evmos’ architecture, developers are able to deploy EMV-compatible applications on BounceBit. BounceBit can leverage EVM-supported libraries and port over EVM-based applications to BounceBit.",
                },
                {
                    title: "Delegated Proof-of-Stake",
                    content:
                        "BounceBit consensus relies on a delegated proof-of-stake (DPoS) model. Token holders delegate their BB and BBTC tokens to their favored validators. Validators with the highest amounts of delegated and staked tokens have a higher probability of winning the right to propose blocks.\n\nThe delegation process sees users transfer a token to a BounceBit validator and receive a synthetic token representing their delegated tokens. BounceBit validators can determine how much rewards they distribute to those who have delegated tokens towards them, and are incentivized to distribute a fair amount to ensure users continually delegate their tokens towards them.",
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
                        "Due to BounceBit being EMV-compatible, it can support a range of on-chain applications. This may include borrowing and lending protocols, decentralized exchanges and NFT marketplace.",
                },
                {
                    title: "Institutional finance",
                    content:
                        "BounceBit is integrated with institutional financial applications, providing users an opportunity to deposit their funds with a custodian for the custodian to leverage their tokens in investment strategies on their behalf.\n\n⚠️ If you deposit funds with a custodian, you are trusting this custodian to not steal or misappropriate your funds.",
                },
                {
                    title: "BTC Staking",
                    content:
                        "BounceBit enables BTC holders to delegate their BTC, as a part of DPoS in BounceBit, and delegate that stake to a specific validator in the BounceBit network.\n\nIn exchange for delegating their BTC, users may receive rewards in the form of BB tokens.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "BounceBit is currently operated by a closed validator set",
                    content:
                        "The operators of the BounceBit chain are a federated operator set. Prospective validators may be able to attempt and join the operator set after the mainnet node implementation is made open source.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is not open-source",
                    content:
                        "BounceBit’s mainnet node implementation is not currently open-source.",
                },
            ],
        },
    ],
};

export default bouncebit;
