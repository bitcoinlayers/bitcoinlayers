import { getAllInfrastructure, getAllLayersWithSlugs } from "@/i18n/helpers";
import StakingTable from "@/components/tables/staking-table";
import Hero from "@/components/hero";
import { getTranslations } from "next-intl/server";

export default async function StakingPage() {
    const { allInfrastructures } = await getAllInfrastructure();
    const { allLayers } = await getAllLayersWithSlugs();
    const t = await getTranslations("staking");

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
            name: t("name"),
            showSorting: true,
            mobileLabel: t("name"),
        },
        { name: t("risk"), showSorting: false, mobileLabel: t("risk") },
        {
            name: t("type"),
            showSorting: true,
            mobileLabel: t("type"),
            filterOptions: typeFilters,
        },
        { name: t("status"), showSorting: true, mobileLabel: t("status") },
        { name: t("category"), showSorting: true, mobileLabel: t("category") },
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
