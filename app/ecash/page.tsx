import { allEcash } from "@/util/ecash_index";
import Hero from "@/components/hero";
import InfrastructureTable from "@/components/tables/infrastructure-table";
import { CoinsIcon } from "lucide-react";

export default function Home() {
    const sortedInfrastructures = allEcash.sort((a, b) =>
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
            {/* <Hero
                title="Ecash"
                description="Not every ecash system is equal."
            /> */}
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <InfrastructureTable
                    data={sortedInfrastructures}
                    headers={infrastructureHeaders}
                    title="Ecash"
                    description="Learn the tradeoffs for different ecash projects"
                    icon={<CoinsIcon className="mr-3" />}
                    isEcash
                />
            </div>
        </div>
    );
}
