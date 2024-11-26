"use client";

import React from "react";
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
                {riskAnalysis.map((content, contentIndex) => (
                    <React.Fragment key={contentIndex}>
                        <div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <RiskHeader
                                    category={content.category}
                                    riskFactor={riskFactors[contentIndex]}
                                />
                                <RiskContent
                                    title={content.title}
                                    content={content.content}
                                />
                                {/* {content.category === "Bridge Custody" &&
                                    layer.bridge &&
                                    !!layer?.bridgeAnalysis &&
                                    layer?.bridgeAnalysis?.length > 0 && (
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="w-full"
                                            value={
                                                open.includes("federation")
                                                    ? "item-1"
                                                    : ""
                                            }
                                            onValueChange={(value) => {
                                                if (value === "item-1") {
                                                    toggleOpen("federation");
                                                } else {
                                                    setOpen((prev) =>
                                                        prev.filter(
                                                            (item) =>
                                                                item !==
                                                                "federation",
                                                        ),
                                                    );
                                                }
                                            }}
                                        >
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger>
                                                    Read more about{" "}
                                                    {layer.title}&apos;s bridge
                                                    federation
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {layer.bridgeAnalysis?.map(
                                                        (
                                                            fedContent,
                                                            fedIndex,
                                                        ) => (
                                                            <div
                                                                key={fedIndex}
                                                                className="mb-4"
                                                            >
                                                                <RiskHeader
                                                                    category={
                                                                        fedContent.category
                                                                    }
                                                                    riskFactor={
                                                                        riskFactors[
                                                                            fedIndex
                                                                        ]
                                                                    }
                                                                />
                                                                <RiskContent
                                                                    title={
                                                                        fedContent.title
                                                                    }
                                                                    content={
                                                                        fedContent.content
                                                                    }
                                                                />
                                                            </div>
                                                        ),
                                                    )}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )} */}
                            </div>
                        </div>
                        {contentIndex < riskAnalysis.length - 1 && (
                            <div className="border-b border-border my-12"></div>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export default RiskAnalysis;
