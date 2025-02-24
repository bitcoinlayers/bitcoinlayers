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
} from "../props";
import { tokenToString } from "typescript";
import { Rubik_Vinyl } from "next/font/google";

const hemi: LayerProject = {
    type: Type.Layer,
    slug: "hemi",
    title: "Hemi",
    entityType: EntityType.Sidechain,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
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
            tier: RiskFactor.UnderReview,
            title: ReviewSnippet.UnderReview,
            content: ReviewSnippet.UnderReview,
            pegs: [],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: ReviewSnippet.UnderReview,
            content: ReviewSnippet.UnderReview,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: ReviewSnippet.UnderReview,
            content: ReviewSnippet.UnderReview,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: ReviewSnippet.UnderReview,
            content: ReviewSnippet.UnderReview,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content:
                        "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

export default hemi;
