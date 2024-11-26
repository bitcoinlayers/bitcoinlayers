import { getRiskColorBackground, getRiskColorIcon } from "@/util/riskColors";
import RiskSnapshot from "./riskSnapshot";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject } from "@/content/props";

const LayerDiamond: React.FC<{ layer: LayerProject }> = ({ layer }) => {
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
                key={riskFactor}
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

    const containerClassName = `lg:w-[${containerSize}px] h-[${containerSize}px] lg:h-full flex justify-center items-center relative ml-0 z-30 cursor-pointer`;

    const riskLabels = [
        {
            text: "CUSTODY",
            className:
                "left-[10px] top-[155px] -rotate-45 origin-top-left text-left",
        },
        {
            text: "DATA AVAILABILITY",
            className:
                "left-[51%] translate-x-[-50%] top-[-8px] origin-top-left text-center w-[80px]",
        },
        {
            text: "OPERATORS",
            className:
                "right-[10px] top-[155px] rotate-45 origin-top-right text-right",
        },
        {
            text: "FINALITY ASSURANCE",
            className:
                "left-[51%] translate-x-[-50%] top-[355px] origin-top-left text-center w-[80px]",
        },
    ];

    const diamondPositions = [
        { top: svgDivSize * 0.5, left: svgDivSize * 0.0, Icon: RiskIconBridge },
        { top: svgDivSize * 0.0, left: svgDivSize * 0.5, Icon: RiskIconDA },
        {
            top: svgDivSize * 0.5,
            left: svgDivSize * 1.0,
            Icon: RiskIconOperators,
        },
        {
            top: svgDivSize * 1.0,
            left: svgDivSize * 0.5,
            Icon: RiskIconSettlement,
        },
    ];

    const renderContent = () => (
        <>
            {diamondPositions.map((position, index) =>
                renderDiamond(
                    (layer as LayerProject).riskAnalysis[index].tier,
                    position.top,
                    position.left,
                    position.Icon,
                ),
            )}
        </>
    );

    return (
        <div className="relative">
            {riskLabels.map((label) => (
                <div
                    key={label.text}
                    className={`absolute text-muted-foreground text-xs font-medium leading-none ${label.className}`}
                >
                    {label.text}
                </div>
            ))}
            <Dialog>
                <DialogTrigger className={containerClassName}>
                    {renderContent()}
                </DialogTrigger>
                <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                    <RiskSnapshot layer={layer} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LayerDiamond;
