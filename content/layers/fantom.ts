import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
} from "../props";

const fantom: LayerProject = {
    type: Type.Layer,
    slug: "fantom",
    title: "Fantom",
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
    feeToken: "FTM",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.soniclabs.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.soniclabs.com/",
        },
        {
            text: Site.Explorer,
            url: "https://sonicscan.org/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/Fantom-foundation",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/FantomFDN",
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

export default fantom;
