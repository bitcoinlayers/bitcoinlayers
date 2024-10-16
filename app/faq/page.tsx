"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

const FaqPage: React.FC = () => {
    const t = useTranslations("faq");
    const FAQItem: React.FC<{ question: string; answer: string }> = ({
        question,
        answer,
    }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => setIsOpen(!isOpen);

        return (
            <div className="bg-white rounded-xl border border-slate-300 flex flex-col justify-center items-start gap-4 p-8">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={toggleOpen}
                >
                    <div
                        className={`flex items-center justify-center w-6 h-6 transform ${isOpen ? "" : "rotate-180"}`}
                    >
                        <Image
                            src="/icons/vector.svg"
                            alt="Toggle Arrow"
                            width={16}
                            height={16}
                        />
                    </div>

                    <div className="text-3xl font-light text-zinc-800 leading-9">
                        {question}
                    </div>
                </div>
                {isOpen && (
                    <div className="flex flex-col justify-center items-start gap-8 w-full">
                        <div className="flex flex-col justify-start items-start gap-2 w-full">
                            <div className="text-base font-normal text-slate-500 leading-normal">
                                {parseTextWithLinks(answer)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-8 w-full">
                    <div className="flex-grow flex items-center gap-[30px] h-[156px]">
                        <div className="special_header flex-grow sm:h-20 text-6xl lg:text-10xl text_table_important">
                            {t("frequently-asked-questions")}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-12 w-full rounded-md">
                        <div className="flex flex-col gap-8 w-full">
                            <FAQItem
                                question={t("what-is-the-bitcoin-layers-site")}
                                answer={t("bitcoin-layers")}
                            />
                            <FAQItem
                                question={t("what-is-a-bitcoin-layer")}
                                answer={t(
                                    "we-use-the-term-bitcoin-layer-to-describe",
                                )}
                            />
                            <FAQItem
                                question={t("are-all-bitcoin-layers-l2s")}
                                answer={t("the-overwhelming-majority")}
                            />
                            <FAQItem
                                question={t(
                                    "why-are-newer-bitcoin-l2s-receiving-so-much-attention",
                                )}
                                answer={t(
                                    "bitcoin-l2s-are-receiving-attention-for-a-number",
                                )}
                            />
                            <FAQItem
                                question={t("what-are-modular-bitcoin-l2s")}
                                answer={t(
                                    "number-of-new-projects-are-launching",
                                )}
                            />
                            <FAQItem
                                question={t("are-these-newer-l2s-similar")}
                                answer={t("large-percentage-of-these-projects")}
                            />
                            <FAQItem
                                question={t(
                                    "what-is-bitcoins-scaling-roadmap-focused-on",
                                )}
                                answer={t("bitcoin-unlike-other-ecosystems")}
                            />
                            <FAQItem
                                question={t("how-does-bitcoin-layers")}
                                answer={t("we-analyze-protocols-against")}
                            />
                            <FAQItem
                                question={t('faqwhere-does-bitcoin-layers-get-its-data')}
                                answer={t('bitcoin-layers-has-its-own-internal-data-ingestion-from-various-sources-including-our-own-nodes-public-apis-and-providers-such-as-alchemy-we-update-data-on-the-site-at-midnight-utc-every-day-if-data-is-not-matching-your-favorite-block-explorer-or-dune-dashboard-it-might-be-because-the-data-is-not-live-but-rather-updated-daily-it-might-also-be-because-of-heuristics-please-feel-free-to-reach-out-with-questions-or-learn-more-here-https-github-com-bitcoinlayers-docs')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default FaqPage;
