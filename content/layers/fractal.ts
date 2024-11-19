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

const fractal: LayerProject = {
    type: Type.Layer,
    slug: "fractal",
    title: "Fractal",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "FB",
    feeToken: "FB",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.fractalbitcoin.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.fractalbitcoin.io",
        },
        {
            text: Site.Explorer,
            url: "https://www.okx.com/web3/explorer/fractal-bitcoin",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/fractal-bitcoin/fractald-release",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/fractal_bitcoin",
        },
    ],
    description:
        "Fractal is a Bitcoin sidechain purpose built to scale bitcoin-native applications like Runes and BRC-20s. It leverages a novel consensus mechanism similar to merge-mining.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Fractal relies on a third party for bridge infrastructure",
            content:
                "Fractal’s asset bridge between Bitcoin and Fractal is managed by a third party, Bool Network. Bool Network is responsible for custodying the bitcoin assets that back BTC on Fractal.\n\n⚠️ The code behind Bool Network’s bridge is not open-source. We do not know the signing mechanism, or who the signers are, for the Bool Network.\n\n⚠️ If a fraudulent withdrawal was processed by the bridge operator, users would have no way to challenge it. Bridge operators can steal funds.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "DA requirement satisfied by Fractal full nodes",
            content:
                "The data availability requirement is satisfied by sidechain full nodes. Fractal’s node software is open-source, and anyone can run a full node to verify the current state of the chain.\n\nLike any sidechain, sidechain blocks can be orphaned, so miners are disincentivized to withhold data and not broadcast their blocks as they would not receive mining rewards.",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Blocks are produced by two distinct miner sets",
            content:
                "Fractal inherits probabilistic finality from its operator set. It implements a mining mechanism called “cadence mining” that sees every ⅓ blocks merge-mined by bitcoin miners, and ⅔ blocks mined by miners running Fractal’s mining software. This sees Fractal run two different mining algorithms catered to two different operator sets.\n\nFractal blocks are considered finalized after a sufficient amount of hashrate has built on top of the longest chain.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Fractal full nodes validate proposed blocks",
            content:
                "Fractal state transitions are validated by its miner set. After a block is mined by a Fractal miner, it is broadcast to its full node set who validates the block and includes it in the chain.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Fractal is partially merge-mined",
                    content:
                        "Fractal is partially secured by bitcoin miners who merge-mine fractal as a part of its cadence mining set up.",
                },
                {
                    title: "MEV not directly on bitcoin",
                    content:
                        "Fractal does not leak MEV to bitcoin directly. Bitcoin miners may take advantage of opportunities to extract MEV if the network is experiencing high activity.",
                },
                {
                    title: "Alternative token used for fees and to incentivize miners",
                    content:
                        "Fees on Fractal are paid in FB tokens. Token issuance is paid out in FB tokens to incentivized miners.",
                },
                {
                    title: "Merge-mining enables Bitcoin miners to earn more fees",
                    content:
                        "Fractal contributes to Bitcoin's security budget indirectly by providing Bitcoin miners an opportunity to earn fee revenue via merge-mining.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "The Fractal blockchain is growing at a fast rate",
                    content:
                        "The Fractal blockchain is growing at a rate much faster than that of Bitcoin. As the blockchain continues to grow, it becomes more difficult for users to run Fractal full nodes. This might see the majority of users pass on the data availability requirement onto another party.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust sidechain consensus and third party bridge providers with withdrawals",
                    content:
                        "Withdrawals from Fractal, like any sidechain, users would need to trust the operators of the Fractal chain and the bridge operator, the Bool Network, to process their withdrawal transaction and release funds on the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Bitcoin Script",
                    content:
                        "Bitcoin Script is bitcoin’s scripting language that enables users to define the conditions under which a Bitcoin UTXO can be spent. It is a low-level Assembly-based programming language.\n\nFractal is based on Bitcoin Script.",
                },
                {
                    title: "OP_CAT",
                    content:
                        "OP_CAT is a Bitcoin opcode, short for Operation Concatenate. It allows the combination of two data elements on the Bitcoin stack. The opcode was originally introduced by Satoshi Nakamoto, but was removed due to potential denial of service attack vectors.\n\nOP_CAT would enable more expressive smart contracts on bitcoin, including “covenants”, a way to set spending conditions on individual UTXOs. Teams are also reviewing how it can support SNARK verification in Script, which would further improve bridging L1 assets to second layer protocols.",
                },
                {
                    title: "Merge-mining",
                    content:
                        "Merged mining is a feature of Fractal’s consensus mechanism that allows coupling between bitcoin and Fractal. Essentially, BTC mining pools add references to Fractal blocks in mining jobs sent to mining participants. Additionally, because the Fractal mining algorithm is the same as bitcoin’s, there is little added energy expenditure. This sees bitcoin miners have an ability to additionally mine a percentage of Fractal blocks. Miners are incentivized through earning a portion of transaction fees and newly issued tokens to mine Fractal.",
                },
                {
                    title: "Cadence mining",
                    content:
                        "Cadence mining is a novel mining mechanism that sees ⅓ of Fractal blocks mined by bitcoin miners who merge-mine Fractal, and ⅔ of Fractal blocks mined by its own miner set. Thus, the security of Fractal mining is dependent on two distinct operator sets.\n\nBitcoin miners who want to merge-mine Fractal point some of their hashrate to secure the Fractal chain. Fractal miners run a distinct mining software that sees them leverage a different difficulty adjustment.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Ordinals, Runes, & BRC-20 trading",
                    content:
                        "Due to having a similar scripting language as the Bitcoin mainchain, Fractal provides users with similar applications for Ordinals and BRC-20 token trading as the Bitcoin L1.",
                },
                {
                    title: "Testing ground for new opcodes",
                    content:
                        "Since Fractal has enabled opcodes that are not yet live on Bitcoin, developers can deploy applications there to preview what it would be like on Bitcoin. This includes analyzing the builder experience, potential security vulnerabilities, and presenting how these changes might permanently affect the Bitcoin network.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content:
                        "The source code for Fractal's node implementation is open-source.",
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
                        "[Fractal block explorer.](https://fractal.unisat.io/explorer)",
                },
            ],
        },
    ],
};

export default fractal;
