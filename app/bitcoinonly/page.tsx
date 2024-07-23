"use client";

import React, { useState } from "react";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import BitcoinonlyTable from "@/components/tables/bitcoinonlyTable";
import Hero from "@/components/hero";

export default function Home() {
    const sortedLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const sortedEverything = [...allLayers, ...allInfrastructures].sort(
        (a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const layerHeaders = [
        { name: "Name", showSorting: true, mobileLabel: "Name" },
        { name: "Risk", showSorting: false, mobileLabel: "Risk" },
        { name: "Type", showSorting: true, mobileLabel: "Type" },
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        { name: "Category", showSorting: true, mobileLabel: "Category" },
        // {
        //     name: "Unit of Account",
        //     showSorting: true,
        //     mobileLabel: "Unit",
        // },
        // { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
    ];

    return (
        <div className="mx-auto">
            <Hero />
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                <BitcoinonlyTable
                    data={sortedEverything}
                    headers={layerHeaders}
                />
            </div>
        </div>
    );
}
