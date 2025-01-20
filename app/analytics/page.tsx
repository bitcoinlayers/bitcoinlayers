"use client";

import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import ViewToggleGroup from "@/components/layer/view-toggle-group-analytics";
import getHistoricalSuppliesByTokenProject from "@/hooks/get-historical-supplies-by-tokenproject";
import getHistoricalSuppliesByNetwork from "@/hooks/get-historical-supplies-by-network";
import getHistoricalSuppliesByStaking from "@/hooks/get-historical-supplies-by-staking";
import getHistoricalSuppliesByLiquidstaking from "@/hooks/get-historical-supplies-by-liquidstaking";
import { useQueryState } from "nuqs";
import TopGainers from "@/components/top-gainers";

export default function Analytics() {
    const [view] = useQueryState("view", {
        defaultValue: "all",
    });

    const chartConfig = {
        layers: {
            title: "All Networks",
            description:
                "Total supply of wrapped bitcoin tokens on various networks",
            itemNameKey: "network_name",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        wrappers: {
            title: "All Wrapped Tokens",
            description: "Total supply of wrapped bitcoin tokens",
            itemNameKey: "token_name",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            useDataHook: getHistoricalSuppliesByTokenProject,
        },
        staking: {
            title: "BTC 'Staking'",
            description:
                "Total amount of BTC deposited in BTC 'staking' protocols",
            itemNameKey: "token_name",
            chartQueryParam: "staking-chart",
            rangeQueryParam: "staking-range",
            useDataHook: getHistoricalSuppliesByStaking,
        },
        liquidstaking: {
            title: "Liquid 'Staking' BTC Tokens",
            description:
                "Total amount of BTC deposited in liquid 'staking' protocols",
            itemNameKey: "token_name",
            chartQueryParam: "liquidstaking-chart",
            rangeQueryParam: "liquidstaking-range",
            useDataHook: getHistoricalSuppliesByLiquidstaking,
        },
    };

    const layersData = getHistoricalSuppliesByNetwork();
    const wrappersData = getHistoricalSuppliesByTokenProject();
    const stakingData = getHistoricalSuppliesByStaking();
    const liquidstakingData = getHistoricalSuppliesByLiquidstaking();

    const dataMap = {
        layers: layersData.data,
        wrappers: wrappersData.data,
        staking: stakingData.data,
        liquidstaking: liquidstakingData.data,
    };

    return (
        <div className="mx-auto space-y-8">
            {/* <ViewToggleGroup showAll /> */}
            <TopGainers />
            {Object.entries(chartConfig).map(([key, config]) => {
                if (view === "all" || view === key) {
                    return (
                        <AggregatedTVLChart
                            key={key}
                            title={config.title}
                            description={config.description}
                            itemNameKey={
                                config.itemNameKey as
                                    | "network_name"
                                    | "token_name"
                            }
                            chartQueryParam={config.chartQueryParam}
                            rangeQueryParam={config.rangeQueryParam}
                            divisionDefaultValue="separate"
                            data={dataMap[key as keyof typeof dataMap]}
                            chartHeight="h-64"
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}
