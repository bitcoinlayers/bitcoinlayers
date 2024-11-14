"use client";

import { useQueryState } from "nuqs";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import useGetInfratvlHistoricalStaked from "@/hooks/use-get-infratvl-historical-staked";

export default function ChartSwitch() {
    const [view] = useQueryState("view");

    switch (view) {
        case "staking":
            return (
                <AggregatedTVLChart
                    title="BTC deposits"
                    description="Total amount of BTC deposited in third-party staking protocols"
                    itemNameKey="infra_name"
                    chartQueryParam="staking-chart"
                    rangeQueryParam="staking-range"
                    useDataHook={useGetInfratvlHistoricalStaked}
                    showLegend={false}
                    chartHeight="h-64"
                />
            );
        case "wrappers":
            return (
                <AggregatedTVLChart
                    title="Crosschain BTC supply"
                    description="Total amount of BTC locked in crosschain BTC protocols"
                    itemNameKey="infra_name"
                    chartQueryParam="bridge-chart"
                    rangeQueryParam="bridge-range"
                    useDataHook={useGetInfratvlHistoricalBridge}
                    showLegend={false}
                    chartHeight="h-64"
                />
            );
        case "layers":
        default:
            return (
                <AggregatedTVLChart
                    title="Total BTC locked"
                    description="Total amount of BTC locked in bitcoin layers"
                    itemNameKey="layer_name"
                    chartQueryParam="layer-chart"
                    rangeQueryParam="layer-range"
                    useDataHook={useGetBalancesHistoricalBylayerBitcoinonly}
                    showLegend={false}
                    chartHeight="h-64"
                />
            );
    }
}
