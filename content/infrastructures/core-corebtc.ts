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

const corecorebtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "core-corebtc",
    title: "Core coreBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Core Chain",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
    riskSummary: [
        {
            title: PegRiskSummarySnippet.CustodianTitle,
            content: PegRiskSummarySnippet.Federation,
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Further sections to be reviewed",
            content: [
                {
                    content:
                        "Aspects related to BTC custody, key management, transaction signing, and redemptions have not been reviewed. We are currently reviewing these sections.",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Funds are custodied by a federated signer set, with a number of parties ensuring the honesty of the bridge",
            content:
                "Users trust various parties in maintaining the honesty of Core’s bridge with Bitcoin. Lockers are the party responsible for securing the bitcoin that backs coreBTC on Core Chain. These actors stake collateral, in the form of Core tokens, in order to participate as a Locker. In the event of maliciously moving bitcoin from the multi-sig, or being unable to fulfill withdrawals, Lockers would be slashed and lose the collateral they posted.\n\nOther parties in the bridge set up are responsible for monitoring the Locker’s activity and initiating the slashing process.",
        },
    ],
};

export default corecorebtc;
