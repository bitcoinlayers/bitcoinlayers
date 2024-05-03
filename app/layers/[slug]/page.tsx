"use client";
import React from "react";
import { notFound } from "next/navigation";
import LayerProps from "@/components/layer/layerProps";
import LayerHead from "@/components/layer/layerHead";
import LayerSummary from "@/components/layer/layerSummary";
import LayerChart from "@/components/layer/layerChart";
import LayerBody from "@/components/layer/layerBody";
import { allLayers } from "@/util/layer_index";

async function getLayerFromSlug(paramsSlug: string) {
  const layer = allLayers.find((layer) => layer.slug === paramsSlug);
  if (!layer) {
    console.log("Layer not found: ", paramsSlug);
    null;
  }
  return layer;
}

export default async function LayerPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!params) {
    return <div>Params is undefined</div>;
  }
  console.log("Open page for layer: ", params.slug);
  const layer = await getLayerFromSlug(params.slug);
  if (!layer) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <h1 className="mb-2">{layer.title}</h1>
          <hr className="my-4 border-white border-2" />
        </div>
        <div className="col-span-3 md:col-span-2 pr-4">
          <LayerHead layer={layer as LayerProps} />
          <div className="mt-8">
            <LayerSummary layer={layer as LayerProps} />
          </div>
        </div>
        <div className="col-span-3 md:col-span-1">
          <LayerChart layer={layer as LayerProps} />
        </div>
      </div>
      <LayerBody layer={layer as LayerProps} />
    </article>
  );
}
