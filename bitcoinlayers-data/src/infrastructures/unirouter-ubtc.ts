import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    BTCWrapperTransparency,
    PegRiskSummarySnippet,
} from "../props";

const unirouter: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "unirouter-ubtc",
    title: "UniRouter uBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Bsquared, Core",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://unirouter.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.unirouter.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/unirouter",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.bsquared.network/address/0x796e4D53067FF374B89b2Ac101ce0c1f72ccaAc2",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/UniRouterBTC",
        },
    ],
    riskSummary: [
        {
            title: PegRiskSummarySnippet.UnkownSignersTitle,
            content: PegRiskSummarySnippet.UnkownSigners,
        },
    ],
    description:
        "uBTC is a liquid staking token that is operated by the UniRouter team. It is live on Bsquared Network.",
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "Proof-of-Reserves",
                    content:
                        "The project has not published a Proof-of-Reserves. Users trust that the custodians holding native BTC backing the derivative asset to have ample reserves.",
                },
                {
                    title: "External operators disclosed",
                    content: BTCWrapperTransparency.OperatorsDisclosedNo,
                },
                {
                    title: "Redemptions enabled and documented",
                    content: BTCWrapperTransparency.RedemptionsYesNoDocs,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: BTCWrapperTransparency.ContractsNo,
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust UniRouter with their custody practices. UniRouter has not disclosed who manages the BTC backing uBTC.",
            content:
                "Users trust that the UniRouter team has set up secure custody practices and has BTC reserves backing uBTC. UniRouter has not disclosed who secures the BTC backing uBTC.",
        },
        {
            category: AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Contracts are not verified",
            content:
                "There’s no documentation on how the project manages supply issuance.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Contracts are not verified",
            content:
                "We cannot currently verify if the token has a blacklist or pause function.",
        },
        {
            category: AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "Contracts are not verified",
            content:
                "We cannot currently verify who controls relevant contracts and upgrade mechanisms.",
        },
    ],
};

export default unirouter;
