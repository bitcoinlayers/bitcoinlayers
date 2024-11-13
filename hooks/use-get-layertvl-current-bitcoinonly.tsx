import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    total_amount: number;
    most_recent_date: string;
    layer_name: string;
    layer_slug: string;
}

interface Props {
    queryString?: string;
}

export default function useGetLayertvlCurrentAllBitcoinonly({
    queryString,
}: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_layertvl_current_bitcoinonly${queryString}`
                : "get_layertvl_current_bitcoinonly",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_layertvl_current_bitcoinonly${queryString ?? ""}`,
            );
        },
    });

    return response;
}
