import Hero from "@/components/hero";
import LayerTableAll from "@/components/tables/layerTableAll";
import { getAllLayersWithSlugs } from "@/i18n/helpers";
import { useTranslations } from "next-intl";

export default async function Home() {
    const { allLayers } = await getAllLayersWithSlugs();
    const layersAll = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );
    const t = useTranslations("upcoming-layers-table");

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
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                <LayerTableAll data={layersAll} headers={layerHeaders} />,
            </div>
        </div>
    );
}
