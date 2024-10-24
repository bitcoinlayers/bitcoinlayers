import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const tbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "tbtc",
    title: "tBTC Protocol",
    entityType: EntityType.BitcoinBridge,
    live: LiveStatus.Mainnet,
    staking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "T",
    purpose: Purpose.General,
    associatedLayers: "EVM-based chains",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://threshold.network/",
        },
        {
            text: Site.Website,
            url: "https://threshold.network/",
        },
        {
            text: Site.Docs,
            url: "https://threshold.network/",
        },
        {
            text: Site.Explorer,
            url: "https://docs.threshold.network/",
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
        "tBTC is a wrapped version of BTC that lives as an ERC-20 token on EVM-based blockchains. Its accounting ledger is Ethereum. The bitcoin backing tBTC is secured by a distributed signer set and staking mechanism.",
    sections: [
        {
            id: "riskbits",
            title: "Risk Bits",
            content: [
                {
                    title: "Custody of bitcoin backing tBTC is managed by permissioned entities",
                    content:
                        "The bitcoin wallets that store the bitcoin backing tBTC are managed by a permissioned signer set. The signers of the wallets participate as stakers in an Ethereum staking contract to become eligible for signing privileges. When a new wallet is created, a randomized process, known as the sortition pool, will select signers who will be responsible for custodying funds and signing transactions for respective bitcoin wallets.\n\nIf signers colluded, and had sufficient amount of signing power for a bitcoin wallet, they could steal funds from a wallet they managed.",
                },
                {
                    title: "Signers selection process influenced by stake of T token",
                    content:
                        "Signers of bitcoin wallets backing tBTC are selected by a randomized process known as the sortitiion pool. While random, the overall value of a prospective signer's stake does impact the amount of key shares they receive in the threshold signing scheme. If a propsective signer hold a significant amount of stake (e.g. > 51%), there is a chance they could effectively gain unilateral control of a single bitcoin wallet.\n\nThis is currently mitigated by the fact that tBTC signing privileges are currently permissioned and signers must be approved by the Threshold DAO in its current set up. If tBTC signing privileges became permissionless, the mechanism could be vulernable to malicious parties acquiring a large amount of stake.",
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
                        "Participation in the tBTC protocol requires a propspective signer to participate as a staker. tBTC's staking contracts live on Ethereum. A signer would need to acquire the necessary amount of T tokens to participate as a staker, stake them via the T staking contract, and then apply to become a signer through Threshold governance.",
                },
                {
                    title: "Multiple Bitcoin Wallets",
                    content:
                        "tBTC creates new wallets periodically to store the bitcoin backing tBTC. Every wallet undergoes its own distributed key generation ceremony and has a unique signer setup. This distributes the risk of collusion and theft across a number of wallets and signer groups.",
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
};

export default tbtc;
