import React, { useState } from "react";
import { Layer } from "./layerProps";
import { getRiskColorBackground, getRiskColorIcon } from "@/util/riskColors";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";

const Tooltip: React.FC<{ title: string; style: React.CSSProperties }> = ({
    title,
    style,
}) => (
    <div
        className="absolute z-50 p-2 bg-white border border-gray-400 rounded shadow-lg text-xs"
        style={style}
    >
        {title}
    </div>
);

const LayerDiamond: React.FC<{ layer: Layer }> = ({ layer }) => {
    const svgDimensions = "w-24 h-24"; // Adjust dimensions as needed

    const [tooltip, setTooltip] = useState<{
        title: string;
        style: React.CSSProperties;
    } | null>(null);

    const handleMouseEnter = (
        event: React.MouseEvent<SVGSVGElement>,
        title: string,
    ) => {
        const { top, left, width } =
            event.currentTarget.getBoundingClientRect();
        setTooltip({
            title,
            style: {
                top: top - 240,
                left: left - 900,
            },
        });
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

    const renderDiamond = (
        riskFactor: string,
        title: string,
        positionStyle: string,
        IconComponent: React.FC<{ fill: string }>,
    ) => {
        const bgColor = getRiskColorBackground(riskFactor);
        const fillColor = getRiskColorIcon(riskFactor);
        return (
            <div className={`absolute ${positionStyle} ${svgDimensions}`}>
                <svg
                    viewBox="0 0 97 97"
                    className="w-full h-full relative flex-col justify-start items-start flex"
                    onMouseEnter={(e) => handleMouseEnter(e, title)}
                    onMouseLeave={handleMouseLeave}
                >
                    <rect
                        x="48.2646"
                        y="0.264648"
                        width="68.215"
                        height="68.215"
                        transform="rotate(45 48.2646 0.264648)"
                        style={{ fill: bgColor }}
                    />
                    <foreignObject
                        x="14"
                        y="14"
                        width="70"
                        height="70"
                        className="flex justify-center items-center"
                    >
                        <div className="w-full h-full flex justify-center items-center">
                            <IconComponent fill={fillColor} />
                        </div>
                    </foreignObject>
                </svg>
            </div>
        );
    };

    return (
        <div className="lg:w-[370px] h-[300px] lg:h-full flex justify-center items-center relative ml-6 lg:ml-0 z-30">
            {tooltip && <Tooltip title={tooltip.title} style={tooltip.style} />}
            {renderDiamond(
                layer.riskAnalysis[0].tier,
                layer.riskAnalysis[0].title,
                "top-[13px] left-[90px]",
                RiskIconBridge,
            )}
            {renderDiamond(
                layer.riskAnalysis[1].tier,
                layer.riskAnalysis[1].title,
                "top-[85px] left-[157px]",
                RiskIconDA,
            )}
            {renderDiamond(
                layer.riskAnalysis[2].tier,
                layer.riskAnalysis[2].title,
                "top-[155px] left-[90px]",
                RiskIconOperators,
            )}
            {renderDiamond(
                layer.riskAnalysis[3].tier,
                layer.riskAnalysis[3].title,
                "top-[85px] left-[23px]",
                RiskIconSettlement,
            )}
        </div>
    );
};

export default LayerDiamond;
