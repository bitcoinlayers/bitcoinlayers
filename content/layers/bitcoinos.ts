import {
    LayerProject,
    Type,
    LiveStatus,
    EntityType,
    Site,
    RiskCategory,
} from "../props";

const bitcoinos: LayerProject = {
    type: Type.Layer,
    slug: "bitcoinos",
    title: "BitcoinOS",
    entityType: EntityType.SovereignRollup,
    live: LiveStatus.Announced,
    staking: false,
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
            url: "https://www.bitcoinos.build/",
        },
        {
            text: Site.Website,
            url: "https://www.bitcoinos.build/",
        },
        {
            text: Site.Docs,
            url: "https://cdn.prod.website-files.com/661e3b1622f7c56970b07a4c/662a7a89ce097389c876db57_BitSNARK__Grail.pdf",
        },
        {
            text: Site.Explorer,
            url: "https://cdn.prod.website-files.com/661e3b1622f7c56970b07a4c/662a7a89ce097389c876db57_BitSNARK__Grail.pdf",
        },
        {
            text: Site.GitHub,
            url: "https://cdn.prod.website-files.com/661e3b1622f7c56970b07a4c/662a7a89ce097389c876db57_BitSNARK__Grail.pdf",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/BTC_OS",
        },
    ],
    description:
        "BitcoinOS is building a network of rollup-style blockchains on top of BitSNARK and Grail, mechanisms to verify validity proofs and construct a two-way peg with Bitcoin.",
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
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content:
                        "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

export default bitcoinos;
