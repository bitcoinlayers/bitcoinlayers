"use client";
import { notFound } from "next/navigation";
import {
    allInfrastructures,
    allInfrastructureSlugs,
} from "@/util/infrastructure_index";
import Image from "next/image";
import { useState } from "react";
import InfrastructureMenu from "@/components/infrastructure/infrastructureMenu";
import InfrastructureBody from "@/components/infrastructure/infrastructureBody";
import InfrastructureOverview from "@/components/infrastructure/infrastructureOverview";

async function getInfrastructureFromSlug(slug: string) {
    const infrastructure = allInfrastructures.find(
        (infrastructure) => infrastructure.slug === slug,
    );
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
        <article className="flex flex-col lg:min-h-screen max-w-5xl mx-auto lg:pt-24 pt-12">
        <div className="flex justify-start items-center lg:gap-8 gap-2 lg:my-12 my-6 px-4 lg:px-0">
            <div className="flex justify-center items-center">
                    <InfrastructureImage
                        title={infrastructure.title}
                        src={`/logos/${infrastructure.slug}.png`}
                    />{" "}
                </div>
                <div className="flex-grow flex items-center">
                    <h1 className="layer_header flex-grow">
                        {infrastructure.title}
                    </h1>
                </div>
            </div>
            <div className="container flex lg:flex-row flex-col">
            <div className="lg:w-1/5 sticky top-[48px] lg:h-screen w-full overflow-y-auto lg:pt-6 px-4 lg:px-0 no-scrollbar py-0 bg-white">
                    <InfrastructureMenu infrastructure={infrastructure} />
                </div>
                <div className="lg:w-4/5 flex flex-col px-4 lg:px-0">
                    <InfrastructureOverview infrastructure={infrastructure} />
                    <InfrastructureBody infrastructure={infrastructure} />
                </div>
            </div>
        </article>
    );
}

function InfrastructureImage({ src, title }: { src: string; title: string }) {
    //TODO lazy loading
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
    console.log(
        "Generating paths for infrastructures:",
        allInfrastructureSlugs,
    );
    return allInfrastructureSlugs.map((slug) => ({
        slug,
    }));
}
