import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";

import StakingTable from "@/components/tables/staking-table";
import Hero from "@/components/hero-staking";

export default function StakingPage() {
    const sortedEverything = [...allLayers, ...allInfrastructures]
        .filter((item) => item.staking)
        .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );

    const typeFilters = [
        ...new Set(
            sortedEverything.map((item) =>
                "layerType" in item ? item.layerType : item.infrastructureType,
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
        { name: "Category", showSorting: true, mobileLabel: "Category" },
    ];

    return (
        <div className="mx-auto">
            <Hero />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <StakingTable data={sortedEverything} headers={layerHeaders} />
            </div>
        </div>
    );
}
