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

const moneta: LayerProject = {
    type: Type.Layer,
    slug: "moneta",
    title: "Moneta (Demo)",
    entityType: EntityType.Rollup,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Medium,
        RiskFactor.Low,
        RiskFactor.High,
        RiskFactor.Medium,
    ],
    btcLocked: 3555,
    nativeToken: "MTA",
    feeToken: "mBTC",
    bitcoinOnly: false,
    links: [],
    description:
        "Moneta is a rollup that uses Bitcoin for data availability and consensus. It has an optimistically verified validating bridge via BitVM. It leverages STARK proofs to prove state transitions. In the event of an invalid state transition, verifiers in the BitVM bridge can submit a fraud proof to show that the state transition was invalid.",
    riskAnalysis: [
        {
            category: RiskCategory.UnilateralExits,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Withdrawals rely on 1-N trust assumptions.",
            content:
                "Withdrawing BTC and/or Bitcoin assets from the rollup is not trustless. Users must trust that 1 of any number of BitVM verifiers in the validating bridge are acting honestly to process their withdrawal.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "State Differences are stored on Bitcoin.",
            content:
                "All of the data needed to reconstruct the rollup's state is stored on the Bitcoin Layer 1.",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.High,
            title: "Users can self-sequencer, but not self-propose.",
            content:
                "If Moneta's sequencer, which is centralized, goes down, users are submit their transaction to the L1 for ordering. In the event of censorship, Moneta's prover is required to include transactions sequenced by the L1 in their state transition, or proof generation will fail. Regarding proposing state changes, only the whitelisted proposers can publish state roots on L1, so in the event of failure the withdrawals are frozen.",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Settlement is done offchain.",
            content:
                "Optimistically proven zkSTARK proofs ensure state correctness. In the event of an invalid state transition, actors watching the chain can submit Fraud Proofs to prove that the state transition is incorrect.",
        },
    ],
    sections: [
        {
            id: "description",
            title: "Description",
            content: [
                {
                    content:
                        "Moneta is a rollup that uses Bitcoin for data availability and consensus. It has an optimistically verified validating bridge via BitVM. It leverages STARK proofs to prove state transitions. In the event of an invalid state transition, verifiers in the BitVM bridge can submit a fraud proof to show that the state transition was invalid.",
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "The rollup relies on Bitcoin for data availability and consensus",
                    content:
                        "Moneta's state can be reconstructed based on the data that is stored on the Bitcoin blockchain.",
                },
                {
                    title: "Bitcoin Hashpower is used in securing Moneta",
                    content:
                        "Bitcoin hashpower used to mine blocks containing transactions that include Moneta's state transitions.",
                },
                {
                    title: "Moneta does not have an alternative token",
                    content: "Moneta uses a BTC voucher to operate the rollup.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Validity proofs ensure state correctness",
                    content:
                        "Each state transition must contain a validity proof that proves that execution was done correctly to a series of user transactions. If a proof includes an invalid state transition, then a verifier in the BitVM set up can submit a fraud proof to challenge the state transition.",
                },
                {
                    title: "Zero knowledge STARK cryptography is used",
                    content:
                        "State transitions are proven through cryptographic proofs known as zkSTARKs. If an implementation of the cryptography was done incorrectly, user funds can be at risk. STARKs do not require a trusted set up.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "The system has a centralized operator",
                    content:
                        "Block production is managed by one entity. Users trust this entity to act in the best interests of the system.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Withdrawals rely on 1-N trust assumptions",
                    content:
                        "In the event that the systems are operators are acting honestly, users trust that 1 party in the BitVM bridge set up is acting honestly and will permit their withdrawals from the L2.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "The node software is open-source and available",
                    content:
                        "The node software is open-source, and its source code can be found here. Users can run a node with their own hardware, or through a cloud service provider.",
                },
            ],
        },
    ],
};

export default moneta;
