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

const zkbitcoin: LayerProject = {
    type: Type.Layer,
    slug: "zkbitcoin",
    title: "zkBitcoin",
    entityType: EntityType.MPCProtocol,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://github.com/sigma0-xyz/zkbitcoin",
        },
        {
            text: Site.Docs,
            url: "https://github.com/sigma0-xyz/zkbitcoin/tree/main/docs",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/sigma0-xyz/zkbitcoin",
        },
    ],
    description:
        "zkBitcoin enables the use of zero-knowledge applications on Bitcoin. User funds would be secured by a federated MPC protocol in their proposed design.",
    riskAnalysis: [
        {
            category: RiskCategory.UnilateralExits,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
    ],
    sections: [
        {
            id: "description",
            title: "Description",
            content: [
                {
                    content:
                        "zkBitcoin enables the use of zero-knowledge applications on Bitcoin. User funds would be secured by a federated MPC protocol in their proposed design.",
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
                        "[zkBitcoin whitepaper](https://github.com/sigma0-xyz/zkbitcoin/blob/main/whitepaper.pdf)\n[zkBitcoin developer documentation](https://github.com/sigma0-xyz/zkbitcoin/blob/main/DEVELOPER.md)",
                },
            ],
        },
    ],
};

export default zkbitcoin;
