import React from "react";
import {
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { LayerProject } from "@/content/props";

export default function MergeMineDialogBody({
    layer,
    title = "Merge-Mined with Bitcoin",
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
                    This protocol is merge-mined by Bitcoin miners, which means 
                    it leverages Bitcoin&apos;s mining infrastructure for security.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    Merge mining allows miners to mine multiple cryptocurrencies 
                    simultaneously without requiring additional computational 
                    power beyond what is used for Bitcoin mining.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    This provides enhanced security for the protocol by utilizing 
                    Bitcoin&apos;s massive hash rate and miner participation.
                </p>
            </div>
            <DialogFooter className="mt-4 sm:mb-t pt-4 pb-2 border-t flex-row justify-center sm:justify-center">
                <a
                    href="https://en.bitcoin.it/wiki/Merged_mining_specification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-left text-xs"
                >
                    Learn more about merge mining
                </a>
            </DialogFooter>
        </div>
    );
} 