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

    const containerSize = 350;
    const svgDivSize = containerSize / 2;
    const svgSize = 215;

    const renderDiamond = (
        riskFactor: string,
        title: string,
        positionTop: number,
        positionLeft: number,
        IconComponent: React.FC<{
            fill: string;
            width?: string;
            height?: string;
        }>,
    ) => {
        const bgColor = getRiskColorBackground(riskFactor);
        const fillColor = getRiskColorIcon(riskFactor);
        return (
            <div
                className="absolute"
                style={{
                    width: svgDivSize,
                    height: svgDivSize,
                    top: positionTop,
                    left: positionLeft,
                }}
            >
                <svg
                    viewBox={`0 0 ${svgSize * 1} ${svgSize * 2}`}
                    width={svgSize}
                    height={svgSize}
                    className="relative flex-col justify-start items-start flex"
                    onMouseEnter={(e) => handleMouseEnter(e, title)}
                    onMouseLeave={handleMouseLeave}
                >
                    <rect
                        x={70}
                        y={40}
                        width={svgSize}
                        height={svgSize}
                        transform={`rotate(45 70 40)`}
                        style={{ fill: bgColor }}
                        rx={svgSize / 10}
                        ry={svgDivSize / 10}
                    />
                    <foreignObject
                        x="35"
                        y="35"
                        width="145"
                        height="145"
                        className="flex justify-center items-center"
                    >
                        <div className="w-full h-full flex justify-center items-center">
                            <IconComponent
                                fill={fillColor}
                                width="50px"
                                height="50px"
                            />
                        </div>
                    </foreignObject>
                </svg>
            </div>
        );
    };

    const containerClassName = `lg:w-[${containerSize}px] h-[${containerSize}px] lg:h-full flex justify-center items-center relative ml-0 z-30`;

    return (
        <div className={containerClassName}>
            {tooltip && <Tooltip title={tooltip.title} style={tooltip.style} />}

            <div className="left-[10px] top-[155px] -rotate-45 absolute origin-top-left text-left text-slate-600 text-xs font-medium leading-none">
                BRIDGE
            </div>
            <div className="left-[52%] translate-x-[-50%] top-[5px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none">
                DATA AVAILABILITY
            </div>
            <div className="right-[10px] top-[155px] rotate-45 absolute origin-top-right text-right text-slate-600 text-xs font-medium leading-none">
                OPERATORS
            </div>
            <div className="left-[52%] translate-x-[-50%] top-[350px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none">
                SETTLEMENT ASSURANCE
            </div>

            {renderDiamond(
                layer.riskAnalysis[0].tier,
                layer.riskAnalysis[0].title,
                svgDivSize * 0.5,
                svgDivSize * 0.0,
                RiskIconBridge,
            )}
            {renderDiamond(
                layer.riskAnalysis[1].tier,
                layer.riskAnalysis[1].title,
                svgDivSize * 0.0,
                svgDivSize * 0.5,
                RiskIconDA,
            )}
            {renderDiamond(
                layer.riskAnalysis[2].tier,
                layer.riskAnalysis[2].title,
                svgDivSize * 0.5,
                svgDivSize * 1.0,
                RiskIconOperators,
            )}
            {renderDiamond(
                layer.riskAnalysis[3].tier,
                layer.riskAnalysis[3].title,
                svgDivSize * 1.0,
                svgDivSize * 0.5,
                RiskIconSettlement,
            )}
        </div>
    );
};

export default LayerDiamond;
