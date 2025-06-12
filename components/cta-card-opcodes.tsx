"use client";

import { Card } from "@/components/ui/card";
import { SendIcon } from "lucide-react";
import Link from "next/link";
import { useQueryState } from "nuqs";

export default function CtaCardOpcode() {
    const [view] = useQueryState("view");

    const content = (() => {
        const buildingContent = {
            title: "Developers! Signal which opcode you support",
            description:
                "The covenants wiki is a community resource that tracks developer sentiment related to opcodes",
            ctaText: "Add your preferences",
            url: "https://www.lxresearch.co/starting-to-define-layers-a-year-later/",
            isExternal: true,
        };

        switch (view) {
            case "staking":
                return {
                    title: "Liquid staking tokens are primarily managed by custodians",
                    description:
                        "Learn how the majority of deposits onto staking layers works",
                    ctaText: "Read more",
                    url: "https://www.lxresearch.co/some-thoughts-on-bitcoin-staking/",
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
                    <SendIcon className="h-5 w-5 mt-1" />
                    <div>
                        <h2 className="text-xl font-semibold">
                            {content.title}
                        </h2>
                    </div>
                </div>
                <p className="text-muted-foreground text-sm md:text-base mt-1">
                    {content.description}
                </p>
            </div>
            <div className="bg-secondary h-24 w-full sm:w-1/3 flex flex-col justify-center items-center text-center sm:rounded-r-lg">
                <Link
                    href={content.url}
                    target={content.isExternal ? "_blank" : undefined}
                    className="text-2xl font-medium inline-flex items-center underline"
                >
                    {content.ctaText}
                </Link>
            </div>
        </Card>
    );
}