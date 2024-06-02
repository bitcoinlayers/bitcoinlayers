"use client";

import React, { useState } from "react";
import { allInfrastructures } from "@/util/infrastructure_index";
import Hero from "@/components/hero";
import InfrastructureTable from "@/components/tables/infrastructureTable";

export default function Home() {
    const mainnetInfrastructures = allInfrastructures.filter(
        (infrastructure) => infrastructure.live === "Mainnet",
    );
    //TODO after filters and sorting are working, increase scope to all Infra. rn it's hardcoded to only Mainnet
    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                <InfrastructureTable data={mainnetInfrastructures} />
            </div>
        </div>
    );
}
