import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const cbbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "cbbtc",
    title: "Coinbase cbBTC",
    entityType: EntityType.BTCWrapper,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Base, Ethereum",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.base.org/",
        },
        {
            text: Site.Docs,
            url: "https://docs.base.org",
        },
        {
            text: Site.Explorer,
            url: "https://basescan.org/token/0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/base-org",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/base",
        },
    ],
    description:
        "cbBTC is a tokenized form of BTC. It is an ERC-20 token that is available on Ethereum and Base. It is backed 1:1 by BTC. The BTC backing cbBTC is custodied by Coinbase, a centralized custodian. Coinbase also has unilateral control of the token contracts related to cbBTC.",
    sections: [
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "The relevant smart contracts for cbBTC are linked below:\n\n[cbBTC Base smart contract](https://basescan.org/token/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf)\n\n[cbBTC ETH smart contract](https://etherscan.io/token/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf)",
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
                        "[Bitcoin Layers comparison of tBTC, wBTC, and cbBTC](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.Reputation,
            score: 0,
            tier: "",
            title: "Users trust Coinbase with managing the BTC backing cbBTC",
            content:
                "When interacting with cbBTC, users trust that Coinbase, a centralized custodian, will safely custody the BTC backing cbBTC. When interacting with a centralized custodian, users trust that the custodian will not steal the funds backing their cbBTC tokens. They also trust that Coinbase will effectively manage the BTC and not lose access to it. If the BTC backing cbBTC was stolen or inaccessible, cbBTC tokens could become effectively worthless.\n\nUsers trust Coinbase's reputation as an institutional provider when interacting with cbBTC.",
        },
        {
            category: AssessmentCategory.Signing,
            score: 0,
            tier: "",
            title: "Exact signing mechanism unverifiable",
            content:
                "Coinbase has not disclosed the exact signing mechanism for bitcoin wallets holding and storing BTC backing cbBTC. In the [cbBTC whitepaper](https://coinbase.bynder.com/m/1303c2f4d78fc966/original/cbBTC-White-Paper.pdf), they share that a single person is unable to access any wallet's private key in plain text, meaning that a group of Coinbase employees must work together to decrypt relevant private keys for wallets associated with cbBTC.\n\nWhile unlikely, a group of Coinbase employees could collude to sign malicious transactions related to bitcoin wallets storing cbBTC.",
        },
        {
            category: AssessmentCategory.KeyStorage,
            score: 0,
            tier: "",
            title: "Follows Coinbase's key management practices",
            content:
                "In Coinbase's [user agreement](https://www.coinbase.com/legal/user_agreement/united_states) mentions that they securely store private keys associated to users' assets on their behalf. In the [cbBTC whitepaper](https://coinbase.bynder.com/m/1303c2f4d78fc966/original/cbBTC-White-Paper.pdf), they state that these same custodial practices are used to secure BTC backing cbBTC.\n\nIn the whitepaper, they also mention that private keys are stored across facilities in the United States and Europe.\n\nWhile Coinbase is a reputable custodian, users do not hold the keys associated to BTC backing cbBTC, and trust Coinbase to follow sound custody practices.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "The system is completely centralized and not resistant to censorship",
            content:
                "Both cbBTC smart contracts (on Base and Ethereum) are instantly upgradeable by Coinbase. Coinbase is a US public company. Coinbase has the authority to can censor specific users from transacting with cbBTC. They can also pause the token entirely, effectively shutting down any user who wishes to transact with cbBTC.\n\nUsers trust that Coinbase will not censor their use of cbBTC. You can find the relevant token contracts",
        },
        {
            category: AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "cbBTC is a custodial solution. Users trust the custodian to not misappropriate funds backing the cbBTC token",
            content:
                "Both aspects of cbBTC, the ERC-20 token contracts and the BTC backing these tokens, is controlled by a single entity, Coinbase. When using cbBTC, users trust that Coinbase will not censor them individually, pause the entire system, upgrade the token contract maliciously, or misappropriate funds backing cbBTC. Coinbase also has the authority to restrict users from redeeming BTC for the cbBTC.\n\nUsers effectively have no ownership of BTC the asset when using cbBTC. The own an alternative token that they trust will remain backed 1:1 with, and redeemable for, BTC.",
        },
    ],
};

export default cbbtc;
