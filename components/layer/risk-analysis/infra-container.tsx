"use client";

import React from "react";
import { useQueryState } from "nuqs";
import InfraRiskHeader from "./infra-section-header";
import RiskContent from "./layer-section-content";
import { Project, SectionAlert } from "@/content/props";

interface Risksection {
    category: string;
    score: number;
    tier: string;
    title: string;
    content: string;
    alert?: SectionAlert;
}

interface RiskAnalysisProps {
    riskAnalysis: Risksection[];
    riskFactors: string[];
    infrastructure: Project;
}

const RiskAnalysis: React.FC<RiskAnalysisProps> = ({
    riskAnalysis,
    riskFactors,
    infrastructure,
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
                id="assessment"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="body_section !text-foreground">
                        Assessment
                    </div>
                </div>
                {riskAnalysis.map((content, contentIndex) => (
                    <React.Fragment key={contentIndex}>
                        <div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <InfraRiskHeader
                                    category={content.category}
                                    riskFactor={riskFactors[contentIndex]}
                                />
                                <RiskContent
                                    title={content.title}
                                    content={content.content}
                                    alert={content.alert}
                                />
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
