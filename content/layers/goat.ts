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

const fuel: LayerProject = {
    type: Type.Layer,
    slug: "fuel",
    title: "Fuel",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.High,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://fuel.network/",
        },
        {
            text: Site.Docs,
            url: "https://docs.fuel.network/docs/intro/what-is-fuel/",
        },
        {
            text: Site.Explorer,
            url: "https://app.fuel.network/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/FuelLabs/",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/fuel_network",
        },
    ],
    description: "Fuel is an Ethereum rollup that supports a variety of wrapped bitcoin assets on its chain. ",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
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
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.FireBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofs,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.High,
            title: "EigenDA satisfies the network's data availability requirements",
            content: Reviewsnippet.AltRollupAltDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "Users can propose their own transaction to be included in a sequencer, but cannot indepdendently submit withdrawal requests to the official bridge contract",
            content: `${Reviewsnippet.AltRollupSelfSequenceMain}`,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "The network's state is updated offchain",
            content: `${Reviewsnippet.AltRollupFinality}`
        },
    ],
    sections: [
        {
                    id: "additionalconsiderations",
                    title: "Additional Considerations",
                    content: [
                        {
                            title: "This project has undergone a partial review",
                            content: AdditionalSnippet.InitialReview,
                        },
                    ],
                },
                {
                    id: "knowledgebits",
                    title: "Knowledge Bits",
                    content: [
                        {
                            title: "The network has been reviewed by L2Beat",
                            content: KnowledgeBitSnippet.EthereumL2,
                        },
                    ],
                },
            ],
};

export default fuel;