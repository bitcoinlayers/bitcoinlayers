import ViewToggleGroup from "@/components/layer/view-toggle-group";
import StatCardGrid from "@/components/stat-card-grid";
import CtaCard from "@/components/cta-card";
import InfoCardGrid from "@/components/info-card-grid";
import ChartSwitch from "@/components/charts/chart-switch";
import TableSwitch from "@/components/tables/table-switch";

export default function Home() {
    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup />
            <ChartSwitch />
            <StatCardGrid />
            <TableSwitch />
            <CtaCard />
            <InfoCardGrid />
        </div>
    );
}
