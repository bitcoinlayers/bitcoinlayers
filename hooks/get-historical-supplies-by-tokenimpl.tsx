import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Balances {
    network_name: string;
    network_slug: string;
    token_name: string;
    identifier: string;
    amount: number;
    date: string;
    infra_slug: string;
    network_rank: number;
    project_rank: number;
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
