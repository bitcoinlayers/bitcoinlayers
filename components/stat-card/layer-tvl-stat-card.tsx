import useGetLayertvlCurrentAllBitcoinonly from "@/hooks/use-get-layertvl-current-bitcoinonly";
import StatCard from "../stat-card";
import { BitcoinIcon } from "lucide-react";

export default function LayerTvlStatCard() {
    const { data } = useGetLayertvlCurrentAllBitcoinonly();

    const totalTVL =
        data?.reduce((sum, item) => sum + item.total_amount, 0) || 0;
    const formattedTVL = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(totalTVL);

    return (
        <StatCard
            title="Total Value Locked"
            subtitle="in sidechain & L2 protocols"
            value={formattedTVL}
            change={0}
            symbol={<BitcoinIcon className="h-4" />}
        />
    );
}
