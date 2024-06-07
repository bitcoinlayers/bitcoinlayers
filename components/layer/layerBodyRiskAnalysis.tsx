import React from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

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
}

const RiskAnalysis: React.FC<RiskAnalysisProps> = ({
    riskAnalysis,
    riskFactors,
}) => {
    const getRiskColorClass = (riskFactor: string) => {
        switch (riskFactor) {
            case "Low":
                return "text-text_risk_low";
            case "Medium":
                return "text-text_risk_midlow";
            case "Medium-High":
                return "text-text_risk_midhigh";
            case "High":
                return "text-text_risk_high";
            default:
                return "text-text_secondary";
        }
    };
    const getRiskBgClass = (riskFactor: string) => {
        switch (riskFactor) {
            case "Low":
                return "bg_low";
            case "Medium":
                return "bg_midlow";
            case "Medium-High":
                return "bg_midhigh";
            case "High":
                return "bg_high";
            default:
                return "text-text_secondary";
        }
    };

    if (!riskAnalysis) {
        return null;
    }

    return (
        <div className="content flex-grow pt-0">
            <section
                className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-white rounded-xl border border-slate-300 flex-col justify-center items-end gap-4"
                id="riskanalysis"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="body_section">Risk Analysis</div>
                </div>
                {riskAnalysis.map((content, contentIndex) => (
                    <React.Fragment key={contentIndex}>
                        <div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div className="self-stretch justify-between lg:items-center items-start flex lg:flex-row flex-col">
                                    <div className="body_risksection">
                                        {content.category}
                                    </div>
                                    <div className="h-8 justify-end items-center gap-2 flex lg:flex-row flex-row-reverse">
                                        <div
                                            className={`${getRiskColorClass(
                                                riskFactors[contentIndex],
                                            )} text-sm font-medium leading-tight`}
                                        >
                                            {riskFactors[contentIndex]} risk
                                        </div>
                                        <div className="w-8 h-8 justify-center items-center flex">
                                            <div
                                                className={`w-8 h-8 bg-${getRiskBgClass(
                                                    riskFactors[contentIndex],
                                                )} rounded-full flex items-center justify-center`}
                                            >
                                                <div
                                                    className={`text-center ${getRiskColorClass(
                                                        riskFactors[
                                                            contentIndex
                                                        ],
                                                    )} text-base font-bold font-Hack`}
                                                >
                                                    {/* {contentIndex + 1} TODO: add quantitative risk scores when we add this level of depth on reviews */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex-col justify-start items-start flex">
                                    <div className="self-stretch justify-between items-end inline-flex">
                                        <div className="grow shrink basis-0 body_subsection">
                                            {content.title}
                                        </div>
                                    </div>
                                    <div className="body_paragraph self-stretch mt-3">
                                        {parseTextWithLinks(content.content)}
                                    </div>
                                </div>
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
