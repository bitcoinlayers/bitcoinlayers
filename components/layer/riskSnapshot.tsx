"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    getRiskColorText,
    getRiskColorIcon,
    getRiskColorBackground,
} from "@/util/riskColors";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { LayerProject, Project } from "@/content/props";
import Link from "next/link";
import Image from "next/image";

interface RiskSnapshotProps {
    layer: Project;
    title?: string;
}

const RiskIcon: React.FC<{
    riskFactor: string;
    IconComponent: React.FC<{ fill: string }>;
}> = ({ riskFactor, IconComponent }) => {
    const bgColor = getRiskColorBackground(riskFactor);
    const fillColor = getRiskColorIcon(riskFactor);
    return (
        <div
            className="w-5 h-5 sm:w-6 sm:h-6 p-1 rounded-full justify-center items-center flex"
            style={{ backgroundColor: bgColor }}
        >
            <IconComponent fill={fillColor} />
        </div>
    );
};

const RiskSnapshot: React.FC<RiskSnapshotProps> = ({ layer, title }) => {
    const riskAnalysis = (layer as LayerProject).riskAnalysis;
    const riskFactors = layer.riskFactors;
    
    // Get BTC custody data and pegs
    const btcCustodyData = riskAnalysis[0];
    const pegs = btcCustodyData?.pegs || [];
    
    // State for selected peg (only for BTC custody)
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

    const getRiskFactor = (risk: any, index: number): string => {
        if (index === 0 && selectedPegData) {
            return selectedPegData.tier;
        }
        return riskFactors[index] || "Unknown";
    };

    const getRiskTitle = (risk: any, index: number): string => {
        if (index === 0 && selectedPegData) {
            return selectedPegData.title;
        }
        return risk.title || "Unknown";
    };

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

    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <DialogHeader className="mb-4 sm:mb-6 pb-2 font-bold border-b border-border">
                <DialogTitle className="sr-only">
                    {title || "Risk Snapshot"}
                </DialogTitle>
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
                            {title || "Risk Snapshot"}
                        </h3>
                    </div>
                </div>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {riskAnalysis.map((risk, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <RiskIcon
                                riskFactor={getRiskFactor(risk, index)}
                                IconComponent={
                                    [
                                        RiskIconBridge,
                                        RiskIconDA,
                                        RiskIconOperators,
                                        RiskIconSettlement,
                                    ][index]
                                }
                            />
                        </div>
                        <div className="ml-3 sm:ml-4 flex-1">
                            <div className="mb-1 sm:mb-2 font-semibold text-sm sm:text-base flex items-center justify-between">
                                <div>
                                    {/* BTC Custody with dropdown */}
                                    {index === 0 && pegs.length > 1 ? (
                                        <div className="flex items-center gap-2">
                                            <span>
                                                {risk.category}:{" "}
                                                <span
                                                    style={{
                                                        color: getRiskColorText(
                                                            getRiskFactor(risk, index),
                                                        ),
                                                    }}
                                                >
                                                    {getRiskFactor(risk, index)}
                                                </span>
                                            </span>
                                            <div className="relative" ref={dropdownRef}>
                                                <button
                                                    onClick={toggleDropdown}
                                                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                                                >
                                                    <span className="text-xs">({selectedPeg})</span>
                                                    <ChevronDownIcon />
                                                </button>
                                                {isDropdownOpen && (
                                                    <div className="absolute z-10 bg-popover border border-border rounded-lg shadow-md mt-1 min-w-[200px]">
                                                        {pegs.map((peg) => (
                                                            <button
                                                                key={peg.name}
                                                                onClick={() => handleSelectPeg(peg.name)}
                                                                className="w-full text-left transition-colors duration-200 hover:bg-brand hover:text-white text-popover-foreground p-2 flex items-center gap-2"
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
                                                                <span className="text-xs">{peg.name}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <span>
                                            {risk.category}:{" "}
                                            <span
                                                style={{
                                                    color: getRiskColorText(
                                                        getRiskFactor(risk, index),
                                                    ),
                                                }}
                                            >
                                                {getRiskFactor(risk, index)}
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="text-xs sm:text-sm">
                                {getRiskTitle(risk, index)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <DialogFooter className="mt-4 sm:mb-t pt-4 pb-2 border-t flex-row justify-between sm:justify-between">
                <Link
                    href={`/layers/${layer.slug}`}
                    className="hover:underline text-left text-xs font-medium"
                >
                    View full review →
                </Link>
                <Link
                    href="/methodology"
                    className="hover:underline text-right text-xs"
                >
                    Learn more about how we analyze trust assumptions past the
                    L1.
                </Link>
            </DialogFooter>
        </div>
    );
};

export default RiskSnapshot;
