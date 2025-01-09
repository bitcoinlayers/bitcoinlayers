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

const gnosis: LayerProject = {
    type: Type.Layer,
    slug: "gnosis",
    title: "Gnosis",
    entityType: EntityType.AltL1,
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
    feeToken: "GNO",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.gnosischain.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.gnosischain.com/",
        },
        {
            text: Site.Explorer,
            url: "https://gnosisscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/gnosischain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/gnosischain",
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

export default gnosis;
