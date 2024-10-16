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

interface OpcodeProps {
    slug: string;
    title: string;
    opcodeType: string;
    live: string;
    underReview: string;
    riskFactors: string[];
    bitcoinSecurity: string;
    nativeToken: string;
    purpose: string;
    associatedLayers: string;
    bitcoinOnly: boolean;
    links: string[];
    description: string;
    sections: Section[];
}

export default OpcodeProps;

export type Opcode = {
    title: string;
    opcodeType: string;
    live: string;
    underReview: string;
    riskFactors: string[];
    bitcoinSecurity: string;
    nativeToken: string;
    purpose: string;
    associatedLayers: string;
    bitcoinOnly: boolean;
    links: string[];
    description: string;
    sections: Section[];
    /** MDX file body */
    slug: string;
};
