import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";
import { InfrastructureProject } from "@/content/props";
import Image from "next/image";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface TechAnalysisContent {
    title?: string;
    content: string;
}

interface TechAnalysisDialogProps {
    opcode: InfrastructureProject;
    analysis: TechAnalysisContent[];
}

// Hardcoded tech analysis content for opcodes
export const TECH_ANALYSIS: Record<string, TechAnalysisContent[]> = {
    "opcat": [
        {
            title: "Technical Analysis",
            content: ""
        }
    ],
    "opctv": [
        {
            title: "Technical Analysis",
            content: ""
        }
    ]
};

const TechAnalysisDialog: React.FC<TechAnalysisDialogProps> = ({ opcode, analysis }) => {
    // Don't show button if no analysis content
    if (!analysis || analysis.length === 0) {
        return (
            <div className="text-muted-foreground text-sm">
                No analysis
            </div>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-3 bg-[#E6F7FF] dark:bg-[#0F2A44] border-[#91D5FF] dark:border-[#0F2A44] hover:bg-[#D1F2FF] dark:hover:bg-[#1F3A5F] text-[#0958D9] dark:text-[#91D5FF]"
                >
                    <FileTextIcon className="w-4 h-4 mr-1" />
                    Tech Analysis
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-fit [&>button]:hidden" style={{ width: "auto", maxWidth: "90vw" }}>
                <div 
                    className="bg-popover border border-border rounded-lg shadow-lg p-6"
                    style={{
                        width: "var(--breakpoint-sm, 640px)",
                        maxHeight: "80vh",
                        overflowY: "auto"
                    }}
                >
                    <DialogTitle className="sr-only">
                        {opcode.title} - Technical Analysis
                    </DialogTitle>
                    <div className="space-y-6">
                        {/* Opcode Header */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={`/logos/${opcode.slug}.png`}
                                alt={opcode.title}
                                width={32}
                                height={32}
                                className="rounded-full object-cover bg-muted"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/logos/bitcoinlayers-logo.png';
                                }}
                            />
                            <div>
                                <h3 className="text-xl font-medium text-foreground" style={{ lineHeight: "28px" }}>
                                    {opcode.title} - Technical Analysis
                                </h3>
                            </div>
                        </div>
                        
                        {/* Underline separator */}
                        <hr className="border-border" />
                        
                        {/* Analysis Content */}
                        <div className="content flex-grow pt-0">
                            {analysis.map((item, index) => (
                                <div key={index} className="self-stretch mb-4">
                                    {item.title && (
                                        <div className="text-lg font-semibold text-foreground mb-2">
                                            {parseTextWithLinks(item.title)}
                                        </div>
                                    )}
                                    <div className="text-sm text-muted-foreground leading-relaxed">
                                        {parseTextWithLinks(item.content)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TechAnalysisDialog; 