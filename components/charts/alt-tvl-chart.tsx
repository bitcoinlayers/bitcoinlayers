"use client";

import { CartesianGrid, XAxis, AreaChart, Area } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";
import { useCallback, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import useGetBalancesAlt from "@/hooks/use-get-all-balances-alt-pertoken";
import useGetCurrentPrices from "@/hooks/use-get-current-prices";
import { formatCurrency } from "@/util/formatCurrency";

interface ProcessedData {
    date: string;
    [key: string]: string | number;
}

export default function ProjectTVLChart() {
    const { slug } = useParams();
    const [activeChart, setActiveChart] =
        useState<keyof typeof chartConfig>("TVL");
    const [chartType, setChartType] = useQueryState("chart", {
        defaultValue: "separate",
    });
    const [dateRange, setDateRange] = useQueryState("range", {
        defaultValue: "3mo",
    });

    const { data } = useGetBalancesAlt({
        queryString: `?project_slug=ilike.${slug}`,
    });
    const { data: pricesData, isLoading, error } = useGetCurrentPrices();

    const btcPriceData = pricesData?.find(
        (price) => price.token_slug === "btc",
    );
    const currentBTCPrice = btcPriceData ? btcPriceData.price_usd : 0;

    const tokens = useMemo(
        () =>
            chartType === "combined"
                ? ["BTC"]
                : [...new Set(data?.map((item) => item.layer_name) || [])],
        [data, chartType],
    );

    const processedData = useMemo(() => {
        if (!data) return [];
        return data.reduce((acc: ProcessedData[], item) => {
            const itemDateUTC = item.date;
            const existingEntry = acc.find(
                (entry) => entry.date === itemDateUTC,
            );
            const tokenKey = chartType === "combined" ? "BTC" : item.layer_name;

            if (existingEntry) {
                existingEntry[tokenKey] =
                    ((existingEntry[tokenKey] as number) || 0) + item.amount;
            } else {
                acc.push({ date: itemDateUTC, [tokenKey]: item.amount });
            }
            return acc;
        }, []);
    }, [data, chartType]);

    const chartConfig = useMemo(
        () =>
            chartType === "combined"
                ? { BTC: { label: "BTC", color: "hsl(var(--chart-btc))" } }
                : Object.fromEntries(
                      tokens.map((token, index) => [
                          token,
                          {
                              label: token,
                              color: `hsl(var(--chart-${tokens.length > 1 ? index + 1 : "btc"}))`,
                          },
                      ]),
                  ),
        [chartType, tokens],
    );

    const filterDataByDateRange = useCallback(
        (data: ProcessedData[]) => {
            const now = new Date();
            const startDate = new Date(now);
            const rangeMappings = { "1mo": 1, "3mo": 3, "1y": 12 };
            startDate.setMonth(
                now.getMonth() -
                    (rangeMappings[dateRange as keyof typeof rangeMappings] ||
                        3),
            );

            return data
                .filter((item) => new Date(item.date) >= startDate)
                .sort(
                    (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime(),
                );
        },
        [dateRange],
    );

    const total = useMemo(() => {
        const currentDate = new Date();
        let startDate = new Date();

        switch (dateRange) {
            case "1mo":
                startDate.setMonth(currentDate.getMonth() - 1);
                break;
            case "3mo":
                startDate.setMonth(currentDate.getMonth() - 3);
                break;
            case "1y":
                startDate.setFullYear(currentDate.getFullYear() - 1);
                break;
            default:
                startDate.setMonth(currentDate.getMonth() - 3); // Default to 3 months
        }

        const filteredData =
            data?.filter((item) => {
                const itemDate = new Date(item.date);
                return itemDate >= startDate && itemDate <= currentDate;
            }) || [];

        // Calculate TVL as the sum of the last amounts for each token_name
        const tvl = [
            ...new Set(data?.map((item) => item.identifier) || []),
        ].reduce((acc, token) => {
            const lastEntry = filteredData
                .filter((item) => item.identifier === token)
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime(),
                )[0];
            return acc + (lastEntry?.amount || 0);
        }, 0);

        return {
            TVL: tvl,
        };
    }, [data, dateRange, tokens]);

    if (data?.length === 0) return null;

    return (
        <Card className="bg-background mb-6">
            <CardHeader className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row justify-between w-full">
                    <CardTitle className="flex font-normal items-center text-2xl sm:text-3xl mb-2 sm:mb-0">
                        Metrics
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:space-x-2 space-y-2 sm:space-y-0">
                        <div className="block w-full sm:w-auto">
                            <Select
                                value={dateRange}
                                onValueChange={setDateRange}
                            >
                                <SelectTrigger className="w-full sm:w-[180px] rounded-full px-6 py-1 text-sm">
                                    <SelectValue placeholder="Select date range" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1mo">
                                        Last month
                                    </SelectItem>
                                    <SelectItem value="3mo">
                                        Last 3 months
                                    </SelectItem>
                                    <SelectItem value="1y">
                                        Last year
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <div className="w-full flex flex-col sm:flex-row border-y">
                <div className="flex flex-col justify-center items-start py-4 sm:py-8 border-b sm:border-b-0 px-6 sm:w-1/2">
                    <div className="text-lg sm:text-xl">BTC Locked</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                        Total amount of BTC locked per day by network.
                    </div>
                </div>
                <div className="flex flex-row sm:w-1/2">
                    {["TVL"].map((key) => {
                        const chart = key as keyof typeof chartConfig;
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="flex flex-1 flex-col justify-center gap-1 px-3 py-2 sm:px-6 sm:py-4 text-left even:border-x sm:even:border-x-0 sm:odd:border-l sm:first:border-r data-[active=true]:bg-muted/50"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground w-12 md:w-20">
                                    {key}
                                </span>
                                <span className="text-xs sm:text-base leading-none">
                                    {key === "TVL" ? (
                                        <div>
                                            <span className="font-bold">
                                                {`${total[
                                                    key as keyof typeof total
                                                ].toLocaleString("en-US", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                })} BTC`}
                                            </span>
                                            <div className="text-xs sm:text-sm py-2 text-muted-foreground">
                                                {formatCurrency(
                                                    total.TVL * currentBTCPrice,
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <span className="text-[10px] italic">
                                            coming soon
                                        </span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-96 w-full">
                    <AreaChart
                        data={filterDataByDateRange(processedData)}
                        margin={{ left: 0, right: 0, top: 20, bottom: 20 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    timeZone: "UTC",
                                })
                            }
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) =>
                                        new Date(value).toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                                timeZone: "UTC",
                                            },
                                        )
                                    }
                                    className="w-60"
                                    sort="desc"
                                />
                            }
                        />
                        {tokens.sort().map((token) => (
                            <Area
                                key={token}
                                name={token}
                                dataKey={token}
                                type="linear"
                                stroke={chartConfig[token]?.color}
                                fill={chartConfig[token]?.color}
                                strokeWidth={1}
                                dot={false}
                                fillOpacity={0.5}
                                stackId="1"
                            />
                        ))}
                        <ChartLegend
                            content={
                                <ChartLegendContent className="flex flex-wrap" />
                            }
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
