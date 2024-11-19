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

const rif: LayerProject = {
    type: Type.Layer,
    slug: "rif",
    title: "RIF",
    entityType: EntityType.SidechainRollup,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://rif.technology",
        },
        {
            text: Site.Docs,
            url: "https://dev.rootstock.io",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.testnet.rollup.rif.technology",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/rsksmart/devportal",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/RIFtechnology",
        },
    ],
    description:
        "Rif is a proposed rollup design that would settle on the Rootstock sidechain. It is a fork of the zkSync codebase.",
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
                    content:
                        "Rif is a proposed rollup design that would settle on the Rootstock sidechain. It is a fork of the zkSync codebase.",
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
                        "[RIF documentation site](https://dev.rootstock.io/rif/)\n[Access the RIF testnet as a developer](https://dev.rootstock.io/rif/rollup/dev-reference/)",
                },
            ],
        },
    ],
};

export default rif;
