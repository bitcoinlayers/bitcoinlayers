"use client";

import { useMemo } from "react";
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

    return (
        <div className="flex flex-wrap gap-6 lg:gap-12 w-full">
            <div className="flex-col justify-center items-start">
                <div className="text-sm leading-tight">Status</div>
                <div className="text-muted-foreground">
                    {infrastructure.live}
                </div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-sm leading-tight">Type</div>
                <div className="text-muted-foreground">
                    {infrastructure.entityType}
                </div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-sm leading-tight">BTC Supply</div>
                <div className="text-muted-foreground">
                    ₿
                    {totalAmountForInfra.toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </div>
            </div>
            <div className="flex-col justify-center items-start">
                <div className="text-sm leading-tight">Associated Layers</div>
                <div className="text-muted-foreground">
                    {balances?.[0]?.network_names
                        ?.map((name: string) => name)
                        .join(", ")}
                </div>
            </div>
        </div>
    );
};

export default Categories;
