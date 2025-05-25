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

const template: LayerProject = {
    type: Type.Layer,
    slug: "slug",
    title: "Title",
    entityType: EntityType.Rollup,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
        RiskFactor.UnderReview,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
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
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "For an official two-way peg, you can write a customized title here.",
                    content: `${TokenSnippet.TemplateBTC}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${TokenSnippet.ThresholdtBTC}\n\n${TokenSnippet.smartcontractreview}\n\n`,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "For other titles, just use TokenSnippet.PegType as shown in the example below.",
                    content: `${TokenSnippet.ThresholdtBTC}\n\n${TokenSnippet.smartcontractreview}\n\nUse the smart contract review field to highlight that the asset may have additional trust assumptions if it's bridged across chains. You can also use text to describe additional trust assumptions.`,
                },
                {
                    name: "Template BTC",
                    infrastructureSlug: "templace-btc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.TemplateBTC}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: ReviewSnippet.TemplateReview,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Add a custom title here",
            content: `${ReviewSnippet.TemplateReview}\n\nAdd additional context with text if needed.`
        },
    ],
    sections: [
        {
                    id: "additionalconsiderations",
                    title: "Additional Considerations",
                    content: [
                        {
                            title: "If there are any additional considerations, you can add them below using AdditionalSnippet.Snippet or simply typing the consideration",
                            content: "AdditionalSnippet.Snippet or text content"
                        },
                    ],
                },
                {
                    id: "bitcoinsecurity",
                    title: "Bitcoin Security",
                    content: [
                        {
                            title: "Add a prop saying if the network inherits security from bitcoin",
                            content: BitcoinSecuritySnippet.Template,
                        },
                        {
                            title: "Add a prop clarifying if the network uses an altcoin or is bitcoin denominated",
                            content: BitcoinSecuritySnippet.Template,
                        },
                        {
                            title: "Add a prop clarifying if the network introduces MEV to bitcoin (if at all)",
                            content: BitcoinSecuritySnippet.Template,
                        },
                        {
                            title: "Add a prop clarifying if the network contributes to the security budget",
                            content: BitcoinSecuritySnippet.Template,
                        },
                    ],
                },
                {
                    id: "technology",
                    title: "Technology",
                    content: [
                        {
                            title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                            content: TechnologySnippet.Template,
                        },
                        {
                            title: "Add a prop on significant tech components. If there is no prop, consider adding one to the prop.ts file. If the tech component is highly customizeable, add text for the content.",
                            content: "The tech is highly customizeable so I'm adding text to describe it."
                        },
                    ],
                },
                {
                    id: "usecases",
                    title: "Use Cases",
                    content: [
                        {
                            title: "Add a prop on significant use cases.",
                            content: UseCaseSnippet.Template,
                        },
                    ],
                },
                {
                    id: "knowledgebits",
                    title: "Knowledge Bits",
                    content: [
                        {
                            content: "Leave this as is. We'll add files when you submit the PR.",
                        },
                    ],
                },
            ],
};

export default template;
