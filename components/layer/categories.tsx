"use client";

import useGetBalances, {
    Balance,
} from "@/hooks/use-get-all-balances-individual";
import { Layer } from "./layerProps";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const Categories: React.FC<{ layer: Layer }> = ({ layer }) => {
    const { slug } = useParams();

    const { data } = useGetBalances({
        queryString: `?layer_slug=ilike.${slug}&date=gte.${new Date(Date.now() - 86400000).toDateString()}`,
    });

    // Calculate total amount for the single layer
    const totalAmount = useMemo(() => {
        if (!data) return undefined;

        const latestTokenAmounts: Record<string, Balance> = {};

        data.forEach((balance) => {
            const { token_name, amount, date } = balance;

            if (
                !latestTokenAmounts[token_name] ||
                new Date(date) >
                    new Date(latestTokenAmounts[token_name]?.date || 0)
            ) {
                (latestTokenAmounts[token_name] as Balance) = {
                    ...balance,
                    amount,
                    date,
                };
            }
        });

        return Object.values(latestTokenAmounts).reduce(
            (sum, amount) => sum + Number(amount.amount),
            0,
        );
    }, [data]);

    return (
        <div className="lg:flex lg:justify-between w-full grid grid-cols-2 gap-4">
            <div className="flex-col lg:justify-center lg:items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Status
                </div>
                <div className="text-text_header">{layer.live}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Type
                </div>
                <div className="text-text_header">{layer.layerType}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    Fee Token
                </div>
                <div className="text-text_header">{layer.feeToken}</div>
            </div>
            <div className="flex-col justify-center items-start pl-4 lg:pl-0">
                <div className="text-text_primary text-sm leading-tight">
                    TVL
                </div>
                <div className="text-zinc-800 text-base font-normal leading-normal">
                    ₿ {/* Fallback to layer.btcLocked */}
                    {totalAmount
                        ? totalAmount.toLocaleString("en-US", {
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
