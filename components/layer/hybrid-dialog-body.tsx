import React from "react";
import {
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { LayerProject } from "@/content/props";

export default function HybridDialogBody({
    layer,
    title = "Hybrid Layer",
}: {
    layer: LayerProject;
    title?: string;
}) {
    return (
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <DialogHeader className="mb-4 sm:mb-6 pb-2 font-extrabold border-b border-border">
                <DialogTitle className="text-xl sm:text-2xl font-extrabold">
                    {title}
                </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 font-bold">
                {layer.otherIcons}
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    This protocol&apos;s virtual machine can interact with L1 bitcoin 
                    transactions, enabling unique hybrid functionality.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    Hybrid layers bridge the gap between traditional Layer 2 
                    solutions and Bitcoin&apos;s base layer by allowing their 
                    execution environment to directly read and respond to 
                    Bitcoin transactions.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    This enables advanced use cases such as cross-layer 
                    composability, L1-aware smart contracts, and enhanced 
                    interoperability with Bitcoin&apos;s native functionality.
                </p>
            </div>
            <DialogFooter className="mt-4 sm:mb-t pt-4 pb-2 border-t flex-row justify-center sm:justify-center">
                <a
                    href="/methodology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-left text-xs"
                >
                    Learn more about our layer classifications
                </a>
            </DialogFooter>
        </div>
    );
} 