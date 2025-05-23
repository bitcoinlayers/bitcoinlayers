import { Bitcoin } from "lucide-react";
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
    KnowledgeBitSnippet,
    AdditionalSnippet,
} from "../props";

const hyperliquid: LayerProject = {
    type: Type.Layer,
    slug: "hyperliquid",
    title: "Hyperliquid",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "HYPE",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://hyperfoundation.org/",
        },
        {
            text: Site.Docs,
            url: "https://hyperliquid.gitbook.io/hyperliquid-docs",
        },
        {
            text: Site.Explorer,
            url: "https://app.hyperliquid.xyz/explorer",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/hyperliquid-dex",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/HyperliquidX",
        },
    ],
    description:
        "Hyperliquid is a purpose built layer 1 blockchain focused on high performance applications. It supports a BTC derivative asset where BTC backing the asset is secured by a federation of guardians.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Hyperliquid BTC",
                    infrastructureSlug: "hyperliquid-btc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.FederationPeg,
                    content: TokenSnippet.HyperliquidBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Data is stored and made available by an alternative consensus network",
            content: `${ReviewSnippet.DAConsensusNetwork}\n\nWe are reviewing if node operation is permissionless.`,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Blocks are built by validators participating in a POS network",
            content: `${ReviewSnippet.OperatorSidechainPOS}\n\nWe are reviewing the process for joining the validator set.`,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "This section is currently under review.",
            content: ReviewSnippet.FinalityAltNetworkUnderReview
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Hyperliquid does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "HYPE token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Hyperliquid does not contribute to the security budget",
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
    ],
};

export default hyperliquid;
