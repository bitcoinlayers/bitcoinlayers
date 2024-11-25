"use client";

import { useMemo } from "react";
import { InfrastructureProject } from "@/content/props";
import useGetInfratvlCurrentAll from "@/hooks/use-get-infratvl-current-all";

const Categories: React.FC<{ infrastructure: InfrastructureProject }> = ({
    infrastructure,
}) => {
    const { data: balances } = useGetInfratvlCurrentAll({
        queryString: `?infra_slug=ilike.${infrastructure.slug}`,
    });

    const totaledBalances = useMemo(() => {
        if (!balances) return {};

        return balances.reduce(
            (acc, balance) => {
                const { infra_slug, total_amount } = balance;

                if (!acc[infra_slug]) {
                    acc[infra_slug] = { totalAmount: 0 };
                }

                acc[infra_slug].totalAmount += total_amount;

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
                <div className="text-sm leading-tight">TVL</div>
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
                    {infrastructure.associatedLayers}
                </div>
            </div>
        </div>
    );
};

export default Categories;
