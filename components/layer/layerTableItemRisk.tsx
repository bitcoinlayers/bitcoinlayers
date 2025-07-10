import { getRiskColorBackground, getRiskColorIcon, getRiskColorText } from "@/util/riskColors";
import RiskSnapshot from "./riskSnapshot";
import RiskIconBridge from "@/components/icons/RiskIconBridge";
import RiskIconDA from "@/components/icons/RiskIconDA";
import RiskIconOperators from "@/components/icons/RiskIconOperators";
import RiskIconSettlement from "@/components/icons/RiskIconSettlement";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { LayerProject, Project } from "@/content/props";
import Image from "next/image";

interface RiskProps {
    layer: Project;
}

const Risk: React.FC<RiskProps> = ({ layer }) => {
    const riskLevels = (layer as LayerProject).riskAnalysis;
    const riskFactors = (layer as LayerProject).riskFactors;

    const getRiskFactor = (riskLevel: any, index: number): string => {
        if (index === 0 && riskLevel?.pegs?.length > 0) {
            return riskLevel.pegs[0].tier;
        }
        return riskFactors?.[index] || "Under Review";
    };

    const getRiskTitle = (riskLevel: any, index: number): string => {
        if (index === 0 && riskLevel?.pegs?.length > 0) {
            return riskLevel.pegs[0].title;
        }
        return riskLevel?.title || "Under Review";
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

    const riskCategories = [
        { title: "BTC Custody", IconComponent: RiskIconBridge },
        { title: "Data Availability", IconComponent: RiskIconDA },
        { title: "Operators", IconComponent: RiskIconOperators },
        { title: "Settlement", IconComponent: RiskIconSettlement },
    ];

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="lg:w-44 w-34 lg:p-4 p-2 justify-start items-center gap-4 inline-flex lg:gap-4 gap-1 cursor-pointer">
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
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                <div className="space-y-4">
                    {/* Network Header */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={`/logos/${layer.slug}.png`}
                            alt={layer.title}
                            width={24}
                            height={24}
                            className="rounded-full object-cover bg-muted"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = '/logos/default.png';
                            }}
                        />
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">
                                {layer.title} - Trust Assumptions
                            </h4>
                        </div>
                    </div>
                    
                    {/* Risk Factors */}
                    <div className="space-y-3">
                        {riskCategories.map((category, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <RiskIcon
                                    riskFactor={getRiskFactor(riskLevels[index], index)}
                                    IconComponent={category.IconComponent}
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm font-medium">
                                            {category.title}:
                                        </span>
                                        <span
                                            className="text-sm font-medium"
                                            style={{
                                                color: getRiskColorText(getRiskFactor(riskLevels[index], index)),
                                            }}
                                        >
                                            {getRiskFactor(riskLevels[index], index)}
                                        </span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {getRiskTitle(riskLevels[index], index)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default Risk;
