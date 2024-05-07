"use client";

import React, { useState } from "react";
import LayerTab from "@/components/homepageTabs/layerTab";
import BridgeTab from "@/components/homepageTabs/bridgeTab";
import InfrastructureTab from "@/components/homepageTabs/infrastructureTab";
import Image from "next/image";

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
  const buttonInactiveStyles = "text-gray-500";

  const handleTabClick = (tab: TabKey) => {
    setActiveTab(tab);
  };
  return (
    <div className="max-w-6xl mx-auto pb-16">
      <div className="flex flex-col items-center mb-12">
        <Image src="/btc.svg" alt="Bitcoin" width={120} height={120} />
        <p className="font-bold pt-2">Bitcoin scales in layers</p>
        <p className="text-center max-w-[80%] sm:max-w-[40%]">
          Here&apos;s your cheat sheet for understanding <br />
          Bitcoin Layer-2s, sidechains, and more
        </p>
      </div>
      <div className="flex mb-4 justify-center">
        <button
          className={`${buttonBaseStyles} ${
            activeTab === "layers" ? buttonActiveStyles : buttonInactiveStyles
          }`}
          onClick={() => handleTabClick("layers")}
        >
          Layers
        </button>
        <button
          className={`${buttonBaseStyles} ${
            activeTab === "infrastructure"
              ? buttonActiveStyles
              : buttonInactiveStyles
          }`}
          onClick={() => handleTabClick("infrastructure")}
        >
          Infrastructure
        </button>
        <button
          className={`${buttonBaseStyles} ${
            activeTab === "bridges" ? buttonActiveStyles : buttonInactiveStyles
          }`}
          onClick={() => handleTabClick("bridges")}
        >
          Bridges
        </button>
      </div>

      {tabComponents[activeTab]}
    </div>
  );
}
