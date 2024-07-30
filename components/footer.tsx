import Link from "next/link";
import Image from "next/image";
import type { ReactElement } from "react";

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="self-stretch text-slate-600 text-sm font-medium leading-tight">
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
            <div className="text-slate-500 text-sm font-normal leading-tight">
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
            <div className="text-slate-500 text-sm font-normal leading-tight">
                {children}
            </div>
        </Link>
    </div>
);

const FooterBottom = () => (
    <div className="w-full lg:h-[120px] h-[144px] lg:px-16 lg:py-12 bg-slate-50 flex flex-col lg:justify-start justify-center items-center lg:gap-16">
        <div className="lg:h-6 px-8 flex flex-col justify-start items-start gap-16 w-full">
            <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between items-center gap-y-3">
                <div className="text-slate-500 text-base font-normal leading-normal">
                    Bitcoin Layers 2024 • MIT license
                </div>
                <div className="flex justify-start items-center gap-6">
                    <Link
                        href={"https://github.com/bitcoinlayers"}
                        target="_blank"
                        className="w-6 h-6 relative"
                    >
                        <Image
                            className="w-6 h-6"
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link
                        href={"https://twitter.com/bitcoinlayers"}
                        target="_blank"
                        className="w-6 h-6 relative"
                    >
                        <Image
                            className="w-6 h-6"
                            src="/icons/twitter.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default function Footer(): ReactElement {
    return (
        <footer className="w-full">
            <div className="max-w-6xl mx-auto flex flex-col justify-start items-start">
                <div className="self-stretch lg:h-[404px] lg:px-16 px-6 lg:pt-16 pt-6 lg:pb-12 flex flex-col justify-start items-center gap-16">
                    <div className="flex flex-col w-full justify-start items-center lg:gap-16 gap-8">
                        <div className="self-stretch h-[0px] bg-slate-100 flex flex-col justify-start items-center gap-2">
                            <div className="self-stretch h-[0px] border border-slate-300"></div>
                        </div>
                        <div className="self-stretch lg:flex justify-between lg:items-start">
                            <div className="grow flex flex-col justify-start items-start gap-8">
                                <div className="self-stretch h-20 flex flex-col lg:justify-start items-start gap-4 justify-center pb-6 lg:pb-0">
                                    <div className="w-8 h-8 rounded-[21.33px] flex justify-center items-center lg:self-center">
                                        <Image
                                            src="/logo_noborder.png"
                                            alt="Logo"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="self-stretch text-slate-500 text-xs lg:text-center text-left">
                                        Not every bitcoin layer is equal.
                                        <br /> Learn the difference.
                                    </div>
                                </div>
                            </div>
                            <div className="grow lg:flex lg:h-[228px] justify-start items-start gap-8 grid grid-cols-2">
                                <div className="grow flex flex-col justify-start items-start gap-4">
                                    <SectionHeader>Risk Analysis</SectionHeader>
                                    <div className="self-stretch lg:h-[188px] flex flex-col justify-start items-start gap-3">
                                        <SectionItem href="/">
                                            Layers
                                        </SectionItem>
                                        {/* <SectionItem href="/bridges">
                                            Bridges
                                        </SectionItem> */}
                                        <SectionItem href="/infrastructure">
                                            Infrastructure
                                        </SectionItem>
                                        <SectionItem href="/bitcoinonly">
                                            Bitcoin Only
                                        </SectionItem>
                                        {/* <SectionItem href="/opcode">
                                            Opcodes
                                        </SectionItem> */}
                                        {/* <SectionItem href="/upcominglayers">
                                            Upcoming Layers
                                        </SectionItem> */}
                                    </div>
                                </div>
                                <div className="grow flex flex-col justify-start items-start gap-4">
                                    <SectionHeader>Learn</SectionHeader>
                                    <div className="self-stretch lg:h-48 flex flex-col justify-start items-start gap-3">
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
                                        <SectionItemExternal href="https://medium.com/@bitcoinlayers">
                                            Blog
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
