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

const satoshivm: LayerProject = {
    type: Type.Layer,
    slug: "satoshivm",
    title: "SatoshiVM",
    entityType: EntityType.PermissionedChain,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Unverified,
        RiskFactor.Unverified,
        RiskFactor.Unverified,
        RiskFactor.Unverified,
    ],
    btcLocked: 0,
    nativeToken: "SAVM",
    feeToken: "WBTC",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://satoshivm.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.satoshivm.io",
        },
        {
            text: Site.Explorer,
            url: "https://svmscan.io",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/SatoshiVM",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/SatoshiVM",
        },
    ],
    description:
        "SatoshiVM is a permissioned chain built on the Frontier client software. Its native token is an ERC-20 on Ethereum",
    riskAnalysis: [
        {
            category: RiskCategory.BtcCustody,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "Two-way peg is managed by a third party",
            content:
                "SatoshiVM's bitcoin wallet for bridge deposits is managed by the Bool Network. Both the Bool Network and SatoshiVM bridge UIs deposit funds into the same Bitcoin address. The bitcoin bridge contract on SatoshiVM is upgradeable by a single EOA account.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "A permissioned validator set satisfies the data availability requirement",
            content:
                "SatoshiVM's validating nodes additionally satisfy the data availability requirement. The node software is not open source, so users are unable to run a full node and validate the state of SatoshiVM.",
        },
        {
            category: RiskCategory.LivenessReorgResistance,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "Network managed by a permissioned set of operators",
            content:
                "SatoshiVM's explorer currently shows 4 active validators proposing blocks. The identities of these validators is unknown.",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "Settlement assurances are provided by SatoshiVM consensus",
            content:
                "Finality is guaranteed by SatoshiVM's validator set. It does not have live fraud proofs that can be submitted on Bitcoin.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "SatoshiVM inherits no security from Bitcoin",
                    content:
                        "SatoshiVM has no relationship with the Bitcoin mainchain.",
                },
                {
                    title: "SatoshiVM does not leak MEV to Bitcoin",
                    content:
                        "SatoshiVM does not leak MEV to the Bitcoin mainchain. Users trust validators to not reorder their transactions to extract MEV.",
                },
                {
                    title: "An alternative token is not currently needed for network security",
                    content:
                        "Gas fees are paid in wrapped BTC. SatoshiVM has released a token on Ethereum that currently plays no role in the network.",
                },
                {
                    title: "Bridge deposit and withdrawals pay fees to miners",
                    content:
                        "Transaction fees are paid to Bitcoin miners when users deposit and withdraw funds from the BounceBit bridge. Block rewards on BounceBit are distributed to BounceBit validators.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Mainnet node software not open-source",
            content: [
                {
                    title: "📝 Project is currently ineligible for review",
                    content:
                        "The mainnet node software is not open-source. Users trust the information within SatoshiVM's documentation, as they cannot run a node and verify the network’s current state and its participants.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Users trust a third party bridge provider to process withdrawals",
                    content:
                        "Users trust the Bool Network to release their funds on the Bitcoin mainchain for withdrawals.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "SatoshiVM is currently operated by a closed validator set",
                    content:
                        "SatoshiVM's explorer shows it is operated by a small number of validators.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is not open-source",
                    content:
                        "BounceBit’s mainnet node implementation is not currently open-source.",
                },
            ],
        },
    ],
};

export default satoshivm;
