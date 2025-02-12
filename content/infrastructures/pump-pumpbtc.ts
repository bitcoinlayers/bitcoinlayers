import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Notice,
    Site,
    AssessmentCategory,
    BTCWrapperTransparency,
} from "../props";

const pump: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "pump-pumpbtc",
    title: "Pump pumpBTC",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: true,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.LiquidStaking,
    associatedLayers: "Ethereum",
    notice: undefined,
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://pumpbtc.xyz",
        },
        {
            text: Site.Docs,
            url: "https://pumpbtc.gitbook.io/pumpbtc",
        },
        {
            text: Site.Explorer,
            url: "https://www.blockchain.com/explorer/assets/pumpbtc",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/pumpbtc",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Pumpbtcxyz",
        },
    ],
    description:
        "Pump offers a mechanism that enables users to deposit wrapped BTC into smart contracts on EVM-based chains. Users receive PumpBTC, a token representing staked BTC, on Babylon in exchange for depositing a wrapped BTC token",
    sections: [
        {
            id: "protocoltransparency",
            title: "Protocol Transparency",
            content: [
                {
                    title: "Proof-of-Reserves",
                    content: "The project provides a [list of BTC addresses](https://dashboard.pumpbtc.xyz/) that it claims to be its reserves.",
                },
                {
                    title: "External operators disclosed",
                    content: BTCWrapperTransparency.OperatorsDisclosedYes,
                },
                {
                    title: "Redemptions enabled and documented",
                    content: BTCWrapperTransparency.RedemptionsYes,
                },
                {
                    title: "Contracts are open-source and verified",
                    content: BTCWrapperTransparency.ContractsYes,
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional Considerations",
            content: [
                {
                    title: "Key storage & signing",
                    content:
                        "PumpBTC states that reserve wallets are managed by an MPC solution between Cobo, Coinover, and Cobo. EVM wallets managing derivative assets are signed by GnosisSafes.",
                },
                {
                    title: "Cross-chain PumpBTC",
                    content:
                        "Users can also mint wrapped versions of PumpBTC to be moved to another chain. Crosschain minting and burning is handled by an implementation of LayerZero.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Pump's documentation](https://pumpbtc.gitbook.io/pumpbtc)\n[Pump dashboard](https://dashboard.pumpbtc.xyz/)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "PumpBTC works with custodians to store bitcoin assets",
            content:
                "PumpBTC works with custodial providers to swap PumpBTC deposits into native BTC for BTC staking. When a user deposits a BTC derivative token (e.g. wBTC) into the PumpBTC contract, they are given PumpBTC in return. The staking contract is operated by a [⅔ GnosisSafe](https://etherscan.io/address/0xAC364d14020f1da0044699691a91f06ca6131Fe3).\n\nCobo and Coinover have been mentioned as operators participating in Pump.\n\n[Source](https://pumpbtc.gitbook.io/pumpbtc/custody-and-security/how-does-pumpbtc-ensure-safety)",
        },
        {
            category: AssessmentCategory.SupplyIssuance,
            score: 0,
            tier: "",
            title: "Minting of PumpBTC is managed by a smart contract",
            content:
                "PumpBTC is minted through a smart contract. Users deposit a wrapped version of BTC on an EVM chain into the contract and then receive PumpBTC.",
        },
        {
            category: AssessmentCategory.CensorshipResistance,
            score: 0,
            tier: "",
            title: "No blacklist function currently implemented",
            content:
                "Implementations of the token do not have a blacklist or pause function.",
        },
        {
            category: AssessmentCategory.Governance,
            score: 0,
            tier: "",
            title: "A centralized party can assign roles",
            content:
                "A [⅔ GnosisSafe](https://etherscan.io/address/0x77A0545Dc1Dc6bAee8d9c1d436c6688a75Ae5777) is responsible for assigning roles for various PumpBTC implementations. The token contract is not upgradeable.",
        },
    ],
};

export default pump;
