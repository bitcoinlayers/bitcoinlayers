import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const pump: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "pump",
    title: "Pump",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Mainnet,
    staking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.LiquidStaking,
    associatedLayers: "Ethereum",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://mainnet.pumpbtc.xyz/",
        },
        {
            text: Site.Docs,
            url: "https://pumpbtc.gitbook.io/pumpbtc",
        },
        {
            text: Site.GitHub,
            url: "https://pumpbtc.gitbook.io/pumpbtc/key-address",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Pumpbtcxyz",
        },
    ],
    description:
        "Pump is a liquid staking protocol featuring the pumpBTC token. Users deposit wrapped bitcoin tokens into the PumpBTC token contract and a custodian exchanges wrapped bitcoin tokens for native bitcoin, deposits them into Babylon, and then distributes them to users participating in the protocol.",
    sections: [
        {
            id: "apy",
            title: "How APY is determined",
            content: [
                {
                    title: "Determined by Babylon Finality Provider",
                    content:
                        "APY is determined by the respective Babylon Finality Provider.",
                },
            ],
        },
        {
            id: "smartcontracts",
            title: "Smart contracts & audits",
            content: [
                {
                    title: "Contracts have been audited",
                    content:
                        "The contracts for PumpBTC have been audited. The audit reports can be found below.\n\n⚠️ Audits of smart contracts do not mean exploits are not possible. Users should not deposit more funds than they’re willing to lose.\n\n[Blocksec audit](https://drive.google.com/file/d/1kUmOPM8J63JmzM20H1Cg38oAfPRBJwLy/view?pli=1)\n\n[Quantstamp](https://drive.google.com/file/d/1xWQlC4iZenwHrjNOsBdKyVkFbEaUnwD-/view)",
                },
                {
                    title: "Contracts are permissioned",
                    content:
                        "Both contracts associated with PumpBTC are permissioned.\n\nThe staking contract can be:\n\n- Paused entirely.\n\n- A cap can be set, limiting the amount of assets that can be staked.\n\n- Have specific fees be set for unstaking, including extremely high fees (up to 100%).\n\n- Paused for unstaking and only allow staking.\n\nFor a full look into the staking contract, you can read it [here](https://etherscan.io/address/0x9e9dc47335ed4dc80051170d8101a70f689c4365#code).",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Pump's documentation](https://pumpbtc.gitbook.io/pumpbtc)\n[Pump dashboard](https://dashboard.pumpbtc.xyz/)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "PumpBTC works with custodians to store bitcoin assets",
            content:
                "PumpBTC works with custodial providers to store the BTC that matches PumpBTC deposits. When a user deposits a wrapped bitcoin token into the PumpBTC contract, they are given PumpBTC in return.\n\nThe wrapped bitcoin is locked in the PumpBTC staking contracts. The operator (likely one of the custodians) of the contract then manually exchanges wrapped bitcoin for native bitcoin to stake on Babylon.\n\nCobo and Coinover have been mentioned as custodians participating in Pump.",
        },
        {
            category: AssessmentCategory.StakingType,
            score: 0,
            tier: "",
            title: "Custodians delegate users’ stake on their behalf",
            content:
                "The aforementioned custodians are responsible for delegating BTC on users’ behalf. When they exchange wrapped bitcoin for native bitcoin, they then take the newly acquired bitcoin to stake into the Babylon protocol.",
        },
        {
            category: AssessmentCategory.SlashingRisk,
            score: 0,
            tier: "",
            title: "Slashing is done via Babylon, but is not currently live",
            content:
                "If the delegated stake is with a validator who is slashed, users can be penalized and lose some of their funds.",
        },
        {
            category: AssessmentCategory.IncentiveModel,
            score: 0,
            tier: "",
            title: "Users delegate to a Babylon Finality Provider who determines how much rewards they receive",
            content:
                "Users can receive rewards in the form of another network’s (PoS network on Cosmos) alternative token issuance. The Babylon Finality Provider, to which the stake has been delegated, determines how much of the rewards are shared with PumpBTC holders.\n\n⚠️ Users do not earn yield directly in the LST model. They supply tokens for other parties to leverage on their behalf.",
        },
    ],
};

export default pump;
