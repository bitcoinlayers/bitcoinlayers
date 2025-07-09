import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, X } from "lucide-react";
import Image from "next/image";
import { InfrastructureProject } from "@/content/props";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import ProjectLinks from "@/components/project-links";
import RiskSummary from "@/components/shared/risk-summary";
import RiskAnalysis from "@/components/layer/risk-analysis/infra-container";
import UnderReviewModalContent from "@/components/under-review-modal-content";

interface InfrastructureReviewModalProps {
    infrastructureSlug: string;
    triggerText: string;
    infrastructure?: InfrastructureProject;
}

const InfrastructureReviewModal: React.FC<InfrastructureReviewModalProps> = ({
    infrastructureSlug,
    triggerText,
    infrastructure,
}) => {
    if (!infrastructure) {
        return (
            <div className="mt-2 text-right">
                <a
                    href={`/infrastructure/${infrastructureSlug}`}
                    className="font-semibold hover:underline flex items-center justify-end text-foreground"
                >
                    {triggerText}
                    <span className="ml-2">→</span>
                </a>
            </div>
        );
    }

    return (
        <div className="mt-2 text-right">
            <Dialog>
                <DialogTrigger asChild>
                    <div className="font-semibold hover:underline flex items-center justify-end text-foreground cursor-pointer">
                        {triggerText}
                        <span className="ml-2">→</span>
                    </div>
                </DialogTrigger>
                <DialogContent 
                    className="max-w-4xl max-h-[85vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none [&>button]:hidden"
                    style={{ width: "auto", maxWidth: "90vw" }}
                >
                    <div className="bg-popover border border-border rounded-lg shadow-lg">
                        <DialogTitle className="sr-only">
                            {infrastructure.title} - Infrastructure Review
                        </DialogTitle>
                        
                        {/* Header */}
                        <div className="sticky top-0 bg-popover border-b border-border p-6 rounded-t-lg">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={`/logos/${infrastructure.slug}.png`}
                                        alt={infrastructure.title}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover bg-muted"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/bitcoinlayers-logo.png';
                                        }}
                                    />
                                    <div>
                                        <h2 className="text-2xl font-bold text-foreground">
                                            {infrastructure.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            {infrastructure.entityType} • {infrastructure.live}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={`/infrastructure/${infrastructure.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        View full review & data
                                        <ExternalLinkIcon className="w-4 h-4" />
                                    </a>
                                    <DialogClose asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 w-8 p-0 hover:bg-muted"
                                        >
                                            <X className="w-4 h-4" />
                                            <span className="sr-only">Close</span>
                                        </Button>
                                    </DialogClose>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Under Review Notice */}
                            {infrastructure.underReview && (
                                <div className="bg-muted/50 rounded-lg p-4">
                                    <UnderReviewModalContent project={infrastructure} title="Infrastructure Under Review" />
                                </div>
                            )}

                            {/* Overview */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground">Overview</h3>
                                
                                {/* Categories */}
                                <div className="flex flex-wrap gap-6 text-sm">
                                    <div>
                                        <span className="text-muted-foreground">Status:</span>{" "}
                                        <span className="text-foreground">{infrastructure.live}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Type:</span>{" "}
                                        <span className="text-foreground">{infrastructure.entityType}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">Purpose:</span>{" "}
                                        <span className="text-foreground">{infrastructure.purpose}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="text-muted-foreground leading-relaxed">
                                    {parseTextWithLinks(infrastructure.description)}
                                </div>

                                {/* Project Links */}
                                <div className="pt-4 border-t border-border">
                                    <ProjectLinks links={infrastructure.links} />
                                </div>
                            </div>

                            {/* Risk Summary */}
                            {infrastructure.riskSummary && infrastructure.riskSummary.length > 0 && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-foreground">Risk Summary</h3>
                                    <RiskSummary content={infrastructure.riskSummary} />
                                </div>
                            )}

                            {/* Assessment */}
                            {infrastructure.assessment && infrastructure.assessment.length > 0 && !infrastructure.underReview && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-foreground">Assessment</h3>
                                    <RiskAnalysis
                                        riskAnalysis={infrastructure.assessment}
                                        riskFactors={infrastructure.riskFactors}
                                        infrastructure={infrastructure}
                                    />
                                </div>
                            )}

                            {/* Additional Sections */}
                            {infrastructure.sections && infrastructure.sections.length > 0 && (
                                <div className="space-y-6">
                                    {infrastructure.sections.map((section, index) => (
                                        <div key={index} className="self-stretch lg:px-8 px-4 pt-6 pb-8 bg-background rounded-xl border border-border">
                                            <div className="self-stretch justify-start items-start gap-4 mb-4">
                                                <div className="body_section !text-foreground">
                                                    {section.title}
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                {section.content.map((content, contentIndex) => (
                                                    <div key={contentIndex}>
                                                        {content.title && (
                                                            <div className="body_subsection !text-muted-foreground mb-3">
                                                                {parseTextWithLinks(content.title)}
                                                            </div>
                                                        )}
                                                        <div className="body_paragraph !text-foreground">
                                                            {parseTextWithLinks(content.content)}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default InfrastructureReviewModal; 