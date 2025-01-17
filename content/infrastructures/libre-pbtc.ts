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

const librepbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "libre-pbtc",
    title: "Libre pBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Libre",
    notice: undefined,
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
            title: "Libre's bridge relies on a third party provider. Signers are permissioned nodes from the pNetwork",
            content:
                "BTC users who deposit funds onto Libre do so via the pNetwork bridge. A limited group of signers operate the bridge.\n\n⚠️ The pNetwork bridge has historically seen two exploits occur. One of those exploits involved BTC-backed tokens.\n\npBTC deposits are no longer being accepted. Users have to manually withdraw funds.\n\n[Source](https://docs.libre.org/libre-docs/cross-chain-interoperability/bitcoin-mainnet)",
        },
    ],
};

export default librepbtc;
