"use client";

import React, { useState } from "react";
import { useQueryState } from "nuqs";
import RiskHeader from "./risk-header";
import RiskContent from "./risk-content";
import { Project } from "@/content/props";

interface Risksection {
    category: string;
    score: number;
    tier: string;
    title: string;
    content: string;
    pegs?: {
        name: string;
        infrastructureSlug: string;
        score: number;
        tier: string;
        title: string;
        content: string;
    }[];
}

interface RiskAnalysisProps {
    riskAnalysis: Risksection[];
    riskFactors: string[];
    layer: Project;
}

const RiskAnalysis: React.FC<RiskAnalysisProps> = ({
    riskAnalysis,
    riskFactors,
    layer,
}) => {
    const [open, setOpen] = useQueryState<string[]>("open", {
        defaultValue: [],
        parse: (value) => value.split(",").filter(Boolean),
        serialize: (value) => value.join(","),
    });

    const [selectedPeg, setSelectedPeg] = useState<string>(""); // Track selected peg

    const toggleOpen = (value: string) => {
        setOpen((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    return (
        <div className="content flex-grow pt-0">
            <section
                className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
                id="trust"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="body_section !text-foreground">
                        Trust Assumption Review
                    </div>
                </div>
                {riskAnalysis.map((content, contentIndex) => {
                    const initialPegName =
                        content.pegs && content.pegs.length > 0
                            ? content.pegs[0].name
                            : "";

                    if (!selectedPeg && initialPegName) {
                        setSelectedPeg(initialPegName);
                    }

                    return (
                        <React.Fragment key={contentIndex}>
                            <div>
                                <div className="flex flex-col justify-start items-start gap-2">
                                    {!content.pegs ||
                                        (content.pegs.length < 1 && (
                                            <>
                                                <RiskHeader
                                                    category={content.category}
                                                    riskFactor={
                                                        riskFactors[
                                                            contentIndex
                                                        ]
                                                    }
                                                />
                                                <RiskContent
                                                    title={content.title}
                                                    content={content.content}
                                                />
                                            </>
                                        ))}
                                    {content.pegs &&
                                        content.pegs.length > 0 && (
                                            <div className="mt-4">
                                                <div className="flex space-x-4 mt-2">
                                                    {/* Radio button for "View All" */}
                                                    <label className="flex items-center cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name={`peg-${contentIndex}`}
                                                            value="view-all"
                                                            checked={
                                                                selectedPeg ===
                                                                "view-all"
                                                            }
                                                            onChange={() =>
                                                                setSelectedPeg(
                                                                    "view-all",
                                                                )
                                                            }
                                                            className="mr-2"
                                                        />
                                                        View All
                                                    </label>
                                                    {/* Radio buttons for individual pegs */}
                                                    {content.pegs.map((peg) => (
                                                        <label
                                                            key={peg.name}
                                                            className="flex items-center cursor-pointer"
                                                        >
                                                            <input
                                                                type="radio"
                                                                name={`peg-${contentIndex}`}
                                                                value={peg.name}
                                                                checked={
                                                                    selectedPeg ===
                                                                    peg.name
                                                                }
                                                                onChange={() =>
                                                                    setSelectedPeg(
                                                                        peg.name,
                                                                    )
                                                                }
                                                                className="mr-2"
                                                            />
                                                            {peg.name}
                                                        </label>
                                                    ))}
                                                </div>
                                                <div className="mt-4">
                                                    {selectedPeg === "view-all"
                                                        ? content.pegs.map(
                                                              (peg) => (
                                                                  <div
                                                                      key={
                                                                          peg.name
                                                                      }
                                                                      className="p-4 mb-4 bg-background-alt rounded-lg border border-border"
                                                                  >
                                                                      <RiskHeader
                                                                          category={
                                                                              content.category
                                                                          }
                                                                          riskFactor={
                                                                              peg.tier
                                                                          }
                                                                      />
                                                                      <RiskContent
                                                                          title={`${peg.name}: ${peg.title}`}
                                                                          content={
                                                                              peg.content
                                                                          }
                                                                      />
                                                                      <div className="mt-2">
                                                                          <a
                                                                              href={`/${peg.infrastructureSlug}`}
                                                                              className="text-primary hover:underline"
                                                                          >
                                                                              Learn
                                                                              more
                                                                              about{" "}
                                                                              {
                                                                                  peg.name
                                                                              }
                                                                          </a>
                                                                      </div>
                                                                  </div>
                                                              ),
                                                          )
                                                        : content.pegs
                                                              .filter(
                                                                  (peg) =>
                                                                      peg.name ===
                                                                      selectedPeg,
                                                              )
                                                              .map((peg) => (
                                                                  <div
                                                                      key={
                                                                          peg.name
                                                                      }
                                                                      className="p-4 bg-background-alt rounded-lg border border-border"
                                                                  >
                                                                      <RiskHeader
                                                                          category={
                                                                              content.category
                                                                          }
                                                                          riskFactor={
                                                                              peg.tier
                                                                          }
                                                                      />
                                                                      <RiskContent
                                                                          title={`${peg.name}: ${peg.title}`}
                                                                          content={
                                                                              peg.content
                                                                          }
                                                                      />
                                                                      <div className="mt-2">
                                                                          <a
                                                                              href={`/${peg.infrastructureSlug}`}
                                                                              className="text-primary hover:underline"
                                                                          >
                                                                              Learn
                                                                              more
                                                                              about{" "}
                                                                              {
                                                                                  peg.name
                                                                              }
                                                                          </a>
                                                                      </div>
                                                                  </div>
                                                              ))}
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>
                            {contentIndex < riskAnalysis.length - 1 && (
                                <div className="border-b border-border my-12"></div>
                            )}
                        </React.Fragment>
                    );
                })}
            </section>
        </div>
    );
};

export default RiskAnalysis;
