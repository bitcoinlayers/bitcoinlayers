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

export default function getCurrentPrices({ queryString }: Props = {}) {
    const response = useQuery<Price[]>({
        queryKey: [
            queryString ? `current_prices${queryString}` : "current_prices",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/current_prices${queryString ?? ""}`,
            );
        },
    });

    return response;
}
