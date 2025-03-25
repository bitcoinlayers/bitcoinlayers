import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { Project } from "@/content/props";
import InfoCardGridOpcode from "../info-card-grid-opcode";

const InfrastructureBody: React.FC<{ infrastructure: Project }> = ({
    infrastructure,
}) => {
    return (
        <main className="content flex-grow sm:mt-0 pt-0">
            {infrastructure.sections.map((section, index) => (
                <section
                    key={index}
                    className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
                    id={section.id}
                >
                    <div className="self-stretch justify-start items-start gap-4">
                        <div className="body_section !text-foreground">
                            {section.title}
                        </div>
                    </div>

                    <div className="body_paragraph !text-foreground mt-3">
                    </div>
                    {section.content.map((content, contentIndex) => (
                        <React.Fragment key={contentIndex}>
                            {content.title && (
                                <div className="body_subsection !text-muted-foreground">
                                    {parseTextWithLinks(content.title)}
                                </div>
                            )}

                            <div className="body_paragraph !text-foreground mt-3">
                            {section.id === "script-functionality" ? (
                            <>
                                <div className="bg-muted rounded-md max-h-[250px] overflow-y-scroll">
                                    <pre className="p-4 overflow-x-scroll text-left text-sm leading-snug font-mono whitespace-pre">
                                        <code>{content.content}</code>
                                    </pre>
                                </div>
                                <div className="mt-5 text-right">
                                    <a
                                        href={`https://github.com/bitcoinlayers/bitcoinlayers`}
                                        className="font-semibold hover:underline flex items-center justify-end"
                                    >
                                        Check out more example scripts
                                        <span className="ml-2">→</span>
                                    </a>
                                </div>
                            </>
                        ) : (
                            parseTextWithLinks(content.content)
                        )}
                            </div>
                        </React.Fragment>
                    ))}

                    {/* ✅ Only show cards in the "stakeholderresources" section */}
                    {section.id === "stakeholderresources" && (
                        <div className="mt-6">
                            <InfoCardGridOpcode />
                        </div>
                    )}
                </section>
            ))}
        </main>
    );
};

export default InfrastructureBody;