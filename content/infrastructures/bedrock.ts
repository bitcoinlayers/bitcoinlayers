import { InfrastructureProject, Purpose, Type, LiveStatus, EntityType, Site } from '../props';

const bedrock: InfrastructureProject = {
  type: Type.Infrastructure,
  slug: "bedrock",
  title: "Bedrock",
  entityType: EntityType.LiquidStaking,
  live: LiveStatus.Mainnet,
  staking: true,
  bridge: false,
  underReview: true,
  riskFactors: [
    "",
    ""
  ],
  nativeToken: "",
  purpose: Purpose.LiquidStaking,
  associatedLayers: "Ethereum",
  bitcoinOnly: false,
  links: [
    {
      text: Site.Website,
      url: "https://www.bedrock.technology/"
    },
    {
      text: Site.Website,
      url: "https://www.bedrock.technology/"
    },
    {
      text: Site.Docs,
      url: "https://www.bedrock.technology/"
    },
    {
      text: Site.Explorer,
      url: "https://docs.bedrock.technology/"
    },
    {
      text: Site.GitHub,
      url: "https://github.com/Bedrock-Technology"
    },
    {
      text: Site.Twitter,
      url: "https://x.com/Bedrock_DeFi"
    }
  ],
  description: "Bedrock is a liquid staking protocol featuring the uniBTC token.",
  sections: [
    {
      id: "knowledgeBits",
      title: "Knowledge Bits",
      content: [
        {
          title: "Learn more",
          content: "[Bedrock docs](https://docs.bedrock.technology/)"
        }
      ]
    }
  ]
};

export default bedrock;
