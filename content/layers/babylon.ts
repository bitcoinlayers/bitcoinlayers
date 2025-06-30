import Risk from "@/components/layer/layerTableItemRisk";
import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    UseCaseSnippet,
    TechnologySnippet,
    BitcoinSecuritySnippet,
    RiskSummarySnippet,
    Notice,
    Categorization,
} from "../props";
import { tokenToString } from "typescript";
import { Rubik_Vinyl } from "next/font/google";
import RiskSummary from "@/components/shared/risk-summary";

const babylon: LayerProject = {
    type: Type.Layer,
    slug: "babylon",
    title: "Babylon",
    entityType: EntityType.Anchor,
    entityCategory: EntityCategory.Integrated,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "BABY",
    notice: Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://babylonlabs.io/",
        },
        {
            text: Site.Docs,
            url: "https://docs.babylonlabs.io/",
        },
        {
            text: Site.Explorer,
            url: "https://babylon.explorers.guru/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/babylonlabs-io/",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/babylonlabs_io",
        },
    ],
    description:
        "Babylon is a proof-of-stake blockchain that is partially secured by bitcoin staking. It is the first Babylon BSN network. It offers a CosmWasm execution environment that supports arbitrary smart contracts.",
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
        categorization: [
            {
                title: Categorization.NoBridgeTitle,
                content: Categorization.NoBridgeSnippet,
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
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.LombardLBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv BTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.SolvBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Data is stored and made available by an alternative PoS network",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Network is operated by an alternative PoS network",
            content: ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Finality guarantees are provided by an alternative PoS Network",
            content: ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Babylon inherits economic security from BTC the asset",
                    content: BitcoinSecuritySnippet.YesSecurityDualStaking,
                },
                {
                    title: "BABY token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "MEV implications under review",
                    content: BitcoinSecuritySnippet.MEVUnderReview,
                },
                {
                    title: "Babylon does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
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
                    content: `${UseCaseSnippet.OnchainApps}\n\nDeploying an application on Babylon is currently permissioned. Developers must apply and be approved through Babylon governance to currently deploy on Babylon Genesis.`,
                },
            ],
        },
    ],
};

export default babylon;