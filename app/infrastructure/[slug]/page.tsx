"use client";
import { notFound } from "next/navigation";
import { allInfrastructures, allInfrastructureSlugs } from "@/util/infrastructure_index";
import Image from "next/image";
import { useState } from "react";
import InfrastructureMenu from "@/components/infrastructure/infrastructureMenu";
import InfrastructureBody from "@/components/infrastructure/infrastructureBody";
import InfrastructureOverview from "@/components/infrastructure/infrastructureOverview";

async function getInfrastructureFromSlug(slug: string) {
  const infrastructure = allInfrastructures.find((infrastructure) => infrastructure.slug === slug);
  if (!infrastructure) {
    return null;
  }
  return infrastructure;
}

export default async function InfrastructurePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("Fetching data for slug:", slug);
  const infrastructure = await getInfrastructureFromSlug(slug);

  if (!infrastructure) {
    console.log("Infrastructure not found:", slug);
    return notFound();
  }

  console.log("Fetched infrastructure:", infrastructure);

  return (
    <article className="flex flex-col min-h-screen max-w-5xl mx-auto pt-24">
      <div className="flex justify-start items-center gap-8 my-12">
        <div className="flex justify-center items-center">
          <InfrastructureImage title={infrastructure.title} src={`/logos/${infrastructure.slug}.png`} /> {/**TODO fix img sizes. they're blurry here */}
        </div>
        <div className="flex-grow flex items-center">
          <h1 className="layer_header flex-grow">{infrastructure.title}</h1>
        </div>
      </div>
      <div className="container flex">
        <div className="w-1/5">
          <InfrastructureMenu infrastructure={infrastructure} />
        </div>
        <div className="w-4/5 flex flex-col">
          <InfrastructureOverview infrastructure={infrastructure} />
          <InfrastructureBody infrastructure={infrastructure} />
        </div>
      </div>
    </article>
  );
}

function InfrastructureImage({ src, title }: { src: string; title: string }) { //TODO lazy loading
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
  console.log("Generating paths for infrastructures:", allInfrastructureSlugs);
  return allInfrastructureSlugs.map((slug) => ({
    slug,
  }));
}
