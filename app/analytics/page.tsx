"use client";

import AggregatedTVLChart from "@/components/charts/aggregated-tvl-chart";
import ViewToggleGroup from "@/components/layer/view-toggle-group-analytics";
import useGetHistoricalSuppliesByTokenimpl from "@/hooks/get-historical-supplies-by-tokenimpl";
import { useQueryState } from "nuqs";

export default function Analytics() {
    const [view] = useQueryState("view", {
        defaultValue: "all",
    });

    const chartConfig = {
        layers: {
            title: "All Networks",
            description:
                "Total supply of wrapped bitcoin tokens on various layers",
            itemNameKey: "network_name",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
            queryString: "",
        },
        wrappers: {
            title: "All Wrapped Tokens",
            description: "Total supply of wrapped bitcoin tokens",
            itemNameKey: "token_name",
            chartQueryParam: "bridge-chart",
            rangeQueryParam: "bridge-range",
            queryString: "?token_type=wrapper",
        },
        staking: {
            title: "BTC 'Staking'",
            description:
                "Total amount of BTC deposited in the BTC 'staking' protocols",
            itemNameKey: "token_name",
            chartQueryParam: "staking-chart",
            rangeQueryParam: "staking-range",
            queryString: "?token_type=staking",
        },
        liquidstaking: {
            title: "Liquid 'Staking' BTC Tokens",
            description:
                "Total amount of BTC deposited in liquid 'staking' protocols",
            itemNameKey: "token_name",
            chartQueryParam: "liquidstaking-chart",
            rangeQueryParam: "liquidstaking-range",
            queryString: "?token_type=liquid_staking",
        },
        // lending: {
        //     title: "Lending Protocols",
        //     description:
        //         "Total amount of BTC deposited in lending protocols, excluding staking",
        //     itemNameKey: "token_name",
        //     chartQueryParam: "lending-chart",
        //     rangeQueryParam: "lending-range",
        //     queryString: "?token_type=lending",
        // },
        // reserve: {
        //     title: "Reserve Tokens",
        //     description: "Total supply of reserve BTC tokens",
        //     itemNameKey: "token_name",
        //     chartQueryParam: "reserve-chart",
        //     rangeQueryParam: "reserve-range",
        //     queryString: "?token_type=reserve",
        // },
    };

    const layersData = useGetHistoricalSuppliesByTokenimpl({
        queryString: chartConfig.layers.queryString,
    });

    const wrappersData = useGetHistoricalSuppliesByTokenimpl({
        queryString: chartConfig.wrappers.queryString,
    });

    const stakingData = useGetHistoricalSuppliesByTokenimpl({
        queryString: chartConfig.staking.queryString,
    });

    const liquidstakingData = useGetHistoricalSuppliesByTokenimpl({
        queryString: chartConfig.liquidstaking.queryString,
    });

    // const lendingData = useGetHistoricalSuppliesByTokenimpl({
    //     queryString: chartConfig.lending.queryString,
    // });

    // const reserveData = useGetHistoricalSuppliesByTokenimpl({
    //     queryString: chartConfig.reserve.queryString,
    // });

    return (
        <div className="mx-auto space-y-8">
            <ViewToggleGroup showAll />
            {Object.entries(chartConfig).map(([key, config]) => {
                const data =
                    key === "layers"
                        ? layersData.data
                        : key === "wrappers"
                          ? wrappersData.data
                          : key === "staking"
                            ? stakingData.data
                            : key === "liquidstaking"
                              ? liquidstakingData.data
                              : [];

                //   : key === "lending"
                //     ? lendingData.data
                //     : reserveData.data;

                return (
                    (view === "all" || view === key) && (
                        <AggregatedTVLChart
                            key={key}
                            title={config.title}
                            description={config.description}
                            itemNameKey={
                                config.itemNameKey as
                                    | "network_name"
                                    | "token_name"
                            }
                            chartQueryParam={config.chartQueryParam}
                            rangeQueryParam={config.rangeQueryParam}
                            divisionDefaultValue="separate"
                            data={data}
                        />
                    )
                );
            })}
        </div>
    );
}
