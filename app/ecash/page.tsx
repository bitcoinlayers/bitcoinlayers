"use client";

import { getAllEcash } from "@/i18n/helpers";
import Hero from "@/components/hero";
import InfrastructureTable from "@/components/tables/infrastructureTable";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Infrastructure } from "@/components/infrastructure/infrastructureProps";

export default function Home() {
    const [allEcash, setAllEscash] = useState<Infrastructure[]>([]);
    const t = useTranslations("escash");

    useEffect(() => {
        const load = async () => {
            const allEcash = await getAllEcash();
            setAllEscash(allEcash);
        };

        load();
    }, []);

    const sortedInfrastructures = allEcash.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const typeFilters = [
        ...new Set(
            sortedInfrastructures.map(
                (infrastructure) => infrastructure.infrastructureType,
            ),
        ),
    ];

    const infrastructureHeaders = [
        { name: t("name"), showSorting: true, mobileLabel: t("name") },
        {
            name: t("type"),
            showSorting: true,
            mobileLabel: t("type"),
            filterOptions: typeFilters,
        },
        { name: t("status"), showSorting: true, mobileLabel: t("status") },
        {
            name: t("unit-of-account"),
            showSorting: true,
            mobileLabel: t("unit"),
        },
        {
            name: t("associated-layers"),
            showSorting: true,
            mobileLabel: t("layers"),
        },
    ];

    return (
        <div className="mx-auto">
            <Hero
                title="Ecash"
                description="Not every ecash system is equal."
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
