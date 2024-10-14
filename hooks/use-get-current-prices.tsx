import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Price {
    token_slug: string;
    token_name: string;
    price_usd: number;
    date: string;
}

interface Props {
    queryString?: string;
}

export default function useGetCurrentPrices({ queryString }: Props = {}) {
    const response = useQuery<Price[]>({
        queryKey: [
            queryString
                ? `get_current_prices${queryString}`
                : "get_current_prices",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get_current_prices${queryString ?? ""}`,
            );
        },
    });

    return response;
}
