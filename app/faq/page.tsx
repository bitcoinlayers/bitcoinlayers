import Link from "next/link";
import React from "react";

const FaqPage: React.FC = () => {
  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <h1>Frequently Asked Questions</h1>
        <p className="text-l dark:text-white">Can&apos;t find your answer? Reach out to us on <Link href="https://twitter.com/bitcoinlayers" target="_blank">Twitter</Link>.</p>
      <hr/>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What is the Bitcoin Layers site?</h2>
        <p className="pb-4">Bitcoin Layers is an educational tool dedicated to Bitcoin scaling. Currently, we are focusing on a module that outlines the risks associated with various scaling protocols that support Bitcoin and BTC the asset. We are also planning on building modules related to bridges, scaling infrastructure and opcodes that can support new variations of L2s.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What is a Bitcoin Layer?</h2>
        <p className="pb-4">We use the term &quot;Bitcoin Layer&quot; to describle protocols that claim to be Bitcoin Layer 2s. There are many definitions that exist for the term &quot;Layer 2&quot;, but the two primary ones are protocols that enable unilateral exit, and/or protocols that add more functionality to BTC the asset and inherit security from Bitcoin. We use the term &quot;Bitcoin Layer&quot; as an agnostic term to describe Layer 2s, sidechains and more. We do not define protcols as Layer 2s, as any offchain scaling protocol presents a different set of trust assumptions to users. We analyze these protocols against a generalized, opinionated framework that we developed to show users the relevant trust assumptions for each system.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Are all Bitcoin Layers &quot;L2s&quot;?</h2>
        <p className="pb-4">The overwhelming majority of newer Bitcoin &quot;Layer 2s&quot; are not Layer 2s in the classical defition. Bitcoin Layers is a broad term we use to cover offchain scaling protocols. People typically define L2s as protocols that take transaction execution offchain, but inherit security from its parent blockchain. Most consider unilateral exit as a primary criteria for being a “true L2”, which means that users retain self-custody of their BTC and can exit the L2 unilaterally whenever they choose.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Why are newer Bitcoin &quot;L2s&quot; receiving so much attention?</h2>
        <p className="pb-4">Bitcoin L2s are receiving attention for a number of reasons. Ordinals brought in a new wave of Bitcoin users, BitVM opened up a new design space for scaling protocols, and numerous stakeholders in the Bitcoin community believe that new types of scaling protocols should be implemented and experimented with. However, the majority of these protocols are launching with &quot;progressive decentralization&quot on their roadmap. This means that the protocols will launch as a federated sidechain, with hopes of adding Bitcoin-native security over time. Our site analyzes protocols against their current implementation, versus future roadmaps.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What are modular Bitcoin &quot;L2s&quot;?</h2>
        <p className="pb-4">A number of new projects are launching with modular scaling designs in mind. This means that each aspect of the transaction lifecycle would be managed by an indepedent actor. Roles such as transaction ordering, data availability and settlement would be distributed across a number of systems. These parties can range from single servers, federated commmittees and permissionless consensus protocols, varying in trust assumptions.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Are these newer &quot;L2s&quot; similar to projects in Ethereum?</h2>
        <p className="pb-4">A large percentage of these projects are forking popular Ethereum L2s and try to inherit similar designs. The difference between these Bitcoin chains, and L2s on Ethereum, is the trust assumptions related to the two-way peg and security inherited from the base layer. Current Bitcoin &quot;L2&quot; implementations largely do not inherit any security from the Bitcoin network or have a trust-minimized two-way peg.</p>
      </div>
    </article>
  );
};

export default FaqPage;
