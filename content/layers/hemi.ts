import Risk from "@/components/layer/layerTableItemRisk";
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
    UseCaseSnippet,
    TechnologySnippet,
    BitcoinSecuritySnippet,
    AdditionalSnippet,
    KnowledgeBitSnippet,
    RiskSummarySnippet,
    Categorization,
    AlertSnippet,
} from "../props";
import {
    Reviewsnippet,
} from "../props-layers-reviews";
import { tokenToString } from "typescript";
import { Rubik_Vinyl } from "next/font/google";

const hemi: LayerProject = {
    type: Type.Layer,
    slug: "hemi",
    title: "Hemi",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Integrated,
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
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    notice: Notice.UnderReview,
    links: [
        {
            text: Site.Website,
            url: "https://hemi.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.hemi.xyz",
        },
        {
            text: Site.Explorer,
            url: "https://testnet.explorer.hemi.xyz",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/hemilabs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/hemi_xyz",
        },
    ],
    description:
        "Hemi is a blockchain that is building compatibility with bitcoin and Ethereum. It is built on the OP Stack and has an official bridge program hosted on Ethereum. It additionally has an official bridge program on bitcoin securing BTC backing HemiBTC.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs,
            },
            {
                title: RiskSummarySnippet.TitleAltDA,
                content: RiskSummarySnippet.RiskSummaryAltDANetwork,
            },
            {
                title: RiskSummarySnippet.TitleCentralizedSequencer,
                content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
            },
        ],
        categorization: [
            {
                title: "The project anchors its state to bitcoin, but does not meet our criteria to be a sidesystem",
                content: Categorization.NoBridgeSnippet,
            },
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
                    name: "Hemi hemiBTC",
                    infrastructureSlug: "hemi-hemibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "The signers securing BTC backing HemiBTC have not been officially disclosed",
                    content: TokenSnippet.HemiBTC,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BitGowBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Lorenzo enzoBTC",
                    infrastructureSlug: "lorenzo-enzobtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: TokenSnippet.UnderReview,
                },
                {
                    name: "UniRouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.UniRouterBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BedrockUniBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.babypie}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.babypie}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Merlin MBTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.MerlinMBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.ThresholdtBTC}\n\n${TokenSnippet.smartcontractreview}`,
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
                    name: "Bedrock brBTC",
                    infrastructureSlug: "bedrock-brbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.BedrockbrBTC}\n\n${TokenSnippet.smartcontractreview}\n\n`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Hemi blocks are produced by a centralized sequencer",
            content: ReviewSnippet.SelfSequenceNone
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Hemi state updates are finalized offchain. The network anchors its state to bitcoin",
            content: `${Reviewsnippet.AltRollupFinality}\n\nAfter this state is generated, nodes participating in Hemi's Proof-of-Proof consensus submit it to bitcoin.`,
            alert: AlertSnippet.ProofOfProofConsensus,
        },
    ],
    manualContracts: [
        {
            title: "Address securing BTC backing HemiBTC",
            address: "16NuSCxDVCAXbKs9GRbjbHXbwGXu3tnPSo",
            subtitle: "Specific address securing BTC backing HemiBTC. It is unknown if this address is managed by a single entity or multiple entities via a threshold signature scheme.",
            explorerUrl: "https://mempool.space/address/16NuSCxDVCAXbKs9GRbjbHXbwGXu3tnPSo"
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "This review is in progress",
                    content: "Some aspects of this review have not been completed. We are currently reviewing the project.",
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Hemi does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.Checkpoint,
                    alert: AlertSnippet.SecurityModelDifference,
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
                    title: "Hemi does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
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
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Proof-of-Proof consensus",
                    content: "Hemi's Proof-of-Proof (PoP) consensus is a bitcoin anchoring mechanism. After Hemi full nodes compute a new state root, PoP nodes publish this state root to bitcoin. After this state root is published, a Bitcoin Finality Governor queries bitcoin, finds the appended state root, and considers Hemi's blocks final."
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

export default hemi;
