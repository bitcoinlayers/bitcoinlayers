import { allInfrastructures } from "@/util/infrastructure_index";
import Hero from "@/components/hero";
import InfrastructureTable from "@/components/tables/infrastructure-table";

export default function Home() {
    const sortedInfrastructures = allInfrastructures.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const typeFilters = [
        ...new Set(
            sortedInfrastructures.map(
                (infrastructure) => infrastructure.entityType,
            ),
        ),
    ];

    const infrastructureHeaders = [
        { name: "Name", showSorting: true, mobileLabel: "Name" },
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
        { name: "Associated Layers", showSorting: true, mobileLabel: "Layers" },
    ];

    return (
        <div className="mx-auto">
            <Hero
                title="Layers"
                description="Not every bitcoin layer is made equal."
            />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <InfrastructureTable
                    data={sortedInfrastructures}
                    headers={infrastructureHeaders}
                />
            </div>
        </div>
    );
}
