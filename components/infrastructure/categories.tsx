"use client";

import { useMemo } from "react";
import { InfrastructureProject } from "@/content/props";
import useGetLayertvlCurrentAll from "@/hooks/use-get-layertvl-current-all";

const Categories: React.FC<{ infrastructure: InfrastructureProject }> = ({
    infrastructure,
}) => {
    // TODO: Come back and use the right hook
    const { data: balances } = useGetLayertvlCurrentAll({
        queryString: `?layer_slug=ilike.${infrastructure.slug}`,
    });

    const matchingBalance = useMemo(() => {
        if (!balances) return null;

        return balances.find(
            (balance) => balance.layer_slug === infrastructure.slug,
        );
    }, [balances, infrastructure.slug]);

    return (
        <div className="flex gap-12 w-full">
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Status
                </div>
                <div className="text-text_header">{infrastructure.live}</div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Type
                </div>
                <div className="text-text_header">
                    {infrastructure.entityType}
                </div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Purpose
                </div>
                <div className="text-text_header">{infrastructure.purpose}</div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    TVL
                </div>
                <div className="text-text_header">
                    ₿
                    {matchingBalance
                        ? matchingBalance.total_amount.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                          })
                        : null}
                </div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-text_primary text-sm leading-tight">
                    Associated Layers
                </div>
                <div className="text-text_header">
                    {infrastructure.associatedLayers}
                </div>
            </div>
        </div>
    );
};

export default Categories;
