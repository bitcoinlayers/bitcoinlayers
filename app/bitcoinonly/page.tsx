import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import BitcoinonlyTable from "@/components/tables/bitcoinonly-table";
import Hero from "@/components/hero";

export default function Home() {
    const sortedEverything = [...allLayers, ...allInfrastructures]
        .filter((item) => item.bitcoinOnly)
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
        { name: "Name", showSorting: true, mobileLabel: "Name" },
        { name: "Risk", showSorting: false, mobileLabel: "Risk" },
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
            <Hero
                title="Layers"
                description="Not every bitcoin layer is made equal."
            />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <BitcoinonlyTable
                    data={sortedEverything}
                    headers={layerHeaders}
                />
            </div>
        </div>
    );
}
