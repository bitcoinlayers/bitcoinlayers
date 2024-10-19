import Hero from "@/components/hero";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import { getAllLayersWithSlugs } from "@/i18n/helpers";
import { getTranslations } from "next-intl/server";

export default async function Home() {
    const { allLayers } = await getAllLayersWithSlugs();
    const t = await getTranslations("home-table");
    const sortedLayers = allLayers.sort((a, b) =>
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
            <Hero
                title={t("layers")}
                description={t("not-every-bitcoin-layer-is-made-equal")}
            />
            <div className="mb-4 w-full max-w-5xl mx-auto">
                <ViewToggleGroup data={allLayers} headers={layerHeaders} />
            </div>
        </div>
    );
}
