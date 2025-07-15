import Risk from "@/components/layer/layerTableItemRisk";
import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Notice,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    UseCaseSnippet,
    TechnologySnippet,
    BitcoinSecuritySnippet,
    AdditionalSnippet,
    KnowledgeBitSnippet,
    Categorization,
    AlertSnippet,
} from "../props";
import {
    Reviewsnippet,
} from "../props-layers-reviews";
import { RiskSummarySnippet } from "../props-layers-intro";
import { Alertsnippet } from "../props-layers-more-info";
import { tokenToString } from "typescript";
import { Rubik_Vinyl } from "next/font/google";
import InfrastructureReviewModal from "@/components/infrastructure-review-modal";

const hemi: LayerProject = {
    type: Type.Layer,
    slug: "hemi",
    title: "Hemi",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Integrated,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
    ],
    btcLocked: 0,
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    notice: Notice.UnderReview,
    links: [
        {
            text: Site.Website,
            url: "https://hemi.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.hemi.xyz",
        },
        {
            text: Site.Explorer,
            url: "https://testnet.explorer.hemi.xyz",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/hemilabs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/hemi_xyz",
        },
    ],
    description:
        "Hemi is a blockchain that is building compatibility with bitcoin and Ethereum. It is built on the OP Stack and has an official bridge program hosted on Ethereum. It additionally has an official bridge program on bitcoin securing BTC backing HemiBTC.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs,
            },
            {
                title: RiskSummarySnippet.TitleAltDA,
                content: RiskSummarySnippet.RiskSummaryAltDANetwork,
            },
            {
                title: RiskSummarySnippet.TitleCentralizedSequencer,
                content: RiskSummarySnippet.RiskSummaryCentralizedSequencer,
            },
            {
                title: RiskSummarySnippet.TitleBridgeUpgrade,
                content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
            },
            {
                title: RiskSummarySnippet.TitleNoProofs,
                content: RiskSummarySnippet.RiskSummaryNoProofs,
            },
        ],
        categorization: [
            {
                title: "The project anchors its state to bitcoin, but does not meet our criteria to be a sidesystem",
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
                    name: "Hemi hemiBTC",
                    infrastructureSlug: "hemi-hemibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "The signers securing BTC backing HemiBTC have not been officially disclosed",
                    content: TokenSnippet.HemiBTC,
                    alert: Alertsnippet.BitcoinBridgeNoSigners,
                },
                {
                    name: "BitGo wBTC",
                    infrastructureSlug: "bitgo-wbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BitGowBTC}\n\nBitGo wBTC is minted on Hemi through its official bridge program on Ethereum. This bridge program does not have a functional proof system. The bridge is also instantly upgadable by a 3/8 multisig.`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofsPlusUpgrade,
                },
                {
                    name: "Lorenzo enzoBTC",
                    infrastructureSlug: "lorenzo-enzobtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.enzoBTC} enzoBTC is minted directly on Hemi through a centralized admin.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "UniRouter uBTC",
                    infrastructureSlug: "unirouter-ubtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.UniRouterBTC} UniRouter uBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BedrockUniBTC} Bedrock uniBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Babypie mBTC",
                    infrastructureSlug: "babypie-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.babypie} Babypie mBTC is minted on Hemi via an implementation of the LayerZero bridge on Ethereum. The implementation's admin is a 3/7 multisig.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Pump pumpBTC",
                    infrastructureSlug: "pump-pumpbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.PumpBTC} Pump pumpBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Merlin MBTC",
                    infrastructureSlug: "merlin-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.MerlinMBTC} Pump pumpBTC is minted on Hemi through a third-party provider, [Free Tech](https://app.free.tech/?token=M-BTC).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Threshold tBTC",
                    infrastructureSlug: "threshold-tbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.ThresholdtBTC}\n\nThreshold tBTC is minted on Hemi through its official bridge program on Ethereum. This bridge program does not have a functional proof system. The bridge is also instantly upgadable by a 3/8 multisig.`,
                    alert: Alertsnippet.AltRollupAltTokenNoFraudProofsPlusUpgrade,
                },
                {
                    name: "Obelisk oBTC",
                    infrastructureSlug: "obelisk-obtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.ObeliskoBTC} enzoBTC is minted directly on Hemi through a centralized admin.`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Bedrock brBTC",
                    infrastructureSlug: "bedrock-brbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${TokenSnippet.BedrockbrBTC} Bedrock brBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
                },
                {
                    name: "Kiki iBTC",
                    infrastructureSlug: "kiki-ibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: `${Reviewsnippet.KikiIBTC} Kiki iBTC is minted on Hemi through a third-party provider, [Free Tech](https://tunnel.free.tech/).`,
                    alert: Alertsnippet.WrapperCentralized,
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
            tier: RiskFactor.VeryHigh,
            title: "Hemi blocks are produced by a centralized sequencer",
            content: Reviewsnippet.AltRollupSelfSequenceNone,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Hemi state updates are finalized offchain. The network anchors its state to bitcoin",
            content: `${Reviewsnippet.AltRollupFinality}\n\nAfter this state is generated, nodes participating in Hemi's Proof-of-Proof consensus submit the latest state root to bitcoin.`,
            alert: AlertSnippet.ProofOfProofConsensus,
        },
    ],
    manualContracts: [
        {
            title: "Address securing BTC backing HemiBTC",
            address: "16NuSCxDVCAXbKs9GRbjbHXbwGXu3tnPSo",
            subtitle: "Specific address securing BTC backing HemiBTC. It is unknown if this address is managed by a single entity or multiple entities via a threshold signature scheme.",
            explorerUrl: "https://mempool.space/address/16NuSCxDVCAXbKs9GRbjbHXbwGXu3tnPSo"
        },
        {
            title: "Bridge contract escrowing wBTC & tBTC",
            address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            subtitle: "This bridge contract does not have a functional proof system and can be upgraded by a 3/8 multisig.",
            explorerUrl: "https://etherscan.io/address/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599"
        },
        {
            title: "Bridge contract escrowing mBTC",
            address: "0xc4995816B5421b88f85b5AbfBe24fd218D56c676",
            subtitle: "This bridge contract can be upgraded by a 3/7 multisig.",
            explorerUrl: "https://etherscan.io/address/0xc4995816B5421b88f85b5AbfBe24fd218D56c676#code"
        },
    ],
    sections: [
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "No public dashboards on PoP miners available",
                    content: "The project has not published mainnet dashboards related to active PoP miners. It is unknown how many miners are posting state roots to bitcoin.",
                },
            ],
        },
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Hemi checkpoints its state to bitcoin",
                    content: BitcoinSecuritySnippet.Checkpoint,
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
                    title: "Hemi does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
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
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Proof-of-Proof consensus",
                    content: "Hemi's Proof-of-Proof (PoP) consensus is a bitcoin anchoring mechanism. After Hemi full nodes compute a new state root, PoP nodes publish this state root to bitcoin. After this state root is published, a Bitcoin Finality Governor queries bitcoin, finds the appended state root, and considers Hemi's blocks final."
                },
                {
                    title: "The network is EVM-compatible",
                    content: `${TechnologySnippet.EVM} The network's specific node implementation additionally executes a bitcoin light client.`,
                },
            ],
        },
        {
            id: "knowledgebits",
            title: "Knowledge Bits",
            content: [
                {
                    content: `${KnowledgeBitSnippet.EthereumL2}`,
                },
            ],
        },
    ],
};

export default hemi;
