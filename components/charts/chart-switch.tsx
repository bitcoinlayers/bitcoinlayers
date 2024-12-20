"use client";

import { useQueryState } from "nuqs";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import useGetInfratvlHistoricalStaked from "@/hooks/use-get-infratvl-historical-staked";
import useGetStakingValueHistorical from "@/hooks/use-get-staking-value-historical";
import useGetLendingValueHistorical from "@/hooks/use-get-infratvl-historical-staked";

export default function ChartSwitch() {
    const [view] = useQueryState("view", {
        defaultValue: "layers",
    });

    const chartConfig = {
        staking: {
            title: "BTC deposits",
            description: "Total amount of BTC deposited in staking protocols",
            chartQueryParam: "staking-chart",
            rangeQueryParam: "staking-range",
            useDataHook: useGetStakingValueHistorical,
        },
        liquidstaking: {
            title: "BTC deposits",
            description:
                "Total amount of BTC deposited in third-party staking protocols",
            chartQueryParam: "liquidstaking-chart",
            rangeQueryParam: "liquidstaking-range",
            useDataHook: useGetInfratvlHistoricalStaked,
        },
        lending: {
            title: "BTC deposits",
            description:
                "Total amount of BTC deposited in third-party staking protocols",
            chartQueryParam: "lending-chart",
            rangeQueryParam: "lending-range",
            useDataHook: useGetLendingValueHistorical,
        },
        wrappers: {
            title: "BTC supply on layers",
            description:
                "Total BTC supply supporting L2s, sidechains, alternative L1s, and more",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            useDataHook: useGetInfratvlHistoricalBridge,
        },
        layers: {
            title: "BTC supply on layers",
            description:
                "Total BTC supply supporting L2s, sidechains, alternative L1s, and more",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            useDataHook: useGetInfratvlHistoricalBridge,
        },
        // layers: {
        //     title: "Total BTC locked",
        //     description: "Total amount of BTC locked in bitcoin layers",
        //     chartQueryParam: "layer-chart",
        //     rangeQueryParam: "layer-range",
        //     useDataHook: useGetBalancesHistoricalBylayerBitcoinonly,
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
            itemNameKey={view === "layers" ? "infra_name" : "infra_name"}
            chartQueryParam={config.chartQueryParam}
            rangeQueryParam={config.rangeQueryParam}
            showLegend={false}
            chartHeight="h-64"
            data={data}
        />
    );
}
