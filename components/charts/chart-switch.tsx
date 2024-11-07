"use client";

import { useQueryState } from "nuqs";
import LayersAggregatedTVLChart from "@/components/charts/aggregated-tvl/layers";
import StakingAggregatedTVLChart from "@/components/charts/aggregated-tvl/staking";
import BridgesAggregatedTVLChart from "@/components/charts/aggregated-tvl/bridges";

export default function ChartSwitch() {
    const [view] = useQueryState("view");

    switch (view) {
        case "staking":
            return <StakingAggregatedTVLChart />;
        case "wrappers":
            return <BridgesAggregatedTVLChart />;
        case "layers":
        default:
            return <LayersAggregatedTVLChart />;
    }
}
