import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const solvlst: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "solvlst",
    title: "Solv LSTs",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Mainnet,
    staking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.LiquidStaking,
    associatedLayers: "Ethereum, BNB, Arbitrum, Avalanche, Merlin, BOB, Base",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://solv.finance/",
        },
        {
            text: Site.Website,
            url: "https://solv.finance/",
        },
        {
            text: Site.Docs,
            url: "https://solv.finance/",
        },
        {
            text: Site.Explorer,
            url: "https://docs.solv.finance/",
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
    description: "Solv offers several LSTs: BBN, ENA, CORE, and JUP",
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

export default solvlst;
