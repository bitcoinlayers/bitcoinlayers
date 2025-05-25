import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
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
    description: "iBTC is a BTC wrapped asset. It is under review.",
            sections: [
                    {
                        id: "selfsubmit",
                        title: "Further sections to be reviewed",
                        content: [
                            {
                                content:
                                    "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                            },
                        ],
                    },
                ],
                assessment: [
                        {
                            category: AssessmentCategory.AssetCustody,
                            score: 0,
                            tier: "",
                            title: "Institutions lock their funds into a 2-2 multisig with iBTC's attestor network",
                            content:
                                "BTC backing iBTC is secured by numerous 2-2 multisigs between institutions and iBTC's attestor network. iBTC network's attestor network has a 2/3s majority signing threshold and uses FROST to produce valid signatures to co-sign movement of funds related to iBTC BTC multisigs.\n\nUsers who acquire iBTC in onchains market trust that their tokens will remain backed by institutions supplying liquidity.",
                        },
                    ],
};

export default ibtcnetworkibtc;
