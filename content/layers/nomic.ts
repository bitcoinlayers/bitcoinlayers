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
    ReviewSnippet,
    TechnologySnippet,
    UseCaseSnippet,
    RiskSummarySnippet,
    CustodyTitle,
} from "../props";
import { Reviewsnippet } from "../props-layers-reviews";
import { BitcoinSecuritySnippet } from "../props-layers-more-info";

const nomic: LayerProject = {
    type: Type.Layer,
    slug: "nomic",
    title: "Nomic",
    entityType: EntityType.PoSNetwork,
    entityCategory: EntityCategory.Sidesystem,
    custodyTitle: CustodyTitle.Distributed,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.High,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.UnderReview,
    ],
    btcLocked: NaN,
    nativeToken: "NOM",
    feeToken: "NOM",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.nomic.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.nomic.io",
        },
        {
            text: Site.Explorer,
            url: "https://bigdipper.live/nomic",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/nomic-io",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/nomicbtc",
        },
    ],
    description:
        "Nomic is a proof-of-stake blockchain focused on distributed BTC custody. Nomic validators collectively control a bitcoin wallet known as the Reserve Wallet, which users can deposit BTC to in order to receive nBTC, an asset issued on the Nomic blockchain that is backed 1:1 by the BTC deposits held in the Reserve Wallet.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: `${RiskSummarySnippet.RiskPOSPeg}`,
            },
            {
                title: RiskSummarySnippet.TitleAlternativeL1,
                content: RiskSummarySnippet.RiskSummaryAlternativeL1,
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
                    name: "Nomic nBTC",
                    infrastructureSlug: "nomic-nbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "BTC backing nBTC is managed by a group of 20 publicly known signers who participate as validators in the Nomic blockchain",
                    content: TokenSnippet.NomicNBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is made available via Nomic full nodes",
            content: ReviewSnippet.AltL1DA,
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Network is operated by validators in a proof-of-stake consensus protocol",
            content: ReviewSnippet.OperatorSidechainPOS,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Low,
            title: "Finality guarantees are provided by an alternative PoS Network. It receieves additional security benefits from checkpointing bitcoin",
            content: `${ReviewSnippet.CometBFTFinality}\n\n${Reviewsnippet.AnchorChainLongRange}`,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Nomic does not inherit security from bitcoin consensus participants",
                    content: BitcoinSecuritySnippet.CheckpointCometBFT,
                },
                {
                    title: "NOM token is used for network security",
                    content: BitcoinSecuritySnippet.AltTokenFees,
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content: BitcoinSecuritySnippet.AltNetworkMEV,
                },
                {
                    title: "Nomic pays fees for checkpoint transactions",
                    content: BitcoinSecuritySnippet.FeesPOSCheckpoint,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users need cooperation from 67% of the voting power on the Reserve Wallet to withdraw",
                    content:
                        "The Nomic BTC bridge is a proof of stake bridge. Users need cooperation from over 67% of the voting power on the Reserve Wallet to withdraw BTC from the bridge.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "The NOM token has restrictions",
                    content:
                        "Nomic’s native token, NOM, is currently unable to be sold or acquired in various markets. This means that the token currently has no market value and validators currently have no current financial incentive to secure BTC backing nBTC.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Reserve Wallet",
                    content:
                        "nBTC is backed by BTC held in a bitcoin wallet referred to as the Reserve Wallet. The Reserve Wallet is a P2WSH that is managed by the top 20 validators during a given period of time.",
                },
                {
                    title: "IBC-enabled transfers",
                    content: TechnologySnippet.IBC,
                },
                {
                    title: "Orga & Merk",
                    content: TechnologySnippet.OrgaMerk,
                },
                {
                    title: "Checkpointing mechanism",
                    content:
                        "The Nomic checkpointing mechanism manages Bitcoin reserves by consolidating deposits and disbursing pending withdrawals into periodic Bitcoin transactions. Each checkpoint updates the reserve script to reflect the latest signatory set, a group of validators dynamically chosen from the network. These transactions are collaboratively signed using a threshold multisignature scheme. Checkpoints also provide a way for light clients to verify the state of the Nomic chain and invalidate prior emergency disbursal mechanisms.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Connection to IBC-enabled blockchains",
                    content: UseCaseSnippet.IBCTransfers,
                },
                {
                    title: "Offchain nBTC transfers",
                    content: UseCaseSnippet.OffchainTransfers,
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "Nomic's node implementation is open-souce.",
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
                        "[Proof-of-Stake Bitcoin Sidechains](https://gist.github.com/mappum/da11e37f4e90891642a52621594d03f6)\n\n[CometBFT Consensus](https://docs.cometbft.com/main/spec/consensus/consensus).",
                },
            ],
        },
    ],
};

export default nomic;
