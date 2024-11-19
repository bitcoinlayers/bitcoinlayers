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

const libre: LayerProject = {
    type: Type.Layer,
    slug: "libre",
    title: "Libre",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 3,
    nativeToken: "LIBRE",
    feeToken: "LIBRE",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://chain.libre.org",
        },
        {
            text: Site.Docs,
            url: "https://docs.libre.org/libre-docs",
        },
        {
            text: Site.Explorer,
            url: "https://libre.antelope.tools",
        },
        {
            text: Site.GitHub,
            url: "https://gitlab.com/libre-chain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/libreblockchain",
        },
    ],
    description:
        "Libre is a sidechain that leverages a Delegated Proof of Stake (DPoS) consensus mechanism. It currently features three tokens: PBTC, PUSDT, and LIBRE. BTC live on the Libre network is managed by an alternative consensus mechanism that is not directly affiliated with Libre.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Libre's bridge relies on a third party provider. Signers are permissioned nodes from the pNetwork. Less than 5, individual signers have been publicly announced",
            content:
                "BTC users who deposit funds onto Libre do so via the pNetwork bridge. A limited group of signers operate the bridge.\n\n⚠️ The pNetwork bridge has historically seen two exploits occur. One of those exploits involved BTC-backed tokens.\n\n[Source](https://docs.libre.org/libre-docs/cross-chain-interoperability/bitcoin-mainnet)",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "Data availability requirement is satisfied by Libre's permissioned validator set",
            content:
                "The data availability and storage requirement is satisfied by Libre validators. Anyone can participate as a validator after receiving permission from the current validator set to join the candidate pool.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "The Libre network is operated by a permissioned validator set",
            content:
                "Libre validators are responsible for proposing and signing blocks to finalize Libre transactions. There are 21 validators that participate in block production. They are selected for a round based on their voting power. Validators that are not selected as a part of this round must wait in a candidate pool. Rounds last 126 seconds. If there are not a minimum of 10 active validators, block production would fail.\n\nWhen selected, validators win the right to propose blocks for 6 seconds during a specific round. During this time frame they must produce 12 blocks.\n\nTo register as a Libre validator, operators must run a node on testnet for two weeks and request permission to run a mainnet validator after these two weeks have passed.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Finality assurances are provided by a federated operator set.",
            content:
                "Finality guarantees are finalized by Libre’s validator set and not by Bitcoin consensus participants.\n\n A block is considered final after a super-majority of network participants have validated a block. Once a block is considered final, it cannot be reorged.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Unilateral exits to Bitcoin not possible",
                    content:
                        "Users cannot unilaterally from Libre. Users must trust alternative consensus mechanisms to withdrawal funds.",
                },
                {
                    title: "Libre does not leak MEV to Bitcoin",
                    content:
                        "Libre does not leak MEV to the Bitcoin base layer.",
                },
                {
                    title: "An alternative token plays a role in network security",
                    content:
                        "Libre relies on the LIBRE token for network security and operation.",
                },
                {
                    title: "No fees paid to Bitcoin miners",
                    content:
                        "Libre does not contribute to Bitcoin’s security budget.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Token delegating used to select validators",
                    content:
                        "LIBRE token holders can use their voting power to select validators. Voting power is based on the amount of tokens someone has, and how long they’ve been staked. Currently, four accounts hold over 50% of the voting power.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust the operators of the pNetwork to process their withdrawals",
                    content:
                        "When users withdraw funds from the Libre chain, they trust the operators of the Libre chain to include their withdrawal transaction in a block. They additionally trust the operators of the pNetwork to process their withdrawal and release their funds on the Bitcoin main chain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EOSIO technology stack",
                    content:
                        "The Libre Chain is built on the EOSIO (commonly known as EOS) blockchain framework. It runs on a delegated proof-of-stake consensus mechanism. Validators are required to acquire and stake tokens, or have tokens be delegated towards them by ecosystem participants.\n\nIn Libre, token holders delegate their tokens and validators’ probability on winning blocks is based on their delegated tokens’ weighted voting power. This power is determined by the amount of tokens and how long they’ve been staked.\n\nIn EOS blockchain designs, only the top 21 block producers by staking power are include in a block production round. After producers are included in a round, they propose blocks in alphabetical order. In their slot, they must produce 12 blocks within 6 seconds or risk slashing penalities.",
                },
                {
                    title: "Delegated Proof-of-Stake",
                    content:
                        "Validator inclusion in producer rounds is based on their voting power. Voting power is derived from the amount of tokens they have staked and the amount of time they have been staked. The validators will the highest voting power are included in producer rounds.\n\nToken holders can delegate tokens to their preferred validators in Libre's DPOS consensus mechanism, which are distributed to holders from the validators.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Fast payments",
                    content:
                        "The Libre blockchain offers faster payments with lower fees than the Bitcoin mainchain.",
                },
                {
                    title: "Stablecoin payments",
                    content: "The Libre blockchain offers stablecoin payments.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Node implementation is not open-source",
                    content:
                        "The node implementation for Libre is not open source.\n\nInformation related to the pNetwork bridge is open source.",
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
                        "[Libre website](https://chain.libre.org/)\n[Libre docs](https://docs.libre.org/libre-docs)",
                },
            ],
        },
    ],
};

export default libre;
