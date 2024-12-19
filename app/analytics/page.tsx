"use client";

import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import ViewToggleGroup from "@/components/layer/view-toggle-group-analytics";
import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import useGetInfratvlHistoricalStaked from "@/hooks/use-get-infratvl-historical-staked";
import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import useGetStakingValueHistorical from "@/hooks/use-get-staking-value-historical";
import { useQueryState } from "nuqs";

export default function Analytics() {
    const [view] = useQueryState("view", {
        defaultValue: "all",
    });

    const chartConfig = {
        layers: {
            title: "All Networks",
            description: "Total supply of wrapped bitcoin tokens on various layers",
            itemNameKey: "layer_name",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            useDataHook: useGetBalancesHistoricalBylayerBitcoinonly,
        },
        wrappers: {
            title: "All Wrapped Tokens",
            description:
                "Total supply of wrapped bitcoin tokens",
            itemNameKey: "infra_name",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            useDataHook: useGetInfratvlHistoricalBridge,
        },
        staking: {
            title: "Babylon Staking",
            description:
                'Total amount of BTC deposited in the Babylon staking protocol',
            itemNameKey: "infra_name",
            chartQueryParam: "staking-chart",
            rangeQueryParam: "staking-range",
            useDataHook: useGetStakingValueHistorical,
        },
        liquidstaking: {
            title: "Liquid Staking BTC Tokens",
            description:
                'Total amount of BTC deposited in liquid staking protocols',
            itemNameKey: "infra_name",
            chartQueryParam: "staking-chart",
            rangeQueryParam: "staking-range",
            useDataHook: useGetInfratvlHistoricalStaked,
        },
    };

    const layersData = useGetBalancesHistoricalBylayerBitcoinonly({
        enabled: view === "layers" || view === "all",
    });
    const wrappersData = useGetInfratvlHistoricalBridge({
        enabled: view === "wrappers" || view === "all",
    });
    const stakingData = useGetStakingValueHistorical({
        enabled: view === "staking" || view === "all",
    });
    const liquidstakingData = useGetInfratvlHistoricalStaked({
        enabled: view === "liquidstaking" || view === "all",
    });

    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup showAll />
            {Object.entries(chartConfig).map(
                ([key, config]) =>
                    (view === "all" || view === key) && (
                        <AggregatedTVLChart
                            key={key}
                            title={config.title}
                            description={config.description}
                            itemNameKey={
                                config.itemNameKey as
                                    | "layer_name"
                                    | "infra_name"
                            }
                            chartQueryParam={config.chartQueryParam}
                            rangeQueryParam={config.rangeQueryParam}
                            divisionDefaultValue="separate"
                            data={
                                key === "layers"
                                    ? layersData.data
                                    : key === "staking"
                                      ? stakingData.data
                                      : key === "wrappers"
                                        ? wrappersData.data
                                        : liquidstakingData.data
                            }
                        />
                    ),
            )}
        </div>
    );
}
