import BtcCustody from "@/components/layer/risk-analysis/layer-btc-custody";
import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    BTCWrapperTransparency,
    PegRiskSummarySnippet,
} from "../props";

const lombard: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "lombard-lbtc",
    title: "Lombard LBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "LBTC",
    purpose: Purpose.Staking,
    associatedLayers: "Ethereum",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.lombard.finance",
        },
        {
            text: Site.Docs,
            url: "https://docs.lombard.finance",
        },
        {
            text: Site.Explorer,
            url: "https://etherscan.io/token/0x8236a87084f8b84306f72007f36f2618a5634494",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/lombard-finance",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Lombard_Finance",
        },
    ],
    description:
        "Lombard offer a mechanism that enables users to deposit BTC and receive a wrapped version of BTC that represents BTC staked into the Babylon protocol.",
        riskSummary: [
            {
                title: PegRiskSummarySnippet.CustodianTitle,
                content: PegRiskSummarySnippet.Federation,
            },
        ],
        sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "The protocol provides a public proof-of-reserve",
                    content: "The project provides active proof-of-reserves. The proof-of-reserves can be seen [here](https://www.lombard.finance/por/). The proof-of-reserves is provided through an integration with [Redstone](https://docs.redstone.finance/docs/get-started/price-feeds/types-of-feeds/lombard/).\n\n⚠️ We have not reviewed the codebase behind this PoR integration.",
                },
                {
                    title: "External operators are disclosed",
                    content: `${BTCWrapperTransparency.OperatorsDisclosedYes}\n\nOperators undergo KYB checks and must be approved by members of the consortium network before entering the protocol.`,
                },
                {
                    title: "Redemptions enabled and documented",
                    content: BTCWrapperTransparency.RedemptionsYes,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: BTCWrapperTransparency.ContractsYes,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "User keys managed in CubeSigner",
                    content: "When users deposit their funds into the Lombard protocol, the security consortium creates a BTC address for their deposit. This address stores the funds backing their LTBC holdings on the destination chain.\n\nThe keys for this address are managed in a CubeSigner device. CubeSigner is an HSM service that stores users’ keys in secure hardware. It additionally restricts spending actions to staking-specific transactions.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Reserve assets",
                    content: "Lombard LBTC is primarily backed by native BTC.\n\nOn BNB Smart Chain, it is backed by BTCB.",
                },
                {
                    title: "Blacklist monitor on deposits",
                    content: "Lombard scans incoming deposit transactions against a sanctions database. If a user with a blacklisted address attempts to deposit funds into Lombard, their mint request will be declined.",
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
                        "[Lombard's documentation site](https://docs.gobob.xyz/docs/learn/security/privileged-roles)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Users trust a network of custodians in the Lombard protocol. Signers under review",
            content:
                "BTC backing Lombard LBTC is secured by a network of [custodians](https://etherscan.io/address/0xdad58DfA5c1a7a34419AFdBE1f0d610efeea95E4#readProxyContract) participating in Lombard’s security consortium. The security consortium participates in a CometBFT consensus protocol.\n\nAdding and removing validators from this consortium is handled by the current validator set within a given epoch. When a user deposits funds into the Lombard protocol, they are given a specific CubeSigner address to manage their deposits and staking transactions.\n\nWe are reviewing the signer set for the Lombard Security Consortium.",
        },
        {
            category: AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Issuing LBTC tokens requires consortium & bascule approval",
            content:
                "Issuing new LBTC tokens requires approval from the consortium validator set and Bascule bridge. If both of these parties approve a specific batch of mint requests, new LBTC tokens will be created.\n\nThe LBTC token contract owner can grant and revoke minting & burning permissions for actors who facilitate cross-chain transfers (e.g. Chainlink CCIP).",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Pause function on respective contracts",
            content:
                "Token contracts have a pause function implemented. The pauser role can pause transfers of LBTC unilaterally. The pauser role is held by a 2/8 [GnosisSafe](https://etherscan.io/address/0x32B8AE4eE1401E726aF0BC154D2165D0592584c4#readProxyContract).",
        },
        {
            category: AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "Contracts are upgradeable after 1 hour delay. A centralized party can upgrade contracts",
            content:
                "Contracts are upgradeable after a 1 hour delay. Contract upgrades can be proposed and executed by a ⅗ [GnosisSafe](https://etherscan.io/address/0x251a604E8E8f6906d60f8dedC5aAeb8CD38F4892#readProxyContract).",
        },
    ],
};

export default lombard;
