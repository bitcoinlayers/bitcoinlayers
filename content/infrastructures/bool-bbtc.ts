import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    PegRiskSummarySnippet,
} from "../props";

const boolbbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bool-bbtc",
    title: "Bool bBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Fractal, Bsquared Network, BitLayer, SatoshiVM",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bool.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.bool.network",
        },
        {
            text: Site.Explorer,
            url: "https://beta-testnet.boolscan.com",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/boolnetwork",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/bool_official",
        },
    ],
    description:
        "Bool Network is an infrastructure provider currently managing a wrapped BTC reserve asset, bBTC, for a number of Bitcoin scaling protocols. The Bitcoin wallets it manages are secured by an MPC Protocol.",
        riskSummary: [
            {
                title: PegRiskSummarySnippet.CustodianTitle,
                content: PegRiskSummarySnippet.Guardian,
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
            title: "Users trust the Bool Network and various layers to implement secure custody practices for BTC backing bBTC",
            content:
                "The Bool Network has not disclosed its custody mechanism for BTC backing bBTC across the various networks its deployed on. In its documentation, it references a custody mechanism that would see an approved entity be able to set up a 2-2 multisig between Bool and the entity.\n\nIt is possible this is the set up for bBTC custody across the chains its deployed on. In any case, users trust that Bool Network and the development teams behind specific networks have set up secure custody practices.\n\n[Source](https://docs.bool.network/interoperability-protocol/self-custody/channels)",
        },
    ],
};

export default boolbbtc;
