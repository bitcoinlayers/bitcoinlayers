import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const solvlst: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "solvlst",
    title: "Solv LSTs",
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
        "Solv LSTs offer a mechanism that enables users to deposit SolvBTC into smart contracts on EVM-based chains. Users receive a token representing BTC deposited on Babylon in exchange for their wrapped BTC token.",
    sections: [
        {
            id: "Economics",
            title: "Economics",
            content: [
                {
                    title: "Incentive model",
                    content:
                        "🔬 Babylon’s staking is not currently securing any PoS chains. Rewards are only issued through points. Once live, we will review Babylon’s incentive and issuance mechanism.",
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
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Bitcoin assets used to back Solv LSTs are custodied by institutional providers",
            content:
                "Five entities proposedly custody the bitcoin assets backing Solv LST tokens. These entities are Antalpha, Cobo, Ceffu, Fireblocks and the Solv Guard. These entities are known as Guardians in the [Solv application](https://app.solv.finance/staking).\n\nCeffu and Cobo are the custodians for funds that are staked with Babylon.\n\n[Source](https://docs.solv.finance/staking-abstraction-layer-sal/the-ecological-view)",
        },
        {
            category: AssessmentCategory.StakingType,
            score: 0,
            tier: "",
            title: "Stake is delegated to Babylon Finality Providers via Ceffu and Cobo",
            content:
                "When a user exchanges SolvBTC for an LST token, this token is locked in a SolvBTC.LST smart contract on its respective chain. After this token deposit is confirmed, one of the guardians will exchange the wrapped BTC they received, swap it for native BTC, and then deposit bitcoin into Babylon on the users behalf. This role is also fulfilled by the Staking Validators.\n\nFor staking on Bitcoin, the custodians who stake user funds are Ceffu and Cobo. The majority of BTC is delegated to Solv Protocol's Babylon Finality Provider, but there has been delegation to other [operators](https://x.com/SolvProtocol/status/1843768604011143590).\n\nLearn more about delegated staking here.",
        },
        {
            category: AssessmentCategory.SlashingRisk,
            score: 0,
            tier: "",
            title: "Slashing is not live on Babylon",
            content:
                "The first is that the Babylon Finality Provider, that their stake is delegated to, is slashed and penalized. This penalty will also be inflicted onto its delegates.\n\nThe second is that the user locks their funds in a vault executing a specific trading strategy and they get liquidated.",
        },
    ],
};

export default solvlst;
