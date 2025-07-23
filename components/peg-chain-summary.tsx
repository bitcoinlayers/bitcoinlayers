"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PegChainImplementation } from "@/util/peg_chain_combinations";
import { RiskFactor } from "@/content/props";
import getContractAddresses from "@/hooks/get-contract-addresses";
import getHistoricalSuppliesByTokenimpl from "@/hooks/get-historical-supplies-by-tokenimpl";
import { useMemo, useState } from "react";
import TVLDisplay from "@/components/charts/tvl-display";
import { formatCurrency } from "@/util/formatCurrency";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { ChevronDown } from "lucide-react";

type ViewMode = "summary" | "contract" | "supply";

interface PegChainSummaryProps {
    implementation: PegChainImplementation;
}

export default function PegChainSummary({ implementation }: PegChainSummaryProps) {
    
    const [dataExpanded, setDataExpanded] = useState(false);
    
    // Fetch contract addresses for this specific peg-chain combination
    const { data: contractData, isLoading: contractLoading } = getContractAddresses({
        slug: implementation.chainSlug,
        isLayer: true,
        enabled: true,
    });

    // Find the specific contract for this peg
    const specificContract = contractData?.find(contract => 
        contract.token_slug === implementation.pegSlug
    );

    // Fetch historical supply data for this specific token on this specific network
    const { data: supplyData, isLoading: supplyLoading } = getHistoricalSuppliesByTokenimpl({
        queryString: `?network_slug=ilike.${implementation.chainSlug}&infra_slug=ilike.${implementation.pegSlug}`,
    });

    // Process supply data for chart
    const chartData = useMemo(() => {
        if (!supplyData || supplyData.length === 0) return [];
        
        // Get last 90 days of data
        const now = new Date();
        const ninetyDaysAgo = new Date(now.setDate(now.getDate() - 90));
        
        return supplyData
            .filter(item => new Date(item.date) >= ninetyDaysAgo)
            .map(item => ({
                date: item.date,
                total_balance: item.amount,
            }))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [supplyData]);

    const getRiskColor = (riskTier: RiskFactor) => {
        switch (riskTier) {
            case RiskFactor.VeryHigh: return "destructive";
            case RiskFactor.High: return "secondary";
            case RiskFactor.Medium: return "outline";
            case RiskFactor.Low: return "default";
            default: return "outline";
        }
    };

    const hasData = (specificContract || contractLoading) || ((chartData && chartData.length > 0) || supplyLoading);

    return (
        <Card className="w-full bg-card">
            <CardHeader className="pb-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold tracking-tight">Two-Way Peg Review</h2>
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground">
                            {implementation.pegName} on {implementation.chainName}
                        </h3>
                        <Badge variant={getRiskColor(implementation.riskTier)} className="text-xs">
                            {implementation.riskTier} Risk
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Summary */}
                <div className="space-y-2">
                    <div className="text-muted-foreground">
                        {implementation.title}
                    </div>
                    <div className="text-sm leading-relaxed">
                        {parseTextWithLinks(implementation.trustAssumptions)}
                    </div>
                </div>

                {/* Data Section Collapsible */}
                <div className="space-y-2">
                    <button
                        onClick={() => setDataExpanded(!dataExpanded)}
                        disabled={!hasData}
                        className={`inline-flex items-center text-sm font-medium transition-colors ${
                            !hasData
                                ? "text-muted-foreground cursor-not-allowed opacity-50"
                                : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                        }`}
                    >
                        View contract addresses and supply data
                        <ChevronDown 
                            className={`ml-1 h-4 w-4 transition-transform ${
                                dataExpanded ? "rotate-180" : ""
                            }`}
                        />
                    </button>
                    
                    {dataExpanded && (
                        <div className="space-y-4">
                            {/* Contract Information */}
                            {(specificContract || contractLoading) && (
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground mb-2">Contract Information</h4>
                                    {specificContract ? (
                                        <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Contract Address</div>
                                                    <div className="font-mono text-sm break-all">{specificContract.token_address}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Token Name</div>
                                                    <div className="text-sm">{specificContract.token_name}</div>
                                                </div>
                                            </div>
                                            
                                            <div className="pt-2 border-t border-border">
                                                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Network</div>
                                                <div className="text-sm font-semibold">
                                                    {specificContract.network_name}
                                                </div>
                                            </div>
                                        </div>
                                    ) : contractLoading && (
                                        <div className="bg-muted/30 rounded-lg p-4">
                                            <div className="text-sm text-muted-foreground">Loading contract information...</div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Supply History */}
                            {((chartData && chartData.length > 0) || supplyLoading) && (
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground mb-2">Supply History</h4>
                                    {chartData && chartData.length > 0 ? (
                                        <div className="bg-muted/30 rounded-lg p-4">
                                            <TVLDisplay 
                                                data={chartData}
                                            />
                                        </div>
                                    ) : supplyLoading && (
                                        <div className="bg-muted/30 rounded-lg p-4">
                                            <div className="text-sm text-muted-foreground">Loading supply data...</div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
} 