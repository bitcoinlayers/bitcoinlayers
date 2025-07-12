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
    BitcoinSecuritySnippet,
    RiskSummarySnippet,
} from "../props";
import { Reviewsnippet } from "../props-layers-reviews";
import { 
    Alertsnippet,
    AdditionalSnippet,
} from "../props-layers-more-info";

const template: LayerProject = {
    type: Type.Layer,
    slug: "Mode",
    title: "Mode",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "website",
        },
        {
            text: Site.Docs,
            url: "docs",
        },
        {
            text: Site.Explorer,
            url: "explorer",
        },
        {
            text: Site.GitHub,
            url: "github",
        },
        {
            text: Site.Twitter,
            url: "socials",
        },
    ],
    description: "",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
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
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BitGowBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Ethereum satisifes the data availability requirement",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Users cannot propose their own blocks in event of liveness failures",
            content: `${ReviewSnippet.FinalityAltRollupCentralizedProposer}`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Mode's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],

    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "This project has undergone a partial review",
                    content: `${AdditionalSnippet.InitialReview}`,
                },
            ],
        },
            ],
};

export default template;