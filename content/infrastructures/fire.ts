import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const fire: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "fire",
    title: "Fire Bitcoin FBTC",
    entityType: EntityType.BTCWrapper,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.General,
    associatedLayers: "EVM-based chains",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://fbtc.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.fbtc.com",
        },
        // {
        //     text: Site.Explorer,
        //     url: "https://docs.fbtc.com/",
        // },
        {
            text: Site.GitHub,
            url: "https://github.com/fbtc-xyz",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/IgnitionFBTC",
        },
    ],
    description: "Fire Bitcoin's FBTC is a wrapped version of BTC.",
    sections: [
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Fire Bitcoin docs](https://docs.fbtc.com/)",
                },
            ],
        },
    ],
};

export default fire;
