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
} from "../props";
import { Reviewsnippet } from "../props-layers-reviews";
import { BitcoinSecuritySnippet } from "../props-layers-more-info";

const alkanes: LayerProject = {
    type: Type.Layer,
    slug: "alkanes",
    title: "Alkanes",
    entityType: EntityType.Rollup,
    entityCategory: EntityCategory.Other,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: false, // Set to true for partial review mode
    partialReviewAfter: undefined, // Options: "tokencontracts", "risksummary", "categorization", "trust", "manualcontracts"
    showContractAnalysis: false, // Set to true to show contract analysis section after token contracts
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Low,
        RiskFactor.Low,
        RiskFactor.UnderReview,
    ],
    btcLocked: NaN,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://app.oyl.io/portfolio/",
        },
        {
            text: Site.Docs,
            url: "https://alkanes-docs.vercel.app/",
        },
        {
            text: Site.Explorer,
            url: "https://ordiscan.com/alkanes",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/kungfuflex/alkanes-rs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/oylwallet?lang=en",
        },
    ],
    description: "Alkanes is a bitcoin rollup (also known as a metaprotocol). Alkanes nodes (also known as indexers) finalize their view of the network's state by intepreting metadata included in bitcoin transactions. The network also supports wrapped bitcoin assets.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "frBTC",
                    infrastructureSlug: "frBTC",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "BTC backing frBTC is held in a 6/9 multisig",
                    content: `${Reviewsnippet.SubfrostfrBTC}`,
                
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Data related to Alkanes transactions is made available by bitcoin full nodes",
            content: ReviewSnippet.BitcoinDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Low,
            title: "Transactions are sequenced by bitcoin miners",
            content: `${ReviewSnippet.BasedSequenced}`,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "System finality is provided by bitcoin miners, but node software can fork permissionlessly",
            content: `${ReviewSnippet.BasedSequencedFinality}`
        },
    ],
    sections: [
                {
                    id: "bitcoinsecurity",
                    title: "Bitcoin Security",
                    content: [
                        {
                            title: "The system uses bitcoin for data availability",
                            content: BitcoinSecuritySnippet.BitcoinDASecurity,
                        },
                        {
                            title: "Users pay bitcoin transaction fees",
                            content: BitcoinSecuritySnippet.BasedSequencedFees,
                        },
                        {
                            title: "The network may introduce MEV to bitcoin",
                            content: "We are reviewing MEV implications related to the network."
                        },
                        {
                            title: "The network directly contributes to the security budget",
                            content: BitcoinSecuritySnippet.BasedSequencedRollup,
                        },
                    ],
                },
            ],
};

export default alkanes;