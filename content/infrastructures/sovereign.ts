import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const sovereign: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "sovereign",
    title: "Sovereign",
    entityType: EntityType.RollupSDK,
    live: LiveStatus.Testnet,
    staking: false,
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
            url: "https://www.sovereign.xyz",
        },
        {
            text: Site.Docs,
            url: "https://github.com/Sovereign-Labs/sovereign-sdk",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/Sovereign-Labs/sovereign-sdk",
        // },
        {
            text: Site.GitHub,
            url: "https://x.com/sovereign_labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/sovereign_labs",
        },
    ],
    description:
        "Sovereign is a framework for building sovereign rollups. Their infrastructure is being used to support the deployment of multiple rollups in the Bitcoin ecosystem.",
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

export default sovereign;
