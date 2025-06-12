import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import { InfrastructureProject } from "@/content/props";
import Image from "next/image";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface ApplicationsContent {
    title?: string;
    content: string;
}

interface ApplicationsSummaryDialogProps {
    opcode: InfrastructureProject;
    applications: ApplicationsContent[];
}

// Hardcoded applications content for opcodes
const OPCODE_APPLICATIONS: Record<string, ApplicationsContent[]> = {
    "opcat": [
        {
            title: "Layer 2 Protocols",
            content: "OP_CAT enables more sophisticated Layer 2 protocols including rollups and sidechains with improved security models through covenant-based bridges."
        },
        {
            title: "Decentralized Finance", 
            content: "Enables advanced DeFi applications like payment pools, multi-party channels, and more complex covenant-based financial instruments on Bitcoin."
        },
        {
            title: "Zero-Knowledge Proofs",
            content: "Supports ZK-proof verification directly in Bitcoin Script, enabling privacy-preserving applications and scalable computation verification."
        }
    ],
    "opctv": [
        {
            title: "Vault Systems",
            content: "OP_CTV enables sophisticated vault constructions with time-locked withdrawals, multi-signature requirements, and emergency recovery mechanisms."
        },
        {
            title: "Payment Channels",
            content: "Supports advanced payment channel topologies including channel factories, payment pools, and more efficient Lightning Network constructions."
        },
        {
            title: "Congestion Control", 
            content: "Enables batched transactions and fee optimization strategies during network congestion through pre-committed transaction trees."
        }
    ]
};

const ApplicationsSummaryDialog: React.FC<ApplicationsSummaryDialogProps> = ({ opcode, applications }) => {
    // Don't show button if no applications content
    if (!applications || applications.length === 0) {
        return (
            <div className="text-muted-foreground text-sm">
                No applications
            </div>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-3 bg-[#F6FFED] dark:bg-[#162312] border-[#B7EB8F] dark:border-[#162312] hover:bg-[#EAFFDA] dark:hover:bg-[#274016] text-[#52C41A] dark:text-[#B7EB8F]"
                >
                    <CodeIcon className="w-4 h-4 mr-1" />
                    Applications
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
                        {opcode.title} - Applications
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
                                    {opcode.title} - Applications
                                </h3>
                            </div>
                        </div>
                        
                        {/* Underline separator */}
                        <hr className="border-border" />
                        
                        {/* Applications Content */}
                        <div className="content flex-grow pt-0">
                            {applications.map((item, index) => (
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

export { OPCODE_APPLICATIONS };
export default ApplicationsSummaryDialog; 