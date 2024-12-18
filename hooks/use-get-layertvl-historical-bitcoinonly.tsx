import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    amount: number;
    date: string;
    identifier: string;
    layer_name: string;
    layer_slug: string;
    isLayer: boolean;
    token_name: string;
}

interface Props {
    queryString?: string;
    enabled?: boolean;
}

// Populates Layers TVL charts
export default function useGetBalancesHistoricalBylayerBitcoinonly({
    queryString,
    ...rest
}: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_layertvl_historical_bitcoinonly${queryString}`
                : "get_layertvl_historical_bitcoinonly",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_layertvl_historical_bitcoinonly${queryString ?? ""}`,
            );
        },
        ...rest,
    });

    return response;
}
