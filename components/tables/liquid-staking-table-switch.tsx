"use client";

import { useQueryState } from "nuqs";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import { DropletsIcon } from "lucide-react";
import LiquidStakingTable from "./liquid-staking-table";

export default function LiquidStakingTableSwitch() {
    const [view] = useQueryState("view");

    const sortedLiquidStaking = [...allLayers, ...allInfrastructures]
        .filter((item) => item.liquidStaking)
        .sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        );

    const stakingTypeFilters = [
        ...new Set(sortedLiquidStaking.map((item) => item.entityType)),
    ];

    const liquidStakingHeaders = [
        { name: "Name", showSorting: true, mobileLabel: "Name" },
        {
            name: "Snapshot",
            showSorting: false,
            mobileLabel: "Snapshot",
        },
        {
            name: "Type",
            showSorting: true,
            mobileLabel: "Type",
            filterOptions: stakingTypeFilters,
            filterQueryParam: "liquid-staking-type",
        },
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        { name: "TVL", showSorting: true, mobileLabel: "TVL" },
    ];

    if (view === "staking") {
        return (
            <LiquidStakingTable
                data={sortedLiquidStaking}
                headers={liquidStakingHeaders}
            />
        );
    }

    return null;
}
