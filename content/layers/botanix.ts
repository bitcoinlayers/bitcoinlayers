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
    TokenSnippet,
    ReviewSnippet,
    UseCaseSnippet,
    TechnologySnippet,
    KnowledgeBitSnippet,
    AdditionalSnippet,
    DefinitionSnippet,
    RiskSummarySnippet,
    BitcoinSecuritySnippet,
} from "../props";

const template: LayerProject = {
    type: Type.Layer,
    slug: "botanix",
    title: "Botanix",
    entityType: EntityType.Federation,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: NaN,
    nativeToken: "bBTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://botanixlabs.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.botanixlabs.com/botanix/",
        },
        {
            text: Site.Explorer,
            url: "https://botanixscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/botanix-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/BotanixLabs",
        },
    ],
    description: "Botanix is an EVM-compatible sidechain that is operated by a federation of node operators. The network supports an enshrined bridge program managed by the federation. Botanix is built on CometBFT consensus and has plans to add bitcoin staking in the future.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleFederation,
            content: RiskSummarySnippet.RiskSummaryFederation,
        },
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskFederationPeg,
        }
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
                    name: "Botanix Pegged BTC",
                    infrastructureSlug: "botanix-btc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "BTC backing this asset is secured by a federation",
                    content: TokenSnippet.BotanixBTC,
                },
                {
                    name: "Botanix Staked BTC",
                    infrastructureSlug: "botanix-stbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "This asset is backed by wrapped BTC locked in a staking vault",
                    content: TokenSnippet.BotanixStakedBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "Botanix's federation is responsible for making data available",
            content: ReviewSnippet.DAFederation,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "Botanix's federation is responsible for operating the network",
            content: ReviewSnippet.OperatorFederated,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Botanix's federation is responsible for finalizing transactions.",
            content: ReviewSnippet.CometBFTFinality,
        },
    ],
    manualContracts: [
        {
            title: "stBTC Contract",
            address: "0xF4586028FFdA7Eca636864F80f8a3f2589E33795", 
            subtitle: "",
            explorerUrl: "https://botanixscan.io/address/0xF4586028FFdA7Eca636864F80f8a3f2589E33795/contract/3637/readContract"
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Node implementation is not open-source",
                    content:
                        "Botanix's consensus node implementation, based on CometBFT, is not open-source. There is also no public consensus explorer showing validator performance and uptime.",
                },
            ],
        },        
        {
                    id: "bitcoinsecurity",
                    title: "Bitcoin Security",
                    content: [
                        {
                            title: "Botanix does not inherit security from bitcoin",
                            content: BitcoinSecuritySnippet.NoSecurity,
                        },
                        {
                            title: "Botanix is a bitcoin-denominated network",
                            content: BitcoinSecuritySnippet.WrappedTokenFees,
                        },
                        {
                            title: "Users trust the Botanix federation to not exploit MEV",
                            content: BitcoinSecuritySnippet.AltNetworkMEV,
                        },
                        {
                            title: "Botanix does not contribute to the security budget",
                            content: BitcoinSecuritySnippet.NoSecurityBudget,
                        },
                    ],
                },
                {
                    id: "technology",
                    title: "Technology",
                    content: [
                        {
                            title: "Ethereum Virtual Machine",
                            content: TechnologySnippet.EVM,
                        },
                    ],
                },
                {
                    id: "usecases",
                    title: "Use Cases",
                    content: [
                        {
                            title: "Onchain Applications",
                            content: UseCaseSnippet.OnchainApps,
                        },
                    ],
                },
            ],
};

export default template;