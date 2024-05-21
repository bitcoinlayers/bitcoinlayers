"use client";

import React, { useState } from "react";
import LayerTab from "@/components/homepageTabs/layerTab";
import BridgeTab from "@/components/homepageTabs/bridgeTab";
import InfrastructureTab from "@/components/homepageTabs/infrastructureTab";
import Image from "next/image";
import Hero from "@/components/hero";

type TabKey = "layers" | "infrastructure" | "bridges";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("layers");

  const tabComponents = {
    layers: <LayerTab />,
    infrastructure: <InfrastructureTab />,
    bridges: <BridgeTab />,
  };

  const buttonBaseStyles =
    "py-2 px-4 font-bold mr-4 bg-lightsecondary dark:bg-secondary rounded-lg";
  const buttonActiveStyles = "dark:text-bitcoin";
  const buttonInactiveStyles = "text-lighttableheader";

  const handleTabClick = (tab: TabKey) => {
    setActiveTab(tab);
  };
  return (
    <div className="mx-auto">
      <Hero />
      <div className="flex mb-4 justify-center">
        <button
          className={`${buttonBaseStyles} ${
            activeTab === "layers" ? buttonActiveStyles : buttonInactiveStyles
          }`}
          onClick={() => handleTabClick("layers")}
        >
          Overview
        </button>
        <button
          className={`${buttonBaseStyles} ${
            activeTab === "infrastructure"
              ? buttonActiveStyles
              : buttonInactiveStyles
          }`}
          onClick={() => handleTabClick("infrastructure")}
        >
          Risks
        </button>
      </div>
      {tabComponents[activeTab]}
    </div>
  );
}
