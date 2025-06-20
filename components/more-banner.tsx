"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

interface Props {
    title?: string;
    description?: string;
    linkText?: string;
    linkHref?: string;
}

export default function MoreBanner({
    title = "This page is under development.",
    description = "This review focuses on Bitcoin-denominated application layer. This is a new addition to the site, so some sections of this review may still be under development.",
    linkText = "Join our telegram",
    linkHref = "https://t.me/+8rv-1I2gkmQ4ZmJh",
}: Props) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <Alert
            variant="default"
            className="bg-blue-50 border border-blue-200 text-primary sticky top-[82px] rounded-none z-50 lg:bg-opacity-80 backdrop-blur-sm"
        >
            <div className="flex flex-col lg:space-x-1 items-baseline justify-center">
                <AlertTitle className="font-semibold text-sm md:text-base">
                    {title}
                </AlertTitle>
                <AlertDescription>
                    <span>{description}&nbsp;</span>
                    <div className="inline-flex flex-row">
                        <Link
                            href={linkHref}
                            target="_blank"
                            className="text-blue-600 hover:text-blue-700 underline transition-colors"
                        >
                            {linkText}
                        </Link>
                        <span>&nbsp;to contribute!</span>
                        <button
                            onClick={() => setIsVisible(false)}
                            type="button"
                            className="flex self-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 ml-2"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </AlertDescription>
            </div>
        </Alert>
    );
} 