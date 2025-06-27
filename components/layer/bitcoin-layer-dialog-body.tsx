import React from "react";
import {
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { LayerProject } from "@/content/props";

export default function BitcoinLayerDialogBody({
    layer,
    title = "Verified Bitcoin Layer",
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
                {layer.bitcoinLayer}
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    This project has been verified to meet our technical 
                    standards for being classified as a bitcoin layer.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    Bitcoin layers inherit security from bitcoin protocol 
                    participants and enable users to interact with bitcoin 
                    in new ways while maintaining strong security guarantees.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    Review the project&apos;s technical documentation to 
                    understand how it implements these standards.
                </p>
            </div>
            <DialogFooter className="mt-4 sm:mb-t pt-4 pb-2 border-t flex-row justify-center sm:justify-center">
                <a
                    href="https://www.lxresearch.co/starting-to-define-layers-a-year-later/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-left text-xs"
                >
                    Learn more about our standards for bitcoin layers
                </a>
            </DialogFooter>
        </div>
    );
} 