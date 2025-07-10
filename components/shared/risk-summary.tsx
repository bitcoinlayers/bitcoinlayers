import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface RiskSummaryContent {
    title?: string;
    content: string;
}

interface RiskSummaryProps {
    content: RiskSummaryContent[];
    showBackground?: boolean;
    showTitle?: boolean;
}

const RiskSummary: React.FC<RiskSummaryProps> = ({ content, showBackground = true, showTitle = true }) => {
    if (!content || content.length === 0) return null;

    return (
        <div className="content flex-grow pt-0">
            <section
                className={`self-stretch flex-col justify-center items-end gap-4 ${
                    showBackground 
                        ? "lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border" 
                        : "px-0 pt-0 pb-0 mb-0"
                }`}
                id="risksummary"
            >
                {showTitle && (
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                        <div className="body_section !text-foreground">
                            Risk Summary
                        </div>
                    </div>
                )}
                
                {content.map((item, index) => (
                    <div key={index} className="self-stretch">
                        {item.title && (
                            <div 
                                className="body_subsection mt-3 !text-[#FF4D4F]"
                            >
                                {parseTextWithLinks(item.title)}
                            </div>
                        )}
                        <div className="body_paragraph !text-foreground mt-3">
                            {parseTextWithLinks(item.content)}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RiskSummary; 