"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

export default function Navbar(): ReactElement {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex flex-row justify-between items-center w-full fixed min-h-[3rem] px-8 bg-bg_primary bg-opacity-80 backdrop-blur-sm z-50 pointer-events-auto">
      <Link href="/" onClick={closeMenu}>
        <div className="w-8 h-8">
          <Image src="/logo_noborder.png" alt="Logo" width={32} height={32} />
        </div>
      </Link>
      <ul className="flex flex-row items-center space-x-8 pr-8 text-public text-text_secondary">
        <li>
          <Link href="/opcodes">Analysis</Link>
        </li>
        <li>
          <Link href="/opcodes">Glossary</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link
            href="https://bitcoin-layers.gitbook.io/bitcoin-layers"
            target="_blank"
          >
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
