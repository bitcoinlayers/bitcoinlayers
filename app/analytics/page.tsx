"use client";

import { useQueryState } from "nuqs";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import getHistoricalSuppliesByTokenimpl from "@/hooks/get-historical-supplies-by-tokenimpl";
import getHistoricalSuppliesByTokenProject from "@/hooks/get-historical-supplies-by-tokenproject";
import getHistoricalSuppliesByNetwork from "@/hooks/get-historical-supplies-by-network";
import ViewToggleGroup from "@/components/layer/view-toggle-group-analytics";
import getHistoricalSuppliesByStaking from "@/hooks/get-historical-supplies-by-staking";
import getHistoricalSuppliesByLiquidstaking from "@/hooks/get-historical-supplies-by-liquidstaking";

export default function Analytics() {
    const [view] = useQueryState("view", {
        defaultValue: "layers",
    });

    const chartConfig = {
        layers: {
            title: "All Networks",
            description:
                "Total supply of wrapped bitcoin tokens on various layers",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            useDataHook: getHistoricalSuppliesByNetwork,
            itemNameKey: "network_name",
        },
        wrappers: {
            title: "All Wrapped Tokens",
            description: "Total supply of wrapped bitcoin tokens",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            useDataHook: getHistoricalSuppliesByTokenProject,
            itemNameKey: "token_name",
        },
        staking: {
            title: "BTC 'Staking'",
            description:
                "Total amount of BTC deposited in BTC 'staking' protocols",
            chartQueryParam: "staking-chart",
            rangeQueryParam: "staking-range",
            useDataHook: getHistoricalSuppliesByStaking,
            itemNameKey: "token_name",
        },
        liquidstaking: {
            title: "Liquid 'Staking' BTC Tokens",
            description:
                "Total amount of BTC deposited in liquid 'staking' protocols",
            chartQueryParam: "liquidstaking-chart",
            rangeQueryParam: "liquidstaking-range",
            useDataHook: getHistoricalSuppliesByLiquidstaking,
            itemNameKey: "token_name",
        },
    };

    // Resolve config based on the view
    const config = chartConfig[view as keyof typeof chartConfig];

    // Use data hook from the selected config
    const { data, isLoading, error } = config.useDataHook();

    // Render view toggle and chart
    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup showAll />
            <AggregatedTVLChart
                key={data?.length} // Forces re-render on data changes
                title={config.title}
                description={config.description}
                itemNameKey={config.itemNameKey}
                chartQueryParam={config.chartQueryParam}
                rangeQueryParam={config.rangeQueryParam}
                divisionDefaultValue="separate"
                data={data}
                chartHeight="h-64"
            />
        </div>
    );
}
