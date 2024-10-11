import { fetcher } from "@/util/fetcher";
import { useQuery } from "@tanstack/react-query";

export interface CombinedBalance {
    total_amount: number;
    most_recent_date: string;
    layer_name: string;
    layer_slug: string;
}

interface Props {
    queryString?: string;
}

export default function useGetCombinedBalances({ queryString }: Props = {}) {
    const response = useQuery<CombinedBalance[]>({
        queryKey: [
            queryString
                ? `get-current-balances-perlayer${queryString}`
                : "get-current-balances-perlayer",
        ],
        queryFn: () => {
            return fetcher(
                `${process.env.NEXT_PUBLIC_API_URL}/get-current-balances-perlayer${queryString ?? ""}`,
            );
        },
    });

    return response;
}
