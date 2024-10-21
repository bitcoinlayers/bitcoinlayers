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
}

export default function useGetBalancesHistoricalBylayerAll({
    queryString,
}: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_tvl_historical_bylayer_all${queryString}`
                : "get_tvl_historical_bylayer_all",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_tvl_historical_bylayer_all${queryString ?? ""}`,
            );
        },
    });

    return response;
}
