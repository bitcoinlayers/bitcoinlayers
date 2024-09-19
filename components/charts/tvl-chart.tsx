"use client";

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";

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
    const [chartType, setChartType] = useQueryState("chart", {
        defaultValue: "separate",
    });
    const [dateRange, setDateRange] = useQueryState("range", {
        defaultValue: "3mo",
    });

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

    const filterDataByDateRange = (data: any[]) => {
        const now = new Date();
        let startDate = new Date();

        switch (dateRange) {
            case "1mo":
                startDate.setMonth(now.getMonth() - 1);
                break;
            case "3mo":
                startDate.setMonth(now.getMonth() - 3);
                break;
            case "1y":
                startDate.setFullYear(now.getFullYear() - 1);
                break;
        }

        return data.filter((item) => new Date(item.date) >= startDate);
    };

    const sortedChartData = filterDataByDateRange(
        finalChartData?.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        ),
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
        <Card className="bg-background mx-6">
            <CardHeader className="flex flex-col lg:flex-row flex-wrap lg:items-center justify-between border-b mb-4">
                <div>
                    <CardTitle className="flex font-normal items-center gap-2">
                        BTC in Layers
                    </CardTitle>
                    <CardDescription className="mt-1 text-xs flex flex-wrap">
                        BTC locked in bitcoin layers
                    </CardDescription>
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:space-x-2 space-y-2 lg:space-y-0 pt-2 lg:pt-0">
                    <ToggleGroup
                        className="space-x-1"
                        type="single"
                        value={chartType}
                        onValueChange={(value) => {
                            if (value && value !== chartType) {
                                setChartType(value);
                            }
                        }}
                    >
                        <ToggleGroupItem
                            value="combined"
                            className="border font-normal rounded-full px-3 lg:px-4 text-xs lg:text-sm"
                            size="sm"
                        >
                            Combined
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="separate"
                            className="border rounded-full px-3 lg:px-4 text-xs lg:text-sm font-normal"
                            size="sm"
                        >
                            Separate
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <div className="block">
                        <Select value={dateRange} onValueChange={setDateRange}>
                            <SelectTrigger className="w-[140px] lg:w-[160px] rounded-full px-3 lg:px-4 text-xs lg:text-sm">
                                <SelectValue placeholder="Select date range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1mo">Last month</SelectItem>
                                <SelectItem value="3mo">
                                    Last 3 months
                                </SelectItem>
                                <SelectItem value="1y">Last year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
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
                                        toFixed={3}
                                    />
                                }
                            />
                            {uniqueLayers.sort().map((layer) => (
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
                            <ChartLegend
                                content={
                                    <ChartLegendContent className="flex flex-wrap" />
                                }
                            />
                        </AreaChart>
                    </ChartContainer>
                )}
            </CardContent>
        </Card>
    );
}
