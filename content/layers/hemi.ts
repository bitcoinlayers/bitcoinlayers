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
} from "../props";
import { tokenToString } from "typescript";
import { Rubik_Vinyl } from "next/font/google";

const hemi: LayerProject = {
    type: Type.Layer,
    slug: "hemi",
    title: "Hemi",
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
        RiskFactor.UnderReview,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "ETH",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
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
        "Hemi is a blockchain that is building compatibility with bitcoin and Ethereum.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
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
                    name: "Hemi hemiBTC",
                    infrastructureSlug: "hemi-hemibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: "HemiBTC is a synthetic BTC asset on the Hemi blockchain. It is under review",
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
                    content: `This two-way peg is under review.`,
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
            tier: RiskFactor.UnderReview,
            title: "We are reviewing Hemi's sequencing mechanism",
            content: "This section of the assessment is under review.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Hemi updates its state on Ethereum. The proposer role is currently centralized",
            content: ReviewSnippet.FinalityAltRollupCentralizedProposer,
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
                    title: "Hemi does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurity,
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

export default hemi;
