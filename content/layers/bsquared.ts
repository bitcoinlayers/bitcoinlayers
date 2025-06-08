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
    RiskSummarySnippet,
} from "../props";

const bsquared: LayerProject = {
    type: Type.Layer,
    slug: "bsquared",
    title: "Bsquared",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Sidesystem,
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
    btcLocked: 0,
    nativeToken: "BSQ",
    feeToken: "WBTC",
    notice: Notice.Reorg,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.bsquared.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.bsquared.network",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.bsquared.network",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/b2network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/BSquaredNetwork",
        },
    ],
    description:
        "The current Bsquared Network mainnet consists of two different chains. The parent chain is a fork of Ethermint. The rollup chain is a fork of of an Ethereum rollup stack.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleUpgrade,
                content: RiskSummarySnippet.RiskSummaryImmediateUpgrade
            },
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs
            },
            {
                title: RiskSummarySnippet.TitleAltDA,
                content: RiskSummarySnippet.RiskSummaryAltDACommittee,
            },
            {
                title: RiskSummarySnippet.TitleCentralizedSequencer,
                content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
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
                    name: "Bsquared WBTC",
                    infrastructureSlug: "bsquared-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users deposit funds into a MPC protocol managed by Bsquared Network and a custodian. Less than 5, individual signers have been publicly announced",
                    content: TokenSnippet.BsquaredBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.BedrockUniBTC,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.LorenzostBTC,
                },
                {
                    name: "UniRouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: RiskFactor.Critical,
                    title: "Smart contracts have not been reviewed. UniRouter has not disclosed its custodian operators",
                    content: TokenSnippet.UniRouterBTC,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.BitGowBTC,
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust centralized signers to secure BTC backing oBTC",
                    content: TokenSnippet.ObeliskoBTC,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.xlink}${TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "LayerBank BTC",
                    infrastructureSlug: "layerbank-btc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
                {
                    name: "LayerBank uBTC",
                    infrastructureSlug: "layerbank-ubtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "DA requirement is fulfilled by permissioned validators",
            content:
                "Sequencer batches are posted to the Bsquared Network L1. This network consists of a permissioned validator set who is responsible for making the data readily available. The identities of these operators has not been disclosed.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Both the rollup chain and parent chain are run by federated, centralized parties",
            content:
                "Bsquared Network’s implementation has a single sequencer that posts sequencer batches to its network of three L1 validators.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Finality is guaranteed by a permissioned validator set",
            content:
                "Bsquared receives no settlement assurances from Bitcoin. Bsquared transaction finality is determined by a centralized entity who proposes state updates to the permissioned L1 chain.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Unilateral exits not possible",
                    content:
                        "Users cannot unilaterally exit from Bsquared Network. Users trust a centralized bridge program with the custody of their Bitcoin.",
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin. Users trust a centralized operator to not reorder their transactions.",
                    content:
                        "Since Bsquared has no relationship with Bitcoin miners, it does not introduce MEV on the Bitcoin base layer. Users trust that the Bsquared Network zkEVM sequencer will not reorder transactions to extract MEV.",
                },
                {
                    title: "An alternative token exists, but is not being used for network security",
                    content:
                        "Bsquared Network has issued a token with the ticker BSQ on its L1 protocol. It has a supply of 210,000,000. One address owns the majority of this supply. Bsquared Network L1 validators do not currently stake this token.",
                },
                {
                    title: "Bsquared Network does not contribute to the security budget",
                    content:
                        "Bsquared Network’s current mainnet does not pay any fees to Bitcoin miners.",
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
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users can withdraw funds if permitted by centralized operators",
                    content:
                        "Users can withdraw their funds from Bsquared Network back to Bitcoin via two, centralized bridge providers. Information on the signers of these bridges is unavailable.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-Compatible",
                    content:
                        "Bsquared Network is EVM-compatible. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem.",
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
                    title: "Node software code is open-source",
                    content: "The node software is open-source.",
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
                        "[Bsquared Network's L1 explorer](https://hub-explorer.bsquared.network)\n[Bsquared Network Github](https://github.com/b2network)",
                },
            ],
        },
    ],
};

export default bsquared;
