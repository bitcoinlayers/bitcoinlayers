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

const stacks: LayerProject = {
    type: Type.Layer,
    slug: "stacks",
    title: "Stacks",
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
        RiskFactor.UnderReview,
    ],
    btcLocked: 1054,
    nativeToken: "STX",
    feeToken: "STX",
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
            tier: RiskFactor.VeryHigh,
            title: "Users must trust centralized companies with custody of their BTC. Signers under review",
            content:
                "Stacks has no consensus-enshrined BTC bridge. It does have third-party bridges, which are operated by centralized custodial parties. Users must trust the operators of these bridges to custody their BTC and back bitcoin-backed tokens on the Stacks network.\n\nThe primary third-party bridge is operated by [Alex Labs](https://alexlab.co/).",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data availability requirement is fulfilled through Stacks' full nodes",
            content:
                "Stacks posts state roots to Bitcoin, but not full transaction calldata. Because of this, Stacks' state cannot be reconstructed using only data from Bitcoin. Stacks has a permissionless validator and node operator set which participate in making data availability readily available.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Leverages a permissionless consensus mechanism",
            content:
                "Stacks has a permissionless block production mechanism, but it does not support exits that circumvent its miner/validator set. This means that users must trust Stacks validators to include their transactions in blocks. Anyone with sufficient capital and resources can participate as a Stacks miner. The large majority of Stacks blocks are built by Bitcoin miners additionally mining Stacks.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "State transitions finalized by permissionless, alternative consensus mechanism",
            content:
                "The Nakamoto upgrade may have affected the score for the Finality section. This section is currently under review.",
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
                        "Users cannot unilaterally exit from the Stacks sidechain with an L1 Bitcoin transaction. They currently trust centralized operators to process their withdrawals.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin, but Bitcoin miners can extract MEV from Stacks",
                    content:
                        "Stacks' mining process requires a Bitcoin miner to submit a block commit as a bid to build a Stacks block. It is possible for a Bitcoin miner to censor all bids to build Stacks' blocks when building a Bitcoin block. Since the active Bitcoin miner would be the only entity with the ability to win a Stacks block, they could submit a minimal amount of funds to win the block and receive all STX rewards. This MEV-extraction scenario looks to be solved in the Nakamoto upgrade.\n\n🔬We are reviewing this section of the assessment.",
                },
                {
                    title: "An alternative token plays a role in network security",
                    content:
                        "The STX token is required to pay for transaction fees and smart contract execution on the Stacks network. It is also used as a reward for miners who participate in the PoX consensus mechanism. The token is indirectly required for the security of the network, as block production by miners is incentivized by STX.",
                },
                {
                    title: "Stacks indirectly contributes to the security budget",
                    content:
                        "Stacks sees Bitcoin miners bid on the opportunity to win Stacks blocks and earn fees for doing so. However, miners rewards are paid out in STX tokens via a distinct mining set up.",
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
                    title: "sBTC",
                    content:
                        "sBTC is still in development as of March 2024. It is a bridged version of BTC on Stacks. sBTC is minted by locking up BTC on Bitcoin, and is redeemable for BTC at a 1:1 ratio. sBTC is not yet permissionless, as withdrawals are permissioned by the validator set.",
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
