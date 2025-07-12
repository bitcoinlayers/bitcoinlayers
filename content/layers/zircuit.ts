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

const zircuit: LayerProject = {
    type: Type.Layer,
    slug: "zircuit",
    title: "Zircuit",
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
    nativeToken: "TKN",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.zircuit.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.zircuit.com/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.zircuit.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/zircuit-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/ZircuitL2",
        },
    ],
    description: "Zircuit is an Ethereum rollup that supports a variety of BTC-backed assets.",
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
            title: RiskSummarySnippet.TitleBridgeUpgrade,
            content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
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
                    content: `${Reviewsnippet.BitGowBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofsPlusUpgrade,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.FederationPeg,
                    content: `${Reviewsnippet.LombardLBTC} Lombard is bridged to Zircuit through Zircuit's offcial, Ethereum bridge.`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofsPlusUpgrade,
                },
                {
                    name: "Fire FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.FireBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofsPlusUpgrade,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.PumpBTC}\n\n${Reviewsnippet.smartcontractreview}`,
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
            tier: RiskFactor.VeryHigh,
            title: "The network is operated by a centralized entity",
            content: `${Reviewsnippet.AltRollupSelfSequenceNone}`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Zircuit's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
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

export default zircuit;