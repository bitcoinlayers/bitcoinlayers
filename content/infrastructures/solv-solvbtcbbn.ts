import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const solvbbn: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "solv-solvbtcbbn",
    title: "Solv SolvBTC.BBN",
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
        "SolvBTC.BBN offer a mechanism that enables users to deposit SolvBTC into smart contracts on EVM-based chains. Users receive a token representing BTC deposited on Babylon in exchange for their wrapped BTC token.",
    sections: [
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
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Bitcoin assets used to back Solv.BBN are custodied by institutional providers",
            content:
                "Five entities custody the bitcoin assets backing Solv.BBN tokens. These entities are Antalpha, Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking).\n\nCeffu and Cobo are the custodians for funds that are staked with Babylon.\n\n[Source](https://docs.solv.finance/staking-abstraction-layer-sal/the-ecological-view)",
        },
    ],
};

export default solvbbn;
