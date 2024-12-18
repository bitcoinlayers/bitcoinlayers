"use client";

import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import useGetInfratvlHistoricalStaked from "@/hooks/use-get-infratvl-historical-staked";
import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import { useQueryState } from "nuqs";

export default function Analytics() {
    const [view] = useQueryState("view", {
        defaultValue: "all",
    });

    const chartConfig = {
        layers: {
            title: "Bitcoin layers BTC TVL",
            description: "Total amount of BTC deposited on bitcoin layers",
            itemNameKey: "layer_name",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            useDataHook: useGetBalancesHistoricalBylayerBitcoinonly,
        },
        staking: {
            title: 'Liquid "staking" BTC TVL',
            description:
                'Total amount of BTC deposited in liquid "staking" protocols',
            itemNameKey: "infra_name",
            chartQueryParam: "staking-chart",
            rangeQueryParam: "staking-range",
            useDataHook: useGetInfratvlHistoricalStaked,
        },
        wrappers: {
            title: "Crosschain BTC TVL",
            description:
                "Total amount of BTC deposited in crosschain BTC protocols",
            itemNameKey: "infra_name",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            useDataHook: useGetInfratvlHistoricalBridge,
        },
    };

    const layersData = useGetBalancesHistoricalBylayerBitcoinonly({
        enabled: view === "layers" || view === "all",
    });
    const stakingData = useGetInfratvlHistoricalStaked({
        enabled: view === "staking" || view === "all",
    });
    const wrappersData = useGetInfratvlHistoricalBridge({
        enabled: view === "wrappers" || view === "all",
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
                                      : wrappersData.data
                            }
                        />
                    ),
            )}
        </div>
    );
}
