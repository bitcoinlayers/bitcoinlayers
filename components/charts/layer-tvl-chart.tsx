"use client";

import { CartesianGrid, XAxis, YAxis, AreaChart, Area } from "recharts";
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
import useGetTokentvlHistoricalAll from "@/hooks/use-get-tokentvl-historical-all";
import useGetCurrentPrices from "@/hooks/use-get-current-prices";
import { formatCurrency } from "@/util/formatCurrency";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ProcessedData {
    date: string;
    [key: string]: string | number;
}

export default function LayerTVLChart() {
    const { slug } = useParams();
    const [activeChart, setActiveChart] =
        useState<keyof typeof chartConfig>("TVL");
    const [chartType, setChartType] = useQueryState("chart", {
        defaultValue: "separate",
    });
    const [dateRange, setDateRange] = useQueryState("range", {
        defaultValue: "1y",
    });

    const { data } = useGetTokentvlHistoricalAll({
        queryString: `?layer_slug=ilike.${slug}`,
    });

    const { data: pricesData } = useGetCurrentPrices();

    const btcPriceData = pricesData?.find(
        (price) => price.token_slug === "btc",
    );
    const currentBTCPrice = btcPriceData ? btcPriceData.price_usd : 0;

    const tokens = useMemo(
        () =>
            chartType === "combined"
                ? ["BTC"]
                : [...new Set(data?.map((item) => item.token_name) || [])],
        [data, chartType],
    );

    const processedData = useMemo(() => {
        if (!data) return [];
        return data.reduce((acc: ProcessedData[], item) => {
            const itemDateUTC = item.date;
            const existingEntry = acc.find(
                (entry) => entry.date === itemDateUTC,
            );
            const tokenKey = chartType === "combined" ? "BTC" : item.token_name;

            if (existingEntry) {
                existingEntry[tokenKey] =
                    ((existingEntry[tokenKey] as number) || 0) +
                    item.total_amount; // Use total_amount
            } else {
                acc.push({ date: itemDateUTC, [tokenKey]: item.total_amount }); // Use total_amount
            }
            return acc;
        }, []);
    }, [data, chartType]);

    const getLayerName = useCallback(() => {
        if (!data || data.length === 0) return null;
        return data[0].layer_name;
    }, [data]);

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

    const latestDate = processedData?.reduce(
        (latest, current) =>
            new Date(current.date) > new Date(latest.date) ? current : latest,
        processedData[0],
    )?.date;

    const sortedTokens = useMemo(() => {
        return tokens?.sort((a, b) => {
            const valueA: number =
                (a
                    ? Number(
                          processedData.find(
                              (item) => item.date === latestDate,
                          )?.[a],
                      )
                    : 0) || 0;
            const valueB: number =
                (b
                    ? Number(
                          processedData.find(
                              (item) => item.date === latestDate,
                          )?.[b],
                      )
                    : 0) || 0;
            return valueB - valueA;
        });
    }, [tokens, processedData, latestDate]);

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
            ...new Set(data?.map((item) => item.token_name) || []),
        ].reduce((acc, token) => {
            const lastEntry = filteredData
                .filter((item) => item.token_name === token)
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime(),
                )[0];
            return acc + (lastEntry?.total_amount || 0);
        }, 0);

        return {
            TVL: tvl,
        };
    }, [data, dateRange]);

    if (data?.length === 0) return null;

    return (
        <Card className="bg-background mb-6">
            {/* <CardHeader className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row justify-between w-full">
                    <CardTitle className="flex font-semibold items-center text-2xl sm:text-3xl mb-2 sm:mb-0">
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
            </CardHeader> */}
            <div className="w-full flex flex-col sm:flex-row border-y">
                <div className="flex flex-col justify-center items-start py-4 sm:py-7 border-b sm:border-b-0 px-6 sm:w-3/4">
                    <div className="text-lg sm:text-xl">BTC Locked</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                        Total amount of{" "}
                        {tokens.length > 1
                            ? tokens.slice(0, -1).join(", ") +
                              (tokens.length > 2 ? "," : "") +
                              " and " +
                              tokens[tokens.length - 1]
                            : tokens[0]}{" "}
                        locked on {getLayerName()} per day
                    </div>
                </div>
                <div className="flex flex-row sm:w-1/4">
                    {["TVL"].map((key) => {
                        //, "TPS", "Fee Rev."
                        const chart = key as keyof typeof chartConfig;
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="flex flex-1 flex-col justify-center gap-1 pl-6 py-2 sm:px-6 sm:py-4 text-left even:border-x sm:even:border-x-0 sm:odd:border-l sm:first:border-r data-[active=true]:bg-muted/50"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground md:w-20">
                                    {key}
                                </span>
                                <span className="text-xs sm:text-base leading-none">
                                    {key === "TVL" ? (
                                        <div>
                                            <span className="font-bold">
                                                {`${total[
                                                    key as keyof typeof total
                                                ].toLocaleString("en-US", {
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0,
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
                <ChartContainer
                    config={chartConfig}
                    className="lg:h-80 h-64 w-full watermark"
                >
                    <AreaChart
                        data={filterDataByDateRange(processedData)}
                        margin={{ left: 0, right: 0, top: 30, bottom: 0 }}
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
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            width={60}
                            tickFormatter={(value) =>
                                new Intl.NumberFormat("en-US", {
                                    notation: "compact",
                                    compactDisplay: "short",
                                }).format(value as number)
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
                                    className="w-60 max-h-60 overflow-y-hidden"
                                    sort="desc"
                                />
                            }
                        />
                        {sortedTokens?.map((token) => (
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
                                isAnimationActive={true}
                            />
                        ))}
                        <ChartLegend
                            content={
                                <ChartLegendContent className="flex lg:flex-wrap sm:flex-nowrap overflow-x-auto whitespace-nowrap max-w-full scroll-smooth snap-x snap-start justify-start" />
                            }
                        />
                    </AreaChart>
                </ChartContainer>
                <div className="flex mt-6">
                    <ToggleGroup
                        type="single"
                        value={chartType}
                        onValueChange={(value) =>
                            value && value !== chartType && setChartType(value)
                        }
                        className="!space-x-0"
                    >
                        {["combined", "separate"].map((value) => (
                            <ToggleGroupItem
                                key={value}
                                value={value}
                                className="border text-xs"
                                size="sm"
                            >
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                    <Select value={dateRange} onValueChange={setDateRange}>
                        <SelectTrigger className="w-[150px] text-xs rounded-md h-9 ml-1">
                            <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent>
                            {[
                                { value: "1mo", label: "Last month" },
                                { value: "3mo", label: "Last 3 months" },
                                { value: "1y", label: "Last year" },
                            ].map(({ value, label }) => (
                                <SelectItem
                                    key={value}
                                    value={value}
                                    className="text-xs"
                                >
                                    {label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
}
