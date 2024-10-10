import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { getChartData } from "@/i18n/helpers";

interface MonthlyData {
    [key: string]: {
        date: string;
        wbtc: number;
        tbtc: number;
        count: number;
        lastDate: Date;
        firstDate: Date;
    };
}

const chartConfig = {
    wbtc: {
        label: "WBTC",
        color: "hsl(var(--chart-1))",
    },
    tbtc: {
        label: "TBTC",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export default async function DailyTotalSupplyChart() {
    const [timeframe, setTimeframe] = useState("daily");
    const chartData = await getChartData();
    const processedData = chartData.reduce(
        (
            acc: {
                monthly: MonthlyData;
                daily: Array<{ date: string; wbtc: number; tbtc: number }>;
            },
            item,
        ) => {
            const date = new Date(item.date);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

            // Process monthly data
            if (!acc.monthly[monthKey]) {
                acc.monthly[monthKey] = {
                    date: monthKey,
                    wbtc: 0,
                    tbtc: 0,
                    count: 0,
                    lastDate: date,
                    firstDate: date,
                };
            }
            acc.monthly[monthKey].wbtc = item.wbtc_total_supply;
            acc.monthly[monthKey].tbtc = item.tbtc_total_supply;
            acc.monthly[monthKey].count++;
            acc.monthly[monthKey].lastDate =
                date > acc.monthly[monthKey].lastDate
                    ? date
                    : acc.monthly[monthKey].lastDate;
            acc.monthly[monthKey].firstDate =
                date < acc.monthly[monthKey].firstDate
                    ? date
                    : acc.monthly[monthKey].firstDate;

            // Process daily data (unchanged)
            acc.daily.push({
                date: item.date,
                wbtc: item.wbtc_total_supply,
                tbtc: item.tbtc_total_supply,
            });

            return acc;
        },
        { monthly: {}, daily: [] },
    );

    const finalChartData =
        timeframe === "monthly"
            ? Object.values(processedData.monthly).map((item) => {
                  const lastDate = new Date(item.lastDate);
                  const firstDate = new Date(item.firstDate);
                  const isFullMonth =
                      firstDate.getDate() === 1 &&
                      lastDate.getDate() ===
                          new Date(
                              lastDate.getFullYear(),
                              lastDate.getMonth() + 1,
                              0,
                          ).getDate();
                  return {
                      date: lastDate.toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                      }),
                      wbtc: item.wbtc,
                      tbtc: item.tbtc,
                      firstDate: item.firstDate,
                      lastDate: item.lastDate,
                      isFullMonth,
                  };
              })
            : processedData.daily;

    const sortedChartData = finalChartData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    // Ensure the XAxis includes all data points
    const xAxisTicks = sortedChartData.map((item) => item.date);

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Total Value Locked</CardTitle>
                    <CardDescription>
                        Average total value locked per{" "}
                        {timeframe === "daily" ? "day" : "month"}
                    </CardDescription>
                </div>
                <Select
                    value={timeframe}
                    onValueChange={(value) => setTimeframe(value)}
                >
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent className="w-[120px]">
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={sortedChartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return timeframe === "monthly"
                                    ? date.toLocaleDateString("en-US", {
                                          month: "short",
                                      })
                                    : date.toLocaleDateString("en-US", {
                                          month: "short",
                                          day: "numeric",
                                      });
                            }}
                        />
                        {/* <YAxis
                dataKey="tvl"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}`}
            /> */}
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="line"
                                    labelFormatter={(value, payload) => {
                                        if (
                                            timeframe === "monthly" &&
                                            payload &&
                                            payload[0]
                                        ) {
                                            const {
                                                firstDate,
                                                lastDate,
                                                isFullMonth,
                                            } = payload[0].payload;
                                            if (!isFullMonth) {
                                                const formattedFirstDate =
                                                    new Date(
                                                        firstDate,
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        },
                                                    );
                                                const formattedLastDate =
                                                    new Date(
                                                        lastDate,
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            month: "short",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        },
                                                    );
                                                return `${formattedFirstDate} - ${formattedLastDate}`;
                                            }
                                        }
                                        const date = new Date(value);
                                        return date.toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "short",
                                                year: "numeric",
                                            },
                                        );
                                    }}
                                />
                            }
                        />
                        <Area
                            dataKey="wbtc"
                            type="linear"
                            fill="var(--color-wbtc)"
                            fillOpacity={0.4}
                            stroke="var(--color-wbtc)"
                            stackId="a"
                        />
                        <Area
                            dataKey="tbtc"
                            type="linear"
                            fill="var(--color-tbtc)"
                            fillOpacity={0.4}
                            stroke="var(--color-tbtc)"
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
        </Card>
    );
}
