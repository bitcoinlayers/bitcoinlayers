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

const arbitrum: LayerProject = {
    type: Type.Layer,
    slug: "arbitrum",
    title: "Arbitrum",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://arbitrum.io/",
        },
        {
            text: Site.Docs,
            url: "https://docs.arbitrum.io/",
        },
        {
            text: Site.Explorer,
            url: "https://arbiscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/OffchainLabs/arbitrum",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/arbitrum",
        },
    ],
    description:
        "Arbitrum is an Ethereum rollup that supports a variety of wrapped BTC tokens.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.ThresholdtBTC}\n\nThis bridge is managed by a 9 member federation. Bitcoin users trust that 6 of the 9 members of this federation do not collude and steal user funds.`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BitGowBTC,
                },
                {
                    name: "cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.CoinbasecbBTC}`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.SolvBTC}\n\n${TokenSnippet.smartcontractreview}`,
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
                    name: "Solv SolvBTCBBN",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.SolvBTCBBN}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: `${TokenSnippet.SolvBTCENA},\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.LorenzostBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "iBTC",
                    infrastructureSlug: "ibtcnetwork-ibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.ibtcnetworkibtc}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Avalanche BTCb",
                    infrastructureSlug: "avalanche-btcb",
                    score: 0,
                    tier: RiskFactor.High,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.AvalancheBTCb}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Fire Bitcoin FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.FireBTC},\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.babypie},\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "xLink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.UnderReview,
                    content: `${TokenSnippet.xlink},\n\n${TokenSnippet.smartcontractreview}`,
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
            tier: RiskFactor.Medium,
            title: "Arbitrum blocks are produced and proposed by a centralized operator, but users can become their own block producer in the event of censorship or liveness failures",
            content: ReviewSnippet.SelfProposeMainAlt,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Arbitrum state transitions finalize on Ethereum. Validators who stake 3600 ETH can contest invalid state transitions",
            content: `${ReviewSnippet.FinalityAltRollupPermissionlessFraudProofs}\n\nWe are reviewing how to score finality guarantees for alternative rollups. Learn more on our thoughts [here](https://www.lxresearch.co/some-thoughts-on-proof-systems-for-bridges-on-other-chains/).\n\n,The stake required to become a validator is 3600 ETH.`
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "⚠️ A federation can immediately upgrade relevant contracts. This affects some two-way peg implementations",
                    content:
                        AdditionalSnippet.UpgradeableContractsCentralizedAndNoExit,
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Arbitrum does not inherit any security from Bitcoin",
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
                    title: "Arbitrum does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurity,
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
                {
                    title: "Fault Proofs (a.k.a Fraud Proofs)",
                    content: TechnologySnippet.FaultProofs,
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

export default arbitrum;
