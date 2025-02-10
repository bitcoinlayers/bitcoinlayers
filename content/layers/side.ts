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

const side: LayerProject = {
    type: Type.Layer,
    slug: "side",
    title: "Side Protocol",
    entityType: EntityType.Sidechain,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "SBTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://side.one",
        },
        {
            text: Site.Docs,
            url: "https://docs.side.one",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.side.exchange",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/sideprotocol",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/SideProtocol",
        },
    ],
    description:
        "Side Protocol is building a settlement layer for modular blockchains. It will run a Proof-of-Stake consensus mechanism. Its relationship with Bitcoin would be that of a sidechain, and rollups settling on Side can leverage its BTC bridge contract.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
            {
                name: "Side sBTC",
                infrastructureSlug: "side-sbtc",
                score: 0,
                tier: RiskFactor.UnderReview,
                title: TokenSnippet.UnderReview,
                content: "We are currently reviewing the implementation for this two-way peg",
            },
        ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Data availability is satisfied by Side's full node set",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Side protocol is operated by an alternative PoS network",
            content: ReviewSnippet.AltL1Operators,
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Side protocol users CometBFT for consensus",
            content: ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Side does not inherit any security from bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "sBTC or SIDE token used to pay fees",
                    content: "Users can pay fees in sBTC or SIDE on the Side Protocol",
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Side does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
    ],
};

export default side;
