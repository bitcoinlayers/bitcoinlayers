import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const tbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "tbtc",
    title: "Threshold tBTC v2",
    entityType: EntityType.BitcoinBridge,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "T",
    purpose: Purpose.General,
    associatedLayers: "EVM-based chains",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://threshold.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.threshold.network",
        },
        {
            text: Site.Explorer,
            url: "https://etherscan.io/token/0xcdf7028ceab81fa0c6971208e83fa7872994bee5",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/threshold-network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/thetnetwork",
        },
    ],
    description:
        "tBTC is a wrapped version of BTC that lives as an ERC-20 token on EVM-based blockchains. Its accounting ledger is Ethereum. The BTC backing tBTC is secured by a distributed signer set and staking mechanism.",
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Trust assumptions related to tBTC change per the chain it is deployed on. Ethereum is the accounting layer",
                    content:
                        "Trust assumptions related to tBTC change across each system it is deployed on. For example, the tBTC gateway between Ethereum and Base is managed by a 6/9 multisig. This is a stronger trust assumption when compared to using tBTC on Ethereum. When interacting with tBTC across various chains, users should be aware that there may be additional trust assumptions.\n\n🔬 We are currently researching tBTC trust assumptions across the chains its deployed on.",
                },
            ],
        },
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "The relevant smart contracts for tBTC are linked below:\n\n[tBTC Ethereum smart contract](https://etherscan.io/address/0x18084fbA666a33d37592fA2633fD49a74DD93a88)\n\n[tBTC Base smart contract](https://basescan.org/token/0x236aa50979d5f3de3bd1eeb40e81137f22ab794b)\n\n[tBTC BOB smart contract](https://explorer.gobob.xyz/token/0xBBa2eF945D523C4e2608C9E1214C2Cc64D4fc2e2)\n\n[tBTC Polygon smart contract](https://polygonscan.com/token/0x236aa50979d5f3de3bd1eeb40e81137f22ab794b)\n\n[tBTC Solana smart contract](https://explorer.solana.com/address/6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU)\n\n[tBTC Optimism smart contract](https://optimistic.etherscan.io/token/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40)\n\n[tBTC Arbitrum smart contract](https://arbiscan.io/token/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40)",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "tECDSA Scheme",
                    content:
                        "Signers who participate in securing the bitcoin wallets in tBTC's protocol leverage a tECDSA scheme to shard the wallet's private key across a number of parties. In tBTC, the tECDSA scheme has a 51% threshold. It requires 51% of the threshold of signers to produce a valid signature for a bitcoin transaction.\n\nSigners of bitcoin wallets are selected through a randomized process known as the sortition pool. When a new wallet is created, a signer submits a sortition transaction to kick off a distributed key generation ceremony. The sortition pool then selects a number of signers to participate in the ceremony, generate a new wallet, and then distribute the private key shards across the group of signers.\n\nOnce the signers are distributed their individual key shares, they then participate is signing events via an offchain communication protocol.",
                },
                {
                    title: "Ethereum Staking Contracts",
                    content:
                        "Participation in the tBTC protocol requires a prospective signer to participate as a staker. tBTC's staking contracts live on Ethereum. A signer would need to acquire the necessary amount of T tokens to participate as a staker, stake them via the T staking contract, and then apply to become a signer through Threshold governance.",
                },
                {
                    title: "Multiple Bitcoin Wallets",
                    content:
                        "tBTC creates new wallets periodically to store the bitcoin backing tBTC. Every wallet undergoes its own distributed key generation ceremony and has a unique signer setup. This distributes the risk of collusion and theft across a number of wallets and signer groups.",
                },
            ],
        },
        {
            id: "economics",
            title: "Economics",
            content: [
                {
                    title: "Signers selection process influenced by stake of T token",
                    content:
                        "Signers of bitcoin wallets backing tBTC are selected by a randomized process known as the sortition pool. While random, the overall value of a prospective signer's stake does impact the amount of key shares they receive in the threshold signing scheme. If a prospective signer hold a significant amount of stake (e.g. > 51%), there is a chance they could effectively gain unilateral control of a single bitcoin wallet.\n\nThis is currently mitigated by the fact that tBTC signing privileges are currently permissioned and signers must be approved by the Threshold DAO in its current set up. If tBTC signing privileges became permissionless, the mechanism could be vulnerable to malicious parties acquiring a large amount of stake.",
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
            title: "Users trust permissioned entities with the custody of their BTC. tBTC Beta Stakers must apply to Threshold DAO for signing privileges",
            content:
                "The bitcoin wallets that store the bitcoin backing tBTC are managed by a permissioned signer set. The signers of the wallets participate as stakers in an Ethereum staking contract to become eligible for signing privileges. When a new wallet is created, a randomized process, known as the sortition pool, will select signers who will be responsible for custodying funds and signing transactions for respective bitcoin wallets.\n\nIf signers colluded, and had sufficient amount of signing power for a bitcoin wallet, they could steal funds from a wallet they managed.",
        },
        {
            category: AssessmentCategory.Signing,
            score: 0,
            tier: "",
            title: "Threshold ECDSA scheme used for signing transactions",
            content:
                "Each bitcoin wallet that manages BTC backing tBTC is controlled by participants in a tECDSA scheme. The tECDSA scheme sees a specific bitcoin wallet's private key sharded into a 100 key shares which are distributed to a randomly selected group of signers. In tBTC, there is a 51% signing threshold meaning that 51% of the signers are needed to create a valid signature to authorize bitcoin transactions.",
        },
        {
            category: AssessmentCategory.KeyStorage,
            score: 0,
            tier: "",
            title: "No specific key storage requirements",
            content:
                "There is no specific hardware requirement associated with running a tBTC v2 signing node. Nodes can also be run via a number of VPS providers.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist or pause function on tBTC smart contracts",
            content:
                "tBTC's [token contract](https://etherscan.io/address/0x9C070027cdC9dc8F82416B2e5314E11DFb4FE3CD#code) does not have functions that can censor individual users. It is upgradeable via the Threshold DAO and a controller elected by the DAO. If an upgrade to the tBTC token contract was malicious, then users would have 1 day to exit.\n\nA malicious upgrade could result in the loss of user funds.",
        },
        {
            category: AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "tBTC is a distributed, but permissioned system",
            content:
                "While trust is distributed across a number of parties, tBTC is not a fully trustless system. Users trust that Beta Stakers won't collude and steal BTC backing tBTC. They also trust the tBTC protocol to ensure that signing responsibilities are sufficiently distributed so a single entity cannot gain control over 51% of signing power for a specific wallet.",
        },
    ],
};

export default tbtc;
