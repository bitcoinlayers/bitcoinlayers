import useGetTokentvlPercentchange from "@/hooks/use-get-tokentvl-percentchange";
import StatCard from "../stat-card";
import { BitcoinIcon } from "lucide-react";

export default function LiquidstakingTvlStatCard() {
    const { data } = useGetTokentvlPercentchange();

    const bitcoinLayerData = data?.find(
        (item) => item.token_name === "LiquidStakingTotal",
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
            subtitle="in BTC LSTs"
            value={formattedTVL}
            change={formattedMoM}
            symbol={<BitcoinIcon className="h-4" />}
        />
    );
}
