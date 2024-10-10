"use client";

import React from "react";
import Hero from "@/components/hero";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("bridge");
    return (
        <div className="mx-auto">
            <Hero />
            <div className="flex mb-4 justify-center mt-16"></div>
            <div className="flex mb-4 justify-center max-w-5xl mx-auto">
                {t("bridge-analyses-coming-soon")}
            </div>
        </div>
    );
}
