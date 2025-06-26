import { tokenToString } from "typescript";
import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    BitcoinSecuritySnippet,
    TechnologySnippet,
    UseCaseSnippet,
    RiskSummarySnippet,
} from "../props";

const core: LayerProject = {
    type: Type.Layer,
    slug: "core",
    title: "Core",
    entityType: EntityType.Hybrid,
    entityCategory: EntityCategory.Integrated,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 6705,
    nativeToken: "CORE",
    feeToken: "CORE",
    notice: Notice.ClaimBitcoinLayer,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://coredao.org",
        },
        {
            text: Site.Docs,
            url: "https://docs.coredao.org",
        },
        {
            text: Site.Explorer,
            url: "https://scan.coredao.org",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/coredao-org",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/Coredao_Org",
        },
    ],
    description:
        "Core (in relation to Bitcoin) is an EVM sidechain with a hybrid consensus mechanism, Satoshi Plus, that leverages both DPoW and DPoS. It uses a federated multisig to bridge BTC with multiple parties ensuring the honesty of the two-way peg. The native token of the network is CORE, which is used for transaction fees, staking, and governance in Core DAO.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs,
            },
            {
                title: RiskSummarySnippet.TitleAlternativeL1,
                content: RiskSummarySnippet.RiskSummaryAlternativeL1,
            }
        ],
        riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Solv SolvBTC.m",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.SolvBTCdotSolv,
                },
                {
                    name: "Solv SolvBTC.b",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.SolvBTCdotSolv,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.SolvBTC,
                },
                                {
                    name: "SolvBTC.CORE",
                    infrastructureSlug: "solv-solvbtccore",
                    score: 0,
                    tier: RiskFactor.High,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.SolvsolvbtcCORE}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Binance BTCB",
                    infrastructureSlug: "binance-btcb",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.BinanceBTCB,
                },
                {
                    name: "Avalanche BTC.b",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: TokenSnippet.AvalancheBTCb,
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.ObeliskoBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Unirouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.UniRouterBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.xlink}${TokenSnippet.smartcontractreview}.`,
                },
                {
                    name: "Core coreBTC",
                    infrastructureSlug: "core-corebtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "This bridge program is being deprecated",
                    content: "The coreBTC bridge is being deprecated and only facilitating withdrawals.",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data availability requirement fulfilled by Core chain full nodes",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Core's hybrid consensus mechanism operates the network",
            content: ReviewSnippet.OperatorSidechainPOSBTCStake,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Transaction finality is provided by Core Chain consensus and has no assurances inherited from Bitcoin",
            content: ReviewSnippet.AltL1Finality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Core indirectly inherits security from Bitcoin consensus participants",
                    content: `${BitcoinSecuritySnippet.YesSecurityDualStaking}\n\nThe network additionally can be merge-mined by bitcoin miners.,`
                },
                {
                    title: "Core Chain requires another token to function",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced on Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Core Chain indirectly contributes to the security budget.",
                    content: BitcoinSecuritySnippet.MergeMineFees,
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content:
                        "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: TechnologySnippet.EVM,
                },
                {
                    title: "Bitcoin Staking",
                    content: TechnologySnippet.BitcoinStakingUnderReview,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.OnchainApps,
                },
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.BitcoinStaking,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "Core's node implementation is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Understanding Core Chain by Messari](https://messari.io/report/understanding-core-chain)\n[Core Chain Whitepaper](https://github.com/coredao-org/whitepaper/blob/main/COREWhitepaper_v1.0.6.pdf)",
                },
            ],
        },
    ],
};

export default core;
