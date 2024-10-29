import { Project, Site } from "@/content/props";
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
        className="inline-block px-3 py-0.5 bg-white rounded-full border border-slate-300 justify-center items-center gap-2 transition duration-300 ease-in-out hover:bg-lightsecondary no-underline text-slate-600 text-sm font-normal leading-tight"
    >
        {children}
    </a>
);

const ProjectLinks: React.FC<{ links: Project["links"] }> = ({ links }) => {
    const linkConfig = [
        { type: Site.Website, icon: "/icons/homepage.svg", alt: Site.Website },
        { type: Site.Docs, icon: "/icons/docs.svg", alt: Site.Docs },
        {
            type: Site.Explorer,
            icon: "/icons/explorer.svg",
            alt: Site.Explorer,
        },
        { type: Site.GitHub, icon: "/icons/github.svg", alt: Site.GitHub },
        { type: Site.Twitter, icon: "/icons/twitter.svg", alt: Site.Twitter },
    ];

    return (
        <div className="self-stretch flex lg:justify-start justify-center items-start gap-2 flex-wrap">
            {links.map((link) => {
                // Check if it's a predefined link type
                const configItem = linkConfig.find(
                    ({ type }) => type === link.text,
                );

                if (configItem) {
                    return (
                        <LinkButton
                            key={String(link.text)}
                            href={String(link.url)}
                        >
                            <div className="flex items-center">
                                <div className="bg-white/opacity-0">
                                    <Image
                                        className="w-3.5 h-3.5 mr-1.5"
                                        src={configItem.icon}
                                        alt={configItem.alt}
                                        width={14}
                                        height={14}
                                    />
                                </div>
                                {link.text}
                            </div>
                        </LinkButton>
                    );
                }

                // Handle custom link text
                return (
                    <LinkButton key={String(link.text)} href={String(link.url)}>
                        <div className="flex items-center">{link.text}</div>
                    </LinkButton>
                );
            })}
        </div>
    );
};

export default ProjectLinks;
