import ViewToggleGroup from "@/components/layer/view-toggle-group";
import CtaCard from "@/components/cta-card";
import InfoCardGrid from "@/components/info-card-grid";
import ChartSwitch from "@/components/charts/chart-switch";
import TableSwitch from "@/components/tables/table-switch";
import TopGainers from "@/components/top-gainers";

export default async function Home() {
    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup showAll={false} />
            <TopGainers />
            <ChartSwitch />
            <TableSwitch />
            <CtaCard />
            <InfoCardGrid />
        </div>
    );
}
