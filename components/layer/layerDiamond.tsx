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
    const svgSize = 155;

    const renderDiamond = (
        riskFactor: string,
        title: string,
        positionTop: number,
        positionLeft: number,
        IconComponent: React.FC<{ fill: string }>,
    ) => {
        const bgColor = getRiskColorBackground(riskFactor);
        const fillColor = getRiskColorIcon(riskFactor);
        return (
            <div
                className="absolute border-2"
                style={{
                    width: svgDivSize,
                    height: svgDivSize,
                    top: positionTop,
                    left: positionLeft,
                }}
            >
                <svg
                    viewBox={`0 0 ${svgSize * 2} ${svgSize * 2}`}
                    width={svgDivSize}
                    height={svgDivSize}
                    className="relative flex-col justify-start items-start flex"
                    onMouseEnter={(e) => handleMouseEnter(e, title)}
                    onMouseLeave={handleMouseLeave}
                >
                    <rect
                        x={svgSize / 2}
                        y={svgSize / 2}
                        width={svgSize}
                        height={svgSize}
                        transform={`rotate(45 ${svgSize / 2} ${svgSize / 2})`}
                        style={{ fill: bgColor }}
                        rx={svgSize / 10}
                        ry={svgDivSize / 10}
                    />
                </svg>
            </div>
        );
    };

    const containerClassName = `lg:w-[${containerSize}px] h-[${containerSize}px] bg-black lg:h-full flex justify-center items-center relative ml-6 lg:ml-0 z-30`;

    return (
        <div className={containerClassName}>
            {tooltip && <Tooltip title={tooltip.title} style={tooltip.style} />}

            <div className="left-[10px] top-[140px] absolute origin-top-left text-left text-slate-600 text-xs font-medium leading-none">
                BRIDGE
            </div>
            <div className="left-[50%] translate-x-[-50%] top-[10px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none w-[80px]">
                DATA AVAILABILITY
            </div>
            <div className="right-[10px] top-[140px] absolute origin-top-right text-right text-slate-600 text-xs font-medium leading-none">
                OPERATORS
            </div>
            <div className="left-[50%] translate-x-[-50%] top-[290px] absolute origin-top-left text-center text-slate-600 text-xs font-medium leading-none w-[80px]">
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
