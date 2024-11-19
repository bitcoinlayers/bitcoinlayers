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

const citrea: LayerProject = {
    type: Type.Layer,
    slug: "citrea",
    title: "Citrea",
    entityType: EntityType.Rollup,
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
            url: "https://citrea.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.citrea.xyz",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.devnet.citrea.xyz",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/chainwayxyz/citrea",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/citrea_xyz",
        },
    ],
    description:
        "Citrea is building a rollup on top of Bitcoin. They are using implementations of BitVM for their Bitcoin two-way peg and SNARK verifier. They are using zkSTARKs to prove rollup state transitions and will use Bitcoin for data availability. Citrea is being developed by Chainway Labs.",
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
            id: "disclaimer",
            title: "Disclaimer",
            content: [
                {
                    title: "😇 This page did not undergo a formal review process",
                    content:
                        "This page provides a high level assessment for a proposed rollup design on testnet. This page should not be considered a risk assessment.",
                },
            ],
        },
        {
            id: "proposedtechnologies",
            title: "Proposed Technologies",
            content: [
                {
                    title: "Clementine",
                    content:
                        "Clementine is a proposed bridge (two-way peg) design that is based on BitVM2. The design sees a fixed operator and verifier set maintain the integrity of its two-way peg.\n\nMultiple operators at the same time manage the withdrawals and deposits from the bridge program. In the event that one of the operators is dishonest, verifiers (who are from the federated verifier set) can initiate a challenge transaction and dispute the malicious operator's withdrawal transactions.\n\nOperators in this set front liquidity for user withdrawals and are able to redeem funds used for processed withdawals from the bridge program after a specific time period.\n\nClementime improves the trust assumption of bridge programs from trusting a majority of operators to trusting a single operator for its liveness and single verifier for its safety.",
                },
                {
                    title: "Multiple Virtual Machines",
                    content:
                        "Citrea will be initially implementing its own zkEVM, a fully EVM-compatible execution environment, utilizing RISC Zero zkVM. It's long-term roadmap sees it support multiple virtual machines, providing developers different options to build their apps",
                },
                {
                    title: "Data availability on Bitcoin",
                    content:
                        "Citrea's sequencer will post state differences to Bitcoin. These state differences will include the rollup's latest state root, and enough transaction data to recreate the rollup from genesis.\n\nThis means Citrea's data availability requirement is satisfied by the Bitcoin L1, allowing any Bitcoin full node to validate Citrea's state.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Long-term research",
                    content:
                        "The Citrea team is researching decentralized sequencing protocols, integrations with the Lightning Network and volition models.",
                },
                {
                    title: "Atomic Swaps will be used onboard the majority of users",
                    content:
                        "Due to fixed deposits and withdrawals, most users will likely deposit funds into Citrea by way of a service provider facilitating atomic swaps.",
                },
            ],
        },
        {
            id: "testnetinformation",
            title: "Testnet Information",
            content: [
                {
                    title: "Devnet is live. Developers can interact with Citrea by following the links in our Knowledge Bits section.",
                    content: ".",
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
                        "[Build on Citrea's devnet](https://docs.citrea.xyz/developer-documentation/deployment-guide)\n[Citrea website and blog](https://citrea.xyz)\n[Citrea documentation site](https://docs.citrea.xyz/)\n[Code for Citrea's proposed two-way peg, Clementine](https://github.com/chainwayxyz/clementine)\n[Code for Citrea's proposed BitVM ZK-Verifier](https://github.com/chainwayxyz/bitvm-zk-verifier)\n[Run a Citrea sequencer and full node locally](https://github.com/chainwayxyz/citrea/tree/nightly/docs)",
                },
            ],
        },
    ],
};

export default citrea;
