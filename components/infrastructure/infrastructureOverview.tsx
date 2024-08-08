import React from "react";
import { Infrastructure } from "./infrastructureProps";
import Image from "next/image";
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

const Categories: React.FC<{ infrastructure: Infrastructure }> = ({
    infrastructure,
}) => {
    return (
        <div className="flex gap-12 w-full">
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Type
                </div>
                <div className="text-text_header">
                    {infrastructure.infrastructureType}
                </div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Purpose
                </div>
                <div className="text-text_header">{infrastructure.purpose}</div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Associated Layers
                </div>
                <div className="text-text_header">
                    {infrastructure.associatedLayers}
                </div>
            </div>
        </div>
    );
};

const Description: React.FC<{ infrastructure: Infrastructure }> = ({
    infrastructure,
}) => {
    return (
        <div className="self-stretch text-text_secondary">
            {parseTextWithLinks(infrastructure.description)}
        </div>
    );
};

const Links: React.FC<{ infrastructure: Infrastructure }> = ({
    infrastructure,
}) => {
    return (
        <div className="self-stretch flex justify-start items-start gap-4 flex-wrap">
            <LinkButton href={String(infrastructure.links[0])}>
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
            <LinkButton href={String(infrastructure.links[3])}>
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
            {/* <LinkButton href={String(infrastructure.links[3])}>
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
      </LinkButton> */}
            <LinkButton href={String(infrastructure.links[4])}>
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
            <LinkButton href={String(infrastructure.links[5])}>
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

const InfrastructureOverview: React.FC<{ infrastructure: Infrastructure }> = ({
    infrastructure,
}) => {
    return (
        <div className="flex justify-between pt-6 gap-4">
            <div className="flex flex-col space-y-10 mb-12 w-full">
                <Categories infrastructure={infrastructure} />
                <Description infrastructure={infrastructure} />
                <div className="border-t border-stroke_secondary"></div>
                <Links infrastructure={infrastructure} />
            </div>
        </div>
    );
};

export default InfrastructureOverview;
