import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const nubit: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "nubit",
    title: "Nubit",
    entityType: EntityType.DataAvailability,
    live: LiveStatus.Announced,
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
            url: "https://nubit.org",
        },
        {
            text: Site.Docs,
            url: "https://docs.nubit.org",
        },
        {
            text: Site.Explorer,
            url: "https://www.explorer.nubit.org",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/RiemaLabs",
        },
        {
            text: Site.GitHub,
            url: "https://x.com/Nubit_org",
        },
    ],
    description:
        "Nubit is building a data availability layer that uses BTC within its staking protocol. Nubit aims to provide rollup-style blockchains with more throughput in exchange for some additional tradeoffs.",
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

export default nubit;
