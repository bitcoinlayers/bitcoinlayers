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
    RiskSummarySnippet,
    BitcoinLayer,
    CustodyTitle,
} from "../props";
import {TechnologySnippet, Alertsnippet, UseCaseSnippet} from "../props-layers-more-info";

const spark: LayerProject = {
    type: Type.Layer,
    slug: "spark",
    title: "Spark",
    entityType: EntityType.Statechain,
    entityCategory: EntityCategory.BitcoinNative,
    custodyTitle: CustodyTitle.BitcoinNative,
    live: LiveStatus.Beta,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Low,
        RiskFactor.Low,
        RiskFactor.VeryHigh,
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
    description: "Spark is an implementation of the statechain protocol where users interact with a statechain entity to process transfers for offchain representations of UTXOs. Spark's statechain implementation leverages a federation of operators to act as the statechain entity.",
    riskSummary: [
        {
            title: "Users trust the statechain entity with key deletion",
            content: RiskSummarySnippet.RiskStatechainFinality,
        },
        {
            title: "Previous owner can broadcast their unilateral exit transaction",
            content: RiskSummarySnippet.RiskStatechainPreviousOwner,
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
                    name: "Statechain",
                    infrastructureSlug: "statechain",
                    score: 0,
                    tier: RiskFactor.Low,
                    title: "Users collaboratively custody funds with the statechain entity",
                    content: TokenSnippet.SparkBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Data related to current UTXO ownership is held client-side",
            content: "Transaction data is self-hosted. The statechain entity signs individual transactions and users store data for their keyshare and unilateral exit path client-side.\n\nThe statechain entity also keeps a record of transfer history.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Offchain transfers are co-signed by a federation",
            content: `${ReviewSnippet.OperatorFederatedStatechain}`,
            alert: {
                type: "warning" as const,
                title: "Federation is below five, publicly known entities",
                content: "Spark currently operates with two members in its statechain entity federation: Lightspark and Flashnet. Both are publicly known companies that risk damaging their reputation if they act maliciously.",
                linkText: "Source",
                linkUrl: "https://docs.spark.money/home/faq#how-many-spark-operators-sos-are-there%2C-and-who-are-they%3F",
                expandable: true,
            },
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Users trust a federation to delete keyshares held with previous owners",
            content: ReviewSnippet.FinalityStatechainFederation,
            alert: Alertsnippet.StatechainKeyDeletion,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Users rely on Bitcoin network participants for exit transactions",
                    content: BitcoinSecuritySnippet.BitcoinSecurityOffchainUTXO,
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
                    content: `${TechnologySnippet.FROST}`,
                    alert: {
                        type: "info" as const,
                        title: "Spark leverages FROST for its statechain entity",
                        content: "In Spark, a threshold of statechain operators are needed to create a valid signature for signing events.",
                        collapsible: true,
                        buttonText: "Learn how Spark leverages FROST",
                        expandable: false,
                    },
                },
                {
                    title: "Virtual UTXOs (vUTXOs)",
                    content: `${TechnologySnippet.vUTXO}`,
                                         alert: {
                         type: "info" as const,
                         title: "Spark calls vUTXOs 'leaves'",
                         content: "In Spark, vUTXOs are called 'leaves'. Leaves are connected to the onchain UTXO through branches, with each leaf having their own unilateral spending path. This enables users to split their leaves into multiple denominations. To create leaves, users work with the statechain entity to create a bitcoin transaction that takes the parent UTXO as the input, and produces multiple outputs each controlled by a new key. When added together, these new keyshares equal the value of the original private keyshare. Each of these keyshares are the user's private keyshare for an individual leaf. Users can spend these leaves to new recipients or further split them into smaller denominations as needed. Users should note that leaves, which are split futher from the parent UTXO, will have increased unilateral exit costs compared to a leaf that is one branch away from the parent UTXO.",
                         collapsible: true,
                         buttonText: "Learn how Spark leverages vUTXOs and splits them",
                         expandable: false,
                         linkText: "Learn more about leaf splitting in the Spark docs",
                         linkUrl: "https://docs.spark.money/spark/technical-definitions",
                     },
                },
                {
                    title: "Relative timelocks",
                    content: `Spark leverages relative timelocks to ensure that the current owner can spend their unilateral exit transaction before the previous owner.`,
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
                {
                    title: "Lightning compatible",
                    content: UseCaseSnippet.LightningCompatible,
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
                        "[Statechains are L2s, by the Bitcoin Layers team](https://x.com/BitcoinLayers/status/1925586374473724392) \n [Statechains Whitepaper, by Ruben Somsen](https://github.com/RubenSomsen/rubensomsen.github.io/blob/master/img/statechains.pdf) \n [Statechains: Non-custodial Off-chain Bitcoin Transfer, by Ruben Somsen](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39#:~:text=Statechains%20are%20a%20layer%20two,with%20scaling%20and%20save%20fees.) \n [Information on FROST from the Blockstream team](https://glossary.blockstream.com/frost/)",
                },
            ],
        },
    ],
};

export default spark;
