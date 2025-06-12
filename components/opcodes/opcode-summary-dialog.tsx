import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { InfrastructureProject } from "@/content/props";
import Image from "next/image";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface SummaryContent {
    title?: string;
    content: string;
}

interface OpcodeSummaryDialogProps {
    opcode: InfrastructureProject;
    summary: SummaryContent[];
}

// Hardcoded summary content for opcodes
const OPCODE_SUMMARIES: Record<string, SummaryContent[]> = {
    "opcat": [
        {
            title: "Key Functionality",
            content: "OP_CAT concatenates two data elements on the stack, enabling recursive covenants and advanced smart contract patterns on Bitcoin."
        },
        {
            title: "Primary Use Cases", 
            content: "Enables STARK proof verification in Bitcoin Script, supports bridging protocols, and allows for more sophisticated covenant constructions."
        },
        {
            title: "Developer Interest",
            content: "High community support with 23 developers preferring this opcode according to recent surveys. Strong backing from L2 teams."
        }
    ],
    "opctv": [
        {
            title: "Key Functionality",
            content: "OP_CTV (CheckTemplateVerify) enables covenant functionality by committing to specific transaction outputs, allowing pre-signed transaction trees."
        },
        {
            title: "Primary Use Cases",
            content: "Supports payment pools, congestion control, vault constructions, and various Layer 2 protocols through covenant mechanisms."
        },
        {
            title: "Developer Interest", 
            content: "Strong developer support with 20 developers preferring this opcode. Well-established BIP with clear technical specifications."
        }
    ]
};

const OpcodeSummaryDialog: React.FC<OpcodeSummaryDialogProps> = ({ opcode, summary }) => {
    // Don't show button if no summary content
    if (!summary || summary.length === 0) {
        return (
            <div className="text-muted-foreground text-sm">
                No summary
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
                    <InfoIcon className="w-4 h-4 mr-1" />
                    Summary
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
                        {opcode.title} - Summary
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
                                    {opcode.title} - Summary
                                </h3>
                            </div>
                        </div>
                        
                        {/* Underline separator */}
                        <hr className="border-border" />
                        
                        {/* Summary Content */}
                        <div className="content flex-grow pt-0">
                            {summary.map((item, index) => (
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

export { OPCODE_SUMMARIES };
export default OpcodeSummaryDialog; 