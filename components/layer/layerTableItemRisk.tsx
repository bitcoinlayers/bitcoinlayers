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

    const getRiskFactor = (riskLevel: any, index: number): string => {
        if (index === 0 && riskLevel?.pegs?.length > 0) {
            return riskLevel.pegs[0].tier;
        }
        return riskLevel?.tier || "Under Review";
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
        <Dialog>
            <DialogTrigger>
                <div className="lg:w-44 w-34 lg:p-4 p-2 justify-start items-center gap-4 inline-flex lg:gap-4 gap-1">
                    <RiskIcon
                        riskFactor={getRiskFactor(riskLevels[0], 0)}
                        IconComponent={RiskIconBridge}
                    />
                    <RiskIcon
                        riskFactor={getRiskFactor(riskLevels[1], 1)}
                        IconComponent={RiskIconDA}
                    />
                    <RiskIcon
                        riskFactor={getRiskFactor(riskLevels[2], 2)}
                        IconComponent={RiskIconOperators}
                    />
                    <RiskIcon
                        riskFactor={getRiskFactor(riskLevels[3], 3)}
                        IconComponent={RiskIconSettlement}
                    />
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-fit [&>button]:hidden" style={{ width: "auto", maxWidth: "90vw" }}>
                <div 
                    className="bg-popover border border-border rounded-lg shadow-lg p-6"
                    style={{
                        width: "var(--breakpoint-sm, 640px)",
                        maxHeight: "80vh",
                        overflowY: "auto"
                    }}
                >
                    <RiskSnapshot
                        layer={layer}
                        title={`${layer.title} Trust Assumptions`}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Risk;
