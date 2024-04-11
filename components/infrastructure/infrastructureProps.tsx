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
  purpose: string;
  btcBridge: string;
  settlement: string;
  btcLocked: number;
  associatedLayers: string;
  consensus: string;
  nativeToken: string;
  feeToken: string;
  enshrinedBtc: string;
  links: string[];
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
  purpose: string;
  btcBridge: string;
  settlement: string;
  btcLocked: number;
  associatedLayers: string;
  consensus: string;
  nativeToken: string;
  feeToken: string;
  enshrinedBtc: string;
  links: string[];
  sections: Section[];
  knowledgeBits: kbit[];
  /** MDX file body */
  slug: string;
};
