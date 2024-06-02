interface Section {
    id: string;
    title: string;
    content: Subsection[];
}

interface Subsection {
    title: string;
    content: string;
}

interface BridgeProps {
    slug: string;
    title: string;
    bridgeType: string;
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
    description: string;
    sections: Section[];
}

export default BridgeProps;

export type Bridge = {
    title: string;
    bridgeType: string;
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
    description: string;
    sections: Section[];
    /** MDX file body */
    slug: string;
};
