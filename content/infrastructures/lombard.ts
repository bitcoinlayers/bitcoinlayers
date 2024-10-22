import { InfrastructureProject, Purpose, Type, LiveStatus, EntityType, Site } from '../props';

const lombard: InfrastructureProject = {
  type: Type.Infrastructure,
  slug: "lombard",
  title: "Lombard",
  entityType: EntityType.LiquidStaking,
  live: LiveStatus.Mainnet,
  staking: true,
  bridge: false,
  underReview: false,
  riskFactors: [
    "",
    ""
  ],
  nativeToken: "LBTC",
  purpose: Purpose.Staking,
  associatedLayers: "Ethereum",
  bitcoinOnly: true,
  links: [
    {
      text: Site.Website,
      url: "https://www.lombard.finance/app/"
    },
    {
      text: Site.Website,
      url: "https://docs.lombard.finance/"
    },
    {
      text: Site.Docs,
      url: "https://docs.lombard.finance/"
    },
    {
      text: Site.Explorer,
      url: "https://docs.lombard.finance/"
    },
    {
      text: Site.GitHub,
      url: "https://github.com/lombard-finance"
    },
    {
      text: Site.Twitter,
      url: "https://x.com/Lombard_Finance"
    }
  ],
  description: "Lombard is a liquid staking protocol where a security consortium network stakes assets on users' behalf.",
  sections: [
    {
      id: "apy",
      title: "How APY is determined",
      content: [
        {
          title: "Dependant on the various application parameters",
          content: "Potential yield opportunities are dependent on the various onchain applications parameters, and the delegation model in the PoS chains LBTC might be used via Babylon."
        }
      ]
    },
    {
      id: "audits",
      title: "Smart Contracts & Audits",
      content: [
        {
          title: "Lombard's smart contracts have been audited.",
          content: "Lombard has published audit reports on its smart contracts here.\n\nThe code behind Lombard’s is also source viewable here.\n\n⚠️ Audits of smart contracts do not mean exploits are not possible. Users should not deposit more funds than they’re willing to lose.\n\nLombard's audits can be found [here](https://github.com/lombard-finance/evm-smart-contracts/tree/main/docs/audit)."
        }
      ]
    },
    {
      id: "knowledgeBits",
      title: "Knowledge Bits",
      content: [
        {
          title: "Learn more",
          content: "[Lombard's documentation site](https://docs.gobob.xyz/docs/learn/security/privileged-roles)"
        }
      ]
    }
  ]
};

export default lombard;
