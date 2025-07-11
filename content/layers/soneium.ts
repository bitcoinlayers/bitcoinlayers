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
} from "../props";
import { Reviewsnippet} from "../props-layers-reviews";
import {
    BitcoinSecuritySnippet,
    UseCaseSnippet,
    TechnologySnippet,
    KnowledgeBitSnippet,
    AdditionalSnippet,
    Alertsnippet,
} from "../props-layers-more-info";
import { RiskSummarySnippet } from "../props-layers-intro";
import xlinkabtc from "../infrastructures/xlink-abtc";

const soneium: LayerProject = {
    type: Type.Layer,
    slug: "soneium",
    title: "Soneium",
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
        RiskFactor.Medium,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "ETH",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://soneium.org/en/",
        },
        {
            text: Site.Docs,
            url: "https://docs.soneium.org/docs/builders/overview",
        },
        {
            text: Site.Explorer,
            url: "https://soneium.blockscout.com/",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/soneium",
        },
    ],
    description: "X Layer is an Ethereum rollup that supports a variety of BTC-backed assets.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
        {
            title: RiskSummarySnippet.TitleSystemUpgrade,
            content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
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
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.BitGowBTC}\n\wBTC is bridged to Soneium through a third party provider.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianDerivative,
                    content: `${Reviewsnippet.xSolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Solv SolvBTCJUP",
                    infrastructureSlug: "solv-solvbtcjup",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianDerivative,
                    content: `${Reviewsnippet.SolvBTCdotSolv}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Unit uBTC",
                    infrastructureSlug: "unit-unitbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.FederationPeg,
                    content: `${Reviewsnippet.HyperliquidBTC}\n\nuBTC is bridged to Soneium from Hyperliquid through a third party provider.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Ethereum satisfies the network's data availability requirement",
            content: Reviewsnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "The network is operated by a centralized entity. Users can bypass the sequencer if needed",
            content: `${Reviewsnippet.AltRollupSelfSequenceMain}`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "The network's state is finalized offchain",
            content: `${Reviewsnippet.AltRollupFinality}`
        },
    ],
        sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "This project has undergone a partial review",
                    content: `${AdditionalSnippet.InitialReview}`,
                },
            ],
        },
    ]
};

export default soneium;