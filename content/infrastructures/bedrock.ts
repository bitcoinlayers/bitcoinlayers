import {
    InfrastructureProject,
    Purpose,
    Type,
    LiveStatus,
    EntityType,
    Site,
    AssessmentCategory,
} from "../props";

const bedrock: InfrastructureProject = {
    type: Type.Infrastructure,
    slug: "bedrock",
    title: "Bedrock",
    entityType: EntityType.LiquidStaking,
    live: LiveStatus.Deposits,
    staking: false,
    liquidStaking: true,
    bridge: false,
    underReview: false,
    riskFactors: ["", ""],
    nativeToken: "",
    purpose: Purpose.LiquidStaking,
    associatedLayers: "Ethereum",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.bedrock.technology",
        },
        {
            text: Site.Docs,
            url: "https://docs.bedrock.technology",
        },
        {
            text: Site.Explorer,
            url: "https://app.bedrock.technology/statistics",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/Bedrock-Technology",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/Bedrock_DeFi",
        },
    ],
    description:
        "Bedrock is a liquid staking protocol featuring the uniBTC token.",
    sections: [
        {
            id: "Economics",
            title: "Economics",
            content: [
                {
                    title: "Incentive model",
                    content:
                        "🔬 Babylon’s staking is not currently securing any PoS chains. Rewards are only issued through points. Once live, we will review Babylon’s incentive and issuance mechanism.",
                },
            ],
        },
        {
            id: "smartcontracts",
            title: "Smart contracts & audits",
            content: [
                {
                    title: "Smart contracts have undergone audits",
                    content:
                        "These operators can censor users from using the contracts, inflate the supply of uniBTC, and steal the funds locked in the vault.\n\nUsers can verify the various implementations of uniBTC’s vault and token contracts on the chains they’re deployed on.\n\nuniBTC has gone through two audits. However, the protocol was exploited after these audits.\n\n⚠️ Audits of smart contracts do not mean exploits are not possible. Users should not deposit more funds than they’re willing to lose.",
                },
            ],
        },
        {
            id: "additionalconsiderations",
            title: "Additional considerations",
            content: [
                {
                    title: "Protocol has been exploited",
                    content:
                        "The uniBTC vault contract was previously exploited. The exploit occurred because the uniBTC contract did not specify which token needed to be deposited to mint uniBTC.\n\nAn exploiter deposited 30 ETH to mint 30 uniBTC, and then swapped the uniBTC for wBTC via Uniswap. This saw the exploiter take an advantage between the price of ETH and their newly minted uniBTC which was swapped for wBTC.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content: "[Bedrock docs](https://docs.bedrock.technology/)",
                },
            ],
        },
    ],
    assessment: [
        {
            category: AssessmentCategory.AssetCustody,
            score: 0,
            tier: "",
            title: "Wrapped BTC tokens are swapped for BTC. A custodian is responsible for depositing funds into Babylon",
            content:
                "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into the uniBTC smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens.\n\nTo deposit these tokens on Babylon, users rely on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon. The custodian could also deposit the wrapped BTC tokens into another staking protocol that takes the liquidity. The trust assumptions related to these scenarios are dependent on the custodians and protocols involved.\n\n⚠️ A noted vulnerability in uniBTC is that if a specific wrapped BTC token became unbacked (e.g. wBTC), the uniBTC peg would be broken. This could cause a bank run for users to remove other wrapped bitcoin assets from the vault contract.",
        },
        {
            category: AssessmentCategory.StakingType,
            score: 0,
            tier: "",
            title: "Deposits are made by a third party. We are currently reviewing who deposits funds on users’ behalf",
            content:
                "Deposits into Babylon, via Bedrock, are done by a third party custodian.\n\nPer Bedrock’s documentation, there is no mention of the custodian who custodies BTC tokens on their behalf to deposit into Babylon. Typically, when a user locks BTC into a liquid staking contract, a third party takes these funds and deposits them into Babylon’s on their behalf.\n\n🔬 We're currently researching who the custodian, responsible for delegating stake, is in the uniBTC model.",
        },
        {
            category: AssessmentCategory.SlashingRisk,
            score: 0,
            tier: "",
            title: "Slashing enforced by Babylon. Slashing on Babylon is not currently live",
            content:
                "Users’ slashing risk will be a result of PoS validators, whom their tokens are delegated to, getting slashed. Slashing is not currently live on Babylon.🔬 We're currently researching if user funds are eventually deployed onto Babylon.",
        },
    ],
};

export default bedrock;
