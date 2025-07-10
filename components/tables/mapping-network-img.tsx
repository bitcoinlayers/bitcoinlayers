import React, { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ImageWithFallback from "./image-with-fallback";
import getContractAddresses from "@/hooks/get-contract-addresses";
import Image from "next/image";

interface NetworkListProps {
    networks: any[];
    tokenSlug: string;
}

const NetworkList: React.FC<NetworkListProps> = ({ networks, tokenSlug }) => {
    const { data: contractData, isLoading } = getContractAddresses({
        slug: tokenSlug,
        isLayer: false,
        enabled: true,
    });

    if (!networks || networks.length === 0) {
        return null;
    }

    const topNetworks = networks.slice(0, 3);
    const remainingCount = networks.length - 3;

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="flex flex-nowrap gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity">
                    {topNetworks.map((network) => (
                        <div
                            key={network.network_slug}
                            className="flex items-center gap-2"
                        >
                            <ImageWithFallback
                                slug={network.network_slug}
                                folder="logos"
                                altText=""
                            />
                        </div>
                    ))}
                    {remainingCount > 0 && (
                        <span className="text-xs text-muted-foreground">+{remainingCount}</span>
                    )}
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={`/logos/${tokenSlug}.png`}
                            alt={tokenSlug}
                            width={24}
                            height={24}
                            className="rounded-full object-cover bg-muted"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = '/logos/default.png';
                            }}
                        />
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">
                                Token Contracts
                            </h4>
                        </div>
                    </div>

                    {/* Networks List */}
                    <div className="space-y-3">
                        {networks.map((network) => (
                            <div key={network.network_slug} className="flex items-center gap-3">
                                <ImageWithFallback
                                    slug={network.network_slug}
                                    folder="logos"
                                    altText=""
                                />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-foreground">
                                        {network.network_slug}
                                    </div>
                                    {contractData?.find(c => c.network_slug === network.network_slug)?.token_address && (
                                        <div className="text-xs text-muted-foreground font-mono">
                                            {contractData.find(c => c.network_slug === network.network_slug)?.token_address}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default NetworkList;
