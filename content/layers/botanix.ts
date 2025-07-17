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
    CustodyTitle,
    Categorization,
} from "../props";
import { Reviewsnippet } from "../props-layers-reviews";
import { Alertsnippet } from "../props-layers-more-info";

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
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "bBTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    limitedData: true,
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
    description: "Botanix is an EVM-compatible sidechain that is operated by a federation. The network supports an enshrined bridge program managed by the federation. Botanix is built on CometBFT consensus and has plans to add bitcoin staking in the future.",
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
                    name: "Botanix BTC",
                    infrastructureSlug: "botanix-btc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "BTC backing this asset is secured by a federation",
                    content: TokenSnippet.BotanixBTC,
                    alert: Alertsnippet.BridgeStandardMet,
                },
                    {
                        name: "Botanix Staked BTC",
                        infrastructureSlug: "botanix-stbtc",
                        score: 0,
                        tier: RiskFactor.High,
                        title: "This asset is backed by wrapped BTC locked in a staking vault",
                        content: Reviewsnippet.BotanixStakedBTC,
                    },
                    {
                        name: "Rover rovBTC",
                        infrastructureSlug: "rover-rovbtc",
                        score: 0,
                        tier: RiskFactor.VeryHigh,
                        title: "This asset is backed by Botanix stBTC locked in a staking vault",
                        content: Reviewsnippet.RoverrovBTC,
                    },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Botanix node operators are responsible for making data available",
            content: `${Reviewsnippet.AltL1DA}`
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
            title: "Botanix's federation is responsible for finalizing transactions",
            content: ReviewSnippet.CometBFTFinality,
        },
    ],
    manualContracts: [
        {
            title: "stBTC VaultContract",
            address: "0xF4586028FFdA7Eca636864F80f8a3f2589E33795", 
            subtitle: "",
            explorerUrl: "https://botanixscan.io/address/0xF4586028FFdA7Eca636864F80f8a3f2589E33795/contract/3637/readContract"
        },
        {
            title: "rovBTC Vault Contract",
            address: "0xDe46F9bF2d99F2db88440C74DC4c2A373fc9F69e", 
            subtitle: "",
            explorerUrl: "https://botanixscan.io/address/0x9BC574a6f1170e90D80826D86a6126d59198A3Ef/contract/3637/code"
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