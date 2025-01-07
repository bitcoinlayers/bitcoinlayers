import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const liquidlbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "liquid-lbtc",
    title: "Liquid L-BTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Liquid",
    bitcoinOnly: false,
    links: [],
    description: "Liquid LBTC is the native token for the Liquid sidechain. The BTC backing LBTC is secured by an 11/15 federation.",
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
            title: "Users trust a federation with custody of their BTC",
            content:
                "The BTC that backs L-BTC is held in a 11-15 multi-sig wallet where 11 (⅔ + 1) of the signers would need to be compromised in order to steal the BTC. Signers additionally operate HSM hardware to secure private keys used for signing.\n\nNot all of the signers of this federation are publicly known.\n\nUsers trust Liquid to have a signer set that is globally distributed.\n\n[source](https://docs.liquid.net/docs/technical-overview)",
        },
    ],
};

export default liquidlbtc;
