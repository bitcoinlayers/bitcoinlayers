"use client";

import useGetInfratvlHistoricalBridge from "@/hooks/use-get-infratvl-historical-bridge";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl";

export default function BridgesAggregatedTVLChart() {
    const { data } = useGetInfratvlHistoricalBridge();
    return (
        <AggregatedTVLChart
            title="Bridge TVL"
            description="Total amount of value locked in bridging protocols"
            data={data}
            itemNameKey="infra_name"
            chartQueryParam="bridge-chart"
            rangeQueryParam="bridge-range"
        />
    );
}
