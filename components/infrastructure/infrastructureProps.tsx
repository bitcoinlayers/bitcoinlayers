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

// interface InfrastructureProps {
//     slug: string;
//     title: string;
//     infrastructureType: string;
//     live: string;
//     staking: boolean;
//     underReview: string;
//     riskFactors: string[];
//     bitcoinSecurity: string;
//     nativeToken: string;
//     purpose: string;
//     associatedLayers: string;
//     bitcoinOnly: boolean;
//     links: string[];
//     description: string;
//     sections: Section[];
// }

// export default InfrastructureProps;

export type Infrastructure = {
    title: string;
    infrastructureType: string;
    live: string;
    staking: boolean;
    bridge: boolean;
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
