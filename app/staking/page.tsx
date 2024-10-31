import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";

import StakingTable from "@/components/tables/staking-table";
import Hero from "@/components/hero";
import UnderDevelopmentBanner from "@/components/under-development-banner";
import StakingAggregatedTVLChart from "@/components/charts/aggregated-tvl/staking";

export default function StakingPage() {
    const sortedEverything = [...allLayers, ...allInfrastructures]
        .filter((item) => item.staking)
        .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );

    const typeFilters = [
        ...new Set(sortedEverything.map((item) => item.entityType)),
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
            <UnderDevelopmentBanner title="The Staking module of Bitcoin Layers is under development." />
            <Hero
                title="Staking"
                description="Not every bitcoin staking protocol is equal."
            />
            <div className="mb-24 lg:mb-12 w-full lg:max-w-5xl mx-auto">
                <StakingAggregatedTVLChart />
            </div>
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <StakingTable data={sortedEverything} headers={layerHeaders} />
            </div>
        </div>
    );
}
