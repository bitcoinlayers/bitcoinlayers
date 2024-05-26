import React from "react";
import { Layer } from "./layerProps";
import Image from "next/image";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    className="inline-block px-3 py-0.5 bg-white rounded-full border border-slate-300 justify-center items-center gap-2 flex transition duration-300 ease-in-out hover:bg-lightsecondary no-underline text-slate-600 text-sm font-normal font-['Public Sans'] leading-tight"
  >
    {children}
  </a>
);

const Categories: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="flex-col justify-center items-start inline-flex">
        <div className="text-slate-600 text-sm font-normal font-['Public Sans'] leading-tight">Status</div>
        <div className="text-zinc-800 text-base font-normal font-['Public Sans'] leading-normal">Mainnet</div>
      </div>
      <div className="flex-col justify-center items-start inline-flex">
        <div className="text-slate-600 text-sm font-normal font-['Public Sans'] leading-tight">Type</div>
        <div className="text-zinc-800 text-base font-normal font-['Public Sans'] leading-normal">Ethereum Rollup</div>
      </div>
      <div className="flex-col justify-center items-start inline-flex">
        <div className="text-slate-600 text-sm font-normal font-['Public Sans'] leading-tight">Fee Token</div>
        <div className="text-zinc-800 text-base font-normal font-['Public Sans'] leading-normal">L-BTC</div>
      </div>
      <div className="flex-col justify-center items-start inline-flex">
        <div className="text-slate-600 text-sm font-normal font-['Public Sans'] leading-tight">TVL</div>
        <div className="text-zinc-800 text-base font-normal font-['Public Sans'] leading-normal">₿ 3,860</div>
      </div>
    </div>
  );
};

const Description: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <div className="self-stretch">
      {layer.description}
    </div>
  );
};
const Links: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <div className="self-stretch justify-start items-start gap-4 inline-flex">
      <LinkButton href={String(layer.links[0])}>
        <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
            <Image className="w-3.5 h-3.5 left-[-0px] top-0 absolute" src="/icons/homepage.svg" alt="Website" width={14} height={14} />
          </div>
        </div>
        Website
      </LinkButton>
      <LinkButton href={String(layer.links[2])}>
        <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
            <Image className="w-3.5 h-3.5 left-[-0px] top-0 absolute" src="/icons/docs.svg" alt="Docs" width={14} height={14} />
          </div>
        </div>
        Docs
      </LinkButton>
      <LinkButton href={String(layer.links[3])}>
        <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
            <Image className="w-3.5 h-3.5 left-[-0px] top-0 absolute" src="/icons/explorer.svg" alt="Explorer" width={14} height={14} />
          </div>
        </div>
        Explorer
      </LinkButton>
      <LinkButton href={String(layer.links[4])}>
        <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
            <Image className="w-3.5 h-3.5 left-[-0px] top-0 absolute" src="/icons/github.svg" alt="GitHub" width={14} height={14} />
          </div>
        </div>
        GitHub
      </LinkButton>
      <LinkButton href={String(layer.links[5])}>
        <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
          <div className="w-3.5 h-3.5 relative">
            <Image className="w-3.5 h-3.5 left-[-0px] top-0 absolute" src="/icons/twitter.svg" alt="Social" width={14} height={14} />
          </div>
        </div>
        Twitter
      </LinkButton>
    </div>
  );
};

const Radar: React.FC = () => {
  return (
    <div className="w-[372px] self-stretch flex-col justify-between items-center inline-flex">
      <div className="w-[372px] h-80 pl-9 pr-[37.14px] pt-[9px] pb-3 justify-center items-center inline-flex">
        <div className="w-[298.86px] h-[298.97px] relative">
          <div className="w-[272px] h-[272px] left-[15px] top-[15px] absolute">
            <div className="left-[130px] top-[113.90px] absolute text-slate-500 text-[8px] font-normal font-['Public Sans']">20</div>
            <div className="left-[130px] top-[86.70px] absolute text-slate-500 text-[8px] font-normal font-['Public Sans'] leading-snug">40</div>
            <div className="left-[130px] top-[59.50px] absolute text-slate-500 text-[8px] font-normal font-['Public Sans'] leading-snug">60</div>
            <div className="left-[130px] top-[32.30px] absolute text-slate-500 text-[8px] font-normal font-['Public Sans'] leading-snug">80</div>
            <div className="left-[129px] top-[5.10px] absolute text-slate-500 text-[8px] font-normal font-['Public Sans'] leading-snug">100</div>
            <div className="w-2 h-2 left-[132px] top-[64px] absolute bg-amber-400 rounded-full"></div>
            <div className="w-2 h-2 left-[119px] top-[132px] absolute bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 left-[131px] top-[170px] absolute bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 left-[169px] top-[132px] absolute bg-red-500 rounded-full"></div>
          </div>
          <div className="left-[243px] top-[195.55px] absolute origin-top-left -rotate-45 text-center text-slate-600 text-xs font-medium font-['Public Sans'] leading-none">Settlement</div>
          <div className="left-0 top-[136.87px] absolute origin-top-left -rotate-45 text-center text-slate-600 text-xs font-medium font-['Public Sans'] leading-none">Bridge</div>
          <div className="left-[165.14px] top-0 absolute origin-top-left rotate-45 text-center text-slate-600 text-xs font-medium font-['Public Sans'] leading-none">Data Availability</div>
          <div className="left-[75.14px] top-[212px] absolute origin-top-left rotate-45 text-center text-slate-600 text-xs font-medium font-['Public Sans'] leading-none">Network Operators</div>
        </div>
      </div>
    </div>
  );
};

const LayerOverview: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <div className="flex-col justify-start items-start gap-10 inline-flex">
      <Categories layer={layer} />
      <Description layer={layer} />
      <Links layer={layer} />
      <Radar /> //55 to 45 split with padding gap-16 inbetween
    </div>
  );
};

export default LayerOverview;
