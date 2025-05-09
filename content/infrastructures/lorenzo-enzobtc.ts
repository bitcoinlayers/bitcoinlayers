import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
} from "../props";

const enzobtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "lorenzo-enzobtc",
    title: "Lorenzo enzoBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "-",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://lorenzo-protocol.xyz",
        },
        {
            text: Site.Docs,
            url: "https://docs.lorenzo-protocol.xyz",
        },
        {
            text: Site.Explorer,
            url: "https://scan.lorenzo-protocol.xyz",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/Lorenzo-Protocol",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/LorenzoProtocol",
        },
    ],
    description:
        "Lorenzo enzoBTC is a reserve token. Lorenzo also has a liquid staking token, stBTC.",
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
            title: "",
            content: "TODO",
        },
    ],
};

export default enzobtc;
