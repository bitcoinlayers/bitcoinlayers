import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    ReviewSnippet,
    TokenSnippet,
    BTCWrapperTransparency,
} from "../props";

const xsolvbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "solv-xsolvbtc",
    title: "Solv xSolvBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: true,
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
            text: Site.GitHub,
            url: "https://github.com/solv-finance",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/SolvProtocol",
        },
    ],
    description:
        "xSolvBTC offer a mechanism that enables users to deposit SolvBTC into smart contracts on EVM-based chains. Users receive a token representing BTC deposited on Babylon in exchange for their wrapped BTC token.",
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
                    content: BTCWrapperTransparency.OperatorsDisclosedYes,
                },
                {
                    title: "Redemptions enabled",
                    content: BTCWrapperTransparency.RedemptionsYesNoDocs,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: BTCWrapperTransparency.ContractsYes,
                },
                {
                    title: "The project does not provide stake attestations",
                    content: BTCWrapperTransparency.StakeAttestationsNo,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Babylon is not live.",
                    content:
                        "The Babylon blockchain is not live. Only deposits are being processed.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Solv docs](https://docs.solv.finance/)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Bitcoin assets used to back xSolvBTC are custodied by institutional providers",
            content: TokenSnippet.xSolvBTC,
        },
        {
            category: AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Minting of SolvBTC is managed by a permissioned group of entities",
            content:
                "Minting permissions are handled by three distinct entities in xSolvBTC. In each implementation, the SolvBTCMultiAsset pool has minting capabilities and is the only entity with burning capabilities. An implementation of Chainlink CCIP on each chain enables cross-chain minting of xSolvBTC tokens. Additionally, an AtomicMintContract on each chain has minting permissions.\n\nxSolvBTC discloses all contract owner addresses in its documentation. The 0x0c2…5b7D address can grant, and revoke, minting authority for all implementations of xSolvBTC tokens.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist function currently implemented",
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

export default xsolvbtc;
