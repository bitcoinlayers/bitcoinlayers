"use client";

import { useQueryState } from "nuqs";
import StakingTable from "./staking-table";
import LayerTable from "./layer-table";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import { InfrastructureProject, LayerProject } from "@/content/props";
import FederationTable from "./federation-table";

function getSortedDataAndHeaders(view: string) {
    switch (view) {
        case "staking":
            const sortedStaking = [...allLayers, ...allInfrastructures]
                .filter((item) => item.staking)
                .sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

            const stakingTypeFilters = [
                ...new Set(sortedStaking.map((item) => item.entityType)),
            ];

            const stakingHeaders = [
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
                },
                { name: "Status", showSorting: true, mobileLabel: "Status" },
                { name: "TVL", showSorting: true, mobileLabel: "TVL" },
            ];

            return { sortedData: sortedStaking, headers: stakingHeaders };

        case "wrappers":
            const sortedWrappers = [...allLayers, ...allInfrastructures]
                .filter((item) => item.bridge)
                .sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

            const wrapperTypeFilters = [
                ...new Set(
                    sortedWrappers.map((item) =>
                        "layerType" in item ? item.entityType : item.entityType,
                    ),
                ),
            ];

            const wrapperHeaders = [
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
                    filterOptions: wrapperTypeFilters,
                },
                { name: "Status", showSorting: true, mobileLabel: "Status" },
                { name: "TVL", showSorting: true, mobileLabel: "TVL" },
            ];

            return { sortedData: sortedWrappers, headers: wrapperHeaders };

        case "layers":
        default:
            const sortedLayers = allLayers.sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
            );

            const layerTypeFilters = [
                ...new Set(sortedLayers.map((layer) => layer.entityType)),
            ];

            const layerHeaders = [
                { name: "Name", showSorting: true, mobileLabel: "Name" },
                {
                    name: "Trust Assumptions",
                    showSorting: false,
                    mobileLabel: "Trust",
                },
                {
                    name: "Type",
                    showSorting: true,
                    mobileLabel: "Type",
                    filterOptions: layerTypeFilters,
                },
                {
                    name: "Status",
                    showSorting: true,
                    mobileLabel: "Status",
                    // filterOptions: statusFilters, //add back when moving status sort back into table header
                },
                {
                    name: "Unit of Account",
                    showSorting: true,
                    mobileLabel: "Unit",
                },
                { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
            ];

            return { sortedData: sortedLayers, headers: layerHeaders };
    }
}

export default function TableSwitch() {
    const [view] = useQueryState("view");

    const { sortedData, headers } = getSortedDataAndHeaders(view || "");

    switch (view) {
        case "staking":
            return <StakingTable data={sortedData} headers={headers} />;
        case "wrappers":
            return (
                <FederationTable
                    data={sortedData as InfrastructureProject[]}
                    headers={headers}
                />
            );
        case "layers":
        default:
            return (
                <LayerTable
                    data={sortedData as LayerProject[]}
                    headers={headers}
                />
            );
    }
}
