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
} from "../props";
import { tokenToString } from "typescript";
import { Rubik_Vinyl } from "next/font/google";

const babylon: LayerProject = {
    type: Type.Layer,
    slug: "babylon",
    title: "Babylon",
    entityType: EntityType.Anchor,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: true,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Low,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BABY",
    notice: undefined,
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
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Babylon Staked BTC",
                    infrastructureSlug: "babylonstaked-btc",
                    score: 0,
                    tier: RiskFactor.Low,
                    title: TokenSnippet.UnderReview,
                    content: TokenSnippet.BabylonStakedBTC,
                },
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
        {
            id: "disclaimers",
            title: "Disclaimers",
            content: [
                {
                    title: "Bitcoin Layers runs a Babylon Genesis validator",
                    content: "A company that supports the Bitcoin Layers project runs a validator for Babylon Genesis on behalf of Bitcoin Layers. Some rewards earned from this validator are used to fund Bitcoin Layers research and infrastructure. Other rewards are staked or used for other purposes (e.g. governance)."
                },
            ],
        },
    ],
};

export default babylon;