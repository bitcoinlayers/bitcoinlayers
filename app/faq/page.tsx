"use client";

import Image from "next/image";
import React, { useState } from "react";

const FaqPage: React.FC = () => {
    const FAQItem: React.FC<{ question: string; answer: string }> = ({
        question,
        answer,
    }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => setIsOpen(!isOpen);

        return (
            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={toggleOpen}
                >
                    <div
                        className={`flex items-center justify-center w-6 h-6 transform ${isOpen ? "" : "rotate-180"}`}
                    >
                        <Image
                            src="/icons/vector.svg"
                            alt="Toggle Arrow"
                            width={20}
                            height={20}
                        />
                    </div>

                    <div className="text-3xl font-light text-zinc-800 leading-9">
                        {question}
                    </div>
                </div>
                {isOpen && (
                    <div className="flex flex-col justify-center items-start gap-8 w-full">
                        <div className="flex flex-col justify-start items-start gap-2 w-full">
                            <div className="text-base font-normal text-slate-500 leading-normal">
                                {answer}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow h-20">
                            Frequently Asked Questions
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <FAQItem
                                question="What is the Bitcoin Layers site?"
                                answer="Bitcoin Layers is an educational tool dedicated to Bitcoin scaling. Currently, we are focusing on a module that outlines the risks associated with various scaling protocols that support Bitcoin and BTC the asset. We are also planning on building modules related to bridges, scaling infrastructure and opcodes that can support new variations of L2s."
                            />
                            <FAQItem
                                question="What is a Bitcoin Layer?"
                                answer='We use the term "Bitcoin Layer" to describle Bitcoin Layer 2s, sidechains and other scaling protocols. There are many definitions that exist for the term "Layer 2". We view Layer 2s as protocols that enable unilateral exit. Others extend this definition to a system where any online party can participate in the security of a two-way peg. We use the term "Bitcoin Layer" as an agnostic term to describe a variety of scaling protocols, including Layer 2s. We analyze all of these protocols against a generalized, opinionated framework that we developed to show users the relevant trust assumptions for each system.'
                            />
                            <FAQItem
                                question='Are all Bitcoin Layers "L2s"?'
                                answer='The overwhelming majority of newer Bitcoin "Layer 2s" are not Layer 2s. Bitcoin Layers is a broad term we use to cover offchain scaling protocols. People typically define L2s as protocols that take transaction execution offchain, but inherit security from its parent blockchain. Most consider unilateral exit as a primary criteria for being a “true L2”, which means that users retain self-custody of their BTC and can exit the L2, with an L1 transaction, whenever they choose.'
                            />
                            <FAQItem
                                question='Why are newer Bitcoin "L2s" receiving so much attention?'
                                answer='Bitcoin L2s are receiving attention for a number of reasons. Ordinals brought in a new wave of Bitcoin users, BitVM opened up a new design space for scaling protocols, and numerous stakeholders in the Bitcoin community believe that new types of scaling protocols should be implemented and experimented with. However, the majority of these protocols are launching with "progressive decentralization" on their roadmap. This means that the protocols will launch as a federated sidechain, with hopes of adding Bitcoin-native security over time. Our site analyzes protocols against their current implementation, versus future roadmaps.'
                            />
                            <FAQItem
                                question='What are modular Bitcoin "L2s"?'
                                answer="A number of new projects are launching with modular scaling designs in mind. This means that each aspect of the transaction lifecycle would be managed by an indepedent actor. Roles such as transaction ordering, data availability and settlement would be distributed across a number of systems. These parties can range from single servers, federated commmittees and permissionless consensus protocols, varying in trust assumptions."
                            />
                            <FAQItem
                                question='Are these newer "L2s" similar to projects in Ethereum?'
                                answer='A large percentage of these projects are forking popular Ethereum L2s and try to inherit similar designs. The difference between these Bitcoin chains, and L2s on Ethereum, is the trust assumptions related to the two-way peg and security inherited from the base layer. Current Bitcoin "L2" implementations largely do not inherit any security from the Bitcoin network or have a trust-minimized two-way peg.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FaqPage;
