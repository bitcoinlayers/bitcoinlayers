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

const bitfinity: LayerProject = {
    type: Type.Layer,
    slug: "bitfinity",
    title: "Bitfinity",
    entityType: EntityType.Alt,
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
    nativeToken: "-",
    feeToken: "BTF",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://bitfinity.network",
        },
        {
            text: Site.Docs,
            url: "https://docs.bitfinity.network",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.mainnet.bitfinity.network/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/bitfinity-network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/bitfinitynet",
        },
    ],
    description: "Bitfinity is an EVM-based sidechain.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "ICP ckBTC",
                    infrastructureSlug: "icp-ckbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "Leverages ICP's ckBTC two-way peg with bitcoin. We are reviewing if there are any changes for the Bitfinity integration",
                    content:
                        "Bitfinity's two-wag peg leverages ICP's ckBTC two-way peg to bring BTC onto the sidechain. BTC backing ckBTC is secured by validators selected by ICP's governance mechanism. This implementation is under review.",
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "We are reviewing what satisfies Bitfinity's data availability requirement",
            content:
                "We are reviewing the operators responsible for data availability and storage for the Bitfinity sidechain.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "We are reviewing Bitfinity's block production mechanism",
            content:
                "We are reviewing the operators of the Bitfinity sidechain.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "We are reviewing Bitfinity's finality guarantees",
            content:
                "We are reviewing how transactions are finalized on Bitfinity.",
        },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content:
                        "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default bitfinity;
