import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const espresso: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "espresso",
    title: "Espresso",
    entityType: EntityType.SequencingDA,
    live: LiveStatus.Proposed,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://espressosys.com",
        },
        {
            text: Site.Docs,
            url: "https://docs.espressosys.com",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/EspressoSystems",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/espressosystems",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/espressosys",
        },
    ],
    description:
        "Espresso is a shared sequencer marketplace. It enables rollup-style blockchains to sell their sequencing rights to a marketplace of sequencers who bid on the rights to build rollup blocks. It additionally runs a consensus protocol that provides rollups, participating in Espresso, with more secure preconfirmations.",
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

export default espresso;
