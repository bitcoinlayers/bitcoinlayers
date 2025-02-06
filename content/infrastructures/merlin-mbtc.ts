import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    WrapperSnippet,
    BTCWrapperTransparency,
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
    notice: undefined,
    bitcoinOnly: false,
    links: [],
    description: "Merlin MBTC is a BTC-backed asset that primarily lives on Merlin Chain.",
    sections: [
        {
                    id: "protocoltransparency",
                    title: "Protocol Transparency",
                    content: [
                        {
                            title: "The protocol provides a public proof-of-reserve",
                            content: BTCWrapperTransparency.ProofofReservesNo,
                        },
                        {
                            title: "External operators are not disclosed",
                            content: BTCWrapperTransparency.OperatorsDisclosedNo,
                        },
                        {
                            title: "Redemptions enabled",
                            content: BTCWrapperTransparency.RedemptionsYesNoDocs,
                        },
                        {
                            title: "Contracts are not open-source and verified",
                            content: BTCWrapperTransparency.ContractsSome,
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
                {
                    category: AssessmentCategory.SupplyIssuance,
                    score: 0,
                    tier: "",
                    title: "We cannot verify information on MBTC’s minting mechanism",
                    content:
                        "MBTC is minted to Merlin via a bridge contract between Merlin and its parent chain. Because we cannot verify its parent chain’s contracts, we are unable to verify MBTC’s minting and burning permissions.",
                },
                {
                    category: AssessmentCategory.CensorshipResistance,
                    score: 0,
                    tier: "",
                    title: "No blacklist or pause function on respective contracts",
                    content: WrapperSnippet.BlacklistYes
                },
                {
                    category: AssessmentCategory.Governance,
                    score: 0,
                    tier: "",
                    title: "We cannot verify information on MBTC’s governance mechanism",
                    content:
                        "MBTC governance is likely managed via a bridge contract between Merlin and its parent chain. Because we cannot verify its parent chain’s contracts, we are unable to verify MBTC’s minting and burning permissions.\n\nIt is likely managed by the development team.",
                },
    ],
};

export default merlinmbtc;
