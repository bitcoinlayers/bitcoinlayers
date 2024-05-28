"use client";

import React, { useState } from "react";
import { allLayers } from "@/util/layer_index";
import LayerTable from "@/components/tables/layerTable";
import LayerTableRisks from "@/components/tables/layerTableRisks";
import Hero from "@/components/hero";

type TabKey = "overview" | "risks";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const sortedLayers = allLayers
    .sort((a, b) => a.title.localeCompare(b.title));

  const layerHeaders = [
    { name: "Name" },
    { name: "Risks" },
    { name: "Type" },
    { name: "Status" },
    // { name: "Type", filterOptions: ["Sidechain", "State Channel", "Rollup"] },
    // { name: "Status", filterOptions: ["Mainnet", "Testnet", "Announced"] },
    { name: "Unit of Account" },
    { name: "BTC Locked" },
  ];

  const tabComponents = {
    overview: <LayerTable data={sortedLayers} headers={layerHeaders} />,
    risks: <LayerTableRisks />,
  };

  const handleTabClick = (tab: TabKey) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto">
      <Hero />
      <div className="flex mb-4 justify-center mt-16">
        <div className="justify-start items-start gap-4 inline-flex">
          <div
            className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
              activeTab === "overview"
                ? "bg-white border-orange-600"
                : "border-slate-300"
            }`}
            onClick={() => handleTabClick("overview")}
          >
            <div
              className={`text-center text-sm font-medium leading-tight ${
                activeTab === "overview" ? "text-orange-600" : "text-slate-600"
              }`}
            >
              Overview
            </div>
          </div>
          <div
            className={`h-[30px] rounded-full border-2 justify-center items-center gap-1 flex cursor-pointer ${
              activeTab === "risks"
                ? "bg-white border-orange-600"
                : "border-slate-300"
            }`}
            onClick={() => handleTabClick("risks")}
          >
            <div className="grow shrink basis-0 h-[30px] px-4 py-[5px] justify-center items-center gap-1.5 flex">
              <div
                className={`text-center text-sm font-medium leading-tight ${
                  activeTab === "risks" ? "text-orange-600" : "text-slate-600"
                }`}
              >
                Risks
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-4 justify-center max-w-5xl mx-auto">
        {tabComponents[activeTab]}
      </div>
    </div>
  );
}
