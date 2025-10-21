"use client";

import React, { useState } from "react";
import RiskContent from "./layer-section-content";
import BtcCustody from "./layer-btc-custody";
import RiskHeader from "./layer-section-header";
import { Project, RiskSection } from "@/content/props";

interface RiskAnalysisProps {
    riskAnalysis: RiskSection[];
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
                        pegs={btcCustody.pegs}
                        layerSlug={layer.slug}
                    />
                )}

                <div className="border-b border-border my-12"></div>

                {otherRisks.map((content, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <RiskHeader
                                category={content.category}
                                riskFactor={riskFactors[index + 1]} // Offset by 1
                            />
                            <RiskContent
                                title={content.title}
                                content={content.content}
                                alert={content.alert}
                            />
                        </div>

                        {index < otherRisks.length - 1 && (
                            <div className="border-b border-border my-12"></div>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export default RiskAnalysis;
