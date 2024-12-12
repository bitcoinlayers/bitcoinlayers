"use client";

import React, { useState, useEffect } from "react";
import RiskHeader from "./risk-header";
import RiskContent from "./risk-content";

interface Peg {
    name: string;
    infrastructureSlug: string;
    score: number;
    tier: string;
    title: string;
    content: string;
}

interface BtcCustodyHeaderProps {
    category: string;
    riskFactor: string;
    pegs: Peg[];
}

const BtcCustodyHeader: React.FC<BtcCustodyHeaderProps> = ({
    category,
    pegs,
}) => {
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

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <RiskHeader
                category={category}
                pegs={pegs}
                selectedPeg={selectedPeg}
                onPegChange={setSelectedPeg}
                riskFactor={""}
            />
            <div className="mt-4">
                {selectedPeg === "view-all"
                    ? pegs.map((peg) => (
                          <div key={peg.name} className="">
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
                          <div className="">
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

export default BtcCustodyHeader;
