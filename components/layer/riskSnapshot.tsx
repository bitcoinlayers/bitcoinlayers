import React from "react";
import { Layer } from "@/components/layer/layerProps";
import {
    getRiskColorText,
    getRiskColorIcon,
    getRiskColorBackground,
} from "@/util/riskColors";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";

interface RiskSnapshotProps {
    layer: Layer;
    hoverPosition: { top: number; left: number };
}

const RiskIcon: React.FC<{
    riskFactor: string;
    IconComponent: React.FC<{ fill: string }>;
}> = ({ riskFactor, IconComponent }) => {
    const bgColor = getRiskColorBackground(riskFactor);
    const fillColor = getRiskColorIcon(riskFactor);
    return (
        <div
            className="w-6 h-6 p-1 rounded-full justify-center items-center flex"
            style={{ backgroundColor: bgColor }}
        >
            <IconComponent fill={fillColor} />
        </div>
    );
};

const RiskSnapshot: React.FC<RiskSnapshotProps> = ({
    layer,
    hoverPosition,
}) => {
    return (
        <div
            className="fixed mt-2 bg-white p-4 pb-0 shadow-lg border border-stroke_tertiary rounded-lg z-50"
            style={{
                width: "500px",
                top: `${hoverPosition.top}px`,
                left: `${hoverPosition.left}px`,
            }}
        >
            <div className="mb-6 mt-2 font-bold border-b border-stroke_tertiary text_table_important">
                Risk Snapshot
            </div>
            {layer.riskAnalysis.map((risk, index) => (
                <div key={index} className="mb-2 flex items-start">
                    <div className="flex items-start justify-center">
                        <RiskIcon
                            riskFactor={layer.riskFactors[index]}
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
                    <div className="ml-4">
                        <div className="mb-2 font-semibold text_table_important">
                            {risk.category}:{" "}
                            <span
                                className="font-semibold"
                                style={{
                                    color: getRiskColorText(
                                        layer.riskFactors[index],
                                    ),
                                }}
                            >
                                {layer.riskFactors[index]}
                            </span>
                        </div>
                        <div className="mb-4 text_table_important">
                            {risk.title}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RiskSnapshot;
