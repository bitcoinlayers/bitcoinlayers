import {
    LayerProject,
    Type,
    LiveStatus,
    EntityType,
    Site,
    RiskCategory,
} from "../props";

const barknet: LayerProject = {
    type: Type.Layer,
    slug: "barknet",
    title: "Barknet",
    entityType: EntityType.Rollup,
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
            url: "https://kasar.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/KasarLabs/barknet",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/kasarlabs",
        },
    ],
    description:
        "Barknet is a sovereign rollup that uses Bitcoin for data availability and the Cairo VM. It was developed by Kasar Lab in collaboration with Taproot Wizards.",
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
                        "Barknet is a sovereign rollup that uses Bitcoin for data availability and the Cairo VM. It was developed by Kasar Lab in collaboration with Taproot Wizards.",
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
                        "[Barknet code and docs](https://github.com/KasarLabs/barknet)",
                },
            ],
        },
    ],
};

export default barknet;
