"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

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

  return (
    <nav className="flex flex-row justify-between items-center w-full fixed min-h-[3rem] px-8 bg-bg_primary bg-opacity-80 backdrop-blur-sm z-50 pointer-events-auto">
      <Link href="/" onClick={closeMenu}>
        <div className="w-8 h-8">
          <Image src="/logo_noborder.png" alt="Logo" width={32} height={32} />
        </div>
      </Link>
      <ul className="flex flex-row items-center space-x-8 pr-8 text-public text-text_secondary">
        <li className="relative">
          <button onClick={toggleSubmenu} className="flex items-center">
            Analysis
            <Image
              src="/icons/vector.svg"
              alt="Submenu Indicator"
              width={8}
              height={8}
              className={`ml-2 transition-transform ${
                submenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {submenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-[282px] bg-white rounded-xl shadow flex-col justify-start items-start gap-2 inline-flex z-50 p-4">
              <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                <Link href="/" onClick={closeSubmenu}>
                  <div className="text-zinc-800 text-base font-medium leading-normal">Layers</div>
                  <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">Overview and risk analysis of bitcoin layers.</div>
                </Link>
              </div>
              <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                <Link href="/bridge" onClick={closeSubmenu}>
                  <div className="text-zinc-800 text-base font-medium leading-normal">Bridges</div>
                  <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">Overview and risk analysis of bitcoin bridges between layers.</div>
                </Link>
              </div>
              <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                <Link href="/infrastructure" onClick={closeSubmenu}>
                  <div className="text-zinc-800 text-base font-medium leading-normal">Infrastructure</div>
                  <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">Overview and risk analysis of layers infrastructure.</div>
                </Link>
              </div>
              <div className="h-[88px] p-3 rounded-md flex-col justify-start items-start flex hover:bg-blue-100">
                <Link href="/opcode" onClick={closeSubmenu}>
                  <div className="text-zinc-800 text-base font-medium leading-normal">Opcodes</div>
                  <div className="self-stretch text-slate-500 text-sm font-normal leading-tight">List and summary of active and proposed opcodes.</div>
                </Link>
              </div>
            </div>
          )}
        </li>
        <li>
          <Link href="/glossary" onClick={closeMenu}>Glossary</Link>
        </li>
        <li>
          <Link href="/faq" onClick={closeMenu}>FAQ</Link>
        </li>
        <li>
          <Link href="https://bitcoin-layers.gitbook.io/bitcoin-layers" target="_blank">
            Methodology
          </Link>
        </li>
        <li>
          <Link href="https://medium.com/@bitcoinlayers" target="_blank">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
