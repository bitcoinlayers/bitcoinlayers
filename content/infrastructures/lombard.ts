import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const lombard: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "lombard",
    title: "Lombard",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "LBTC",
    purpose: Purpose.Staking,
    associatedLayers: "Ethereum",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.lombard.finance",
        },
        {
            text: Site.Docs,
            url: "https://docs.lombard.finance",
        },
        {
            text: Site.Explorer,
            url: "https://etherscan.io/token/0x8236a87084f8b84306f72007f36f2618a5634494",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/lombard-finance",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Lombard_Finance",
        },
    ],
    description:
        "Lombard offer a mechanism that enables users to deposit BTC into a smart contracts on Ethereum. Users receive a token representing BTC deposited on Babylon in exchange for their wrapped BTC token.",
    sections: [
        {
            id: "economics",
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
            id: "audits",
            title: "Smart Contracts & Audits",
            content: [
                {
                    title: "Lombard's smart contracts have been audited.",
                    content:
                        "Lombard has published audit reports on its smart contracts here.\n\nThe code behind Lombard’s is also source viewable here.\n\n⚠️ Audits of smart contracts do not mean exploits are not possible. Users should not deposit more funds than they’re willing to lose.\n\nLombard's audits can be found [here](https://github.com/lombard-finance/evm-smart-contracts/tree/main/docs/audit).",
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
                        "[Lombard's documentation site](https://docs.gobob.xyz/docs/learn/security/privileged-roles)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a network of custodians with the custody of their BTC",
            content:
                "When users deposit BTC into the Lombard protocol, their assets are held in a Bitcoin address stored in a secured hardware. This address is controlled by Lombard’s Security Consortium, a federated network of operators responsible for controlling funds in the deposit address, as well as staking the BTC on users behalf.\n\nLombard’s Security Consortium participates in a consensus protocol. The node implementation is viewable here.\n\n🚨 The members of the Lombard Security Consortium have not been publicly disclosed.",
        },
        {
            category: AssessmentCategory.StakingType,
            score: 0,
            tier: "",
            title: "Deposits are made on users behalf",
            content:
                "Users trust the Lombard Security Consortium to deposit BTC on their behalf.",
        },
        {
            category: AssessmentCategory.SlashingRisk,
            score: 0,
            tier: "",
            title: "Slashing enforced by Babylon. Slashing on Babylon is not currently live",
            content:
                "Users’ slashing risk will be a result of PoS validators, whom their tokens are delegated to, getting slashed. Slashing is not currently live on Babylon.",
        },
    ],
};

export default lombard;
