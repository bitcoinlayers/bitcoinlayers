"use client";

import Image from "next/image";
import React, { useState } from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

const FaqPage: React.FC = () => {
    const FAQItem: React.FC<{ question: string; answer: string }> = ({
        question,
        answer,
    }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => setIsOpen(!isOpen);

        return (
            <div className="rounded-xl border border-border flex flex-col justify-center items-start gap-4 p-8">
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
                            width={16}
                            height={16}
                        />
                    </div>

                    <div className="text-3xl font-light leading-9">
                        {question}
                    </div>
                </div>
                {isOpen && (
                    <div className="flex flex-col justify-center items-start gap-8 w-full">
                        <div className="flex flex-col justify-start items-start gap-2 w-full">
                            <div className="text-base font-normal leading-normal">
                                {parseTextWithLinks(answer)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-8">
                <div className="w-full pt-8">
                    <div className="special_header sm:leading-[80px] text-8xl lg:text-10xl font-light">
                        Frequently Asked Questions
                    </div>
                </div>

                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <FAQItem
                                question="What is the Bitcoin Layers site?"
                                answer="Bitcoin Layers is an educational tool dedicated to bitcoin scaling. Currently, we are focusing on a module that outlines the risks associated with various scaling protocols that support bitcoin and BTC the asset."
                            />
                            <FAQItem
                                question="What is a bitcoin layer?"
                                answer='We use the term "bitcoin layer" to describe bitcoin native protocols and bitcoin sidesystems. Generally, bitcoin layers are protocol that either 1. enable unilateral exits or 2. have real integration with bitcoin the network (e.g., consensus, transaction finality, use of L1 scripts) or BTC the asset (e.g., unit of account or economic security). We additionally provide reviews and data on networks and wrappers that are not bitcoin layers, but instead on alternative L1s or others. We analyze all of these protocols against a generalized, opinionated framework that we developed to show users the relevant trust assumptions for each system.'
                            />
                            <FAQItem
                                question='Are all bitcoin layers "L2s"?'
                                answer='The overwhelming majority of newer bitcoin "Layer 2s" are not Layer 2s. Bitcoin layers is a broad term we use to cover offchain scaling protocols. People typically define L2s as protocols that take transaction execution offchain, but inherit security from its parent blockchain. Most consider unilateral exit as a primary criterion for being a “true L2”, which means that users retain self-custody of their BTC and can exit the L2, with an L1 transaction, whenever they choose.'
                            />
                            <FAQItem
                                question='Why are newer bitcoin "L2s" receiving so much attention?'
                                answer='Bitcoin L2s are receiving attention for a number of reasons. Ordinals brought in a new wave of bitcoin users, BitVM opened up a new design space for scaling protocols, and numerous stakeholders in the bitcoin community believe that new types of scaling protocols should be implemented and experimented with. However, the majority of these protocols are launching with "progressive decentralization" on their roadmap. This means that the protocols will launch as a federated sidechain, with hopes of adding bitcoin-native security over time. Our site analyzes protocols against their current implementation, versus future roadmaps.'
                            />
                            <FAQItem
                                question='What are modular bitcoin "L2s"?'
                                answer="A number of new projects are launching with modular scaling designs. This means that each aspect of the transaction lifecycle would be managed by an independent actor. Roles such as transaction ordering, data availability, and settlement would be distributed across several systems. These parties can range from single servers to federated committees to permissionless consensus protocols, varying in trust assumptions."
                            />
                            <FAQItem
                                question='Are these newer "L2s" similar to projects in Ethereum?'
                                answer='A large percentage of these projects are forking popular Ethereum L2s and trying to inherit similar designs. The difference between these bitcoin chains, and L2s on Ethereum, is the trust assumptions related to the two-way peg and security inherited from the base layer. Current bitcoin "L2" implementations largely do not inherit any security from the bitcoin network or do not have a trust-minimized two-way peg.'
                            />
                            <FAQItem
                                question="What is bitcoin's scaling roadmap focused on?"
                                answer="Bitcoin, unlike other ecosystems, does not have a unified scaling roadmap. This means that a number of different approaches are being implemented to support the scaling of bitcoin's throughput and transaction capacity. These range from custodial solutions, decentralized peer-to-peer networks and alternative blockchains. All of these solutions come with specific tradeoffs."
                            />
                            <FAQItem
                                question="How does Bitcoin Layers analyze risk related to sidechain protocols?"
                                answer="We analyze protocols against a general framework that covers four key aspects. We review who is maintaining custody of the funds used on the scaling protocol, who is storing the data related to the protocol's state, who is operating the network, and who is providing finality assurances. Each of these categories receives a score given the current state of the protocol. Users can use these scores as a part of their research related to bitcoin scaling protocols."
                            />
                            <FAQItem
                                question="Where does Bitcoin Layers get its data?"
                                answer="Bitcoin Layers has its own [data ingestion](https://github.com/bitcoinlayers/data-ingestion) pipeline with various sources, including our own nodes, public APIs, and providers such as Alchemy. Data is pulled every four hours. If data is not matching your favorite block explorer or Dune dashboard, it might be because of heuristics, such as removing double-counted supplies. Please feel free to reach out with questions or learn more."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FaqPage;
