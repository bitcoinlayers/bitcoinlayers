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
} from "../props";

const template: LayerProject = {
    type: Type.Layer,
    slug: "slug",
    title: "Title",
    entityType: EntityType.Rollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "[x]BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "website",
        },
        {
            text: Site.Docs,
            url: "docs",
        },
        {
            text: Site.Explorer,
            url: "explorer",
        },
        {
            text: Site.GitHub,
            url: "github",
        },
        {
            text: Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
    ],
    sections: [
        {
            id: "description",
            title: "Description",
            content: [
                {
                    content: "Under review.",
                },
            ],
        },
    ],
};

export default template;
