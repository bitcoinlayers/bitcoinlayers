"use client";

import React, { useState } from "react";
import { Layer } from "./layerProps";
import { getRiskColorBackground, getRiskColorIcon } from "@/util/riskColors";
import RiskSnapshot from "./riskSnapshot";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";

const LayerDiamond: React.FC<{ layer: Layer }> = ({ layer }) => {
    const [hovered, setHovered] = useState(false);
    const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const { top, left, width } =
            event.currentTarget.getBoundingClientRect();
        setHoverPosition({ top: top - 20, left });
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const containerSize = 350;
    const svgDivSize = containerSize / 2;
    const svgSize = 215;

    const renderDiamond = (
        riskFactor: string,
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
                        x="0"
                        y="115"
                        width="145"
                        height="145"
                        className="flex justify-center items-center"
                    >
                        <div className="w-full h-full flex justify-center items-center">
                            <IconComponent
                                fill={fillColor}
                                width="100px"
                                height="100px"
                            />
                        </div>
                    </foreignObject>
                    {/* <text
                        x="33%"
                        y="55%"
                        textAnchor="middle"
                        fill={fillColor}
                        className="font-bold text-3xl"
                    >
                        {riskFactor} Risk
                    </text> */}
                </svg>
            </div>
        );
    };

    const containerClassName = `lg:w-[${containerSize}px] h-[${containerSize}px] lg:h-full flex justify-center items-center relative ml-0 z-30`;

    return (
        <div
            className={containerClassName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* {tooltip && <Tooltip title={tooltip.title} style={tooltip.style} />} */}

            <div className="left-[10px] top-[155px] -rotate-45 absolute origin-top-left text-left text-slate-600 text-xs font-medium leading-none">
                BRIDGE
            </div>
            <div className="left-[51%] translate-x-[-50%] top-[-8px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none w-[80px]">
                DATA AVAILABILITY
            </div>
            <div className="right-[10px] top-[155px] rotate-45 absolute origin-top-right text-right text-slate-600 text-xs font-medium leading-none">
                OPERATORS
            </div>
            <div className="left-[51%] translate-x-[-50%] top-[355px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none w-[80px]">
                SETTLEMENT ASSURANCE
            </div>

            {renderDiamond(
                layer.riskAnalysis[0].tier,
                svgDivSize * 0.5,
                svgDivSize * 0.0,
                RiskIconBridge,
            )}
            {renderDiamond(
                layer.riskAnalysis[1].tier,
                svgDivSize * 0.0,
                svgDivSize * 0.5,
                RiskIconDA,
            )}
            {renderDiamond(
                layer.riskAnalysis[2].tier,
                svgDivSize * 0.5,
                svgDivSize * 1.0,
                RiskIconOperators,
            )}
            {renderDiamond(
                layer.riskAnalysis[3].tier,
                svgDivSize * 1.0,
                svgDivSize * 0.5,
                RiskIconSettlement,
            )}
            {hovered && (
                <RiskSnapshot layer={layer} hoverPosition={hoverPosition} />
            )}
        </div>
    );
};

export default LayerDiamond;
