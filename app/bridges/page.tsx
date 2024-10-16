import FederationTable from "@/components/tables/federation-table";
import Hero from "@/components/hero";
import { getTranslations } from "next-intl/server";
import { getAllInfrastructure, getAllLayersWithSlugs } from "@/i18n/helpers";

export default async function BridgesPage() {
    const t = await getTranslations("federation-table");
    const { allLayers } = await getAllLayersWithSlugs();
    const { allInfrastructures } = await getAllInfrastructure();

    const sortedEverything = [...allLayers, ...allInfrastructures]
        .filter((item) => item.bridge)
        .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );
    console.log("allInfrastructures", allInfrastructures);
    console.log("everything     ", sortedEverything);

    const typeFilters = [
        ...new Set(
            sortedEverything.map((item) =>
                "layerType" in item ? item.layerType : item.infrastructureType,
            ),
        ),
    ];

    const layerHeaders = [
        { name: t("name"), showSorting: false, mobileLabel: t("name") },
        { name: t("snapshot"), showSorting: false, mobileLabel: t("snapshot") },
        {
            name: t("type"),
            showSorting: false,
            mobileLabel: t("type"),
            filterOptions: typeFilters,
        },
        { name: t("status"), showSorting: true, mobileLabel: t("status") },
        { name: t("tvl"), showSorting: true, mobileLabel: t("tvl") },
    ];

    return (
        <div className="mx-auto">
            <Hero
                title={t("bridges")}
                description="Not every bitcoin bridge is made equal."
            />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <FederationTable
                    data={sortedEverything}
                    headers={layerHeaders}
                />
            </div>
        </div>
    );
}
