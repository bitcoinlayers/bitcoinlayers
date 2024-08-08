import React from "react";
import { Layer } from "./layerProps";
import Image from "next/image";
import LayerDiamond from "./layerDiamond";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

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
        className="inline-block px-3 py-0.5 bg-white rounded-full border border-slate-300 justify-center items-center gap-2 flex transition duration-300 ease-in-out hover:bg-lightsecondary no-underline text-slate-600 text-sm font-normal leading-tight"
    >
        {children}
    </a>
);

const LayerOverview: React.FC<{ layer: Layer }> = ({ layer }) => {
    return (
        <section
            id="overview"
            className="flex lg:flex-row flex-col justify-between pt-6 gap-4 mb-12"
        >
            <div className="flex flex-col space-y-10 px-4 flex-grow w-full lg:w-1/4">
                <Categories layer={layer} />
                <Description layer={layer} />
                <div className="border-t border-stroke_secondary"></div>
                <Links layer={layer} />
            </div>
            <div className="mt-4 lg:mt-0 w-[350px] h-[350px] lg:h-[350px] lg:ml-0 ml-0">
                <LayerDiamond layer={layer} />
            </div>
        </section>
    );
};

export default LayerOverview;

const Categories: React.FC<{ layer: Layer }> = ({ layer }) => {
    return (
        <div className="lg:flex lg:justify-between w-full grid grid-cols-2 gap-4">
            <div className="flex-col lg:justify-center lg:items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Status
                </div>
                <div className="text-text_header">{layer.live}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Type
                </div>
                <div className="text-text_header">{layer.layerType}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Fee Token
                </div>
                <div className="text-text_header">{layer.feeToken}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    TVL
                </div>
                <div className="text-zinc-800 text-base font-normal leading-normal">
                    ₿ {layer.btcLocked}
                </div>
            </div>
        </div>
    );
};

const Description: React.FC<{ layer: Layer }> = ({ layer }) => {
    return (
        <div className="self-stretch text-text_secondary">
            {parseTextWithLinks(layer.description)}
        </div>
    );
};

const Links: React.FC<{ layer: Layer }> = ({ layer }) => {
    return (
        <div className="self-stretch flex lg:justify-start justify-center items-start gap-2 flex-wrap">
            <LinkButton href={String(layer.links[0])}>
                <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <Image
                            className="w-3.5 h-3.5"
                            src="/icons/homepage.svg"
                            alt="Website"
                            width={14}
                            height={14}
                        />
                    </div>
                </div>
                Website
            </LinkButton>
            <LinkButton href={String(layer.links[2])}>
                <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <Image
                            className="w-3.5 h-3.5"
                            src="/icons/docs.svg"
                            alt="Docs"
                            width={14}
                            height={14}
                        />
                    </div>
                </div>
                Docs
            </LinkButton>
            <LinkButton href={String(layer.links[3])}>
                <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <Image
                            className="w-3.5 h-3.5"
                            src="/icons/explorer.svg"
                            alt="Explorer"
                            width={14}
                            height={14}
                        />
                    </div>
                </div>
                Explorer
            </LinkButton>
            <LinkButton href={String(layer.links[4])}>
                <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <Image
                            className="w-3.5 h-3.5"
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={14}
                            height={14}
                        />
                    </div>
                </div>
                GitHub
            </LinkButton>
            <LinkButton href={String(layer.links[5])}>
                <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <Image
                            className="w-3.5 h-3.5"
                            src="/icons/twitter.svg"
                            alt="Social"
                            width={14}
                            height={14}
                        />
                    </div>
                </div>
                Twitter
            </LinkButton>
        </div>
    );
};
