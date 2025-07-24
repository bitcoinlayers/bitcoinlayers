"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PegChainImplementation } from "@/util/peg_chain_combinations";
import { RiskFactor } from "@/content/props";
import { useMemo, useState } from "react";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { ChevronDown } from "lucide-react";
import { CartesianGrid, XAxis, YAxis, AreaChart, Area } from "recharts";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useQueryState } from "nuqs";
import { useCallback } from "react";
import getHistoricalSuppliesByTokenimpl from "@/hooks/get-historical-supplies-by-tokenimpl";
import getCurrentPrices from "@/hooks/get-current-prices";
import { formatCurrency } from "@/util/formatCurrency";
import ChartFilters from "@/components/charts/chart-filters";
import ComingSoonChart from "@/components/coming-soon-chart";
import SectionAlertComponent from "@/components/section-alert";

interface ProcessedData {
    date: string;
    [key: string]: string | number;
}

type ViewMode = "summary" | "contract" | "supply";

interface PegChainSummaryProps {
    implementation: PegChainImplementation;
}

export default function PegChainSummary({ implementation }: PegChainSummaryProps) {
    
    const [dataExpanded, setDataExpanded] = useState(false);
    const [activeChart, setActiveChart] = useState<"TVL">("TVL");
    const [chartType, setChartType] = useQueryState("peg-chart", {
        defaultValue: "combined",
    });
    const [dateRange, setDateRange] = useQueryState("peg-range", {
        defaultValue: "1y",
    });
    
    // Fetch historical supply data for this specific token on this specific network
    const { data: supplyData, isLoading: supplyLoading } = getHistoricalSuppliesByTokenimpl({
        queryString: `?network_slug=ilike.${implementation.chainSlug}&infra_slug=ilike.${implementation.pegSlug}`,
    });

    const { data: pricesData } = getCurrentPrices();
    const btcPriceData = pricesData?.find(
        (price) => price.token_slug === "btc",
    );
    const currentBTCPrice = btcPriceData ? btcPriceData.price_usd : 0;

    const tokens = useMemo(
        () =>
            chartType === "combined"
                ? ["BTC"]
                : [...new Set(supplyData?.map((item) => item.token_name) || [])],
        [supplyData, chartType],
    );

    const processedData = useMemo(() => {
        if (!supplyData) return [];
        return supplyData.reduce((acc: ProcessedData[], item) => {
            const itemDateUTC = item.date;
            const existingEntry = acc.find(
                (entry) => entry.date === itemDateUTC,
            );
            const tokenKey = chartType === "combined" ? "BTC" : item.token_name;

            if (existingEntry) {
                existingEntry[tokenKey] =
                    ((existingEntry[tokenKey] as number) || 0) + item.amount;
            } else {
                acc.push({ date: itemDateUTC, [tokenKey]: item.amount });
            }
            return acc;
        }, []);
    }, [supplyData, chartType]);

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
                startDate.setMonth(currentDate.getMonth() - 3);
        }

        const filteredData =
            supplyData?.filter((item) => {
                const itemDate = new Date(item.date);
                return itemDate >= startDate && itemDate <= currentDate;
            }) || [];

        const tvl = [
            ...new Set(supplyData?.map((item) => item.identifier) || []),
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
    }, [supplyData, dateRange]);

    const getRiskColor = (riskTier: RiskFactor): "outline" | "default" | "secondary" | "destructive" => {
        switch (riskTier) {
            case RiskFactor.VeryHigh: return "outline";
            case RiskFactor.High: return "outline";
            case RiskFactor.Medium: return "outline";
            case RiskFactor.Low: return "outline";
            default: return "outline";
        }
    };

    const hasData = (processedData && processedData.length > 0) || supplyLoading;

    return (
        <Card className="w-full bg-card">
            <CardHeader className="pb-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold tracking-tight">Custody Mechanism</h2>
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground leading-tight">
                            {implementation.pegName} on {implementation.chainName}
                        </h3>
                        <Badge variant={getRiskColor(implementation.riskTier)} className="text-xs px-2 py-1">
                            {implementation.riskTier} Trust
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Summary */}
                <div className="space-y-2">
                    <div className="text-muted-foreground">
                        {implementation.title}
                    </div>
                    <div className="text-sm leading-relaxed">
                        {parseTextWithLinks(implementation.trustAssumptions)}
                    </div>
                </div>

                {/* Alert Display */}
                {implementation.alert && (
                    <div className="w-full">
                        <SectionAlertComponent alert={implementation.alert} />
                    </div>
                )}

                {/* Data Section Collapsible - Only show for non-Bitcoin native protocols */}
                {implementation.chainCategory !== "BitcoinNative" && (
                    <div className="space-y-2">
                        <button
                            onClick={() => setDataExpanded(!dataExpanded)}
                            disabled={!hasData}
                            className={`inline-flex items-center text-sm font-medium transition-colors ${
                                !hasData
                                    ? "text-muted-foreground cursor-not-allowed opacity-50"
                                    : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                            }`}
                        >
                            View supply data
                            <ChevronDown 
                                className={`ml-1 h-4 w-4 transition-transform ${
                                    dataExpanded ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        
                        {dataExpanded && (
                            <div className="space-y-6">
                                {/* Supply Chart - Same as Layer Reviews */}
                                {(processedData && processedData.length > 0) && (
                                    <div>
                                        <Card className="bg-background" id="data">
                                            <div className="w-full flex flex-col sm:flex-row border-b">
                                                <div className="flex flex-col justify-center items-start py-4 sm:py-7 border-b sm:border-b-0 px-6 sm:w-3/4">
                                                    <div className="text-lg sm:text-xl">BTC Supply</div>
                                                    <div className="text-xs sm:text-sm text-muted-foreground">
                                                        {implementation.pegName} on {implementation.chainName}
                                                    </div>
                                                </div>
                                                <div className="flex flex-row sm:w-1/4">
                                                    <button
                                                        data-active={activeChart === "TVL"}
                                                        className="flex flex-1 flex-col justify-center gap-1 pl-6 py-2 sm:px-6 sm:py-4 text-left even:border-x sm:even:border-x-0 sm:odd:border-l sm:first:border-r data-[active=true]:bg-muted/50"
                                                        onClick={() => setActiveChart("TVL")}
                                                    >
                                                        <span className="text-xs text-muted-foreground md:w-20">
                                                            Supply
                                                        </span>
                                                        <span className="text-xs sm:text-base leading-none">
                                                            {new Intl.NumberFormat("en-US", {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2,
                                                            }).format(total.TVL)}{" "}
                                                            BTC
                                                        </span>
                                                        <div className="text-xs sm:text-sm text-muted-foreground">
                                                            {formatCurrency(total.TVL * currentBTCPrice)}
                                                        </div>
                                                    </button>
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
                                                        <CartesianGrid vertical={false} horizontal={false} />
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
                                                                    labelFormatter={(value, payload) => (
                                                                        <div className="flex flex-row justify-between">
                                                                            <div>
                                                                                {new Date(
                                                                                    value,
                                                                                ).toLocaleDateString("en-US", {
                                                                                    month: "short",
                                                                                    day: "numeric",
                                                                                    year: "numeric",
                                                                                    timeZone: "UTC",
                                                                                })}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    className="w-60 max-h-60 overflow-y-hidden"
                                                                    sort="desc"
                                                                    limit={10}
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
                                                                <ChartLegendContent className="flex lg:justify-center lg:max-h-[4.5rem] lg:overflow-y-auto lg:flex-wrap sm:flex-nowrap overflow-x-auto whitespace-nowrap max-w-full scroll-smooth snap-x snap-start justify-start legend-scrollbar" />
                                                            }
                                                        />
                                                    </AreaChart>
                                                </ChartContainer>
                                                <div className="flex mt-6">
                                                    <ChartFilters
                                                        chartType={chartType}
                                                        setChartType={setChartType}
                                                        dateRange={dateRange}
                                                        setDateRange={setDateRange}
                                                        title="BTC Supply"
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )}

                                {/* Loading states */}
                                {supplyLoading && (
                                    <div className="bg-muted/30 rounded-lg p-4">
                                        <div className="text-sm text-muted-foreground">Loading supply data...</div>
                                    </div>
                                )}

                                {!supplyLoading && (!processedData || processedData.length === 0) && (
                                    <ComingSoonChart />
                                )}
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
} 