import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    EntityCategory,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    UseCaseSnippet,
    TechnologySnippet,
    RiskSummarySnippet,
    Notice,
    Categorization,
} from "../props";
import { Reviewsnippet } from "../props-layers-reviews";
import { BitcoinSecuritySnippet } from "../props-layers-more-info";

const bitcoinStaking: LayerProject = {
    type: Type.Layer,
    slug: "bitcoin-staking",
    title: "Bitcoin Staking",
    entityType: EntityType.Statechain,
    entityCategory: EntityCategory.BitcoinNative,
    live: LiveStatus.Mainnet,
    staking: true,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Low,
        RiskFactor.Low, 
        RiskFactor.Low,
        RiskFactor.Low,
    ],
    btcLocked: NaN,
    nativeToken: "-",
    feeToken: "BTC",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://babylonlabs.io/",
        },
        {
            text: Site.Docs,
            url: "https://docs.babylonlabs.io/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/babylonlabs-io/",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/babylonlabs_io",
        },
    ],
    description:
        "Bitcoin staking protocols enable bitcoin holders to participate in proof-of-stake consensus by temporarily locking their bitcoin while retaining self-custody. This creates economic security for PoS networks without requiring bridging or wrapping bitcoin.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: "",
            title: "",
            content: "",
            pegs: [
                {
                    name: "Native Bitcoin Staking",
                    infrastructureSlug: "babylonstaked-btc",
                    score: 0,
                    tier: RiskFactor.Low,
                    title: "Users retain custody of their bitcoin while participating in staking",
                    content: "Users maintain control of their private keys and can withdraw their bitcoin after the staking period expires. The protocol uses on-chain bitcoin transactions with specific spending conditions.",
                },
                {
                    name: "Lombard Staked BTC",
                    infrastructureSlug: "lombard-lbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "Users trust a federation to stake on their behalf",
                    content: Reviewsnippet.LombardLBTC,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Low,
            title: "Data is published on the Bitcoin blockchain",
            content: "Staking transactions and proofs are recorded directly on the Bitcoin blockchain.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Decentralized network of validators",
            content: "The security of bitcoin staking depends on the underlying proof-of-stake network's validator set. Users should evaluate the decentralization and economic incentives of the specific PoS network being secured by their staked bitcoin.",
        },
        {
            category: RiskCategory.SettlementAssurance,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Settlement depends on both Bitcoin and the PoS network",
            content: "While bitcoin staking transactions settle on Bitcoin, the economic security provided depends on the proper functioning of both Bitcoin and the proof-of-stake network. Slashing conditions and reward distribution rely on the PoS network's consensus mechanisms.",
        },
    ],
    sections: [
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "Decentralized Staking Protocol",
                    content: "Bitcoin staking operates through decentralized protocols that coordinate between bitcoin holders and proof-of-stake networks. There is no single operator, but rather a network of validators and staking service providers.",
                },
            ],
        },
    ],
};

export default bitcoinStaking;
