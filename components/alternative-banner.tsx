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

export default function AlternativeBanner ({
    title = "Alternative network reviews may contain outdated research.",
    description = "Bitcoin Layers' focuses its efforts on reviewing protocols that claim to be a bitcoin layer and BTC wrappers that live on alternative chains. Alternative network provide a snapshot into the network architecture, but largely focus on review related to BTC wrappers on the network. If the network is an Ethereum L2, we recommend heading to L2Beat for a deeper dive into the architecture.",
    linkText = "Join our telegram",
    linkHref = "https://t.me/+8rv-1I2gkmQ4ZmJh",
}: Props) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <Alert
            variant="destructive"
            className="bg-red-50 border border-red-200 text-primary sticky top-[82px] rounded-none z-50 lg:bg-opacity-80 backdrop-blur-sm"
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
                            className="text-orange-600 hover:text-orange-700 underline transition-colors"
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