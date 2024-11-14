"use client";

import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import FederationTable from "@/components/tables/federation-table";
import Hero from "@/components/hero";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import UnderDevelopmentBanner from "@/components/under-development-banner";

export default function BridgesPage() {
    const sortedEverything = [...allLayers, ...allInfrastructures]
        .filter((item) => item.bridge)
        .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );

    const typeFilters = [
        ...new Set(
            sortedEverything.map((item) =>
                "layerType" in item ? item.entityType : item.entityType,
            ),
        ),
    ];

    const layerHeaders = [
        {
            name: "Name",
            showSorting: true,
            mobileLabel: "Name",
        },
        { name: "Snapshot", showSorting: false, mobileLabel: "Snapshot" },
        {
            name: "Type",
            showSorting: true,
            mobileLabel: "Type",
            filterOptions: typeFilters,
        },
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        { name: "TVL", showSorting: true, mobileLabel: "TVL" },
    ];

    return (
        <div className="mx-auto relative">
            <UnderDevelopmentBanner />
            <Hero
                title="Crosschain"
                description="Not all crosschain BTC is made equal."
            />
            <div className="mb-12 w-full lg:max-w-5xl mx-auto">
                <AggregatedTVLChart
                    title="Crosschain BTC TVL"
                    description="Total amount of BTC locked in crosschain BTC protocols"
                    itemNameKey="infra_name"
                    chartQueryParam="bridge-chart"
                    rangeQueryParam="bridge-range"
                    useDataHook={useGetInfratvlHistoricalBridge}
                    divisionDefaultValue="separate"
                />
            </div>
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <FederationTable
                    data={sortedEverything}
                    headers={layerHeaders}
                />
            </div>
        </div>
    );
}
