"use client";

import {
    BitcoinIcon,
    ArrowLeftRightIcon,
    NotebookTabsIcon,
    HandCoinsIcon,
} from "lucide-react";
import StatCard from "@/components/stat-card";
import { useQueryState } from "nuqs";
import LayerTvlStatCard from "./layer-tvl-stat-card";

export default function StatCardGrid() {
    const [view] = useQueryState("view");

    const sharedTitles = {
        tvlTitle: "Total BTC locked",
        txTitle: "Total transactions",
        feeTitle: "Avg transaction fee",
        addrTitle: "Active addressess",
    };

    const content = (() => {
        switch (view) {
            case "wrappers":
                return {
                    ...sharedTitles,
                    tvlSubtitle: "in wrapped BTC tokens",
                    txSubtitle: "using wrapped BTC tokens",
                    feeSubtitle: "paid for wrapped BTC tx's",
                    addrSubtitle: "holding wrapped BTC tokens",
                };
            case "layers":
            default:
                return {
                    ...sharedTitles,
                    tvlSubtitle: "in bitcoin layers",
                    txSubtitle: "on bitcoin layers",
                    feeSubtitle: "per BTC tx on bitcoin layers",
                    addrSubtitle: "on bitcoin layers",
                };
        }
    })();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {!view || view === "layers" ? (
                <LayerTvlStatCard />
            ) : (
                <StatCard
                    title={content.tvlTitle}
                    subtitle={content.tvlSubtitle}
                    isComingSoon
                    change={0}
                    symbol={<BitcoinIcon className="h-4" />}
                />
            )}
            <StatCard
                title={content.txTitle}
                subtitle={content.txSubtitle}
                isComingSoon
                change={0}
                symbol={<ArrowLeftRightIcon className="h-4" />}
            />
            <StatCard
                title={content.feeTitle}
                subtitle={content.feeSubtitle}
                isComingSoon
                change={0}
                symbol={<HandCoinsIcon className="h-4" />}
            />
            <StatCard
                title={content.addrTitle}
                subtitle={content.addrSubtitle}
                isComingSoon
                change={0}
                symbol={<NotebookTabsIcon className="h-4" />}
            />
        </div>
    );
}
