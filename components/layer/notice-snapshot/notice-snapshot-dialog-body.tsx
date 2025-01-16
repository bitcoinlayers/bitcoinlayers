import React from "react";
import {
    getRiskColorText,
    getRiskColorIcon,
    getRiskColorBackground,
} from "@/util/riskColors";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LayerProject, Notice } from "@/content/props";
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

export default function NoticeSnapshotDialogBody({
    layer,
    title = "Notice Snapshot",
}: {
    layer: LayerProject;
    title?: string;
}) {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <DialogHeader className="mb-4 sm:mb-6 pb-2 font-bold border-b border-border">
                <DialogTitle className="text-lg sm:text-xl">
                    {title}
                </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {layer.notice}
            </div>
        </div>
    );
}
