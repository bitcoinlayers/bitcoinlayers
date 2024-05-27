interface Section {
  id: string;
  title: string;
  content: Subsection[];
}

interface Subsection {
  title: string;
  content: string;
}

interface kbit {
  url: string;
  displayText: string;
}

interface InfrastructureProps {
  slug: string;
  title: string;
  infrastructureType: string;
  live: string;
  underReview: string;
  riskFactors: string[];
  bitcoinSecurity: string;
  nativeToken: string;
  purpose: string;
  associatedLayers: string;
  links: string[];
  description: string;
  sections: Section[];
  knowledgeBits: kbit[];
}

export default InfrastructureProps;

export type Infrastructure = {
  title: string;
  infrastructureType: string;
  live: string;
  underReview: string;
  riskFactors: string[];
  bitcoinSecurity: string;
  nativeToken: string;
  purpose: string;
  associatedLayers: string;
  links: string[];
  description: string;
  sections: Section[];
  knowledgeBits: kbit[];
  /** MDX file body */
  slug: string;
};
