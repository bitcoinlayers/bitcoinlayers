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

const xlayer: LayerProject = {
    type: Type.Layer,
    slug: "xlayer",
    title: "X Layer",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "OKB",
    feeToken: "OKB",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://okx.com/xlayer",
        },
        {
            text: Site.Docs,
            url: "https://www.okx.com/xlayer/docs/users/welcome/about-x-layer",
        },
        {
            text: Site.Explorer,
            url: "https://web3.okx.com/explorer/x-layer",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/XLayerOfficial",
        },
    ],
    description: "X Layer is an alternative rollup that supports a variety of BTC-backed assets. It posts state updates to a federated data availability committee.",
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
            content: RiskSummarySnippet.RiskSummarySecurityCouncil,
        },
        {
            title: RiskSummarySnippet.TitleSystemUpgrade,
            content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDACommittee,
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
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.LorenzostBTC} Lombard is bridged to Zircuit through Zircuit's offcial, Ethereum bridge.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "xLink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.xlink}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "State data is made available by a federated committee",
            content: Reviewsnippet.AltDADAC,
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
            tier: RiskFactor.VeryHigh,
            title: "The network's state is finalized offchain",
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

export default xlayer;