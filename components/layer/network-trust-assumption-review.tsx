"use client";

import React from "react";
import RiskContent from "./risk-analysis/layer-section-content";
import RiskHeader from "./risk-analysis/layer-section-header";
import { Project, RiskSection } from "@/content/props";

interface NetworkTrustAssumptionReviewProps {
    riskAnalysis: RiskSection[];
    riskFactors: string[];
    layer: Project;
}

const NetworkTrustAssumptionReview: React.FC<NetworkTrustAssumptionReviewProps> = ({
    riskAnalysis,
    riskFactors,
    layer,
}) => {
    // Skip the first risk (BTC Custody) and get the network-related risks
    const networkRisks = riskAnalysis.slice(1);

    return (
        <div className="content flex-grow pt-0">
            <section
                className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
                id="networktrust"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="body_section !text-foreground">
                        Network Trust Assumption Review
                    </div>
                </div>

                <div className="mt-4"></div>

                {networkRisks.map((content, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <RiskHeader
                                category={content.category}
                                riskFactor={riskFactors[index + 1]} // Offset by 1 to account for skipped BTC custody
                            />
                            <RiskContent
                                title={content.title}
                                content={content.content}
                                alert={content.alert}
                            />
                        </div>

                        {index < networkRisks.length - 1 && (
                            <div className="border-b border-border my-12"></div>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export default NetworkTrustAssumptionReview;
