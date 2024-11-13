"use client";

import React from "react";
import { useQueryState } from "nuqs";
import RiskHeader from "./assessment-header";
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
                className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4"
                id="assessment"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="body_section">Assessment</div>
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
                            </div>
                        </div>
                        {contentIndex < riskAnalysis.length - 1 && (
                            <div className="border-b border-slate-300 my-12"></div>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export default RiskAnalysis;
