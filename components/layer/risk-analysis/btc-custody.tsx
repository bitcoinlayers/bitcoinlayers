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

interface BtcCustodyProps {
    category: string;
    riskFactor: string;
    pegs: Peg[];
}

const BtcCustody: React.FC<BtcCustodyProps> = ({
    category,
    riskFactor,
    pegs,
}) => {
    const [selectedPeg, setSelectedPeg] = useState<string | null>(null);

    useEffect(() => {
        if (!selectedPeg && pegs.length > 0) {
            setSelectedPeg(pegs[0].name);
        }
    }, [pegs, selectedPeg]);

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <RiskHeader
                category={category}
                riskFactor={riskFactor}
                pegs={pegs}
                selectedPeg={selectedPeg}
                onPegChange={(peg) => setSelectedPeg(peg)}
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
                    : pegs
                          .filter((peg) => peg.name === selectedPeg)
                          .map((peg) => (
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
                          ))}
            </div>
        </div>
    );
};

export default BtcCustody;
