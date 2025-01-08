import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const stackssbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "stacks-sbtc",
    title: "Stacks sBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Stacks, Aptos",
    bitcoinOnly: false,
    links: [],
    description:
        "Stacks sBTC is a BTC-backed reserve asset that is native to the Stacks blockchain. BTC backing sBTC is secured by an 10/14 federation.",
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
            title: "Users trust a federation of 14 signers with securing BTC that backs sBTC",
            content:
                "Stacks sBTC implements a federation of 14 publicly known signers to secure the BTC backing sBTC. These signers are publicly known institutions.\n\nWithdrawals are not currently enabled for sBTC. If withdrawals are not activated, users will not be able to redeem BTC for sBTC.\n\nUsers can find the sBTC signer set [here](https://www.stacks.co/sbtc).",
        },
    ],
};

export default stackssbtc;
