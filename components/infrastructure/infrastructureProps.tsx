interface Section {
  id: string;
  title: string;
  content: Subsection[];
}

interface Subsection {
  title: string;
  content: string;
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
  executionEnv: string;
  consensus: string;
  nativeToken: string;
  feeToken: string;
  enshrinedBtc: string;
  links: string[];
  sections: Section[];
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
  executionEnv: string;
  consensus: string;
  nativeToken: string;
  feeToken: string;
  enshrinedBtc: string;
  links: string[];
  sections: Section[];
  /** MDX file body */
  slug: string;
};
