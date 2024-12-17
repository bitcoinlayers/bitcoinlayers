import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
} from "../props";

const avalanchebtcb: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "avalanche-btcb",
    title: "Avalanche BTC.b",
    entityType: EntityType.BTCWrapper,
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
    description: "Under Review",
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

export default avalanchebtcb;
