import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { Project } from "@/content/props";

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
                    {section.content.map((content, contentIndex) => (
                        <React.Fragment key={contentIndex}>
                            {content.title && (
                                <div
                                    className={`self-stretch justify-between items-center inline-flex mt-6`}
                                >
                                    <div className="body_subsection !text-muted-foreground">
                                        {parseTextWithLinks(content.title)}
                                    </div>
                                </div>
                            )}
                            <div className="body_paragraph !text-foreground mt-3">
                                {/** TODO glossary hover tips */}
                                {parseTextWithLinks(content.content)}
                            </div>
                        </React.Fragment>
                    ))}
                </section>
            ))}
        </main>
    );
};

export default InfrastructureBody;
