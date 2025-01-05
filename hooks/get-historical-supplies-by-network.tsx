import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balances {
    network_slug: string;
    network_name: string;
    total_balance: number;
    date: string;
    tokens: string[];
    token_names: string[];
}

interface Props {
    queryString?: string;
}

export default function getHistoricalSuppliesByNetwork({
    queryString,
}: Props = {}) {
    const response = useQuery<Balances[]>({
        queryKey: [
            queryString
                ? `historical_supplies_by_network${queryString}`
                : "historical_supplies_by_network",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/historical_supplies_by_network${queryString ?? ""}`,
            );
        },
    });

    return response;
}
