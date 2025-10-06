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
    BitcoinSecuritySnippet,
} from "../props";
import {Alertsnippet} from "../props-layers-more-info";

const flashnet: LayerProject = {
    type: Type.Layer,
    slug: "flashnet",
    title: "Flashnet",
    entityType: EntityType.Other,
    entityCategory: EntityCategory.Other,
    live: LiveStatus.Beta,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    partialReview: false, // Set to true for partial review mode
    partialReviewAfter: undefined, // Options: "tokencontracts", "risksummary", "categorization", "trust", "manualcontracts"
    showContractAnalysis: false, // Set to true to show contract analysis section after token contracts
    
    // EXAMPLES:
    // partialReview: true, partialReviewAfter: "tokencontracts" -> Show only Overview, Chart, Token Contracts
    // partialReview: true, partialReviewAfter: "risksummary" -> Show Overview through Risk Summary
    // partialReview: true, partialReviewAfter: "trust" -> Show Overview through Trust Assumptions
    
    // NOTE: If chart or token contract data is not available from the API, 
    // "Coming Soon" placeholders will automatically be shown instead of empty sections
    riskFactors: [
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
    ],
    btcLocked: NaN,
    nativeToken: "BTC",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://flashnet.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.flashnet.xyz/",
        },
        {
            text: Site.Explorer,
            url: "https://www.sparkscan.io/?network=mainnet",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/flashnet",
        },
    ],
    description: "Flashnet is an intents matching protocol on Spark that enables users to interact with expressive smart contracts via Spark transactions.",
    riskSummary: [
        {
            title: "Users trust network validators during intent execution",
            content: "Since expressive smart contracts are not executable in bitcoin script, users leverage Flashnet's intent matching protocol to execute their intents. Users trust the Flashnet network operators for the duration of the intent execution.",
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
                    name: "Flashnet Intents on Spark",
                    infrastructureSlug: "statechain",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "Flashnet holds user funds during intent execution",
                    content: `The Flashnet network executes user intents and custodies the user's funds during the execution. User funds are held on Spark before and after the intent execution.\n\nFlashnet validators find user intents and a threshold of their signatures is needed to forward the intent to a Trusted Execution Environment (TEE) for execution. TEEs are bound by the rules of their execution, and cannot modify user intents. After execution, users fall to the custody assumptions of Spark.`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "Data related to intent execution is stored by Flashnet operators",
            content: "Flashnet executes complex transactions that are not native to Spark. The data related to intent execution is stored by Flashnet operators.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Flashnet is currently operated by a closed validator set",
            content: `Flashnet is in its beta phase and is currently operated by a closed validator set.`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Post execution, users fall to the finality assumptions of Spark",
            content: `While intent execution is near-instant, users' trust assumptions fall back to that of Spark. Spark is an implementation of the statechain protocol where Spark operators cannot prove key deletion for `,
            alert: Alertsnippet.StatechainKeyDeletion,
        },
    ],
    sections: [
        {
                    id: "additionalconsiderations",
                    title: "Additional Considerations",
                    content: [
                        {
                            title: "Code is not open-source",
                            content: "The code related to Flashnet is not open-source. This review is based on documentation and reviews of Flashnet transactions on Spark."
                        },
                    ],
                },
                {
                    id: "technology",
                    title: "Technology",
                    content: [
                        {
                            title: "Truested Execution Environment (TEE)",
                            content: "A TEE is a hardware-backed secure enclaves (like Intel SGX) that provide isolated execution environments with cryptographic attestation capabilities, used to protect Arkade Signer keys and ensure verifiable execution."
                        },
                    ],
                },
                {
                    id: "usecases",
                    title: "Use Cases",
                    content: [
                        {
                            title: "Flashnet enables complex smart contracts on Spark.",
                            content: UseCaseSnippet.OnchainApps,
                        },
                    ],
                },
            ],
};

export default flashnet;