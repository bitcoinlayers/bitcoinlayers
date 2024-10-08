interface Section {
    id: string;
    title: string;
    content: Subsection[];
}

interface Subsection {
    title: string;
    content: string;
}

interface Risksection {
    category: string;
    score: number;
    tier: string;
    title: string;
    content: string;
}

interface BridgeSection {
    category:
        | "Reputation"
        | "Participation"
        | "Signing Mechanism"
        | "Key Storage";
    score?: number;
    tier: "Low" | "Medium" | "High" | "Critical" | "Unverified";
    title: string;
    content: string;
}

interface kbit {
    url: string;
    displayText: string;
}

interface LayerProps {
    slug: string;
    title: string;
    layerType: string;
    live: string;
    bridge: boolean;
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
    bitcoinOnly: boolean;
    links: string[];
    description: string;
    riskAnalysis: Risksection[];
    bridgeAnalysis?: BridgeSection[];
    sections: Section[];
    knowledgeBits: kbit[];
}

export default LayerProps;

export type Layer = {
    title: string;
    layerType: string;
    live: string;
    bridge: boolean;
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
    bitcoinOnly: boolean;
    links: string[];
    description: string;
    riskAnalysis: Risksection[];
    bridgeAnalysis?: BridgeSection[];
    sections: Section[];
    knowledgeBits: kbit[];
    /** MDX file body */
    slug: string;
};
