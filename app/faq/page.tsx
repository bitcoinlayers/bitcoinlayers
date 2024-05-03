import Link from "next/link";
import React from "react";

const FaqPage: React.FC = () => {
  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <h1>Frequently Asked Questions</h1>
        <p className="text-l dark:text-white">Can&apos;t find your answer? Reach out to us on <Link href="https://twitter.com/bitcoinlayers" target="_blank">Twitter</Link>.</p>
      <hr />
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What is Bitcoin Layers?</h2>
        <p className="pb-4">Bitcoin Layers is an educational tool that helps users understand the risks associated with various protocols that support Bitcoin and BTC the asset. We analyze risk primarily for protocols that claim to be a Bitcoin L2.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What is a Bitcoin Layer?</h2>
        <p className="pb-4">A “Bitcoin Layer” is a protocol that provides more functionality for Bitcoin the protocol or BTC the asset. While it can be an onchain protocol like Ordinals, Bitcoin Layers focuses on analyzing risk for protocols that claim to be Bitcoin L2s. These protocols have range of different security assumptions, which propose different sets of risks to the users. We have a perform a general risk assessment on each protocol, and also outline some specific nuances related to each protocol.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Are all Bitcoin Layers &quot;L2s&quot;?</h2>
        <p className="pb-4">No, Bitcoin Layers is a broad term we use to cover offchain scaling protocols. L2s are offchain protocols where users deposit their BTC into the protocol to leverage features that are not available on the Bitcoin layer 1. We consider unilateral exit as a primary criteria for being a “true L2”, which means that users retain self-custody of their BTC and can exit the L2 whenever they choose. If an L2 does not enable this, we recommend users take caution when interacting with the protocol.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Are there any Bitcoin L2s in production?</h2>
        <p className="pb-4">Lightning and statechains are both in production today. These models are different in their design, but both enable users to withdraw their funds from the L2 in the event of censorship. Other L2s, like BitVM rollups, rely on a 1-N trust assumption for the custody of user funds. Other protocols, like Fedimints, see users give up custody for either privacy or convenience. It’s worth noting that over 80% of lightning adoption is done through custodial wallets due to complexity. Some of these wallets have stopped servicing US users due to regulatory concerns.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Why are Bitcoin L2s receiving so much attention?</h2>
        <p className="pb-4">Bitcoin L2s are receiving attention for a number of reasons. Ordinals brought in a new wave of Bitcoin users, BitVM opened up a new design space for scaling protocols, and numerous stakeholders in the Bitcoin community believe that new types of scaling protocols should be implemented and experimented with.</p>
      </div>
    </article>
  );
};

export default FaqPage;
