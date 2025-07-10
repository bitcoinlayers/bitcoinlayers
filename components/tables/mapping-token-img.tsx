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

                    {/* Tokens List */}
                    <div className="space-y-3">
                        {tokens.map((token) => (
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
                                    {contractData?.find(c => c.token_slug === token.token_slug)?.token_address && (
                                        <div className="text-xs text-muted-foreground font-mono">
                                            {contractData.find(c => c.token_slug === token.token_slug)?.token_address}
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

export default TokenList;
