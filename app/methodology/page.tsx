import React from "react";

const Methodology: React.FC = () => {
    function InfoBox({ title, body }: { title: string; body: string }) {
        return (
            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-light text-zinc-800 leading-9">
                        {title}
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-8 w-full">
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                        <div className="text-base font-normal text-slate-500 leading-normal">
                            {body}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // const FAQItem: React.FC<{ title: string; body: string }> = ({
    //     title,
    //     body,
    // }) => {
    //     const [isOpen, setIsOpen] = useState(false);

    //     const toggleOpen = () => setIsOpen(!isOpen);

    //     return (
    //         <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
    //             <div
    //                 className="flex items-center gap-3 cursor-pointer"
    //                 onClick={toggleOpen}
    //             >
    //                 <div
    //                     className={`flex items-center justify-center w-6 h-6 transform ${isOpen ? "" : "rotate-180"}`}
    //                 >
    //                     <Image
    //                         src="/icons/vector.svg"
    //                         alt="Toggle Arrow"
    //                         width={20}
    //                         height={20}
    //                     />
    //                 </div>

    //                 <div className="text-3xl font-light text-zinc-800 leading-9">
    //                     {title}
    //                 </div>
    //             </div>
    //             {isOpen && (
    //                 <div className="flex flex-col justify-center items-start gap-8 w-full">
    //                     <div className="flex flex-col justify-start items-start gap-2 w-full">
    //                         <div className="text-base font-normal text-slate-500 leading-normal">
    //                             {body}
    //                         </div>
    //                     </div>
    //                 </div>
    //             )}
    //         </div>
    //     );
    // };

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow h-20">
                            Approach to analyzing risk
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        {" "}
                        {/**https://bitcoin-layers.gitbook.io/bitcoin-layers/approach-to-analyzing-risk */}
                        <div className="flex flex-col gap-8 w-full">
                            <InfoBox
                                title="This is the framework we use to analyze sidechains, L2s and other scaling protocols"
                                body="We analyze protocols on four categories: Data availability, network operators, settlement assurance (a.k.a finality), and the bridge custody (or two-way peg).

Protocols do not receive an overall score, but a risk summary is added at the beginning of every assessment to highlight risk areas that can be critical.

For example, if an optimium uses an offchain data availability solution that is a single server, then it only takes collusion between a sequencer and the operator of the DA server to steal everyone’s funds. This is a critical and should be noted in the summary.

Let’s review how protocols can potentially be assessed."
                            />
                            <InfoBox
                                title="Data Availability"
                                body="Self-hosted: User can store data related to scaling protocol transactions locally - low risk

Onchain: Protocol uses Bitcoin for data availability - low risk

Offchain via alternative consensus protocol: Data is primarily stored on another publicly available, decentralized network and there is a mechanism to verify that the data is made available - medium risk

If the network sees N < 21 operators participating in the network, then it is high risk

If the network sees N > 100 operators participating in the network, then it is low risk

If no mechanism to detect fraud (e.g. DA withholding attack), then high risk

Offchain DAC: State updates are stored via a centralized (or permissioned) committee and Bitcoin full nodes, and users, cannot access that data - high risk

Offchain Single Server: State updates are stored via a centralized server and Bitcoin full nodes, and users, cannot access that data - high risk

Not disclosed: Code and/or documentation relevant to this category has not been disclosed and we cannot assign a risk score - critical risk"
                            />
                            <InfoBox
                                title="Network Operators"
                                body="Network is operated peer-to-peer Protocol doesn’t rely on third party operators - low risk

Network operator set is N > 21 and users can self sequence - low risk

Sequencer designs can include of this Federated, Auction, PoS, DPoS, PoW

If network operator is N < 21 , then moved to medium risk

User can’t self sequence, but operator set is N > 21 - medium risk

If operator set is N > 100 then move to low risk

Designs include: Auction, PoS, DPoS, PoW

Federated operator set: Transactions are sequenced by an honest majority of participants in a permissioned, offchain consensus protocol/network - high risk

Centralized operator with no self-sequencing - high risk

Not disclosed: Code and/or documentation relevant to this category has not been disclosed and we cannot assign a risk score - critical risk"
                            />
                            <InfoBox
                                title="Settlement Assurance"
                                body="Bitcoin-equivalent: Settlement happens on, or is enforced by, Bitcoin script and/or consensus participants - low risk

Onchain, optimistic settlement: Settlement happens through an onchain challenge response protocol - low risk

Note: BitVM2 sees challenger/verifier role be permissionless

If permissioned, medium risk

Offchain via alternative, permissionless consensus mechanism: Settlement is managed offchain by a permissionless consensus protocol and/or network of nodes - medium risk

Federated: Settlement for the layer is finalized by an honest majority of participants in a permissioned, offchain consensus protocol/network - high risk

Offchain via single server: Settlement for the layer is finalized by one party - high risk

Not disclosed: Code and/or documentation relevant to this category has not been disclosed and we cannot assign a risk score - critical risk

Edge case:

If the protocol has no fraud proofs, then it is high risk"
                            />
                            <InfoBox
                                title="Bridge Custody"
                                body="No custody with unilateral exit enforced by an L1 transaction - low risk

If users can not bypass centralized operator for withdrawals, move to medium and note criticial risk that withdrawals can be paused indefinitely, but not stolen

If no state validation mechanism in place, and network operator(s) can collude and post fradulent state roots to steal funds, then move to high risk

No custody with optimistic settlement - low risk

The two-way peg is federated, but anyone can participate as a watchtower/challenger and challenge malicious withdrawals - low risk

If watchtower role is federated, move to medium risk. If N < 21 watchtowers, move to high risk

The two-way peg is governed by an alternative, consensus mechanism - medium risk

If operators do not post collateral, and there is no mechanism to slash this collateral, then high risk

If collateral posted by bridge operators does not exceed the amount of BTC, and there is no 'liveness ratio' in place, then high risk

If outsourced to an alternative consensus mechanism, that is not the same consensus mechanism as the chain, then high risk

The protocol has an honest-majority federation securing its two way peg - high risk

The protocol doesn’t enable unilateral exit, and its two way peg is managed by centralized parties - high risk

Not disclosed: Code and/or documentation relevant to this category has not been disclosed and we cannot assign a risk score - critical risk

Edge case: 

Users can unilaterally exit, but network operators can collude with other network participants to steal funds, and there is no way to challenge fraud - medium risk"
                            />
                            <InfoBox
                                title="Additional questions related to security derived from Bitcoin"
                                body="Can users unilaterally exit the l2 and/or bridge that is custodying their funds?

Yes/no

Insert how

Does the protocol inherit security from Bitcoin miners, full nodes or BTC the asset?

Yes/no

Insert how

Does an alternative token play a role in network security/permitting withdrawals?

Yes/no

Insert how

Does the protocol create risks for MEV at the protocol, and base layer, level?

Yes/no

Insert how

Does the protocol pay fees to Bitcoin miners?

Yes/no

Insert how"
                            />
                            <InfoBox
                                title="Additional context related to potential risks"
                                body="Some context related to risks with certain protocols may not be covered directly in our risk assessment. This can be covered in an 'additional considerations' section that outlines relevant information. An example of this could be acknowledging that the majority of Lightning Network adoption is by way of custodial providers."
                            />
                            <InfoBox
                                title="Critical risk acknowledgement"
                                body="If a protocol has a critical risk item, even if not directly covered in our risk assessment, it should be clarified at the beginning of the review. An example of a critical risk, that is out of scope for our assessment, is a rollup settling on an EVM sidechain with immediately upgrade-able contracts. This does not fit into our risk assessment directly, but should be acknowledged at the top of the overall review."
                            />
                            <InfoBox
                                title="Summary"
                                body="This framework can be easier to customize and provide more nuance given the number of scaling solutions that are present in Bitcoin today. For example, related to block production/network operators, we can add even more scoring mechanisms based on how decentralized the network is. E.g. A network with 200 validators is better than a network with 10, and we can customize the assessment to highlight this.

This risk assessment is an initial starting point to analyze Bitcoin scaling protocols. It is a living document and is subject to change.

Bitcoin does not have a unified scaling roadmap. There are tradeoffs with every protocol being implemented to support Bitcoin scaling. This framework hopes to capture some of the nuance related to the various designs being proposed.

If you have comments on this framework, please consider joining our community chat to discuss." //TODO add link https://t.me/+8rv-1I2gkmQ4ZmJh
                            />
                            <InfoBox
                                title="Clarifying point(s)"
                                body="We define permissionless as meaning anyone with sufficient capital and resources can participate in consensus, operating a node, block production, etc."
                            />
                            {/* <InfoBox title="" body="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Methodology;
