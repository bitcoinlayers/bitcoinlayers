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

const bsquared: LayerProject = {
    type: Type.Layer,
    slug: "bsquared",
    title: "Bsquared Network",
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
    notice: undefined,
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
        "The current Bsquared Network mainnet consists of two different chains. The parent chain is a fork of an EVM implementation on Tendermint, and has three permissioned validators operating the network. The rollup chain is a fork of Polygon zkEVM that settles on the Bsquared parent chain.",
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
                    content:
                        "Previous blog posts have stated that when users deposit funds into Bsquared, they deposit funds into a MPC wallet managed by the Bsquared Network team and Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Bsquared has stated that more players are being added into this custody scheme.\n\nNote that we are unable to verify the participants in this model - [Source](https://www.cobo.com/post/cobo-partners-with-b2-network-to-enhance-advanced-bitcoin-layer-2-infrastructure-with-co-managed-mpc-custody-solution)",
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into a smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens.\n\nTo deposit these tokens on Babylon, the protocol relies on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon.\n\nBedrock has not disclosed who is responsible for securing and staking native BTC on users' behalf.",
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "Users trust Lorenzo, the operators of Lorenzo stBTC, to secure and stake native BTC that backs stBTC. It has also been stated in Lorenzo's [marketing materials](https://medium.com/@lorenzoprotocol/lorenzo-allies-with-cobo-ceffu-and-chainup-e0d824c4744d) that custodian providers Cobo, Ceffu, and Chainup are participating in Lorenzo's protocol as custody providers, but their documentation does not claim this.\n\nUsers trust Lorenzo's claims in their documentation are being executed in practice.\n\n[Source](https://docs.lorenzo-protocol.xyz/introduction/stbtc-issuance-and-settlement)",
                },
                {
                    name: "UniRouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: RiskFactor.Critical,
                    title: "Smart contracts have not been reviewed. UniRouter has not disclosed its custodian operators",
                    content:
                        "Users trust that the UniRouter team has set up secure custody practices and has BTC reserves backing uniBTC. UniRouter has not disclosed who secures the BTC backing uBTC.",
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content:
                        "The Bitcoin backing wBTC is secured by permissioned entities. BitGo and BiT Global are the participants responsible with custodying the funds backing wBTC across the various networks it's deployed on.\n\nThe wallets holding the bitcoin backing wBTC are dispersed between Hong Kong, Singapore, and the United States.",
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust centralized signers to secure BTC backing oBTC",
                    content:
                        "Obelisk's documentation claims that users deposit BTC into an MPC scheme to mint oBTC on a respective destination chain.\n\nUsers trust Obelisk's claims in their documentation are being executed in practice.\n\n[Source](https://docs-obelisk.nodedao.com/obtc-asset/how-to-mint-obtc-on-obelisk) ",
                },
                {
                    name: "LayerBank BTC",
                    infrastructureSlug: "layerbank-btc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "LayerBank uBTC",
                    infrastructureSlug: "layerbank-ubtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "DA requirement is fulfilled by three permissioned validators",
            content:
                "Sequencer batches are posted to the Bsquared Network L1. This network consists of a permissioned validator set who is responsible for making the data readily available.\n\n🔬We are currently reviewing the operators satisfying the Bsquared DA requirement.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Both the rollup chain and parent chain are run by federated, centralized parties",
            content:
                "Bsquared Network’s Polygon zkEVM implementation has a single sequencer that posts sequencer batches to its network of three L1 validators.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Finality is guaranteed by a permissioned validator set",
            content:
                "Bsquared receives no settlement assurances from Bitcoin. Bsquared settlement is finalized by a group of three, federated validators who verify state transitions submitted by the Bsquared Network zkEVM operator.",
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
                    content:
                        "The node software and Polygon zkEVM contracts are open-source. Its our understanding that these implementations of Polygon zkEVM and Ethermint have not been audited.",
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
