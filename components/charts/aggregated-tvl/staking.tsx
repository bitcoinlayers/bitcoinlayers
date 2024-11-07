"use client";

import useGetInfratvlHistoricalStaked from "@/hooks/use-get-infratvl-historical-staked";
import AggregatedTVLChart from "@/components/charts/aggregated-tvl";

export default function StakingAggregatedTVLChart() {
    const { data } = useGetInfratvlHistoricalStaked();

    return (
        <AggregatedTVLChart
            title="Staking TVL"
            description="Total amount of value locked in staking protocols"
            data={data}
            itemNameKey="infra_name"
            chartQueryParam="staking-chart"
            showDivisionButtons={false}
            showLegend={false}
        />
    );
}
