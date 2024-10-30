import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import FederationTable from "@/components/tables/federation-table";
import Hero from "@/components/hero";
import UnderDevelopmentBanner from "@/components/under-development-banner";
import BridgesAggregatedTVLChart from "@/components/charts/aggregated-tvl/bridges";

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
        <div className="mx-auto">
            <UnderDevelopmentBanner />
            <Hero
                title="Bridges"
                description="Not all wrapped versions of bitcoin are made equal."
            />
            <div className="mb-12 w-full lg:max-w-5xl mx-auto">
                <BridgesAggregatedTVLChart />
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
