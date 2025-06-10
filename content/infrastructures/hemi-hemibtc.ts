import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    AssessmentCategory,
    PegRiskSummarySnippet,
} from "../props";

const hemihemibtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "hemi-hemibtc",
    title: "Hemi BTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [RiskFactor.High, RiskFactor.High],
    nativeToken: "None/Ticker",
    purpose: Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "",
        },
        {
            text: Site.Docs,
            url: "",
        },
        {
            text: Site.Explorer,
            url: "",
        },
        {
            text: Site.GitHub,
            url: "",
        },
        {
            text: Site.Twitter,
            url: "",
        },
    ],
    description: "HemiBTC is a wrapped BTC asset native to the Hemi blockchain, an Ethereum rollup.",
    riskSummary: [
        {
            title: PegRiskSummarySnippet.CustodianTitle,
            content: PegRiskSummarySnippet.Federation,
        },
        {
            title: PegRiskSummarySnippet.UnkownSignersTitle,
            content: PegRiskSummarySnippet.UnkownSigners,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
            {
                category: AssessmentCategory.AssetCustody,
                score: 0,
                tier: "",
                title: "BTC backing HemiBTC is secured by a federated multisig",
                content:
                    "Hemi leverages a federated multisig to secure BTC backing HemiBTC. The signers participating in this federation have not been officially disclosed.",
            },
        ],
};

export default hemihemibtc;