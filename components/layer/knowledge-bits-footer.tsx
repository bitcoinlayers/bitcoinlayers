import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { ContentSection } from "@/content/props";

interface KnowledgeBitsFooterProps {
    knowledgeBits: ContentSection["content"];
}

const KnowledgeBitsFooter: React.FC<KnowledgeBitsFooterProps> = ({ knowledgeBits }) => {
    if (!knowledgeBits || knowledgeBits.length === 0) {
        return null;
    }

    return (
        <div className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-muted/50 rounded-xl border border-border flex-col justify-center items-start gap-4">
            <div className="text-lg font-semibold text-foreground mb-3">
                Knowledge Bits
            </div>
            <div className="space-y-4 w-full">
                {knowledgeBits.map((content, index) => (
                    <div key={index} className="space-y-2">
                        {content.title && (
                            <div className="text-sm font-medium text-muted-foreground">
                                {parseTextWithLinks(content.title)}
                            </div>
                        )}
                        <div className="text-sm text-muted-foreground leading-relaxed">
                            {parseTextWithLinks(content.content)}
                        </div>
                        {index < knowledgeBits.length - 1 && (
                            <div className="border-b border-border my-3"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KnowledgeBitsFooter; 