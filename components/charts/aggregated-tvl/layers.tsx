"use client";

import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl";

export default function LayersAggregatedTVLChart() {
    const { data } = useGetBalancesHistoricalBylayerBitcoinonly();
    return (
        <AggregatedTVLChart
            title="BTC Locked"
            description="Total amount of BTC locked in protocols listed on Bitcoin Layers"
            data={data}
            itemNameKey="layer_name"
            chartQueryParam="layer-chart"
            rangeQueryParam="layer-range"
        />
    );
}
