import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    TokenSnippet,
    PegRiskSummarySnippet,
} from "../props";

const sidesbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "side-sbtc",
    title: "Side sBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Side",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description:
        "Side sBTC is a BTC-backed asset that lives on the Side protocol. It can be used across various applications and is also one of the network's gas tokens.",
        riskSummary: [
            {
                title: PegRiskSummarySnippet.CustodianTitle,
                content: PegRiskSummarySnippet.PoS,
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
            title: "21 Side Chain validators are signers securing BTC backing sBTC",
            content:
                "BTC backing Side sBTC is secured by a subset of its validators participating in a threshold signature scheme. 21 validators are given the right to participate as a signer in this set up.\n\nThese signers are [publicly disclosed entities](https://docs.side.one/overview/side-introduction/sbtc-and-side-bridge/signer-set).",
        },
    ],
};

export default sidesbtc;
