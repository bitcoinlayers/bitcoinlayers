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
    RiskSummarySnippet,
    CustodyTitle,
} from "../props";

const side: LayerProject = {
    type: Type.Layer,
    slug: "side",
    title: "Side Protocol",
    entityType: EntityType.PoSNetwork,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "SBTC",
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
        "Side Protocol is a Proof-of-Stake blockchain for BTC-denominated applications. It runs on CometBFT consensus.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: `${RiskSummarySnippet.RiskFederationPeg}`,
            },
            {
                title: RiskSummarySnippet.TitleAlternativeL1,
                content: RiskSummarySnippet.RiskSummaryAlternativeL1,
            },
        ],
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
                tier: RiskFactor.High,
                title: "Side sBTC is managed by a federation made up of a portion of its validator set",
                content: TokenSnippet.SideBTC,
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
            content: ReviewSnippet.OperatorSidechainPOS,
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
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Side Chain is IBC=compatible",
                    content: TechnologySnippet.IBC,
                }
            ],
        },
        {
            id: "usecase",
            title: "Use cases",
            content: [
                {
                    title: "Side Chain offers a variety of financial applications",
                    content: UseCaseSnippet.OnchainApps,
                }
            ],
        },
    ],
};

export default side;
