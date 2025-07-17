import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { LayerProject, EntityCategory } from "@/content/props";

interface CategorizationContent {
    title?: string;
    content: string;
}

interface CategorizationProps {
    content: CategorizationContent[];
    layer: LayerProject;
    showBackground?: boolean;
}

const Categorization: React.FC<CategorizationProps> = ({ content, layer, showBackground = true }) => {
    if (!content || content.length === 0) return null;

    const getSubtitle = (entityCategory?: EntityCategory): string | null => {
        switch (entityCategory) {
            case EntityCategory.Integrated:
                return null;
            case EntityCategory.Alt:
                return null;
            default:
                return null;
        }
    };

    const subtitle = getSubtitle(layer.entityCategory);

    return (
        <div className="content flex-grow pt-0">
            <section
                className={`self-stretch flex-col justify-center items-end gap-4 ${
                    showBackground 
                        ? "lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border" 
                        : "px-0 pt-0 pb-0 mb-0"
                }`}
                id="categorization"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="flex flex-col">
                        <div className="body_section !text-foreground">
                            Categorization
                        </div>
                        {subtitle && (
                            <div className="body_subsection !text-muted-foreground">
                                {subtitle}
                            </div>
                        )}
                    </div>
                </div>
                
                {content.map((item, index) => {
                    // Determine if this is a positive or negative categorization
                    const isPositive = item.title?.includes("meets our technical standards") || item.title?.includes("meets our standards");
                    const titleColorClass = isPositive 
                        ? "body_subsection mt-3 !text-[#22C55E]" // Green for positive
                        : "body_subsection mt-3 !text-[#FF4D4F]"; // Red for negative
                    
                    return (
                        <div key={index} className="self-stretch">
                            {item.title && (
                                <div className={titleColorClass}>
                                    {parseTextWithLinks(item.title)}
                                </div>
                            )}
                            <div className="body_paragraph !text-foreground mt-3">
                                {parseTextWithLinks(item.content)}
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default Categorization; 