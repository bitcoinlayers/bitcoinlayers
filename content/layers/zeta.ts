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
    BitcoinSecuritySnippet,
    TechnologySnippet,
    UseCaseSnippet,
} from "../props";

const zeta: LayerProject = {
    type: Type.Layer,
    slug: "zeta",
    title: "Zeta",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
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
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ZETA",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.zetachain.com/",
        },
        {
            text: Site.Docs,
            url: "https://www.zetachain.com/docs/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.zetachain.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/zeta-chain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/zetablockchain",
        },
    ],
    description: "",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "BTC.BTC",
                    infrastructureSlug: "zeta-btc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.UnderReview}\n\n${TokenSnippet.smartcontractreview},`
                },
                {
                    name: "PumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.PumpBTC}\n\n${TokenSnippet.smartcontractreview},`
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BedrockUniBTC}\n\n${TokenSnippet.smartcontractreview},`
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "",
            content: ReviewSnippet.AltL1Operators,
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "",
            content: ReviewSnippet.CometBFTFinality,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Zeta does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "Zeta token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Zeta does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-compatible",
                    content: TechnologySnippet.EVM,
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

export default zeta;
