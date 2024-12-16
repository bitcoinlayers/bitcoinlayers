"use client";

import React, { useState } from "react";
import RiskContent from "./layer-section-content";
import {
    getRiskColorBackground,
    getRiskColorText,
    getRiskEmoji,
} from "@/util/riskColors";
import { Button } from "@/components/ui/button";

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
    pegs: Peg[];
}

const BtcCustody: React.FC<BtcCustodyProps> = ({ category, pegs }) => {
    const [selectedPeg, setSelectedPeg] = useState<string>(pegs[0].name);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const selectedPegData =
        selectedPeg !== "view-all"
            ? pegs.find((peg) => peg.name === selectedPeg)
            : null;

    const displayedRiskFactor =
        selectedPeg !== "view-all"
            ? selectedPegData?.tier || "Multiple"
            : "Multiple";

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleSelectPeg = (pegName: string) => {
        setSelectedPeg(pegName);
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
                <div className="body_risksection !text-foreground">
                    {category}

                    <div className="relative ml-4 inline-block">
                        <Button
                            variant="brand"
                            onClick={toggleDropdown}
                            className="p-2 text-sm rounded-md border-brand bg-transparent border"
                        >
                            {selectedPeg === "view-all"
                                ? "View All"
                                : selectedPeg}
                        </Button>

                        {isDropdownOpen && (
                            <div className="absolute text-sm mt-2 w-40 bg-background border border-border rounded-md shadow-md z-10">
                                <button
                                    onClick={() => handleSelectPeg("view-all")}
                                    className="w-full text-left p-2 hover:bg-brand hover:text-white"
                                >
                                    View All
                                </button>
                                {pegs.map((peg) => (
                                    <button
                                        key={peg.name}
                                        onClick={() =>
                                            handleSelectPeg(peg.name)
                                        }
                                        className="w-full text-sm text-left p-2 hover:bg-brand hover:text-white"
                                    >
                                        {peg.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
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

            <div className="mt-4">
                {selectedPeg === "view-all"
                    ? pegs.map((peg) => (
                          <div key={peg.name}>
                              <RiskContent
                                  name={peg.name}
                                  title={peg.title}
                                  content={peg.content}
                              />
                              <div className="mt-2 text-right">
                                  <a
                                      href={`/infrastructure/${peg.infrastructureSlug}`}
                                      className="font-semibold hover:underline flex items-center justify-end"
                                  >
                                      Learn more about {peg.name}
                                      <span className="ml-2">→</span>
                                  </a>
                              </div>
                          </div>
                      ))
                    : selectedPegData && (
                          <div>
                              <RiskContent
                                  name={selectedPegData.name}
                                  title={selectedPegData.title}
                                  content={selectedPegData.content}
                              />
                              <div className="mt-2 text-right">
                                  <a
                                      href={`/infrastructure/${selectedPegData.infrastructureSlug}`}
                                      className="font-semibold hover:underline flex items-center justify-end"
                                  >
                                      Learn more about {selectedPegData.name}
                                      <span className="ml-2">→</span>
                                  </a>
                              </div>
                          </div>
                      )}
            </div>
        </div>
    );
};

export default BtcCustody;
