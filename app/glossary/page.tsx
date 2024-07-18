"use client";
import React from "react";

import { useEffect } from "react";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element =
        document.getElementById(id) ||
        document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
    if (element) {
        const yOffset = -60;
        const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

type GlossaryItem = {
    term: string;
    definition: string;
};

type GlossaryData = {
    [key: string]: GlossaryItem[];
};

const glossaryData: GlossaryData = {
    // A: [
    //     {
    //         term: "Anchored Sidechain",
    //         definition:
    //             "A sidechain that inherits Bitcoin finality and does not reorg unless the Bitcoin mainchain reorgs.",
    //     },
    // ],
    // B: [{ term: "xx", definition: "yy" }],
    // C: [],
    // D: [],
    // E: [],
    // F: [],
    // G: [],
    // H: [],
    // I: [],
    // J: [],
    // K: [],
    // L: [],
    // M: [],
    // N: [],
    // O: [],
    // P: [],
    // Q: [],
    // R: [
    //     {
    //         term: "Rollup",
    //         definition:
    //             "A blockchain that posts its latest state root, and enough transaction data to reconstruct its state from genesis, to Bitcoin",
    //     },
    // ],
    // S: [
    //     {
    //         term: "Sidechain",
    //         definition:
    //             "A blockchain with sovereign execution, consensus, data availability, and security (i.e., an L1) that is in some way aligned with Bitcoin",
    //     },
    //     {
    //         term: "Spiderchain",
    //         definition:
    //             "A sidechain protocol that leverages a variety of rotating multi-sigs to secure the BTC that is deposited into the sidechain",
    //     },
    //     {
    //         term: "State channel",
    //         definition:
    //             "A system where part of the blockchain's state is locked into a multi-signature contract between a number of counterparties. These counterparties engage in transactions, related to this state, amongst themselves and keep a record of state transitions locally",
    //     },
    //     {
    //         term: "Statechain",
    //         definition:
    //             "A protocol where users enter a 2-2 multisig with a federated entity and transfer ownership of a UTXO to an intended recipient by providing them a statechain private key for that specific UTXO",
    //     },
    // ],
    // T: [],
    // U: [],
    // V: [
    //     {
    //         term: "Validity rollup",
    //         definition:
    //             "A rollup where a prover submits a validity proof to a verifier contract on the L1 proving that the state transition was executed correctly",
    //     },
    // ],
    // W: [],
    // X: [],
    // Y: [],
    // Z: [],
    // template: [{ term: "XXX", definition: "YYY" },],
};

const GlossaryPage: React.FC = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const element = document.getElementById(
                    hash.toLowerCase().replace(/\s+/g, "-"),
                );
                if (element) {
                    const yOffset = -60;
                    const y =
                        element.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const renderGlossarySection = (letter: string) => (
        <div id={letter} className="mb-8 flex flex-col lg:flex-row items-start">
            <div className="font-black text-text_tertiary font-playfair-display text-10xl flex-shrink-0 w-24 leading-none">
                {letter}
            </div>
            <div className="flex-grow bg-white rounded-xl border border-slate-300 p-4">
                {glossaryData[letter].map((item, index) => (
                    <div
                        id={item.term.toLowerCase().replace(/\s+/g, "-")}
                        key={index}
                        className="m-2 gap-4 group"
                    >
                        <div className="flex items-center mb-4">
                            <div className="special_header text-3xl font-light text-brand leading-9">
                                {item.term}
                            </div>
                            <button
                                className="ml-2 text-blue-500 hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => {
                                    const link = `${window.location.origin}${window.location.pathname}#${item.term.toLowerCase().replace(/\s+/g, "-")}`;
                                    navigator.clipboard.writeText(link);
                                    alert("Link copied to clipboard!");
                                }}
                            >
                                🔗
                            </button>
                        </div>
                        <div className="text-base font-normal text-slate-500 leading-normal">
                            {item.definition}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow h-20">
                            Glossary
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full">
                    <nav className="lg:w-1/8 lg:mb-8 mb-4 mr-12 lg:pr-4">
                        <div className="flex lg:flex-col flex-row lg:gap-4 gap-2 lg:sticky lg:top-16">
                            {Object.keys(glossaryData).map((letter) => (
                                <a
                                    key={letter}
                                    href={`#${letter}`}
                                    onClick={(e) => handleScroll(e, letter)}
                                    className="text-lg font-medium text-text_primary hover:text-brand"
                                >
                                    {letter}
                                </a>
                            ))}
                        </div>
                    </nav>
                    <div className="w-full">
                        Coming Soon.{" "}
                        {/*TODO remove after adding in term defitions */}
                        {Object.keys(glossaryData).map((letter) =>
                            renderGlossarySection(letter),
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default GlossaryPage;
