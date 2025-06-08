import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import RiskSummary from "@/components/shared/risk-summary";
import { LayerProject, InfrastructureProject } from "@/content/props";
import Image from "next/image";

interface RiskSummaryContent {
    title?: string;
    content: string;
}

interface RiskSummaryDialogProps {
    layer: LayerProject | InfrastructureProject;
    riskSummary: RiskSummaryContent[];
}

const RiskSummaryDialog: React.FC<RiskSummaryDialogProps> = ({ layer, riskSummary }) => {
    // Don't show button if no risk summary content
    if (!riskSummary || riskSummary.length === 0) {
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
                    className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                >
                    <AlertTriangleIcon className="w-4 h-4 mr-1" />
                    Review
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogTitle className="sr-only">
                    {layer.title} - Risk Summary
                </DialogTitle>
                <div className="space-y-6">
                    {/* Single Combined Card */}
                    <div className="p-4 bg-muted/30 rounded-lg space-y-4">
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
                                <h3 className="font-semibold text-foreground">{layer.title} risk summary</h3>
                            </div>
                        </div>
                        
                        {/* Risk Summary Content */}
                        <div>
                            <RiskSummary content={riskSummary} showBackground={false} />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default RiskSummaryDialog; 