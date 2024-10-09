"use client";
import React from "react";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

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

// {
//     term: "x",
//     definition:
//         "y",
// },

const GlossaryPage: React.FC = () => {
    const t = useTranslations("glossary");
    const glossaryData: GlossaryData = {
        A: [
            {
                term: t("atomic-swap"),
                definition: t("an-exchange-of-crypto-assets"),
            },
        ],
        B: [
            {
                term: t("bitcoin-layer"),
                definition: t("deliberately-ambiguous-term"),
            },
            {
                term: t("bitcoin-script"),
                definition: t("low-level-assembly-based-programming-language"),
            },
            {
                term: t("blind-merge-mining"),
                definition: t("technique-that-allows-miners"),
            },
        ],
        C: [
            {
                term: t("challenge-period"),
                definition: t("security-mechanism-that-enables"),
            },
            {
                term: t("client-side-validation-csv"),
                definition: t("paradigm-to-allow-each-data"),
            },
            {
                term: t("consensus-mechanism"),
                definition: t("procedure-used-to-reach"),
            },
            {
                term: t("covenant"),
                definition: t("mechanism-that-allows-users-to-impose"),
            },
        ],
        D: [
            {
                term: t("data-availability"),
                definition: t("the-publishing-of-transaction-data"),
            },
            {
                term: t("discrete-log-contract-dlc"),
                definition: t("type-of-smart-contract-designed"),
            },
        ],
        E: [
            {
                term: t("ethereum-virtual-machine-evm"),
                definition: t("software-that-sets-the-rules"),
            },
        ],
        F: [
            {
                term: t("federated-peg"),
                definition: t("a-two-way-peg-bridge-controlled"),
            },
            {
                term: t("forced-inclusion"),
                definition: t("mechanism-for-increasing"),
            },
            {
                term: t("fraud-proof"),
                definition: t("cryptographic-proof-that-enables"),
            },
            {
                term: t("full-node"),
                definition: t("node-actor-that-validates"),
            },
        ],
        // G: [],
        // H: [],
        // I: [],
        // J: [],
        // K: [],
        L: [
            {
                term: t("layer-1-l1"),
                definition: t("a-sovereign-network-that-performs"),
            },
            {
                term: t("layer-2-l2"),
                definition: t("modular-network-with-dedicated-execution"),
            },
        ],

        M: [
            {
                term: t("maximal-extractable-value-mev"),
                definition: t("the-maximum-value-block-producers"),
            },
            {
                term: t("merge-mining"),
                definition: t("consensus-strategy-in-which"),
            },
            {
                term: t("merkle-proof"),
                definition: t("set-of-hashes-that-can-be-used"),
            },
            {
                term: t("modular-blockchain"),
                definition: t("specialized-blockchains"),
            },
            {
                term: t("mpc-multi-marty-computation-bridge"),
                definition: t("cryptographic-technique-that-enables"),
            },
            {
                term: t("multisig-multi-signature-wallet"),
                definition: t("wallet-for-which"),
            },
        ],
        // N: [
        // {
        //     term: "x",
        //     definition:
        //         "y",
        // },],
        O: [
            {
                term: t("opcode-operation-code"),
                definition: t("an-instruction-in-bitcoin-script-used"),
            },
            {
                term: t("optimium"),
                definition: t("modular-execution-layer"),
            },
        ],
        P: [
            {
                term: t("payment-channel"),
                definition: t("a-two-of-two-multi-signature"),
            },
            {
                term: t("prover"),
                definition: t("node-actor-in-validity-rollups"),
            },
            {
                term: t("proof-of-stake-pos"),
                definition: t("sybil-resistance-mechanism"),
            },
            {
                term: t("proof-of-work-pow"),
                definition: t(
                    "a-sybil-resistance-mechanism-in-which-the-right-to-produce",
                ),
            },
        ],
        // Q: [],
        R: [
            {
                term: t("rollup"),
                definition: t(
                    "modular-blockchain-that-uses-a-parent-blockchain",
                ),
            },
        ],
        S: [
            {
                term: t("sequencer"),
                definition: t("node-actor-that-includes"),
            },
            {
                term: t("sidechain"),
                definition: t("an-l1-that-exists-to-add"),
            },
            //TODO SPV
            {
                term: t("smart-contract"),
                definition: t("self-executing-program"),
            },
            {
                term: t("soft-fork"),
                definition: t(
                    "backward-compatible-upgrade-to-a-networks-protocol",
                ),
            },

            {
                term: t("sovereign-rollup"),
                definition: t("rollup-implementation-that-sovereignly-manages"),
            },
            {
                term: t("spiderchain"),
                definition: t("sidechain-protocol-that-leverages"),
            },
            {
                term: t("state-channel"),
                definition: t("a-type-of-l2-scaling-solution-that-allows"),
            },
            {
                term: t("state-validation"),
                definition: t(
                    "mechanism-by-which-a-blockchain-is-able-to-validate",
                ),
            },
            {
                term: t("statechain"),
                definition: t("protocol-where-users-enter-a-2-2-multisig"),
            },
            {
                term: t("subnet"),
                definition: t("specialized-blockchain-that-operates-within"),
            },
        ],
        T: [
            {
                term: t("two-way-peg"),
                definition: t("system-that-facilitates-the"),
            },
        ],
        U: [
            {
                term: t("unilateral-exit"),
                definition: t("the-ability-of-a-single-participant"),
            },
            {
                term: t("unspent-transaction-output-utxo"),
                definition: t("bitcoins-accounting-model-a-utxo"),
            },
        ],

        V: [
            {
                term: t("validity-rollup"),
                definition: t("rollup-where-a-prover-submits-a-validity-proof"),
            },
            {
                term: t("validia"),
                definition: t("a-modular-execution-layer-that-has"),
            },
            {
                term: t("validity-proof"),
                definition: t("cryptographic-proof-that-mathematically"),
            },
            {
                term: t("validium"),
                definition: t(
                    "modular-execution-layer-that-has-a-canonical-bridge",
                ),
            },
        ],
        // W: [],
        // X: [],
        // Y: [],
        // Z: [],
        // template: [{ term: "XXX", definition: "YYY" }],
    };

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
                        <div className="special_header flex-grow h-20 text_table_important">
                            {t("glossary")}
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
