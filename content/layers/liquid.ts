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
    TechnologySnippet,
    UseCaseSnippet,
} from "../props";

const liquid: LayerProject = {
    type: Type.Layer,
    slug: "liquid",
    title: "Liquid",
    entityType: EntityType.Sidechain,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
    ],
    btcLocked: 3834,
    nativeToken: "LBTC",
    feeToken: "LBTC",
    notice: undefined,
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
                    name: "Liquid L-BTC",
                    infrastructureSlug: "liquid-lbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust a federation with custody of their BTC. The members of the federation have not been disclosed.",
                    content: TokenSnippet.LiquidLBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "Data is stored and made available by Liquid full nodes. Full nodes must connect to the network via permissioned entities",
            content: `${ReviewSnippet.DAConsensusNetwork}\n\nLiquid full nodes must connect to bridge nodes to be able to participate in the network. [Bridge nodes](https://docs.liquid.net/docs/technical-overview#general-public) are run by Liquid federation members`
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Blocks are produced by Liquid functionaries. The identities of the functionary set has not been revealed.",
            content: ReviewSnippet.OperatorFederated,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Liquid blocks are finalized via Liquid full nodes. Full nodes must connect to the network via permissioned entities",
            content: `${ReviewSnippet.AltL1FinalityFederatedFullNode}\n\nLiquid full nodes must connect to bridge nodes to be able to participate in the network. [Bridge nodes](https://docs.liquid.net/docs/technical-overview#general-public) are run by Liquid federation members.`,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Liquid does not inherit any security from Bitcoin consensus participants",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "No other token required",
                    content: BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced on Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Does not directly contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
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
                    content: TechnologySnippet.Elements,
                },
                {
                    title: "Confidential Transactions",
                    content: TechnologySnippet.ConfidentialTransactions,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Tokenized assets",
                    content: UseCaseSnippet.TokenizedAssets,
                },
                {
                    title: "Testing ground for new opcodes",
                    content: UseCaseSnippet.TestingGround,
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
