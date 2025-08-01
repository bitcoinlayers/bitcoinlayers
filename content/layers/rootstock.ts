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
    RiskSection,
    ContentSection,
    RiskCategory,
    TokenSnippet,
    ReviewSnippet,
    BitcoinSecuritySnippet,
    RiskSummarySnippet,
    BitcoinLayer,
    CustodyTitle,
} from "../props";
import { Reviewsnippet } from "../props-layers-reviews";

const rootstock: LayerProject = {
    type: Type.Layer,
    slug: "rootstock",
    title: "Rootstock",
    entityType: EntityType.MergeMined,
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
        RiskFactor.Medium,
    ],
    btcLocked: 2757,
    nativeToken: "RBTC",
    feeToken: "RBTC",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://rootstock.io",
        },
        {
            text: Site.Docs,
            url: "https://dev.rootstock.io",
        },
        {
            text: Site.Explorer,
            url: "https://explorer.rootstock.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/rsksmart",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/rootstock_io",
        },
    ],
    description:
        "Rootstock is a merge-mined, EVM-compatible bitcoin sidechain. As a merge-mined network, bitcoin miners can concurrently mine for Rootstock's consensus. Rootstock has an enshrined cross-chain BTC asset called ''Smart Bitcoin'' (RBTC), which is pegged 1:1 to BTC and secured by a permissioned multisig federation.",
        riskSummary: [
            {
                title: RiskSummarySnippet.TitleCustodianPegs,
                content: `${RiskSummarySnippet.RiskFederationPeg}`,
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
                    name: "Rootstock RBTC",
                    infrastructureSlug: "rootstock-rbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "A federated multi-sig known as the Powpeg is used to custody users' BTC. More than 5, publicly-known signers participate in the Powpeg.",
                    content: Reviewsnippet.RootstockRBTC,
                },
                {
                    name: "Wrapped Rootstock rBTC",
                    infrastructureSlug: "rootstock-wrbtc",
                    score: 0,
                    tier: RiskFactor.High,
                    title: "Users deposit rBTC into the Wrapped Rootstock rBTC smart contract to mint wrBTC",
                    content: Reviewsnippet.WrappedRootstockRBTC,
                },
                {
                    name: "Solv SolvBTC",
                    infrastructureSlug: "solv-solvbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: Reviewsnippet.SolvBTC,
                },
                {
                    name: "Midas mBTC",
                    infrastructureSlug: "midas-mbtc",
                    score: 0,
                    tier: RiskFactor.VeryHigh,
                    title: Reviewsnippet.CustodianPeg,
                    content: `${Reviewsnippet.MidasMBTC} Users deposit rBTC, or wrBTC, into the mBTC smart contract on Rootstock to mint mBTC.`,
                },
            ],
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available via Rootstock nodes. Running a node is permissionless",
            content: `${ReviewSnippet.AltL1DAPOW}\n\nSo long as there is at least one non-pruned Rootstock full node online, users will be able to recover the full history and state of the Rootstock blockchain.`,
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Any Bitcoin miner can participate in merge-mining Rootstock",
            content: ReviewSnippet.OperatorSidechainMergeMine,
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Finality assurances are provided by Rootstock's consensus mechanism",
            content: ReviewSnippet.AltL1FinalityPOW,
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Rootstock enables Bitcoin miners to merge-mine Rootstock",
                    content: BitcoinSecuritySnippet.MergeMine,
                },
                {
                    title: "Another token is not used for network security",
                    content:
                        "The Full Block Reward is paid out in RBTC. Its distribution is : 20% to Rootstock Labs, 0.8% to Powpeg Federation, 79.2% to miners. Miners only receive rewards from transaction fees. Fees dedicated to the federation and miners serve to incentivize the continued security, whereas the 20% dedicated to Rootstock Labs is dedicated to the maintenance and development of the network.",
                },
                {
                    title: "No MEV introduced to Bitcoin, but Bitcoin miners can extract sidechain MEV",
                    content: BitcoinSecuritySnippet.MergeMineMEV,
                },
                {
                    title: "Merge-mining enables Bitcoin miners to earn more fees",
                    content: BitcoinSecuritySnippet.MergeMineFees,
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust permissioned operators to process their withdrawals",
                    content:
                        "Withdrawals are currently permissioned by a federated group of signers. Users must trust that when they deposit BTC into the Rootstock blockchain, the signers will not collude and steal their BTC. Learn more about the Powpeg multisig in the Knowledge Bits section.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Merge-mining",
                    content:
                        "Merged mining is a feature of Rootstock’s consensus mechanism that allows coupling between bitcoin and Rootstock. Essentially, BTC mining pools add references to Rootstock blocks in mining jobs sent to mining participants. Additionally, because the Rootstock mining algorithm is the same as bitcoin’s, there is little added energy expenditure. This sees bitcoin miners have an ability to additionally mine a percentage of Rootstock blocks. Miners are incentivized through earning a portion of transaction fees to mine Rootstock",
                },
                {
                    title: "REMASC",
                    content:
                        "In order to pay out miners, every block executes the Reward Manager Smart Contract (REMASC). The contract keeps record of the Reward Balance account, which exists to change value during new block production. When a block reaches maturity, the appropriate portions of rewards are distributed according to REMASC specified rules.",
                },
                {
                    title: "EVM-Compatible",
                    content:
                        "Rootstock uses a forked version of the Ethereum Virtual Machine (EVM), which it calls the Rootstock Virtual Machine (RVM). The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. Smart contracts created for the EVM are directly compatible with the RVM.",
                },
                {
                    title: "Faster block times",
                    content:
                        "Rootstock achieves block confirmation around every 30s.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content:
                        "Onchain applications are supported. Onchain applications including borrowing and lending protocols, onchain exchanges (commonly referred to as decentralized exchanges), and more. These applications are supported with more expressive smart contract environments.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content:
                        "All code related to the Rootstock project is open source.",
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
                        "[Rootstock developer portal](https://dev.rootstock.io/)\n[Rootstock Whitepaper](https://rootstock.io/static/a79b27d4889409602174df4710102056/RS-whitepaper.pdf)\n[Powpeg documentation](https://dev.rootstock.io/rsk/architecture/powpeg/)\n[Powpeg remote attestation](https://rootstock.io/powpeg/)",
                },
            ],
        },
    ],
};

export default rootstock;
