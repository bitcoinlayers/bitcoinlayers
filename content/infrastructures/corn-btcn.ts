import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory
} from "../props";

const cornbtcn: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "corn-btcn",
    title: "Corn BTCN",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
    sections: [
        {
            id: "contracts",
            title: "Contract addresses",
            content: [
                {
                    content:
                        "[This is the implementation of the BTCN token contract](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6).",
                },
                {
                    content:
                        "[This is the owner of the BTCN token contract](https://etherscan.io/address/0x515C7d8Fcb950f8b030ac08C994b37b4b8F3F7B5#code). This Authority contract is controlled by a [2/4 multisig](https://etherscan.io/address/0xcff1ad9f09b32252171207e8525c90b18d4e2c7d#code). ",
                },
                {
                    content:
                        "[This is the vault contract securing funds that back the BTCN token on Corn](https://etherscan.io/address/0x00943b11764176c3a8323aefcbd6fe70cfb6272d#readProxyContract). ",
                },
            ],
        },
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.UserRisk,
            score: 0,
            tier: "",
            title: "Users trust Binance with managing the BTC backing BTCN",
            content:
                "BTCN is a BTC derivative asset that is backed by other BTC derivative assets. wBTC and cbBTC are currently the two approved assets that back BTCN. BTCN, that is distributed to users from the Bitcorn contract on Corn, is currently backed by wBTC locked in a vault contract on Ethereum.\n\nUsers trust the owner of the BTCN contract to not implement a malicious contract upgrade. They additionally trust the owner of the Bitcorn contract on Corn to not issue more BTCN than what is locked in the vault contract on Ethereum.\n\nUsers also trust that [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc) and [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc) maintain a 1:1 peg with BTC so BTCN can also maintain a 1:1 peg.",
        },
    ],
};

export default cornbtcn;