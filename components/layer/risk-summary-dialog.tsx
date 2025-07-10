import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import RiskSummary from "@/components/shared/risk-summary";
import UnderReviewModalContent from "@/components/under-review-modal-content";
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
    // Don't show button if no risk summary content and not under review
    if ((!riskSummary || riskSummary.length === 0) && !layer.underReview) {
        return (
            <div className="text-muted-foreground text-sm">
                No summary
            </div>
        );
    }

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                >
                    <AlertTriangleIcon className="w-4 h-4 mr-1" />
                    Review
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                {layer.underReview ? (
                    <div className="space-y-3">
                        <div className="text-sm font-medium">Risk Summary - Under Review</div>
                        <p className="text-sm text-muted-foreground">
                            This project&apos;s risk assessment is currently under review.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* Network Header */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={`/logos/${layer.slug}.png`}
                                alt={layer.title}
                                width={24}
                                height={24}
                                className="rounded-full object-cover bg-muted"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/logos/default.png';
                                }}
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-foreground">
                                    {layer.title} - Risk Summary
                                </h4>
                            </div>
                        </div>
                        
                        {/* Risk Summary Content */}
                        <div className="space-y-2">
                            <RiskSummary content={riskSummary} showBackground={false} showTitle={false} />
                        </div>
                    </div>
                )}
            </HoverCardContent>
        </HoverCard>
    );
};

export default RiskSummaryDialog; 