import React from "react";
import {
    getRiskColorText,
    getRiskColorIcon,
    getRiskColorBackground,
} from "@/util/riskColors";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { InfrastructureProject } from "@/content/props";

const RiskIcon: React.FC<{
    riskFactor: string;
    IconComponent: React.FC<{ fill: string }>;
}> = ({ riskFactor, IconComponent }) => {
    const bgColor = getRiskColorBackground(riskFactor);
    const fillColor = getRiskColorIcon(riskFactor);
    return (
        <div
            className="w-5 h-5 sm:w-6 sm:h-6 p-1 rounded-full justify-center items-center flex"
            style={{ backgroundColor: bgColor }}
        >
            <IconComponent fill={fillColor} />
        </div>
    );
};

interface Props {
    infrastructure: InfrastructureProject;
    title?: string;
}

const AssessmentSnapshot: React.FC<Props> = ({ infrastructure, title }) => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <DialogHeader className="mb-4 sm:mb-6 pb-2 font-bold border-b border-stroke_tertiary text_table_important">
                <DialogTitle className="text-lg sm:text-xl">
                    {title || "Risk Snapshot"}
                </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {infrastructure.assessment?.map((section, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <RiskIcon
                                riskFactor={section.tier}
                                IconComponent={
                                    [
                                        RiskIconBridge,
                                        RiskIconDA,
                                        RiskIconOperators,
                                        RiskIconSettlement,
                                    ][index]
                                }
                            />
                        </div>
                        <div className="ml-3 sm:ml-4">
                            <div className="mb-1 sm:mb-2 font-semibold text_table_important text-sm sm:text-base">
                                {section.category}:{" "}
                                <span
                                    className="font-semibold"
                                    style={{
                                        color: getRiskColorText(section.tier),
                                    }}
                                >
                                    {section.tier}
                                </span>
                            </div>
                            <div className="text_table_important text-xs sm:text-sm">
                                {section.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssessmentSnapshot;
