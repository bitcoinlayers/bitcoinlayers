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
                ? `adjusted_mappings_ranked${queryString}`
                : "adjusted_mappings_ranked",
        ],
        queryFn: () =>
            fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/adjusted_mappings_ranked${queryString ?? ""}`,
            ),
        staleTime: Infinity,
    });

    return response;
}
