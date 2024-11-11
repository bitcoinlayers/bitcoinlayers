import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balance {
    total_amount: number;
    date: string;
    identifier: string;
    layer_name: string;
    layer_slug: string;
    token_name: string;
}

interface Props {
    queryString?: string;
}

export default function useGetTokentvlHistoricalAll({
    queryString,
}: Props = {}) {
    const response = useQuery<Balance[]>({
        queryKey: [
            queryString
                ? `get_tokentvl_historical_all${queryString}`
                : "get_tokentvl_historical_all",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_tokentvl_historical_all${queryString ?? ""}`,
            );
        },
    });

    return response;
}
