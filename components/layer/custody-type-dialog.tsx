import React, { useState, useRef, useEffect } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";
import { LayerProject, InfrastructureProject, RiskCategory } from "@/content/props";
import { getRiskColorBackground, getRiskColorText, getRiskEmoji } from "@/util/riskColors";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import UnderReviewModalContent from "@/components/under-review-modal-content";
import SectionAlertComponent from "@/components/section-alert";
import InfrastructureReviewModal from "@/components/infrastructure-review-modal";
import { allInfrastructures } from "@/util/infrastructure_index";
import { allMore } from "@/util/more_index";
import { allOpcodes } from "@/util/opcode_index";
import Image from "next/image";

interface Peg {
    name: string;
    infrastructureSlug: string;
    score: number;
    tier: string;
    title: string;
    content: string;
    alert?: {
        type: "info" | "warning" | "error";
        title: string;
        content: string;
        linkText?: string;
        linkUrl?: string;
    };
}

interface CustodyTypeDialogProps {
    layer: LayerProject | InfrastructureProject;
}

const CustodyTypeDialog: React.FC<CustodyTypeDialogProps> = ({ layer }) => {
    // Extract BTC custody data from riskAnalysis
    const btcCustodyData = 'riskAnalysis' in layer 
        ? layer.riskAnalysis?.find(analysis => analysis.category === RiskCategory.BtcCustody)
        : null;
    
    const pegs = btcCustodyData?.pegs || [];
    const [selectedPeg, setSelectedPeg] = useState<string>(
        pegs.length > 0 ? pegs[0].name : ""
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedPegData = pegs.find(peg => peg.name === selectedPeg);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleSelectPeg = (pegName: string) => {
        setSelectedPeg(pegName);
        setIsDropdownOpen(false);
    };

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    if ((!btcCustodyData || pegs.length === 0) && !layer.underReview) {
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
                <HoverCardContent className="w-80">
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                            No custody information available for {layer.title}.
                        </p>
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
                {layer.underReview ? (
                    <div className="space-y-3">
                        <div className="text-sm font-medium">Custody Type - Under Review</div>
                        <p className="text-sm text-muted-foreground">
                            This project's custody model is currently under review.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* Combined Network and Custody Info */}
                        {selectedPegData && (
                            <div className="space-y-3">
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
                                            {layer.title} - Custody Model{pegs.length > 1 ? 's' : ''}
                                        </h4>
                                    </div>
                                </div>
                                
                                {/* Dropdown for multiple pegs */}
                                {pegs.length > 1 && (
                                    <div className="relative" ref={dropdownRef}>
                                        <button
                                            onClick={toggleDropdown}
                                            className="flex items-center gap-2 text-foreground hover:text-foreground cursor-pointer bg-transparent py-1"
                                        >
                                            <Image
                                                src={`/logos/${selectedPegData?.infrastructureSlug}.png`}
                                                alt={selectedPegData?.name || ""}
                                                width={16}
                                                height={16}
                                                className="rounded-full object-cover bg-muted"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = '/logos/default.png';
                                                }}
                                            />
                                            <span className="text-sm font-medium">{selectedPegData?.name}</span>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="17" 
                                                height="17" 
                                                viewBox="0 0 17 17" 
                                                fill="none"
                                                className="w-3 h-3 opacity-50"
                                            >
                                                <g opacity="0.5">
                                                    <path 
                                                        d="M4.31226 6.6875L8.31226 10.6875L12.3123 6.6875" 
                                                        stroke="currentColor" 
                                                        strokeWidth="1.33" 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>
                                        </button>
                                        {/* Dropdown menu */}
                                        {isDropdownOpen && (
                                            <div className="absolute z-10 bg-popover border border-border rounded-lg shadow-md mt-1 min-w-[180px]">
                                                {pegs.map((peg) => (
                                                    <button
                                                        key={peg.name}
                                                        onClick={() => handleSelectPeg(peg.name)}
                                                        className="w-full text-left transition-colors duration-200 hover:bg-brand hover:text-white text-popover-foreground p-2 flex items-center gap-2"
                                                    >
                                                        <Image
                                                            src={`/logos/${peg.infrastructureSlug}.png`}
                                                            alt={peg.name}
                                                            width={14}
                                                            height={14}
                                                            className="rounded-full object-cover bg-muted"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).src = '/logos/default.png';
                                                            }}
                                                        />
                                                        <span className="text-xs">{peg.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                                
                                {/* Custody Details */}
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground">{selectedPegData.title}</p>
                                    <div className="text-sm text-foreground">
                                        {parseTextWithLinks(selectedPegData.content)}
                                    </div>
                                    <div className="pt-2 border-t border-border">
                                        <a
                                            href={`/layers/${layer.slug}#trust`}
                                            className="text-xs font-medium text-foreground hover:underline flex items-center gap-1"
                                        >
                                            Learn more about {selectedPegData.name} on {layer.title}
                                            <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </HoverCardContent>
        </HoverCard>
    );
};

export default CustodyTypeDialog; 