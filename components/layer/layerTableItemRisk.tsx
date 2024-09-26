import { Layer } from "@/components/layer/layerProps";
import { getRiskColorBackground, getRiskColorIcon } from "@/util/riskColors";
import RiskSnapshot from "./riskSnapshot";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

interface RiskProps {
    layer: Layer;
}

const Risk: React.FC<RiskProps> = ({ layer }) => {
    const riskLevels = layer.riskAnalysis;

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
        <HoverCard openDelay={300}>
            <HoverCardTrigger
            // onClick={isMobile ? toggleCard : undefined}
            >
                {" "}
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
            </HoverCardTrigger>
            <HoverCardContent className="w-auto mx-auto max-w-[500px]">
                <RiskSnapshot layer={layer} />
            </HoverCardContent>
        </HoverCard>
    );
};

export default Risk;
