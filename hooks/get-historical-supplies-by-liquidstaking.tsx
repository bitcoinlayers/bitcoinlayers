import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balances {
    token_slug: string;
    token_name: string;
    total_balance: number;
    date: string;
    networks: string[];
    network_names: string[];
    token_addresses: string[];
    rank: number;
}

interface Props {
    queryString?: string;
}

export default function getHistoricalSuppliesByLiquidstaking({
    queryString,
}: Props = {}) {
    const response = useQuery<Balances[]>({
        queryKey: [
            queryString
                ? `historical_supplies_by_liquidstaking${queryString}`
                : "historical_supplies_by_liquidstaking",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/historical_supplies_by_liquidstaking${queryString ?? ""}`,
            );
        },
    });

    return response;
}
