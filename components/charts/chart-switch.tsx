"use client";

import { useQueryState } from "nuqs";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
// import getHistoricalSuppliesByTokenImpl from "@/hooks/get-historical-supplies-by-tokenimpl";
import getHistoricalSuppliesByTokenProject from "@/hooks/get-historical-supplies-by-tokenproject";
import getHistoricalSuppliesByNetwork from "@/hooks/get-historical-supplies-by-network";

export default function ChartSwitch() {
    const [view] = useQueryState("view", {
        defaultValue: "bitcoin-layers",
    });

    // Use view directly since we simplified the structure
    const effectiveView = view;

    const chartConfig = {
        "bitcoin-layers": {
            title: "BTC supply by network",
            description:
                "Total BTC supply supporting bitcoin native protocols and sidesystems",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        "alternative-networks": {
            title: "BTC supply by network",
            description:
                "Total BTC supply supporting alternative L1 networks",
            chartQueryParam: "alternative-chart",
            rangeQueryParam: "alternative-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        wrappers: {
            title: "BTC supply by wrapper",
            description:
                "Total BTC supply supporting wrapper protocols",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            useDataHook: getHistoricalSuppliesByTokenProject,
        },
        // staking: {
        //     title: "BTC deposits",
        //     description: "Total amount of BTC deposited in staking protocols",
        //     chartQueryParam: "staking-chart",
        //     rangeQueryParam: "staking-range",
        //     useDataHook: useGetStakingValueHistorical,
        // },
        // liquidstaking: {
        //     title: "BTC deposits",
        //     description:
        //         "Total amount of BTC deposited in third-party staking protocols",
        //     chartQueryParam: "liquidstaking-chart",
        //     rangeQueryParam: "liquidstaking-range",
        //     useDataHook: useGetInfratvlHistoricalStaked,
        // },
        // lending: {
        //     title: "BTC deposits",
        //     description:
        //         "Total amount of BTC deposited in third-party staking protocols",
        //     chartQueryParam: "lending-chart",
        //     rangeQueryParam: "lending-range",
        //     useDataHook: useGetLendingValueHistorical,
        // },
    };

    // Always call the hook to maintain consistent hook order
    const config = chartConfig[effectiveView as keyof typeof chartConfig];
    const { data, isLoading, error } = config?.useDataHook() || { data: null, isLoading: false, error: null };

    // Return null if no config found for this view
    if (!config) {
        return null;
    }

    return (
        <AggregatedTVLChart
            key={data?.length}
            title={config.title}
            description={config.description}
            itemNameKey={effectiveView === "wrappers" ? "token_name" : "network_name"}
            chartQueryParam={config.chartQueryParam}
            rangeQueryParam={config.rangeQueryParam}
            showLegend={false}
            chartHeight="h-64"
            data={data}
        />
    );
}
