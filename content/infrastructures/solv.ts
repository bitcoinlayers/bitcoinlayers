import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const solv: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "solv",
    title: "Solv SolvBTC",
    entityType: EntityType.BTCWrapper,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.General,
    associatedLayers: "Ethereum, BNB, Arbitrum, Avalanche, Merlin, BOB, Base",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://solv.finance",
        },
        {
            text: Site.Docs,
            url: "https://docs.solv.finance",
        },
        {
            text: Site.Explorer,
            url: "https://etherscan.io/token/0x7a56e1c57c7475ccf742a1832b028f0456652f97",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/solv-finance",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/SolvProtocol",
        },
    ],
    description: "SolvBTC is a reserve asset. Solv also offers liquid staking.",
    sections: [
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Solv docs](https://docs.solv.finance/)",
                },
            ],
        },
    ],
};

export default solv;
