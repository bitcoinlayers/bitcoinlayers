"use client";

import React, { useState, useEffect } from "react";
import RiskContent from "./risk-content";
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
    pegs: Peg[];
}

const BtcCustody: React.FC<BtcCustodyProps> = ({ category, pegs }) => {
    const [selectedPeg, setSelectedPeg] = useState<string>("view-all");

    useEffect(() => {
        if (!selectedPeg && pegs.length > 0) {
            setSelectedPeg(pegs[0].name);
        }
    }, [pegs, selectedPeg]);

    const selectedPegData =
        selectedPeg !== "view-all"
            ? pegs.find((peg) => peg.name === selectedPeg)
            : null;

    const displayedRiskFactor =
        selectedPeg !== "view-all"
            ? selectedPegData?.tier || "Multiple"
            : "Multiple";

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
                <div className="body_risksection !text-foreground">
                    {category}
                    <select
                        className="ml-4 p-2 text-sm border border-border rounded-md bg-background text-foreground"
                        value={selectedPeg}
                        onChange={(e) => setSelectedPeg(e.target.value)}
                    >
                        <option value="view-all">View All</option>
                        {pegs.map((peg) => (
                            <option key={peg.name} value={peg.name}>
                                {peg.name}
                            </option>
                        ))}
                    </select>
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
