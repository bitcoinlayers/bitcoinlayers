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
    KnowledgeBitSnippet,
    AdditionalSnippet,
    Alertsnippet,
    TechnologySnippet,
    UseCaseSnippet,
} from "../props-layers-more-info";
import { RiskSummarySnippet } from "../props-layers-intro";
const template: LayerProject = {
    type: Type.Layer,
    slug: "ink",
    title: "Ink",
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
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://inkonchain.com/",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.inkonchain.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/inkonchain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/inkonchain",
        },
    ],
    description: "Ink is an Ethereum rollup operated by the Kraken exchange. It supports a variety of wrapped bitcoin assets on its chain including Kraken kBTC.",
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleSystemUpgrade,
            content: RiskSummarySnippet.RiskSummarySecurityCouncil,
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
                    name: "Kraken kBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.KrakenKBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Ethereum satisifes the data availability requirement",
            content: Reviewsnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "In the event of censorship or liveness failures, users can propose their own exit",
            content: `${Reviewsnippet.AltRollupSelfSequenceMain}\n\n${Reviewsnippet.AltRollupSelfProposeMain}`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Network state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        }, 
    ],
    manualContracts: [
        {
            title: "Kraken kBTC Contract",
            address: "0x73E0C0d45E048D25Fc26Fa3159b0aA04BfA4Db98",
            subtitle: "Kraken kBTC bridge & token contract",
            explorerUrl: "https://explorer.inkonchain.com/address/0x73E0C0d45E048D25Fc26Fa3159b0aA04BfA4Db98"
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

export default template;