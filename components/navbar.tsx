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
import { ExternalLinkIcon } from "lucide-react";

export default function Navbar(): ReactElement {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();
    const searchHiddenRoutes = [
        "/",
        "/staking",
        "/crosschainbtc",
        "/ecash",
        "/bitcoinonly",
        "/metrics",
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
        <nav className="flex flex-row justify-between items-center w-full sticky top-0 min-h-[3rem] px-4 py-3.5 bg-background/70 bg-opacity-80 backdrop-blur-sm z-50 pointer-events-auto max-w-5xl mx-auto">
            <Link href="/" onClick={closeMenu}>
                {/* <div className="w-8 h-8">
                    <Image
                        src="/logo_noborder.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </div> */}
                <h1 className="font-playfair italic font-black text-brand text-5xl text-center">
                    Bitcoin Layers
                </h1>
            </Link>
            <div className="flex items-center">
                <ul className="flex flex-row items-center space-x-4 lg:space-x-8 lg:pr-8 pr-4 text-public text-muted-foreground">
                    {/* {!searchHiddenRoutes.includes(pathname) && (
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
                                <SearchBlock
                                    inputClassName="h-8 text-base"
                                    imageClassName="bottom-[6px]"
                                />
                            </li>
                        </>
                    )} */}
                    <li className="hidden lg:block">
                        <Link href="/" onClick={closeMenu}>
                            Reviews
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/analytics" onClick={closeMenu}>
                            Analytics
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link href="/glossary" onClick={closeMenu}>
                            Glossary
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link
                            href="https://lxresearch.co"
                            target="_blank"
                            onClick={closeMenu}
                            className="flex items-center space-x-1.5"
                        >
                            <div>Research</div>
                            <ExternalLinkIcon className="size-3" />
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link
                            href="/dev-center"
                            onClick={closeMenu}
                            className="flex items-center space-x-1.5"
                        >
                            <div>Dev Center</div>
                            {/* <ExternalLinkIcon className="size-3" /> */}
                        </Link>
                    </li>
                </ul>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <button className="lg:hidden" onClick={openSheet}>
                            <Image
                                src="/icons/menu.svg"
                                alt="menu"
                                width={28}
                                height={28}
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
                                                href="/"
                                                className="text-primary"
                                                onClick={closeSheet}
                                            >
                                                Reviews
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/analytics"
                                                className="text-primary"
                                                onClick={closeSheet}
                                            >
                                                Analytics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/glossary"
                                                className="text-primary"
                                                onClick={closeSheet}
                                            >
                                                Glossary
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://lxresearch.co"
                                                target="_blank"
                                                className="text-primary flex space-x-2 items-center"
                                                onClick={closeSheet}
                                            >
                                                <div>Research</div>
                                                <ExternalLinkIcon className="size-3 text-primary" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/dev-center"
                                                className="text-primary flex space-x-2 items-center"
                                                onClick={closeSheet}
                                            >
                                                <div>Dev Center</div>
                                                {/* <ExternalLinkIcon className="size-3 text-primary" /> */}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {/* {searchOpen && !searchHiddenRoutes.includes(pathname) && (
                <div
                    ref={searchRef}
                    className="absolute top-full left-0 right-0 bg-bg_primary p-4 shadow-md md:hidden"
                >
                    <SearchBlock />
                </div>
            )} */}
        </nav>
    );
}
