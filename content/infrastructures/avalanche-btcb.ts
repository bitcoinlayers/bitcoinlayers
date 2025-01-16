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
    notice: undefined,
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
    description:
        "Avalanche BTCb is a BTC-backed reserve asset that primarily supports the Avalanche ecosystem.",
    sections: [
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
                "Ava Labs has disclosed that users trust a network of entities who participate in securing the BTC that backs BTCb. These eight entities are also reported to run special HSM hardware.\n\nThe eight entities securing the bridge are: Halborn, Avascan, Bware Labs, Ankr, Chainstack, Protofire, Blockdaemon, and Ava Labs.\n\nUsers trust that Ava Labs's claims in their documentation are being executed in practice.\n\n[Source](https://medium.com/avalancheavax/bridging-bitcoin-to-avalanche-a-technical-overview-2535e7088b8)",
        },
    ],
};

export default avalanchebtcb;
