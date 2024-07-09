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
    const svgDimensions = "w-36 h-36";

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
                    viewBox="0 0 106 106"
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
                        rx="10"
                        ry="10"
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
        <div className="lg:w-[350px] h-[350px] bg-black lg:h-full flex justify-center items-center relative ml-6 lg:ml-0 z-30">
            {tooltip && <Tooltip title={tooltip.title} style={tooltip.style} />}

            <div className="left-[10px] top-[140px] absolute origin-top-left -rotate-45 text-left text-slate-600 text-xs font-medium leading-none">
                BRIDGE
            </div>
            <div className="left-[50%] translate-x-[-50%] top-[10px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none w-[80px]">
                DATA AVAILABILITY
            </div>
            <div className="right-[10px] top-[140px] absolute origin-top-right rotate-45 text-right text-slate-600 text-xs font-medium leading-none">
                OPERATORS
            </div>
            <div className="left-[50%] translate-x-[-50%] top-[290px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none w-[80px]">
                SETTLEMENT ASSURANCE
            </div>

            {renderDiamond(
                layer.riskAnalysis[0].tier,
                layer.riskAnalysis[0].title,
                "top-[136.87px] left-[0px]",
                RiskIconBridge,
            )}
            {renderDiamond(
                layer.riskAnalysis[1].tier,
                layer.riskAnalysis[1].title,
                "top-[64px] left-[75px]",
                RiskIconDA,
            )}
            {renderDiamond(
                layer.riskAnalysis[2].tier,
                layer.riskAnalysis[2].title,
                "top-[136.87px] left-[150px]",
                RiskIconOperators,
            )}
            {renderDiamond(
                layer.riskAnalysis[3].tier,
                layer.riskAnalysis[3].title,
                "top-[210px] left-[75px]",
                RiskIconSettlement,
            )}
        </div>
    );
};

export default LayerDiamond;
