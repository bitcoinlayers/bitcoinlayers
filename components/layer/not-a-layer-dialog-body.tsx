import React from "react";
import {
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { LayerProject } from "@/content/props";

export default function NotALayerDialogBody({
    layer,
    title = "Not a Bitcoin Layer",
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
                    This protocol is not considered a Bitcoin layer according to 
                    our technical criteria and standards.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    While this protocol may have Bitcoin-related functionality 
                    or use Bitcoin in some capacity, it does not meet the 
                    technical requirements to be classified as a Bitcoin layer.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    This classification helps users understand the relationship 
                    between the protocol and Bitcoin&apos;s security model.
                </p>
            </div>
            <DialogFooter className="mt-4 sm:mb-t pt-4 pb-2 border-t flex-row justify-center sm:justify-center">
                <a
                    href="/methodology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-left text-xs"
                >
                    Learn more about our methodology
                </a>
            </DialogFooter>
        </div>
    );
} 