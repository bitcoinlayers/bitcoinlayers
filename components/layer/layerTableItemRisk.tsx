import React, { useState } from "react";
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

interface RiskProps {
    layer: Layer;
}

const Risk: React.FC<RiskProps> = ({ layer }) => {
    const riskLevels = layer.riskAnalysis;
    const [hovered, setHovered] = useState(false);
    const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const { top, left, width } =
            event.currentTarget.getBoundingClientRect();
        setHoverPosition({ top, left: left + width });
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const RiskIcon = ({
        riskFactor,
        IconComponent,
    }: {
        riskFactor: string;
        IconComponent: React.FC<{ fill: string }>;
    }) => {
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

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-44 p-4 justify-start items-center gap-4 inline-flex">
                <RiskIcon
                    riskFactor={riskLevels[0]?.tier}
                    IconComponent={RiskIconBridge}
                />
                <RiskIcon
                    riskFactor={riskLevels[1]?.tier}
                    IconComponent={RiskIconDA}
                />
                <RiskIcon
                    riskFactor={riskLevels[2]?.tier}
                    IconComponent={RiskIconOperators}
                />
                <RiskIcon
                    riskFactor={riskLevels[3]?.tier}
                    IconComponent={RiskIconSettlement}
                />
            </div>
            {hovered && (
                <div
                    className="fixed mt-2 bg-white p-4 shadow-lg border border-stroke_tertiary rounded-lg z-50"
                    style={{
                        width: "500px",
                        top: `${hoverPosition.top}px`,
                        left: `${hoverPosition.left}px`,
                    }}
                >
                    <div className="mb-6 mt-2 font-bold border-b border-stroke_tertiary">
                        Risk Snapshot
                    </div>
                    <div className="mb-2 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskIcon
                                riskFactor={layer.riskFactors[0]}
                                IconComponent={RiskIconBridge}
                            />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[0].category}:{" "}
                                <span
                                    className="font-semibold"
                                    style={{
                                        color: getRiskColorText(
                                            layer.riskFactors[0],
                                        ),
                                    }}
                                >
                                    {layer.riskFactors[0]}
                                </span>
                            </div>
                            <div className="mb-4">
                                {layer.riskAnalysis[0].title}
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskIcon
                                riskFactor={layer.riskFactors[1]}
                                IconComponent={RiskIconDA}
                            />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[1].category}:{" "}
                                <span
                                    className="font-semibold"
                                    style={{
                                        color: getRiskColorText(
                                            layer.riskFactors[1],
                                        ),
                                    }}
                                >
                                    {layer.riskFactors[1]}
                                </span>
                            </div>
                            <div className="mb-4">
                                {layer.riskAnalysis[1].title}
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskIcon
                                riskFactor={layer.riskFactors[2]}
                                IconComponent={RiskIconOperators}
                            />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[2].category}:{" "}
                                <span
                                    className="font-semibold"
                                    style={{
                                        color: getRiskColorText(
                                            layer.riskFactors[2],
                                        ),
                                    }}
                                >
                                    {layer.riskFactors[2]}
                                </span>
                            </div>
                            <div className="mb-4">
                                {layer.riskAnalysis[2].title}
                            </div>
                        </div>
                    </div>
                    <div className="mb-0 flex items-start">
                        <div className="flex items-start justify-center">
                            <RiskIcon
                                riskFactor={layer.riskFactors[3]}
                                IconComponent={RiskIconSettlement}
                            />
                        </div>
                        <div className="ml-4">
                            <div className="mb-2 font-semibold">
                                {layer.riskAnalysis[3].category}:{" "}
                                <span
                                    className="font-semibold"
                                    style={{
                                        color: getRiskColorText(
                                            layer.riskFactors[3],
                                        ),
                                    }}
                                >
                                    {layer.riskFactors[3]}
                                </span>
                            </div>
                            <div className="mb-2">
                                {layer.riskAnalysis[3].title}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Risk;
