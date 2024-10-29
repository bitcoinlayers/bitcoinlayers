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
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Unverified,
        RiskFactor.Medium,
        RiskFactor.Unverified,
        RiskFactor.High,
    ],
    btcLocked: 5397,
    nativeToken: "BTR",
    feeToken: "WBTC",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.bitlayer.org/",
        },
        {
            text: Site.Docs,
            url: "https://docs.bitlayer.org/docs/Learn/Introduction",
        },
        {
            text: Site.Explorer,
            url: "https://www.btrscan.com/home",
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
            category: RiskCategory.BridgeSecurity,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "Users trust a federated signer set to custody their BTC. Signers under review",
            content:
                "Bitlayer's current BTC bridge is a federated two-way peg with institutional signers. Bitlayer is working with multiple MPC custody platforms.\n\nUsers do not custody bitcoin assets backing tokens on BitLayer.\n\n🔬We are currently reviewing the signers for the BitLayer two-way peg.",
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
            tier: RiskFactor.Unverified,
            title: "Bitlayer is operated by a permissioned validator set",
            content:
                "Bitlayer blocks are currently produced by a permissioned validator set. There are currently 21 validators participating in Bitlayer consensus. Users cannot bypass this operator set if they are censored by the validator set.\n\n🔬We are currently reviewing who operates BitLayer validators.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "BitLayer validators finalize blocks",
            content:
                "There is no onchain enforcement of Bitlayer state transitions on bitcoin. BitLayer's state transitions are finalized by a permissioned validator set. Validators sign off on proposed blocks and finalize them in the chain.",
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
                    title: "Bridge participants",
                    content:
                        "Coinbase and Sinohope are the two institutions that have been said to be participating in securing BitLayer's official bridge. Limited information around the current two-way peg construction is available.",
                },
                {
                    title: "BitVM exploration",
                    content:
                        "The Bitlayer team has an open repository of research related to BitVM. They are looking to build a trust-minimized bridge between Bitlayer and Bitcoin. Bitlayer’s documentation site states that the BitVM implementation will be federated.",
                },
                {
                    title: "Alternative DA exploration",
                    content:
                        "According to Bitlayer’s docs, the team plans on using an alternative solution for data availability. Users would trust the consensus mechanism behind this solution instead of Bitcoin full nodes for the availability of data.",
                },
                {
                    title: "Bitcoin-friendly FRI exploration",
                    content:
                        "Fast Reed-Solomon Interactive Oracle of Proximity (FRI) is a cryptographic proof system. Most notably, FRI is used to construct STARKs. Bitlayer is exploring the verification of FRI and considers its solution to be ‘Bitcoin-friendly’ – as it does not require OP_CAT or any tools that don’t already exist on Bitcoin today. Bitlayer’s system leverages Taptrees for the required Merkle commitments in the proving scheme and BitVM-style BitCommitments for state propagation. Bitlayer has not yet open-sourced code or released documentation for this FRI verification system.",
                },
                {
                    title: "OP-DLC exploration",
                    content:
                        "Discrete log contract (DLC) is a contract execution framework allowing for two parties to make conditional payments, mediated by an oracle. In the OP-DLC model that Bitlayer is developing, the oracle is set up as a federation with fraud proof-style ‘slashing’ conditions on required collateral. Bitlayer has not yet open-sourced code or released documentation for this OP-DLC contract execution system.",
                },
                {
                    title: "Ethereum Virtual Machine",
                    content:
                        "Bitlayer uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Bitlayer is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on Bitlayer compared to other execution environments.",
                },
                {
                    title: "Faster block times",
                    content:
                        "Bitlayer is currently producing blocks every two seconds which provides a better user experience than using the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "EVM-based applications",
                    content:
                        "The potential use cases for Bitlayer are similar to that of other EVM-based sidechains. Developers can deploy smart contracts that enable applications like borrowing and lending protocols, stablecoins, NFTs, and more. The primary, proposed use case for Bitlayer is to act as an application layer for Bitcoin.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "Bitlayer is run by a permissioned validator set",
                    content:
                        "Bitlayer is currently run by 21 federated validators securing the network. The operators of these validating nodes are unknown. Although there are claims that these validators would stake Bitlayer's native token, BTR, to secure the network, none of the active validator addresses currently hold any BTR tokens. These nodes are presumably responsible for data availability, block production and finalizing the state of the sidechain.",
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
