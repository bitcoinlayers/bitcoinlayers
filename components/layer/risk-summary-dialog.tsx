import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import RiskSummary from "@/components/shared/risk-summary";
import { LayerProject, InfrastructureProject } from "@/content/props";

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
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                        {layer.title} - Risk Summary
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <RiskSummary content={riskSummary} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default RiskSummaryDialog; 