"use client";

import { useMemo, useState } from "react";
import { InfrastructureProject } from "@/content/props";
import getCurrentSuppliesByTokenproject from "@/hooks/get-current-supplies-by-tokenproject";

const Categories: React.FC<{ infrastructure: InfrastructureProject }> = ({
    infrastructure,
}) => {
    const { data: balances } = getCurrentSuppliesByTokenproject({
        queryString: `?token_slug=ilike.${infrastructure.slug}`,
    });

    const totaledBalances = useMemo(() => {
        if (!balances) return {};

        return balances.reduce(
            (acc, balance) => {
                const normalizedSlug = balance.token_slug.toLowerCase();
                if (!acc[normalizedSlug]) {
                    acc[normalizedSlug] = { totalAmount: 0 };
                }

                acc[normalizedSlug].totalAmount += balance.total_balance;

                return acc;
            },
            {} as Record<string, { totalAmount: number }>,
        );
    }, [balances]);

    const totalAmountForInfra =
        totaledBalances[infrastructure.slug]?.totalAmount || 0;

    const MAX_VISIBLE_CHARS = 25;

    const AssociatedLayers: React.FC<{ layers: string[] }> = ({ layers }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        const totalLength = layers.join(", ").length;

        const displayedText =
            isExpanded || totalLength <= MAX_VISIBLE_CHARS
                ? layers.join(", ")
                : layers.join(", ").slice(0, MAX_VISIBLE_CHARS) + "...";

        return (
            <div
                className="text-muted-foreground"
                style={{ minHeight: "40px" }}
            >
                <span>{displayedText}</span>
                {totalLength > MAX_VISIBLE_CHARS && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="ml-2 text-orange-600 hover:text-orange-700 underline transition-colors"
                    >
                        {isExpanded ? "Hide" : "Show All"}
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-wrap gap-6 lg:gap-12 w-full items-start">
            <div className="flex-col justify-center items-start sm:w-1/2 lg:w-[110px]">
                <div className="text-sm leading-tight">Status</div>
                <div className="text-muted-foreground">
                    {infrastructure.live}
                </div>
            </div>
            <div className="flex-col justify-center items-start sm:w-1/2 lg:w-[110px]">
                <div className="text-sm leading-tight">Type</div>
                <div className="text-muted-foreground">
                    {infrastructure.entityType}
                </div>
            </div>
            <div className="flex-col justify-center items-start sm:w-1/3 lg:w-[80px]">
                <div className="text-sm leading-tight">BTC Supply</div>
                <div className="text-muted-foreground">
                    ₿
                    {totalAmountForInfra.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </div>
            </div>
            <div className="flex-col justify-center items-start sm:w-2/3 lg:w-[300px]">
                <div className="text-sm leading-tight">Associated Layers</div>
                <AssociatedLayers layers={balances?.[0]?.network_names || []} />
            </div>
        </div>
    );
};

export default Categories;
