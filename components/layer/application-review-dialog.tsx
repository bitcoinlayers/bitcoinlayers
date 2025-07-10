import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";
import { InfrastructureProject, AssessmentCategory } from "@/content/props";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Image from "next/image";

interface ApplicationReviewDialogProps {
    application: InfrastructureProject;
}

const ApplicationReviewDialog: React.FC<ApplicationReviewDialogProps> = ({ application }) => {
    // Extract Asset Custody data from assessment
    const assetCustodyData = application.assessment?.find(
        assessment => assessment.category === AssessmentCategory.AssetCustody
    );

    if (!assetCustodyData) {
        return (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                    >
                        <Bitcoin className="w-4 h-4 mr-1" />
                        Review
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                    <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={`/logos/${application.slug}.png`}
                                alt={application.title}
                                width={24}
                                height={24}
                                className="rounded-full object-cover bg-muted"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/logos/default.png';
                                }}
                            />
                            <div>
                                <h4 className="text-sm font-semibold text-foreground">
                                    {application.title} - Asset Custody
                                </h4>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                                No asset custody information available for {application.title}.
                            </p>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
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
                    <Bitcoin className="w-4 h-4 mr-1" />
                    Review
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={`/logos/${application.slug}.png`}
                            alt={application.title}
                            width={24}
                            height={24}
                            className="rounded-full object-cover bg-muted"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = '/logos/default.png';
                            }}
                        />
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">
                                {application.title} - Asset Custody
                            </h4>
                        </div>
                    </div>

                    {/* Asset Custody Content */}
                    <div className="space-y-3">
                        <div className="text-sm text-muted-foreground">
                            {assetCustodyData.title}
                        </div>
                        <div className="text-sm text-foreground">
                            {parseTextWithLinks(assetCustodyData.content)}
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default ApplicationReviewDialog; 