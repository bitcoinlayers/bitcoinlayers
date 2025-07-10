import React, { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ImageWithFallback from "./image-with-fallback";
import getContractAddresses from "@/hooks/get-contract-addresses";
import Image from "next/image";
import { allInfrastructures } from "@/util/infrastructure_index";
import { allMore } from "@/util/more_index";

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

    // Get wrapper name from slug
    const allProjects = [...allInfrastructures, ...allMore];
    const wrapperProject = allProjects.find(project => project.slug.toLowerCase() === tokenSlug.toLowerCase());
    const wrapperName = wrapperProject?.title || tokenSlug;

    if (!networks || networks.length === 0) {
        return null;
    }

    const topNetworks = networks.slice(0, 3);
    const remainingCount = networks.length - 3;

    // Truncate address to 18 characters + "..."
    const truncateAddress = (address: string) => {
        if (!address) return "";
        return address.length > 18 ? `${address.substring(0, 18)}...` : address;
    };

    // Handle address click - copy to clipboard
    const handleAddressClick = (address: string) => {
        if (address) {
            navigator.clipboard.writeText(address);
        }
    };

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
                            <h4 className="text-base font-semibold text-foreground">
                                {wrapperName}
                            </h4>
                        </div>
                    </div>

                    {/* Networks List */}
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                        {networks.map((network) => {
                            const contract = contractData?.find(c => c.network_slug === network.network_slug);
                            const contractAddress = contract?.token_address;
                            
                            return (
                                <div key={network.network_slug} className="flex items-center gap-3">
                                    <ImageWithFallback
                                        slug={network.network_slug}
                                        folder="logos"
                                        altText=""
                                    />
                                    <div className="flex-1">
                                        <div className="text-base font-medium text-foreground">
                                            {network.network_slug}
                                        </div>
                                        {contractAddress && (
                                            <div 
                                                className="text-sm text-muted-foreground font-mono cursor-pointer hover:text-foreground transition-colors"
                                                onClick={() => handleAddressClick(contractAddress)}
                                                title={`Click to copy: ${contractAddress}`}
                                            >
                                                {truncateAddress(contractAddress)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default NetworkList;
