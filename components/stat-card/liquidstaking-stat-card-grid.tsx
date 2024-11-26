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
import StakingTvlStatCard from "./staking-tvl-stat-card";
// import LendingTvlStatCard from "./lending-tvl-stat-card";
import LiquidstakingTvlStatCard from "./liquidstaking-tvl-stat-card";
import WrapperTvlStatCard from "./wrapper-tvl-stat-card";

export default function LiquidstakingStatCardGrid() {
    const [view] = "liquidstaking";

    const sharedTitles = {
        tvlTitle: "Total BTC locked",
        txTitle: "Total transactions",
        feeTitle: "Avg transaction fee",
        addrTitle: "Active addresses",
    };

    const content = (() => {
        // switch (view) {
        //     case "wrappers":
        //         return {
        //             ...sharedTitles,
        //             tvlSubtitle: "in wrapped BTC tokens",
        //             txSubtitle: "using wrapped BTC tokens",
        //             feeSubtitle: "per wrapped BTC tx",
        //             addrSubtitle: "holding wrapped BTC tokens",
        //         };
        //     case "staking":
        //         return {
        //             ...sharedTitles,
        //             tvlSubtitle: "in BTC staking protocols",
        //             txSubtitle: "using BTC staking protocols",
        //             feeSubtitle: "per BTC staking tx",
        //             addrSubtitle: "staking BTC",
        //         };
        //     case "liquidstaking":
        return {
            ...sharedTitles,
            tvlSubtitle: "in BTC LSTs",
            txSubtitle: "using BTC LSTs",
            feeSubtitle: "per BTC LST tx",
            addrSubtitle: "using BTC LSTs",
        };
        //     case "lending":
        //         return {
        //             ...sharedTitles,
        //             tvlSubtitle: "in BTC lending protocols",
        //             txSubtitle: "using BTC lending protocols",
        //             feeSubtitle: "per BTC lending tx",
        //             addrSubtitle: "using BTC lending protocols",
        //         };
        //     default:
        //         return {
        //             ...sharedTitles,
        //             tvlSubtitle: "in bitcoin layers",
        //             txSubtitle: "using BTC on bitcoin layers",
        //             feeSubtitle: "per BTC tx on bitcoin layers",
        //             addrSubtitle: "using BTC on bitcoin layers",
        //         };
        // }
    })();

    const TvlStatCard = (() => {
        return <LiquidstakingTvlStatCard />;
    })();

    const TxStatCard = (() => {
        switch (view) {
            case "wrappers":
            case "staking":
            case "liquidstaking":
            case "lending":
                return (
                    <StatCard
                        title={content.txTitle}
                        subtitle={content.txSubtitle}
                        isComingSoon
                        change={0}
                        symbol={<ArrowLeftRightIcon className="h-4" />}
                    />
                );
            default:
                return (
                    <StatCard
                        title={content.txTitle}
                        subtitle={content.txSubtitle}
                        isComingSoon
                        change={0}
                        symbol={<ArrowLeftRightIcon className="h-4" />}
                    />
                );
        }
    })();

    const FeeStatCard = (() => {
        switch (view) {
            case "wrappers":
            case "staking":
            case "liquidstaking":
            case "lending":
                return (
                    <StatCard
                        title={content.feeTitle}
                        subtitle={content.feeSubtitle}
                        isComingSoon
                        change={0}
                        symbol={<HandCoinsIcon className="h-4" />}
                    />
                );
            default:
                return (
                    <StatCard
                        title={content.feeTitle}
                        subtitle={content.feeSubtitle}
                        isComingSoon
                        change={0}
                        symbol={<HandCoinsIcon className="h-4" />}
                    />
                );
        }
    })();

    const AddrStatCard = (() => {
        switch (view) {
            case "wrappers":
            case "staking":
            case "liquidstaking":
            case "lending":
                return (
                    <StatCard
                        title={content.addrTitle}
                        subtitle={content.addrSubtitle}
                        isComingSoon
                        change={0}
                        symbol={<NotebookTabsIcon className="h-4" />}
                    />
                );
            default:
                return (
                    <StatCard
                        title={content.addrTitle}
                        subtitle={content.addrSubtitle}
                        isComingSoon
                        change={0}
                        symbol={<NotebookTabsIcon className="h-4" />}
                    />
                );
        }
    })();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TvlStatCard}
            {TxStatCard}
            {FeeStatCard}
            {AddrStatCard}
        </div>
    );
}
