import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hover-card";
import { InfrastructureProject, AssessmentCategory } from "@/content/props";
import React from "react";
import {
    getRiskColorText,
    getRiskColorIcon,
    getRiskColorBackground,
} from "@/util/riskColors";
import Image from "next/image";
import {
    VaultIcon,
    LayersIcon,
    ShieldAlertIcon,
    TrendingUpIcon,
    KeyIcon,
    UserIcon,
    HandshakeIcon,
    BanIcon,
    CoinsIcon,
    WaypointsIcon,
    CircleUserIcon,
} from "lucide-react";

interface Props {
    infrastructure: InfrastructureProject;
}

const CATEGORY_ICON_MAP: Record<
    AssessmentCategory,
    React.FC<{ stroke?: string; fill?: string }>
> = {
    [AssessmentCategory.AssetCustody]: VaultIcon,
    [AssessmentCategory.StakingType]: CoinsIcon,
    [AssessmentCategory.SlashingRisk]: ShieldAlertIcon,
    [AssessmentCategory.StakeAttestations]: ShieldAlertIcon,
    [AssessmentCategory.IncentiveModel]: TrendingUpIcon,
    [AssessmentCategory.SupplyIssuance]: TrendingUpIcon,
    [AssessmentCategory.Reputation]: HandshakeIcon,
    [AssessmentCategory.Signing]: KeyIcon,
    [AssessmentCategory.KeyStorage]: LayersIcon,
    [AssessmentCategory.CensorshipResistance]: BanIcon,
    [AssessmentCategory.UserRisk]: UserIcon,
    [AssessmentCategory.ThirdPartyStaking]: WaypointsIcon,
    [AssessmentCategory.Governance]: WaypointsIcon,
    [AssessmentCategory.SelfCustodialStaking]: CircleUserIcon,
} as const;

export default function AssessmentSnapshotDialog({ infrastructure }: Props) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 px-3 bg-[#FFDFDF] dark:bg-[#7A2E0D] border-[#FFDFDF] dark:border-[#7A2E0D] hover:bg-[#FFD0D0] dark:hover:bg-[#991617] text-[#881415] dark:text-[#FFDFDF]"
                >
                    View Snapshot
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                <div className="space-y-4">
                    {/* Network Header */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={`/logos/${infrastructure.slug}.png`}
                            alt={infrastructure.title}
                            width={24}
                            height={24}
                            className="rounded-full object-cover bg-muted"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = '/logos/default.png';
                            }}
                        />
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">
                                {infrastructure.title} - Assessment Snapshot
                            </h4>
                        </div>
                    </div>
                    
                    {/* Assessment Categories */}
                    <div className="space-y-3">
                        {infrastructure.assessment?.map(
                            ({ category, tier, title: sectionTitle }) => (
                                <div key={category} className="flex items-start gap-3">
                                    <div
                                        className="w-5 h-5 p-1 rounded-full justify-center items-center flex flex-shrink-0"
                                        style={{
                                            backgroundColor: getRiskColorBackground(tier),
                                        }}
                                    >
                                        {React.createElement(
                                            CATEGORY_ICON_MAP[category],
                                            {
                                                fill: getRiskColorIcon(tier),
                                            },
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-medium">
                                                {category}:
                                            </span>
                                            <span
                                                className="text-sm font-medium"
                                                style={{
                                                    color: getRiskColorText(tier),
                                                }}
                                            >
                                                {tier}
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {sectionTitle}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
