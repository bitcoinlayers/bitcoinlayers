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
import { RiskSummarySnippet } from "../props-layers-intro";
import { Reviewsnippet } from "../props-layers-reviews";
import { Alertsnippet, 
    UseCaseSnippet,
    TechnologySnippet,
    KnowledgeBitSnippet,
    AdditionalSnippet,
    BitcoinSecuritySnippet,
} from "../props-layers-more-info";

const template: LayerProject = {
    type: Type.Layer,
    slug: "linea",
    title: "Linea",
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
    btcLocked: 0,
    nativeToken: "TKN",
    feeToken: "ETH",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://linea.build/",
        },
        {
            text: Site.Docs,
            url: "https://docs.linea.build/",
        },
        {
            text: Site.Explorer,
            url: "https://lineascan.build/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/Consensys?q=linea&type=all&language=&sort=stargazers",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/LineaBuild",
        },
    ],
    description: "Linea is an Ethereum rollup developed at Consensys. It supports a variety of wrapped bitcoin assets on its chain including BitGo wBTC, SolvBTC, and Merlin M-BTC.",
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
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.BitGowBTC}`,
                    alert: Alertsnippet.AltRollupAltTokenProofsUpgrade,
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
                    name: "SolvBTC-M",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvBTCdotSolv} This derivative of Solv is bridged to Linea from Merlin.`,
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
                {
                    name: "SolvBTCb",
                    infrastructureSlug: "solv-solvbtcb",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.SolvsolvbtcB}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Merlin M-BTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.MerlinMBTC}`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "xLink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.KrakenKBTC}`,
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
            tier: RiskFactor.VeryHigh,
            title: "In the event of censorship or liveness failures, users cannot exit the system",
            content: `${Reviewsnippet.AltRollupSelfSequenceNone}\n\n${Reviewsnippet.AltRollupSelfProposeNone}`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Linea's state transitions finalize by updating its state based on data posted to Ethereum",
            content: `${Reviewsnippet.AltRollupFinality}`,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    manualContracts: [
        {
            title: "Linea Escrow Contract",
            address: "0x051F1D88f0aF5763fB888eC4378b4D8B29ea3319",
            subtitle: "This escrow contract secures wBTC on Ethereum backing wBTC on Lina.",
            explorerUrl: "https://etherscan.io/address/0x051F1D88f0aF5763fB888eC4378b4D8B29ea3319"
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