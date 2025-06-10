import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const babylonbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "babylonstaked-btc",
    title: "Babylon Staked BTC",
    entityType: EntityType.StakedBTC,
    live: LiveStatus.Mainnet,
    staking: true,
    liquidStaking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Babylon Genesis",
    notice: undefined,
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://babylonchain.io",
        },
        {
            text: Site.Docs,
            url: "https://docs.babylonchain.io",
        },
        {
            text: Site.Explorer,
            url: "https://babylon.explorers.guru/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/babylonchain",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/babylonlabs_io",
        },
    ],
    description:
        "Babylon Staked BTC is native BTC locked in L1 staking scripts.",
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
            title: "Babylon Staked BTC is native BTC locked in L1 staking scripts",
                    content:
                        "Babylon Staked BTC is native BTC locked in a L1 staking script. Users lock their funds in the script with the help of a covenant emulator committee. Users can withdrawal their funds from the script at any time with the help of the covenant emulator committee. If the committee is offline, users can spend their funds after a timelock expires.\n\nStaked BTC comes with additional trust assumptions such as slashing conditions. We are reviewing these trust assumptions related to Babylon.",
            },
        ],
    };

export default babylonbtc;
