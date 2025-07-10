import React, { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ImageWithFallback from "./image-with-fallback";
import getContractAddresses from "@/hooks/get-contract-addresses";
import Image from "next/image";

interface TokenListProps {
    tokens: any[];
    networkSlug: string;
}

const TokenList: React.FC<TokenListProps> = ({ tokens, networkSlug }) => {
    const { data: contractData, isLoading } = getContractAddresses({
        slug: networkSlug,
        isLayer: true,
        enabled: true,
    });

    if (!tokens || tokens.length === 0) {
        return null;
    }

    const topTokens = tokens.slice(0, 3);
    const remainingCount = tokens.length - 3;

    // Truncate address to 8 characters + "..."
    const truncateAddress = (address: string) => {
        if (!address) return "";
        return address.length > 8 ? `${address.substring(0, 8)}...` : address;
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
                    {topTokens.map((token) => (
                        <div key={token.token_slug} className="flex items-center gap-2">
                            <ImageWithFallback
                                slug={token.token_slug}
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
                            src={`/logos/${networkSlug}.png`}
                            alt={networkSlug}
                            width={24}
                            height={24}
                            className="rounded-full object-cover bg-muted"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = '/logos/default.png';
                            }}
                        />
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">
                                BTC Pegs Contracts
                            </h4>
                        </div>
                    </div>

                    {/* Tokens List - Max 5 visible with scrolling */}
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                        {tokens.map((token) => {
                            const contract = contractData?.find(c => c.token_slug === token.token_slug);
                            const contractAddress = contract?.token_address;
                            
                            return (
                                <div key={token.token_slug} className="flex items-center gap-3">
                                    <ImageWithFallback
                                        slug={token.token_slug}
                                        folder="logos"
                                        altText=""
                                    />
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-foreground">
                                            {token.token_slug}
                                        </div>
                                        {contractAddress && (
                                            <div 
                                                className="text-xs text-muted-foreground font-mono cursor-pointer hover:text-foreground transition-colors"
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

export default TokenList;
