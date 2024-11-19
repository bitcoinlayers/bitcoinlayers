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

const tunachain: LayerProject = {
    type: Type.Layer,
    slug: "tunachain",
    title: "Tunachain",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://tunachain.io",
        },
        {
            text: Site.Docs,
            url: "https://tunachain.gitbook.io/tunachain",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/Tunachain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/TunaChain",
        },
    ],
    description: "Under Review.",
    riskAnalysis: [
        {
            category: RiskCategory.UnilateralExits,
            score: 0,
            tier: "",
            title: "",
            content: "",
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

export default tunachain;
