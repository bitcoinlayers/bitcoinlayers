"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SearchBlock from "./filter/SearchBlock";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { LocaleButton } from "./ui/locale-button";
import { useTranslations } from "next-intl";
import { getAllLayersWithSlugs } from "@/app/layers/[slug]/page";
import { Layer } from "./layer/layerProps";
import { Infrastructure } from "./infrastructure/infrastructureProps";
import { getAllInfrastructure } from "@/helpers/locale.helpers";

export default function Navbar(): ReactElement {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [allLayers, setAllLayers] = useState<Layer[]>([]);
    const [allInfrastructures, setAllInfrastructures] = useState<
        Infrastructure[]
    >([]);
    const submenuRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("navbar");
    const pathname = usePathname();
    const searchHiddenRoutes = [
        "/",
        "/federations",
        "/infrastructure",
        "/bitcoinonly",
    ];

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const openSheet = () => setIsSheetOpen(true);
    const closeSheet = () => setIsSheetOpen(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    const closeSubmenu = () => {
        setSubmenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                submenuRef.current &&
                !submenuRef.current.contains(event.target as Node)
            ) {
                setSubmenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setSearchOpen(false);
    }, [pathname]);

    useEffect(() => {
        const clear = async () => {
            const { allLayers } = await getAllLayersWithSlugs();
            const { allInfrastructures } = await getAllInfrastructure();

            setAllLayers(allLayers);
            setAllInfrastructures(allInfrastructures);
        };

        clear();
    }, []);

    return (
        <nav className="flex flex-row justify-between items-center w-full fixed min-h-[3rem] lg:px-8 px-4 py-3.5 bg-bg_primary lg:bg-opacity-80 backdrop-blur-sm z-50 pointer-events-auto">
            <Link href="/" onClick={closeMenu}>
                <div className="w-8 h-8">
                    <Image
                        src="/logo_noborder.png"
                        alt={t("logo-alt")}
                        width={32}
                        height={32}
                    />
                </div>
            </Link>
            <div className="flex items-center">
                <ul className="flex flex-row items-center space-x-4 lg:space-x-8 lg:pr-8 pr-4 text-public text-text_secondary">
                    <LocaleButton />
                    {!searchHiddenRoutes.includes(pathname) && (
                        <>
                            <li className="md:hidden">
                                <button
                                    onClick={() =>
                                        setSearchOpen(
                                            (searchOpen) => !searchOpen,
                                        )
                                    }
                                >
                                    <Image
                                        src="/icons/search.svg"
                                        alt={t("search-alt")}
                                        width={20}
                                        height={20}
                                        className="mt-1"
                                    />
                                </button>
                            </li>
                            <li className="hidden md:block">
                                <SearchBlock
                                    allLayers={allLayers}
                                    allInfrastructures={allInfrastructures}
                                    inputClassName="h-8 text-base"
                                    imageClassName="bottom-[6px]"
                                />
                            </li>
                        </>
                    )}
                    <li className="relative">
                        <button
                            onClick={toggleSubmenu}
                            className="flex items-center"
                        >
                            {t("analysis")}
                            <Image
                                src="/icons/vector.svg"
                                alt={t("analysis-alt")}
                                width={9}
                                height={9}
                                className={`ml-2 transition-transform ${
                                    submenuOpen ? "" : "rotate-180"
                                }`}
                            />
                        </button>
                        {submenuOpen && (
                            <div
                                ref={submenuRef}
                                className="absolute top-full lg:left-0 right-0 mt-2 w-[282px] bg-white rounded-xl shadow flex-col justify-start items-start gap-2 inline-flex z-50 p-4"
                            >
                                <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link href="/" onClick={closeSubmenu}>
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            {t("layers")}
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            {t("layers-overview")}
                                        </div>
                                    </Link>
                                </div>
                                <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link
                                        href="/federations"
                                        onClick={closeSubmenu}
                                    >
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            {t("federations")}
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            {t("federations-overview")}
                                        </div>
                                    </Link>
                                </div>
                                <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link
                                        href="/infrastructure"
                                        onClick={closeSubmenu}
                                    >
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            {t("infrastructure")}
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            {t("infrastructure-overview")}
                                        </div>
                                    </Link>
                                </div>
                                <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link
                                        href="/bitcoinonly"
                                        onClick={closeSubmenu}
                                    >
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            {t("bitcoin-only")}
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            {t("bitcoin-only-overview")}
                                        </div>
                                    </Link>
                                </div>
                                {/* <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link href="/opcode" onClick={closeSubmenu}>
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            Opcodes
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            List and summary of active and
                                            proposed opcodes.
                                        </div>
                                    </Link>
                                </div> */}
                                {/* <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link
                                        href="/upcominglayers"
                                        onClick={closeSubmenu}
                                    >
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            Upcoming Layers
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            List and summary of production,
                                            testnet, and announced bitcoin
                                            layers.
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        )}
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/glossary" onClick={closeMenu}>
                            {t("glossary")}
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/faq" onClick={closeMenu}>
                            {t("faq")}
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/methodology" onClick={closeMenu}>
                            {t("methodology")}
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link
                            href="https://www.lxresearch.co/"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            {t("blog")}
                            <Image
                                src="/icons/external.png"
                                alt={t("external-link-alt")}
                                width={10}
                                height={10}
                            />
                        </Link>
                    </li>
                </ul>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <button className="lg:hidden" onClick={openSheet}>
                            <Image
                                src="/icons/menu.svg"
                                alt={t("menu-alt")}
                                width={20}
                                height={20}
                            />
                        </button>
                    </SheetTrigger>
                    <SheetContent className="w-64">
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription className="text-base">
                                <div className="pt-4 px-2">
                                    <ul className="flex flex-col items-start gap-y-6">
                                        <li>
                                            <Link
                                                href="/glossary"
                                                className="text-black"
                                                onClick={closeSheet}
                                            >
                                                {t("glossary")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/faq"
                                                className="text-black"
                                                onClick={closeSheet}
                                            >
                                                {t("faq")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/methodology"
                                                className="text-black"
                                                onClick={closeSheet}
                                            >
                                                {t("methodology")}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="text-black flex items-center gap-1"
                                                href="https://www.lxresearch.co/"
                                                target="_blank"
                                                onClick={closeSheet}
                                            >
                                                {t("blog")}
                                                <Image
                                                    src="/icons/external.png"
                                                    alt={t("external-link-alt")}
                                                    width={10}
                                                    height={10}
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {searchOpen && !searchHiddenRoutes.includes(pathname) && (
                <div
                    ref={searchRef}
                    className="absolute top-full left-0 right-0 bg-bg_primary p-4 shadow-md md:hidden"
                >
                    <SearchBlock
                        allInfrastructures={allInfrastructures}
                        allLayers={allLayers}
                    />
                </div>
            )}
        </nav>
    );
}
