import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const babylon: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "babylon",
    title: "Babylon",
    entityType: EntityType.Staking,
    live: LiveStatus.Deposits,
    staking: true,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://babylonchain.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.babylonchain.io",
        },
        {
            text: Site.Explorer,
            url: "https://testnet.babylon.explorers.guru",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/babylonchain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/babylonlabs_io",
        },
    ],
    description:
        "Babylon namely supports BTC staking that improves security for Proof-of-Stake (PoS) sidechains. The staking protocol enables participants to stake BTC to secure their preferred sidechain. Babylon also acts as a timestamping protocol to improve PoS sidechain's resistance to long-range attacks.",
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

export default babylon;
