import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balances {
    token_implementation: string;
    balance: number;
    date: string;
    network: string;
    network_slug: string;
    network_origin: string;
    network_name: string;
    token_slug: string;
    token_name: string;
    token_address: string;
    rank: number;
}
interface Props {
    queryString?: string;
}

export default function getHistoricalSuppliesByTokenimpl({
    queryString,
}: Props = {}) {
    const response = useQuery<Balances[]>({
        queryKey: [
            queryString
                ? `historical_supplies_by_tokenimpl${queryString}`
                : "historical_supplies_by_tokenimpl",
        ],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/historical_supplies_by_tokenimpl${queryString ?? ""}`,
            ),
        staleTime: Infinity,
    });

    return response;
}
