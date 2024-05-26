import Link from "next/link";
import React from "react";

const FaqPage: React.FC = () => {
  return (
    <article className="">
      <div className="left-[204.50px] top-[102px] absolute flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[1024px] justify-start items-center gap-8 inline-flex">
          <div className="grow shrink basis-0 h-[156px] justify-start items-center gap-[30px] flex">
            <div className="grow shrink basis-0 h-20 special_header">
              Frequently Asked Questions
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 rounded-md flex-col justify-start items-end gap-12 inline-flex">
            <div className="self-stretch h-[652px] flex-col justify-start items-center gap-8 flex">
              <div className="self-stretch h-[156px] px-8 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 origin-top-left rotate-180 justify-center items-center flex">
                    <div className="w-6 h-6 relative origin-top-left rotate-180 flex-col justify-start items-start flex"></div>
                  </div>
                  <div className="text-zinc-800 text-3xl font-light font-['Public Sans'] leading-9">
                    What is Bitcoin Layers?
                  </div>
                </div>
                <div className="self-stretch h-12 flex-col justify-center items-end gap-8 flex">
                  <div className="self-stretch h-12 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-slate-500 text-base font-normal font-['Public Sans'] leading-normal">
                      Bitcoin Layers is an educational tool that helps users
                      understand the risks associated with various protocols
                      that support Bitcoin and BTC the asset. We analyze risk
                      primarily for protocols that claim to be a Bitcoin L2.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[92px] px-8 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative origin-top-left rotate-180 flex-col justify-start items-start flex"></div>
                  </div>
                  <div className="text-zinc-800 text-3xl font-light font-['Public Sans'] leading-9">
                    What is a Bitcoin Layer?
                  </div>
                </div>
                <div className="w-[49px] h-[0px] border border-orange-600"></div>
              </div>
              <div className="self-stretch h-[92px] px-8 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative origin-top-left rotate-180 flex-col justify-start items-start flex"></div>
                  </div>
                  <div className="text-zinc-800 text-3xl font-light font-['Public Sans'] leading-9">
                    Are all Bitcoin Layers "L2s"?
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[92px] px-8 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative origin-top-left rotate-180 flex-col justify-start items-start flex"></div>
                  </div>
                  <div className="text-zinc-800 text-3xl font-light font-['Public Sans'] leading-9">
                    Are there any Bitcoin L2s in production?
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[92px] px-8 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative origin-top-left rotate-180 flex-col justify-start items-start flex"></div>
                  </div>
                  <div className="text-zinc-800 text-3xl font-light font-['Public Sans'] leading-9">
                    Why are Bitcoin L2s receiving so much attention?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[46px] pr-8 left-0 top-0 absolute bg-white flex-col justify-start items-end gap-2 inline-flex">
        <div className="h-[46px] justify-start items-center inline-flex">
          <div className="w-[108px] self-stretch px-5 bg-white/opacity-0 justify-start items-center gap-[5px] flex">
            <div className="text-slate-500 text-sm font-normal font-['Public Sans'] leading-tight">
              Analysis
            </div>
            <div className="w-2 h-2 relative"></div>
          </div>
          <div className="w-[98px] self-stretch px-5 bg-white/opacity-0 justify-start items-center gap-2.5 flex">
            <div className="text-slate-500 text-sm font-normal font-['Public Sans'] leading-tight">
              Glossary
            </div>
          </div>
          <div className="w-[68px] self-stretch px-5 bg-white/opacity-0 justify-start items-center gap-2.5 flex">
            <div className="text-orange-600 text-sm font-medium font-['Public Sans'] leading-snug">
              FAQ
            </div>
          </div>
          <div className="w-[126px] self-stretch px-5 bg-white/opacity-0 justify-start items-center gap-2.5 flex">
            <div className="text-slate-500 text-sm font-normal font-['Public Sans'] leading-tight">
              Methodology
            </div>
          </div>
          <div className="px-5 bg-white/opacity-0 justify-start items-center gap-2.5 flex">
            <div className="text-slate-500 text-sm font-normal font-['Public Sans'] leading-tight">
              Blog
            </div>
          </div>
        </div>
        <div className="w-8 h-8 rounded-[21.33px] justify-center items-center inline-flex">
          <div className="w-8 h-8 relative bg-orange-600 flex-col justify-start items-start flex">
            <div className="w-[14.18px] h-[28.37px] relative"></div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="w-[14.09px] h-[12.57px] bg-white rounded-full"></div>
              <div className="w-[14.09px] h-[12.57px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
    // <article className="py-6 prose dark:prose-invert max-w-5xl mx-auto pb-12">
    //   <h1 className="special_header">Frequently Asked Questions</h1>
    //     <p className="text-l dark:text-white">Can&apos;t find your answer? Reach out to us on <Link href="https://twitter.com/bitcoinlayers" target="_blank">Twitter</Link>.</p>
    //   <hr/>
    //   <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
    //     <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What is the Bitcoin Layers site?</h2>
    //     <p className="pb-4">Bitcoin Layers is an educational tool dedicated to Bitcoin scaling. Currently, we are focusing on a module that helps users understand the risks associated with various protocols that support Bitcoin and BTC the asset. We are also planning on building modules related to bridges, scaling infrastructure and opcodes that can support new variations of L2s.</p>
    //   </div>
    //   <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
    //     <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What is a Bitcoin Layer?</h2>
    //     <p className="pb-4">We use the term &quot;Bitcoin Layer&quot; to describle protocols that claim to be Bitcoin Layer 2s. It&apos;s our opinion that none of the protocols in production, aside from lightning, are Layer 2s. This is because these protocols typically do not enable unilateral exit. Additionally, most of these protocols have their own consensus mechanism that does not inherit security from Bitcoin consensus participants. It is our view that the majority of protocols coming to market are sidechains. These protocols have range of different security assumptions, which propose different sets of risks to the users. We have a perform a general risk assessment on each protocol, and also outline some specific nuances related to each protocol.</p>
    //   </div>
    //   <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
    //     <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Are all Bitcoin Layers &quot;L2s&quot;?</h2>
    //     <p className="pb-4">As mentioned above, no. The overwhelming majority of these protocols are not Layer 2s. Bitcoin Layers is a broad term we use to cover offchain scaling protocols. L2s are offchain protocols where users deposit their BTC into the protocol to leverage features that are not available on the Bitcoin layer 1. We consider unilateral exit as a primary criteria for being a “true L2”, which means that users retain self-custody of their BTC and can exit the L2 whenever they choose.</p>
    //   </div>
    //   <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
    //     <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Are there any Bitcoin L2s in production?</h2>
    //     <p className="pb-4">Lightning is in production today. Other proposed scaling designs, like BitVM rollups, would rely on a 1-N trust assumption for the custody of user funds.</p>
    //   </div>
    //   <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
    //     <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Why are newer Bitcoin &quot;L2s&quot; receiving so much attention?</h2>
    //     <p className="pb-4">Bitcoin L2s are receiving attention for a number of reasons. Ordinals brought in a new wave of Bitcoin users, BitVM opened up a new design space for scaling protocols, and numerous stakeholders in the Bitcoin community believe that new types of scaling protocols should be implemented and experimented with. However, the majority of these protocols are launching with &quot;progressive decentralization&quot on their roadmap. This means that the protocols will launch as a federated sidechain, with hopes of adding Bitcoin-native security over time. Our site analyzes protocols against their current implementation, versus future roadmaps.</p>
    //   </div>
    //   <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
    //     <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">What are modular Bitcoin &quot;L2s&quot;?</h2>
    //     <p className="pb-4">A number of new projects are launching with modular scaling designs in mind. This means that each aspect of the transaction lifecycle would be managed by an indepedent actor. Roles such as transaction ordering, data availability and settlement would be distributed across a number of actors. These parties can range from single servers, federated commmittees and permissionless consensus protocols, varying in trust assumptions.</p>
    //   </div>
    //   <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
    //     <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">Are these newer &quot;L2s&quot; similar to projects in Ethereum?</h2>
    //     <p className="pb-4">A large percentage of these projects are launching forks of popular Ethereum scaling SDKs. The difference between Bitcoin sidechains, and L2s on Ethereum, is the trust assumptions related to the two-way peg and security inherited from the base layer. Current Bitcoin &quot;L2s&quot; implementations largely do not inherit any security from the Bitcoin network.</p>
    //   </div>
    // </article>
  );
};

export default FaqPage;
