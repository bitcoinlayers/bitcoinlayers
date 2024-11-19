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

const zulu: LayerProject = {
    type: Type.Layer,
    slug: "zulu",
    title: "Zulu",
    entityType: EntityType.TBD,
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
            url: "https://zulunetwork.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.zulunetwork.io",
        },
        {
            text: Site.Explorer,
            url: "https://testnet.zuluscan.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/zulu-network",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/zulu_network",
        },
    ],
    description:
        "Zulu Network is building towards becoming a Bitvimium on Bitcoin that enables developers to deploy dApps on both EVM (ZKSync ZK Stack L2) & UTXO layers (Customized ZKVM L3). Zulu network is working on a trust-minimized decentralized bridge program and will leverage a unique hybrid PoS / PoW mining mechanism.",
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
                    title: "Validity proofs will be used to ensure state correctness",
                    content:
                        "Each state transition must contain a validity proof that proves that execution was done correctly to a series of user transactions. If a proof includes an invalid state transition, then anyone can submit a fraud proof to challenge the state transition. Validity proofs will be sent through a decentralized network of verifiers economically secured through Babylon before submitted to the BitVM ZK verifier.",
                },
                {
                    title: "Zero knowledge cryptography is used",
                    content:
                        "State transitions are proven through cryptographic proofs known as zk proofs. If an implementation of the cryptography was done incorrectly, user funds can be at risk.",
                },
                {
                    title: "The chain will rely on a separate DA Layer for data availability",
                    content:
                        "Zulu's state can be reconstructed based on the data that is stored on a separate DA Layer. The chain's latest state root will be inscribed on the Bitcoin blockchain.",
                },
                {
                    title: "Zulu Network is working on a BitVM-style bridge program",
                    content:
                        "Zulu Network is currently working on a trust-minimized bridge design. In their design, users will withdraw their money through atomic swaps from entities referred to as liquidity providers (LPs) that has bridged assets into the rollup through utilizing a two-way peg BitVM implementation. LPs withdrawing BTC and/or Bitcoin assets from the rollup is not trustless. LPs must trust that 1 of any number of BitVM verifiers in the validating bridge are acting honestly to process their withdrawal.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Codebase & Opensource",
                    content:
                        "Part of the software is currently open-source and available and the rest will gradually be opensourced as well.",
                },
            ],
        },
    ],
};

export default zulu;
