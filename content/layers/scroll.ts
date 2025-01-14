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

const scroll: LayerProject = {
    type: Type.Layer,
    slug: "scroll",
    title: "Scroll",
    entityType: EntityType.AltRollup,
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
    feeToken: "SCR",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://scroll.io/",
        },
        {
            text: Site.Docs,
            url: "https://docs.scroll.io/en/home/",
        },
        {
            text: Site.Explorer,
            url: "https://scrollscan.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/scroll-tech",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Scroll_ZKP",
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

export default scroll;
