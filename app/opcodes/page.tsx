"use client";

import React, { useState } from "react";
import OpcodeTab from "@/components/tables/opcodeTab";
import Image from "next/image";

type TabKey = "layers" | "infrastructure" | "bridges";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto pb-16">
      <div className="flex flex-col items-center mb-12">
        <Image src="/btc.svg" alt="Bitcoin" width={120} height={120} />
        <p className="font-bold pt-2">Bitcoin is always evolving</p>
        <p className="text-center max-w-[80%] sm:max-w-[40%]">
          Here&apos;s your cheat sheet for understanding <br />
          opcodes and other proposed upgrades to Bitcoin
        </p>
      </div>
      {/**TODO: Add search bar here  **/}
      <OpcodeTab />
    </div>
  );
}
