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

const hedgehog: LayerProject = {
    type: Type.Layer,
    slug: "hedgehog",
    title: "Hedgehog",
    entityType: EntityType.StateChannel,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "BTC",
    feeToken: "BTC",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://supertestnet.github.io/hedgehog",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/supertestnet/hedgehog",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/super_testnet",
        },
    ],
    description:
        "Hedgehog is a payment channel protocol, similar to Lightning, but counterparties within the channel do not need to be online to receive funds. The payment experience is similar to that of Ecash or Fedimint, but with users retaining full custody of the coins and having optimistic settlement assurances. To make a payment, you propose a payment (a state change) and send this proposed payment to your counterparty via a preferred communication channel. When your party comes online, they can accept that payment and the state of the channel will consequently update.",
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
            id: "technology",
            title: "Proposed Technologies",
            content: [
                {
                    title: "Payment channels",
                    content:
                        "Payment channels are 2-2 multi-signature addresses that enable two counterparties to lock funds into an address, and process an unlimited number of payments between each other. Payments are considered final when the parties withdraw their funds back onchain and close their channel. Creating and managing one or more payment channels lis how a user interacts with Lightning.",
                },
                {
                    title: "Revocable connectors",
                    content:
                        "Revocable connectors are built on components called revocable scripts and connector outputs. Revocable scripts allow either party to revoke a transaction after a certain period. Connector outputs allow you to construct a pre-signed transaction spending a separate UTXO alongside the connector output, allowing the transaction to be invalidated by spending the connector output by itself.",
                },
            ],
        },
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content:
                        "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nInformation on how to submit information on a project can be found in the Knowledge Bits section.",
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
                        "[Instructions on self-submitting a project.](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md)\n[Hedgehog Github](https://github.com/supertestnet/hedgehog)\n[Bitcoin Magazine explainer on Hedgehog](https://bitcoinmagazine.com/technical/super-testnet-introduces-hedgehog-a-protocol-for-asynchronous-layer-2-bitcoin-payments)",
                },
            ],
        },
    ],
};

export default hedgehog;
