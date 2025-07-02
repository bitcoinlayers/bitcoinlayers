import { tokenToString } from "typescript";
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
    TechnologySnippet,
    UseCaseSnippet,
    BitcoinSecuritySnippet,
    ReviewSnippet,
    RiskSummarySnippet,
    Categorization,
    CustodyTitle,
} from "../props";

const corn: LayerProject = {
    type: Type.Layer,
    slug: "corn",
    title: "Corn",
    entityType: EntityType.AltRollup,
    entityCategory: EntityCategory.Alt,
    custodyTitle: CustodyTitle.Centralized,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.VeryHigh,
        RiskFactor.VeryHigh,
        RiskFactor.Medium,
        RiskFactor.VeryHigh,
    ],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "BTCN",
    bitcoinOnly: false,
    notice: Notice.OtherReasonBridge,
    links: [
        {
            text: Site.Website,
            url: "https://usecorn.com/",
        },
        {
            text: Site.Docs,
            url: "https://docs.usecorn.com/docs/developers/introduction",
        },
        {
            text: Site.Explorer,
            url: "https://cornscan.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/usecorn",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/use_corn",
        },
    ],
    description:
        "Corn is a permissioned rollup that leverages a derivative of BTC as its gas token. It is built on the Arbitrum Orbit stack and uses the AnyTrust protocol for data availability. Its native token, BTCN, is an ERC-20 that lives on Ethereum.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: RiskSummarySnippet.RiskSummaryCustodianPegs,
            },
            {
                title: RiskSummarySnippet.TitleUpgrade,
                content: RiskSummarySnippet.RiskSummaryImmediateUpgrade,
            },
            {
                title: RiskSummarySnippet.TitleAltDA,
                content: RiskSummarySnippet.RiskSummaryAltDACommittee,
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
                    name: "Bitcorn BTCN",
                    infrastructureSlug: "corn-btcn",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "BTCN is backed by BTC-derivative assets and is managed by a 2/4 multisig",
                    content: TokenSnippet.BTCN,
                },
                {
                    name: "Lombard LBTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.UnderReview,
                    title: TokenSnippet.FederationPeg,
                    content: `${TokenSnippet.LombardLBTC}\n\n${TokenSnippet.smartcontractreview}`,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.SolvBTCdotSolv,
                },
                {
                    name: "Solv xSolvBTC",
                    infrastructureSlug: "solv-xsolvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: "Users trust custodians and various onchain contracts. We have not reviewed the contract implementations for this chain",
                    content: TokenSnippet.xSolvBTC,
                },
                {
                    name: "Bedrock uniBTC",
                    infrastructureSlug: "bedrock-unibtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: TokenSnippet.CustodianPeg,
                    content: TokenSnippet.BedrockUniBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Data is stored and made available by a permissioned federation",
            content: `${ReviewSnippet.AltDADAC}\n\nThere is one member of the data availability committee with a signing threshold of 1-1.`
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "The Corn network is operated and validated by permissioned entities. Users can self-propose their own state transitions if the operators go offline",
            content: `${ReviewSnippet.SelfProposeMainAlt}\n\nCurrently, producing blocks and state root proposals are done by two centralized entities. The proposer must stake 0.1 ETH to post a state root.`
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.VeryHigh,
            title: "Corn state transitions are submitted and validated by a centralized proposer",
            content: ReviewSnippet.FinalityAltRollupCentralizedProposer,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Corn does not inherit any security from Bitcoin",
                    content: BitcoinSecuritySnippet.NoSecurity,
                },
                {
                    title: "BTCN token used to pay fees",
                    content: BitcoinSecuritySnippet.WrappedTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.CentralizedSequencerMEV,
                },
                {
                    title: "Corn does not contribute to the security budget",
                    content: BitcoinSecuritySnippet.NoSecurityBudget,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Proposer role centralized and permissioned. BTC users must withdraw to Ethereum L1 before withdrawing to Bitcoin",
                    content:
                        "To withdraw from Corn, a user must send BTCN to the Wrapped Bitcorn OFT contract on Corn. This contract then communicates with a swap contract on Ethereum which releases a BTC-derivative asset from the vault contract back to the user.",
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
                    title: "Arbitrum Stylus",
                    content: TechnologySnippet.ArbitrumStylus,
                },
                {
                    title: "Fault Proofs",
                    content: `${TechnologySnippet.FaultProofs}\n\nOn Corn, there is only one validator who is able to submit state root proposals and contest said proposals. This means the network gains no security benefits from having fault proofs enabled.`
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
            id: "contracts",
            title: "Contracts & Permissions",
            content: [
                {
                    title: "Corn is supported by various Ethereum smart contracts",
                    content:
                        "Below are a few of the contracts that support Corn with their respective owners:\n\nSequencerInbox: [Proxy.](https://etherscan.io/address/0x4ad144ea249a98f77e0b78104d3b6eb6cd3a76da#readProxyContract) [Implementation (Upgradeable).](https://etherscan.io/address/0x46faf6838bbf770986f073348d41881d5e54fb0f#code) [Admin.](https://etherscan.io/address/0xee9924c5fd94601c80ff8010f577c9f7f3c20b84)\n\nERC20Bridge: [Proxy.](https://etherscan.io/address/0x7E31f112d340a4D0cB0e4bD82f2853089d1bF10C#readProxyContract) [Implementation (Upgradeable).](https://etherscan.io/address/0xd7fd189f1652378f32da3db7926e51a7b0344797#code) [Admin.](https://etherscan.io/address/0xee9924c5fd94601c80ff8010f577c9f7f3c20b84)\n\nUpgradeExecutor: [Proxy.](https://etherscan.io/address/0xd67c6b5f5a75807478efa05472c8dfd3f64d0bc7) [Implementation (Upgradeable).](https://etherscan.io/address/0x011d8f10fbc20c14b453768253cdff7eb5b96917#code) [Admin.](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6?a=0x1c2c9efa3693572d008fb55253f7deaaa7f3e6b1#readProxyContract)\n\nBTCN Contract: [Proxy.](https://etherscan.io/token/0x386e7a3a0c0919c9d53c3b04ff67e73ff9e45fb6#code) [Implementation (Upgradeable).](https://etherscan.io/address/0xd67c6b5f5a75807478efa05472c8dfd3f64d0bc7#code) [Authority.](https://etherscan.io/address/0x515C7d8Fcb950f8b030ac08C994b37b4b8F3F7B5#code)",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Some contracts related to Corn are source viewable",
                    content:
                        "We are reviewing if Corn has an open-source node implementation.",
                },
            ],
        },
    ],
};

export default corn;
