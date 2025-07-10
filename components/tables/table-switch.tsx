"use client";

import { useQueryState } from "nuqs";
// import StakingTable from "./staking-table";
import LayerTable from "./layer-table";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import { allMore } from "@/util/more_index";
import { allOpcodes } from "@/util/opcode_index";
import { InfrastructureProject, LayerProject, EntityCategory } from "@/content/props";
import FederationTable from "./federation-table";
import MoreTable from "./more-table";
import OpcodeTable from "./opcode-table";
import { CoinsIcon } from "lucide-react";
import { HardDrive } from "lucide-react";
import { Code } from "lucide-react";
import IntegratedTable from "@/components/tables/integrated-table";
import SidesystemTable from "@/components/tables/sidesystem-table";
import AlternativeTable from "@/components/tables/alternative-table";

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
                return {
                    sortedData: allOpcodes,
                    headers: [
                        { name: "Name", showSorting: true, mobileLabel: "Name" },
                        {
                            name: "Type",
                            showSorting: false,
                            mobileLabel: "Type",
                        },
                        {
                            name: "Description",
                            showSorting: false,
                            mobileLabel: "Description",
                        },
                        {
                            name: "Complexity",
                            showSorting: false,
                            mobileLabel: "Complexity",
                        },
                        {
                            name: "Research",
                            showSorting: false,
                            mobileLabel: "Research",
                        },
                    ],
                };
            } else if (subView === "alternative networks") {
                const alternativeLayers = allLayers.filter(
                    (layer) =>
                        layer.entityCategory === EntityCategory.Alt,
                ).sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

                const alternativeTypeFilters = [
                    ...new Set(alternativeLayers.map((layer) => layer.entityType)),
                ];

                const alternativeHeaders = [
                    { name: "Name", showSorting: true, mobileLabel: "Name" },
                    {
                        name: "Type",
                        showSorting: true,
                        mobileLabel: "Type",
                        filterOptions: alternativeTypeFilters,
                    },
                    {
                        name: "Trust Assumptions",
                        showSorting: false,
                        mobileLabel: "Trust assump...",
                    },
                    {
                        name: "Risk Summary",
                        showSorting: false,
                        mobileLabel: "Risk",
                    },
                    {
                        name: "Custody Type",
                        showSorting: false,
                        mobileLabel: "Custody",
                    },
                    {
                        name: "BTC Pegs",
                        showSorting: false,
                        mobileLabel: "Pegs",
                    },
                ];

                return { sortedData: alternativeLayers, headers: alternativeHeaders };
            } else if (subView === "wrappers") {
                const sortedInfrastructures = allInfrastructures.sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

                const federationTypeFilters = [
                    ...new Set(sortedInfrastructures.map((layer) => layer.entityType)),
                ];

                const federationHeaders = [
                    { name: "Name", showSorting: true, mobileLabel: "Name" },
                    {
                        name: "Type",
                        showSorting: true,
                        mobileLabel: "Type",
                        filterOptions: federationTypeFilters,
                    },
                    {
                        name: "Snapshot",
                        showSorting: false,
                        mobileLabel: "Snapshot",
                    },
                    {
                        name: "Risk Summary",
                        showSorting: false,
                        mobileLabel: "Risk",
                    },
                    {
                        name: "Networks",
                        showSorting: false,
                        mobileLabel: "Networks",
                    },
                    { name: "BTC Supply", showSorting: true, mobileLabel: "BTC" },
                ];

                return { sortedData: sortedInfrastructures, headers: federationHeaders };
            } else if (subView === "integrated") {
                const integratedLayers = allLayers.filter(
                    (layer) => layer.entityCategory === EntityCategory.Integrated
                ).sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                );

                const integratedTypeFilters = [
                    ...new Set(integratedLayers.map((layer) => layer.entityType)),
                ];

                            const integratedHeaders = [
                { name: "Name", showSorting: true, mobileLabel: "Name" },
                {
                    name: "Type",
                    showSorting: true,
                    mobileLabel: "Type",
                    filterOptions: integratedTypeFilters,
                },
                {
                    name: "Trust Assumptions",
                    showSorting: false,
                    mobileLabel: "Trust assump...",
                },
                {
                    name: "Risk Summary",
                    showSorting: false,
                    mobileLabel: "Risk",
                },
                {
                    name: "Custody Type",
                    showSorting: false,
                    mobileLabel: "Custody",
                },
                {
                    name: "BTC Pegs",
                    showSorting: false,
                    mobileLabel: "Pegs",
                },
            ];

                return { sortedData: integratedLayers, headers: integratedHeaders };
            } else {
                const sortedMore = allMore.sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

                const moreTypeFilters = [
                    ...new Set(sortedMore.map((layer) => layer.entityType)),
                ];

                const moreHeaders = [
                    { name: "Name", showSorting: true, mobileLabel: "Name" },
                    {
                        name: "Type",
                        showSorting: true,
                        mobileLabel: "Type",
                        filterOptions: moreTypeFilters,
                    },
                    { name: "Asset Custody", showSorting: true, mobileLabel: "Asset Custody" },
                    {
                        name: "Risk Summary",
                        showSorting: true,
                        mobileLabel: "Risk Summary",
                    },
                    {
                        name: "Use Cases",
                        showSorting: true,
                        mobileLabel: "Use Cases",
                    },
                    {
                        name: "Associated Networks",
                        showSorting: true,
                        mobileLabel: "Associated Networks",
                    },
                ];

                return { sortedData: sortedMore, headers: moreHeaders };
            }


        case "sidesystems":
            const sortedSidesystems = allLayers.filter(
                (layer) => layer.entityCategory === EntityCategory.Sidesystem
            ).sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            );

            const sidesystemTypeFilters = [
                ...new Set(sortedSidesystems.map((layer) => layer.entityType)),
            ];

            const sidesystemHeaders = [
                { name: "Name", showSorting: true, mobileLabel: "Name" },
                {
                    name: "Type",
                    showSorting: true,
                    mobileLabel: "Type",
                    filterOptions: sidesystemTypeFilters,
                },
                {
                    name: "Trust Assumptions",
                    showSorting: false,
                    mobileLabel: "Trust assump...",
                },
                {
                    name: "Risk Summary",
                    showSorting: false,
                    mobileLabel: "Risk",
                },
                {
                    name: "Custody Type",
                    showSorting: false,
                    mobileLabel: "Custody",
                },
                {
                    name: "BTC Pegs",
                    showSorting: false,
                    mobileLabel: "Pegs",
                },
            ];

            return { sortedData: sortedSidesystems, headers: sidesystemHeaders };
        case "networks":
        case "layers":
        default:
            const sortedBitcoinNativeLayers = allLayers.filter(
                (layer) => layer.entityCategory === EntityCategory.BitcoinNative
            ).sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
            );

            const bitcoinNativeTypeFilters = [
                ...new Set(sortedBitcoinNativeLayers.map((layer) => layer.entityType)),
            ];

            const bitcoinNativeHeaders = [
                { name: "Name", showSorting: true, mobileLabel: "Name" },
                {
                    name: "Type",
                    showSorting: true,
                    mobileLabel: "Type",
                    filterOptions: bitcoinNativeTypeFilters,
                },
                {
                    name: "Trust Assumptions",
                    showSorting: false,
                    mobileLabel: "Trust assump...",
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
            ];

            return { sortedData: sortedBitcoinNativeLayers, headers: bitcoinNativeHeaders };
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
                        icon={<Code className="mr-3" />}
                        isOpcode
                    />
                );
            } else if (subView === "alternative networks") {
                return (
                    <AlternativeTable
                        data={sortedData as LayerProject[]}
                        headers={headers}
                    />
                );
            } else if (subView === "wrappers") {
                return (
                    <FederationTable
                        data={sortedData as InfrastructureProject[]}
                        headers={headers}
                    />
                );
            } else if (subView === "integrated") {
                return (
                    <IntegratedTable
                        data={sortedData as LayerProject[]}
                        headers={headers}
                    />
                );
            } else {
                return (
                    <MoreTable
                        data={sortedData as InfrastructureProject[]}
                        headers={headers}
                        title="Other Layers"
                        description="Learn the tradeoffs for different application layers"
                        icon={<HardDrive className="mr-3" />}
                        isMore
                    />
                );
            }

        case "sidesystems":
            return (
                <SidesystemTable
                    data={sortedData as LayerProject[]}
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
