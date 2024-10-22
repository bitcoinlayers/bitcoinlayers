import { Fragment } from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { Project } from "@/content/props";

const LayerBody: React.FC<{ layer: Project }> = ({ layer }) => {
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
                        <Fragment key={contentIndex}>
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
                        </Fragment>
                    ))}
                </section>
            ))}
        </main>
    );
};

export default LayerBody;
