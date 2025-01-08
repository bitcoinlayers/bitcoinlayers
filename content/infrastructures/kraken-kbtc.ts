import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const kbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "kraken-kbtc",
    title: "Kraken kBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Ethereum, Optimism",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.kraken.com",
        },
        {
            text: Site.Docs,
            url: "https://www.kraken.com/kbtc",
        },
        {
            text: Site.Explorer,
            url: "https://etherscan.io/token/0x73e0c0d45e048d25fc26fa3159b0aa04bfa4db98",
        },
        // {
        //     text: Site.GitHub,
        //     url: "https://www.kraken.com",
        // },
        {
            text: Site.Twitter,
            url: "https://x.com/krakenfx",
        },
    ],
    description:
        "Kraken kBTC is a BTC-backed reserve asset that can be used on Ethereum or Optimism",
    sections: [
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "[kBTC OP Mainnet smart contract](https://optimistic.etherscan.io/token/0x73E0C0d45E048D25Fc26Fa3159b0aA04BfA4Db98)\n\n[kBTC ETH smart contract](https://etherscan.io/token/0x73e0c0d45e048d25fc26fa3159b0aa04bfa4db98)\n\n[BTC custody address](https://mempool.space/address/bc1qqwf6hexnnswmj6yuhz5xyj20frtp8exv7mclck)",
                },
            ],
        },
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
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
            title: "Users trust Kraken to secure funds backing kBTC",
            content:
                "Kraken, a centralized custodian, secures the BTC backing kBTC. The funds backing kBTC are held at Kraken Financial, a Wyoming-chartered SPDI (Special Purpose Depository Institution).\n\nUsers trust Kraken to implement secure custody practices for kBTC reserve assets.",
        },
    ],
};

export default kbtc;
