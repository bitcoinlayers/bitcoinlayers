import React from "react";
import {
    getRiskColorText,
    getRiskColorIcon,
    getRiskColorBackground,
} from "@/util/riskColors";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { InfrastructureProject, AssessmentCategory } from "@/content/props";
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

const CATEGORY_ICON_MAP: Record<
    AssessmentCategory,
    React.FC<{ stroke?: string; fill?: string }>
> = {
    [AssessmentCategory.AssetCustody]: VaultIcon,
    [AssessmentCategory.StakingType]: CoinsIcon,
    [AssessmentCategory.SlashingRisk]: ShieldAlertIcon,
    [AssessmentCategory.IncentiveModel]: TrendingUpIcon,
    [AssessmentCategory.Reputation]: HandshakeIcon,
    [AssessmentCategory.Signing]: KeyIcon,
    [AssessmentCategory.KeyStorage]: LayersIcon,
    [AssessmentCategory.CensorshipResistance]: BanIcon,
    [AssessmentCategory.UserRisk]: UserIcon,
    [AssessmentCategory.ThirdPartyStaking]: WaypointsIcon,
    [AssessmentCategory.SelfCustodialStaking]: CircleUserIcon,
} as const;

export default function AssessmentSnapshotDialogBody({
    infrastructure,
    title = "Assessment Snapshot",
}: {
    infrastructure: InfrastructureProject;
    title?: string;
}) {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <DialogHeader className="mb-4 sm:mb-6 pb-2 font-bold border-b border-stroke_tertiary text_table_important">
                <DialogTitle className="text-lg sm:text-xl">
                    {title}
                </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {infrastructure.assessment?.map(
                    ({ category, tier, title: sectionTitle }) => (
                        <div key={category} className="flex items-start">
                            <div
                                className="w-5 h-5 sm:w-6 sm:h-6 p-1 rounded-full justify-center items-center flex"
                                style={{
                                    backgroundColor:
                                        getRiskColorBackground(tier),
                                }}
                            >
                                {React.createElement(
                                    CATEGORY_ICON_MAP[category],
                                    {
                                        fill: getRiskColorIcon(tier),
                                    },
                                )}
                            </div>
                            <div className="ml-3 sm:ml-4">
                                <div className="mb-1 sm:mb-2 font-semibold text_table_important text-sm sm:text-base">
                                    {category}:{" "}
                                    <span
                                        style={{
                                            color: getRiskColorText(tier),
                                        }}
                                        className="font-semibold"
                                    >
                                        {tier}
                                    </span>
                                </div>
                                <div className="text_table_important text-xs sm:text-sm">
                                    {sectionTitle}
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}
