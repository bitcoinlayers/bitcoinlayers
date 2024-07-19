"use client";

import React, { useState } from "react";
import { allLayers } from "@/util/layer_index";
import LayerTable from "@/components/tables/layerTable";
import LayerTableAll from "@/components/tables/layerTableAll";
// import LayerTableRiskView from "@/components/tables/layerTableRiskView"; //risks: <LayerTableRiskView />,
import Hero from "@/components/hero";

type TabKey = "liveLayersOnly" | "allLayers";

export default function Home() {
    const [activeTab, setActiveTab] = useState<TabKey>("liveLayersOnly");

    const sortedLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const layerHeaders = [
        { name: "Name", showSorting: true, mobileLabel: "Name" },
        { name: "Risk", showSorting: false, mobileLabel: "Risk" },
        { name: "Type", showSorting: true, mobileLabel: "Type" },
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        // { name: "Type", filterOptions: ["Sidechain", "State Channel", "Rollup"] },
        // { name: "Status", filterOptions: ["Mainnet", "Testnet", "Announced"] },
        {
            name: "Unit of Account",
            showSorting: true,
            mobileLabel: "Unit",
        },
        { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
    ];

    const tabComponents = {
        liveLayersOnly: (
            <LayerTable data={sortedLayers} headers={layerHeaders} />
        ),
        allLayers: <LayerTableAll data={sortedLayers} headers={layerHeaders} />,
    };

    const handleTabClick = (tab: TabKey) => {
        setActiveTab(tab);
    };

    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex lg:mb-12 justify-center -mt-12 lg:mt-0 relative z-20">
                <div className="justify-start items-start gap-4 inline-flex">
                    <div
                        className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
                            activeTab === "liveLayersOnly"
                                ? "bg-white border-orange-600"
                                : "border-slate-300"
                        }`}
                        onClick={() => handleTabClick("liveLayersOnly")}
                    >
                        <div
                            className={`text-center text-sm font-medium leading-tight ${
                                activeTab === "liveLayersOnly"
                                    ? "text-orange-600"
                                    : "text-slate-600"
                            }`}
                        >
                            Live Layers
                        </div>
                    </div>
                    <div
                        className={`h-[30px] rounded-full border-2 justify-center items-center gap-1 flex cursor-pointer ${
                            activeTab === "allLayers"
                                ? "bg-white border-orange-600"
                                : "border-slate-300"
                        }`}
                        onClick={() => handleTabClick("allLayers")}
                    >
                        <div className="grow shrink basis-0 h-[30px] px-4 py-[5px] justify-center items-center gap-1.5 flex">
                            <div
                                className={`text-center text-sm font-medium leading-tight ${
                                    activeTab === "allLayers"
                                        ? "text-orange-600"
                                        : "text-slate-600"
                                }`}
                            >
                                All Layers
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                {tabComponents[activeTab]}
            </div>
        </div>
    );
}
