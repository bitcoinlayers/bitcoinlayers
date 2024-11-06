import { allLayers } from "@/util/layer_index";
import LayerTable from "@/components/tables/layer-table";
import LayersAggregatedTVLChart from "@/components/charts/aggregated-tvl/layers";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import StatCardGrid from "@/components/stat-card-grid";
import CtaCard from "@/components/cta-card";
import InfoCardGrid from "@/components/info-card-grid";

export default function Home() {
    const sortedLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const typeFilters = [
        ...new Set(sortedLayers.map((layer) => layer.entityType)),
    ];

    const layerHeaders = [
        {
            name: "Name",
            showSorting: true,
            mobileLabel: "Name",
        },
        { name: "Risk", showSorting: false, mobileLabel: "Risk" },
        {
            name: "Type",
            showSorting: true,
            mobileLabel: "Type",
            filterOptions: typeFilters,
        },
        {
            name: "Status",
            showSorting: true,
            mobileLabel: "Status",
            // filterOptions: statusFilters, //add back when moving status sort back into table header
        },
        {
            name: "Unit of Account",
            showSorting: true,
            mobileLabel: "Unit",
        },
        { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
    ];

    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup />
            <LayersAggregatedTVLChart />
            <StatCardGrid />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <LayerTable data={allLayers} headers={layerHeaders} />
            </div>
            <CtaCard
                title="Looking to build on Bitcoin?"
                description="Get in touch with our team to learn where to deploy"
                ctaText="Contact us"
                url="/#"
            />
            <InfoCardGrid />
        </div>
    );
}
