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
    BitcoinSecuritySnippet,
    TechnologySnippet,
} from "../props";

const spark: LayerProject = {
    type: Type.Layer,
    slug: "spark",
    title: "Spark",
    entityType: EntityType.Statechain,
    entityCategory: EntityCategory.BitcoinNative,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Low,
        RiskFactor.Low,
        RiskFactor.High,
        RiskFactor.VeryHigh,
    ],
    btcLocked: NaN,
    nativeToken: "BTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://www.spark.money/",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/buildonspark",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/buildonspark",
        },
        {
            text: Site.Docs,
            url: "https://docs.spark.money/home/welcome",
        },
    ],
    description: "Spark is an implementation of the statechain protocol where users interact with a statechain entity to process transfers for offchain representations of UTXOs. Spark's statechain implementation leverages a federation of operators to act as the statechain entity. In statechains, users can unilaterally exit to the L1 if operators become unresponsive..",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Bitcoin Native",
                    infrastructureSlug: "spark-btc",
                    score: 0,
                    tier: RiskFactor.Low,
                    title: "Users collaboratively custody funds with the statechain entitiy",
                    content: TokenSnippet.SparkBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Transfer history data is held client-side",
            content: "Transaction data is self-hosted. The statechain entity signs individual transactions and the transfer history gets passed on between clients.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "Offchain transfers are co-signed by a federation",
            content: ReviewSnippet.OperatorFederatedStatechain,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Users trust a federation to delete keyshares held with previous owners",
            content: ReviewSnippet.FinalityStatechainFederation,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Users rely on Bitcoin network participants for exit transactions",
                    content: BitcoinSecuritySnippet.OffchainUTXO,
                },
                {
                    title: "The protocol does not enable MEV on Bitcoin",
                    content: BitcoinSecuritySnippet.OffchainUTXOMEV,
                },
                {
                    title: "No alternative token needed for network security",
                    content: BitcoinSecuritySnippet.OffchainUTXONoToken,
                },
                {
                    title: "Unilateral exits contribute to the security budget",
                    content: BitcoinSecuritySnippet.StatechainSecurityBudget,
                },
            ],
        },
        {
            id: "Technology",
            title: "Technology",
            content: [
                {
                    title: "Statechains",
                    content: TechnologySnippet.Statechain,
                },
                {
                    title: "FROST",
                    content: `${TechnologySnippet.FROST}\n\nSpark leverages FROST for its statechain entity. A threshold of statechain operators are needed to create a valid signature for signing events.`,
                },
            ]
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Offchain UTXO transfers",
                    content: UseCaseSnippet.OffchainUTXOTransfers,
                },
                {
                    title: "Tokenized applications",
                    content: UseCaseSnippet.UTXOTokenizedApplications,
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more about statechains below",
                    content:
                        "Statechains Whitepaper by Ruben Somsen ([GitHub, Oct 2018](https://github.com/RubenSomsen/rubensomsen.github.io/blob/master/img/statechains.pdf)) \n Statechains: Non-custodial Off-chain Bitcoin Transfer by Ruben Somsen ([Medium, Jun 2019](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39#:~:text=Statechains%20are%20a%20layer%20two,with%20scaling%20and%20save%20fees.)) \n Information on [FROST](https://glossary.blockstream.com/frost/)",
                },
            ],
        },
    ],
};

export default spark;
