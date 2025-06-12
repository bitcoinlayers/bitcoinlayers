"use client";

import { useQueryState } from "nuqs";
import AggregatedOpcodeChart from "./aggregated-opcode-chart";
// import getHistoricalSuppliesByTokenImpl from "@/hooks/get-historical-supplies-by-tokenimpl";

export default function OpcodeChart() {
    const [view] = useQueryState("view", {
        defaultValue: "networks",
    });
    const [subView] = useQueryState("subview", {
        defaultValue: "applications",
    });

    const chartConfig = {
        networks: {
            title: "Proposed opcodes",
            description:
                "See what developers prefer for a possible bitcoin soft fork",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
        },
        more: {
            title: "Proposed opcodes",
            description:
                "See what developers prefer for a possible bitcoin soft fork",
            chartQueryParam: "layer-chart",
            rangeQueryParam: "layer-range",
        },

        // staking: {
        //     title: "BTC deposits",
        //     description: "Total amount of BTC deposited in staking protocols",
        //     chartQueryParam: "staking-chart",
        //     rangeQueryParam: "staking-range",
        //     useDataHook: useGetStakingValueHistorical,
        // },
        // liquidstaking: {
        //     title: "BTC deposits",
        //     description:
        //         "Total amount of BTC deposited in third-party staking protocols",
        //     chartQueryParam: "liquidstaking-chart",
        //     rangeQueryParam: "liquidstaking-range",
        //     useDataHook: useGetInfratvlHistoricalStaked,
        // },
        // lending: {
        //     title: "BTC deposits",
        //     description:
        //         "Total amount of BTC deposited in third-party staking protocols",
        //     chartQueryParam: "lending-chart",
        //     rangeQueryParam: "lending-range",
        //     useDataHook: useGetLendingValueHistorical,
        // },
    };

    // For the 'more' view, only show the chart if subview is 'opcodes'
    if (view === "more" && subView !== "opcodes") {
        return null;
    }

    const config = chartConfig[view as keyof typeof chartConfig];
    if (!config) return null;

    return (
        <AggregatedOpcodeChart
            title={config.title}
            description={config.description}
            chartHeight="h-64"
        />
    );
}