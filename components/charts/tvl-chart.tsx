"use client";

import { useState } from "react";
import { CartesianGrid, XAxis, AreaChart, Area } from "recharts";
import { CombinedTVLChart } from "./combined-tvl-chart";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/util/fetcher";

interface Balance {
    amount: number;
    date: string;
    identifier: string;
    layer_name: string;
    token_name: string;
}

interface ProcessedData {
    monthly: { [key: string]: { [key: string]: number } };
    daily: { [key: string]: { [key: string]: number } };
    combined: { [key: string]: number };
}

export default function TotalValueLockedChart() {
    const [chartType, setChartType] = useState("separate");
    const { data } = useQuery<Balance[]>({
        queryKey: ["get_balances"],
        queryFn: () =>
            fetcher(`${process.env.NEXT_PUBLIC_API_URL}/get_balances`),
    });

    const uniqueLayers = [
        ...new Set(data?.map((item) => item.layer_name) || []),
    ];

    const processedData = data?.reduce(
        (acc: ProcessedData, item: Balance) => {
            const date = new Date(item.date);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
            const dayKey = item.date;

            acc.monthly[monthKey] = {
                ...acc.monthly[monthKey],
                [item.layer_name]:
                    (acc.monthly[monthKey]?.[item.layer_name] || 0) +
                    item.amount,
            };
            acc.daily[dayKey] = {
                ...acc.daily[dayKey],
                [item.layer_name]:
                    (acc.daily[dayKey]?.[item.layer_name] || 0) + item.amount,
            };
            acc.combined[dayKey] = (acc.combined[dayKey] || 0) + item.amount;

            return acc;
        },
        { monthly: {}, daily: {}, combined: {} } as ProcessedData,
    );

    const finalChartData =
        chartType === "monthly"
            ? Object.entries(processedData?.monthly || {}).map(
                  ([monthKey, layerData]) => ({
                      date: new Date(monthKey).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                      }),
                      ...layerData,
                  }),
              )
            : Object.entries(processedData?.daily || {}).map(
                  ([date, layerData]) => ({ date, ...layerData }),
              );

    const sortedChartData = finalChartData?.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const chartConfig = Object.fromEntries(
        uniqueLayers.map((layer) => [
            layer,
            {
                label: layer,
                color: `hsl(var(--chart-${layer.toLowerCase().replace(/\s+/g, "-")}))`,
            },
        ]),
    ) satisfies ChartConfig;

    return (
        <Card className="bg-background">
            <CardHeader className="flex flex-col lg:flex-row flex-wrap lg:items-center justify-between border-b mb-4">
                <div>
                    <CardTitle className="flex font-normal items-center gap-2">
                        Bitcoin in Layers
                    </CardTitle>
                    <CardDescription className="mt-1 text-xs">
                        Average total value of BTC locked per day in bitcoin
                        second layers
                    </CardDescription>
                </div>
                <ToggleGroup
                    className="pt-2 xl:pt-0 space-x-1 self-start"
                    type="single"
                    value={chartType}
                    onValueChange={setChartType}
                >
                    <ToggleGroupItem
                        value="combined"
                        className="border font-normal rounded-full px-4"
                        size="sm"
                    >
                        Combined
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="separate"
                        className="border rounded-full px-4 font-normal"
                        size="sm"
                    >
                        Separate
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="yearly"
                        className="border rounded-full px-4 font-normal"
                        size="sm"
                    >
                        <span className="hidden sm:block">Last 3 months</span>
                        <span className="sm:hidden">M</span>
                    </ToggleGroupItem>
                </ToggleGroup>
            </CardHeader>
            <CardContent>
                {chartType === "combined" ? (
                    <CombinedTVLChart
                        data={processedData?.combined || {}}
                        chartConfig={chartConfig}
                    />
                ) : (
                    <ChartContainer
                        config={chartConfig}
                        className="h-64 w-full"
                    >
                        <AreaChart
                            data={sortedChartData}
                            margin={{
                                left: 20,
                                right: 20,
                                top: 20,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) =>
                                    new Date(value).toLocaleDateString(
                                        "en-US",
                                        { month: "short", day: "numeric" },
                                    )
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
                                                },
                                            )
                                        }
                                        className="w-60"
                                    />
                                }
                            />
                            {uniqueLayers
                                .sort((a, b) => {
                                    const aTotal = sortedChartData.reduce(
                                        (sum, item) =>
                                            sum +
                                            (Number(
                                                item[a as keyof typeof item],
                                            ) || 0),
                                        0,
                                    );
                                    const bTotal = sortedChartData.reduce(
                                        (sum, item) =>
                                            sum +
                                            (Number(
                                                item[b as keyof typeof item],
                                            ) || 0),
                                        0,
                                    );
                                    return bTotal - aTotal;
                                })
                                .map((layer) => (
                                    <Area
                                        key={layer}
                                        name={layer}
                                        dataKey={layer}
                                        type="linear"
                                        stroke={chartConfig[layer]?.color}
                                        fill={chartConfig[layer]?.color}
                                        strokeWidth={1}
                                        dot={false}
                                        fillOpacity={0.5}
                                        stackId="1"
                                    />
                                ))}
                            <ChartLegend content={<ChartLegendContent />} />
                        </AreaChart>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    );
}
