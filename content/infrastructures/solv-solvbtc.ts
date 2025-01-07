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
    description: "SolvBTC is a BTC-backed reserve asset that is backed by native BTC and various BTC-derivatives. It is deployed across various blockchains.",
    sections: [
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "You can find various implementations of SolvBTC [here](https://github.com/solv-finance/SolvBTC/tree/main/deployments).",
                },
            ],
        },
        {
            id: "selfsubmit",
            title: "Further sections under review",
            content: [
                {
                    content:
                        "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust custodians managing BTC backing SolvBTC and the operators of various BTC-derivative assets.",
            content:
                "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It’s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).\n\nUsers trust that the custodians managing native BTC will not misappropriate the funds that are a part of SolvBTC reserves. They also trust the various operators of other BTC-derivative assets acting as reserve assets with SolvBTC to remain pegged 1:1 with BTC. If any of these derivative assets became unbacked, then SolvBTC's peg with BTC could be broken.\n\nUsers trust Solv's claims in their documentation are being executed in practice.\n\n[Source](https://solvprotocol.medium.com/introducing-solvbtc-the-first-ever-yield-bearing-bitcoin-871179c73ca6)",
        },
    ],
};

export default solv;