"use client";

import { allLayers } from "@/util/layer_index";
import Hero from "@/components/hero";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import LayerTable from "@/components/tables/layer-table";
import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";

export default function ReviewsPage() {
    const sortedLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const layerTypeFilters = [
        ...new Set(sortedLayers.map((layer) => layer.entityType)),
    ];

    const layerHeaders = [
        { name: "Name", showSorting: true, mobileLabel: "Name" },
        {
            name: "Trust Assumptions",
            showSorting: false,
            mobileLabel: "Trust",
        },
        {
            name: "Type",
            showSorting: true,
            mobileLabel: "Type",
            filterOptions: layerTypeFilters,
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
            {/* <Hero
                title="Assessments"
                description="Not every bitcoin protocol is equal."
            /> */}
            <div className="mb-24 lg:mb-12 w-full lg:max-w-5xl mx-auto">
                <AggregatedTVLChart
                    title="Layer TVL"
                    description="Total amount of BTC locked in bitcoin layers"
                    itemNameKey="layer_name"
                    chartQueryParam="assessments-chart"
                    rangeQueryParam="assessments-range"
                    useDataHook={useGetBalancesHistoricalBylayerBitcoinonly}
                    divisionDefaultValue="separate"
                    showDivisionButtons={false}
                    showLegend={false}
                    chartHeight="h-64"
                />
            </div>
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <LayerTable data={sortedLayers} headers={layerHeaders} />
            </div>
        </div>
    );
}
