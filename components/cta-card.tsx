"use client";

import { Card } from "@/components/ui/card";
import { SendIcon } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";

export default function CtaCard() {
    const [view] = useQueryState("view");

    const content = (() => {
        const buildingContent = {
            title: "Looking to build on Bitcoin?",
            description: "Get in touch with our team to learn where to deploy",
            ctaText: "Contact us",
            url: "https://t.me/+8rv-1I2gkmQ4ZmJh",
            isExternal: true,
        };

        switch (view) {
            case "staking":
                return {
                    title: "Liquid staking tokens are deployed on layers",
                    description:
                        "Learn how the trust assumptions for staking changes per token & layer",
                    ctaText: "Read more",
                    url: "/staking",
                    isExternal: false,
                };
            case "layers":
            case "wrappers":
            default:
                return buildingContent;
        }
    })();

    return (
        <Card className="flex flex-col sm:flex-row items-center justify-between bg-background">
            <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0 p-4">
                <div className="flex space-x-3">
                    <SendIcon className="h-5 w-5 mt-1 text-gray-600" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            {content.title}
                        </h2>
                    </div>
                </div>
                <p className="text-foreground text-sm md:text-base mt-1">
                    {content.description}
                </p>
            </div>
            <div className="bg-blue-50 h-24 w-full sm:w-1/3 flex flex-col justify-center items-center text-center">
                <Link
                    href={content.url}
                    target={content.isExternal ? "_blank" : undefined}
                    className="text-primary text-2xl font-medium inline-flex items-center underline"
                >
                    {content.ctaText}
                </Link>
            </div>
        </Card>
    );
}
