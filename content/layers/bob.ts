import RiskSummary from "@/components/shared/risk-summary";
import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Notice,
    OtherIcons,
    Site,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    BitcoinSecuritySnippet,
    OtherSnippet,
    TechnologySnippet,
    UseCaseSnippet,
    DefinitionSnippet,
    RiskSummarySnippet,
    Categorization,
} from "../props";

import { Alertsnippet } from "../props-layers-more-info";
import { Reviewsnippet } from "../props-layers-reviews";

const bob: LayerProject = {
    type: Type.Layer,
    slug: "bob",
    title: "BOB",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.Medium,
    ],
    btcLocked: 974,
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    notice: Notice.OtherReasonBridge,
    links: [
        {
            text: Site.Website,
            url: "https://www.gobob.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.gobob.xyz",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/bob-collective/bob",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/build_on_bob",
        },
    ],
    description: `BOB prioritizes use cases for BTC-backed assets and is looking to derive more security from bitcoin over time. ${DefinitionSnippet.DefinitionAltRollup}`,
    riskSummary: [
        {
            title: RiskSummarySnippet.TitleCustodianPegs,
            content: RiskSummarySnippet.RiskSummaryCustodianPegs,
        },
        {
            title: RiskSummarySnippet.TitleBridgeUpgrade,
            content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
        },
        {
            title: RiskSummarySnippet.TitleAltDA,
            content: RiskSummarySnippet.RiskSummaryAltDANetwork,
        },
        {
            title: RiskSummarySnippet.TitleCentralizedSequencer,
            content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
        },
    ],
    categorization: [
        {
            title: Categorization.NoBridgeTitle,
            content: Categorization.NoBridgeSnippet,
        },
    ],
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
                    tier: RiskFactor.VeryHigh,
                    title: "BTC users trust that tBTC will remain backed on Ethereum, and that that the BOB bridge will not be maliciously upgraded",
                    content: `${TokenSnippet.ThresholdtBTC} tBTC is minted via its official bridge between BOB and Ethereum. This bridge is finalized by a Hybrid proving system using validity proofs and fraud proofs.\n\n${ReviewSnippet.CentralizedUpgradeableBridge}`,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "BTC users trust that wBTC will remain backed on Ethereum, and that that the BOB bridge will not be maliciously upgraded",
                    content: `${TokenSnippet.BitGowBTC} wBTC is minted via its official bridge between BOB and Ethereum. This bridge is finalized by a Hybrid proving system using validity proofs and fraud proofs.\n\n${ReviewSnippet.CentralizedUpgradeableBridge}`,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "BTC users trust that LBTC will remain backed on Ethereum, and that that the BOB bridge will not be maliciously upgraded",
                    content: `${TokenSnippet.LombardLBTC} LBTC is minted via its official bridge between BOB and Ethereum. This bridge is finalized by a Hybrid proving system using validity proofs and fraud proofs.\n\n${ReviewSnippet.CentralizedUpgradeableBridge}`,
                },
                {
                    name: "Fire FBTC",
                    infrastructureSlug: "firebitcoin-fbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.FireBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.PumpBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BedrockUniBTC} ${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.SolvBTC} ${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: `${TokenSnippet.xSolvBTC} ${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Xlink aBTC",
                    infrastructureSlug: "xlink-abtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianDerivative,
                    content: `${TokenSnippet.xlink} ${TokenSnippet.smartcontractreview}`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content: ReviewSnippet.EthereumRollupDA,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "BOB blocks are produced and proposed by a centralized operator, but forced inclusion to Ethereum L1 possible",
            content: ReviewSnippet.SelfSequenceMainAlt,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Bob's state transitions finalize by updating its state based on data posted to Ethereum",
            content: ReviewSnippet.AltL1Finality,
            alert: Alertsnippet.AltRollupNotice,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "BOB does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "ETH token used to pay fees",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "BOB does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Proposer role centralized and permissioned. BTC users trust network operators to include their withdrawal requests in a block. Asset redemption varies dependent on the asset issuer",
                    content: OtherSnippet.WithdrawalsAltRollup,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Ethereum Virtual Machine",
                    content: TechnologySnippet.EVM,
                },
                {
                    title: "OP Kailua",
                    content: "BOB leverages a hybrid proving system that leverages validity proofs and fraud proofs to finalize bridge programs on Ethereum. The system leverages a priveleged proposer, known as the Vanguard, that has the first right to submit a state update to BOB smart contracts on Ethereum. After this proposal is submitted, it finalizes after three days. Anyone is able to challenge this proposal by submitting a conflicting state update proposal. In the event of a challenge proposal, the Vanguard or the challenger submit a validity proof that is verified by an Ethereum smart contract. Only a correct proposal can be validated by the verifier contract, so only the correct proposal is accepted to advance the state. The publisher of an incorrect state update is slahed the 0.5 ETH collateral they posted.",
                    alert: {
                        type: "info" as const,
                        title: "Learn more about OP Kailua",
                        content: "L2Beat has a great overview of the hybrid proving system used by BOB.",
                        linkText: "L2Beat",
                        linkUrl: "https://l2beat.com/scaling/projects/bob#state-validation",
                        expandable: true,
                    },
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content: UseCaseSnippet.OnchainApps,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Under review",
                    content:
                        "We are reviewing if BOB's node software is open-source.",
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
                        "[This document outlines the privileged roles who play a role in managing various components of the BOB chain](https://docs.gobob.xyz/docs/learn/security/privileged-roles)\n[A risk review of the OP Mainnet chain on Ethereum, which has similar trust assumptions as the BOB chain as BOB is built on the OP Stack](https://l2beat.com/scaling/projects/optimism)\n[A blog covering R&D areas related to Bitcoin security on BOB.](https://mirror.xyz/0xE4dF449bDC1ec8f7688F68F7E839f1370617Ac73/UvQH9D3RyVcozOlz091gLKnbX8aqn8goFVYtHVmin-w)\n[BOB's TVL breakdown, including total BTC locked.](https://l2beat.com/scaling/projects/bob/tvl-breakdown)",
                },
            ],
        },
    ],
};

export default bob;
