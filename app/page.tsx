"use client";

import { useQueryState } from "nuqs";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import CtaCard from "@/components/cta-card";
import InfoCardGrid from "@/components/info-card-grid";
import ChartSwitch from "@/components/charts/chart-switch";
import TableSwitch from "@/components/tables/table-switch";

export default function Home() {
    const [view] = useQueryState("view", {
        defaultValue: "networks",
    });

    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup showAll={false} />
            {view !== "more" && <ChartSwitch />}
            <TableSwitch />
            <CtaCard />
            <InfoCardGrid />
        </div>
    );
}
