import Link from "next/link";
import Image from "next/image";
import externalIcon from "/public/icons/external.png";
import type { ReactElement } from "react";
import { useTranslations } from "next-intl";

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
            <Image
                src={externalIcon}
                alt="External Link"
                width={10}
                height={10}
                className="ml-1"
            />
        </Link>
    </div>
);

const FooterBottom = () => {
    const t = useTranslations("footer");
    return (
        <div className="w-full lg:h-[120px] h-[144px] lg:px-16 lg:py-12 bg-slate-50 flex flex-col lg:justify-start justify-center items-center lg:gap-16">
            <div className="lg:h-6 px-8 flex flex-col justify-start items-start gap-16 w-full">
                <div className="w-full flex lg:flex-row flex-col-reverse lg:justify-between items-center gap-y-3">
                    <div className="text-slate-500 text-base font-normal leading-normal">
                        {t("bitcoin-layers-2024-mit-license")}
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
};

export default function Footer(): ReactElement {
    const t = useTranslations("footer");
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
                                        {t("not-every-bitcoin-layer-is-equal")}
                                        <br /> {t("learn-the-difference")}
                                    </div>
                                </div>
                            </div>
                            <div className="grow lg:flex lg:h-[228px] justify-start items-start gap-8 grid grid-cols-2">
                                <div className="grow flex flex-col justify-start items-start gap-4">
                                    <SectionHeader>
                                        {t("risk-analysis")}
                                    </SectionHeader>
                                    <div className="self-stretch lg:h-[188px] flex flex-col justify-start items-start gap-3">
                                        <SectionItem href="/">
                                            {t("layers")}
                                        </SectionItem>
                                        <SectionItem href="/staking">
                                            {t('staking')}
                                        </SectionItem>
                                        <SectionItem href="/bridges">
                                            {t('bridges')}
                                        </SectionItem>
                                        <SectionItem href="/ecash">
                                            {t('ecash')}
                                        </SectionItem>
                                        <SectionItem href="/bitcoinonly">
                                            {t("bitcoin-only")}
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
                                    <SectionHeader>{t("learn")}</SectionHeader>
                                    <div className="self-stretch lg:h-48 flex flex-col justify-start items-start gap-3">
                                        <SectionItem href="/glossary">
                                            {t("glossary")}
                                        </SectionItem>
                                        <SectionItem href="/faq">
                                            {t("faq")}
                                        </SectionItem>
                                        <SectionItem href="/methodology">
                                            {t("methodology")}
                                        </SectionItem>
                                    </div>
                                </div>
                                <div className="grow flex flex-col justify-start items-start gap-4">
                                    <SectionHeader>
                                        {t("resources")}
                                    </SectionHeader>
                                    <div className="self-stretch h-[116px] flex flex-col justify-start items-start gap-3">
                                        <SectionItem href="/about">
                                            {t("about")}
                                        </SectionItem>
                                        <SectionItem href="/contribute">
                                            {t("contribute")}
                                        </SectionItem>
                                        <SectionItemExternal href="https://www.lxresearch.co/">
                                            {t("blog")}
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
