import Hero from "@/components/hero";
import InfrastructureTable from "@/components/tables/infrastructureTable";
import { LOCALES } from "@/enums/locale.enums";
import { getUserLocale } from "@/services/locale";
import { getTranslations } from "next-intl/server";

export async function getAllInfrastructure() {
    const locale = await getUserLocale();

    return locale === LOCALES.en
        ? await import("@/util/infrastructure_index_en")
        : await import("@/util/infrastructure_index_uk");
}

export default async function Home() {
    const { allInfrastructures } = await getAllInfrastructure();
    const sortedInfrastructures = allInfrastructures.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );
    const t = await getTranslations("infrastructure-table");

    const typeFilters = [
        ...new Set(
            sortedInfrastructures.map(
                (infrastructure) => infrastructure.infrastructureType,
            ),
        ),
    ];

    const infrastructureHeaders = [
        {
            name: t("name-label"),
            showSorting: true,
            mobileLabel: t("name-label--mobile"),
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
            name: t("associated-label"),
            showSorting: true,
            mobileLabel: t("associated-label--mobile"),
        },
    ];

    return (
        <div className="mx-auto">
            <Hero />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <InfrastructureTable
                    data={sortedInfrastructures}
                    headers={infrastructureHeaders}
                />
            </div>
        </div>
    );
}
