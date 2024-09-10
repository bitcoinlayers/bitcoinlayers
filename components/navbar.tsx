"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Sheet from "./Sheet";
import SearchBlock from "./filter/SearchBlock";
import { usePathname } from "next/navigation";

export default function Navbar(): ReactElement {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);

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

    return (
        <nav className="flex flex-row justify-between items-center w-full fixed min-h-[3rem] lg:px-8 px-4 py-2 bg-bg_primary lg:bg-opacity-80 backdrop-blur-sm z-50 pointer-events-auto">
            <Link href="/" onClick={closeMenu}>
                <div className="w-8 h-8">
                    <Image
                        src="/logo_noborder.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </div>
            </Link>
            <div className="flex items-center">
                <ul className="flex flex-row items-center space-x-4 lg:space-x-8 lg:pr-8 pr-4 text-public text-text_secondary">
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
                                        alt="Search"
                                        width={20}
                                        height={20}
                                        className="mt-1"
                                    />
                                </button>
                            </li>
                            <li className="hidden md:block">
                                <SearchBlock />
                            </li>
                        </>
                    )}
                    <li className="relative">
                        <button
                            onClick={toggleSubmenu}
                            className="flex items-center"
                        >
                            Analysis
                            <Image
                                src="/icons/vector.svg"
                                alt="Submenu Indicator"
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
                                            Layers
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            Overview and risk analysis of
                                            bitcoin layers.
                                        </div>
                                    </Link>
                                </div>
                                <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link
                                        href="/federations"
                                        onClick={closeSubmenu}
                                    >
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            Federations
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            Overview and risk analysis of
                                            bitcoin federations.
                                        </div>
                                    </Link>
                                </div>
                                <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link
                                        href="/infrastructure"
                                        onClick={closeSubmenu}
                                    >
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            Infrastructure
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            Overview and risk analysis of layers
                                            infrastructure.
                                        </div>
                                    </Link>
                                </div>
                                <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                                    <Link
                                        href="/bitcoinonly"
                                        onClick={closeSubmenu}
                                    >
                                        <div className="text-zinc-800 text-base font-medium leading-normal">
                                            Bitcoin Only
                                        </div>
                                        <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">
                                            Layers and infrastructure that only
                                            use BTC.
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
                            Glossary
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/faq" onClick={closeMenu}>
                            FAQ
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/methodology" onClick={closeMenu}>
                            Methodology
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link
                            href="https://www.lxresearch.co/"
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            Blog
                            <Image
                                src="/icons/external.png"
                                alt="External Link"
                                width={10}
                                height={10}
                            />
                        </Link>
                    </li>
                </ul>
                <button className="lg:hidden" onClick={openSheet}>
                    <Image
                        src="/icons/menu.svg"
                        alt="menu"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
            {searchOpen && !searchHiddenRoutes.includes(pathname) && (
                <div
                    ref={searchRef}
                    className="absolute top-full left-0 right-0 bg-bg_primary p-4 shadow-md md:hidden"
                >
                    <SearchBlock />
                </div>
            )}
            <Sheet isOpen={isSheetOpen} onClose={closeSheet}>
                <MenuSidebarContent />
            </Sheet>
        </nav>
    );

    function MenuSidebarContent() {
        return (
            <div className="pt-8 px-4">
                <ul className="flex flex-col gap-y-6">
                    <li>
                        <Link
                            href="/glossary"
                            className="text-black"
                            onClick={closeSheet}
                        >
                            Glossary
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/faq"
                            className="text-black"
                            onClick={closeSheet}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/methodology"
                            className="text-black"
                            onClick={closeSheet}
                        >
                            Methodology
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-black flex items-center gap-1"
                            href="https://www.lxresearch.co/"
                            target="_blank"
                            onClick={closeSheet}
                        >
                            Blog
                            <Image
                                src="/icons/external.png"
                                alt="External Link"
                                width={10}
                                height={10}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
