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
    live: LiveStatus.Mainnet,
    staking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "LBTC",
    purpose: Purpose.Staking,
    associatedLayers: "Ethereum",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://www.lombard.finance/",
        },
        {
            text: Site.Docs,
            url: "https://docs.lombard.finance/",
        },
        {
            text: Site.Explorer,
            url: "https://docs.lombard.finance/",
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
        "Lombard is a liquid staking protocol where a security consortium network stakes assets on users' behalf.",
    sections: [
        {
            id: "apy",
            title: "How APY is determined",
            content: [
                {
                    title: "Dependant on the various application parameters",
                    content:
                        "Potential yield opportunities are dependent on the various onchain applications parameters, and the delegation model in the PoS chains LBTC might be used via Babylon.",
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
            title: "Users trust a network of custodians with the custody of their BTC.",
            content:
                "When users deposit BTC into the Lombard protocol, their assets are held in a Bitcoin address stored in a secured hardware. This address is controlled by Lombard’s Security Consortium, a federated network of operators responsible for controlling funds in the deposit address, as well as staking the BTC on users behalf.\n\nLombard’s Security Consortium participates in a consensus protocol. The node implementation is viewable here.\n\n🚨 The members of the Lombard Security Consortium have not been publicly disclosed.",
        },
        {
            category: AssessmentCategory.StakingType,
            score: 0,
            tier: "",
            title: "Delegated staking.",
            content:
                "Users delegate their BTC to the Lombard Security Consortium to stake BTC on their behalf. Users select which protocol they want to stake through (e.g. Babylon) and/or the destination chain their LBTC token is minted on (e.g. Ethereum).\n\nShould a user mint LBTC on a destination chain, they can use this token in various onchain protocols. These protocols may pay out rewards based on varying levels of parameters.",
        },
        {
            category: AssessmentCategory.SlashingRisk,
            score: 0,
            tier: "",
            title: "",
            content:
                "Users’ slashing risk will be a result of PoS validators, whom their tokens are delegated to, getting slashed.. Slashing is not currently live on Babylon.",
        },
        {
            category: AssessmentCategory.IncentiveModel,
            score: 0,
            tier: "",
            title: "",
            content:
                "Users receive points for staking in the Lombard protocol. They additionally have an opportunity to deposit funds into the Lombard “DeFi Vault”.\n\nWhen users deposit their LBTC tokens into the vault, they give up the custody of their LBTC token to the vault. The operators of the vault take this liquidity and apply it to a trading strategy, which can potentially earn users profits.\n\nOver time, should the trading strategy be profitable, users would earn returns based on the amount of LBTC they deposited into the DeFi vault.\n\n⚠️ If a trading strategy was executed poorly, user funds could be at risk for liquidation and loss.",
        },
    ],
};

export default lombard;
