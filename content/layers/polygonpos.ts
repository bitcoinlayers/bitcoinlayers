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
    BitcoinSecuritySnippet,
    RiskSummarySnippet,
} from "../props";

const polygon: LayerProject = {
    type: Type.Layer,
    slug: "polygonpos",
    title: "Polygon PoS",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "POL",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://polygon.technology/",
        },
        {
            text: Site.Docs,
            url: "https://docs.polygon.technology/",
        },
        {
            text: Site.Explorer,
            url: "https://polygonscan.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/0xpolygon",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/0xPolygon",
        },
    ],
    description:
        "Polygon is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: `${RiskSummarySnippet.RiskSummaryCustodianPegs}`,
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
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BitGowBTC,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.ThresholdtBTC}\n\n${TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Avalanche BTCb-Polygon",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.AvalancheBTCb}\n\n${TokenSnippet.smartcontractreview},`
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Data is stored and made available by Polygon full nodes",
            content:
                "The data for Polygon's state is made available by its full nodes. Anyone can run an Polygon node and verify is state.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Polygon is operated by a distributed validator set",
            content:
                "Blocks are built and proposed by a distributed consensus network. Block producers in Polygon PoS are committee based and selected by its validator set.\n\nThe set of block producers is rotated periodically.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "We are currently reviewing Polygon's finality guarantees",
            content:
                "Blocks are validated and finalized by a distributed consensus network. Block producers in Polygon PoS are elected to exclusively construct blocks for a specific duration of time.\n\nAfter blocks are constructed, they are validated by the block producer committee.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Polygon PoS does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "POL token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Polygon PoS does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content:
                        "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default polygon;
