"use client";

const Methodology: React.FC = () => {
    const InfoBox: React.FC<{ title: string; body: string }> = ({
        title,
        body,
    }) => {
        return (
            <div className="rounded-xl border border-border flex flex-col justify-center items-start gap-4 p-8">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-light leading-9">{title}</div>
                </div>
                <div className="flex flex-col justify-center items-start gap-8 w-full">
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                        <div
                            className="text-base font-normal leading-normal [&>ul]:list-disc [&>ul]:pl-6 [&>ul>ul]:list-circle [&>ul>ul]:pl-10 [&>ul>ul>ul]:list-square [&>ul>ul>ul]:pl-14 [&_a]:text-blue-700 [&_a]:dark:text-blue-500 [&_a]:underline"
                            dangerouslySetInnerHTML={{ __html: body }}
                        />
                    </div>
                </div>
            </div>
        );
    };

    const btcCustodyBody = `
    <ul>
        <li>🟢 Green must match the following condition:</li>
        <ul>
                <li>The custody of users' funds is guaranteed by bitcoin Script. This means that users retain unilateral control over the funds they deposit into a system.</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>The two-way peg is managed by an alternative consensus mechanism where operators are financially incentivized not to steal</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
            <ul>
                <li>The two-way peg is managed at least 5 publicly known signers, who are external to the organization building the layer.</li>
            </ul>
            </li>
        <br />
        <li>🛑 Stop!</li>
        <ul>
                <li>The two-way peg does not meet the requirements for Red.</li>
            </ul>
        </li>
        <br />
        <li>Additional considerations:</li>
        <ul>
                <li>Two-way pegs must consider governance mechanisms behind them. For example: If a rollup leverages a BitVM-based bridge with a 1-N trust assumption, but has 2/3 governance multisig that can unilaterally upgrade the system, then the layer will receive a “Stop!” score in the assessment.</li>
            </ul>
        </li>
        </ul>
`;

    const dataAvailabilityBody = `
<ul>
        <li>🟢 Green must match one of the following conditions:</li>
        <ul>
                <li>All data needed to reconstruct the layer’s state lives on the Bitcoin L1 and is accessible via full nodes</li>
                <li>Data is self hosted by default and users are required to store data relative to their own state</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>Data is made available by an alternative consensus protocol (that is not bitcoin) and the full node software is open-source</li>
                <li>Data is stored via an offchain committee or consensus protocol, where validators stake slashable collateral greater than value locked in the layer and DA attestations are backed by this economic security</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>Data is stored via an offchain committee with at least 5 external, publicly known actors attesting that the data is available.</li>
            </ul>
            </li>
        <br />
        <li>🛑 Stop!</li>
        <ul>
                <li>None of the requirements for Red are met.</li>
            </ul>
            </li>
        <br />
        </ul>
`;

    const networkOperatorsBody = `
<ul>
        <li>🟢 Green must match one of the following conditions:</li>
        <ul>
                <li>Users can self-sequence their own transactions and propose their own state transitions</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>The validator (aka network operator) node software is open-source, anyone can become a validator in a (at least) minimally permissioned (e.g. proof of stake) way</li>
                <li>The layer is merge-mined with Bitcoin and secured by greater than 50% of hashrate</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>The layer is operated by a federation set of at least 5 externally, publicly known operators</li>
            </ul>
            </li>
        <br />
        <li>🛑 Stop!</li>
        <ul>
                <li>Doesn’t meet the criteria for any other rating in this section</li>
            </ul>
            </li>
        <br />
        </ul>
`;

    const settlementAssuranceBody = `
    <ul>
        <li>🟢 Green must match one of the following conditions:</li>
        <ul>
                <li>Layer's consensus is constructed in a way that operators must build on the latest state root, or state commitment, posted to bitcoin</li>
                <li>Layer transactions happen atomically and cannot reorg</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>Settlement guarantees come from a permissionless, or minimally permissioned (e.g. proof of stake), alternative consensus network operated by at least 5 externally, publicly known operators</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>Layer finality guarantees come from a federated system</li>
            </ul>
            </li>
        <br />
        <li>🛑 Stop!</li>
        <ul>
                <li>None of the requirements for Red are met.</li>
            </ul>
            </li>
        <br />
        </ul>
`;

    const additionalQuestionsBody = `
        <p>In addition to performing this assessment, we additionally have a “Bitcoin security” section where we cover:</p>
        <ul>
                <li>If the protocol inherits security from bitcoin</li>
                <li>If the protocol needs an alternative token to function</li>
                <li>If the protocol introduces MEV to bitcoin</li>
                <li>If the protocol contributes to bitcoin’s security budget</li>
            </ul>
        <p>We also cover areas related to various technologies used, and potential use cases.</p>
`;

    const additionalContextBody = `
    <p>Some context related to risks with certain protocols may not be covered directly in our risk assessment. This can be covered in an 'additional considerations' section that outlines relevant information. An example of this could be acknowledging that the majority of Lightning Network adoption is by way of custodial providers.</p>
`;

    const criticalRiskAcknowledgementBody = `
    <p>If we cannot verify a specific category in this assessment (e.g. some aspect of the code is not source-viewable), then we automatically assign it a "Stop" score. If the mainnet node implementation is not source-viewable, we do not include the project on the site.</p>
`;

    const summaryBody = `
    <p>This framework can be easier to customize and provide more nuance given the number of scaling solutions that are present in Bitcoin today. For example, related to block production/network operators, we can add even more scoring mechanisms based on how decentralized the network is. E.g. A network with 200 validators is better than a network with 10, and we can customize the assessment to highlight this.</p>
    <br />
    <p>This risk assessment is an initial starting point to analyze Bitcoin scaling protocols. It is a living document and is subject to change.</p>
    <br />
    <p>Bitcoin does not have a unified scaling roadmap. There are tradeoffs with every protocol being implemented to support Bitcoin scaling. This framework hopes to capture some of the nuance related to the various designs being proposed.</p>
    <br />
    <p>If you have comments on this framework, please consider joining our <a href="https://t.me/+8rv-1I2gkmQ4ZmJh" target="_blank" rel="noopener noreferrer">community chat</a> to discuss. You can also add comments or feedback <a href="https://bitcoinlayers.discourse.group/t/updating-the-bitcoin-layers-framework/11" target="_blank" rel="noopener noreferrer">here</a>.</p>
`;

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-8">
                <div className="w-full pt-8">
                    <div className="special_header sm:leading-[80px] text-8xl lg:text-10xl font-light">
                        Approach to analyzing layers
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="rounded-xl border border-border flex flex-col justify-center items-start gap-4 p-8">
                                <div className="flex flex-col gap-3 cursor-pointer">
                                    <div className="text-xl font-light leading-9">
                                        This is the framework we use to analyze
                                        sidechains, L2s and other scaling
                                        protocols
                                    </div>
                                    <div className="text-base font-normal leading-normal">
                                        The Bitcoin Layers risk assessment is
                                        broken down into four sections. They
                                        cover BTC Custody, Data Availability,
                                        Network Operators, and Settlement
                                        Assurance (Finality Guarantees). The
                                        assessments also include more granular
                                        reviews of specific areas. For example,
                                        if the chain uses a federated two-way
                                        peg, an additional assessment on the
                                        security related to that peg can be
                                        performed.
                                        <br />
                                        <br /> This assessment is not reflective
                                        of L2 or sidesystem security. It is not
                                        a security audit. It is an assessment
                                        that outlines the varying degree of
                                        trust assumptions that users have to
                                        take on when interacting with a bitcoin
                                        sidesystem. <br />
                                    </div>
                                </div>
                            </div>
                            <InfoBox
                                title="BTC Custody"
                                body={btcCustodyBody}
                            />
                            <InfoBox
                                title="Data Availability"
                                body={dataAvailabilityBody}
                            />
                            <InfoBox
                                title="Network Operators"
                                body={networkOperatorsBody}
                            />
                            <InfoBox
                                title="Finality Guarantees"
                                body={settlementAssuranceBody}
                            />
                            <InfoBox
                                title="Additional Questions"
                                body={additionalQuestionsBody}
                            />
                            <InfoBox
                                title="Additional Context"
                                body={additionalContextBody}
                            />
                            <InfoBox
                                title="Critical Risk Acknowledgement"
                                body={criticalRiskAcknowledgementBody}
                            />
                            <InfoBox title="Summary" body={summaryBody} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Methodology;
