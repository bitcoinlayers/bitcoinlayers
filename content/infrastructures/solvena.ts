import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const solvena: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "solvena",
    title: "Solv Solv.ENA",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
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
            text: Site.GitHub,
            url: "https://github.com/solv-finance",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/SolvProtocol",
        },
    ],
    description:
        "Solv.ENA offer a mechanism that enables users to deposit SolvBTC into smart contracts on EVM-based chains. Users receive a token representing BTC deposited on Ethena in exchange for their wrapped BTC token.",
    sections: [
        {
            id: "Economics",
            title: "Economics",
            content: [
                {
                    title: "Incentive model",
                    content: "Ethena incentives are under review.",
                },
            ],
        },
        {
            id: "smartcontracts",
            title: "Smart Contracts & Audits",
            content: [
                {
                    title: "Dozens of token contracts live",
                    content:
                        "There are numerous Solv BTC token contracts deployed across many chains. You can find them [here](https://github.com/solv-finance/SolvBTC/tree/main/deployments).\n\n🔬 We are currently reviewing the implementations of these smart contracts.",
                },
            ],
        },
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
    assessment: [],
};

export default solvena;
