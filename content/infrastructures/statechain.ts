import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    AssessmentCategory,
    OtherRiskSummarySnippet,
} from "../props";
import {Alertsnippet,
} from "../props-layers-more-info";
import {RiskSummarySnippet} from "../props-layers-intro";

const statechain: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "statechain",
    title: "Statechain Custody Model",
    entityType: EntityType.Statechain,
    entityCategory: EntityCategory.BitcoinNative,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "BTC",
    purpose: Purpose.BitcoinNative,
    associatedLayers: "spark, mercurylayer",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Docs,
            url: "https://docs.spark.money/spark/technical-definitions",
        },
    ],
    description:
        "Statechains are protocols that enable users to transfer bitcoin UTXOs offchain with the help of a service provider.",
        riskSummary: [
            {
                title: "No provable finality assurance",
                content: `Because statechain entities can not prove key deletion, users do not have a provable assurance that they are the only user that can collectively spend the onchain UTXO with the statechain entity.`,
            },
        ],
        sections: [
        {
            id: "technologybits",
            title: "Technology Bits",
            content: [
                {
                    title: "Statechain transfers",
                    content:
                        "Statechains support the transfer of Bitcoin UTXOs that are spendable by a user and a service provider known as a statechain entity. Statechain transfers see a user send their private keyshare for the UTXO to a recipient. To ensure that the current recipient is the only party able to immediately spend the UTXO, statechains entities are responsible for co-signing transfers and deleting keyshares held with previous owners. If the statechain entity is honest, only the current owner and the statechain entity can spend the UTXO onchain.",
                },
                {
                    title: "Timelocks",
                    content:
                        "Statechains leverage timelocks to ensure that the current owner can spend their unilateral exit transaction before the previous owner.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.NativeBitcoinCustody,
            score: 0,
            tier: "",
            title: "Users collaboratively custody funds with the statechain entity",
            content:
                "UTXOs are collaboratively held in a 2-2 multisig (or 2-2 MPC scheme) between the user and the statechain entity. To immediately spend the UTXO, both parties are needed to sign a transaction. However, during the deposit process, both parties co-sign a pre-signed exit transaction that can be used by the user to spend the UTXO if the statechain entity were to become unresponsive. Please see specific implementation reviews to learn if unilateral exit is possible.",
        },
        {
            category: AssessmentCategory.ProofofOwnership,
            score: 0,
            tier: "",
            title: "Users trust statechain entity to delete keyshares it held with a previous owner",
            content:
                "Users have no provable assurance that they are the only party immediately able to spend a Bitcoin UTXO with the statechain entity. Because statechain transfers see a user send their private keyshare for a UTXO to a recipient, the statechain entity must delete their keyshare held with previous owners. This is to ensure that the only parties able to immediately spend the UTXO are the recipient and the statechain entity. There is no way to prove key deletion, so users explicitly trust the statechain entity to act honestly and delete all keyshares it held with previous owners.",
        },
        {
            category: AssessmentCategory.UnilateralExit,
            score: 0,
            tier: "",
            title: "Users can unilaterally exit from the Statechain if the service provider becomes unresponsive",
            content:
                "Because all Statechain UTXOs have pre-signed unilateral exit transactions, users can exit the protocol if the statechain entity becomes unresponsive. Users must note that all previous owners can unilaterally exit, so they must publish their exit path on chain to ensure they retain access to their funds. Statechain implementations should implement timelocks to ensure that the current owner can spend their unilateral exit transaction before any previous owner.",
        },
    ],
};

export default statechain;