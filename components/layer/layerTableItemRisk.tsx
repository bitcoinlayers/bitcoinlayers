import { getRiskColorBackground, getRiskColorIcon } from "@/util/riskColors";
import RiskSnapshot from "./riskSnapshot";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LayerProject, Project } from "@/content/props";

interface RiskProps {
    layer: Project;
}

const Risk: React.FC<RiskProps> = ({ layer }) => {
    const riskLevels = (layer as LayerProject).riskAnalysis;

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
        <Dialog>
            <DialogTrigger>
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
            </DialogTrigger>
            <DialogContent className="w-[calc(100vw-16px)] mx-auto max-w-[500px] rounded-lg">
                <RiskSnapshot
                    layer={layer}
                    title={`${layer.title} Trust Assumptions`}
                />
            </DialogContent>
        </Dialog>
    );
};

export default Risk;
