"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "../../components/styles/methodology.module.css";

const Methodology: React.FC = () => {
    const InfoBox: React.FC<{ title: string; body: string }> = ({
    title,
    body,
}) => {
    return (
        <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
            <div className="flex items-center gap-3">
                <div className="text-2xl font-light text-zinc-800 leading-9">
                    {title}
                </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-8 w-full">
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <div
                        className={`text-base font-normal text-slate-500 leading-normal ${styles["custom-ul"]}`}
                        dangerouslySetInnerHTML={{ __html: body }}
                    />
                </div>
            </div>
        </div>
    );
};

    const bridgeCustodyBody = `
    <ul>
        <li>🟢 Green must match one of the following conditions:</li>
        <ul>
                <li>Users can unilaterally exit with an L1 transaction and have the ability to challenge a faulty operator</li>
                <li>Anyone can ensure the integrity of a bridge with a fault proof</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>The two-way peg is overcollateralized with a minimum of 150% of value locked in the form of a slashable asset</li>
                <li>The layer relies on a federated operator and verifier set, where one entity needs to remain honest to ensure the integrity of the bridge. There needs to be at least 6 signers who are publicly known entities.</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>The two-way peg is managed by a (likely federated) group of signers whose identities are known to the public and/or core development organizations. There need to be at least 9 signers, where 66.67% are publicly known, independent signers, participating in securing the two-way peg.</li>
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
                <li>layers that settle to a parent blockchain must consider their exit window. For rollups, we follow L2Beat’s suggestions on exit windows. These exit window scores overrule any other score related to the two-way peg. For example: If a rollup-style layer leverages tBTC (a yellow or red score) to natively mint bitcoin-backed tokens, but has an immediately upgradeable contract, then the layer will receive a “Stop!” score in the assessment.</li>
                <li>Due to complexities related to federated set ups, we will additionally highlight more granular trust assumptions for federated two-way pegs in a subsection of the review. In this upcoming framework, we will outline how a federated peg can be upgraded to yellow if it meets a certain threshold of requirements.</li>
                <li>Additional situations can be added to this framework for edge cases. For example, users of Statechains can unilaterally exit with a Bitcoin L1 transaction, but an operator can steal funds by colluding with the past owner, and users cannot submit a challenge transaction.</li>
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
                <li>Data is stored on an alternative consensus protocol (that is not bitcoin) nodes are operated by at least 5 publicly known, independent actors, and the full node software is open-source</li>
                <li>Data is stored via an offchain committee or consensus protocol, where validators stake slashable collateral greater than value locked in the layer and DA attestations are backed by this economic security</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>Data is stored via an offchain committee with at least 5 actors attesting that the data is available.</li>
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
                <li>Users can self-sequence their own transactions and the network fails if the sequencer does not publish blocks that include forced included transactions. Sequencer cannot selectively censor.</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>The validator node software is open-source, anyone can become a validator in a permissionless or minimally permissioned (e.g. proof of stake) way, and 21 or more validators participate in proposing and signing blocks</li>
                <li>The layer is merge-mined with Bitcoin and secured by greater than 50% of hashrate</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>The layer is operated by a validator set of at least 5 publicly known, independent operators</li>
                <li>Anyone can ensure the integrity of a bridge with a fault proof</li>
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
                <li>Settlement happens onchain and is immediately enforced by Bitcoin Script</li>
                <li>Settlement happens onchain optimistically where anyone can challenge invalid state transitions during a given time period with a Bitcoin L1 transaction</li>
            </ul>
            </li>
        <br />
        <li>🟡 Yellow must match one of the following conditions:</li>
        <ul>
                <li>Settlement guarantees come from a permissionless, alternative consensus network, and the layer inherits reorg resistance from Bitcoin</li>
            </ul>
            </li>
        <br />
        <li>🔴 Red:</li>
        <ul>
                <li>Requirements for yellow are not met</li>
            </ul>
            </li>
        <br />
        <li>🛑 Stop!</li>
        <ul>
                <li>Not specified</li>
            </ul>
            </li>
        <br />
        <li>Additional considerations:</li>
        <ul>
                <li>If all transactions are finalized offchain, and the sidesystem’s initiation and closure transactions are finalized by the bitcoin L1, but there is no challenge mechanism to dispute an operator, then it is likely a yellow score.</li>
                <li>A consideration on where merge-mined chains would fit into this mechanism is needed. You could likely say if X% of hashrate is actively mining the sidesystem, then it receives a yellow score.</li>
            </ul>
        </li>
        </ul>
`;

    const additionalQuestionsBody = `
    <ul>
    <ul>
        <li>In addition to performing this assessment, we additionally have a “Bitcoin security” section where we cover:</li>
        <ul>
                <li>If the protocol inherits security from bitcoin</li>
                <li>If the protocol needs an alternative token to function</li>
                <li>If the protocol introduces MEV to bitcoin</li>
                <li>If the protocol contributes to bitcoin’s security budget</li>
            </ul>
            </li>
        </ul>
        <li>We also cover areas related to various technologies used, and potential use cases.</li>
    </ul>
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
    <p>If you have comments on this framework, please consider joining our <a href="https://t.me/+8rv-1I2gkmQ4ZmJh" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener noreferrer">community chat</a> to discuss. You can also add comments or feedback <a href="https://bitcoinlayers.discourse.group/t/updating-the-bitcoin-layers-framework/11" style="color: blue; text-decoration: underline;" target="_blank" rel="noopener noreferrer">here</a></p>.
`;

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow sm:h-20 text-6xl lg:text-10xl text_table_important">
                            Approach to analyzing layers
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        {" "}
                        <div className="flex flex-col gap-8 w-full">
                            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
                                <div className="flex flex-col gap-3 cursor-pointer">
                                    <div className="text-xl font-light text-zinc-800 leading-9">
                                        This is the framework we use to analyze
                                        sidechains, L2s and other scaling
                                        protocols
                                    </div>
                                    <div className="text-base font-normal text-slate-500 leading-normal">
                                        We analyze protocols on four categories:
                                        Data availability, network operators,
                                        settlement assurance (a.k.a finality),
                                        and the bridge custody (or two-way peg).
                                        <br />
                                        <br /> Protocols do not receive an
                                        overall score, but a risk summary is
                                        added at the beginning of every
                                        assessment to highlight risk areas that
                                        can be critical. <br />
                                        <br />
                                        For example, if an optimium uses an
                                        offchain data availability solution that
                                        is a single server, then it only takes
                                        collusion between a sequencer and the
                                        operator of the DA server to steal
                                        everyone’s funds. This is a critical and
                                        should be noted in the summary. <br />
                                        <br />
                                        Let’s review how protocols can
                                        potentially be assessed.
                                    </div>
                                </div>
                            </div>
                            <InfoBox
                                title="Bridge Custody"
                                body={bridgeCustodyBody}
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
                                title="Settlement Assurance"
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
