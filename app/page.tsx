import { allLayers } from "@/util/layer_index";
import Hero from "@/components/hero";
import { Type } from "@/content/props";
import LayerTable from "@/components/tables/layer-table";
import { LayerProject } from "@/content/props";
import LayersAggregatedTVLChart from "@/components/charts/aggregated-tvl/layers";
import ViewToggleGroup from "@/components/layer/view-toggle-group";

export default function Home() {
    const sortedLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const typeFilters = [
        ...new Set(sortedLayers.map((layer) => layer.entityType)),
    ];

    const statusFilters = [...new Set(sortedLayers.map((layer) => layer.live))];

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
        <div className="mx-auto">
            <Hero
                title="Layers"
                description="Not every bitcoin layer is made equal."
            />
            <div className="mb-4 w-full max-w-5xl mx-auto">
                <ViewToggleGroup data={allLayers} headers={layerHeaders} />
            </div>
            {/* <div className="mb-12 w-full lg:max-w-5xl mx-auto">
                <LayersAggregatedTVLChart />
            </div>
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <LayerTable data={allLayers} headers={layerHeaders} />
            </div> */}
        </div>
    );
}
