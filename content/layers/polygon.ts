import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
} from "../props";

const polygon: LayerProject = {
    type: Type.Layer,
    slug: "polygon",
    title: "Polygon",
    entityType: EntityType.Sidechain,
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
    feeToken: "POL",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://polygon.technology/",
        },
        {
            text: Site.Docs,
            url: "https://docs.polygon.technology/",
        },
        {
            text: Site.Explorer,
            url: "https://polygonscan.com/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/0xpolygon",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/0xPolygon",
        },
    ],
    description:
        "Polygon is an alternative proof-of-stake blockchain that supports a number of wrapped BTC tokens. It offers an EVM-compatible execution environment which supports more expressive smart contracts.",
        riskAnalysis: [
            {
                category: RiskCategory.BtcCustody,
                score: 0,
                tier: RiskFactor.NotApplicable,
                title: "",
                content: "",
                pegs: [
                    {
                        name: "BitGo wBTC",
                        infrastructureSlug: "bitgo-wbtc",
                        score: 0,
                        tier: RiskFactor.VeryHigh,
                        title: "wBTC is managed by a centralized consortium of companies. We are analyzing if wBTC is natively minted on Polygon or if is bridged from Ethereum.",
                        content:
                            "wBTC on Polygon is backed by a centralized consortium of three companies. These entities are responsible for custodying BTC that backs wBTC on its various networks. Users trust these entities to not collude and steal the funds backing wBTC.",
                    },
                    {
                        name: "Threshold tBTC",
                        infrastructureSlug: "threshold-tbtc",
                        score: 0,
                        tier: RiskFactor.UnderReview,
                        title: "Users trust the Threshold Network to keep tBTC backed",
                        content:
                            "tBTC's peg with bitcoin is managed by the Threshold Network, a distributed, but permissioned, two-way peg.\n\nWe are currently reviewing if tBTC is minted on Polygon natively or minted on Ethereum and then bridged to Polygon via a custom bridge contract.",
                    },
                    {
                        name: "Avalanche BTCb-Polygon",
                        infrastructureSlug: "avalanche-btcb",
                        score: 0,
                        tier: RiskFactor.UnderReview,
                        title: "This two-way peg is under review",
                        content: "This two-way peg is under review",
                    },
                ],
            },
            {
                category: RiskCategory.DataAvailability,
                score: 0,
                tier: RiskFactor.UnderReview,
                title: "Data is stored and made available by Polygon full nodes",
                content:
                    "The data for Polygon's state is made available by its full nodes. Anyone can run an Polygon node and verify is state.\n\nWe are currently reviewing Polygon's full node implementation",
            },
            {
                category: RiskCategory.NetworkOperators,
                score: 0,
                tier: RiskFactor.UnderReview,
                title: "Polygon is operated by a distributed validator set",
                content:
                    "Blocks are built and proposed by a distributed consensus network.\n\nWe are currently reviewing Polygon's network operators",
            },
            {
                category: RiskCategory.FinalityGuarantees,
                score: 0,
                tier: RiskFactor.UnderReview,
                title: "We are currently reviewing Polygon's finality guarantees",
                content:
                "Blocks are validated and finalized by a distributed consensus network.\n\nWe are currently reviewing Polygon's finality guarantees",
            },
    ],
    sections: [
        {
            id: "underreview",
            title: "Further sections under review",
            content: [
                {
                    content: "Aspects related to bitcoin security, relevant technologies, and some two-way pegs have not been reviewed.\n\nThey will be reviewed by our team soon.",
                },
            ],
        },
    ],
};

export default polygon;