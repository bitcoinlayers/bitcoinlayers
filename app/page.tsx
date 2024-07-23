"use client";

import React, { useState } from "react";
import { allLayers } from "@/util/layer_index";
// import LayerTable from "@/components/tables/layerTable";
import LayerTableAll from "@/components/tables/layerTableAll";
// import LayerTableRiskView from "@/components/tables/layerTableRiskView"; //risks: <LayerTableRiskView />,
import Hero from "@/components/hero";

export default function Home() {
    // const [activeTab, setActiveTab] = useState<TabKey>("liveLayersOnly");
    // const [btcFilter, setBtcFilter] = useState(false);

    const sortedLayers = allLayers.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );

    const layerHeaders = [
        { name: "Name", showSorting: true, mobileLabel: "Name" },
        { name: "Risk", showSorting: false, mobileLabel: "Risk" },
        { name: "Type", showSorting: true, mobileLabel: "Type" },
        { name: "Status", showSorting: true, mobileLabel: "Status" },
        {
            name: "Unit of Account",
            showSorting: true,
            mobileLabel: "Unit",
        },
        { name: "BTC Locked", showSorting: true, mobileLabel: "BTC" },
    ];

    // const filteredLayers = btcFilter
    //     ? sortedLayers.filter(
    //           (layer) => layer.nativeToken.toLowerCase() === "btc",
    //       )
    //     : sortedLayers;

    // const tabComponents = {
    //     liveLayersOnly: (
    //         <LayerTable
    //             data={filteredLayers.filter(
    //                 (layer) => layer.live === "Mainnet",
    //             )}
    //             headers={layerHeaders}
    //         />
    //     ),
    //     allLayers: (
    //         <LayerTableAll data={filteredLayers} headers={layerHeaders} />
    //     ),
    // };

    // const handleTabClick = (tab: TabKey) => {
    //     setActiveTab(tab);
    // };

    // const toggleBtcFilter = () => {
    //     setBtcFilter((prev) => !prev);
    // };

    return (
        <div className="mx-auto">
            <Hero />
            {/* <div className="flex lg:mb-12 justify-center -mt-12 lg:mt-0 relative z-20">
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
            </div> */}
            {/* <div className="flex justify-center my-4">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    onClick={toggleBtcFilter}
                >
                    {btcFilter ? "Show All Layers" : "Show Only BTC Layers"}
                </button>
            </div> */}
            <div className="lg:flex mb-4 justify-center w-full lg:max-w-5xl mx-auto">
                {/* {tabComponents[activeTab]} */}
                <LayerTableAll data={sortedLayers} headers={layerHeaders} />
            </div>
        </div>
    );
}
