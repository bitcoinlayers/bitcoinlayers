import Image from "next/image";
import LayerDiamond from "./layerDiamond";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Categories from "./categories";
import { Project, Site } from "@/content/props";

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

const LayerOverview: React.FC<{ layer: Project }> = ({ layer }) => {
    return (
        <section
            id="overview"
            className="flex lg:flex-row flex-col justify-between items-center lg:items-start pt-6 gap-4 mb-12"
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

const Description: React.FC<{ layer: Project }> = ({ layer }) => {
    return (
        <div className="self-stretch text-text_secondary">
            {parseTextWithLinks(layer.description)}
        </div>
    );
};

const Links: React.FC<{ layer: Project }> = ({ layer }) => {
    return (
        <div className="self-stretch flex lg:justify-start justify-center items-start gap-2 flex-wrap">
            {layer.links.find(link => link.text === Site.Website) && (
                <LinkButton href={String(layer.links.find(link => link.text === Site.Website)?.url)}>
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
            )}
            {layer.links.find(link => link.text === Site.Docs) && (
                <LinkButton href={String(layer.links.find(link => link.text === Site.Docs)?.url)}>
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
            )}
            {layer.links.find(link => link.text === Site.Explorer) && (
                <LinkButton href={String(layer.links.find(link => link.text === Site.Explorer)?.url)}>
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
            )}
            {layer.links.find(link => link.text === Site.GitHub) && (
                <LinkButton href={String(layer.links.find(link => link.text === Site.GitHub)?.url)}>
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
            )}
            {layer.links.find(link => link.text === Site.Twitter) && (
                <LinkButton href={String(layer.links.find(link => link.text === Site.Twitter)?.url)}>
                    <div className="bg-white/opacity-0 flex-col justify-center items-center inline-flex">
                        <div className="w-3.5 h-3.5 relative">
                            <Image
                                className="w-3.5 h-3.5"
                                src="/icons/twitter.svg"
                                alt="X"
                                width={14}
                                height={14}
                            />
                        </div>
                    </div>
                    Twitter
                </LinkButton>
            )}
        </div>
    );
};
