import { allMore } from "@/util/more_index";
import Hero from "@/components/hero";
import MoreTable from "@/components/tables/more-table";
import { CoinsIcon } from "lucide-react";

export default function Home() {
    const sortedInfrastructures = allMore.sort((a, b) =>
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
        {
            name: "Associated Networks",
            showSorting: true,
            mobileLabel: "Networks",
        },
    ];

    return (
        <div className="mx-auto">
            { <Hero
                title="Layers"
                description="Not every app layer is made equal."
            /> }
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <MoreTable
                    data={sortedInfrastructures}
                    headers={infrastructureHeaders}
                    title="Applications & more"
                    description="Learn the tradeoffs for different application layers"
                    icon={<CoinsIcon className="mr-3" />}
                    isMore
                />
            </div>
        </div>
    );
}
