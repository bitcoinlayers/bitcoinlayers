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

const badgerebtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "badger-ebtc",
    title: "Badger eBTC",
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
    description: "Badger eBTC is a BTC-denominated asset that enables users to borrow BTC against Lido stETH. Lido stETH is a derivative of ETH, Ethereum's native currency.",
    riskSummary: [
        {
            title: PegRiskSummarySnippet.CustodianTitle,
            content: PegRiskSummarySnippet.Collateralized,
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
                title: "Users deposit stETH into a smart contract to receive eBTC",
                content:
                    `To obtain eBTC, users must deposit Lido stETH, an ETH-denominated asset, as collateral to borrow eBTC. If a users's collateralization ratio falls below a certain threshold, they can be liquidated. Collateralization ratios are based on the ETH/BTC price pair.\n\n[Source](https://docs.ebtc.finance/ebtc/protocol-mechanics/liquidations)`
            },
        ],
};

export default badgerebtc;