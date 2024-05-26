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
    <Link href={href} target="_blank" className="flex justify-center items-center gap-2">
      <div className="text-slate-500 text-sm font-normal leading-tight">
        {children}
      </div>
    </Link>
  </div>
);

const FooterBottom = () => (
  <div className="w-full h-[120px] px-16 py-12 bg-slate-50 flex flex-col justify-start items-center gap-16">
    <div className="h-6 px-8 flex flex-col justify-start items-start gap-16">
      <div className="w-full flex justify-between items-center">
        <div className="text-slate-500 text-base font-normal leading-normal">
          Bitcoin Layers 2024 • MIT license
        </div>
        <div className="flex justify-start items-center gap-6">
          <div className="w-6 h-6 relative"></div>
          <div className="w-6 h-6 relative"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function Footer(): ReactElement {
  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col justify-start items-start">
        <div className="self-stretch h-[404px] px-16 pt-16 pb-12 flex flex-col justify-start items-center gap-16">
          <div className="flex flex-col w-full justify-start items-center gap-16">
            <div className="self-stretch h-[0px] bg-slate-100 flex flex-col justify-start items-center gap-2">
              <div className="self-stretch h-[0px] border border-slate-300"></div>
            </div>
            <div className="self-stretch flex justify-between items-start">
              <div className="grow flex flex-col justify-start items-start gap-8">
                <div className="self-stretch h-20 flex flex-col justify-start items-start gap-4">
                  <div className="w-8 h-8 rounded-[21.33px] flex justify-center items-center">
                    <Image
                      src="/logo_noborder.png"
                      alt="Logo"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="self-stretch text-slate-500 text-xs">
                    Not every bitcoin layer is equal. Learn the difference.
                  </div>
                </div>
              </div>
              <div className="grow flex h-[228px] justify-start items-start gap-8">
                <div className="grow flex flex-col justify-start items-start gap-4">
                  <SectionHeader>Risk Analysis</SectionHeader>
                  <div className="self-stretch h-[188px] flex flex-col justify-start items-start gap-3">
                    <SectionItem href="/">Layers</SectionItem>
                    <SectionItem href="/bridges">Bridges</SectionItem>
                    <SectionItem href="/infrastructure">
                      Infrastructure
                    </SectionItem>
                    <SectionItem href="/opcode">Opcodes</SectionItem>
                  </div>
                </div>
                <div className="grow flex flex-col justify-start items-start gap-4">
                  <SectionHeader>Learn</SectionHeader>
                  <div className="self-stretch h-48 flex flex-col justify-start items-start gap-3">
                    <SectionItem href="/glossary">Glossary</SectionItem>
                    <SectionItem href="/faq">FAQ</SectionItem>
                    <SectionItemExternal href="https://bitcoin-layers.gitbook.io/bitcoin-layers">Methodology</SectionItemExternal>
                  </div>
                </div>
                <div className="grow flex flex-col justify-start items-start gap-4">
                  <SectionHeader>Resources</SectionHeader>
                  <div className="self-stretch h-[116px] flex flex-col justify-start items-start gap-3">
                    <SectionItem href="/about">About</SectionItem>
                    <SectionItem href="/contribute">Contribute</SectionItem>
                    <SectionItemExternal href="https://medium.com/@bitcoinlayers">Blog</SectionItemExternal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom /> {/**TODO add links for twitter and github */}
    </footer>
  );
}
