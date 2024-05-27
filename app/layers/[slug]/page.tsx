"use client";
import { notFound } from "next/navigation";
import { allLayers, allLayerSlugs } from "@/util/layer_index";
import Image from "next/image";
import { useState } from "react";
import LayerMenu from "@/components/layer/layerMenu";
import LayerBody from "@/components/layer/layerBody";
import RiskAnalysis from "@/components/layer/layerBodyRiskAnalysis";
import LayerOverview from "@/components/layer/layerOverview";

async function getLayerFromSlug(slug: string) {
  const layer = allLayers.find((layer) => layer.slug === slug);
  if (!layer) {
    return null;
  }
  return layer;
}

export default async function LayerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("Fetching data for slug:", slug);
  const layer = await getLayerFromSlug(slug);

  if (!layer) {
    console.log("Layer not found:", slug);
    return notFound();
  }

  console.log("Fetched layer:", layer);

  return (
    <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-24">
      <div className="flex justify-start items-center gap-8 my-12">
        <div className="flex justify-center items-center">
          <LayerImage title={layer.title} src={`/logos/${layer.slug}.png`} /> {/**TODO fix img sizes. they're blurry here */}
        </div>
        <div className="flex-grow flex items-center">
          <h1 className="layer_header flex-grow">{layer.title}</h1>
        </div>
      </div>
      <div className="container flex">
        <div className="w-1/5">
          <LayerMenu layer={layer} />
        </div>
        <div className="w-4/5 flex flex-col">
          <LayerOverview layer={layer} />
          {layer.underReview === "no" && (
            <RiskAnalysis riskAnalysis={layer.riskAnalysis} riskFactors={layer.riskFactors} />
          )}
          <LayerBody layer={layer} />
        </div>
      </div>
    </article>
  );
}

function LayerImage({ src, title }: { src: string; title: string }) { //TODO lazy loading
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc("/bitcoinlayers-logo.png");
  };

  return (
    <Image
      src={imageSrc}
      alt={`${title} logo`}
      width={100}
      height={100}
      onError={handleError}
    />
  );
}

export async function generateStaticParams() {
  console.log("Generating paths for layers:", allLayerSlugs);
  return allLayerSlugs.map((slug) => ({
    slug,
  }));
}
