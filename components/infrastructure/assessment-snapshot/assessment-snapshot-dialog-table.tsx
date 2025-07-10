import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfrastructureProject, AssessmentCategory } from "@/content/props";
import { getRiskColorBackground, getRiskColorText } from "@/util/riskColors";
import { isMobile } from "react-device-detect";
import Image from "next/image";

interface AssessmentSnapshotDialogProps {
    infrastructure: InfrastructureProject;
}

const AssessmentSnapshotDialog: React.FC<AssessmentSnapshotDialogProps> = ({ infrastructure }) => {
    const assessmentCategories = [
        { key: AssessmentCategory.AssetCustody, title: "Asset Custody" },
        { key: AssessmentCategory.KeyStorage, title: "Key Storage" },
        { key: AssessmentCategory.Signing, title: "Signing Mechanism" },
        { key: AssessmentCategory.CensorshipResistance, title: "Censorship Resistance" },
        { key: AssessmentCategory.UserRisk, title: "User Risk" },
        { key: AssessmentCategory.Governance, title: "Governance" },
        { key: AssessmentCategory.SupplyIssuance, title: "Supply Issuance" },
        { key: AssessmentCategory.StakingType, title: "Staking Type" },
    ];

    const TriggerComponent = (
        <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
        >
            View Snapshot
        </Button>
    );

    const ContentComponent = (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Image
                    src={`/logos/${infrastructure.slug}.png`}
                    alt={infrastructure.title}
                    width={24}
                    height={24}
                    className="rounded-full object-cover bg-muted"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/logos/default.png';
                    }}
                />
                <div>
                    <h4 className="text-sm font-semibold text-foreground">
                        {infrastructure.title} - Assessment Snapshot
                    </h4>
                </div>
            </div>
            
            {/* Assessment Categories */}
            <div className="space-y-3">
                {assessmentCategories.map((category) => {
                    const assessment = infrastructure.assessment?.find(
                        a => a.category === category.key
                    );
                    
                    if (!assessment) return null;
                    
                    return (
                        <div key={category.key} className="flex items-start gap-3">
                            <div
                                className="w-6 h-6 p-1 rounded-full justify-center items-center flex"
                                style={{
                                    backgroundColor: getRiskColorBackground(assessment.tier),
                                }}
                            >
                                <div className="w-3 h-3 rounded-full bg-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium">
                                        {category.title}:
                                    </span>
                                    <span
                                        className="text-sm font-medium"
                                        style={{
                                            color: getRiskColorText(assessment.tier),
                                        }}
                                    >
                                        {assessment.tier}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {assessment.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    // Use Dialog for mobile, HoverCard for desktop
    if (isMobile) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    {TriggerComponent}
                </DialogTrigger>
                <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[400px] rounded-lg">
                    {ContentComponent}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {TriggerComponent}
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                {ContentComponent}
            </HoverCardContent>
        </HoverCard>
    );
};

export default AssessmentSnapshotDialog;
