import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskCategory,
} from "../props";

const bevm: LayerProject = {
    type: Type.Layer,
    slug: "bevm",
    title: "BEVM",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.UnderReview,
        RiskFactor.Medium,
        RiskFactor.High,
        RiskFactor.High,
    ],
    btcLocked: 80,
    nativeToken: "BEVM",
    feeToken: "WBTC",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.bevm.io",
        },
        {
            text: Site.Docs,
            url: "https://documents.bevm.io",
        },
        {
            text: Site.Explorer,
            url: "https://scan.bevm.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/btclayer2/BEVM",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/BTCLayer2",
        },
    ],
    description:
        "BEVM is an EVM-compatible sidechain built on substrate. On the BEVM chain, the BTC is held in custody by a federated signer set.",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.UnderReview,
            title: "Users trust a federation with the custody of their BTC. Signers under review",
            content:
                "On BEVM's official bridge, BTC is locked in a bitcoin address controlled by up to 15 trustees. These trustees custody the BTC that backs wBTC on BEVM.\n\nTrustees are selected by BEVM's validator set. Users trust that the trustees will not steal their BTC.\n\n🔬We are currently reviewing a the signers for the BEVM two-way peg.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is made available via validator nodes and additionally stored on archive nodes. Anyone can run BEVM node",
            content:
                "BEVM full nodes are responsible for satisfying BEVM's data availability requirement. Archive nodes are additionally responsible for preserving the historical blockchain data. Users can run their own archive node and access the data at any time by utilizing the node as an RPC. Public endpoints deploy archival nodes to facilitate blockchain data to the users. As long as there is one archive node online, users can recover the full history of the BEVM blockchain.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.High,
            title: "BEVM network is operated by permissioned validators",
            content:
                "On a BEVM chain, a block is produced every 6s and is finalized by achieving consensus among permissioned validators. Only the permissioned validators have the rights to produce the block and include the transactions in the block. Consequently, users trust the permissioned validators that they will include their transactions in the block without censoring them.\n\nBEVM governance, which is done by delegating tokens to validators, is currently not live. This sees a permissioned validator set operate the network.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.High,
            title: "Transactions on BEVM chain are finalized offchain by its permissioned validators",
            content:
                "Permissioned validators on BEVM chain verify and include the transactions in BEVM block. Validators participate in a proof of stake consensus mechanism and see blocks produced, and finalized, every six seconds.\n\n2/3 of the validators need to agree on a state transition prior to it being finalized. This process sees no guarantees provided via Bitcoin consensus.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "No security inherited from bitcoin consensus",
                    content:
                        "BEVM currently has no relationship with bitcoin consensus participants.",
                },
                {
                    title: "No base layer MEV, but users trust validators to not reorder their transactions",
                    content:
                        "Base layer MEV does not exist. Users, on the BEVM chain, trust that the validators don’t reorder their transactions. Additionally, Validator elections take place every 1 hour.",
                },
                {
                    title: "The BEVM token is used to incentivize network participants",
                    content:
                        "BEVM token has been issued. BEVM tokens will potentially be used to incentivize the active and honest validators.",
                },
                {
                    title: "The BEVM network does not pay fees to Bitcoin miners",
                    content: "BEVM does not pay fees to Bitcoin miners.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust the trustees on BEVM chain to process their withdrawals",
                    content:
                        "Upon the initiation of a withdrawal transaction on the BEVM chain, trustees will be notified of the withdrawal request, sign the withdrawal, and if the number of signatures reaches the multi-signature requirement, the transaction will be broadcasted to the bitcoin network.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "BFT PoS consensus network",
                    content:
                        "In BEVM, validators participate in a hybrid consensus mechanism. Their consensus mechanism separates block production mechanism from block finalization. For block authoring, BABE consensus is run between the validators and it selects the block producers. In parallel, validators execute GRANDPA BFT consensus to finalize the block. Once more than ⅔ of validators agree on the new block, the chain containing a new block is finalized.",
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
                    content: "BEVM’s node software is open source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[BEVM Website](https://www.bevm.io/)",
                },
            ],
        },
    ],
};

export default bevm;
