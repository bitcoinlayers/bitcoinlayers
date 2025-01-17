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

const taiko: LayerProject = {
    type: Type.Layer,
    slug: "taiko",
    title: "Taiko",
    entityType: EntityType.AltL1,
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

export default taiko;
