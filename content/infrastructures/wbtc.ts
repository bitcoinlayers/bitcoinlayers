import { InfrastructureProject, Purpose, Type, LiveStatus, EntityType, Site } from '../props';

const wbtc: InfrastructureProject = {
  type: Type.Infrastructure,
  slug: "wbtc",
  title: "wBTC",
  entityType: EntityType.BTCWrapper,
  live: LiveStatus.Mainnet,
  staking: false,
  bridge: true,
  underReview: true,
  riskFactors: [
    "",
    ""
  ],
  nativeToken: "-",
  purpose: Purpose.General,
  associatedLayers: "-",
  bitcoinOnly: false,
  links: [
    {
      text: Site.Website,
      url: "https://threshold.network/"
    },
    {
      text: Site.Website,
      url: "https://threshold.network/"
    },
    {
      text: Site.Docs,
      url: "https://docs.threshold.network/"
    },
    {
      text: Site.Explorer,
      url: "https://github.com/threshold-network"
    },
    {
      text: Site.GitHub,
      url: "https://x.com/thetnetwork"
    }
  ],
  description: "Under Review",
  sections: [
    {
      id: "selfsubmit",
      title: "Process to self-submit information",
      content: [
        {
          content: "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project."
        }
      ]
    },
    {
      id: "knowledgeBits",
      title: "Knowledge Bits",
      content: [
        {
          title: "Learn more",
          content: "[Bitcoin Layers comparison of tBTC, wBTC, and cbBTC](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo)"
        }
      ]
    }
  ]
};

export default wbtc;
