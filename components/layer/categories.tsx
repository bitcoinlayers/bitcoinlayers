"use client";

import { useMemo } from "react";
import { LayerProject } from "@/content/props";
import getCurrentSuppliesByNetwork from "@/hooks/get-current-supplies-by-network";
import { EntityCategory } from "@/content/props";
import UnderReviewButton from "@/components/under-review-button";

const Categories: React.FC<{ layer: LayerProject }> = ({ layer }) => {
    const { data: balances } = getCurrentSuppliesByNetwork({
        queryString: `?network_slug=ilike.${layer.slug}`,
    });

    const totaledBalances = useMemo(() => {
        if (!balances) return {};

        return balances.reduce(
            (acc, balance) => {
                const normalizedSlug = balance.network_slug.toLowerCase();
                if (!acc[normalizedSlug]) {
                    acc[normalizedSlug] = { totalAmount: 0 };
                }

                acc[normalizedSlug].totalAmount += balance.total_balance;

                                return acc;
            },
            {} as Record<string, { totalAmount: number }>,
        );
    }, [balances]);

    const totalAmountForNetwork = totaledBalances[layer.slug]?.totalAmount || 0;

    return (
        <div className="space-y-4">
            {/* Under Review Button */}
            {layer.underReview && (
                <div className="flex justify-start">
                    <UnderReviewButton project={layer} />
                </div>
            )}
            
            {/* Categories Grid */}
            <div className="lg:flex lg:justify-between w-full grid grid-cols-2 gap-4">
                <div className="flex-col lg:justify-center lg:items-start pl-4 lg:pl-0">
                    <div className="text-sm leading-tight">Status</div>
                    <div className="text-muted-foreground">{layer.live}</div>
                </div>
                <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                    <div className="text-sm leading-tight">Type</div>
                    <div className="text-muted-foreground">{layer.entityType}</div>
                </div>
                <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                    <div className="text-sm leading-tight">Fee Token</div>
                    <div className="text-muted-foreground">
                        {(layer as LayerProject).feeToken}
                    </div>
                </div>
                <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                    <div className="text-sm leading-tight">BTC Supply</div>
                    <div className="text-muted-foreground">
                        {isNaN(layer.btcLocked) ? (
                            "Unavailable"
                        ) : (
                            <>
                                ₿
                                {totalAmountForNetwork.toLocaleString("en-US", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
