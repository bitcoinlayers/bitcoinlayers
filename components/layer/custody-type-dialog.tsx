import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                    >
                        <Bitcoin className="w-4 h-4 mr-1" />
                        Review
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogTitle className="sr-only">
                        {layer.title} - Custody Type
                    </DialogTitle>
                    <div className="space-y-4">
                        <div className="p-4">
                            <p className="text-muted-foreground">
                                No custody information available for {layer.title}.
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
                    <Bitcoin className="w-4 h-4 mr-1" />
                    Review
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
                        {layer.title} - {layer.underReview ? "Under Review" : "Custody Type"}
                    </DialogTitle>
                    {layer.underReview ? (
                        <UnderReviewModalContent project={layer} title="Custody Type" />
                    ) : (
                        <div className="space-y-6">
                            {/* Combined Network and Custody Info */}
                            {selectedPegData && (
                                <div className="space-y-3">
                                    {/* Network Header */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={`/logos/${layer.slug}.png`}
                                            alt={layer.title}
                                            width={32}
                                            height={32}
                                            className="rounded-full object-cover bg-muted"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/logos/default.png';
                                            }}
                                        />
                                        <div>
                                            <h3 className="text-xl font-medium text-foreground" style={{ lineHeight: "28px" }}>
                                                {layer.title} - Custody Model{pegs.length > 1 ? 's' : ''}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    {/* Underline separator */}
                                    <hr className="border-border" />
                                    
                                    {/* Dropdown for multiple pegs - below line, above title */}
                                    {pegs.length > 1 && (
                                        <div className="relative" ref={dropdownRef}>
                                            <button
                                                onClick={toggleDropdown}
                                                className="flex items-center gap-3 text-foreground hover:text-foreground cursor-pointer bg-transparent py-2"
                                            >
                                                <Image
                                                    src={`/logos/${selectedPegData?.infrastructureSlug}.png`}
                                                    alt={selectedPegData?.name || ""}
                                                    width={20}
                                                    height={20}
                                                    className="rounded-full object-cover bg-muted"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/logos/default.png';
                                                    }}
                                                />
                                                <span className="text-xl font-medium">{selectedPegData?.name}</span>
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    width="17" 
                                                    height="17" 
                                                    viewBox="0 0 17 17" 
                                                    fill="none"
                                                    className="w-4 h-4 opacity-50"
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
                                                <div className="absolute z-10 bg-popover border border-border rounded-lg shadow-md mt-1 min-w-[200px]">
                                                    {pegs.map((peg) => (
                                                        <button
                                                            key={peg.name}
                                                            onClick={() => handleSelectPeg(peg.name)}
                                                            className="w-full text-left transition-colors duration-200 hover:bg-brand hover:text-white text-popover-foreground p-3 flex items-center gap-3"
                                                        >
                                                            <Image
                                                                src={`/logos/${peg.infrastructureSlug}.png`}
                                                                alt={peg.name}
                                                                width={16}
                                                                height={16}
                                                                className="rounded-full object-cover bg-muted"
                                                                onError={(e) => {
                                                                    (e.target as HTMLImageElement).src = '/logos/default.png';
                                                                }}
                                                            />
                                                            <span className="text-sm">{peg.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    
                                    {/* Custody Details */}
                                    <div>
                                        <p className="body_subsection text-muted-foreground mt-4">{selectedPegData.title}</p>
                                        <div className="body_paragraph !text-foreground mt-3">
                                            {parseTextWithLinks(selectedPegData.content)}
                                        </div>
                                        <div className="mt-6 text-right">
                                            <a
                                                href={`/layers/${layer.slug}#trust`}
                                                className="font-semibold hover:underline flex items-center justify-end text-foreground"
                                            >
                                                Learn more about {selectedPegData.name} on {layer.title}
                                                <span className="ml-2">→</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CustodyTypeDialog; 