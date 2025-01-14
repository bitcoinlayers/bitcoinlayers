import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const merlinmbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "merlin-mbtc",
    title: "Merlin M-BTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Merlin",
    bitcoinOnly: false,
    links: [],
    description: "Under review.",
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
            title: "Users trust centralized parties with the custody of BTC backing mBTC",
            content:
                "When users deposit funds into Merlin, they deposit funds into a MPC wallet managed by Cobo, a institutional custodian. Information on how many signers participate in this MPC scheme is not available. Merlin has stated that more players are being added into this custody scheme.\n\n[Source](https://www.cobo.com/post/cobo-bitmap-tech-establish-merlin-chain-bitcoin-layer-2-network-with-mpc-custody-technology)",
        },
    ],
};

export default merlinmbtc;
