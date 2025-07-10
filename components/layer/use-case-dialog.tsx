import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import { InfrastructureProject } from "@/content/props";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import Image from "next/image";

interface UseCaseDialogProps {
    application: InfrastructureProject;
}

const UseCaseDialog: React.FC<UseCaseDialogProps> = ({ application }) => {
    // Extract use cases data from sections
    const useCasesSection = application.sections?.find(
        section => section.id === "usecases"
    );

    if (!useCasesSection || !useCasesSection.content || useCasesSection.content.length === 0) {
        return (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                    >
                        <Coins className="w-4 h-4 mr-1" />
                        Use Cases
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
                                    {application.title} - Use Cases
                                </h4>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                                No use case information available for {application.title}.
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
                    <Coins className="w-4 h-4 mr-1" />
                    Use Cases
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
                                {application.title} - Use Cases
                            </h4>
                        </div>
                    </div>
                    
                    {/* Use Cases List */}
                    <div className="space-y-3">
                        {useCasesSection.content.map((useCase, index) => (
                            <div key={index} className="space-y-2">
                                {/* Use Case Title */}
                                <div className="text-sm font-medium text-muted-foreground">
                                    {useCase.title}
                                </div>
                                
                                {/* Use Case Content */}
                                <div className="text-sm text-foreground">
                                    {parseTextWithLinks(useCase.content)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default UseCaseDialog; 