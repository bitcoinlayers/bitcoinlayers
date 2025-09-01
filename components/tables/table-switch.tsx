"use client";

import { useQueryState } from "nuqs";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import { InfrastructureProject, LayerProject, EntityCategory } from "@/content/props";
import FederationTable from "./federation-table";
import AlternativeTable from "@/components/tables/alternative-table";
import AggregatedNetworksTable from "@/components/tables/aggregated-networks-table";

function getSortedDataAndHeaders(view: string, subView: string) {
    switch (view) {
        case "alternative-networks":
            const alternativeLayers = allLayers.filter(
                (layer) => layer.entityCategory === EntityCategory.Alt,
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

        case "wrappers":
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

        case "bitcoin-layers":
        default:
            // Return Bitcoin Native, Sidesystem, and Other layers for the aggregated table
            const bitcoinLayers = allLayers
                .filter((layer) => 
                    layer.entityCategory === EntityCategory.BitcoinNative ||
                    layer.entityCategory === EntityCategory.Sidesystem ||
                    layer.entityCategory === EntityCategory.Other
                )
                .sort((a, b) =>
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
                );

            const bitcoinLayersTypeFilters = [
                ...new Set(bitcoinLayers.map((layer) => layer.entityType)),
            ];

            const bitcoinLayersHeaders = [
                { name: "Name", showSorting: true, mobileLabel: "Name" },
                {
                    name: "Type",
                    showSorting: true,
                    mobileLabel: "Type",
                    filterOptions: bitcoinLayersTypeFilters,
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

            return { sortedData: bitcoinLayers, headers: bitcoinLayersHeaders };
    }
}

export default function TableSwitch() {
    const [view] = useQueryState("view");
    const [pegSupplyView, setPegSupplyView] = useQueryState("peg-supply", {
        defaultValue: "pegs",
        parse: (value) => value === "supply" ? "supply" : "pegs",
        serialize: (value) => value,
    });

    const { sortedData, headers } = getSortedDataAndHeaders(view || "bitcoin-layers", "");

    switch (view) {
        case "alternative-networks":
            return (
                <AlternativeTable
                    data={sortedData as LayerProject[]}
                    headers={headers}
                    pegSupplyView={pegSupplyView as "pegs" | "supply"}
                    onPegSupplyViewChange={setPegSupplyView}
                />
            );
        case "wrappers":
            return (
                <FederationTable
                    data={sortedData as InfrastructureProject[]}
                    headers={headers}
                />
            );
        case "bitcoin-layers":
        default:
            return (
                <AggregatedNetworksTable
                    data={sortedData as LayerProject[]}
                    headers={headers}
                />
            );
    }
}
