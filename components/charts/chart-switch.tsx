"use client";

import { useQueryState } from "nuqs";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import HomeChart from "@/components/charts/home-chart";
// import getHistoricalSuppliesByTokenImpl from "@/hooks/get-historical-supplies-by-tokenimpl";
import getHistoricalSuppliesByTokenProject from "@/hooks/get-historical-supplies-by-tokenproject";
import getHistoricalSuppliesByNetwork from "@/hooks/get-historical-supplies-by-network";

export default function ChartSwitch() {
    const [view] = useQueryState("view", {
        defaultValue: "networks",
    });
    const [subView] = useQueryState("subview", {
        defaultValue: "applications",
    });

    // Use subView when view is "more", otherwise use view
    const effectiveView = view === "more" ? subView : view;

    const chartConfig = {
        networks: {
            title: "BTC supply by network",
            description:
                "Total BTC supply supporting bitcoin native protocols, bitcoin sidesystems, alternative L1s, and more",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        sidesystems: {
            title: "BTC supply by network",
            description:
                "Total BTC supply supporting bitcoin native protocols, bitcoin sidesystems, alternative L1s, and more",
            chartQueryParam: "sidesystems-chart",
            rangeQueryParam: "sidesystems-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        integrated: {
            title: "BTC supply by network",
            description:
                "Total BTC supply supporting bitcoin native protocols, bitcoin sidesystems, alternative L1s, and more",
            chartQueryParam: "integrated-chart",
            rangeQueryParam: "integrated-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        "alternative networks": {
            title: "BTC supply by network",
            description:
                "Total BTC supply supporting bitcoin native protocols, bitcoin sidesystems, alternative L1s, and more",
            chartQueryParam: "alternative-chart",
            rangeQueryParam: "alternative-range",
            useDataHook: getHistoricalSuppliesByNetwork,
        },
        wrappers: {
            title: "BTC supply by wrapper",
            description:
                "Total BTC supply supporting bitcoin native protocols, bitcoin sidesystems, alternative L1s, and more",
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

    // Show the new home chart for Bitcoin Native (networks) view
    if (effectiveView === "networks") {
        return <HomeChart />;
    }

    // Return null if no config found for this view
    if (!config) {
        return null;
    }

    return (
        <AggregatedTVLChart
            key={data?.length}
            title={config.title}
            description={config.description}
            // itemNameKey={view === "layers" ? "layer_name" : "infra_name"}
            itemNameKey={effectiveView === "networks" || effectiveView === "integrated" || effectiveView === "sidesystems" || effectiveView === "alternative networks" ? "network_name" : "token_name"}
            chartQueryParam={config.chartQueryParam}
            rangeQueryParam={config.rangeQueryParam}
            showLegend={false}
            chartHeight="h-64"
            data={data}
        />
    );
}
