import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
} from "../props";

const ibtcnetworkibtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "ibtcnetwork-ibtc",
    title: "iBTC Network iBTC", //formerly DLC Link dlcBTC
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.ibtc.network/",
        },
        {
            text: Site.Docs,
            url: "https://docs.ibtc.network/ibtc-documentation",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://github.com/dlc-link",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/dlc-link",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/ibtcnetwork",
        },
    ],
    description:
        "iBTC Network supports the development of iBTC, a Bitcoin wrapper that leverages discrete log contracts.",
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

export default ibtcnetworkibtc;
