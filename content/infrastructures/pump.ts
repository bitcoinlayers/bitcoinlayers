import { InfrastructureProject, Purpose, Type, LiveStatus, EntityType, Site } from '../props';

const pump: InfrastructureProject = {
  type: Type.Infrastructure,
  slug: "pump",
  title: "Pump",
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
      url: "https://mainnet.pumpbtc.xyz/"
    },
    {
      text: Site.Website,
      url: "https://mainnet.pumpbtc.xyz/"
    },
    {
      text: Site.Docs,
      url: "https://mainnet.pumpbtc.xyz/"
    },
    {
      text: Site.Explorer,
      url: "https://pumpbtc.gitbook.io/pumpbtc"
    },
    {
      text: Site.GitHub,
      url: "https://pumpbtc.gitbook.io/pumpbtc/key-address"
    },
    {
      text: Site.Twitter,
      url: "https://x.com/Pumpbtcxyz"
    }
  ],
  description: "Pump is a liquid staking protocol featuring the pumpBTC token.",
  sections: [
    {
      id: "knowledgeBits",
      title: "Knowledge Bits",
      content: [
        {
          title: "Learn more",
          content: "[Pump docs](https://pumpbtc.gitbook.io/pumpbtc)\n[Pump dashboard](https://dashboard.pumpbtc.xyz/)"
        }
      ]
    }
  ]
};

export default pump;
