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
    slug: "bedrock-unibtc",
    title: "Bedrock uniBTC",
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
            id: "smartcontracts",
            title: "Smart contracts & audits",
            content: [
                {
                    title: "Smart contracts have undergone audits",
                    content:
                        "Users can verify the various implementations of uniBTC’s vault and token contracts on the chains they’re deployed on.\n\nuniBTC has gone through two audits. However, the protocol was exploited after these audits.\n\n⚠️ Audits of smart contracts do not mean exploits are not possible. Users should not deposit more funds than they’re willing to lose.",
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
                "When a user deposits funds into the Bedrock protocol, they deposit a wrapped BTC token into the uniBTC smart contract. The uniBTC smart contract on Ethereum (and other chains) is responsible for minting uniBTC in exchange for wrapped BTC tokens.\n\nTo deposit these tokens on Babylon, the protocol relies on a custodial provider to exchange the wrapped BTC tokens for native BTC tokens that they would stake on Babylon.\n\nBedrock has not disclosed who is responsible for securing and staking native BTC on users' behalf.",
        },
    ],
};

export default bedrock;
