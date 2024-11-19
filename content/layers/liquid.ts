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

const liquid: LayerProject = {
    type: Type.Layer,
    slug: "liquid",
    title: "Liquid",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.Medium,
    ],
    btcLocked: 3834,
    nativeToken: "LBTC",
    feeToken: "LBTC",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://liquid.net",
        },
        {
            text: Site.Docs,
            url: "https://docs.liquid.net/docs/technical-overview",
        },
        {
            text: Site.Explorer,
            url: "https://blockstream.info/liquid",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ElementsProject/elements",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/bitcoinlayers",
        },
    ],
    description:
        "The Liquid Network is a sidechain that enables users to perform confidential transactions, swaps, issue tokenized assets, and more, on the sidechain. It is managed by a permissioned federation, and does not use the Bitcoin Layer 1 for security. It uses a federated multi-sig to custody the BTC that is used to issue BTC IOUs (L-BTC) on the sidechain.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Users trust a federation with custody of their BTC. Signers under review",
            content:
                "BTC withdrawals are currently permissioned by the Liquid federation. Users must trust that when they deposit BTC into the Liquid blockchain, the signers will not collude and steal their BTC. Most users typically acquire L-BTC on secondary marketplaces, not through bridge deposits. Supported marketplaces for L-BTC are also members of the Liquid federation. Users trust that the federation will not steal the BTC, which would leave their newly acquired L-BTC worthless. The BTC that backs L-BTC is held in a 11-15 multi-sig wallet where 11 (⅔ + 1) of the signers would need to be compromised in order to steal the BTC.\n\n🔬We are currently reviewing the signers for the Liquid two-way peg",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Liquid full nodes. Anyone can run a Liquid full node",
            content:
                "The data for Liquid sidechain is stored on the Liquid blockchain. A federation is responsible for publishing and validating transactions that are published to Liquid Network nodes. Node software is open-source and anyone can run a node and verify the state of Liquid. However, node operators connect to the network through “bridge nodes” that are run by permissioned actors. Access to bridge nodes can be cut off should these actors (roughly 65) not provide access.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "Blocks are produced by a federation",
            content:
                "Liquid blocks are proposed and finalized by the Liquid federation. The role of block production is permissioned, meaning that it is not possible for anyone with sufficient resources to join the network as a block producer. Users trust that the federation will not censor them and include their transactions in Liquid blocks.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Liquid blocks are finalized via Liquid full nodes",
            content:
                "After blocks are proposed by a functionaries, 11/15 functionaries are needed to sign off on the block to propagate it to the network. After this is done, Liquid full nodes accept the block and include it in the chain.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Liquid does not inherit any security from Bitcoin consensus participants",
                    content:
                        "Due to network operators being a closed set up, the Liquid sidechain does not inherit security from Bitcoin consensus participants.",
                },
                {
                    title: "No other token required",
                    content:
                        "Liquid does not have a native token that plays a role in network security. Users trust the reputation of Liquid functionaries and federation members, whom have also KYC'd to the Blockstream development company, to operate the network honestly.",
                },
                {
                    title: "No MEV introduced on Bitcoin",
                    content:
                        "Liquid does not leak MEV to the Bitcoin base layer.",
                },
                {
                    title: "Does not directly contribute to the security budget",
                    content:
                        "Liquid pays transaction fees to miners when facilitating withdrawals and deposits for its two-way peg.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust permissioned operators to process their withdrawals",
                    content:
                        "Withdrawals are permitted by the Liquid Federation. There is no way for users to withdraw their funds if the federation censors them. Users can also use a secondary marketplace to swap BTC for LBTC, but also must trust the federation to include, propose and validate their swap transaction within a Liquid block.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Elements",
                    content:
                        "Liquid is built with the Elements technology stack. Elements is an open-source technology stack built on top of the Bitcoin code base. Since it is built on the Bitcoin code base, Elements enables Liquid to be a testing ground for potential changes to the Bitcoin protocol.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Confidential Transactions",
                    content:
                        "Liquid enables Confidential Transactions which can provide users a higher level of privacy. This feature ensures that anyone, other than the participants in a transaction, cannot see the tokens, and the amount of, transferred between them.",
                },
                {
                    title: "Tokenized assets",
                    content:
                        "Liquid enables developers and users alike to issue tokenized securities, stablecoins, and synthetic forms of cryptocurrencies.",
                },
                {
                    title: "Testing ground for new opcodes",
                    content:
                        "Since Liquid has enabled opcodes that are not yet live on Bitcoin, developers can deploy applications there to preview what it would be like on Bitcoin. This includes analyzing the builder experience, potential security vulnerabilities, and presenting how these changes might permanently affect the Bitcoin network.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust permissioned operators to process their withdrawals",
                    content:
                        "Withdrawals are permitted by the Liquid Federation. There is no way for users to withdraw their funds if the federation censors them. Users can also use a secondary marketplace to swap BTC for LBTC, but also must trust the federation to include, propose and validate their swap transaction within a Liquid block.",
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
                        "All code related to the Liquid Network project is open source.",
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
                        "[Liquid website](https://liquid.net/)\n[Article explaining how L-BTC works](https://help.blockstream.com/hc/en-us/articles/900001408623-How-does-Liquid-Bitcoin-L-BTC-work)\n[Liquid documentation](https://docs.liquid.net/docs/technical-overview)\n[Article covering the nuance around Liquid's security model](https://blog.liquid.net/the-truth-about-liquid/)",
                },
            ],
        },
    ],
};

export default liquid;
