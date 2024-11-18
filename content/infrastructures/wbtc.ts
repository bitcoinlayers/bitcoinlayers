import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const wbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "wbtc",
    title: "BitGo wBTC",
    entityType: EntityType.BTCWrapper,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Ethereum, Base, and more",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://wbtc.network",
        },
        {
            text: Site.Explorer,
            url: "https://wbtc.network/dashboard/order-book",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/WrappedBTC",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/WrappedBTC",
        },
    ],
    description:
        "wBTC is a wrapped version of bitcoin that lives on EVM-compatible networks. wBTC is backed 1:1 with bitcoin, with the bitcoin backing wBTC custodied by three custodial providers dispersed across different geographic locations.",
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Trust assumptions related to wBTC change per the chain it is deployed on",
                    content:
                        "Trust assumptions related to wBTC change across each system it is deployed on. For example, the wBTC gateway between Ethereum and Base is managed by a 1/2 multisig. This is a stronger trust assumption when compared to using wBTC on Ethereum. When interacting with wBTC across various chains, users should be aware that there may be additional trust assumptions.\n\n🔬 We are currently researching wBTC trust assumptions across the chains its deployed on.",
                },
                {
                    title: "wBTC provides a proof-of-reserves",
                    content:
                        "wBTC provides a list of bitcoin addresses they claim to be a [proof-of-reserves for wBTC](https://wbtc.network/dashboard/audit).",
                },
            ],
        },
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "The relevant smart contracts for wBTC are linked below:\n\n[wBTC Ethereum smart contract](https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599)\n\n[wBTC Base smart contract](https://basescan.org/address/0x1ceA84203673764244E05693e42E6Ace62bE9BA5)\n\nOther chains, including Tron and Osmosis, [listed here](https://wbtc.network/dashboard/order-book/wbtc),",
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
                        "[Bitcoin Layers' comparison of tBTC, wBTC, and cbBTC](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.Reputation,
            score: 0,
            tier: "",
            title: "Users trust permissioned entities with the custody of their BTC.",
            content:
                "The Bitcoin backing wBTC is custodied by permissioned entities. BitGo and BiT Global are the participants responsible with custodying the funds backing wBTC across the various networks its deployed on.\n\nThe wallets holding the bitcoin backing wBTC are dispersed between Hong Kong, Singapore, and the United States.",
        },
        {
            category: AssessmentCategory.Signing,
            score: 0,
            tier: "",
            title: "Transactions signed via multi-signature wallets",
            content:
                "wBTC signing is done via multi-signature wallets. The signing privileges for these wallets are distributed between BitGo and BiT Global.",
        },
        {
            category: AssessmentCategory.KeyStorage,
            score: 0,
            tier: "",
            title: "Keys reportedly stored in air-gapped HSMs",
            content:
                "[Per BitGo's docs](https://developers.bitgo.com/guides/get-started/concepts/key-storage), the keys for wallets (storing BTC backing wBTC) are stored via air-gapped HSMs. Users trust that the operators of these HSMs will not attempt to extract the relevant private keys, and prevent external malicious actors from doing so.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Smart contracts upgradeable by wBTC DAO",
            content:
                "wBTC's Ethereum ERC-20 contract has no blacklist functionality, meaning that the contract cannot censor individual users from transferring wBTC. The contract is upgradeable by the wBTC DAO. The DAO can also freeze the contract entirely.\n\nThe wBTC DAO is made up of 13 organizations. It takes 8 of them to upgrade or freeze the contract.",
        },
        {
            category: AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "wBTC is a custodial system. Users trust the custodians to ensure wBTC remains backed 1:1",
            content:
                "Users trust a number of entities when interacting with wBTC. They primarily trust that the custodian providers will ensure that that wBTC remains backed with BTC. They also trust the wBTC DAO to not maliciously upgrade or freeze the wBTC contract.",
        },
    ],
};

export default wbtc;
