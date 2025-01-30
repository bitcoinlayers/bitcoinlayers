import Risk from "@/components/layer/layerTableItemRisk";
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
    UseCaseSnippet,
    TechnologySnippet,
    BitcoinSecuritySnippet,
} from "../props";

const taiko: LayerProject = {
    type: Type.Layer,
    slug: "taiko",
    title: "Taiko",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.Medium,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "TAIKO",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://taiko.xyz/",
        },
        {
            text: Site.Docs,
            url: "https://docs.taiko.xyz/start-here/getting-started",
        },
        {
            text: Site.Explorer,
            url: "https://taikoscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/taikoxyz",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/taikoxyz",
        },
    ],
    description: "Taiko is an Ethereum rollup that leverages based sequencing. It is home to various BTC-derivative assets.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.SolvBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Taiko uses Ethereum for data availability",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Ethereum validators are responsible for sequencing Taiko transactions",
            content: `${ReviewSnippet.BasedSequencedAlt}\n\nEthereum validators are responsible for sequencing Taiko transactions. We are reviewing if users can also self-sequence their own transactions.`,
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: ReviewSnippet.UnderReview,
            content: "Taiko's state validation mechanism has a [multi-tiered proof system](https://l2beat.com/scaling/projects/taiko). We are reviewing this mechanism.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Taiko does not inherit any security from bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to bitcoin",
                    content: "Taiko does not introduce MEV to bitcoin. Since it is a based sequenced rollups, it is possible for Ethereum block producers to extract MEV. Blocks in Ethereum are primarily auctioned off to builders who construct blocks on behalf of a proposer in a given slot. The majority of blocks in Ethereum are built by 2-3 builders.",
                },
                {
                    title: "Ethereum does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.OnchainApps
                },
            ],
        },
    ],
};

export default taiko;
