"use client";

import useGetCurrentPrices from "@/hooks/use-get-current-prices";
import { formatCurrency } from "@/util/formatCurrency";
import { useMemo } from "react";

interface Props {
    data:
        | Partial<{
              date: string;
              amount: number;
          }>[]
        | undefined;
}

export default function TVLDisplay({ data }: Props) {
    const { data: pricesData } = useGetCurrentPrices();

    const totalBTC = useMemo(() => {
        if (!data?.length) return 0;
        const latestDate = data.reduce(
            (latest, current) =>
                latest && current.date && latest > current.date
                    ? latest
                    : current.date,
            data[0].date,
        );
        return data
            .filter((item) => item.date === latestDate)
            .reduce((sum, item) => sum + (item.amount || 0), 0);
    }, [data]);

    const btcPriceData = pricesData?.find(
        (price) => price.token_slug === "btc",
    );

    return (
        <div
            className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
            data-active={false}
            onClick={() => {}}
        >
            <span className="text-xs text-muted-foreground">TVL</span>
            <span className="font-bold">
                {new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                }).format(totalBTC)}{" "}
                BTC
            </span>
            <div className="text-xs sm:text-sm text-muted-foreground">
                {formatCurrency(totalBTC * (btcPriceData?.price_usd ?? 0))}
            </div>
        </div>
    );
}
