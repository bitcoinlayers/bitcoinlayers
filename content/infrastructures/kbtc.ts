import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const kbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "kbtc",
    title: "Kraken kBTC",
    entityType: EntityType.BTCWrapper,
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
    description: "Under Review",
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
            title: "Process to self-submit information",
            content: [
                {
                    content:
                        "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

export default kbtc;
