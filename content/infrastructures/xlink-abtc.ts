import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const xlinkabtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "xlink-abtc",
    title: "XLink aBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Stacks", //TODO this should be a link to the respective network pages
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
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

export default xlinkabtc;
