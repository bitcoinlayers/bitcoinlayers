import useGetStakingPercentchange from "@/hooks/use-get-staking-percentchange";
import StatCard from "../stat-card";
import { BitcoinIcon } from "lucide-react";

export default function StakingTvlStatCard() {
    const { data } = useGetStakingPercentchange();

    const bitcoinLayerData = data?.find(
        (item) => item.token_name === "BabylonBTC", //TODO: hardcoded. add others and adjust API view
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
            subtitle="in BTC staking protocols"
            value={formattedTVL}
            change={formattedMoM}
            symbol={<BitcoinIcon className="h-4" />}
        />
    );
}
