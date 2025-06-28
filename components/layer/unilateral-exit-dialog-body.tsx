import React from "react";
import {
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { LayerProject } from "@/content/props";

export default function UnilateralExitDialogBody({
    layer,
    title = "Unilateral Exit Support",
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
                {layer.unilateralExit}
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    This protocol allows users to withdraw their funds 
                    unilaterally without requiring cooperation from 
                    counterparties or third parties.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    Unilateral exit mechanisms provide strong security 
                    guarantees by ensuring users always have a way to 
                    recover their funds, even if other parties become 
                    unresponsive or malicious.
                </p>
            </div>
            <div className="my-4"></div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <p className="text-left max-w-prose text-gray-900 dark:text-gray-100">
                    This is a key feature of trustless protocols that 
                    prioritize user sovereignty and fund security.
                </p>
            </div>
            <DialogFooter className="mt-4 sm:mb-t pt-4 pb-2 border-t flex-row justify-center sm:justify-center">
                <a
                    href="https://www.lxresearch.co/starting-to-define-layers-a-year-later/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-left text-xs"
                >
                    Learn more about unilateral exit mechanisms
                </a>
            </DialogFooter>
        </div>
    );
} 