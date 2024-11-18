import {
    Purpose,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    InfrastructureProject,
} from "../props";

const astria: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "astria",
    title: "Astria",
    entityType: EntityType.Sequencing,
    live: LiveStatus.Proposed,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: [RiskFactor.High, RiskFactor.High],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://astria.org",
        },
        {
            text: Site.Docs,
            url: "https://docs.astria.org",
        },
        {
            text: Site.Explorer,
            url: "https://astrotrek.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/astriaorg",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/AstriaOrg",
        },
    ],
    description:
        "Astria is a shared sequencer built on CometBFT consensus. It supports scaling protocols with decentralization, interoperability and more secure preconfirmations.",
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

export default astria;
