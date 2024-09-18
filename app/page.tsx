import { allLayers } from "@/util/layer_index";
import Hero from "@/components/hero";
import TVLChart from "@/components/charts/tvl-chart";

export default function Home() {
    const sortedLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const typeFilters = [
        ...new Set(sortedLayers.map((layer) => layer.layerType)),
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
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        {
            name: "Unit of Account",
            showSorting: true,
            mobileLabel: "Unit",
        },
        { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
    ];

    return (
        <div className="mx-6">
            <Hero />
            <div className="mb-4 w-full max-w-5xl mx-auto">
                <TVLChart />
            </div>
        </div>
    );
}
