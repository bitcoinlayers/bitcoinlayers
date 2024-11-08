"use client";

import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import ViewToggleGroup from "@/components/layer/view-toggle-group";
import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import useGetInfratvlHistoricalStaked from "@/hooks/use-get-infratvl-historical-staked";
import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import { useQueryState } from "nuqs";

export default function Analytics() {
    const [view] = useQueryState("view");

    const showAllCharts = !view || view === "all";

    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup showAll />
            {(showAllCharts || view === "layers") && (
                <AggregatedTVLChart
                    title="Total Value Locked"
                    description="Total amount of BTC locked on bitcoin layers"
                    itemNameKey="layer_name"
                    chartQueryParam="layer-chart"
                    rangeQueryParam="layer-range"
                    divisionDefaultValue="separate"
                    useDataHook={useGetBalancesHistoricalBylayerBitcoinonly}
                />
            )}
            {(showAllCharts || view === "staking") && (
                <AggregatedTVLChart
                    title="Staking TVL"
                    description="Total amount of value locked in staking protocols"
                    itemNameKey="infra_name"
                    chartQueryParam="staking-chart"
                    rangeQueryParam="staking-range"
                    divisionDefaultValue="separate"
                    useDataHook={useGetInfratvlHistoricalStaked}
                />
            )}
            {(showAllCharts || view === "wrappers") && (
                <AggregatedTVLChart
                    title="Crosschain BTC TVL"
                    description="Total amount of value locked in crosschain BTC protocols"
                    itemNameKey="infra_name"
                    chartQueryParam="bridge-chart"
                    rangeQueryParam="bridge-range"
                    divisionDefaultValue="separate"
                    useDataHook={useGetInfratvlHistoricalBridge}
                />
            )}
        </div>
    );
}
