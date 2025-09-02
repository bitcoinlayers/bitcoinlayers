import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { InfrastructureProject } from "@/content/props";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import ProjectLinks from "@/components/project-links";
import RiskSummary from "@/components/shared/risk-summary";
import RiskAnalysis from "@/components/layer/risk-analysis/infra-container";
import UnderReviewModalContent from "@/components/under-review-modal-content";
import SectionAlertComponent from "@/components/section-alert";
import { popupOnlyInfrastructures } from "@/util/infrastructure_index";

interface InfrastructureReviewDropdownProps {
    infrastructureSlug: string;
    triggerText: string;
    infrastructure?: InfrastructureProject;
}

const InfrastructureReviewDropdown: React.FC<InfrastructureReviewDropdownProps> = ({
    infrastructureSlug,
    triggerText,
    infrastructure,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Check if this is a popup-only infrastructure (no full review page)
    const isPopupOnly = infrastructure ? 
        popupOnlyInfrastructures.some(popupInfra => popupInfra.slug === infrastructure.slug) : 
        popupOnlyInfrastructures.some(popupInfra => popupInfra.slug === infrastructureSlug);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!infrastructure) {
        // For popup-only infrastructures, don't show any link since there's no full review page
        if (isPopupOnly) {
            return (
                <div className="mt-2 text-right">
                    <span className="font-semibold text-muted-foreground">
                        {triggerText} (No full review available)
                    </span>
                </div>
            );
        }
        
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
        <div className="mt-2" ref={dropdownRef}>
            <div className="text-right">
                <button
                    onClick={toggleDropdown}
                    className="font-semibold hover:underline flex items-center justify-end text-foreground cursor-pointer"
                >
                    {triggerText}
                    <span className="ml-2">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                </button>
            </div>

            {isOpen && (
                <div className="mt-4 w-full bg-background border border-border rounded-lg shadow-sm">
                    {/* Header */}
                    <div className="bg-background border-b border-border p-6">
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
                                {!isPopupOnly && (
                                    <a
                                        href={`/infrastructure/${infrastructure.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        View full review & data
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="h-6 w-6 p-0 hover:bg-muted rounded-sm flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                    <span className="sr-only">Close</span>
                                </button>
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
                            <div className="pt-4">
                                <ProjectLinks links={infrastructure.links} />
                            </div>
                        </div>

                        {/* Full width separator */}
                        <div className="border-t border-border -mx-6"></div>

                        {/* Risk Summary */}
                        {infrastructure.riskSummary && infrastructure.riskSummary.length > 0 && (
                            <div className="space-y-4">
                                <RiskSummary content={infrastructure.riskSummary} />
                            </div>
                        )}

                        {/* Assessment */}
                        {infrastructure.assessment && infrastructure.assessment.length > 0 && !infrastructure.underReview && (
                            <div className="space-y-4">
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
                                                    {content.alert && (
                                                        <div className="mt-4">
                                                            <SectionAlertComponent alert={content.alert} />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfrastructureReviewDropdown;
