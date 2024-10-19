import { Layer } from "./layerProps";
import Image from "next/image";
import LayerDiamond from "./layerDiamond";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { useTranslations } from "next-intl";
import Categories from "./categories";

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
        className="px-3 py-0.5 bg-white rounded-full border border-slate-300 justify-center items-center gap-2 flex transition duration-300 ease-in-out hover:bg-lightsecondary no-underline text-slate-600 text-sm font-normal leading-tight"
    >
        {children}
    </a>
);

const LayerOverview: React.FC<{ layer: Layer }> = ({ layer }) => {
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

const Description: React.FC<{ layer: Layer }> = ({ layer }) => {
    return (
        <div className="self-stretch text-text_secondary">
            {parseTextWithLinks(layer.description)}
        </div>
    );
};

const Links: React.FC<{ layer: Layer }> = ({ layer }) => {
    const t = useTranslations("layer");
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
                {t("website")}
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
                {t("docs")}
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
                {t("explorer")}
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
                {t("github")}
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
                {t("twitter")}
            </LinkButton>
        </div>
    );
};
