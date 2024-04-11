"use client";
import React from "react";
import { notFound } from "next/navigation";
import InfrastructureProps from "@/components/infrastructure/infrastructureProps";
// import InfrastructureHead from "@/components/infrastructure/infrastructureHead";
// import InfrastructureSummary from "@/components/infrastructure/infrastructureSummary";
// import InfrastructureChart from "@/components/infrastructure/infrastructureChart";
import InfrastructureBody from "@/components/infrastructure/infrastructureBody";
import { allInfrastructures } from "@/util/infrastructure_index";

async function getInfrastructureFromSlug(paramsSlug: string) {
  const infrastructure = allInfrastructures.find(
    (infrastructure) => infrastructure.slug === paramsSlug
  );
  if (!infrastructure) {
    console.log("Infrastructure not found: ", paramsSlug);
    null;
  }
  return infrastructure;
}

export default async function InfrastructurePage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params) {
    return <div>Params is undefined</div>;
  }
  console.log("Open page for infrastructure: ", params.slug);
  const infrastructure = await getInfrastructureFromSlug(params.slug);
  if (!infrastructure) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <h1 className="mb-2">{infrastructure.title}</h1>
          <hr className="my-4 border-white border-2" />
        </div>
        <div className="col-span-3 md:col-span-2 pr-4">
          {/* <InfrastructureHead infrastructure={infrastructure as InfrastructureProps} /> */}
          <div className="mt-8">
            {/* <InfrastructureSummary infrastructure={infrastructure as InfrastructureProps} /> */}
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          {/* <InfrastructureChart infrastructure={infrastructure as InfrastructureProps} /> */}
        </div>
      </div>
      <InfrastructureBody
        infrastructure={infrastructure as InfrastructureProps}
      />
    </article>
  );
}
