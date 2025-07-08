import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    BTCWrapperTransparency,
    PegRiskSummarySnippet,
    CustodyTitle,
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
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.General,
    associatedLayers: "Ethereum, BNB, Arbitrum, Avalanche, Merlin, BOB, Base",
    notice: undefined,
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
    description:
        "SolvBTC is a BTC-backed reserve asset that is backed by native BTC and various BTC-derivatives. It is deployed across various blockchains.",
        riskSummary: [
            {
                title: PegRiskSummarySnippet.CustodianTitle,
                content: PegRiskSummarySnippet.Guardian,
            },
            {
                title: "Various reserve assets used",
                content: PegRiskSummarySnippet.MultipleAssets,
            },
        ],
        sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "The protocol does not provide a public proof-of-reserve",
                    content: BTCWrapperTransparency.ProofofReservesNo,
                },
                {
                    title: "External operators are not disclosed",
                    content: BTCWrapperTransparency.OperatorsDisclosedNo,
                },
                {
                    title: "Redemptions enabled",
                    content: BTCWrapperTransparency.RedemptionsYesNoDocs,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: BTCWrapperTransparency.ContractsYes,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Blacklist function added to SolvV3 contracts",
                    content: "The SolvBTCV3 [release](https://github.com/solv-finance/SolvBTC/commits/main/contracts/SolvBTCV3.sol) will see a blaskList function implemented. This function will enable the owner of the SolvBTC contract to blacklist individual users; refraining them from interacting with the token. Current implementations of SolvBTC do not have this function.",
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
                "SolvBTC claims to be partially backed by native BTC managed by custodian providers. It’s been stated that Copper, Ceffu, Fireblocks, and Cobo are custodial providers securing BTC that partially backs SolvBTC. It's additionally backed by various BTC-derivative assets; [BTCB](https://www.bitcoinlayers.org/infrastructure/binance-btcb), [wBTC](https://www.bitcoinlayers.org/infrastructure/bitgo-wbtc), [FBTC](https://www.bitcoinlayers.org/infrastructure/firebitcoin-fbtc), [cbBTC](https://www.bitcoinlayers.org/infrastructure/coinbase-cbbtc), [BTC.b](https://www.bitcoinlayers.org/infrastructure/avalanche-btcb), and [tBTC](https://www.bitcoinlayers.org/infrastructure/threshold-tbtc).\n\nMultisigs securing derivative assets backed by SolvBTC are largely secured by GnosisSafes with 5 signers. The signing threshold varies across implementation. The M-BTC safe has a ⅕ threshold where the wBTC safe on Ethereum has a ⅗.\n\n[Source](https://solvprotocol.medium.com/introducing-solvbtc-the-first-ever-yield-bearing-bitcoin-871179c73ca6)",
        },
        {
            category: AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Minting of SolvBTC is managed by a permissioned group of entities",
            content:
                "Minting permissions are handled by three distinct entities in SolvBTC. In each implementation, the SolvBTCMultiAsset pool has minting capabilities and is the only entity with burning capabilities. An implementation of Chainlink CCIP on each chain enables cross-chain minting of SolvBTC tokens. Additionally, an AtomicMintContract on each chain has minting permissions.\n\nSolvBTC discloses all contract owner addresses in its documentation. The 0x0c2…5b7D address can grant, and revoke, minting authority for all implementations of SolvBTC tokens.\n\nSolvBTC does not disclose a specific protocol that monitors BTC deposits to initiate token minting on its respective chains.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist or pause function on respective contracts",
            content:
                "Implementations of the token do not have a blacklist or pause function.",
        },
        {
            category: AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "A centralized party can upgrade contracts",
            content:
                "The token contracts’ various deployments are unilaterally owned by an address controlled by an owner. This owner can unilaterally upgrade contracts. The signing threshold is ⅗.",
        },
    ],
};

export default solv;
