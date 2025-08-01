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
} from "../props";
import { Reviewsnippet} from "../props-layers-reviews";
import {
    BitcoinSecuritySnippet,
    UseCaseSnippet,
    TechnologySnippet,
    KnowledgeBitSnippet,
    AdditionalSnippet,
    Alertsnippet,
} from "../props-layers-more-info";
import { RiskSummarySnippet } from "../props-layers-intro";

const goat: LayerProject = {
    type: Type.Layer,
    slug: "goat",
    title: "GOAT",
    entityType: EntityType.AltL1,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    partialReview: true, partialReviewAfter: "trust",// Set to true for partial review mode
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "GOAT",
    feeToken: "BTC",
    notice: Notice.OtherReasonBridge,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.goat.network/",
        },
        {
            text: Site.Docs,
            url: "https://docs.goat.network/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.goat.network/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/GOATNetwork",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/GOATRollup",
        },
    ],
    description: "The GOAT network is a sidechain protocol that supporting an EVM execution environment. The network runs on CometBFT consensus and has an official bridge program with bitcoin.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskFederationPeg,
        },
        {
            title: RiskSummarySnippet.TitleFederation,
            content: RiskSummarySnippet.RiskSummaryFederation,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
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
                    name: "Goat zBTC",
                    infrastructureSlug: "goat-zbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "The bitcoin backing this asset is secured by a federation of signers",
                    content: `${Reviewsnippet.GoatzBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "The network's validators are responsible for keeping a record of the network's state",
            content: Reviewsnippet.AltL1DA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "The network is operated by a closed set of node operators",
            content: `${Reviewsnippet.OperatorFederated}`,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "After a transaction has been included in the chain, it cannot reorg",
            content: `${Reviewsnippet.CometBFTFinality}`
        },
    ],
    sections: [
    ]
};

export default goat;