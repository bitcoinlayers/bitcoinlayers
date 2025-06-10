import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";
import { LayerProject, InfrastructureProject, RiskCategory } from "@/content/props";
import { getRiskColorBackground, getRiskColorText, getRiskEmoji } from "@/util/riskColors";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Image from "next/image";

interface Peg {
    name: string;
    infrastructureSlug: string;
    score: number;
    tier: string;
    title: string;
    content: string;
}

interface CustodyTypeDialogProps {
    layer: LayerProject | InfrastructureProject;
}

const CustodyTypeDialog: React.FC<CustodyTypeDialogProps> = ({ layer }) => {
    // Extract BTC custody data from riskAnalysis
    const btcCustodyData = 'riskAnalysis' in layer 
        ? layer.riskAnalysis?.find(analysis => analysis.category === RiskCategory.BtcCustody)
        : null;
    
    const pegs = btcCustodyData?.pegs || [];
    const [selectedPeg, setSelectedPeg] = useState<string>(
        pegs.length > 0 ? pegs[0].name : ""
    );

    const selectedPegData = pegs.find(peg => peg.name === selectedPeg);

    if (!btcCustodyData || pegs.length === 0) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                    >
                        <Bitcoin className="w-4 h-4 mr-1" />
                        Review
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogTitle className="sr-only">
                        {layer.title} - Custody Type
                    </DialogTitle>
                    <div className="space-y-4">
                        <div className="p-4">
                            <p className="text-muted-foreground">
                                No custody information available for {layer.title}.
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                >
                    <Bitcoin className="w-4 h-4 mr-1" />
                    Review
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
                        {layer.title} - Custody Type
                    </DialogTitle>
                    <div className="space-y-6">
                        {/* Peg Selection */}
                        {pegs.length > 1 && (
                            <div className="space-y-3">
                                <h3 className="text-md font-semibold text-foreground">Select Bitcoin Asset:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {pegs.map((peg) => (
                                        <button
                                            key={peg.name}
                                            onClick={() => setSelectedPeg(peg.name)}
                                            className={`p-3 rounded-lg border text-left transition-colors ${
                                                selectedPeg === peg.name
                                                    ? 'border-brand bg-brand/10 text-foreground'
                                                    : 'border-border text-muted-foreground hover:bg-muted/50'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={`/logos/${peg.infrastructureSlug}.png`}
                                                    alt={peg.name}
                                                    className="w-6 h-6 rounded-full object-cover bg-muted"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/logos/default.png';
                                                    }}
                                                />
                                                <span className="font-medium">{peg.name}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Combined Network and Custody Info */}
                        {selectedPegData && (
                            <div className="space-y-4">
                                {/* Network Header */}
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={`/logos/${layer.slug}.png`}
                                        alt={layer.title}
                                        width={32}
                                        height={32}
                                        className="rounded-full object-cover bg-muted"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/logos/default.png';
                                        }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-medium text-foreground" style={{ lineHeight: "28px" }}>
                                            {layer.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                {/* Underline separator */}
                                <hr className="border-border" />
                                
                                {/* Custody Details */}
                                <div>
                                    <p className="text-muted-foreground text-sm mb-3">{selectedPegData.title}</p>
                                    <div className="text-foreground text-sm mb-3">
                                        {parseTextWithLinks(selectedPegData.content)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CustodyTypeDialog; 