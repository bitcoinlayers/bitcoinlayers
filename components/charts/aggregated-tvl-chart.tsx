"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CartesianGrid, XAxis, YAxis, AreaChart, Area } from "recharts";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useQueryState } from "nuqs";
import { useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import TVLDisplay from "./tvl-display";
import ChartFilters from "./chart-filters";

interface ChartProps {
    title: string;
    description: string;
    itemNameKey: string;
    chartQueryParam?: string;
    rangeQueryParam?: string;
    showDivisionButtons?: boolean;
    divisionDefaultValue?: "combined" | "separate";
    showLegend?: boolean;
    chartHeight?: string;
    data?: Partial<{
        date: string;
        total_balance: number;
        [key: string]: any;
    }>[];
}

export default function AggregatedTVLChart({
    title,
    description,
    itemNameKey,
    chartQueryParam = "chart",
    rangeQueryParam = "range",
    showDivisionButtons = true,
    divisionDefaultValue = "combined",
    showLegend = true,
    chartHeight = "h-96",
    data,
}: ChartProps) {
    const [chartType, setChartType] = useQueryState(chartQueryParam, {
        defaultValue: divisionDefaultValue,
    });
    const [dateRange, setDateRange] = useQueryState(rangeQueryParam, {
        defaultValue: "1y",
    });

    const tokens = useMemo(
        () =>
            chartType === "combined"
                ? ["BTC"]
                : [
                      ...new Set(
                          data
                              ?.map((item) => item[itemNameKey])
                              .filter(Boolean),
                      ),
                  ],
        [data, chartType, itemNameKey],
    );

    const processedData = useMemo(() => {
        if (!data) return [];
        return data.reduce(
            (acc, item) => {
                const key =
                    chartType === "combined"
                        ? "BTC"
                        : item[itemNameKey] || "unknown";
                const existingEntry = acc.find(
                    (entry) => entry.date === item.date,
                );

                if (existingEntry) {
                    existingEntry[key] =
                        (existingEntry[key] || 0) + (item.total_balance || 0);
                } else {
                    acc.push({
                        date: item.date,
                        [key]: item.total_balance || 0,
                    });
                }
                return acc;
            },
            [] as Record<string, any>[],
        );
    }, [data, chartType, itemNameKey]);

    const filterDataByDateRange = useCallback(
        (data: any[]) => {
            const now = new Date();
            const monthsToSubtract =
                { "1y": 12, "1mo": 1, "3mo": 3 }[dateRange] || 3;
            const startDate = new Date(
                now.setMonth(now.getMonth() - monthsToSubtract),
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

    const chartConfig = useMemo(
        () =>
            chartType === "combined"
                ? { BTC: { label: "BTC", color: "hsl(var(--chart-btc))" } }
                : Object.fromEntries(
                      tokens.map((item) => [
                          item,
                          {
                              label: item,
                              color: `hsl(var(--chart-${item
                                  ?.toLowerCase()
                                  .replace(/\s+/g, "-")
                                  .replace(/\./g, "")}))`,
                          },
                      ]),
                  ),
        [chartType, tokens],
    );

    const latestDate = processedData?.reduce(
        (latest, current) =>
            new Date(current.date) > new Date(latest.date) ? current : latest,
        processedData[0],
    )?.date;

    const sortedTokens = useMemo(() => {
        return (
            tokens?.sort((a, b) => {
                const valueA =
                    (a
                        ? processedData.find(
                              (item) => item.date === latestDate,
                          )?.[a]
                        : 0) || 0;
                const valueB =
                    (b
                        ? processedData.find(
                              (item) => item.date === latestDate,
                          )?.[b]
                        : 0) || 0;
                return valueB - valueA;
            }) || []
        );
    }, [tokens, processedData, latestDate]);

    const formatDate = (
        date: string,
        options: Intl.DateTimeFormatOptions = {},
    ) =>
        new Date(date).toLocaleDateString("en-US", {
            timeZone: "UTC",
            ...options,
        });

    return (
        <Card className="bg-background space-y-4">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle className="flex font-semibold items-center gap-2">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-xs flex flex-wrap">
                        {description}
                    </CardDescription>
                </div>
                <div className="flex">
                    <TVLDisplay data={data} />
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className={cn("w-full watermark", chartHeight)}
                >
                    <AreaChart
                        data={filterDataByDateRange(processedData)}
                        margin={{ left: 0, right: 0, top: 16, bottom: 0 }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={20}
                            tickFormatter={(value) =>
                                formatDate(value, {
                                    month: "short",
                                    day: "numeric",
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
                                        formatDate(value, {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }
                                    className="w-60 max-h-64 overflow-y-hidden" //TODO: allow overflow, add scroll bar
                                    sort="desc"
                                />
                            }
                        />
                        {sortedTokens.map((item) => (
                            <Area
                                key={item}
                                name={item}
                                dataKey={item!}
                                type="linear"
                                stroke={chartConfig[item!]?.color}
                                fill={chartConfig[item!]?.color}
                                strokeWidth={1}
                                dot={false}
                                fillOpacity={0.5}
                                stackId="1"
                                isAnimationActive={true}
                            />
                        ))}
                        {showLegend && (
                            <ChartLegend
                                content={
                                    <ChartLegendContent className="flex lg:flex-wrap sm:flex-nowrap overflow-x-auto whitespace-nowrap max-w-full scroll-smooth snap-x snap-start justify-start" />
                                }
                            />
                        )}
                    </AreaChart>
                </ChartContainer>
                <div className="flex mt-6">
                    <ChartFilters
                        showDivisionButtons={showDivisionButtons}
                        chartType={chartType}
                        setChartType={setChartType}
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
