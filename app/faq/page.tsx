import Link from "next/link";
import React from "react";

const FaqPage: React.FC = () => {
  function FAQItem({
    question,
    answer,
  }: {
    question: string;
    answer: string;
  }) {
    return (
      <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
        <div className="flex items-center gap-3">
          <div className="rotate-180 flex items-center justify-center w-6 h-6">
            <div className="relative w-6 h-6 rotate-180" />{ /** TODO add toggle for open/close */}
          </div>
          <div className="text-3xl font-light text-zinc-800 leading-9">
            {question}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 w-full">
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <div className="text-base font-normal text-slate-500 leading-normal">
              {answer}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                question="What is Bitcoin Layers?"
                answer="Bitcoin Layers is an educational tool that helps users understand the risks associated with various protocols that support Bitcoin and BTC the asset. We analyze risk primarily for protocols that claim to be a Bitcoin L2."
              />
              <FAQItem
                question="What is a Bitcoin Layer?"
                answer='We use the term "Bitcoin Layer" to describle protocols that claim to be Bitcoin Layer 2s. It&apos;s our opinion that none of the protocols in production, aside from lightning, are Layer 2s. This is because these protocols typically do not enable unilateral exit. Additionally, most of these protocols have their own consensus mechanism that does not inherit security from Bitcoin consensus participants. It is our view that the majority of protocols coming to market are sidechains. These protocols have range of different security assumptions, which propose different sets of risks to the users. We have a perform a general risk assessment on each protocol, and also outline some specific nuances related to each protocol.'
              />
              <FAQItem
                question="Are all Bitcoin Layers 'L2s'?"
                answer="As mentioned above, no. The overwhelming majority of these protocols are not Layer 2s. Bitcoin Layers is a broad term we use to cover offchain scaling protocols. L2s are offchain protocols where users deposit their BTC into the protocol to leverage features that are not available on the Bitcoin layer 1. We consider unilateral exit as a primary criteria for being a “true L2”, which means that users retain self-custody of their BTC and can exit the L2 whenever they choose."
              />
              <FAQItem
                question="Are there any Bitcoin L2s in production?"
                answer="Lightning is in production today. Other proposed scaling designs, like BitVM rollups, would rely on a 1-N trust assumption for the custody of user funds."
              />
              <FAQItem
                question='Why are newer Bitcoin "L2s" receiving so much attention?'
                answer='Bitcoin L2s are receiving attention for a number of reasons. Ordinals brought in a new wave of Bitcoin users, BitVM opened up a new design space for scaling protocols, and numerous stakeholders in the Bitcoin community believe that new types of scaling protocols should be implemented and experimented with. However, the majority of these protocols are launching with "progressive decentralization&quot on their roadmap. This means that the protocols will launch as a federated sidechain, with hopes of adding Bitcoin-native security over time. Our site analyzes protocols against their current implementation, versus future roadmaps.'
              />
              <FAQItem
                question='What are modular Bitcoin "L2s"?'
                answer="A number of new projects are launching with modular scaling designs in mind. This means that each aspect of the transaction lifecycle would be managed by an indepedent actor. Roles such as transaction ordering, data availability and settlement would be distributed across a number of actors. These parties can range from single servers, federated commmittees and permissionless consensus protocols, varying in trust assumptions."
              />
              <FAQItem
                question='Are these newer "L2s" similar to projects in Ethereum?'
                answer='A large percentage of these projects are launching forks of popular Ethereum scaling SDKs. The difference between Bitcoin sidechains, and L2s on Ethereum, is the trust assumptions related to the two-way peg and security inherited from the base layer. Current Bitcoin "L2s" implementations largely do not inherit any security from the Bitcoin network.'
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FaqPage;
