import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Snapshot } from "@/hooks/get-current-supplies-by-tokenimpl";

interface WrapperNetworkDistributionHoverCardProps {
    networks: Snapshot[];
    totalAmount: number;
    tokenName: string;
    children: React.ReactNode;
}

// Color mapping for networks (matching exact chart colors from globals.css)
const getNetworkColor = (networkSlug: string): string => {
    const colorMap: Record<string, string> = {
        'ethereum': 'hsl(var(--chart-ethereum))',
        'bitcoin': 'hsl(var(--chart-btc))',
        'stacks': 'hsl(var(--chart-stacks))',
        'avalanche': 'hsl(var(--chart-avalanche))',
        'base': 'hsl(var(--chart-base))',
        'berachain': 'hsl(var(--chart-berachain))',
        'arbitrum': 'hsl(var(--chart-arbitrum))',
        'hyperliquid': 'hsl(var(--chart-hyperliquid))',
        'bnbsmartchain': 'hsl(var(--chart-bnbsmartchain))',
        'bnb-smart-chain': 'hsl(var(--chart-bnb-smart-chain))',
        'solana': 'hsl(var(--chart-solana))',
        'optimism': 'hsl(var(--chart-optimism))',
        'mantle': 'hsl(var(--chart-mantle))',
        'osmosis': 'hsl(var(--chart-osmosis))',
        'tron': 'hsl(var(--chart-tron))',
        'sui': 'hsl(var(--chart-sui))',
        'cardano': 'hsl(var(--chart-cardano))',
        'corn': 'hsl(var(--chart-corn))',
        'zeta': 'hsl(var(--chart-zeta))',
        'polygonpos': 'hsl(var(--chart-polygonpos))',
        'polygonzkevm': 'hsl(var(--chart-polygonzkevm))',
        'polygon-pos': 'hsl(var(--chart-polygon-pos))',
        'polygon-zkevm': 'hsl(var(--chart-polygon-zkevm))',
        'zksync': 'hsl(var(--chart-zksync))',
        'fantom': 'hsl(var(--chart-fantom))',
        'gnosis': 'hsl(var(--chart-gnosis))',
        'scroll': 'hsl(var(--chart-scroll))',
        'sonic': 'hsl(var(--chart-sonic))',
        'starknet': 'hsl(var(--chart-starknet))',
        'taiko': 'hsl(var(--chart-taiko))',
        'hemi': 'hsl(var(--chart-hemi))',
        'fractal': 'hsl(var(--chart-fractal))',
        'ark': 'hsl(var(--chart-ark))',
        'bevm': 'hsl(var(--chart-bevm))',
        'bitlayer': 'hsl(var(--chart-bitlayer))',
        'bob': 'hsl(var(--chart-bob))',
        'bsquared-network': 'hsl(var(--chart-bsquared-network))',
        'bsquared': 'hsl(var(--chart-bsquared))',
        'core': 'hsl(var(--chart-core))',
        'internet-computer': 'hsl(var(--chart-internet-computer))',
        'internetcomputer': 'hsl(var(--chart-internetcomputer))',
        'libre': 'hsl(var(--chart-libre))',
        'lightning': 'hsl(var(--chart-lightning))',
        'liquid': 'hsl(var(--chart-liquid))',
        'mercury-layer': 'hsl(var(--chart-mercury-layer))',
        'merlin': 'hsl(var(--chart-merlin))',
        'nomic': 'hsl(var(--chart-nomic))',
        'rollux': 'hsl(var(--chart-rollux))',
        'rootstock': 'hsl(var(--chart-rootstock))',
    };
    
    return colorMap[networkSlug] || 'hsl(var(--chart-1))';
};

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
                                    <div 
                                        className="w-3 h-3 rounded-sm flex-shrink-0"
                                        style={{ backgroundColor: getNetworkColor(network.network_slug) }}
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