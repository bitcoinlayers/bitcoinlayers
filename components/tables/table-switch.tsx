"use client";

import { useQueryState } from "nuqs";
// import StakingTable from "./staking-table";
import LayerTable from "./layer-table";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import { allMore } from "@/util/more_index";
import { allOpcodes } from "@/util/opcode_index";
import { InfrastructureProject, LayerProject } from "@/content/props";
import FederationTable from "./federation-table";
import MoreTable from "./more-table";
import OpcodeTable from "./opcode-table";
import { CoinsIcon, GitForkIcon } from "lucide-react";

function getSortedDataAndHeaders(view: string, subView: string) {
    switch (view) {
        // case "staking":
        //     const sortedStaking = [...allLayers, ...allInfrastructures]
        //         .filter((item) => item.staking)
        //         .sort((a, b) =>
        //             a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
        //         );

        //     const stakingTypeFilters = [
        //         ...new Set(sortedStaking.map((item) => item.entityType)),
        //     ];

        //     const stakingHeaders = [
        //         { name: "Name", showSorting: true, mobileLabel: "Name" },
        //         {
        //             name: "Snapshot",
        //             showSorting: false,
        //             mobileLabel: "Snapshot",
        //         },
        //         {
        //             name: "Type",
        //             showSorting: true,
        //             mobileLabel: "Type",
        //             filterOptions: stakingTypeFilters,
        //         },
        //         { name: "Status", showSorting: true, mobileLabel: "Status" },
        //         { name: "Supply", showSorting: true, mobileLabel: "Supply" },
        //     ];

        //     return { sortedData: sortedStaking, headers: stakingHeaders };

        case "more":
            if (subView === "opcodes") {
                // Opcodes case
                const sortedOpcodes = allOpcodes.sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

                const opcodeTypeFilters = [
                    ...new Set(
                        sortedOpcodes.map(
                            (infrastructure) => infrastructure.entityType,
                        ),
                    ),
                ];

                const opcodeHeaders = [
                    { name: "Name", showSorting: true, mobileLabel: "Name" },
                    {
                        name: "Components",
                        showSorting: false,
                        mobileLabel: "Components",
                    },
                    {
                        name: "Primitives",
                        showSorting: false,
                        mobileLabel: "Primitives",
                    },
                    { name: "Status", showSorting: true, mobileLabel: "Status" },
                    { name: "Applications", showSorting: false, mobileLabel: "Applications" },
                    {
                        name: "Support Networks",
                        showSorting: false,
                        mobileLabel: "Networks",
                    },
                ];

                return { sortedData: sortedOpcodes, headers: opcodeHeaders };
            } else {
                // Applications case (default)
                const sortedMore = allMore.sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

                const moreTypeFilters = [
                    ...new Set(
                        sortedMore.map(
                            (infrastructure) => infrastructure.entityType,
                        ),
                    ),
                ];

                const moreHeaders = [
                    { name: "Name", showSorting: true, mobileLabel: "Name" },
                    {
                        name: "Type",
                        showSorting: true,
                        mobileLabel: "Type",
                        filterOptions: moreTypeFilters,
                    },
                    { name: "Status", showSorting: true, mobileLabel: "Status" },
                    {
                        name: "Unit of Account",
                        showSorting: true,
                        mobileLabel: "Unit",
                    },
                    {
                        name: "Associated Networks",
                        showSorting: true,
                        mobileLabel: "Networks",
                    },
                ];

                return { sortedData: sortedMore, headers: moreHeaders };
            }

        case "wrappers":
            const sortedWrappers = [...allInfrastructures].sort((a, b) =>
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
                    name: "Type",
                    showSorting: true,
                    mobileLabel: "Type",
                    filterOptions: wrapperTypeFilters,
                },
                {
                    name: "Snapshot",
                    showSorting: false,
                    mobileLabel: "Snapshot",
                },
                { name: "Risk Summary", showSorting: true, mobileLabel: "Risk Summary" },
                {
                    name: "Networks",
                    showSorting: false,
                    mobileLabel: "Networks",
                },
                { name: "Supply", showSorting: true, mobileLabel: "Supply" },
            ];

            return { sortedData: sortedWrappers, headers: wrapperHeaders };
        case "networks":
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
                    name: "Type",
                    showSorting: true,
                    mobileLabel: "Type",
                    filterOptions: layerTypeFilters,
                },
                {
                    name: "Trust Assumptions",
                    showSorting: false,
                    mobileLabel: "Trust",
                },
                {
                    name: "Risk Summary",
                    showSorting: false,
                    mobileLabel: "Risk",
                },
                {
                    name: "BTC Pegs",
                    showSorting: false,
                    mobileLabel: "Pegs",
                },
                { name: "BTC Supply", showSorting: true, mobileLabel: "BTC" },
            ];

            return { sortedData: sortedLayers, headers: layerHeaders };
    }
}

export default function TableSwitch() {
    const [view] = useQueryState("view");
    const [subView] = useQueryState("subview", {
        defaultValue: "applications",
    });

    const { sortedData, headers } = getSortedDataAndHeaders(view || "", subView || "applications");

    switch (view) {
        // case "staking":
        //     return <StakingTable data={sortedData} headers={headers} />;
        case "more":
            if (subView === "opcodes") {
                return (
                    <OpcodeTable
                        data={sortedData as InfrastructureProject[]}
                        headers={headers}
                        title="Proposed Opcodes"
                        description="Learn the tradeoffs for different opcode proposals"
                        icon={<GitForkIcon className="mr-3" />}
                        isOpcode
                    />
                );
            } else {
                return (
                    <MoreTable
                        data={sortedData as InfrastructureProject[]}
                        headers={headers}
                        title="Applications"
                        description="Learn the tradeoffs for different application layers"
                        icon={<CoinsIcon className="mr-3" />}
                        isMore
                    />
                );
            }
        case "wrappers":
            return (
                <FederationTable
                    data={sortedData as InfrastructureProject[]}
                    headers={headers}
                />
            );
        case "networks":
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
