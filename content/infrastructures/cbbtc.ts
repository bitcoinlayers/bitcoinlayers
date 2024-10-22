import { InfrastructureProject, Purpose, Type, LiveStatus, EntityType, Site } from '../props';

const cbbtc: InfrastructureProject = {
  type: Type.Infrastructure,
  slug: "cbbtc",
  title: "cbBTC",
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
  associatedLayers: "Base, Ethereum",
  bitcoinOnly: false,
  links: [
    {
      text: Site.Website,
      url: "https://www.base.org/"
    },
    {
      text: Site.Website,
      url: "https://www.base.org/"
    },
    {
      text: Site.Docs,
      url: "https://docs.threshold.network/"
    },
    {
      text: Site.Explorer,
      url: "https://github.com/base-org/"
    },
    {
      text: Site.GitHub,
      url: "https://x.com/base"
    },
    {
      text: Site.Twitter,
      url: "https://x.com/base"
    }
  ],
  description: "Under Review",
  sections: [
    {
      id: "contracts",
      title: "Contract addresses",
      content: [
        {
          content: "[cbBTC Base smart contract](https://basescan.org/token/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf)\n\n[cbBTC ETH smart contract](https://etherscan.io/token/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf)"
        }
      ]
    },
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

export default cbbtc;
