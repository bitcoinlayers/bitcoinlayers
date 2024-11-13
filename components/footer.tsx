import Link from "next/link";
import Image from "next/image";
import externalIcon from "/public/icons/external.png";
import type { ReactElement } from "react";
import { ExternalLinkIcon } from "lucide-react";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="self-stretch text-primary text-sm font-medium leading-tight">
        {children}
    </div>
);

const SectionItem = ({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) => (
    <div className="flex justify-start items-center gap-2">
        <Link href={href} className="flex justify-center items-center gap-2">
            <div className="text-muted-foreground text-sm font-normal leading-tight">
                {children}
            </div>
        </Link>
    </div>
);

const SectionItemExternal = ({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) => (
    <div className="flex justify-start items-center gap-2">
        <Link
            href={href}
            target="_blank"
            className="flex justify-center items-center gap-2"
        >
            <div className="text-muted-foreground text-sm font-normal leading-tight">
                {children}
            </div>
            <ExternalLinkIcon className="size-3 text-muted-foreground" />
        </Link>
    </div>
);

const FooterBottom = () => (
    <div className="w-full lg:h-[120px] h-[144px] lg:py-12 flex flex-col lg:justify-start justify-center items-center lg:gap-16">
        <div className="lg:h-6 px-4 flex flex-col justify-start items-start gap-16 w-full max-w-5xl">
            <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between items-center gap-y-3">
                <div className="text-muted-foreground text-base font-normal leading-normal">
                    Bitcoin Layers 2024 • MIT license
                </div>
                <div className="flex justify-start items-center gap-6">
                    <Link
                        href={"https://github.com/bitcoinlayers"}
                        target="_blank"
                        className="w-6 h-6 relative"
                    >
                        <svg
                            role="img"
                            className="fill-muted-foreground"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                    </Link>
                    <Link
                        href={"https://twitter.com/bitcoinlayers"}
                        target="_blank"
                        className="w-6 h-6 relative"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-muted-foreground"
                        >
                            <title>X</title>
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default function Footer(): ReactElement {
    return (
        <footer className="w-full">
            <div className="max-w-5xl mx-auto flex flex-col justify-start items-start">
                <div className="self-stretch lg:h-[404px] px-4 lg:pt-16 pt-6 lg:pb-12 flex flex-col justify-start items-center gap-16">
                    <div className="flex flex-col w-full justify-start items-center lg:gap-16 gap-8">
                        <div className="self-stretch h-[0px] bg-slate-100 flex flex-col justify-start items-center gap-2">
                            <div className="self-stretch h-[0px] border border-slate-300"></div>
                        </div>
                        <div className="self-stretch lg:flex justify-between lg:items-start space-y-8">
                            <div className="grow flex flex-col justify-start items-start gap-8">
                                <div className="self-stretch h-20 flex flex-col lg:justify-start items-start gap-4 justify-center pb-6 lg:pb-0">
                                    <div className="w-8 h-8 rounded-[21.33px] flex">
                                        <Image
                                            src="/logo_noborder.png"
                                            alt="Logo"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="self-stretch text-muted-foreground text-xs text-left">
                                        Not every bitcoin layer is equal.
                                        <br /> Learn the difference.
                                    </div>
                                </div>
                            </div>
                            <div className="grow lg:flex lg:h-[228px] justify-start items-start gap-8 grid grid-cols-2">
                                <div className="grow flex flex-col justify-start items-start gap-4">
                                    <SectionHeader>Reviews</SectionHeader>
                                    <div className="self-stretch lg:h-[188px] flex flex-col justify-start items-start gap-3">
                                        <SectionItem href="/">
                                            Layers
                                        </SectionItem>
                                        <SectionItem href="/?view=staking">
                                            Staking
                                        </SectionItem>
                                        <SectionItem href="/?view=wrappers">
                                            Wrappers
                                        </SectionItem>
                                        <SectionItem href="/ecash">
                                            Ecash
                                        </SectionItem>
                                        {/* <SectionItem href="/bitcoinonly">
                                            Bitcoin Only
                                        </SectionItem> */}
                                    </div>
                                </div>
                                <div className="grow flex flex-col justify-start items-start gap-4">
                                    <SectionHeader>Learn</SectionHeader>
                                    <div className="self-stretch lg:h-48 flex flex-col justify-start items-start gap-3">
                                        <SectionItem href="/analytics">
                                            Analytics
                                        </SectionItem>
                                        <SectionItem href="/glossary">
                                            Glossary
                                        </SectionItem>
                                        <SectionItem href="/faq">
                                            FAQ
                                        </SectionItem>
                                        <SectionItem href="/methodology">
                                            Methodology
                                        </SectionItem>
                                    </div>
                                </div>
                                <div className="grow flex flex-col justify-start items-start gap-4">
                                    <SectionHeader>Resources</SectionHeader>
                                    <div className="self-stretch h-[116px] flex flex-col justify-start items-start gap-3">
                                        <SectionItem href="/about">
                                            About
                                        </SectionItem>
                                        <SectionItem href="/contribute">
                                            Contribute
                                        </SectionItem>
                                        <SectionItemExternal href="https://www.lxresearch.co/">
                                            Research
                                        </SectionItemExternal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}
