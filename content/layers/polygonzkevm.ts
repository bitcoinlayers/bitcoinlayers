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
    BitcoinSecuritySnippet,
    UseCaseSnippet,
    KnowledgeBitSnippet,
    TechnologySnippet,
    ReviewSnippet,
    RiskSummarySnippet,
} from "../props";

import { Alertsnippet } from "../props-layers-more-info";
import { Reviewsnippet } from "../props-layers-reviews";

const polygonzkevm: LayerProject = {
    type: Type.Layer,
    slug: "polygonzkevm",
    title: "Polygon zkEVM",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "POL",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://polygon.technology/",
        },
        {
            text: Site.Docs,
            url: "https://docs.polygon.technology/zkEVM/",
        },
        {
            text: Site.Explorer,
            url: "https://zkevm.polygonscan.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/0xpolygonhermez",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/0xPolygon",
        },
    ],
    description: "Polygon zkEVM is a rollup that posts data to Ethereum.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleUpgrade,
            content: RiskSummarySnippet.RiskSummaryImmediateUpgrade
        },
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        }
    ],
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BitGowBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "A distributed consensus network satisfies the data availability requirement",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "The network is operated by a centralized block producer",
            content: ReviewSnippet.SelfSequenceNone,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Network state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        }, 
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Polygon zkEVM does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Polygon zkEVM does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurity,
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
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

export default polygonzkevm;
