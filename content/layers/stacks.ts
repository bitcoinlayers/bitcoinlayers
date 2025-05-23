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
} from "../props";

const stacks: LayerProject = {
    type: Type.Layer,
    slug: "stacks",
    title: "Stacks",
    entityType: EntityType.Anchor,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.UnderReview,
    ],
    btcLocked: 1054,
    nativeToken: "STX",
    feeToken: "STX",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.stacks.co",
        },
        {
            text: Site.Docs,
            url: "https://docs.stacks.co/docs/intro",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.hiro.so/transactions?chain=mainnet",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/stacks-network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Stacks",
        },
    ],
    description:
        "Stacks is a sidechain that aims to be programmability layer for Bitcoin. It uses a novel execution environment, Clarity. Stacks uses a hybrid PoS mechanism (PoX) and derives economic security from its native token (STX).",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "sBTC",
                    infrastructureSlug: "sBTC",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "sBTC is managed by a federation of 14 institutional signers. Withdrawals are not live",
                    content:
                        "sBTC is a bridge between bitcoin and stacks managed by 14 institutional signers. sBTC on Stacks is backed by BTC held in a wallet managed by these signers. The identities of entities participating in the sBTC bridge are publicly known.\n\nIf 10 of the signers colluded, they could steal all of the BTC backing sBTC. You can find the signers [here](https://bitcoinl2labs.com/sbtc-rollout#sbtc-signers).",
                },
                {
                    name: "Alex xBTC",
                    infrastructureSlug: "alex-xbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust Wrapped with the custody of BTC backing xBTC",
                    content:
                        "Users trust Wrapped, a custodian provider, with the custody of BTC backing xBTC. Alex, a DeFi project largely associated with the Stacks ecosystem, acquired Wrapped and has initiated a transition to move xBTC into sBTC.\n\nFunds that are not moved into sBTC are still secured by [Wrapped](https://wrapped.com/).",
                },
                {
                    name: "XLink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "There is limited information available on Xlink aBTC's custody mechanism",
                    content:
                        "There is limited information available on Xlink aBTC's custody mechanism for BTC backing aBTC. Users trust Alex, the project behind Xlink, to set up secure custody practices. Xlink's [website](https://www.xlink.network/) mentions that institutional grade MPC solutions are used.",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data availability requirement is fulfilled through Stacks' full nodes",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Stacks blocks are built by miners and validated by stakers",
            content: "Blocks are built by miners during a given mining tenure. After their tenure, stakers validate the blocks built during this tenure. Anyone with sufficient capital resources can become a miner or staker.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Low,
            title: "State transitions validated and finalized by Stackers. Block leaders must build on the latest checkpoint included in the latest block tenure that was validated by stackers",
            content: ReviewSnippet.FinalityAnchorChain,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Stacks inherits additional reorg resistance from bitcoin",
                    content: BitcoinSecuritySnippet.FinalityAssurance,
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin, but Bitcoin miners can extract MEV from Stacks",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "An alternative token plays a role in network security",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "Stacks does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust centralized operators to process their withdrawals",
                    content:
                        "Stacks users deposit BTC into Stacks through custodial bridge mechanisms. They trust that the operators of these bridges (e.g. aBTC and xBTC) will not steal their Bitcoin assets, or censor their withdrawals.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Clarity",
                    content:
                        "Stacks leverages the Clarity execution environment. The Clarity language is a subset of Lisp, and is not Turing-complete as a design choice. However, it is still expressive enough to build complex smart contracts and replicate much of the functionalities from Turing-complete environments like the EVM (i.e., DeFi, NFTs, etc.). Stacks is able to read Bitcoin state, due to both Clarity and its integrated PoX consensus mechanism. This allows for events on Stacks to be triggered by Bitcoin activity, or for smart contracts to read Bitcoin state during their execution.",
                },
                {
                    title: "Proof-of-Transfer",
                    content:
                        "Proof-of-Transfer (PoX) is Stacks' consensus mechanism, based on Proof-of-Burn. PoX involves Bitcoin miners bidding BTC for the right to mint a Stacks block. The winning miner creates the block, and is rewarded with the STX block reward and STX transaction fees from the block. The miner's bid is paid to STX stackers (stakers). This system allows for STX stackers to earn native BTC yield, and creates an additional revenue stream for miners, similar to merge-mining.",
                },
                {
                    title: "Nakamoto",
                    content:
                        "In Nakamoto Consensus, miners commit to mining Stacks blocks by broadcasting commit transactions on the Bitcoin blockchain. After winning the right to produce Stacks blocks, the selected miner gains the exclusive right to build and append Stacks blocks for a specific tenure, typically lasting about 10 minutes, corresponding to Bitcoin's block time. These blocks are then validated by Stackers, participants in a Proof-of-Stake-like mechanism. Once validated, blocks are finalized and added to the Stacks blockchain.,",
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
                        "The most popular use case for Stacks is onchain applications. Stacks has a number of applications, including lending, borrowing, and decentralized exchanges.",
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
                        "All code related to the Stacks project is free and open source.",
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
                        "[State of Stacks Q4 2023 from Messari](https://messari.io/report/state-of-stacks-q4-2023)\n[Bitcoin Connection from Stacks Docs](https://docs.stacks.co/stacks-101/bitcoin-connection)\n[Proof of Transfer from Stacks Docs](https://docs.stacks.co/stacks-101/proof-of-transfer)",
                },
            ],
        },
    ],
};

export default stacks;
