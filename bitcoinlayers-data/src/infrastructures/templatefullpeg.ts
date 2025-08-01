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
} from "../props";

const templatefullpeg: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "template-fbtc",
    title: "Template FBTC",
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
        "This is where you write the description of the two-way peg.",
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "Description",
                    content: `${BTCWrapperTransparency.ProofofReservesYes}`,
                },
                {
                    title: "Description",
                    content: `${BTCWrapperTransparency.OperatorsDisclosedYes}\n\nWrite additional checks if needed.`,
                },
                {
                    title: "Description",
                    content: BTCWrapperTransparency.RedemptionsYes,
                },
                {
                    title: "Description",
                    content: BTCWrapperTransparency.ContractsYes,
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Description",
                    content: "Write about specific tech pieces here.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Description",
                    content: "Write about various considerations here.",
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
                        "Add markdown links here.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Description",
            content:
                "Add content here.",
        },
        {
            category: AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Description",
            content:
                "Add content here.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "Description",
            content:
                "Add content here.",
        },
        {
            category: AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "Description",
            content:
                "Add content here.",
        },
    ],
};

export default templatefullpeg;