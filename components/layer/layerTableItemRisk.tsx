import { getRiskColorBackground, getRiskColorIcon, getRiskColorText } from "@/util/riskColors";
import RiskSnapshot from "./riskSnapshot";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject, Project } from "@/content/props";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useState, useEffect, useRef } from "react";

interface RiskProps {
    layer: Project;
}

const Risk: React.FC<RiskProps> = ({ layer }) => {
    const riskLevels = (layer as LayerProject).riskAnalysis;
    const riskFactors = (layer as LayerProject).riskFactors;
    
    // State for BTC custody peg selection
    const btcCustodyPegs = riskLevels?.[0]?.pegs || [];
    const [selectedPeg, setSelectedPeg] = useState<string>(
        btcCustodyPegs.length > 0 ? btcCustodyPegs[0].name : ""
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedPegData = btcCustodyPegs.find(peg => peg.name === selectedPeg);

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

    const getRiskFactor = (riskLevel: any, index: number): string => {
        if (index === 0 && selectedPegData) {
            return selectedPegData.tier;
        }
        return riskFactors?.[index] || "Under Review";
    };

    const getRiskTitle = (riskLevel: any, index: number): string => {
        if (index === 0 && selectedPegData) {
            return selectedPegData.title;
        }
        return riskLevel?.title || "Under Review";
    };

    const RiskIcon = ({
        riskFactor,
        IconComponent,
    }: {
        riskFactor: string;
        IconComponent: React.FC<{ fill: string }>;
    }) => {
        const bgColor = getRiskColorBackground(riskFactor);
        const fillColor = getRiskColorIcon(riskFactor);
        return (
            <div
                className="w-6 h-6 p-1 rounded-full justify-center items-center flex"
                style={{ backgroundColor: bgColor }}
            >
                <IconComponent fill={fillColor} />
            </div>
        );
    };

    const riskCategories = [
        { title: "BTC Custody", IconComponent: RiskIconBridge },
        { title: "Data Availability", IconComponent: RiskIconDA },
        { title: "Operators", IconComponent: RiskIconOperators },
        { title: "Settlement", IconComponent: RiskIconSettlement },
    ];

    // Chevron down icon component
    const ChevronDownIcon = () => (
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
    );

    const TriggerComponent = (
        <div className="lg:w-44 w-34 lg:p-4 p-2 justify-start items-center gap-4 inline-flex lg:gap-4 gap-1 cursor-pointer">
            <RiskIcon
                riskFactor={getRiskFactor(riskLevels[0], 0)}
                IconComponent={RiskIconBridge}
            />
            <RiskIcon
                riskFactor={getRiskFactor(riskLevels[1], 1)}
                IconComponent={RiskIconDA}
            />
            <RiskIcon
                riskFactor={getRiskFactor(riskLevels[2], 2)}
                IconComponent={RiskIconOperators}
            />
            <RiskIcon
                riskFactor={getRiskFactor(riskLevels[3], 3)}
                IconComponent={RiskIconSettlement}
            />
        </div>
    );

    const ContentComponent = (
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
                        {layer.title} - Trust Assumptions
                    </h4>
                </div>
            </div>
            
            {/* BTC Custody Dropdown - if multiple pegs available */}
            {btcCustodyPegs.length > 1 && (
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
                        <ChevronDownIcon />
                    </button>
                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div className="absolute z-50 bg-popover border border-border rounded-lg shadow-md mt-1 min-w-[180px]">
                            {btcCustodyPegs.map((peg) => (
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
            
            {/* Risk Factors */}
            <div className="space-y-3">
                {riskCategories.map((category, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <RiskIcon
                            riskFactor={getRiskFactor(riskLevels[index], index)}
                            IconComponent={category.IconComponent}
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium">
                                    {category.title}:
                                </span>
                                <span
                                    className="text-sm font-medium"
                                    style={{
                                        color: getRiskColorText(getRiskFactor(riskLevels[index], index)),
                                    }}
                                >
                                    {getRiskFactor(riskLevels[index], index)}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {getRiskTitle(riskLevels[index], index)}
                            </p>
                        </div>
                    </div>
                ))}
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

export default Risk;
