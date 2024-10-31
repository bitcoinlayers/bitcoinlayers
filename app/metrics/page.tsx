import Hero from "@/components/hero";
import LayersAggregatedTVLChart from "@/components/charts/aggregated-tvl/layers";
import StakingAggregatedTVLChart from "@/components/charts/aggregated-tvl/staking";
import BridgesAggregatedTVLChart from "@/components/charts/aggregated-tvl/bridges";

export default function ChartsPage() {
    return (
        <div className="mx-auto">
            <Hero
                title="Metrics"
                description="Not all metrics are made equal."
            />
            <div className="mb-12 w-full lg:max-w-5xl mx-auto">
                <LayersAggregatedTVLChart />
            </div>
            <div className="mb-12 w-full lg:max-w-5xl mx-auto">
                <StakingAggregatedTVLChart />
            </div>
            <div className="mb-12 w-full lg:max-w-5xl mx-auto">
                <BridgesAggregatedTVLChart />
            </div>
        </div>
    );
}
