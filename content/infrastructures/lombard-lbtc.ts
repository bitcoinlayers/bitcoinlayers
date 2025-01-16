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

const lombard: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "lombard-lbtc",
    title: "Lombard LBTC",
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
    notice: undefined,
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
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
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
                "When users deposit BTC into the Lombard protocol, their assets are held by a network of custodians. The BTC address is controlled by Lombard’s Security Consortium, a federated network of operators responsible for controlling funds in the deposit address.\n\n🚨 The members of the Lombard Security Consortium have not been publicly disclosed.",
        },
    ],
};

export default lombard;
