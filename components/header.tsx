"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Footer(): ReactElement {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="max-w-6xl dark:text-bitcoin mx-auto flex items-baseline items-center pb-12 py-4">
        <h1 className="text-3xl font-bold mt-4 flex flex-rows space-x-4 align-middle">
          {/* <Image src="/btc.svg" alt="Bitcoin" width={50} height={50} /> */}
          <Link href="/">Bitcoin Layers</Link>
        </h1>
        <nav className="ml-auto text-lg font-medium space-x-6 px-4 flex items-center">
          <div className="block lg:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <ul className="lg:hidden rounded-xl absolute right-8 mt-20 top-6 p-6 space-y-2 border-2">
              <li>
                <Link
                  href="https://bitcoin-layers.gitbook.io/bitcoin-layers"
                  target="_blank"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link href="https://medium.com/@bitcoinlayers" target="_blank">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          )}
          <ul className="hidden lg:flex flex-wrap items-center space-x-6">
            <li>
              <Link
                href="https://bitcoin-layers.gitbook.io/bitcoin-layers"
                target="_blank"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link href="https://medium.com/@bitcoinlayers" target="_blank">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <div className="flex justify-center">
                <ModeToggle />
              </div>
            </li>
            {/* <li><Link href="https://twitter.com/bitcoinlayers" target="_blank">Twitter</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
