import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const bitcoinos: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bitcoinos",
    title: "BitcoinOS",
    entityType: EntityType.BitcoinBridge,
    live: LiveStatus.Announced,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Merlin, Cardano, and more",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.bitcoinos.build/",
        },
        {
            text: Site.Docs,
            url: "https://bitcoinos-technical-documentatio.gitbook.io/bitcoinos",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://cdn.prod.website-files.com/661e3b1622f7c56970b07a4c/662a7a89ce097389c876db57_BitSNARK__Grail.pdf",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/bitsnark/bitsnark-lib",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/BTC_OS",
        },
    ],
    description:
        "BitcoinOS is building a network of rollup-style blockchains on top of BitSNARK and Grail, mechanisms to verify validity proofs and construct a two-way peg with Bitcoin.",
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
