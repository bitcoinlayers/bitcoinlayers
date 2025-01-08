import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface Snapshot {
    network_slug: string;
    network_name: string;
    token_slug: string;
    balance: number;
    balance_rank: number | null;
}

interface Props {
    queryString?: string;
}

export default function getCurrentSuppliesByTokenimpl({
    queryString,
}: Props = {}) {
    const response = useQuery<Snapshot[]>({
        queryKey: [
            queryString
                ? `current_supplies_by_tokenimpl${queryString}`
                : "current_supplies_by_tokenimpl",
        ],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/current_supplies_by_tokenimpl${queryString ?? ""}`,
            ),
        staleTime: Infinity,
    });

    return response;
}
