import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
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
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                    >
                        <Coins className="w-4 h-4 mr-1" />
                        Use Cases
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogTitle className="sr-only">
                        {application.title} - Use Cases
                    </DialogTitle>
                    <div className="space-y-4">
                        <div className="p-4">
                            <p className="text-muted-foreground">
                                No use case information available for {application.title}.
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
                    <Coins className="w-4 h-4 mr-1" />
                    Use Cases
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
                        {application.title} - Use Cases
                    </DialogTitle>
                    <div className="space-y-6">
                        {/* Application Header */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={`/logos/${application.slug}.png`}
                                alt={application.title}
                                width={32}
                                height={32}
                                className="rounded-full object-cover bg-muted"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/bitcoinlayers-logo.png';
                                }}
                            />
                            <div>
                                <h3 className="text-xl font-medium text-foreground" style={{ lineHeight: "28px" }}>
                                    {application.title} - Use Cases
                                </h3>
                            </div>
                        </div>
                        
                        {/* Underline separator */}
                        <hr className="border-border" />
                        
                        {/* Use Cases List */}
                        <div className="space-y-6">
                            {useCasesSection.content.map((useCase, index) => (
                                <div key={index} className="space-y-3">
                                    {/* Use Case Title */}
                                    <h4 className="body_subsection text-muted-foreground">
                                        {useCase.title}
                                    </h4>
                                    
                                    {/* Use Case Content */}
                                    <div className="body_paragraph !text-foreground">
                                        {parseTextWithLinks(useCase.content)}
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

export default UseCaseDialog; 