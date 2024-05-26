"use client";

import React, { useState } from "react";
import LayerTab from "@/components/homepageTabs/layerTab";
import LayerTabNew from "@/components/homepageTabs/layerTabNew";
import Image from "next/image";
import Hero from "@/components/hero";

import { allLayers } from "@/util/layer_index";
import LayerTable2 from "@/components/layer/layerTable2";

type TabKey = "overview" | "risks";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const tabComponents = {
    overview: <LayerTab />,
    risks: <LayerTabNew />,
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
            activeTab === "overview" ? buttonActiveStyles : buttonInactiveStyles
          }`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </button>
        <button
          className={`${buttonBaseStyles} ${
            activeTab === "risks"
              ? buttonActiveStyles
              : buttonInactiveStyles
          }`}
          onClick={() => handleTabClick("risks")}
        >
          Risks
        </button>
      </div>
      <div className="flex mb-4 justify-center">
      {tabComponents[activeTab]}
      </div>
    </div>
  );
}
