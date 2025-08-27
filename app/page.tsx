"use client";

import { useQueryState } from "nuqs";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import CtaCard from "@/components/cta-card";
import InfoCardGrid from "@/components/info-card-grid";
import ChartSwitch from "@/components/charts/chart-switch";
import TableSwitch from "@/components/tables/table-switch";
import SearchBlock from "@/components/filter/SearchBlock";
import WelcomeBanner from "@/components/welcome-banner";

export default function Home() {
    const [view] = useQueryState("view", {
        defaultValue: "networks",
    });
    const [subView] = useQueryState("subview", {
        defaultValue: "applications",
    });

    // Show chart for all views except "more", unless it's "alternative networks", "wrappers", or "integrated"
    const showChart = view !== "more" || subView === "alternative networks" || subView === "wrappers" || subView === "integrated";

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
            {/* For Bitcoin Native view: show chart first, then table */}
            {view === "networks" && (
                <>
                    <WelcomeBanner />
                    {showChart && <ChartSwitch />}
                    <TableSwitch />
                </>
            )}
            {/* For all other views: show chart first, then table */}
            {view !== "networks" && (
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
