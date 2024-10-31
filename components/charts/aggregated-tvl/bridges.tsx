"use client";

import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl";

export default function BridgesAggregatedTVLChart() {
    const { data } = useGetInfratvlHistoricalBridge();
    return (
        <AggregatedTVLChart
            title="Crosschain BTC TVL"
            description="Total amount of value locked in crosschain BTC protocols"
            data={data}
            itemNameKey="infra_name"
            chartQueryParam="bridge-chart"
            rangeQueryParam="bridge-range"
        />
    );
}
