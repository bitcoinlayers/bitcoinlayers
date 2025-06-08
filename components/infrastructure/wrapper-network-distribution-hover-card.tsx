import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Snapshot } from "@/hooks/get-current-supplies-by-tokenimpl";
import ImageWithFallback from "../tables/image-with-fallback";

interface WrapperNetworkDistributionHoverCardProps {
    networks: Snapshot[];
    totalAmount: number;
    tokenName: string;
    children: React.ReactNode;
}

const WrapperNetworkDistributionHoverCard: React.FC<WrapperNetworkDistributionHoverCardProps> = ({ 
    networks, 
    totalAmount, 
    tokenName, 
    children 
}) => {
    // Don't show hover card if no networks
    if (!networks || networks.length === 0) {
        return <>{children}</>;
    }

    // Sort networks by balance (highest first)
    const sortedNetworks = [...networks].sort((a, b) => b.balance - a.balance);

    // Take only top 10 networks to avoid overwhelming the tooltip
    const topNetworks = sortedNetworks.slice(0, 10);

    // Format the date as current date
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    });

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {children}
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="space-y-3">
                    {/* Header */}
                    <div className="flex flex-row justify-between">
                        <div className="text-sm font-medium">{currentDate}</div>
                        {networks.length > 10 && (
                            <div className="text-xs text-muted-foreground">Top 10</div>
                        )}
                    </div>
                    
                    {/* Network Distribution */}
                    <div className="space-y-2">
                        {topNetworks.map((network, index) => (
                            <div key={network.network_slug || index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <ImageWithFallback
                                        slug={network.network_slug}
                                        folder="logos"
                                        altText={`${network.network_slug} logo`}
                                        width={16}
                                        height={16}
                                    />
                                    <span className="text-sm text-muted-foreground truncate">
                                        {network.network_name || network.network_slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown Network'}
                                    </span>
                                </div>
                                <span className="text-sm font-medium">
                                    {network.balance.toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="border-t pt-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Total</span>
                            <span className="text-sm font-semibold">
                                ₿ {totalAmount.toLocaleString("en-US", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default WrapperNetworkDistributionHoverCard; 