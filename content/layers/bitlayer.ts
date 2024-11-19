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

const bitlayer: LayerProject = {
    type: Type.Layer,
    slug: "bitlayer",
    title: "Bitlayer",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.UnderReview,
        RiskFactor.High,
    ],
    btcLocked: 5397,
    nativeToken: "BTR",
    feeToken: "WBTC",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.bitlayer.org",
        },
        {
            text: Site.Docs,
            url: "https://docs.bitlayer.org",
        },
        {
            text: Site.Explorer,
            url: "https://www.btrscan.com",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/bitlayer-org",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/BitlayerLabs",
        },
    ],
    description:
        "Bitlayer's mainnet v1 is a federated sidechain. It supports an EVM execution environment with plans to support other VMs.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Users trust federated signers set to custody their BTC. Less than 5, individual signers have been publicly announced",
            content:
                "Bitlayer's current BTC bridge is a federated two-way peg with institutional signers. Bitlayer is working with multiple MPC custody platforms.\n\nUsers do not custody bitcoin assets backing tokens on Bitlayer.\n\nNote that we are unable to verify the participants in this model - [Source](https://docs.bitlayer.org/docs/Learn/BitlayerNetwork/Bridges)",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored offchain with node software open-source",
            content:
                "Bitlayer does not currently use Bitcoin for data availability. The data availability requirement is currently fulfilled by Bitlayer full nodes. The Bitlayer node software is open source and anyone can run a node and validate the state of Bitlayer.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Bitlayer is operated by a permissioned validator set",
            content:
                "Bitlayer blocks are currently produced by a permissioned validator set. There are currently 21 validators participating in Bitlayer consensus. Users cannot bypass this operator set if they are censored by the validator set.\n\n🔬We are currently reviewing the identities of Bitlayer's validators.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Bitlayer validators finalize blocks",
            content:
                "There is no onchain enforcement of Bitlayer state transitions on bitcoin. Bitlayer's state transitions are finalized by a permissioned validator set. Validators sign off on proposed blocks and finalize them in the chain.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Bitlayer does not currently inherit any security from Bitcoin consensus participants",
                    content:
                        "Bitlayer is a federated sidechain, and Bitcoin consensus participants do not participate in securing Bitlayer.",
                },
                {
                    title: "BTR token issued, but validators are not required to stake BTR",
                    content:
                        "None of the validators in Bitlayer’s validator set are staking its native token, BTR. Currently the BTR supply is 1B and is dispersed across 6 addresses. It is unknown if Bitlayer will use this token to incentivize its current set of validators, or other future operators.",
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content:
                        "Bitlayer, due to a lack of current relationship with Bitcoin, does not introduce MEV on the Bitcoin blockchain. Users trust that Bitlayer's permissioned  validator set will not extract MEV.",
                },
                {
                    title: "Bitlayer does not contribute to the security budget",
                    content:
                        "Bitlayer does not currently contribute to the Bitcoin security budget.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users cannot unilaterally withdraw from the Bitlayer sidechain",
                    content:
                        "Users of Bitlayer's primary bridge program, or third party bridges, cannot unilaterally withdraw their assets from Bitlayer. They trust that Bitlayer validators will include withdrawal transactions in Bitlayer blocks, and that multi-sig signers will process their withdrawal back to the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content:
                        "Bitlayer uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Bitlayer is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on Bitlayer compared to other execution environments.",
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
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Portions of code is open-source",
                    content:
                        "Some of the code related to the Bitlayer project is open-source.",
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
                        "[Bitlayer block explorer](https://www.btrscan.com/home)\n[Bitlayer's validator set](https://www.btrscan.com/leaderboard)",
                },
            ],
        },
    ],
};

export default bitlayer;
