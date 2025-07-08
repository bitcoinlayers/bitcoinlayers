import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    PegRiskSummarySnippet,
} from "../props";

const icpckbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "internetcomputer-ckbtc",
    title: "ICP ckBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Internet Computer",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description:
        "ckBTC is a BTC-backed reserve asset that can be leveraged on the ICP network.",
        riskSummary: [
            {
                title: PegRiskSummarySnippet.CustodianTitle,
                content: `${PegRiskSummarySnippet.Federation} ICP governance elects the validators of the subnet repsonsible for managing the ckBTC two-way peg.`
            },
        ],
        sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to minting & burning, key management, transaction signing, and proof-of-reserves have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Funds are secured by signer set selected by ICP consensus",
            content:
                "Users who deposit funds into ckBTC trust a set of operators, who are elected via ICP governance, with the custody of their bitcoin. The operators of the ‘pzp6e…’ subnet manage the “ckBTC” smart contract module, which is responsible for minting, securing and burning bitcoin-backed tokens on the ICP sidechain.\n\nThis smart contract is a part of a subnet with 34 node operators. These operators have undergone a KYB process to ICP governance and are publicly known.",
        },
    ],
};

export default icpckbtc;
