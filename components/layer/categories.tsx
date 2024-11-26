"use client";

import { useMemo } from "react";
import { LayerProject } from "@/content/props";
import useGetLayertvlCurrentAll from "@/hooks/use-get-layertvl-current-all";

const Categories: React.FC<{ layer: LayerProject }> = ({ layer }) => {
    const { data: balances } = useGetLayertvlCurrentAll({
        queryString: `?layer_slug=ilike.${layer.slug}`,
    });

    const matchingBalance = useMemo(() => {
        if (!balances) return null;

        return balances.find((balance) => balance.layer_slug === layer.slug);
    }, [balances, layer.slug]);

    return (
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
                <div className="text-sm leading-tight">TVL</div>
                <div className="text-muted-foreground">
                    ₿ {/* Fallback to layer.btcLocked */}
                    {matchingBalance
                        ? matchingBalance.total_amount.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                          })
                        : layer.btcLocked}
                </div>
            </div>
        </div>
    );
};

export default Categories;
