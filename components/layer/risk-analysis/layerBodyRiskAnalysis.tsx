"use client";

import React from "react";
import RiskContent from "./risk-content";
import BtcCustody from "./btc-custody";
import RiskHeader from "./risk-header";
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
    const btcCustody = riskAnalysis[0];
    const otherRisks = riskAnalysis.slice(1);

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

                {btcCustody?.pegs && (
                    <BtcCustody
                        category={btcCustody.category}
                        riskFactor={riskFactors[0]}
                        pegs={btcCustody.pegs}
                    />
                )}
                <div className="border-b border-border my-12"></div>
                {otherRisks.map((content, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-start items-start gap-2"
                    >
                        <RiskHeader
                            category={content.category}
                            riskFactor={riskFactors[index + 1]} // Offset by 1
                        />
                        <RiskContent
                            title={content.title}
                            content={content.content}
                        />
                        {index < otherRisks.length - 1 && (
                            <div className="border-b border-border my-12"></div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RiskAnalysis;
