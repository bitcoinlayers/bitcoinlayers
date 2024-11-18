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

const botanix: LayerProject = {
    type: Type.Layer,
    slug: "botanix",
    title: "Botanix",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Testnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://www.botanixlabs.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.botanixlabs.xyz",
        },
        {
            text: Site.Explorer,
            url: "https://blockscout.botanixlabs.dev",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/botanix-labs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/BotanixLabs",
        },
    ],
    description:
        "Botanix is an EVM-compatible sidechain that will launch along side Bitcoin. They will be using Proof-of-Stake consensus and the Spiderchain to secure BTC multi-sigs for its two way peg.",
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
                    title: "Spiderchain will be used to decentralize two-way peg participants",
                    content:
                        "Botanix will be implementing a technology called the Spidechain to decentralize the participants in the two-way peg custodying users' bitcoin. The Spiderchain consists of a distributed network of multisigs, which are secured by a subset of stakers in the network.",
                },
                {
                    title: "Rust implementation of the EVM",
                    content:
                        "Botanix will be leveraging a fork of the rust implementation of the EVM known as Reth. Reth is built to be a highly modular, performant and user-friendly version of the EVM. Solidity (a common language in Ethereum) developers will be able to easily port of their applications to the Spiderchain EVM implementation.",
                },
                {
                    title: "Bitcoin Staking",
                    content:
                        "Botanix will be implement a version of Bitcoin staking to secure the network. Presumably, any Bitcoin holder with sufficient capital could paricipate in staking on Botanix and earn rewards for securing the network.",
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
                        "[Botanix Website](https://www.botanixlabs.xyz/en/home)\n[Interact with the Botanix testnet](https://docs.botanixlabs.xyz/botanix-labs/how-to-use-botanix/getting-started-with-botanix)\n[An introduction to the Spiderchain](https://blog.lopp.net/an-introduction-to-spiderchain/)",
                },
            ],
        },
    ],
};

export default botanix;
