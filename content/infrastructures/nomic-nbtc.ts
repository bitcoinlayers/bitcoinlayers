import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const nomicnbtc: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "nomic-nbtc",
    title: "Nomic nBTC",
    entityType: EntityType.ReserveAsset,
    live: LiveStatus.Mainnet,
    staking: false,
    liquidStaking: false,
    bridge: true,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "-",
    purpose: Purpose.General,
    associatedLayers: "Nomic, Osmosis, and other IBC-connected chains",
    bitcoinOnly: false,
    links: [],
    description: "nBTC is the native token for the Nomic network. Nomic is a proof-of-stake blockchain prioritizing distributed BTC custody",
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
            title: "BTC backing nBTC managed by a group of 20 publicly known signers who participate as validators in the Nomic blockchain",
            content:
                "Users deposit BTC into a Reserve Wallet to receive nBTC on Nomic. The Reserve Wallet is a Bitcoin L1 multisig wallet managed by the Nomic signatory set. The Nomic signatory is made up of the top 20 Nomic validators measured by weighted stake.\n\nBecoming a signatory requires staking NOM tokens. Disbursing funds from the reserve wallet requires a 90% threshold, weighted by voting power through NOM tokens.",
        },
    ],
};

export default nomicnbtc;
