"use client";

import Image from "next/image";
import React from "react";
import styles from "../../components/styles/methodology.module.css";

const Methodology: React.FC = () => {
    const combinedBody = `
        <h2>Data Availability</h2>
        <ul>
            <li>Self-hosted: User can store data related to scaling protocol transactions locally - low risk</li>
            <br />
            <li>Onchain: Protocol uses Bitcoin for data availability - low risk</li>
            <br />
            <li>
                Offchain via alternative consensus protocol: Data is primarily stored on another publicly available network and anyone can participate in running a full node, and there is a mechanism to verify that the data is made available - medium risk
            </li>
            <br />
            <li>Offchain DAC: State updates are stored via a centralized (or permissioned) committee and Bitcoin full nodes, and users cannot access that data - high risk</li>
            <br />
            <li>Offchain Single Server: State updates are stored via a centralized server and Bitcoin full nodes, and users cannot access that data - high risk</li>
            <br />
            <li>Not disclosed: Code and/or documentation relevant to this category has not been disclosed and we cannot assign a risk score - critical risk</li>
        </ul>

        <h2>Network Operators</h2>
        <ul>
            <li>Network is operated peer-to-peer Protocol doesn’t rely on third party operators - low risk</li>
            <br />
            <li>
                Network operator set is N > 21 and users can self sequence - low risk
                <ul>
                    <li>Sequencer designs can include Federated, Auction, PoS, DPoS, PoW</li>
                    <li>If network operator is N < 21, then moved to medium risk</li>
                </ul>
            </li>
            <br />
            <li>User can’t self sequence, but operator set is N > 21 - medium risk
                <ul>
                    <li>If operator set is N > 100 then move to low risk</li>
                    <li>Designs include: Auction, PoS, DPoS, PoW</li>
                </ul>
            </li>
            <br />
            <li>Federated operator set: Transactions are sequenced by an honest majority of participants in a permissioned, offchain consensus protocol/network - high risk</li>
            <br />
            <li>Centralized operator with no self-sequencing - high risk</li>
            <br />
            <li>Not disclosed: Code and/or documentation relevant to this category has not been disclosed and we cannot assign a risk score - critical risk</li>
        </ul>

        <!-- Continue adding the other sections like Settlement Assurance, Bridge Custody, etc. in the same way -->

        <h2>Summary</h2>
        <p>This framework can be easier to customize and provide more nuance given the number of scaling solutions that are present in Bitcoin today. For example, related to block production/network operators, we can add even more scoring mechanisms based on how decentralized the network is...</p>
    `;

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-8 p-8">
                <div className="text-2xl font-light text-zinc-800 leading-9">
                    Approach to analyzing risk
                </div>
                <div
                    className={`text-base font-normal text-slate-500 leading-normal ${styles["custom-ul"]}`}
                    dangerouslySetInnerHTML={{ __html: combinedBody }}
                />
            </div>
        </article>
    );
};

export default Methodology;
