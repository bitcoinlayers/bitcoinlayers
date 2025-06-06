import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Snapshot } from "@/hooks/get-current-supplies-by-tokenimpl";

interface SupplyDistributionHoverCardProps {
    tokens: Snapshot[];
    totalAmount: number;
    networkName: string;
    children: React.ReactNode;
}

// Color mapping for tokens (similar to chart colors)
const getTokenColor = (tokenSlug: string): string => {
    const colorMap: Record<string, string> = {
        'stacks-sbtc': 'hsl(var(--chart-1))',
        'xlink-abtc': 'hsl(var(--chart-2))',
        'alex-xbtc': 'hsl(var(--chart-3))',
        'bitgo-wbtc': 'hsl(var(--chart-4))',
        'threshold-tbtc': 'hsl(var(--chart-5))',
        'lorenzo-stbtc': 'hsl(var(--chart-6))',
        'solv-solvbtc': 'hsl(var(--chart-7))',
        'bedrock-unibtc': 'hsl(var(--chart-8))',
        'lombard-lbtc': 'hsl(var(--chart-9))',
        'kraken-kbtc': 'hsl(var(--chart-10))',
        'avalanche-btcb': 'hsl(var(--chart-avalanche-btcb))',
        'tron-btc': 'hsl(var(--chart-ark))',
        'bevm-wbtc': 'hsl(var(--chart-bevm))',
        'acorn-abtc': 'hsl(var(--chart-core))',
        'ibtc-network-ibtc': 'hsl(var(--chart-lightning))',
    };
    
    return colorMap[tokenSlug] || 'hsl(var(--chart-1))';
};

const SupplyDistributionHoverCard: React.FC<SupplyDistributionHoverCardProps> = ({ 
    tokens, 
    totalAmount, 
    networkName, 
    children 
}) => {
    // Don't show hover card if no tokens or only native BTC
    if (!tokens || tokens.length === 0) {
        return <>{children}</>;
    }

    // Sort tokens by balance (highest first)
    const sortedTokens = [...tokens].sort((a, b) => b.balance - a.balance);

    // Take only top 10 tokens to avoid overwhelming the tooltip
    const topTokens = sortedTokens.slice(0, 10);

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
                        {tokens.length > 10 && (
                            <div className="text-xs text-muted-foreground">Top 10</div>
                        )}
                    </div>
                    
                    {/* Token Distribution */}
                    <div className="space-y-2">
                        {topTokens.map((token, index) => (
                            <div key={token.token_slug || index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div 
                                        className="w-3 h-3 rounded-sm flex-shrink-0"
                                        style={{ backgroundColor: getTokenColor(token.token_slug) }}
                                    />
                                    <span className="text-sm text-muted-foreground truncate">
                                        {token.token_slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown Token'}
                                    </span>
                                </div>
                                <span className="text-sm font-medium">
                                    {token.balance.toLocaleString("en-US", {
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

export default SupplyDistributionHoverCard; 