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
import { Alertsnippet } from "../props-layers-more-info";

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
                    content: "The project provides active proof-of-reserves. The proof-of-reserves can be seen [here](https://www.lombard.finance/por/). The proof-of-reserves is provided through an integration with [Redstone](https://docs.redstone.finance/docs/get-started/price-feeds/types-of-feeds/lombard/).",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "User keys managed in CubeSigner",
                    content: "When users deposit their funds into the Lombard protocol, the Lombard Ledger creates a BTC address for their deposit. Funds are secured in this address until they are staked into the Babylon protocol.\n\nThe keys for this address are managed in a CubeSigner device. CubeSigner is an HSM service that stores users’ keys in secure hardware. CubeSigner restricts spending actions to staking-specific transactions executed by the validators in the Lombard Ledger.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
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
            title: "Users trust a network of custodians in the Lombard protocol",
            content:
                "Staked BTC that backs Lombard LBTC is staked by a federation of [custodians](https://etherscan.io/address/0xdad58DfA5c1a7a34419AFdBE1f0d610efeea95E4#readProxyContract) participating in the Lombard Ledger. Signers in the Lombard Ledger participate in a CometBFT consensus protocol.\n\nAdding and removing validators from this consortium is handled by the current validator set within a given epoch. When a user deposits funds into the Lombard protocol, they are given a specific CubeSigner address to manage their deposits and staking transactions.",
            alert: Alertsnippet.NotOpenSource,
        },
        {
            category: AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Issuing LBTC tokens requires consortium & bascule approval",
            content:
                "Issuing new LBTC tokens requires approval from the consortium validator set and Bascule bridge. If both of these parties approve a specific batch of mint requests, new LBTC tokens will be created.\n\nThe LBTC token contract owner can grant and revoke minting & burning permissions for actors who facilitate cross-chain transfers (e.g. Chainlink CCIP).",
        },
    ],
};

export default lombard;
