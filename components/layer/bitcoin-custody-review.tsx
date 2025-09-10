"use client";

import React from "react";
import BtcCustody from "./risk-analysis/layer-btc-custody";
import { Project, RiskSection } from "@/content/props";

interface BitcoinCustodyReviewProps {
    riskAnalysis: RiskSection[];
    riskFactors: string[];
    layer: Project;
}

const BitcoinCustodyReview: React.FC<BitcoinCustodyReviewProps> = ({
    riskAnalysis,
    riskFactors,
    layer,
}) => {
    const btcCustody = riskAnalysis[0];

    return (
        <div className="content flex-grow pt-0">
            <section
                className="self-stretch lg:px-8 px-4 pt-6 pb-8 mb-6 bg-background rounded-xl border border-border flex-col justify-center items-end gap-4"
                id="btccustody"
            >
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="body_section !text-foreground">
                        Bitcoin Custody Review
                    </div>
                </div>

                {btcCustody?.pegs && (
                    <BtcCustody
                        category={btcCustody.category}
                        pegs={btcCustody.pegs}
                        layerSlug={layer.slug}
                    />
                )}
            </section>
        </div>
    );
};

export default BitcoinCustodyReview;
