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
    BitcoinSecuritySnippet,
    TechnologySnippet,
    UseCaseSnippet,
} from "../props";

const avalanche: LayerProject = {
    type: Type.Layer,
    slug: "avalanche",
    title: "Avalanche",
    entityType: EntityType.AltL1,
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
    feeToken: "AVAX",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.avax.network/",
        },
        {
            text: Site.Docs,
            url: "https://docs.avax.network/",
        },
        {
            text: Site.Explorer,
            url: "https://avascan.info/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ava-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/avax",
        },
    ],
    description:
        "Avalanche is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts. It also supports the interoperable subnet blockchains.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Avalanche BTCb",
                    infrastructureSlug: "avalance-btcb",
                    score: 0,
                    tier: RiskFactor.High,
                    title: TokenSnippet.FederationPeg,
                    content: TokenSnippet.AvalancheBTCb,
                },
                {
                    name: "Solv LBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.SolvBTC,
                },
                {
                    name: "Kraken KBTC",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: TokenSnippet.SolvBTCBBN,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Data is stored and made available by Avalanche full nodes",
            content:
                "The data for Avalanche's state is made available by its full nodes. Anyone can run an Avalanche node and verify is state.\n\nWe are currently reviewing Avalanche's full node implementation",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Avalanche is operated by a distributed validator set",
            content:
                "Blocks are built and proposed by a permissionless consensus network.\n\nWe are currently reviewing Avalanche's network operators",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Finality on Avalanche is guaranteed by a permissionless consensus mechanism",
            content:
                "Blocks are validated and finalized by a permissionless consensus network.\n\nWe are currently reviewing Avalanche's finality guarantees",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Avalanche does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "AVAX token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Avalanche does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-Compatible",
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

export default avalanche;
