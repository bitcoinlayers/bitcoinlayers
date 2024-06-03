"use client";

import React, { useState } from "react";
import { allLayers } from "@/util/layer_index";
import Hero from "@/components/hero";
// import LayerTable from "@/components/tables/layerTable";
import LayerTableUpcoming from "@/components/tables/layerUpcoming";

export default function Home() {
    const upcomingLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const layerHeaders = [
        { name: "Name", showSorting: true },
        { name: "Risk", showSorting: false },
        { name: "Type", showSorting: true },
        { name: "Status", showSorting: true },
        // { name: "Type", filterOptions: ["Sidechain", "State Channel", "Rollup"] },
        // { name: "Status", filterOptions: ["Mainnet", "Testnet", "Announced"] },
        { name: "Unit of Account", showSorting: true },
        { name: "BTC Locked", showSorting: true },
    ];
    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                <LayerTableUpcoming
                    data={upcomingLayers}
                    headers={layerHeaders}
                />
                ,
            </div>
        </div>
    );
}
