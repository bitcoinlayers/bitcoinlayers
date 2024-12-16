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
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { LayerProject, Project } from "@/content/props";
import Link from "next/link";

interface RiskSnapshotProps {
    layer: Project;
    title?: string;
}

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

const RiskSnapshot: React.FC<RiskSnapshotProps> = ({ layer, title }) => {
    const riskAnalysis = (layer as LayerProject).riskAnalysis;
    const riskFactors = layer.riskFactors;

    const getRiskFactor = (risk: any, index: number): string => {
        if (index === 0 && risk?.pegs?.length > 0) {
            return risk.pegs[0].tier;
        }
        return riskFactors[index] || "Unknown";
    };

    const getRiskTitle = (risk: any, index: number): string => {
        if (index === 0 && risk?.pegs?.length > 0) {
            return risk.pegs[0].title;
        }
        return risk.title || "Unknown";
    };

    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <DialogHeader className="mb-4 sm:mb-6 pb-2 font-bold border-b border-border">
                <DialogTitle className="text-lg sm:text-xl">
                    {title || "Risk Snapshot"}
                </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {riskAnalysis.map((risk, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                            <RiskIcon
                                riskFactor={getRiskFactor(risk, index)}
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
                            <div className="mb-1 sm:mb-2 font-semibold text-sm sm:text-base">
                                {risk.category}:{" "}
                                <span
                                    className="font-semibold"
                                    style={{
                                        color: getRiskColorText(
                                            getRiskFactor(risk, index),
                                        ),
                                    }}
                                >
                                    {getRiskFactor(risk, index)}
                                </span>
                            </div>
                            <div className="text-xs sm:text-sm">
                                {getRiskTitle(risk, index)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <DialogFooter className="mt-4 sm:mb-t pt-4 pb-2 border-t flex-row justify-center sm:justify-center">
                <Link
                    href="/methodology"
                    className="hover:underline text-left text-xs"
                >
                    Learn more about how we analyze trust assumptions past the
                    L1.
                </Link>
            </DialogFooter>
        </div>
    );
};

export default RiskSnapshot;
