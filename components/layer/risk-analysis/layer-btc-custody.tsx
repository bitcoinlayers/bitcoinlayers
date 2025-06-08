"use client";

import React, { useState, useRef, useEffect } from "react";
import RiskContent from "./layer-section-content";
import {
    getRiskColorBackground,
    getRiskColorText,
    getRiskEmoji,
} from "@/util/riskColors";

interface Peg {
    name: string;
    infrastructureSlug: string;
    score: number;
    tier: string;
    title: string;
    content: string;
}

interface BtcCustodyProps {
    category: string;
    pegs?: Peg[];
}

const BtcCustody: React.FC<BtcCustodyProps> = ({ category, pegs = [] }) => {
    const [selectedPeg, setSelectedPeg] = useState<string>(
        pegs.length > 0 ? pegs[0].name : "none",
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedPegData = pegs.length > 0
        ? pegs.find((peg) => peg.name === selectedPeg)
        : null;

    const displayedRiskFactor = selectedPegData ? selectedPegData.tier : "Multiple";

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
        <div className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
                <div className="flex flex-col gap-2">
                    {/* BTC Custody title */}
                    <div className="body_risksection !text-foreground">
                        {category}
                    </div>

                    {/* Dropdown positioned below the title */}
                    {pegs.length > 0 ? (
                        <div className="relative" ref={dropdownRef}>
                            {/* Dropdown Button - now uses foreground color */}
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center gap-2 cursor-pointer text-foreground"
                                style={{
                                    fontFamily: 'Public Sans',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    lineHeight: '28px',
                                }}
                            >
                                {selectedPeg}
                                <ChevronDownIcon />
                            </button>

                            {/* Enhanced Dropdown - now uses design system colors */}
                            {isDropdownOpen && (
                                <div 
                                    className="absolute z-10 bg-popover border border-border rounded-lg shadow-md"
                                    style={{
                                        display: 'flex',
                                        width: '263px',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        left: '-1.312px',
                                        top: '32px',
                                    }}
                                >
                                    {/* Individual Peg Options */}
                                    {pegs.map((peg) => (
                                        <button
                                            key={peg.name}
                                            onClick={() => handleSelectPeg(peg.name)}
                                            className="w-full text-left transition-colors duration-200 hover:bg-brand hover:text-white text-popover-foreground"
                                            style={{
                                                display: 'flex',
                                                height: '56px',
                                                padding: '0px 8px',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                alignSelf: 'stretch',
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* Actual peg logo from logos directory */}
                                                <img
                                                    src={`/logos/${peg.infrastructureSlug}.png`}
                                                    alt={peg.name}
                                                    className="w-6 h-6 rounded-full object-cover bg-muted"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = '/logos/default.png';
                                                    }}
                                                />
                                                <span className="font-medium">{peg.name}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">
                            No pegs available
                        </p>
                    )}
                </div>

                {/* Risk indicator */}
                <div className="h-8 justify-end items-center gap-2 flex lg:flex-row flex-row-reverse">
                    <div
                        className="text-sm font-medium leading-tight"
                        style={{
                            color: getRiskColorText(displayedRiskFactor),
                        }}
                    >
                        {displayedRiskFactor}
                    </div>
                    <div className="w-8 h-8 justify-center items-center flex">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{
                                backgroundColor:
                                    getRiskColorBackground(displayedRiskFactor),
                            }}
                        >
                            <div
                                className="text-center text-base font-bold font-Hack"
                                style={{
                                    color: getRiskColorText(
                                        displayedRiskFactor,
                                    ),
                                }}
                            >
                                {getRiskEmoji(displayedRiskFactor)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="mt-4">
                {pegs.length > 0 && selectedPegData ? (
                    <div>
                        <RiskContent
                            title={selectedPegData.title}
                            content={selectedPegData.content}
                        />
                        <div className="mt-2 text-right">
                            <a
                                href={`/infrastructure/${selectedPegData.infrastructureSlug}`}
                                className="font-semibold hover:underline flex items-center justify-end text-foreground"
                            >
                                Learn more about {selectedPegData.name}
                                <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground">
                        No peg data available
                    </p>
                )}
            </div>
        </div>
    );
};

export default BtcCustody;
