"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchBlock from "./filter/SearchBlock";
import { getAllLayersWithSlugs } from "@/app/layers/[slug]/page";
import { getAllInfrastructure } from "@/app/infrastructure/page";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Layer } from "./layer/layerProps";
import { Infrastructure } from "./infrastructure/infrastructureProps";

const Hero = () => {
    const t = useTranslations("hero");
    const [allLayers, setAllLayers] = useState<Layer[]>([]);
    const [allInfrastructures, setAllInfrastructures] = useState<
        Infrastructure[]
    >([]);

    useEffect(() => {
        const clear = async () => {
            const { allLayers } = await getAllLayersWithSlugs();
            const { allInfrastructures } = await getAllInfrastructure();

            setAllLayers(allLayers);
            setAllInfrastructures(allInfrastructures);
        };

        clear();
    }, []);

    return (
        <div className="relative w-full lg:pt-[3rem]">
            <div className="lg:pt-[30rem] pt-[26rem] relative w-full">
                <Image
                    src="/Bitcoin.svg"
                    alt="Bitcoin"
                    fill
                    style={{ objectFit: "contain" }}
                />
                <div className="absolute inset-6 flex flex-col justify-center items-center">
                    <h1 className="font-playfair italic font-black text-brand text-hero lg:text-14xl text-7xl lg:mb-4">
                        {t("title")}
                    </h1>
                    <p className="flex items-center text-center text-base font-normal text-text_secondary -mt-2 mb-14">
                        {t("description--1")}
                        <br />
                        {t("description--2")}
                    </p>
                    <SearchBlock
                        allLayers={allLayers}
                        allInfrastructures={allInfrastructures}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
