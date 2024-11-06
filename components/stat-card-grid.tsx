"use client";

import { BitcoinIcon, ArrowLeftRightIcon } from "lucide-react";
import StatCard from "@/components/stat-card";
import useGetBalancesHistoricalBylayerBitcoinonly from "@/hooks/use-get-layertvl-historical-bitcoinonly";
import useGetLayertvlCurrentAll from "@/hooks/use-get-layertvl-current-all";

export default function StatCardGrid() {
    const { data } = useGetLayertvlCurrentAll();

    const totalTVL =
        data?.reduce((sum, item) => sum + item.total_amount, 0) || 0;
    const formattedTVL = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(totalTVL);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
                title="Total Value Locked"
                subtitle="in sidechain & L2 protocols"
                value={formattedTVL}
                change={0}
                symbol={<BitcoinIcon className="h-4" />}
            />
            <StatCard
                title="Total transactions"
                subtitle="on layered protocols"
                isComingSoon
                change={0}
                symbol={<ArrowLeftRightIcon className="h-4" />}
            />
            <StatCard
                title="Avg Transaction Fee"
                subtitle="paid for layer transactions"
                isComingSoon
                change={0}
                symbol={<BitcoinIcon className="h-4" />}
            />
            <StatCard
                title="Active addressess"
                subtitle="on layered protocols"
                isComingSoon
                change={0}
                symbol={<BitcoinIcon className="h-4" />}
            />
        </div>
    );
}
