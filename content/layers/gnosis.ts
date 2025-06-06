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

const gnosis: LayerProject = {
    type: Type.Layer,
    slug: "gnosis",
    title: "Gnosis",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
        RiskFactor.AlternativePoS,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "GNO",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.gnosischain.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.gnosischain.com/",
        },
        {
            text: Site.Explorer,
            url: "https://gnosisscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/gnosischain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/gnosischain",
        },
    ],
    description: "Gnosis is an alternative blockchain that supports a number of wrapped BTC tokens. It is EVM-compatible and leverages the same network architecture as Ethereum.",
    riskSummary: [
        {
            title: "Specific Risk",
            content: "risk text explanation"
        },
        {
            title: "Specific Risk",
            content: "risk text explanation"
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
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BitGowBTC}\n\n${TokenSnippet.smartcontractreview}`
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
            title: "Gnosis chain is operated by a distributed validator set",
            content: ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.AlternativePoS,
            title: "Finality guarantees are provided by the network's operator set",
            content: "Finality guarantees are provided through the network's operators. Users trust the network's operators to not reorg their transactions.",
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Low cost to stake and run a validator node",
                    content: "Running a validator node for Gnosis Chain requires a 1 GNO stake. The lost cost to run a validator (historically less than 1000 USD) enables more participants to join the network operator set.",
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Gnosis does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "GNO token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Gnosis does not contribute to the security budget",
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

export default gnosis;
