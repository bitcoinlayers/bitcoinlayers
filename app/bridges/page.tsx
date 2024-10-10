import FederationTable from "@/components/tables/federation-table";
import Hero from "@/components/hero";
import { getTranslations } from "next-intl/server";
import { getAllLayersWithSlugs } from "@/i18n/helpers";

export default async function BridgesPage() {
    const t = await getTranslations("federation-table");
    const { allLayers } = await getAllLayersWithSlugs();
    const sortedLayers = allLayers
        .filter((item) => item.bridge)
        .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );

    const typeFilters = [
        ...new Set(sortedLayers.map((layer) => layer.layerType)),
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
            name: t("unit-label"),
            showSorting: true,
            mobileLabel: t("unit-label--mobile"),
        },
        {
            name: t("btc-locked-label"),
            showSorting: true,
            mobileLabel: t("btc-locked-label--mobile"),
        },
    ];

    return (
        <div className="mx-auto">
            <Hero />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <FederationTable data={sortedLayers} headers={layerHeaders} />
            </div>
        </div>
    );
}
