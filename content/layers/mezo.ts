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
    RiskSummarySnippet,
} from "../props";

const mezo: LayerProject = {
    type: Type.Layer,
    slug: "mezo",
    title: "Mezo",
    entityType: EntityType.Federation,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "tBTC",
    feeToken: "tBTC",
    notice: Notice.ClaimBitcoinLayer,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://mezo.org",
        },
        {
            text: Site.Docs,
            url: "https://mezo.org/docs/users/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.mezo.org",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/mezonetwork",
        },
    ],
    description:
        "Mezo is an EVM-compatible blockchain that supports general purpose onchain applications. It runs on CometBFT consensus protocol and is operated by a federated validator set. Its official bridge is supports bridging tBTC from Ethereum to Mezo.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: `${RiskSummarySnippet.RiskSummaryCustodianPegs}The majority of Mezo's BTC-backed assets are secured by a bridge contract on Ethereum. This bridge contract can be upgraded by a 5/9 federation.`
            },
            {
                title: RiskSummarySnippet.TitleFederation,
                content: RiskSummarySnippet.RiskSummaryFederation,
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
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.ThresholdtBTC}\n\nThis Mezo bridge is a escrow contract on Ethereum that holds various BTC-backed assets. The bridge is upgradeable by a 9 member federation. 5 signers are needed to initaite upgrades. The identity of these signers is unknown.`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: `${TokenSnippet.xSolvBTC}`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BitGowBTC}`,
                },
                {
                    name: "Coinbase cbBTC",
                    infrastructureSlug: "coinbase-cbbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.CoinbasecbBTC}`,
                },
                {
                    name: "Fire Bitcoin FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.FireBTC}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "Data related to the Mezo network is made available by its validator set",
            content: ReviewSnippet.DAFederation,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "The Mezo network is operated by a federated validator set",
            content: ReviewSnippet.OperatorFederated,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Finality guarantees are provided through a federation. Mezo blocks cannot be reorged after being added to the chain",
            content: `${ReviewSnippet.CometBFTFinality}\n\nThe Mezo network is currently operated by a federated validator set. Finality assurances are provided by this federated group of operators.`,
        },
    ],
    manualContracts: [
        {
            title: "Mezo Bridge Escrow Contract",
            address: "0xF6680EA3b480cA2b72D96ea13cCAF2cFd8e6908c",
            subtitle: "Main bridge contract that escrows wrapped BTC assets on Ethereum to back corresponding assets on Mezo.",
            explorerUrl: "https://etherscan.io/address/0xF6680EA3b480cA2b72D96ea13cCAF2cFd8e6908c"
        },
        {
            title: "Governance Multisig",
            address: "0x98D8899c3030741925BE630C710A98B57F397C7a", 
            subtitle: "5-of-9 multisig responsible for upgrades to the bridge escrow contract.",
            explorerUrl: "https://etherscan.io/address/0x98D8899c3030741925BE630C710A98B57F397C7a"
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Mezo does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "A wrapped BTC token used to pay fees",
                    content: BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Mezo does not contribute to the security budget",
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
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Threshold Network's tBTC review",
                    content: "Bitcoin Layers' review of [Threshold Network's tBTC](https://bitcoinlayers.org/layers/threshold-tbtc)",
                },
                {
                    title: "Proxy Upgrade Pattern",
                    content: "Learn how smart contracts on [Ethereum are upgraded](https://docs.openzeppelin.com/upgrades-plugins/proxies)",
                },
            ],
        },
    ],
};

export default mezo;
