import React from "react";
import PegChainSelector from "@/components/peg-chain-selector";

export default function PegSelectionPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <PegChainSelector />
        </div>
    );
}

export const metadata = {
    title: "Asset-Specific Reviews | Bitcoin Layers",
    description: "Select a two-way peg and blockchain to see how that specific asset works on that chain",
}; 