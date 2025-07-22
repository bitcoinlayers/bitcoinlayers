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
        <li>🟢 Green must match one of the following conditions:</li>
        <ul>
                <li>Users can unilaterally exit the protocol with a Bitcoin L1 transaction</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>The two-way peg is managed by an alternative consensus mechanism that is financially incentivized not to steal</li>
                <li>The two-way peg is managed by a mechanism where anyone can become a watchtower to challenge malicious withdrawal requests</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
            <ul>
                <li>The the two-way peg is managed by at least 5 publicly known signers, who are external to the organization building the network.</li>
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
                <li>If the custody mechanism is upgradeable, the score is analyzed based on the signers who can upgrade. We will assess timelocks when applicable.</li>
                <li>If the protocol sees a user maintain custody, but does not support unilateral exits, the score is degraded to yellow.</li>
            </ul>
        </li>
        </ul>
`;

    const dataAvailabilityBody = `
<ul>
        <li>🟢 Green must match one of the following conditions:</li>
        <ul>
                <li>All data needed to reconstruct the layer&apos;s state lives on the bitcoin L1 and is accessible via full nodes</li>
                <li>Data is self hosted by default and users are required to store data relative to their own state and/or unilateral exit transactions</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>Data is made available by an alternative consensus protocol (that is not bitcoin) and the full node software is open-source</li>
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
                <li>Users can transact in a peer-to-peer manner.</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>The network operator node software is open-source, anyone can become a validator in a (at least) minimally permissioned (e.g. proof of stake) way</li>
                <li>The layer is merge-mined with bitcoin and secured by greater than 50% of hashrate</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>The layer is operated by an operator set of at least 5 externally, publicly known operators</li>
            </ul>
            </li>
        <br />
        <li>🛑 Stop!</li>
        <ul>
                <li>Doesn’t meet the criteria for any other rating in this section</li>
            </ul>
            </li>
             <li>Additional considerations:</li>
        <ul>
                <li>We will assess sidesystem network&apos;s that enable self-sequencing, in the context of bitcoin, when applicable.</li>
            </ul>
        </li>
        <br />
        </ul>
`;

    const settlementAssuranceBody = `
    <ul>
        <li>🟢 Green must match one of the following conditions:</li>
        <ul>
                <li>The network finalizes its state based on data posted to bitcoin</li>
                <li>Users maintain, a periodic, provable assurance that they are the only party that can spend their funds</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>Transaction finality is provided by an alternative consensus network</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>Finality guarantees come from a federated system</li>
            </ul>
            </li>
        <br />
        <li>🛑 Stop!</li>
        <ul>
                <li>None of the requirements for Red are met.</li>
            </ul>
            </li>
        <br />
        <li>Additional considerations:</li>
        <ul>
                <li>Single-sequenced networks that post state roots to bitcoin, but who&apos;s bridge programs do not finalized based on this state, are degraded to yellow.</li>
                </ul>
        </li>
        </ul>
`;

    const summaryBody = `
    <p>Individual categories are analyzed in isolation of each other. A poor score in one category does not affect a score in another category.</p>
    <br />
    <p>This risk assessment is a living document and is subject to change.</p>
    <br />
    <p>If you have comments on this framework, please consider joining our <a href="https://t.me/+8rv-1I2gkmQ4ZmJh" target="_blank" rel="noopener noreferrer">community chat</a> to discuss.</p>
`;

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-8">
                <div className="w-full pt-8">
                    <div className="special_header sm:leading-[80px] text-8xl lg:text-10xl font-light">
                        Framework
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <div className="rounded-xl border border-border flex flex-col justify-center items-start gap-4 p-8">
                                <div className="flex flex-col gap-3 cursor-pointer">
                                    <div className="text-xl font-light leading-9">
                                        Bitcoin Layers Framework
                                    </div>
                                    <div className="text-base font-normal leading-normal">
                                        The Bitcoin Layers risk assessment is
                                        broken down into four sections. They
                                        cover BTC Custody, Data Availability,
                                        Network Operators, and Finality Guarantees.
                                        <br />
                                        <br /> This assessment is not reflective
                                        of L2 or sidesystem security. It is not
                                        a security audit. It is an opinionated assessment
                                        covering the trust assumptions related to specific
                                        system.
                                        <br />
                                        <br />
                                        Protocols are divided into three
                                        categories; bitcoin native, sidesystems,
                                        and alternative chains. For a project to be 
                                        considered a
                                        bitcoin layer or sidesystem, they must meet our
                                        technical requirements listed&nbsp;
                                        <a
                                            href="https://www.lxresearch.co/starting-to-define-layers-a-year-later/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                        >
                                            here
                                        </a>
                                        .
                                        <br />
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
                            <InfoBox title="Summary" body={summaryBody} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Methodology;
