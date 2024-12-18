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

const ethereum: LayerProject = {
    type: Type.Layer,
    slug: "ethereum",
    title: "Ethereum",
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
    feeToken: "ETH",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://ethereum.org/",
        },
        {
            text: Site.Docs,
            url: "https://ethereum.org/en/developers/docs/",
        },
        {
            text: Site.Explorer,
            url: "https://etherscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/ethereum",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/ethereum",
        },
    ],
    description:
        "Ethereum is an alternative blockchain that supports a number of wrapped BTC tokens. Ethereum is home to the EVM execution environment which supports more expressive smart contracts.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.NotApplicable,
            title: "",
            content: "",
            pegs: [
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "BTC users trust that tBTC will remain backed on Ethereum",
                    content:
                        "tBTC is backed by BTC secured by the Threshold Network. Signers in the Threshold Network participate in a randomized tECDSA scheme. Signers are selected to participate in securing the BTC in a randomized process.\n\nParticipation as a signer in the Threshold Network is currently permissioned.",
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Centralized custody model",
                    content:
                        "wBTC is minted on Ethereum via its official bridge on Ethereum. wBTC relies on a permissioned, centralized consortium of custodians to maintain BTC collateral.",
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Kraken KBTC",
                    infrastructureSlug: "kraken-kbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "PumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Solv SolvBTC.BBN",
                    infrastructureSlug: "solv-solvbtcbbn",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Solv SolvBTC.ENA",
                    infrastructureSlug: "solv-solvbtcena",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Lorenzo stBTC",
                    infrastructureSlug: "lorenzo-stbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Acorn aBTC",
                    infrastructureSlug: "acorn-abtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: "This two-way peg is under review",
                    content: "This two-way peg is under review",
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
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
            title: "Data is stored and made available by Ethereum full nodes",
            content:
                "The data for Ethereum state is made available by its full nodes. Anyone can run an Ethereum node and verify is state.\n\nWe are currently reviewing Ethereum's full node implementation",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Ethereum is operated by a decentralized validator set",
            content:
                "Blocks are built and proposed by a permissionless consensus network.\n\nWe are currently reviewing Ethereum's network operators",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Finality on Ethereum is guaranteed by a permissionless consensus mechanism",
            content:
                "Blocks are validated and finalized by a permissionless consensus network.\n\nWe are currently reviewing Ethereum's finality guarantees",
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

export default ethereum;
