import BitcoinonlyTable from "@/components/tables/bitcoinonlyTable";
import Hero from "@/components/hero";
import { useTranslations } from "next-intl";
import { getAllInfrastructure, getAllLayersWithSlugs } from "@/i18n/helpers";

export default async function Home() {
    const { allInfrastructures } = await getAllInfrastructure();
    const { allLayers } = await getAllLayersWithSlugs();
    const t = useTranslations("bitcoin-only-table");
    const sortedEverything = [...allLayers, ...allInfrastructures]
        .filter((item) => item.bitcoinOnly)
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
            name: t("name-label"),
            showSorting: true,
            mobileLabel: t("name-label--mobile"),
        },
        {
            name: t("risk-label"),
            showSorting: false,
            mobileLabel: t("risk-label--mobile"),
        },
        {
            name: t("type-label"),
            showSorting: true,
            mobileLabel: t("type-label--mobile"),
            filterOptions: typeFilters,
        },
        {
            name: t("status-label"),
            showSorting: true,
            mobileLabel: t("status-label--mobile"),
        },
        {
            name: t("category-label"),
            showSorting: true,
            mobileLabel: t("category-label--mobile"),
        },
    ];

    return (
        <div className="mx-auto">
            <Hero />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <BitcoinonlyTable
                    data={sortedEverything}
                    headers={layerHeaders}
                />
            </div>
        </div>
    );
}
