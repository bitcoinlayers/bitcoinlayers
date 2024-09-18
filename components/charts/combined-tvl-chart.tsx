import { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

interface CombinedTVLChartProps {
    data: { [key: string]: number };
    chartConfig: ChartConfig;
}

export function CombinedTVLChart({ data, chartConfig }: CombinedTVLChartProps) {
    const sortedChartData = useMemo(
        () =>
            Object.entries(data)
                .map(([date, amount]) => ({ date, BTC: amount }))
                .sort(
                    (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime(),
                ),
        [data],
    );

    return (
        <ChartContainer
            config={{ BTC: { label: "BTC", color: "hsl(var(--chart-btc))" } }}
            className="h-64 w-full"
        >
            <AreaChart
                data={sortedChartData}
                margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
            >
                <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="hsl(var(--chart-btc))"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="hsl(var(--chart-btc))"
                            stopOpacity={0.2}
                        />
                    </linearGradient>
                </defs>
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
                        })
                    }
                />
                <ChartTooltip
                    cursor={false}
                    content={
                        <ChartTooltipContent
                            labelFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })
                            }
                            className="w-48"
                        />
                    }
                />
                <Area
                    type="linear"
                    dataKey="BTC"
                    stroke="hsl(var(--chart-btc))"
                    fill="url(#colorValue)"
                    fillOpacity={1}
                />
                <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
        </ChartContainer>
    );
}
