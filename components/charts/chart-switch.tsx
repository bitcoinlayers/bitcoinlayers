"use client";

import { useQueryState } from "nuqs";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
// import getHistoricalSuppliesByTokenImpl from "@/hooks/get-historical-supplies-by-tokenimpl";
import getHistoricalSuppliesByTokenProject from "@/hooks/get-historical-supplies-by-tokenproject";
import getHistoricalSuppliesByNetwork from "@/hooks/get-historical-supplies-by-network";

export default function ChartSwitch() {
    const [view] = useQueryState("view", {
        defaultValue: "layers",
    });

    const chartConfig = {
        layers: {
            title: "BTC supply on layers",
            description:
                "Total BTC supply supporting L2s, sidechains, alternative L1s, and more",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        wrappers: {
            title: "BTC supply on layers",
            description:
                "Total BTC supply supporting L2s, sidechains, alternative L1s, and more",
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

    const config = chartConfig[view as keyof typeof chartConfig];
    const { data, isLoading, error } = config.useDataHook();

    return (
        <AggregatedTVLChart
            key={data?.length}
            title={config.title}
            description={config.description}
            // itemNameKey={view === "layers" ? "layer_name" : "infra_name"}
            itemNameKey={view === "layers" ? "network_name" : "token_name"}
            chartQueryParam={config.chartQueryParam}
            rangeQueryParam={config.rangeQueryParam}
            showLegend={false}
            chartHeight="h-64"
            data={data}
        />
    );
}
