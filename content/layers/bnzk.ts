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

const bnzk: LayerProject = {
    type: Type.Layer,
    slug: "bnzk",
    title: "Bnzk",
    entityType: EntityType.Rollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Announced,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bnzk.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.bnzk.io",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/BnzkLabs",
        },
    ],
    description:
        "Bznk is working on using zk technology to improve Ordinals and BRC-20 trading.",
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
                    content:
                        "Bznk is working on using zk technology to improve Ordinals and BRC-20 trading.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Bnzk website.](https://bnzk.io/)\n[Bnzk documentations site.](https://docs.bnzk.io/)",
                },
            ],
        },
    ],
};

export default bnzk;
