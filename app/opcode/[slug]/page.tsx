"use client";
import React from "react";
import { notFound } from "next/navigation";
import OpcodeProps from "@/components/opcode/opcodeProps";
// import OpcodeHead from "@/components/opcode/opcodeHead";
// import OpcodeSummary from "@/components/opcode/opcodeSummary";
// import OpcodeChart from "@/components/opcode/opcodeChart";
import OpcodeBody from "@/components/opcode/opcodeBody";
import { allOpcodes } from "@/util/opcode_index";

async function getOpcodeFromSlug(paramsSlug: string) {
  const opcode = allOpcodes.find(
    (opcode) => opcode.slug === paramsSlug
  );
  if (!opcode) {
    console.log("Opcode not found: ", paramsSlug);
    null;
  }
  return opcode;
}

export default async function OpcodePage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params) {
    return <div>Params is undefined</div>;
  }
  console.log("Open page for opcode: ", params.slug);
  const opcode = await getOpcodeFromSlug(params.slug);
  if (!opcode) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <div className="">
        <div className="col-span-3">
          <h1 className="mb-2">{opcode.title}</h1>
          <hr className="my-4 border-white border-2" />
        </div>
        <div className="">
          {/* <OpcodeHead opcode={opcode as OpcodeProps} /> */}
          {/* <div className="mt-8">
            <OpcodeSummary opcode={opcode as OpcodeProps} />
          </div> */}
        </div>
        {/* <div className="col-span-3 md:col-span-1">
          <OpcodeChart opcode={opcode as OpcodeProps} />
        </div> */}
      </div>
      <OpcodeBody
        opcode={opcode as OpcodeProps}
      />
    </article>
  );
}
