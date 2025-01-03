import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory
} from "../props";

const solv: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "solv-solvbtc",
    title: "Solv SolvBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
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
            text: Site.Explorer,
            url: "https://etherscan.io/token/0x7a56e1c57c7475ccf742a1832b028f0456652f97",
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
    description: "SolvBTC is a BTC-derivative asset that is backed by native BTC and various BTC-derivatives. It is deployed across various blockchains.",
    sections: [
        {
            id: "contracts",
            title: "Deployment addresses",
            content: [
                {
                    content:
                        "[Merlin](https://scan.merlinchain.io/token/0x41D9036454BE47d3745A823C4aaCD0e29cFB0f71)\n\n[Arbitrum](https://arbiscan.io/token/0x3647c54c4c2c65bc7a2d63c0da2809b399dbbdc0)\n\n[Ethereum](https://etherscan.io/token/0x7a56e1c57c7475ccf742a1832b028f0456652f97)\n\n[BNB Smart Chain](https://bscscan.com/token/0x4aae823a6a0b376de6a78e74ecc5b079d38cbcf7)\n\n[BOB](https://explorer.gobob.xyz/token/0x541FD749419CA806a8bc7da8ac23D346f2dF8B77)\n\n[Avalanche](https://subnets.avax.network/c-chain/token/0xbc78D84Ba0c46dFe32cf2895a19939c86b81a777)\n\n[Base](https://basescan.org/token/0x3b86ad95859b6ab773f55f8d94b4b9d443ee931f)\n\n[Mantle](https://explorer.mantle.xyz/token/0xa68d25fc2af7278db4bcdcaabce31814252642a9)",
                },
            ],
        },
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to key management, transaction signing, and withdrawals have not been reviewed.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.Reputation,
            score: 0,
            tier: "",
            title: "Users trust custodians managing BTC backing SolvBTC and the operators of various BTC-derivative assets.",
            content:
                "SolvBTC is backed by native BTC managed by custodian providers. It’s been [stated](https://solvprotocol.medium.com/introducing-solvbtc-the-first-ever-yield-bearing-bitcoin-871179c73ca6) that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).\n\nUsers trust that the custodians managing native BTC will not misappropriate the funds that are a part of SolvBTC reserves. They also trust the various operators of other BTC-derivative assets acting as reserve assets with SolvBTC to remain pegged 1:1 with BTC. If any of these derivative assets became unbacked, then SolvBTC's peg with BTC could be broken.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Users trust custodians managing BTC backing SolvBTC and the operators of various BTC-derivative assets.",
            content:
                "SolvBTC’s various deployments are unilaterally owned by an address controlled by a ⅗ Gnosis Safe multisig. This owner can unilaterally upgrade contracts and implement malicious upgrades.\n\nAdditionally, the SolvBTCV3 release saw a blasklist function implemented. This function enables the owner of the SolvBTC contract to blacklist individual users; refraining them from interacting with the token. It also gives the owner unilateral control to destroy tokens held by blacklisted addresses.",
        },
        {
            category: AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "Users trust custodians managing BTC backing SolvBTC and the operators of various BTC-derivative assets.",
            content:
                "When holding SolvBTC, users primarily trust:\n\n- that the token will remain backed by its various derivative assets\n\n- custodians to not misappropriate native BTC partially backing SolvBTC\n\n- various derivative assets to not become unbacked, which could break SolvBTC’s 1:1 BTC peg\n\n- the owner of the SolvBTC contracts to not implement malicious contract upgrades\n\n- the blacklister to not censor their address and burn their tokens\n\nIts current implementation is centralized and managed by a ⅗ multisig. We do not know the identities of the 5 signers in the [0x0c2Bc…5b7D](https://etherscan.io/address/0x0c2bc4d2698820e12e6ebe863e7b9e2650cd5b7d#code) multisig.",
        },
    ],
};

export default solv;