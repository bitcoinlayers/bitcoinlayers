"use client";

import React, { useState } from "react";
// import { allBridges } from "@/util/bridge_index";
import Hero from "@/components/hero";
// import BridgeTable from "@/components/tables/bridgeTable";

export default function Home() {
    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                {/* <BridgeTable data={allBridges} /> */}
                Bridge analyses coming soon.
            </div>
        </div>
    );
}
