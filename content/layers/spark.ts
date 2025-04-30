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
} from "../props";

const spark: LayerProject = {
    type: Type.Layer,
    slug: "spark",
    title: "Spark",
    entityType: EntityType.Statechain,
    entityCategory: EntityCategory.BitcoinNative,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
    ],
    btcLocked: NaN,
    nativeToken: "BTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://www.spark.money/",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/buildonspark",
        },
        {
            text: Site.Docs,
            url: "https://docs.spark.money/home/welcome",
        },
    ],
    description: "Spark is an implementation of the statechain protocol where users interact with operators to process transfers for offchain representations of UTXOs. This protocol is under review.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Bitcoin Native",
                    infrastructureSlug: "mercury-btc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "Users collaboratively custody BTC backing offchain UTXOs with a federation",
                    content: ReviewSnippet.UnderReview,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "This section is under review",
            content: "This section is under review.",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "This section is under review",
            content: "This section is under review.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "This section is under review",
            content: "This section is under review.",
        },
    ],
    sections: [

    ],
};

export default spark;
