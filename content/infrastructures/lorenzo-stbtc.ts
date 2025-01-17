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

const lorenzo: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "lorenzo-stbtc",
    title: "Lorenzo stBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
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
    description: "Lorenzo stBTC is a liquid staking token.",
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
            title: "Users trust Lorenzo as the staking agent who secures, and stakes, native BTC backing stBTC. Cobo, Ceffu, and ChainUp have also been mentioned to support the protocol",
            content:
                "Users trust Lorenzo, the operators of Lorenzo stBTC, to secure and stake native BTC that backs stBTC. It has also been stated in Lorenzo's [marketing materials](https://medium.com/@lorenzoprotocol/lorenzo-allies-with-cobo-ceffu-and-chainup-e0d824c4744d) that custodian providers Cobo, Ceffu, and Chainup are participating in Lorenzo's protocol as custody providers, but their documentation does not claim this.\n\nUsers trust Lorenzo's claims in their documentation are being executed in practice.\n\n[Source](https://docs.lorenzo-protocol.xyz/introduction/stbtc-issuance-and-settlement)",
        },
    ],
};

export default lorenzo;
