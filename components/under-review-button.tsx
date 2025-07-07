import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ClockIcon } from "lucide-react";
import { LayerProject, InfrastructureProject } from "@/content/props";
import Image from "next/image";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface UnderReviewButtonProps {
    project: LayerProject | InfrastructureProject;
}

const UnderReviewButton: React.FC<UnderReviewButtonProps> = ({ project }) => {
    if (!project.underReview) {
        return null;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-3 bg-[#FFF3CD] dark:bg-[#664D03] border-[#FFF3CD] dark:border-[#664D03] hover:bg-[#FFE69C] dark:hover:bg-[#997404] text-[#664D03] dark:text-[#FFF3CD]"
                >
                    <ClockIcon className="w-4 h-4 mr-1" />
                    Under Review
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
                        {project.title} - Under Review
                    </DialogTitle>
                    <div className="space-y-6">
                        {/* Project Header */}
                        <div className="flex items-center gap-3">
                            <Image
                                src={`/logos/${project.slug}.png`}
                                alt={project.title}
                                width={32}
                                height={32}
                                className="rounded-full object-cover bg-muted"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/logos/default.png';
                                }}
                            />
                            <div>
                                <h3 className="text-xl font-medium text-foreground" style={{ lineHeight: "28px" }}>
                                    {project.title} - Under Review
                                </h3>
                            </div>
                        </div>
                        
                        {/* Underline separator */}
                        <hr className="border-border" />
                        
                        {/* Under Review Content */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-semibold text-foreground mb-3">
                                    Project Under Review
                                </h4>
                                <div className="space-y-3">
                                    <p className="text-foreground">
                                        This project's categorization and technical implementation are currently under review by our team.
                                    </p>
                                    <p className="text-foreground">
                                        We are evaluating whether it meets our technical standards to be considered a bitcoin sidesystem or integrated chain.
                                    </p>
                                    {project.notice && (
                                        <div className="bg-muted p-4 rounded-lg">
                                            <p className="text-foreground">
                                                {parseTextWithLinks(project.notice)}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <div className="border-t border-border pt-4">
                                <h5 className="font-medium text-foreground mb-2">What does this mean?</h5>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Some information may be incomplete or subject to change</li>
                                    <li>• Risk assessments and categorization are preliminary</li>
                                    <li>• Final categorization will be published once review is complete</li>
                                </ul>
                            </div>
                            
                            <div className="border-t border-border pt-4">
                                <p className="text-sm text-muted-foreground">
                                    <a
                                        href="https://www.lxresearch.co/starting-to-define-layers-a-year-later/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-blue-600 dark:text-blue-400"
                                    >
                                        Learn more about our categorization standards →
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UnderReviewButton; 