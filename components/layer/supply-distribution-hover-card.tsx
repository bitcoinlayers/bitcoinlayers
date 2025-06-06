import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Snapshot } from "@/hooks/get-current-supplies-by-tokenimpl";

interface SupplyDistributionHoverCardProps {
    tokens: Snapshot[];
    totalAmount: number;
    networkName: string;
    children: React.ReactNode;
}

// Color mapping for tokens (matching exact chart colors from globals.css)
const getTokenColor = (tokenSlug: string): string => {
    const colorMap: Record<string, string> = {
        'stacks-sbtc': 'hsl(var(--chart-stacks-sbtc))',
        'xlink-abtc': 'hsl(var(--chart-xlink-abtc))',
        'alex-xbtc': 'hsl(var(--chart-alex-xbtc))',
        'bitgo-wbtc': 'hsl(var(--chart-bitgo-wbtc))',
        'threshold-tbtc': 'hsl(var(--chart-threshold-tbtc))',
        'lorenzo-stbtc': 'hsl(var(--chart-lorenzo-stbtc))',
        'solv-solvbtc': 'hsl(var(--chart-solv-solvbtc))',
        'bedrock-unibtc': 'hsl(var(--chart-bedrock-unibtc))',
        'lombard-lbtc': 'hsl(var(--chart-lombard-lbtc))',
        'kraken-kbtc': 'hsl(var(--chart-kraken-kbtc))',
        'avalanche-btcb': 'hsl(var(--chart-avalanche-btcb))',
        'tron-btc': 'hsl(var(--chart-tron-btc))',
        'bevm-wbtc': 'hsl(var(--chart-bevm-wbtc))',
        'acorn-abtc': 'hsl(var(--chart-acorn-abtc))',
        'ibtc-network-ibtc': 'hsl(var(--chart-ibtc-network-ibtc))',
        'coinbase-cbbtc': 'hsl(var(--chart-coinbase-cbbtc))',
        'binance-btcb': 'hsl(var(--chart-binance-btcb))',
        'liquid-l-btc': 'hsl(var(--chart-liquid-l-btc))',
        'core-corebtc': 'hsl(var(--chart-core-corebtc))',
        'fire-bitcoin-fbtc': 'hsl(var(--chart-fire-bitcoin-fbtc))',
        'rootstock-rbtc': 'hsl(var(--chart-rootstock-rbtc))',
        'unirouter-ubtc': 'hsl(var(--chart-unirouter-ubtc))',
        'solv-xsolvbtc': 'hsl(var(--chart-solv-xsolvbtc))',
        'solv-solvbtcena': 'hsl(var(--chart-solv-solvbtcena))',
        'pump-pumpbtc': 'hsl(var(--chart-pump-pumpbtc))',
        '21-shares-21btc': 'hsl(var(--chart-21-shares-21btc))',
        'axelar-axlbtc': 'hsl(var(--chart-axelar-axlbtc))',
        'bitlayer-wbtc': 'hsl(var(--chart-bitlayer-wbtc))',
        'merlin-wbtc': 'hsl(var(--chart-merlin-wbtc))',
        'merlin-m-btc': 'hsl(var(--chart-merlin-m-btc))',
        'internet-computer-ckbtc': 'hsl(var(--chart-internet-computer-ckbtc))',
        'corn-btcn': 'hsl(var(--chart-corn-btcn))',
        'libre-pbtc': 'hsl(var(--chart-libre-pbtc))',
        'manta-mbtc': 'hsl(var(--chart-manta-mbtc))',
        'obelisk-obtc': 'hsl(var(--chart-obelisk-obtc))',
        'allo-allobtc': 'hsl(var(--chart-allo-allobtc))',
        'badger-ebtc': 'hsl(var(--chart-badger-ebtc))',
        'pstake-ybtc': 'hsl(var(--chart-pstake-ybtc))',
        'hemi-hemibtc': 'hsl(var(--chart-hemi-hemibtc))',
        'lorenzo-enzobtc': 'hsl(var(--chart-lorenzo-enzobtc))',
        'bedrock-brbtc': 'hsl(var(--chart-bedrock-brbtc))',
        'zeta-btcbtc': 'hsl(var(--chart-zeta-btcbtc))',
        'zeus-zbtc': 'hsl(var(--chart-zeus-zbtc))',
        'unit-ubtc': 'hsl(var(--chart-unit-ubtc))',
        'simple-sbtc': 'hsl(var(--chart-simple-sbtc))',
        'kinza-kbtc': 'hsl(var(--chart-kinza-kbtc))',
        'babypie-mbtc': 'hsl(var(--chart-babypie-mbtc))',
        'layerbank-btc': 'hsl(var(--chart-layerbank-btc))',
        'layerbank-ubtc': 'hsl(var(--chart-layerbank-ubtc))',
        'solv-solvbtcb': 'hsl(var(--chart-solv-solvbtcb))',
        'solv-solvbtcm': 'hsl(var(--chart-solv-solvbtcm))',
        'solv-solvbtccore': 'hsl(var(--chart-solv-solvbtccore))',
        'solv-solvbtcjup': 'hsl(var(--chart-solv-solvbtcjup))',
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