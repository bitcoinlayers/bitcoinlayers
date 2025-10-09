"use client";

import { useQueryState } from "nuqs";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import CtaCard from "@/components/cta-card";
import InfoCardGrid from "@/components/info-card-grid";
import ChartSwitch from "@/components/charts/chart-switch";
import TableSwitch from "@/components/tables/table-switch";
import SearchBlock from "@/components/filter/SearchBlock";
import WelcomeBanner from "@/components/welcome-banner";

export default function SitePage() {
    const [view] = useQueryState("view", {
        defaultValue: "bitcoin-layers",
    });

    // Show chart for all views
    const showChart = true;

    return (
        <div className="mx-auto space-y-8">
            {/* Mobile: Stacked layout, Desktop: Side by side */}
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                <ViewToggleGroup showAll={false} />
                <SearchBlock 
                    inputClassName="h-[30px] text-sm p-2 pl-4 pr-10 bg-transparent border-2 border-muted-foreground rounded-full text-foreground placeholder:text-muted-foreground hover:border-brand focus:border-brand font-sans not-italic"
                    imageClassName="bottom-[6px] right-3 w-4 h-4"
                />
            </div>
            {/* For Bitcoin Layers view: show chart first, then table */}
            {view === "bitcoin-layers" && (
                <>
                    <WelcomeBanner />
                    {showChart && <ChartSwitch />}
                    <TableSwitch />
                </>
            )}
            {/* For all other views: show chart first, then table */}
            {view !== "bitcoin-layers" && (
                <>
                    {showChart && <ChartSwitch />}
                    <TableSwitch />
                </>
            )}
            <CtaCard />
            <InfoCardGrid />
        </div>
    );
}
