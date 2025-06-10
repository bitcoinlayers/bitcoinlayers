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
    TechnologySnippet,
    UseCaseSnippet,
    RiskSummarySnippet,
} from "../props";

const merlin: LayerProject = {
    type: Type.Layer,
    slug: "merlin",
    title: "Merlin",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Sidesystem,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Critical,
        RiskFactor.Critical,
        RiskFactor.Critical,
    ],
    btcLocked: 9303,
    nativeToken: "MERL",
    feeToken: "WBTC",
    notice: Notice.Reorg,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://merlinchain.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.merlinchain.io",
        },
        {
            text: Site.Explorer,
            url: "https://scan.merlinchain.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/MerlinLayer2",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/MerlinLayer2",
        },
    ],
    description:
        "Merlin is an implementation of Polygon CDK chain. It likely is running its rollup chain on top of a permissioned fork of the EVM.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleUpgrade,
                content: RiskSummarySnippet.RiskSummaryImmediateUpgrade
            },
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs
            },
            {
                title: RiskSummarySnippet.TitleAltDA,
                content: RiskSummarySnippet.RiskSummaryAltDACommittee,
            },
            {
                title: RiskSummarySnippet.TitleCentralizedSequencer,
                content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
            }
        ],
        riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Merlin MBTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users deposit funds into a MPC wallet managed by a custodian",
                    content: TokenSnippet.MerlinMBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BedrockUniBTC,
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.LorenzostBTC,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "MBTC on Merlin backs SolvBTC on Merlin",
                    content: TokenSnippet.SolvBTC,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: TokenSnippet.xSolvBTC,
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.UnderReview,
                    content: TokenSnippet.SolvBTCENA,
                },
                {
                    name: "Merlin wBTC",
                    infrastructureSlug: "merlin-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.MerlinwBTC}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.xlink}${TokenSnippet.smartcontractreview}.`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "State data is stored and made available by a permissioned network. The identities of its members are under review",
            content: ReviewSnippet.DAFederation,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Blocks are produced by a centralized sequencer and forced inclusion mechanism is unverified",
            content:
                "Merlin chain blocks are currently produced by a centralized sequencer. It posts state updates to its parent chain which is a private network. We cannot review its trust assumptions. Users should remain cautious when interacting with this chain.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Sequencer batches and validity proofs posted to a permissioned network",
            content:
                "Merlin's parent chain is a private network. We cannot verify smart contracts related to Merlin. Users should remain cautious when interacting with this chain.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Merlin currently inherits no security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "MERL token is live, but not currently used to pay transaction fees",
                    content: BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin, but a centralized sequencer can reorder transactions",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Merlin does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "notice",
            title: "🚨 Project is not a sidesystem",
            content: [
                {
                    title: "This project will be moved to the Alternative category",
                    content:
                        "Projects that do not meet our requirements to be considered a sidesystem will be moved to the Alternative category. They have until June 30th to implement the technical requirements to be considered a sidesystem.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Merlin's L1 contracts cannot be verified",
                    content:
                        "Merlin Chain contracts are all currently upgradeable by an admin. The contracts it has listed on its CDKValidium can not be verified on its respective L1 blockchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "EVM-compatible",
                    content: TechnologySnippet.EVM,
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Merlin Chain website](https://merlinchain.io/)\n[Merlin documentation](https://docs.merlinchain.io/merlin-docs/resources/merlin-contracts)\n[Merlin Chain's Github](https://github.com/MerlinLayer2/)",
                },
            ],
        },
    ],
};

export default merlin;
