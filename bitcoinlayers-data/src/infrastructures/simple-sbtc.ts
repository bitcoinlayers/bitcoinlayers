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

const simplesbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "simple-sbtc",
    title: "Simple sBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Fractal",
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Simple sBTC is a two-way peg managed by the Unisat team. It is used to secure BTC backing sBTC on the Fractal network.",
    riskSummary: [
        {
            title: PegRiskSummarySnippet.CustodianTitle,
            content: PegRiskSummarySnippet.OneCustodian,
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
                    title: "A 3/5 multisig secures the BTC backing Simple sBTC",
                    content:
                        "BTC backing Simple sBTC is secured by a [3/5 multisig](https://mempool.space/address/bc1ps0qa22q30rrp4584gz4teqkchn76wakzaq6mlhsv6sg36e0fl83sss2vxa). Information on who the signers are for this multisig and their signing mechanisms is unavailable.",
                },
            ],
};

export default simplesbtc;
