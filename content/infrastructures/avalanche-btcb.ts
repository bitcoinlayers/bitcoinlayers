import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory
} from "../props";

const avalanchebtcb: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "avalanche-btcb",
    title: "Avalanche BTC.b",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Avalanche, Arbitrum, Core",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://core.app/",
        },
        {
            text: Site.Explorer,
            url: "https://subnets.avax.network/c-chain/token/0x152b9d0FdC40C096757F570A51E494bd4b943E50",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ava-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/avax",
        },
    ],
    description: "Avalanche BTCb is a BTC derivative asset that primarily supports the Avalanche ecosystem.",
    sections: [
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "[BTC.b Avalanche smart contract](https://subnets.avax.network/c-chain/token/0x152b9d0FdC40C096757F570A51E494bd4b943E50)\n[BTC.b Arbitrum smart contract](https://arbiscan.io/token/0x2297aebd383787a160dd0d9f71508148769342e3)\n[BTC.b Core smart contract](https://scan.coredao.org/token/0x7a6888c85edba8e38f6c7e0485212da602761c08)",
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
            title: "Users trust a network of 8 entities to secure the funds backing BTCb",
            content:
                "Ava Labs has disclosed that users trust a network of entities who participate in securing the BTC that backs BTCb. These eight entities are also reported to run special HSM hardware.\n\nThe eight entities securing the bridge are: Halborn, Avascan, Bware Labs, Ankr, Chainstack, Protofire, Blockdaemon, and Ava Labs.\n\nUsers trust Ava Labs's claims in their documentation are being executed in practice.\n\n[Source](https://medium.com/avalancheavax/bridging-bitcoin-to-avalanche-a-technical-overview-2535e7088b8)",
        },
    ],
};

export default avalanchebtcb;
