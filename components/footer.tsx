import Link from "next/link";
import type { ReactElement } from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Footer(): ReactElement {
  return (
    <footer className="border-t-2 border-offwhite">
      <div className="text-center text-offwhite p-2 my-6">
        <nav className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 font-medium mt-4">
          <a
            href="https://github.com/bitcoinlayers/bitcoinlayers"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/bitcoinlayers"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Twitter
          </a>
          <a
            href="https://warpcast.com/~/channel/bitcoinlayers"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            Warpcast
          </a>
          <Link href="/contribute" className="block">
            Contribute
          </Link>
          <Link href="/support" className="block">
            Support
          </Link>
          <Link href="/about" className="block">
            About
          </Link>
          {/* <div className="flex justify-center">
            <ModeToggle />
          </div> */}
        </nav>
      </div>
    </footer>
  );
}
