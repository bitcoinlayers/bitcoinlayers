import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface MappingRanked {
    network_slug: string;
    network_name: string;
    token_slug: string;
    balance: number;
    balance_rank: number | null;
}

interface Props {
    queryString?: string;
}

export default function useGetMappingsRanked({ queryString }: Props = {}) {
    const response = useQuery<MappingRanked[]>({
        queryKey: [
            queryString
                ? `helper_recent_token_balances_adjustedbynetwork${queryString}`
                : "helper_recent_token_balances_adjustedbynetwork",
        ],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/helper_recent_token_balances_adjustedbynetwork${queryString ?? ""}`,
            ),
        staleTime: Infinity,
    });

    return response;
}
