"use client";

import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl";

export default function LayersAggregatedTVLChart() {
    const { data } = useGetBalancesHistoricalBylayerBitcoinonly();
    return (
        <AggregatedTVLChart
            title="Total Value Locked"
            description="Total amount of BTC locked on bitcoin layers"
            data={data}
            itemNameKey="layer_name"
            chartQueryParam="layer-chart"
            showDivisionButtons={false}
            showLegend={false}
        />
    );
}
