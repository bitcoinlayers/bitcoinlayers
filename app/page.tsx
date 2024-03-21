"use client";

import React, { useState } from "react";
import LayerTab from "@/components/homepageTabs/layerTab";
import BridgeTab from "@/components/homepageTabs/bridgeTab";
import InfrastructureTab from "@/components/homepageTabs/infrastructureTab";

type TabKey = "layers" | "infrastructure" | "bridges";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("layers");

  const tabComponents = {
    layers: <LayerTab />,
    infrastructure: <InfrastructureTab />,
    bridges: <BridgeTab />,
  };

  return (
    <div className="max-w-5xl mx-auto pb-16">
      <div className="flex mb-4 justify-center">
        <button
          className={`mr-4 py-2 px-4 font-bold ${
            activeTab === "layers" ? "text-bitcoin" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("layers")}
        >
          Layers
        </button>
        <button
          className={`mr-4 py-2 px-4 font-bold ${
            activeTab === "infrastructure" ? "text-bitcoin" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("infrastructure")}
        >
          Infrastructure
        </button>
        <button
          className={`py-2 px-4 font-bold ${
            activeTab === "bridges" ? "text-bitcoin" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("bridges")}
        >
          Bridges
        </button>
      </div>

      {/* Render the component corresponding to the active tab */}
      {tabComponents[activeTab]}
    </div>
  );
}
