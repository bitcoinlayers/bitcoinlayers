import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
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
        // {
        //     text: Site.GitHub,
        //     url: "https://pumpbtc.gitbook.io/pumpbtc/key-address",
        // },
        {
            text: Site.Twitter,
            url: "https://x.com/Pumpbtcxyz",
        },
    ],
    description:
        "Pump offers a mechanism that enables users to deposit wrapped BTC into smart contracts on EVM-based chains. Users receive PumpBTC, a token representing staked BTC, on Babylon in exchange for depositing a wrapped BTC token",
    sections: [
        {
            id: "smartcontracts",
            title: "Smart contracts & audits",
            content: [
                {
                    title: "Contracts have been audited",
                    content:
                        "The contracts for PumpBTC have been audited. The audit reports can be found below.\n\n⚠️ Audits of smart contracts do not mean exploits are not possible. Users should not deposit more funds than they’re willing to lose.\n\n[Blocksec audit](https://drive.google.com/file/d/1kUmOPM8J63JmzM20H1Cg38oAfPRBJwLy/view?pli=1)\n\n[Quantstamp](https://drive.google.com/file/d/1xWQlC4iZenwHrjNOsBdKyVkFbEaUnwD-/view)",
                },
                {
                    title: "Contracts are permissioned",
                    content:
                        "Both contracts associated with PumpBTC are permissioned.\n\nThe staking contract can be:\n\n- Paused entirely.\n\n- A cap can be set, limiting the amount of assets that can be staked.\n\n- Have specific fees be set for unstaking, including extremely high fees (up to 100%).\n\n- Paused for unstaking and only allow staking.\n\nFor a full look into the staking contract, you can read it [here](https://etherscan.io/address/0x9e9dc47335ed4dc80051170d8101a70f689c4365#code).",
                },
            ],
        },
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
                "PumpBTC works with custodial providers to store the BTC that matches PumpBTC deposits. When a user deposits a wrapped bitcoin token into the PumpBTC contract, they are given PumpBTC in return.\n\nAfter receiving the deposit, an operator (likely one of the custodians) of the contract then manually exchanges wrapped bitcoin for native bitcoin to deposit onto Babylon.\n\nCobo and Coinover have been mentioned as operators participating in Pump.",
        },
    ],
};

export default pump;
