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

const bitlayerwbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bitlayer-wbtc",
    title: "Bitlayer WBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Bitlayer",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description:
        "Bitlayer wBTC is the gas token for the Bitlayer sidechain. It is backed by BTC stored in a MPC protocol.",
        riskSummary: [
            {
                title: PegRiskSummarySnippet.CustodianTitle,
                content: PegRiskSummarySnippet.Guardian,
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
            title: "Users trust a federation of signers with the custody of BTC backing wBTC",
            content:
                "Bitlayer's current BTC bridge is a federated two-way peg with institutional signers. Bitlayer is working with multiple MPC custody platforms.\n\nUsers do not custody bitcoin assets backing tokens on Bitlayer.\n\nUsers trust Bitlayer's claims in their documentation are being executed in practice.\n\n[Source](https://docs.bitlayer.org/docs/Learn/BitlayerNetwork/Bridges) ",
        },
    ],
};

export default bitlayerwbtc;
