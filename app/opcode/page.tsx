"use client";

import React, { useState } from "react";
import { allOpcodes } from "@/util/opcode_index";
import Hero from "@/components/hero";
import OpcodeTable from "@/components/tables/opcodeTable";

export default function Home() {
    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                <OpcodeTable data={allOpcodes} />
            </div>
        </div>
    );
}
