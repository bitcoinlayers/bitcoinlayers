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

const zklink: LayerProject = {
    type: Type.Layer,
    slug: "zklink",
    title: "zkLink",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust",// Set to true for partial review mode
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "ZKL",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://zk.link/",
        },
        {
            text: Site.Docs,
            url: "https://docs.zklink.io/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.zklink.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/zkLinkProtocol",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/zkLink_Official",
        },
    ],
    description: "zkLink is an alternative blockchain run by centralized parties. It supports a variety of BTC-backed assets.",
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
            title: RiskSummarySnippet.TitleCentralizedDA,
            content: RiskSummarySnippet.NoDALayer,
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
                    alert: Alertsnippet.AltRollupAltTokenProofsUpgrade,
                },
                {
                    name: "SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC} SolvBTC is bridged to zkLink from BNB Smart Chain.`,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.PumpBTC}\n\n${Reviewsnippet.smartcontractreview}`,
                },
                {
                    name: "Melin M-BTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.MerlinMBTC}\n\n${Reviewsnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "The data is not posted to any data availability layer",
            content: Reviewsnippet.AltRollupNoDA,
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
            title: "zkLink's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}\n\nThe network relies on the network operators to make the state available to full nodes to progress the network's state.`,
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

export default zklink;