import { Project, Site } from "@/content/props";
import { FileSearchIcon, FileTextIcon, GlobeIcon } from "lucide-react";
import { createElement, isValidElement } from "react";

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
        className="inline-block px-3 py-0.5 bg-background rounded-full border border-border justify-center items-center gap-2 transition duration-300 ease-in-out hover:bg-opacity-80 no-underline text-sm font-normal leading-tight"
    >
        {children}
    </a>
);

const ProjectLinks: React.FC<{ links: Project["links"] }> = ({ links }) => {
    const linkConfig = [
        { type: Site.Website, icon: GlobeIcon, alt: Site.Website },
        { type: Site.Docs, icon: FileTextIcon, alt: Site.Docs },
        {
            type: Site.Explorer,
            icon: FileSearchIcon,
            alt: Site.Explorer,
        },
        {
            type: Site.GitHub,
            icon: (
                <svg
                    role="img"
                    className="fill-current size-[14px]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            ),
            alt: Site.GitHub,
        },
        {
            type: Site.Twitter,
            icon: (
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current size-[14px]"
                >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
            ),
            alt: Site.Twitter,
        },
    ] as const satisfies readonly {
        type: Site;
        icon: React.ComponentType<{ className?: string }> | JSX.Element;
        alt: Site;
    }[];

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
                            <div className="flex items-center gap-1.5">
                                {isValidElement(configItem.icon)
                                    ? configItem.icon
                                    : configItem.icon &&
                                        typeof configItem.icon !== "string" &&
                                        "type" in configItem.icon
                                      ? configItem.icon
                                      : createElement(configItem.icon, {
                                            className: "size-3.5",
                                        })}
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
