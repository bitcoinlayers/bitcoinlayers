import React from "react";
import { Layer } from "./layerProps";
import Link from "next/link";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import DailyTotalSupplyChart from "./daily-total-supply-chart";

const LayerBody: React.FC<{ layer: Layer }> = ({ layer }) => {
    return (
        <main className="content flex-grow sm:mt-0 pt-0 lg:px-0">
            {layer.sections.map((section, index) => (
                <section
                    key={index}
                    className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4"
                    id={section.id}
                >
                    <div className="self-stretch justify-start items-start gap-4">
                        <div className="body_section">{section.title}</div>
                    </div>
                    {section.content.map((content, contentIndex) => (
                        <React.Fragment key={contentIndex}>
                            {content.title && (
                                <div
                                    className={`self-stretch justify-between items-center inline-flex mt-6`}
                                >
                                    <div className="body_subsection">
                                        {parseTextWithLinks(content.title)}
                                    </div>
                                </div>
                            )}
                            <div className="body_paragraph mt-3">
                                {/** TODO glossary hover tips */}
                                {parseTextWithLinks(content.content)}
                            </div>
                        </React.Fragment>
                    ))}
                    {section.id === "data" && <DailyTotalSupplyChart layer={layer} />}
                </section>
            ))}
            <div
                className="self-stretch lg:px-8 px-4 pt-6 pb-8 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4 mb-6"
                id="knowledgebits"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="text-zinc-800 text-3xl font-light font-['Public Sans'] leading-9">
                        Knowledge Bits
                    </div>
                </div>
                {layer.knowledgeBits.map((link) => (
                    <p key={link.url}>
                        <Link
                            href={link.url}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="text-orange-600 text-base font-medium font-['Public Sans'] underline leading-normal">
                                {link.displayText}
                            </span>
                        </Link>
                    </p>
                ))}
            </div>
        </main>
    );
};

export default LayerBody;
