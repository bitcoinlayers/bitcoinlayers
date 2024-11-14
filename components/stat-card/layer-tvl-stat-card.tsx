import useGetLayertvlPercentchange from "@/hooks/use-get-layertvl-percentchange";
import StatCard from "../stat-card";
import { BitcoinIcon } from "lucide-react";

export default function LayerTvlStatCard() {
    const { data } = useGetLayertvlPercentchange();

    const bitcoinLayerData = data?.find(
        (item) => item.layer_name === "Bitcoin Layers Total",
    );

    const totalTVL = bitcoinLayerData?.amount_today || 0;
    const percentChangeMoM = bitcoinLayerData?.percent_change_mom || 0;

    const formattedTVL = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(totalTVL);

    const formattedMoM = Math.round(percentChangeMoM * 100) / 100;

    return (
        <StatCard
            title="Total BTC locked"
            subtitle="in bitcoin layers"
            value={formattedTVL}
            change={formattedMoM}
            symbol={<BitcoinIcon className="h-4" />}
        />
    );
}
