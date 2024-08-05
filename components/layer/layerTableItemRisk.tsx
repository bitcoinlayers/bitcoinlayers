import React, { useState } from "react";
import { Layer } from "@/components/layer/layerProps";
import { getRiskColorBackground, getRiskColorIcon } from "@/util/riskColors";
import RiskSnapshot from "./riskSnapshot";
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
    const [hoverPosition, setHoverPosition] = useState({ top: 80, left: 0 });

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        const { top, left, width } =
            event.currentTarget.getBoundingClientRect();
        setHoverPosition({ top, left: left + width + 20 });
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
            <div className="lg:w-44 w-34 lg:p-4 p-2 justify-start items-center gap-4 inline-flex lg:gap-4 gap-1">
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
                <RiskSnapshot layer={layer} hoverPosition={hoverPosition} />
            )}
        </div>
    );
};

export default Risk;
